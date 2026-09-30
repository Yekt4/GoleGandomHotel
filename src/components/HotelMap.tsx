"use client";

import React, { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";

export default function HotelMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !mapRef.current) return;

    let isMounted = true;

    import("leaflet").then((L) => {
      if (!isMounted || !mapRef.current) return;

      // Prevent duplicate init
      if (mapInstanceRef.current) return;

      // Shiraz Farhadi Boutique Hotel coords: 3-rah Namazi, Dastgheib St, Alley 6
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

      // Custom Hotel Marker
      const hotelIcon = L.divIcon({
        className: "custom-hotel-pin",
        html: `
          <div style="background-color: #1e2952; color: #ffffff; padding: 6px 12px; border-radius: 12px; font-weight: bold; font-family: Estedad, sans-serif; font-size: 13px; box-shadow: 0 4px 14px rgba(30,41,82,0.4); display: flex; align-items: center; gap: 6px; border: 2px solid #0096f7;">
            <span style="font-size: 15px;">🏛️</span>
            <span>عمارت بوتیک هتل فرهادی</span>
          </div>
        `,
        iconSize: [170, 36],
        iconAnchor: [85, 18],
      });

      L.marker(hotelCoords, { icon: hotelIcon })
        .addTo(map)
        .bindPopup("<div style='font-family: Estedad, sans-serif; text-align: right; direction: rtl;'><b>بوتیک هتل فرهادی شیراز</b><br>سه‌راه نمازی، خیابان شهید دستغیب، کوچه ۶</div>")
        .openPopup();

      // Nearby Attractions
      const attractions: Array<{ name: string; coords: [number, number]; dist: string }> = [
        {
          name: "حرم مطهر شاهچراغ (ع)",
          coords: [29.6100, 52.5435],
          dist: "۴ دقیقه پیاده",
        },
        {
          name: "مجموعه زندیه و بازار وکیل",
          coords: [29.6158, 52.5458],
          dist: "۸ دقیقه پیاده",
        },
        {
          name: "مسجد نصیرالملک (مسجد صورتی)",
          coords: [29.6085, 52.5510],
          dist: "۱۲ دقیقه پیاده",
        },
      ];

      attractions.forEach((att) => {
        const attIcon = L.divIcon({
          className: "attraction-pin",
          html: `
            <div style="background: #ffffff; color: #1e2952; padding: 4px 10px; border-radius: 12px; font-size: 12px; font-family: Estedad, sans-serif; border: 1px solid #e0ded4; box-shadow: 0 2px 8px rgba(0,0,0,0.1); white-space: nowrap; font-weight: 500;">
              📍 ${att.name}
            </div>
          `,
          iconSize: [140, 26],
          iconAnchor: [70, 13],
        });

        L.marker(att.coords, { icon: attIcon })
          .addTo(map)
          .bindPopup(`<div style='font-family: Estedad, sans-serif; text-align: right; direction: rtl;'><b>${att.name}</b><br>فاصله از عمارت: ${att.dist}</div>`);
      });
    });

    return () => {
      isMounted = false;
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return <div ref={mapRef} className="w-full h-full min-h-[420px] rounded-[12px] z-10" />;
}
