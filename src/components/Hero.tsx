"use client";

import React from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookingDialog } from "./BookingDialog";

export function Hero() {
  return (
    <section
      id="home"
      className="relative w-full h-screen min-h-[580px] flex flex-col justify-between items-center overflow-hidden bg-[#0a1120]"
    >
      {/* Full-Bleed Luminous Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/images/hero.jpg"
          alt="عمارت تاریخی بوتیک هتل فرهادی شیراز"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-[1.01]"
        />
        {/* Whisper-Thin Cinematic Scrim - Lets the photography shine */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/15 to-black/60" />
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

      {/* Subtle Scroll Hint */}
      <div className="relative z-10 pb-6">
        <a
          href="#story"
          aria-label="رفتن به بخش داستان عمارت"
          className="text-white/60 hover:text-white transition-colors"
        >
          <ChevronDown className="w-5 h-5 animate-pulse" />
        </a>
      </div>
    </section>
  );
}
