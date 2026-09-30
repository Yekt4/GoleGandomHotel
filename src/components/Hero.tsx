"use client";

import React from "react";
import Image from "next/image";
import { Phone, MessageCircle, MapPin, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookingDialog } from "./BookingDialog";

export function Hero() {
  return (
    <section id="home" className="relative w-full min-h-[92vh] sm:min-h-screen flex flex-col justify-between overflow-hidden bg-[#0f172a]">
      {/* Full-Bleed Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/images/hero.jpg"
          alt="نمای هوایی فول ایمیج عمارت تاریخی بوتیک هتل فرهادی شیراز"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 animate-in fade-in zoom-in-105 duration-1000"
        />
        {/* Cinematic Film-Grade Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/55 to-[#0f172a]/40" />
      </div>

      {/* Floating Persian Logo Seal (Top Center/Right) */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 pt-8 flex items-center justify-between">
        <div className="flex items-center gap-3 bg-white/90 backdrop-blur-md px-4 py-2 rounded-[14px] border border-white/40 shadow-lg">
          <div className="relative w-10 h-10 rounded-full overflow-hidden bg-white">
            <Image
              src="/images/logo.jpg"
              alt="نشان اصالت عمارت فرهادی"
              fill
              sizes="40px"
              className="object-contain"
            />
          </div>
          <div className="text-right">
            <span className="block text-xs font-bold text-[#172554]">عمارت تاریخی فرهادی</span>
            <span className="text-[10px] text-[#475569]">بافت تاریخی شیراز، سه‌راه نمازی</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-2">
          <Badge className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-md border border-white/30 rounded-[12px] px-3.5 py-1.5 text-xs font-normal">
            مرمت اصیل دوران قاجار و پهلوی
          </Badge>
        </div>
      </div>

      {/* Main Hero Center Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 py-16 flex flex-col items-start text-right">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-[#172554]/80 text-[#93c5fd] backdrop-blur-md px-4 py-1.5 rounded-[12px] border border-[#93c5fd]/30 text-xs sm:text-sm font-medium mb-6">
            <span>✨</span>
            <span>تجربه زندگی در عمارتی با بیش از یک قرن شکوه و آرامش</span>
          </div>

          <h1 className="text-[36px] sm:text-[54px] lg:text-[64px] font-bold leading-[46px] sm:leading-[68px] lg:leading-[78px] text-white tracking-[-1px] mb-6 drop-shadow-md">
            آرامش اصیل ایرانی در{" "}
            <span className="text-[#60a5fa] block sm:inline font-black">
              بوتیک هتل فرهادی شیراز
            </span>
          </h1>

          <p className="text-base sm:text-xl lg:text-2xl leading-8 sm:leading-10 text-white/90 font-light mb-10 max-w-2xl drop-shadow">
            حیاط مرکزی با حوض فیروزه‌ای، رقص نور هفت‌رنگ شیشه‌های ارسی و چشم‌انداز اختصاصی بام به گنبد زرین شاهچراغ (ع).
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <BookingDialog
              trigger={
                <Button className="bg-[#172554] hover:bg-[#0f172a] text-white border-2 border-white/30 rounded-[12px] h-14 px-8 text-base sm:text-lg font-bold gap-3 shadow-xl transition-all hover:scale-102 cursor-pointer">
                  <Phone className="w-5 h-5 text-[#60a5fa]" />
                  تماس برای رزرو عمارت
                </Button>
              }
            />

            <a
              href="https://wa.me/989170000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 h-14 px-8 rounded-[12px] bg-[#25D366] hover:bg-[#20ba59] text-white text-base sm:text-lg font-bold transition-all shadow-xl hover:scale-102"
            >
              <MessageCircle className="w-5 h-5" />
              رزرو مستقیم در واتس‌اپ
            </a>

            <a
              href="#rooms"
              className="inline-flex items-center justify-center h-14 px-7 rounded-[12px] bg-white/15 hover:bg-white/25 backdrop-blur-md text-white text-base font-medium transition-colors border border-white/30"
            >
              مشاهده اتاق‌های عمارت
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Key Highlights Overlay */}
      <div className="relative z-10 w-full bg-gradient-to-t from-[#0f172a] via-[#0f172a]/90 to-transparent pt-10 pb-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-white">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-4 rounded-[12px] border border-white/15">
              <span className="text-3xl font-extrabold text-[#60a5fa]">۱۴</span>
              <div className="text-right">
                <strong className="block text-sm font-semibold">اتاق و سوئیت</strong>
                <span className="text-xs text-white/70">با هویت معماری قاجار</span>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-4 rounded-[12px] border border-white/15">
              <span className="text-3xl font-extrabold text-[#60a5fa]">۴</span>
              <div className="text-right">
                <strong className="block text-sm font-semibold">دقیقه پیاده</strong>
                <span className="text-xs text-white/70">تا بارگاه شاهچراغ (ع)</span>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-4 rounded-[12px] border border-white/15">
              <span className="text-3xl font-extrabold text-[#60a5fa]">۱</span>
              <div className="text-right">
                <strong className="block text-sm font-semibold">تالار آینه نفیس</strong>
                <span className="text-xs text-white/70">با ارسی‌های رنگارنگ</span>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-4 rounded-[12px] border border-white/15">
              <span className="text-3xl font-extrabold text-[#60a5fa]">۲۴/۷</span>
              <div className="text-right">
                <strong className="block text-sm font-semibold">پذیرش شبانه‌روزی</strong>
                <span className="text-xs text-white/70">پاسخگویی سریع و میزبانی ۲۴ ساعته</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
