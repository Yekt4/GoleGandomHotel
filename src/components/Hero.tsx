"use client";

import React from "react";
import Image from "next/image";
import { Phone, MessageCircle, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookingDialog } from "./BookingDialog";

export function Hero() {
  return (
    <section id="home" className="relative pt-6 pb-16 md:pt-10 md:pb-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top Badges & Persian Intro */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2">
            <Badge className="bg-[#fcfbf7] text-[#1e2952] border border-[#e0ded4] rounded-[12px] px-4 py-1.5 text-xs font-normal flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#0096f7]" />
              <span>عمارت بازسازی‌شده دوران قاجار و پهلوی اول</span>
            </Badge>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 text-xs text-[#555555]">
            <MapPin className="w-3.5 h-3.5 text-[#0096f7]" />
            <span>بافت تاریخی شیراز، سه‌راه نمازی</span>
          </div>
        </div>

        {/* Samara-Style Cinematic Visual Card */}
        <div className="relative w-full h-[460px] sm:h-[580px] lg:h-[640px] rounded-[16px] overflow-hidden border border-[#e0ded4] shadow-md group">
          <Image
            src="/images/hero.jpg"
            alt="نمای هوایی عمارت تاریخی بوتیک هتل فرهادی شیراز با حیاط مرکزی، بادگیرها و حوض فیروزه"
            fill
            priority
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />

          {/* Elegant Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

          {/* Floating Logo Badge top right */}
          <div className="absolute top-5 right-5 sm:top-7 sm:right-7 bg-white/95 backdrop-blur-md p-2 rounded-[16px] border border-white/40 shadow-lg flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-[12px] overflow-hidden bg-white">
              <Image
                src="/images/logo.jpg"
                alt="نشان اصالت عمارت فرهادی"
                fill
                sizes="48px"
                className="object-contain"
              />
            </div>
            <div className="text-right pr-1 pl-2">
              <span className="block text-xs font-bold text-[#1e2952]">عمارت فرهادی</span>
              <span className="text-[10px] text-[#555555]">مرمت اصیل ۱۴۰۲</span>
            </div>
          </div>

          {/* Hero Content Overlay (Bottom) */}
          <div className="absolute bottom-6 right-6 left-6 sm:bottom-10 sm:right-10 sm:left-10 max-w-3xl text-right text-white">
            <h1 className="text-[30px] sm:text-[42px] lg:text-[48px] leading-[38px] sm:leading-[50px] font-normal text-white mb-3 tracking-[-1px]">
              آرامش نوستالژیک ایرانی در{" "}
              <span className="text-[#33abf9] font-medium">عمارت بوتیک هتل فرهادی</span>
            </h1>

            <p className="text-sm sm:text-lg leading-7 sm:leading-8 text-white/90 mb-6 font-light max-w-2xl">
              اقامتی کم‌نظیر در قلب تاریخی شیراز؛ تلفیق رقص نور شیشه‌های هفت‌رنگ ارسی، عطر بهارنارنج حیاط مرکزی و چشم‌انداز طلایی به گنبد شاهچراغ (ع).
            </p>

            {/* CTAs Inside Hero Banner */}
            <div className="flex flex-wrap items-center gap-3">
              <BookingDialog
                trigger={
                  <Button className="bg-[#0096f7] hover:bg-[#0084dc] text-white rounded-[12px] h-12 px-6 text-sm sm:text-base font-medium gap-2 shadow-lg transition-transform hover:-translate-y-0.5 cursor-pointer">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                    تماس برای رزرو عمارت
                  </Button>
                }
              />

              <a
                href="https://wa.me/989170000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-12 px-5 sm:px-6 rounded-[12px] bg-[#25D366] hover:bg-[#20ba59] text-white text-sm sm:text-base font-medium transition-transform hover:-translate-y-0.5 shadow-lg"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                استعلام ظرفیت در واتس‌اپ
              </a>

              <a
                href="#story"
                className="inline-flex items-center justify-center h-12 px-5 rounded-[12px] bg-white/20 hover:bg-white/30 backdrop-blur-md text-white text-sm sm:text-base font-normal transition-colors border border-white/30"
              >
                کشف جزئیات عمارت
              </a>
            </div>
          </div>
        </div>

        {/* 4 Architectural Highlights - Samara Style Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div className="p-4 sm:p-5 rounded-[12px] border border-[#e0ded4] bg-[#fcfbf7] transition-all hover:border-[#0096f7]">
            <span className="block text-2xl sm:text-3xl font-bold text-[#1e2952]">۱۴ اتاق</span>
            <span className="text-xs sm:text-sm text-[#555555]">با طراحی و تزیینات اختصاصی</span>
          </div>

          <div className="p-4 sm:p-5 rounded-[12px] border border-[#e0ded4] bg-[#fcfbf7] transition-all hover:border-[#0096f7]">
            <span className="block text-2xl sm:text-3xl font-bold text-[#0096f7]">۴ دقیقه</span>
            <span className="text-xs sm:text-sm text-[#555555]">پیاده تا حرم مطهر شاهچراغ</span>
          </div>

          <div className="p-4 sm:p-5 rounded-[12px] border border-[#e0ded4] bg-[#fcfbf7] transition-all hover:border-[#0096f7]">
            <span className="block text-2xl sm:text-3xl font-bold text-[#1e2952]">تالار آینه</span>
            <span className="text-xs sm:text-sm text-[#555555]">آینه‌کاری و ارسی قاجاری</span>
          </div>

          <div className="p-4 sm:p-5 rounded-[12px] border border-[#e0ded4] bg-[#fcfbf7] transition-all hover:border-[#0096f7]">
            <span className="block text-2xl sm:text-3xl font-bold text-[#0096f7]">چای‌خانه</span>
            <span className="text-xs sm:text-sm text-[#555555]">صبحانه رایگان و دمنوش شیراز</span>
          </div>
        </div>
      </div>
    </section>
  );
}
