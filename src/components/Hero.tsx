"use client";

import React from "react";
import Image from "next/image";
import { Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookingDialog } from "./BookingDialog";

export function Hero() {
  return (
    <section
      id="home"
      className="relative w-full h-screen min-h-[640px] flex flex-col justify-between items-center overflow-hidden bg-[#0a1120]"
    >
      {/* Cinematic Full-Bleed Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/images/hero.jpg"
          alt="نمای عمارت تاریخی بوتیک هتل فرهادی شیراز"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-[1.02] transition-transform duration-1000 ease-out"
        />
        {/* Soft Multi-Stop Film Scrim */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1120]/70 via-[#0a1120]/30 to-[#0a1120]/80" />
      </div>

      {/* Top Spacer for Navbar Breathing Room */}
      <div className="relative z-10 w-full pt-32 sm:pt-40" />

      {/* Hero Center - Pure, Minimal, Quiet Luxury (Inspired by NILS am See) */}
      <div className="relative z-10 max-w-4xl mx-auto w-full px-6 text-center flex flex-col items-center">
        {/* Delicate Tag */}
        <span className="text-xs sm:text-sm font-medium text-white/80 tracking-widest uppercase mb-4 drop-shadow">
          بوتیک هتل سنتی در بافت کهن شیراز
        </span>

        {/* Grand Typography Title */}
        <h1 className="text-[42px] sm:text-[64px] lg:text-[78px] font-bold leading-[54px] sm:leading-[76px] lg:leading-[92px] text-white tracking-[-1.5px] mb-6 drop-shadow-lg">
          عمارت تاریخی فرهادی
        </h1>

        {/* Short, Poetic Subtitle */}
        <p className="text-base sm:text-xl text-white/90 font-light max-w-xl leading-8 sm:leading-9 mb-10 drop-shadow">
          آرامش اصیل ایرانی در عمارتی از عهد قاجار؛ رقص نور ارسی‌های هفت‌رنگ و چشم‌انداز اختصاصی به گنبد زرین شاهچراغ.
        </p>

        {/* Single Refined Primary Action */}
        <div className="flex items-center justify-center">
          <BookingDialog
            trigger={
              <Button className="h-13 px-9 rounded-full bg-white text-[#172554] hover:bg-slate-100 text-base font-bold shadow-2xl transition-all hover:scale-102 cursor-pointer border border-white/80">
                <Phone className="w-4 h-4 text-[#172554]" />
                رزرو مستقیم عمارت
              </Button>
            }
          />
        </div>
      </div>

      {/* Gentle Minimal Scroll Cue - Replaces Cluttered Bottom Bar */}
      <div className="relative z-10 pb-8 flex flex-col items-center">
        <a
          href="#story"
          className="flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors group cursor-pointer"
        >
          <span className="text-xs font-medium tracking-wider">داستان عمارت</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
