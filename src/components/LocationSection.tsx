"use client";

import React from "react";
import dynamic from "next/dynamic";
import { MapPin, Navigation, ExternalLink } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

// Dynamic import of Leaflet map to prevent SSR issues
const HotelMap = dynamic(() => import("./HotelMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[420px] bg-[#faf8f5] rounded-[16px] flex items-center justify-center text-[#555f6d] text-sm font-light">
      Loading map...
    </div>
  ),
});

export function LocationSection() {
  const { language } = useLanguage();
  const t = translations[language];
  const isEn = language === "en";

  return (
    <section id="location" className="py-24 md:py-36 bg-[#faf8f5] border-t border-[#e8e4db]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className={`max-w-2xl mb-14 md:mb-18 ${isEn ? "text-left" : "text-right"}`}>
          <h2 className="text-[32px] sm:text-[44px] lg:text-[48px] font-bold leading-tight text-[#172554] tracking-tight mb-4">
            {t.location.heading}
          </h2>
          <p className="text-base sm:text-lg text-[#555f6d] leading-relaxed font-light">
            {t.location.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Info Card */}
          <div className={`lg:col-span-5 bg-white p-7 sm:p-8 rounded-[24px] border border-[#dfd9cc] flex flex-col gap-6 shadow-sm ${isEn ? "text-left" : "text-right"}`}>
            {/* Address Box */}
            <div className="flex items-start gap-3.5 pb-5 border-b border-[#dfd9cc]">
              <MapPin className="w-5 h-5 text-[#8c7b64] flex-shrink-0 mt-0.5" />
              <div>
                <strong className="block text-sm text-[#172554] mb-1">{t.location.addressLabel}</strong>
                <p className="text-xs sm:text-sm text-[#555f6d] leading-relaxed font-light">
                  {t.location.address}
                </p>
              </div>
            </div>

            {/* Attractions List */}
            <div>
              <h3 className="text-sm font-semibold text-[#172554] mb-4">
                {t.location.attractionsHeading}
              </h3>
              <div className="flex flex-col gap-3">
                {t.location.attractions.map((att, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between py-2 border-b border-[#f0ece1] last:border-none"
                  >
                    <div>
                      <span className="block text-sm font-medium text-[#172554]">
                        {att.name}
                      </span>
                      <span className="text-xs text-[#8c7b64] font-light">{att.desc}</span>
                    </div>
                    <span
                      className={`text-xs px-2.5 py-1 rounded-full font-medium whitespace-nowrap ${
                        att.highlight
                          ? "bg-[#172554] text-white"
                          : "bg-[#faf8f5] text-[#555f6d] border border-[#dfd9cc]"
                      }`}
                    >
                      {att.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="pt-2 border-t border-[#dfd9cc]">
              <span className="block text-xs text-[#8c7b64] font-medium mb-3">
                {t.location.navDirect}
              </span>
              <div className="flex flex-wrap gap-2">
                <a
                  href="https://maps.google.com/?q=29.6112,52.5442"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#dfd9cc] hover:bg-[#faf8f5] text-xs font-medium text-[#172554] transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#8c7b64]" />
                  {t.location.googleMaps}
                </a>
                <a
                  href="https://neshan.org/maps/@29.6112,52.5442,16z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#dfd9cc] hover:bg-[#faf8f5] text-xs font-medium text-[#172554] transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-[#8c7b64]" />
                  {t.location.neshan}
                </a>
                <a
                  href="https://balad.ir/location?latitude=29.6112&longitude=52.5442"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#dfd9cc] hover:bg-[#faf8f5] text-xs font-medium text-[#172554] transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-[#8c7b64]" />
                  {t.location.balad}
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Map */}
          <div className="lg:col-span-7 h-[420px] sm:h-[500px] rounded-[24px] overflow-hidden border border-[#dfd9cc] shadow-sm relative">
            <HotelMap />
          </div>
        </div>
      </div>
    </section>
  );
}

