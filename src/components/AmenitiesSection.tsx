"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  Building2,
  BusFront,
  Wifi,
  Luggage,
  Sparkles,
  Shirt,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";
import { hotelConfig } from "@/config/hotel.config";

const AMENITY_ICONS = [
  Building2,   // آسانسور و دسترسی آسان
  Wifi,        // اینترنت رایگان محدود
  Luggage,     // صندوق امانات و اتاق چمدان
  Sparkles,    // خدمات خانه‌داری روزانه
  Shirt,       // روم سرویس و لباسشویی
  BusFront,    // سرویس رفت به حرم و کارت بی‌آرتی
  ShieldCheck, // امکانات ایمنی و کمک‌های اولیه
];

export function AmenitiesSection() {
  const { language } = useLanguage();
  const t = translations[language];
  const isEn = language === "en";

  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollCarousel = (direction: "left" | "right") => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const scrollAmount = container.clientWidth * 0.8;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const itemWidth = container.clientWidth * 0.8;
    if (itemWidth <= 0) return;
    const index = Math.round(Math.abs(container.scrollLeft) / itemWidth);
    setActiveIndex(Math.max(0, Math.min(t.amenities.items.length - 1, index)));
  };

  const formatNumber = (num: number) => {
    if (language === "fa") {
      const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
      return String(num).replace(/\d/g, (d) => persianDigits[Number(d)]);
    }
    return String(num);
  };

  return (
    <section id="amenities" className="py-20 md:py-28 bg-[#faf6e8] border-t border-[#e9ddca] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12 ${isEn ? "text-left" : "text-right"}`}>
          <div className="max-w-2xl">
            <h2 className="text-[30px] sm:text-[40px] font-bold text-[#563820] tracking-tight leading-tight mb-3">
              {t.amenities.heading}
            </h2>
            <p className="text-sm sm:text-base text-[#6b5948] leading-relaxed font-light">
              {t.amenities.desc}
            </p>
          </div>

          {/* Carousel Navigation Buttons & Counter */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <div className="text-xs text-[#927344] font-semibold flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border border-[#e3d5bf] shadow-2xs">
              <span>{formatNumber(activeIndex + 1)}</span>
              <span className="text-[#927344]/40">/</span>
              <span>{formatNumber(t.amenities.items.length)}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scrollCarousel(isEn ? "left" : "right")}
                className="w-10 h-10 rounded-full bg-white border border-[#e3d5bf] text-[#563820] flex items-center justify-center shadow-2xs hover:bg-[#faf6e8] active:scale-95 transition-all cursor-pointer hover:border-[#563820]"
                aria-label={isEn ? "Previous service" : "خدمت قبلی"}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => scrollCarousel(isEn ? "right" : "left")}
                className="w-10 h-10 rounded-full bg-white border border-[#e3d5bf] text-[#563820] flex items-center justify-center shadow-2xs hover:bg-[#faf6e8] active:scale-95 transition-all cursor-pointer hover:border-[#563820]"
                aria-label={isEn ? "Next service" : "خدمت بعدی"}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Carousel Track */}
        <div
          ref={carouselRef}
          onScroll={handleScroll}
          style={{ touchAction: "pan-y" }}
          className="flex gap-5 sm:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-5 pt-2 px-1 scrollbar-none [scrollbar-width:none] [-webkit-overflow-scrolling:touch]"
        >
          {t.amenities.items.map((item, index) => {
            const Icon = AMENITY_ICONS[index] || Sparkles;

            return (
              <div
                key={index}
                className="group relative w-[85vw] max-w-[330px] sm:w-[360px] lg:w-[380px] snap-start flex-shrink-0 p-6 sm:p-7 rounded-[26px] bg-white border border-[#e3d5bf] shadow-2xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-[#927344]/50 flex flex-col justify-between min-h-[270px] sm:min-h-[290px]"
              >
                <div>
                  {/* Top Bar: Icon Badge & Detail Tag */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#faf6e8] border border-[#e3d5bf] text-[#563820] flex items-center justify-center transition-all duration-300 group-hover:bg-[#563820] group-hover:text-white group-hover:border-[#563820] group-hover:scale-105 shadow-2xs">
                      <Icon className="w-5 h-5 text-[#cf9f2d] group-hover:text-white transition-colors" />
                    </div>

                    <span className="text-[11px] text-[#927344] font-semibold bg-[#faf6e8] px-3 py-1 rounded-full border border-[#e3d5bf] whitespace-nowrap">
                      {item.detail}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg sm:text-xl font-bold text-[#563820] mb-2.5 transition-colors group-hover:text-[#927344]">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm leading-7 text-[#6b5948] font-light">
                    {item.desc}
                  </p>
                </div>

                {/* Subtle Card Bottom Accent */}
                <div className="pt-4 mt-3 border-t border-[#f1e8cd] flex items-center justify-between text-[11px] text-[#927344]">
                  <span>{hotelConfig.meta.fullNameFa}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#cf9f2d]" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Indicator Dots */}
        <div className="mt-4 flex items-center justify-center gap-1.5">
          {t.amenities.items.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                if (!carouselRef.current) return;
                const container = carouselRef.current;
                const itemWidth = container.clientWidth * 0.8;
                container.scrollTo({
                  left: isEn ? idx * itemWidth : -idx * itemWidth,
                  behavior: "smooth",
                });
                setActiveIndex(idx);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeIndex === idx
                  ? "w-7 bg-[#563820]"
                  : "w-2 bg-[#e3d5bf] hover:bg-[#927344]"
              }`}
              aria-label={`اسلاید ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

