"use client";

import React from "react";
import Image from "next/image";
import { Phone, MapPin } from "lucide-react";
import { BookingDialog } from "./BookingDialog";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-[#fcfbf7] border-t border-[#e0ded4] pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          {/* Brand Info */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#e0ded4] bg-white p-0.5">
                <Image
                  src="/images/logo.jpg"
                  alt="لوگوی عمارت بوتیک هتل فرهادی شیراز"
                  fill
                  sizes="48px"
                  className="object-contain p-0.5"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-[#1e2952]">بوتیک هتل فرهادی شیراز</span>
                <span className="text-xs text-[#555555]">عمارت تاریخی بازسازی‌شده قاجار و پهلوی</span>
              </div>
            </div>

            <p className="text-sm leading-7 text-[#555555] max-w-md">
              عمارتی با بیش از یک قرن پیشینه در بافت فرهنگی-تاریخی شیراز. حیاط مرکزی باصفا با حوض فیروزه، پنجره‌های ارسی با شیشه‌های رنگین، عطر بهارنارنج و میزبانی اصیل شیرازی.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#555f6d]">
              <MapPin className="w-4 h-4 text-[#8c7b64] flex-shrink-0" />
              <span>شیراز، سه‌راه نمازی، خیابان شهید دستغیب، کوچه ۶</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="text-base font-medium text-[#172554] mb-1">دسترسی سریع</h4>
            <ul className="flex flex-col gap-2 text-sm text-[#555f6d]">
              <li>
                <a href="#home" className="hover:text-[#172554] transition-colors">
                  صفحه اصلی
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-[#172554] transition-colors">
                  داستان عمارت
                </a>
              </li>
              <li>
                <a href="#rooms" className="hover:text-[#172554] transition-colors">
                  اتاق‌ها و سوئیت‌ها
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#172554] transition-colors">
                  گالری تصاویر
                </a>
              </li>
              <li>
                <a href="#reels" className="hover:text-[#172554] transition-colors">
                  روایت‌های ویدیویی
                </a>
              </li>
              <li>
                <a href="#amenities" className="hover:text-[#172554] transition-colors">
                  میزبانی و خدمات
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#172554] transition-colors">
                  موقعیت و نقشه
                </a>
              </li>
            </ul>
          </div>

          {/* Rooms */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="text-base font-medium text-[#172554] mb-1">اتاق‌های عمارت</h4>
            <ul className="flex flex-col gap-2 text-sm text-[#555f6d]">
              <li><a href="#rooms" className="hover:text-[#172554]">اتاق تالار آینه</a></li>
              <li><a href="#rooms" className="hover:text-[#172554]">سوئیت رویال شاه‌نشین</a></li>
              <li><a href="#rooms" className="hover:text-[#172554]">اتاق پنج‌دری قاجاری</a></li>
              <li><a href="#rooms" className="hover:text-[#172554]">اتاق دبل سنتی</a></li>
              <li><a href="#rooms" className="hover:text-[#172554]">اتاق ارسی سه‌دری</a></li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="text-base font-medium text-[#172554] mb-1">رزرو مستقیم هتل</h4>
            <p className="text-xs text-[#555f6d] leading-relaxed font-light">
              پذیرش شبانه‌روزی عمارت تاریخی فرهادی:
            </p>
            <div className="flex flex-col gap-2 mt-1">
              <a
                href="tel:07132220000"
                className="text-base font-bold text-[#172554] flex items-center gap-1.5"
                dir="ltr"
              >
                <Phone className="w-4 h-4 text-[#8c7b64]" />
                ۰۷۱-۳۲۲۲۰۰۰۰
              </a>
              <a
                href="tel:09170000000"
                className="text-base font-bold text-[#172554] flex items-center gap-1.5"
                dir="ltr"
              >
                <Phone className="w-4 h-4 text-[#8c7b64]" />
                ۰۹۱۷-۰۰۰-۰۰۰۰
              </a>
            </div>
            <div className="pt-2">
              <BookingDialog
                trigger={
                  <Button className="w-full bg-[#172554] hover:bg-[#0f172a] text-white rounded-full h-10 text-xs sm:text-sm font-medium cursor-pointer">
                    ارتباط با پذیرش
                  </Button>
                }
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#dfd9cc] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8c7b64]">
          <span>
            بوتیک هتل عمارت تاریخی فرهادی شیراز
          </span>
          <span>
            شیراز · بافت کهن زندیه و قاجار
          </span>
        </div>
      </div>
    </footer>
  );
}
