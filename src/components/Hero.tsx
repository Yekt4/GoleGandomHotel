"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookingDialog } from "./BookingDialog";

const HERO_IMAGES = [
  {
    src: "/images/hero.jpg",
    alt: "نمای هوایی و بادگیرهای تاریخی عمارت فرهادی شیراز",
  },
  {
    src: "/images/courtyard.jpg",
    alt: "حیاط باصفا و حوض فیروزه‌ای عمارت تاریخی فرهادی",
  },
  {
    src: "/images/room-mirror-hall.jpg",
    alt: "تالار آینه و انعکاس پنجره‌های ارسی هفت‌رنگ",
  },
  {
    src: "/images/rooftop.jpg",
    alt: "بام سنتی عمارت و چشم‌انداز غروب شیراز کهن",
  },
];

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative w-full h-screen min-h-[580px] flex flex-col justify-between items-center overflow-hidden bg-[#0a1120]"
    >
      {/* Cinematic Crossfading Background Images */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        {HERO_IMAGES.map((img, idx) => {
          const isActive = currentIndex === idx;
          return (
            <div
              key={img.src}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1500 ease-in-out ${
                isActive ? "opacity-100 z-1" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                priority={idx === 0}
                sizes="100vw"
                className={`object-cover object-center transition-transform duration-[7000ms] ease-out ${
                  isActive ? "scale-[1.03]" : "scale-100"
                }`}
              />
            </div>
          );
        })}

        {/* Whisper-Thin Cinematic Scrim */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/65 z-2" />
      </div>

      {/* Top Spacer */}
      <div className="relative z-10 w-full pt-28" />

      {/* Hero Center - Pure, Weightless & Ultra-Minimal */}
      <div className="relative z-10 max-w-2xl mx-auto w-full px-6 text-center flex flex-col items-center">
        {/* The Essence: Hotel Name */}
        <h1 className="text-[44px] sm:text-[68px] lg:text-[88px] font-bold leading-tight text-white tracking-[-1.5px] drop-shadow-md">
          عمارت فرهادی
        </h1>

        {/* Delicate Sub-label */}
        <span className="text-xs sm:text-sm font-light tracking-[0.25em] text-white/85 uppercase mt-3 mb-8 drop-shadow">
          شیراز · قدمت قاجار
        </span>

        {/* Minimal Quiet Action */}
        <BookingDialog
          trigger={
            <Button className="h-11 px-8 rounded-full bg-white/95 hover:bg-white text-[#172554] text-sm font-semibold shadow-xl backdrop-blur-md transition-all hover:scale-105 cursor-pointer">
              رزرو مستقیم
            </Button>
          }
        />
      </div>

      {/* Slide Progress Indicators (Quiet & Understated) */}
      <div
        aria-label="انتخاب تصویر پس‌زمینه"
        className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 z-20 flex items-center gap-2"
      >
        {HERO_IMAGES.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setCurrentIndex(idx)}
            aria-label={`رفتن به تصویر ${idx + 1}`}
            className={`h-1 rounded-full transition-all duration-500 cursor-pointer ${
              currentIndex === idx
                ? "w-7 bg-white shadow-sm"
                : "w-2 bg-white/35 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Subtle Scroll Hint */}
      <div className="relative z-10 pb-6">
        <a
          href="#story"
          aria-label="رفتن به بخش داستان عمارت"
          className="text-white/60 hover:text-white transition-colors block p-2"
        >
          <ChevronDown className="w-5 h-5 animate-pulse" />
        </a>
      </div>
    </section>
  );
}

