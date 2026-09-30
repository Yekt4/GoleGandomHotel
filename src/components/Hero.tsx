"use client";

import React from "react";
import Image from "next/image";
import { Phone, MessageCircle, ChevronDown, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookingDialog } from "./BookingDialog";

export function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-[94vh] lg:min-h-screen flex flex-col justify-between overflow-hidden bg-[#0a1120]"
    >
      {/* Cinematic Full-Bleed Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/images/hero.jpg"
          alt="نمای هوایی عمارت تاریخی بوتیک هتل فرهادی شیراز"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-[1.02] transition-transform duration-1000 ease-out"
        />
        {/* Multi-Stop Quiet Luxury Gradient Scrim */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1120]/75 via-[#0a1120]/45 to-[#0a1120]/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(10,17,32,0.5)_100%)]" />
      </div>

      {/* Top Spacer for floating Navbar breathing room */}
      <div className="relative z-10 w-full pt-28 sm:pt-36" />

      {/* Hero Center Content - Restrained, Elegant, Calm */}
      <div className="relative z-10 max-w-5xl mx-auto w-full px-6 sm:px-8 text-center flex flex-col items-center">
        {/* Subtle Architectural Eyebrow */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 sm:mb-8 text-white/90">
          <span className="w-1.5 h-1.5 rounded-full bg-[#60a5fa] animate-pulse" />
          <span className="text-xs sm:text-sm font-medium tracking-wide">
            بافت کهن شیراز · میراث ماندگار قاجار و پهلوی
          </span>
        </div>

        {/* Grand Typography Title */}
        <h1 className="text-[38px] sm:text-[56px] lg:text-[68px] font-bold leading-[50px] sm:leading-[72px] lg:leading-[84px] text-white tracking-[-1px] mb-6 drop-shadow-md max-w-4xl">
          شکوه تاریخ و آرامش اصیل ایرانی در{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#93c5fd] via-white to-[#60a5fa] font-extrabold block sm:inline">
            عمارت فرهادی
          </span>
        </h1>

        {/* Poetic Subtitle */}
        <p className="text-base sm:text-xl leading-8 sm:leading-10 text-white/85 font-light mb-10 max-w-2xl drop-shadow">
          حیاط مرکزی با حوض فیروزه‌ای، رقص نور هفت‌رنگ شیشه‌های ارسی و چشم‌انداز اختصاصی بام به گنبد زرین شاهچراغ (ع).
        </p>

        {/* Actions - Restrained Luxury CTA Pair */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <BookingDialog
            trigger={
              <Button className="w-full sm:w-auto min-w-[200px] h-13 px-8 rounded-full bg-white text-[#172554] hover:bg-slate-100 text-base font-bold shadow-2xl transition-all hover:scale-102 cursor-pointer border border-white/80">
                <Phone className="w-4 h-4 text-[#172554]" />
                رزرو مستقیم عمارت
              </Button>
            }
          />

          <a
            href="https://wa.me/989170000000?text=%D8%B3%D9%84%D8%A7%D9%85%D8%8C%20%D8%AC%D9%87%D8%AA%20%D8%B1%D8%B2%D8%B1%D9%88%20%D8%A7%D9%82%D8%A7%D9%85%D8%AA%20%D8%AF%D8%B1%20%D8%A8%D9%88%D8%AA%DB%8C%DA%A9%20%D9%87%D8%AA%D9%84%20%D9%81%D8%B1%D9%87%D8%A7%D8%AF%DB%8C%20%D8%B4%DB%8C%D8%B1%D8%A7%D8%B2%20%D9%BE%DB%8C%D8%A7%D9%85%20%D9%85%DB%8C%E2%80%8C%D8%AF%D9%87%D9%85."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto min-w-[190px] h-13 px-7 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white text-base font-medium transition-all border border-white/25 hover:border-white/40 flex items-center justify-center gap-2.5 shadow-lg"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>گفتگو در واتس‌اپ</span>
          </a>
        </div>
      </div>

      {/* Refined Bottom Architectural Bar - Single Quiet Elegant Ribbon */}
      <div className="relative z-10 w-full border-t border-white/10 bg-[#0a1120]/60 backdrop-blur-xl py-5 sm:py-6 mt-12 sm:mt-16">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-white divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-white/10">
            <div className="flex items-center justify-center gap-3 pt-3 md:pt-0">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#93c5fd]">۱۴</span>
              <div className="text-right">
                <span className="block text-xs sm:text-sm font-semibold text-white">اتاق و سوئیت</span>
                <span className="text-[11px] text-white/60">با معماری اصیل قاجاری</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 pt-3 md:pt-0">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#93c5fd]">۴</span>
              <div className="text-right">
                <span className="block text-xs sm:text-sm font-semibold text-white">دقیقه پیاده</span>
                <span className="text-[11px] text-white/60">تا بارگاه شاهچراغ (ع)</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 pt-3 md:pt-0">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#93c5fd]">۱</span>
              <div className="text-right">
                <span className="block text-xs sm:text-sm font-semibold text-white">تالار آینه نفیس</span>
                <span className="text-[11px] text-white/60">ارسی‌های پنج‌دری هفت‌رنگ</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 pt-3 md:pt-0">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#93c5fd]">۲۴/۷</span>
              <div className="text-right">
                <span className="block text-xs sm:text-sm font-semibold text-white">پذیرش شبانه‌روزی</span>
                <span className="text-[11px] text-white/60">میزبانی و تشریفات اختصاصی</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
