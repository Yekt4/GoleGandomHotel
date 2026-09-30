"use client";

import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookingDialog } from "./BookingDialog";
import { Sparkles, Compass, ShieldCheck } from "lucide-react";

export function ArchitecturePhilosophy() {
  return (
    <section id="story" className="py-16 md:py-24 bg-[#fcfbf7] border-y border-[#e0ded4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <Badge className="bg-white text-[#1e2952] border border-[#e0ded4] rounded-[12px] px-3.5 py-1 text-xs mb-3">
            معماری و پیشینه تاریخی
          </Badge>
          <h2 className="text-[30px] sm:text-[36px] font-normal leading-[42px] tracking-[-0.5px] text-[#1e2952] mb-4">
            روایتی از هندسه زرین و اصالت معماری ایرانی در قلب شیراز
          </h2>
          <p className="text-base sm:text-lg leading-8 text-[#444444]">
            همانند هندسه نسبت طلایی که در نشان و طاق قوسی عمارت فرهادی تجلی یافته، کل معماری این بنا بر پایه تقارن، نور طبیعی، هوای معتدل حیاط مرکزی و احترام به حریم خصوصی طراحی شده است.
          </p>
        </div>

        {/* Samara-Style Asymmetric Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          {/* Main Large Visual */}
          <div className="lg:col-span-7">
            <div className="relative h-[380px] sm:h-[480px] rounded-[16px] overflow-hidden border border-[#e0ded4] shadow-sm group">
              <Image
                src="/images/courtyard.jpg"
                alt="حیاط مرکزی باصفا با حوض آب فیروزه‌ای و درختان نارنج بوتیک هتل فرهادی شیراز"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 650px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-5 right-5 left-5 text-white">
                <span className="text-xs uppercase tracking-wider text-[#33abf9] block mb-1">
                  قلب تپنده عمارت
                </span>
                <h3 className="text-xl sm:text-2xl font-normal text-white">
                  حیاط مرکزی، حوض فیروزه‌ای و عطر بهارنارنج
                </h3>
              </div>
            </div>
          </div>

          {/* Secondary Stacked Visuals */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="relative h-[225px] rounded-[16px] overflow-hidden border border-[#e0ded4] shadow-xs group">
              <Image
                src="/images/detail-orsi.jpg"
                alt="جزئیات پنجره‌های ارسی چوبی و تابش نور رنگی خورشید بر دیوارهای خشتی"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 450px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 right-4 text-white">
                <span className="text-xs text-[#33abf9] block">هنر دست استادکاران</span>
                <span className="text-base font-normal">ارسی‌های گره‌چینی و شیشه‌های هفت‌رنگ</span>
              </div>
            </div>

            <div className="relative h-[225px] rounded-[16px] overflow-hidden border border-[#e0ded4] shadow-xs group">
              <Image
                src="/images/rooftop.jpg"
                alt="بام سنتی هتل فرهادی با چشم‌انداز گنبد شاهچراغ در شب"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 450px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 right-4 text-white">
                <span className="text-xs text-[#33abf9] block">دید ۳۶۰ درجه تاریخی</span>
                <span className="text-base font-normal">بام مشرف به گنبد طلایی شاهچراغ (ع)</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pillars of Experience */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-7 rounded-[14px] border border-[#e0ded4]">
            <div className="w-12 h-12 rounded-[12px] bg-[#e6f5fe] text-[#0096f7] flex items-center justify-center mb-5">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-medium text-[#1e2952] mb-2">هندسه طلایی و آرامش اقلیم</h3>
            <p className="text-sm leading-6 text-[#555555]">
              طراحی طاق‌ها، ایوان‌ها و ارتفاع سقف‌ها متناسب با زاویه تابش خورشید شیراز بوده تا در تمامی فصول، فضایی معتدل، مطبوع و پرنور مهیا باشد.
            </p>
          </div>

          <div className="bg-white p-7 rounded-[14px] border border-[#e0ded4]">
            <div className="w-12 h-12 rounded-[12px] bg-[#e6f5fe] text-[#0096f7] flex items-center justify-center mb-5">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-medium text-[#1e2952] mb-2">آینه‌کاری و چوب‌تراشی قاجار</h3>
            <p className="text-sm leading-6 text-[#555555]">
              هزاران قطعه آینه دست‌تراش با نقوش اسلیمی و درب‌های چوبی اصیل با کلون‌های کهن، تجربه‌ای تکرارنشدنی از زندگی در عمارتی اشرافی را بازآفرینی می‌کنند.
            </p>
          </div>

          <div className="bg-white p-7 rounded-[14px] border border-[#e0ded4]">
            <div className="w-12 h-12 rounded-[12px] bg-[#e6f5fe] text-[#0096f7] flex items-center justify-center mb-5">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-medium text-[#1e2952] mb-2">امکانات استاندارد هتلی</h3>
            <p className="text-sm leading-6 text-[#555555]">
              علیرغم حفظ کامل بافت سنتی، تمامی اتاق‌ها مجهز به سیستم‌های سرمایش/گرمایش مدرن، سرویس بهداشتی و حمام استاندارد، و عایق‌های باکیفیت صوتی هستند.
            </p>
          </div>
        </div>

        {/* Section CTA */}
        <div className="mt-12 text-center">
          <BookingDialog
            trigger={
              <Button className="bg-[#0096f7] hover:bg-[#0084dc] text-white rounded-[12px] h-12 px-8 text-base font-medium">
                تماس جهت رزرو و استعلام اتاق‌های عمارت
              </Button>
            }
          />
        </div>
      </div>
    </section>
  );
}
