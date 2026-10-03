"use client";

import React, { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import { useLanguage } from "@/context/LanguageContext";

export const ATTRACTIONS_DATA = [
  {
    id: 0,
    coords: [29.6096, 52.5432] as [number, number],
    nameFa: "حرم مطهر حضرت شاهچراغ (ع)",
    nameEn: "Holy Shrine of Shah Cheragh",
    distFa: "۴ دقیقه پیاده",
    distEn: "4 min walk",
    timeFa: "پیاده‌روی مستقیم از کوچه دستغیب",
    timeEn: "Direct walking route via Dastgheib Alley",
    icon: "🕌",
  },
  {
    id: 1,
    coords: [29.6152, 52.5458] as [number, number],
    nameFa: "مجموعه زندیه، بازار و حمام وکیل",
    nameEn: "Zand Complex & Vakil Bazaar",
    distFa: "۸ دقیقه پیاده",
    distEn: "8 min walk",
    timeFa: "گذر از بافت تاریخی زندیه",
    timeEn: "Historic Zand quarter",
    icon: "🏛️",
  },
  {
    id: 2,
    coords: [29.6085, 52.551] as [number, number],
    nameFa: "مسجد نصیرالملک (مسجد صورتی)",
    nameEn: "Nasir al-Mulk Mosque (Pink Mosque)",
    distFa: "۱۲ دقیقه پیاده",
    distEn: "12 min walk",
    timeFa: "گذر از محله تاریخی گود عربان",
    timeEn: "Goud-e Araban quarter",
    icon: "🌸",
  },
  {
    id: 3,
    coords: [29.6178, 52.5448] as [number, number],
    nameFa: "ارگ کریم‌خان زند",
    nameEn: "Arg of Karim Khan",
    distFa: "۵ دقیقه با خودرو",
    distEn: "5 min drive",
    timeFa: "میدان شهدا (توپخانه کهن)",
    timeEn: "Shohada Square",
    icon: "🏰",
  },
  {
    id: 4,
    coords: [29.5392, 52.5898] as [number, number],
    nameFa: "فرودگاه بین‌المللی شیراز",
    nameEn: "Shiraz International Airport",
    distFa: "۲۰ دقیقه با خودرو",
    distEn: "20 min drive",
    timeFa: "مسیر بزرگراه شهید مدرس",
    timeEn: "Via Modarres Expressway",
    icon: "✈️",
  },
];

export const HOTEL_COORDS: [number, number] = [29.6112, 52.5442];

interface HotelMapProps {
  activeAttractionIndex?: number | null;
  onSelectAttraction?: (idx: number | null) => void;
}

export default function HotelMap({
  activeAttractionIndex = null,
  onSelectAttraction,
}: HotelMapProps) {
  const { language } = useLanguage();
  const isEn = language === "en";
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const markersRef = useRef<any[]>([]);
  const hotelMarkerRef = useRef<any>(null);
  const connectionLayersRef = useRef<{
    glow?: any;
    diagonal?: any;
    midMarker?: any;
  }>({});
  const leafletRef = useRef<any>(null);

  // Initialize Map
  useEffect(() => {
    if (typeof window === "undefined" || !mapRef.current) return;

    let isMounted = true;

    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove();
      mapInstanceRef.current = null;
    }

    import("leaflet").then((L) => {
      if (!isMounted || !mapRef.current) return;
      leafletRef.current = L;

      const map = L.map(mapRef.current, {
        scrollWheelZoom: false,
        zoomControl: false, // We'll add custom positioned zoom control
      }).setView(HOTEL_COORDS, 16);

      mapInstanceRef.current = map;

      // Add Zoom Control on safe side
      L.control
        .zoom({
          position: isEn ? "topright" : "topleft",
        })
        .addTo(map);

      // Clean OpenStreetMap Tiles
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: "© OpenStreetMap",
      }).addTo(map);

      const hotelLabel = isEn ? "Farhadi Boutique Hotel" : "بوتیک هتل عمارت فرهادی";
      const hotelAddress = isEn
        ? "Shiraz, Namazi 3-way, Dastgheib St, Alley 6"
        : "شیراز، سه‌راه نمازی، خیابان شهید دستغیب، کوچه ۶";

      // Custom Hotel Marker with pulse indicator
      const hotelIcon = L.divIcon({
        className: "custom-hotel-pin",
        html: `
          <div style="background-color: #172554; color: #ffffff; padding: 7px 16px; border-radius: 9999px; font-weight: 800; font-family: inherit; font-size: 13px; box-shadow: 0 6px 20px rgba(23,37,84,0.45); display: flex; align-items: center; justify-content: center; gap: 8px; border: 2px solid #ffffff; white-space: nowrap; transform: translate(-50%, -50%); cursor: pointer;">
            <span style="display: inline-block; width: 10px; height: 10px; border-radius: 9999px; background: #c59b27; box-shadow: 0 0 10px #c59b27;"></span>
            <span>${hotelLabel}</span>
          </div>
        `,
        iconSize: [0, 0],
      });

      const hotelMarker = L.marker(HOTEL_COORDS, { icon: hotelIcon })
        .addTo(map)
        .bindPopup(
          `<div style="font-family: inherit; text-align: ${isEn ? "left" : "right"}; direction: ${isEn ? "ltr" : "rtl"}; min-width: 200px; padding: 2px;">
            <div style="font-size: 14px; font-weight: 800; color: #172554; margin-bottom: 4px;">${hotelLabel}</div>
            <div style="font-size: 12px; color: #555f6d; line-height: 1.5;">${hotelAddress}</div>
            <div style="margin-top: 8px; display: inline-block; background: #f0ece1; color: #172554; font-size: 11px; font-weight: 700; padding: 2px 8px; border-radius: 10px;">
              ${isEn ? "Heritage Qajar Mansion" : "عمارت تاریخی دوره قاجار"}
            </div>
          </div>`
        );

      hotelMarker.on("click", () => {
        onSelectAttraction?.(null);
      });

      hotelMarkerRef.current = hotelMarker;
      hotelMarker.openPopup();

      // Landmarks Markers
      markersRef.current = [];
      ATTRACTIONS_DATA.forEach((att, idx) => {
        const attName = isEn ? att.nameEn : att.nameFa;
        const attDist = isEn ? att.distEn : att.distFa;
        const attTime = isEn ? att.timeEn : att.timeFa;

        const attIcon = L.divIcon({
          className: `attraction-pin-${idx}`,
          html: `
            <div style="background: #ffffff; color: #172554; padding: 5px 12px; border-radius: 9999px; font-size: 12px; font-family: inherit; border: 1.5px solid #dfd9cc; box-shadow: 0 4px 14px rgba(0,0,0,0.12); white-space: nowrap; font-weight: 600; display: flex; align-items: center; gap: 6px; cursor: pointer; transform: translate(-50%, -50%); transition: transform 0.2s ease;">
              <span>${att.icon}</span>
              <span>${attName}</span>
            </div>
          `,
          iconSize: [0, 0],
        });

        const marker = L.marker(att.coords, { icon: attIcon })
          .addTo(map)
          .bindPopup(
            `<div style="font-family: inherit; text-align: ${isEn ? "left" : "right"}; direction: ${isEn ? "ltr" : "rtl"}; min-width: 180px; padding: 2px;">
              <div style="font-size: 13px; font-weight: 700; color: #172554; margin-bottom: 4px;">${att.icon} ${attName}</div>
              <div style="font-size: 11px; color: #8c7b64; margin-bottom: 6px;">${attTime}</div>
              <div style="display: inline-block; background: #172554; color: #ffffff; padding: 3px 10px; border-radius: 12px; font-size: 11px; font-weight: 700;">${attDist}</div>
            </div>`
          );

        marker.on("click", () => {
          onSelectAttraction?.(idx);
        });

        markersRef.current.push(marker);
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

  // Handle Dynamic Diagonal Path Drawing on Active Attraction
  useEffect(() => {
    const map = mapInstanceRef.current;
    const L = leafletRef.current;
    if (!map || !L) return;

    // Clear previous diagonal paths & midpoint markers
    if (connectionLayersRef.current.glow) {
      map.removeLayer(connectionLayersRef.current.glow);
    }
    if (connectionLayersRef.current.diagonal) {
      map.removeLayer(connectionLayersRef.current.diagonal);
    }
    if (connectionLayersRef.current.midMarker) {
      map.removeLayer(connectionLayersRef.current.midMarker);
    }
    connectionLayersRef.current = {};

    if (
      activeAttractionIndex !== null &&
      activeAttractionIndex !== undefined &&
      ATTRACTIONS_DATA[activeAttractionIndex]
    ) {
      const target = ATTRACTIONS_DATA[activeAttractionIndex];
      const targetCoords = target.coords;

      // 1. Background Halo/Glow Line
      const glowLine = L.polyline([HOTEL_COORDS, targetCoords], {
        color: "#ffffff",
        weight: 7,
        opacity: 0.9,
        lineCap: "round",
      }).addTo(map);

      // 2. Animated Diagonal Polyline
      const diagonalLine = L.polyline([HOTEL_COORDS, targetCoords], {
        color: "#c59b27",
        weight: 4,
        opacity: 0.95,
        className: "animated-diagonal-path",
        lineCap: "round",
      }).addTo(map);

      // 3. Floating Midpoint Distance Badge
      const midCoords: [number, number] = [
        (HOTEL_COORDS[0] + targetCoords[0]) / 2,
        (HOTEL_COORDS[1] + targetCoords[1]) / 2,
      ];

      const midBadge = L.divIcon({
        className: "diagonal-midpoint-badge",
        html: `
          <div style="background: #172554; color: #ffffff; padding: 5px 12px; border-radius: 9999px; font-size: 11px; font-weight: 700; border: 1.5px solid #c59b27; box-shadow: 0 4px 14px rgba(23,37,84,0.45); display: flex; align-items: center; gap: 6px; white-space: nowrap; transform: translate(-50%, -50%);">
            <span style="font-size: 13px;">${target.icon}</span>
            <span>${isEn ? target.distEn : target.distFa}</span>
          </div>
        `,
        iconSize: [0, 0],
      });

      const midMarker = L.marker(midCoords, { icon: midBadge }).addTo(map);

      connectionLayersRef.current = {
        glow: glowLine,
        diagonal: diagonalLine,
        midMarker,
      };

      // 4. Smoothly Pan / Fit Bounds to encompass the diagonal route
      const bounds = L.latLngBounds([HOTEL_COORDS, targetCoords]);
      map.fitBounds(bounds, {
        paddingTopLeft: [70, 70],
        paddingBottomRight: [70, 70],
        maxZoom: 16,
        animate: true,
        duration: 0.8,
      });

      // 5. Open popup on target
      markersRef.current[activeAttractionIndex]?.openPopup();
    } else {
      // Return to Hotel
      map.flyTo(HOTEL_COORDS, 16, {
        animate: true,
        duration: 0.8,
      });
      hotelMarkerRef.current?.openPopup();
    }
  }, [activeAttractionIndex, isEn]);

  return (
    <div
      ref={mapRef}
      className="w-full h-full min-h-[460px] sm:min-h-[540px] lg:min-h-[620px] rounded-[24px] sm:rounded-[28px] z-10"
    />
  );
}
