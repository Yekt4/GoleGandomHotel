"use client";

import React, { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import { useLanguage } from "@/context/LanguageContext";

export default function HotelMap() {
  const { language } = useLanguage();
  const isEn = language === "en";
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !mapRef.current) return;

    let isMounted = true;

    // Remove existing map instance if language changed
    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove();
      mapInstanceRef.current = null;
    }

    import("leaflet").then((L) => {
      if (!isMounted || !mapRef.current) return;

      const hotelCoords: [number, number] = [29.6112, 52.5442];

      const map = L.map(mapRef.current, {
        scrollWheelZoom: false,
        zoomControl: true,
      }).setView(hotelCoords, 16);

      mapInstanceRef.current = map;

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: "© OpenStreetMap",
      }).addTo(map);

      const hotelLabel = isEn ? "Farhadi Boutique Hotel" : "بوتیک هتل فرهادی";
      const hotelAddress = isEn
        ? "Shiraz, Namazi 3-way, Dastgheib St, Alley 6"
        : "شیراز، سه‌راه نمازی، خیابان شهید دستغیب، کوچه ۶";

      // Custom Hotel Marker
      const hotelIcon = L.divIcon({
        className: "custom-hotel-pin",
        html: `
          <div style="background-color: #172554; color: #ffffff; padding: 6px 14px; border-radius: 20px; font-weight: 700; font-family: inherit; font-size: 13px; box-shadow: 0 4px 16px rgba(23,37,84,0.35); display: flex; align-items: center; justify-content: center; gap: 6px; border: 1.5px solid #ffffff; white-space: nowrap;">
            <span>${hotelLabel}</span>
          </div>
        `,
        iconSize: [isEn ? 190 : 160, 36],
        iconAnchor: [isEn ? 95 : 80, 18],
      });

      L.marker(hotelCoords, { icon: hotelIcon })
        .addTo(map)
        .bindPopup(
          `<div style="font-family: inherit; text-align: ${isEn ? "left" : "right"}; direction: ${isEn ? "ltr" : "rtl"};"><b>${hotelLabel}</b><br>${hotelAddress}</div>`
        )
        .openPopup();

      // Nearby Attractions
      const attractions = isEn
        ? [
            {
              name: "Shah Cheragh Holy Shrine",
              coords: [29.61, 52.5435] as [number, number],
              dist: "4 min walk",
            },
            {
              name: "Vakil Bazaar & Complex",
              coords: [29.6158, 52.5458] as [number, number],
              dist: "8 min walk",
            },
            {
              name: "Nasir al-Mulk Mosque",
              coords: [29.6085, 52.551] as [number, number],
              dist: "12 min walk",
            },
          ]
        : [
            {
              name: "حرم مطهر شاهچراغ (ع)",
              coords: [29.61, 52.5435] as [number, number],
              dist: "۴ دقیقه پیاده",
            },
            {
              name: "مجموعه زندیه و بازار وکیل",
              coords: [29.6158, 52.5458] as [number, number],
              dist: "۸ دقیقه پیاده",
            },
            {
              name: "مسجد نصیرالملک",
              coords: [29.6085, 52.551] as [number, number],
              dist: "۱۲ دقیقه پیاده",
            },
          ];

      attractions.forEach((att) => {
        const attIcon = L.divIcon({
          className: "attraction-pin",
          html: `
            <div style="background: #ffffff; color: #172554; padding: 4px 10px; border-radius: 14px; font-size: 11px; font-family: inherit; border: 1px solid #dfd9cc; box-shadow: 0 2px 8px rgba(0,0,0,0.08); white-space: nowrap; font-weight: 500;">
              ${att.name}
            </div>
          `,
          iconSize: [isEn ? 160 : 130, 26],
          iconAnchor: [isEn ? 80 : 65, 13],
        });

        const distPrefix = isEn ? "Distance: " : "فاصله از عمارت: ";
        L.marker(att.coords, { icon: attIcon })
          .addTo(map)
          .bindPopup(
            `<div style="font-family: inherit; text-align: ${isEn ? "left" : "right"}; direction: ${isEn ? "ltr" : "rtl"};"><b>${att.name}</b><br>${distPrefix}${att.dist}</div>`
          );
      });
    });

    return () => {
      isMounted = false;
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [language, isEn]);

  return <div ref={mapRef} className="w-full h-full min-h-[420px] rounded-[24px] z-10" />;
}

