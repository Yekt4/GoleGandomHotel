"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export function AmenitiesSection() {
  const { language } = useLanguage();
  const t = translations[language];
  const isEn = language === "en";

  return (
    <section id="amenities" className="py-20 md:py-28 bg-[#faf8f5] border-t border-[#e8e4db]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header - Editorial, Confident */}
        <div className={`max-w-2xl mb-14 md:mb-18 ${isEn ? "text-left" : "text-right"}`}>
          <h2 className="text-[30px] sm:text-[40px] font-bold text-[#172554] tracking-tight leading-tight mb-3">
            {t.amenities.heading}
          </h2>
          <p className="text-base sm:text-lg text-[#555f6d] leading-relaxed font-light">
            {t.amenities.desc}
          </p>
        </div>

        {/* Editorial Grid: Clean separators, elegant typography */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 ${isEn ? "text-left" : "text-right"}`}>
          {t.amenities.items.map((item, index) => (
            <div
              key={index}
              className="pt-5 border-t border-[#dfd9cc] flex flex-col justify-between"
            >
              <div>
                <span className="text-xs text-[#8c7b64] font-medium block mb-2">
                  {item.detail}
                </span>
                <h3 className="text-lg font-bold text-[#172554] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm leading-7 text-[#555f6d] font-light">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

