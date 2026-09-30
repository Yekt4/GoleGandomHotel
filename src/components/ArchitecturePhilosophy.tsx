"use client";

import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookingDialog } from "./BookingDialog";
import { Sparkles, Compass, ShieldCheck, Phone } from "lucide-react";

export function ArchitecturePhilosophy() {
  return (
    <section id="story" className="py-20 md:py-32 bg-[#f8fafc] border-b border-[#e2e8f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#172554]"></span>
            <span className="text-xs sm:text-sm font-bold tracking-wider text-[#172554] uppercase">
              معماری و پیشینه تاریخی
            </span>
          </div>
          <h2 className="text-[34px] sm:text-[46px] font-bold leading-[44px] sm:leading-[58px] tracking-[-1px] text-[#172554] mb-4">
            روایتی از هندسه زرین و اصالت معماری ایرانی در قلب شیراز
          </h2>
          <p className="text-base sm:text-xl leading-8 sm:leading-9 text-[#475569]">
            همانند هندسه نسبت طلایی که در طاق قوسی و نشان عمارت فرهادی تجلی یافته، کل معماری این بنا بر پایه تقارن، نور طبیعی، هوای معتدل حیاط مرکزی و احترام به حریم آرامش مهمان طراحی شده است.
          </p>
        </div>

        {/* Samara-Style Massive Asymmetric Visual Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          {/* Main Huge Visual */}
          <div className="lg:col-span-8">
            <div className="relative h-[420px] sm:h-[560px] lg:h-[620px] rounded-[24px] overflow-hidden border border-[#e2e8f0] shadow-md group">
              <Image
                src="/images/courtyard.jpg"
                alt="حیاط مرکزی باصفا با حوض آب فیروزه‌ای و درختان نارنج بوتیک هتل فرهادی شیراز"
                fill
                sizes="(max-width: 1024px) 100vw, 70vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 via-[#0f172a]/20 to-transparent" />
              <div className="absolute bottom-8 right-8 left-8 text-white">
                <span className="text-xs uppercase tracking-wider text-[#60a5fa] block mb-2 font-bold">
                  قلب تپنده عمارت فرهادی
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
                  حیاط مرکزی، حوض فیروزه‌ای و شب‌های خنک شیراز
                </h3>
                <p className="text-sm sm:text-base text-white/80 max-w-xl font-light">
                  عطر شکوفه‌های بهارنارنج و ترنم فواره در حوض هشت‌ضلعی کاشی‌کاری‌شده در کنار بادگیرهای کهن.
                </p>
              </div>
            </div>
          </div>

          {/* Secondary Stacked Visuals */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <div className="relative h-[290px] rounded-[20px] overflow-hidden border border-[#e2e8f0] shadow-sm group">
              <Image
                src="/images/detail-orsi.jpg"
                alt="جزئیات پنجره‌های ارسی چوبی و تابش نور رنگی خورشید بر دیوارهای خشتی"
                fill
                sizes="(max-width: 1024px) 100vw, 30vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 right-5 text-white">
                <span className="text-xs text-[#60a5fa] block font-bold">هنر دست استادکاران</span>
                <span className="text-base sm:text-lg font-bold">ارسی‌های گره‌چینی و شیشه‌های هفت‌رنگ</span>
              </div>
            </div>

            <div className="relative h-[290px] rounded-[20px] overflow-hidden border border-[#e2e8f0] shadow-sm group">
              <Image
                src="/images/rooftop.jpg"
                alt="بام سنتی هتل فرهادی با چشم‌انداز گنبد شاهچراغ در شب"
                fill
                sizes="(max-width: 1024px) 100vw, 30vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 right-5 text-white">
                <span className="text-xs text-[#60a5fa] block font-bold">دید ۳۶۰ درجه تاریخی</span>
                <span className="text-base sm:text-lg font-bold">بام مشرف به گنبد طلایی شاهچراغ (ع)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Bleed Image Break (Samara Style) */}
        <div className="relative w-full h-[320px] sm:h-[420px] rounded-[24px] overflow-hidden border border-[#e2e8f0] mb-16 shadow-sm group">
          <Image
            src="/images/cafe.jpg"
            alt="چای‌خانه و کافه سنتی عمارت تاریخی فرهادی شیراز"
            fill
            sizes="100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#172554]/90 via-[#172554]/60 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-center p-8 sm:p-14 text-white max-w-2xl">
            <span className="text-xs text-[#93c5fd] font-bold tracking-wider uppercase mb-2">
              پذیرایی اصیل شیرازی
            </span>
            <h3 className="text-2xl sm:text-4xl font-bold leading-tight mb-4">
              چای‌خانه و کافه سنتی عمارت فرهادی
            </h3>
            <p className="text-sm sm:text-base text-white/90 leading-7 font-light mb-6">
              سرو فالوده شیرازی اعلا، دمنوش‌های گیاهی کوهستان‌های فارس و چای سماور برنجی در فضای دنج عمارت.
            </p>
            <div>
              <BookingDialog
                trigger={
                  <Button className="bg-white hover:bg-slate-100 text-[#172554] rounded-[12px] h-12 px-6 font-bold shadow-md cursor-pointer">
                    رزرو تجربه اقامت در عمارت
                  </Button>
                }
              />
            </div>
          </div>
        </div>

        {/* 3 Pillars of Experience */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-[20px] border border-[#e2e8f0] shadow-xs">
            <div className="w-13 h-13 rounded-[14px] bg-[#eff6ff] text-[#172554] flex items-center justify-center mb-6">
              <Compass className="w-7 h-7 text-[#2563eb]" />
            </div>
            <h3 className="text-xl font-bold text-[#172554] mb-3">هندسه طلایی و اقلیم پایدار</h3>
            <p className="text-sm leading-7 text-[#475569]">
              طراحی طاق‌ها، ایوان‌ها و ارتفاع سقف‌ها متناسب با زاویه تابش خورشید شیراز بوده تا در تمامی فصول، فضایی معتدل، مطبوع و پرنور مهیا باشد.
            </p>
          </div>

          <div className="bg-white p-8 rounded-[20px] border border-[#e2e8f0] shadow-xs">
            <div className="w-13 h-13 rounded-[14px] bg-[#eff6ff] text-[#172554] flex items-center justify-center mb-6">
              <Sparkles className="w-7 h-7 text-[#2563eb]" />
            </div>
            <h3 className="text-xl font-bold text-[#172554] mb-3">آینه‌کاری و چوب‌تراشی قاجار</h3>
            <p className="text-sm leading-7 text-[#475569]">
              هزاران قطعه آینه دست‌تراش با نقوش اسلیمی و درب‌های چوبی اصیل با کلون‌های کهن، تجربه‌ای تکرارنشدنی از زندگی در عمارتی اشرافی را بازآفرینی می‌کنند.
            </p>
          </div>

          <div className="bg-white p-8 rounded-[20px] border border-[#e2e8f0] shadow-xs">
            <div className="w-13 h-13 rounded-[14px] bg-[#eff6ff] text-[#172554] flex items-center justify-center mb-6">
              <ShieldCheck className="w-7 h-7 text-[#2563eb]" />
            </div>
            <h3 className="text-xl font-bold text-[#172554] mb-3">امکانات استاندارد هتلی</h3>
            <p className="text-sm leading-7 text-[#475569]">
              علیرغم حفظ کامل بافت سنتی، تمامی اتاق‌ها مجهز به سیستم‌های سرمایش/گرمایش مدرن، سرویس بهداشتی و حمام استاندارد، و عایق‌های باکیفیت صوتی هستند.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
