"use client";

import React from "react";
import Image from "next/image";
import { Coffee, Moon, Compass, Sparkles, ArrowLeft, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookingDialog } from "./BookingDialog";

export function ArchitecturePhilosophy() {
  return (
    <section id="story" className="py-24 md:py-36 bg-[#fbfaf7] text-[#172554] border-b border-[#e9e5dc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Sensorial Editorial Invitation - Inspired by NILS am See */}
        <div className="max-w-4xl mx-auto text-center mb-20 sm:mb-28">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#172554]/5 border border-[#172554]/10 text-xs sm:text-sm font-semibold text-[#172554] mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#2563eb]" />
            <span>تجربه زیستن در عمارت تاریخی فرهادی</span>
          </div>

          <h2 className="text-[34px] sm:text-[48px] lg:text-[56px] font-bold leading-[46px] sm:leading-[64px] lg:leading-[72px] tracking-[-1.5px] text-[#172554] mb-8">
            عمارت کهن فرهادی در قلب شیراز؛
            <br className="hidden sm:inline" />
            <span className="text-[#2563eb]"> جایی برای رهایی از شتاب و لمس آرامش اصیل</span>
          </h2>

          <div className="relative p-6 sm:p-10 rounded-[28px] bg-white border border-[#e8e4db] shadow-xs max-w-3xl mx-auto">
            <p className="text-base sm:text-xl lg:text-[22px] leading-8 sm:leading-10 text-[#475569] font-light italic">
              «آن دمِ بی‌دغدغه را مجسم کنید: نشستن در سایه‌سار درخت نارنج، استکانی چای با عطر هل و گلاب، و انوار رنگارنگ آفتاب که از ارسی‌های قاجار بر فرش دستباف فرود می‌آید. صدای زمزمه آب در حوض فیروزه‌ای، بوی خوش خشت و خاک... در عمارت فرهادی شیراز، زندگی اندکی آرام‌تر، دلنشین‌تر و اصیل‌تر جریان دارد.»
            </p>
          </div>
        </div>

        {/* Key Mansion Metrics (Warm Editorial Ribbon) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto mb-20 sm:mb-28 text-center">
          <div className="p-4 rounded-[18px] bg-white border border-[#e8e4db] shadow-xs">
            <span className="block text-2xl sm:text-3xl font-extrabold text-[#172554] mb-1">۱۴</span>
            <span className="block text-xs font-semibold text-[#172554]">اتاق و سوئیت قاجاری</span>
            <span className="text-[11px] text-[#64748b]">با چیدمان اصیل سنتی</span>
          </div>
          <div className="p-4 rounded-[18px] bg-white border border-[#e8e4db] shadow-xs">
            <span className="block text-2xl sm:text-3xl font-extrabold text-[#172554] mb-1">۴</span>
            <span className="block text-xs font-semibold text-[#172554]">دقیقه پیاده‌روی</span>
            <span className="text-[11px] text-[#64748b]">تا بارگاه شاهچراغ (ع)</span>
          </div>
          <div className="p-4 rounded-[18px] bg-white border border-[#e8e4db] shadow-xs">
            <span className="block text-2xl sm:text-3xl font-extrabold text-[#172554] mb-1">۱</span>
            <span className="block text-xs font-semibold text-[#172554]">تالار آینه نفیس</span>
            <span className="text-[11px] text-[#64748b]">با ارسی‌های هفت‌رنگ</span>
          </div>
          <div className="p-4 rounded-[18px] bg-white border border-[#e8e4db] shadow-xs">
            <span className="block text-2xl sm:text-3xl font-extrabold text-[#172554] mb-1">۲۴/۷</span>
            <span className="block text-xs font-semibold text-[#172554]">پذیرش شبانه‌روزی</span>
            <span className="text-[11px] text-[#64748b]">پاسخگویی و میزبانی</span>
          </div>
        </div>

        {/* 3 Pillars of The Experience (Inspired by NILS am See Pillars) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 sm:mb-28">
          {/* Pillar 1: Culinary & Cafe */}
          <div className="bg-white rounded-[24px] border border-[#e8e4db] overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
            <div className="relative h-64 overflow-hidden">
              <Image
                src="/images/cafe.jpg"
                alt="چای‌خانه و سفره‌خانه سنتی عمارت فرهادی شیراز"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 right-4 text-white">
                <span className="text-xs font-bold uppercase tracking-wider text-[#93c5fd] block mb-1">
                  طعم و ضیافت شیرازی
                </span>
                <span className="text-xl font-bold">سفره‌خانه و دمنوش‌های حیاط</span>
              </div>
            </div>
            <div className="p-7 flex flex-col justify-between flex-1">
              <div>
                <p className="text-sm leading-7 text-[#475569] mb-4">
                  عطر نان تازه سنگک و سرشیر صبحگاهی در ایوان، استکان چای لیمو و گل‌گاوزبان هنگام عصر، و فالوده اعلای شیرازی دست‌ساز زیر طاق‌های قاجاری.
                </p>
              </div>
              <div className="pt-4 border-t border-[#f1efe9] flex items-center justify-between">
                <span className="text-xs font-bold text-[#172554]">پذیرایی روزانه با عرقیات اصیل</span>
                <Coffee className="w-4 h-4 text-[#2563eb]" />
              </div>
            </div>
          </div>

          {/* Pillar 2: Courtyard & Poolside Calm */}
          <div className="bg-white rounded-[24px] border border-[#e8e4db] overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
            <div className="relative h-64 overflow-hidden">
              <Image
                src="/images/courtyard.jpg"
                alt="حیاط مرکزی با حوض فیروزه‌ای و شب‌های خنک عمارت فرهادی"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 right-4 text-white">
                <span className="text-xs font-bold uppercase tracking-wider text-[#93c5fd] block mb-1">
                  خلوت و سکون
                </span>
                <span className="text-xl font-bold">حوض فیروزه‌ای و تخت‌های چوبی</span>
              </div>
            </div>
            <div className="p-7 flex flex-col justify-between flex-1">
              <div>
                <p className="text-sm leading-7 text-[#475569] mb-4">
                  فرصتی کم‌نظیر برای لمیدن بر تخت‌های چوبی حیاط، تماشای فواره آب زلال، مطالعه کتاب در سایه‌سار بادگیر و تماشای ستارگان در شب‌های باصفای شیراز.
                </p>
              </div>
              <div className="pt-4 border-t border-[#f1efe9] flex items-center justify-between">
                <span className="text-xs font-bold text-[#172554]">فضای استراحت و مدیتیشن</span>
                <Moon className="w-4 h-4 text-[#2563eb]" />
              </div>
            </div>
          </div>

          {/* Pillar 3: Historic Shiraz Discovery */}
          <div className="bg-white rounded-[24px] border border-[#e8e4db] overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
            <div className="relative h-64 overflow-hidden">
              <Image
                src="/images/rooftop.jpg"
                alt="چشم‌انداز ۳۶۰ درجه تاریخی بام عمارت فرهادی به گنبد شاهچراغ"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 right-4 text-white">
                <span className="text-xs font-bold uppercase tracking-wider text-[#93c5fd] block mb-1">
                  کشف بافت کهن
                </span>
                <span className="text-xl font-bold">شیرازگردی در ۴ دقیقه‌ای شاهچراغ</span>
              </div>
            </div>
            <div className="p-7 flex flex-col justify-between flex-1">
              <div>
                <p className="text-sm leading-7 text-[#475569] mb-4">
                  قدم زدن پیاده در بافت سنگ‌فرش کهن؛ دسترسی ۴ دقیقه‌ای به بارگاه شاهچراغ (ع)، مسجد نصیرالملک (مسجد صورتی)، حمام و بازار وکیل و باغ‌های نامدار.
                </p>
              </div>
              <div className="pt-4 border-t border-[#f1efe9] flex items-center justify-between">
                <span className="text-xs font-bold text-[#172554]">راهنمای اختصاصی شیرازگردی</span>
                <Compass className="w-4 h-4 text-[#2563eb]" />
              </div>
            </div>
          </div>
        </div>

        {/* Full-Bleed Architectural Craft Break (Samara & NILS am See Fusion) */}
        <div className="relative rounded-[32px] overflow-hidden bg-[#172554] text-white p-8 sm:p-14 lg:p-18 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#93c5fd] bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15">
                اصالت معماری قاجار و پهلوی
              </span>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
                مرمت وفادارانه با دست استادکاران سنتی شیراز
              </h3>
              <p className="text-base sm:text-lg text-white/80 leading-8 font-light max-w-xl">
                تمام ارسی‌ها با تکنیک اصیل گره‌چینی چوب گردو بدون چسب یا میخ بازآفرینی شده‌اند. آینه‌کاری‌های مقرنس تالار شاه‌نشین توسط هنرمندان پیشکسوت شیرازی احیا گشته تا هویت یک قرن پیش با شکوه تام پیش چشمان شما جلوه‌گر باشد.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <BookingDialog
                  trigger={
                    <Button className="h-12 px-7 rounded-full bg-white text-[#172554] hover:bg-slate-100 font-bold text-sm sm:text-base shadow-lg cursor-pointer">
                      رزرو مستقیم عمارت
                    </Button>
                  }
                />
                <a
                  href="#rooms"
                  className="h-12 px-6 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-sm sm:text-base border border-white/20 flex items-center gap-2"
                >
                  <span>مشاهده اتاق‌های عمارت</span>
                  <ArrowLeft className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-80 sm:h-96 rounded-[24px] overflow-hidden border border-white/20 shadow-2xl">
              <Image
                src="/images/detail-orsi.jpg"
                alt="ارسی‌های گره‌چینی و شیشه‌های رنگی قاجار در عمارت فرهادی شیراز"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-5 right-5 left-5 text-white">
                <span className="text-xs font-bold text-[#93c5fd] block mb-1">هنر دست استادکاران</span>
                <span className="text-base font-bold">ارسی‌های پنج‌دری و شیشه‌های دست‌ساز هفت‌رنگ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
