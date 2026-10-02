"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import { BookingDialog } from "./BookingDialog";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-36 bg-white border-t border-[#e8e4db]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Heading - Dignified & Restrained */}
        <div className="max-w-2xl mb-16 md:mb-20 text-right">
          <h2 className="text-[32px] sm:text-[44px] lg:text-[48px] font-bold leading-tight text-[#172554] tracking-tight mb-4">
            پذیرش و ارتباط مستقیم
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-[#555f6d] font-light">
            رزرو بدون واسطه و دریافت راهنمایی اقامت؛ همکاران ما در پذیرش عمارت به صورت شبانه‌روزی پاسخگوی شما هستند.
          </p>
        </div>

        {/* Reception Channels & Essential Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 text-right">
          {/* Direct Lines */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#172554] pb-3 border-b border-[#dfd9cc]">
              راه‌های ارتباط تلفنی و پیام‌رسان
            </h3>

            {/* Landline */}
            <div className="py-3">
              <span className="block text-xs text-[#8c7b64] font-medium mb-1">تلفن ثابت پذیرش</span>
              <a
                href="tel:07132220000"
                className="text-2xl sm:text-3xl font-bold text-[#172554] hover:text-[#0f172a] transition-colors inline-block"
                dir="ltr"
              >
                ۰۷۱-۳۲۲۲۰۰۰۰
              </a>
            </div>

            {/* Mobile */}
            <div className="py-3 border-t border-[#dfd9cc]">
              <span className="block text-xs text-[#8c7b64] font-medium mb-1">همراه پذیرش و مدیریت</span>
              <a
                href="tel:09170000000"
                className="text-2xl sm:text-3xl font-bold text-[#172554] hover:text-[#0f172a] transition-colors inline-block"
                dir="ltr"
              >
                ۰۹۱۷-۰۰۰-۰۰۰۰
              </a>
            </div>

            {/* WhatsApp Direct Action */}
            <div className="pt-2">
              <a
                href="https://wa.me/989170000000?text=%D8%B3%D9%84%D8%A7%D9%85%D8%8C%20%D8%AC%D9%87%D8%AA%20%D8%B1%D8%B2%D8%B1%D9%88%20%D8%A7%D9%82%D8%A7%D9%85%D8%AA%20%D8%AF%D8%B1%20%D8%A8%D9%88%D8%AA%DB%8C%DA%A9%20%D9%87%D8%AA%D9%84%20%D9%81%D8%B1%D9%87%D8%A7%D8%AF%DB%8C%20%D8%B4%DB%8C%D8%B1%D8%A7%D8%B2%20%D9%BE%DB%8C%D8%A7%D9%85%20%D9%85%DB%8C%E2%80%8C%D8%AF%D9%87%D9%85."
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 px-6 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white inline-flex items-center gap-2.5 font-semibold text-sm transition-colors shadow-sm"
              >
                <MessageCircle className="w-5 h-5" />
                <span>گفتگو در واتس‌اپ</span>
              </a>
            </div>
          </div>

          {/* Practical Stay Information */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#172554] pb-3 border-b border-[#dfd9cc]">
              اطلاعات اقامتی
            </h3>

            <div className="space-y-4 text-sm leading-7 text-[#555f6d] font-light">
              <div>
                <strong className="block text-sm font-semibold text-[#172554] mb-0.5">نشانی عمارت:</strong>
                <p>شیراز، سه‌راه نمازی، خیابان شهید دستغیب، کوچه ۶</p>
              </div>

              <div className="pt-2 border-t border-[#dfd9cc]">
                <strong className="block text-sm font-semibold text-[#172554] mb-0.5">ساعات تحویل و تخلیه اتاق:</strong>
                <p>تحویل اتاق: از ساعت ۱۴:۰۰ | تخلیه اتاق: تا ساعت ۱۲:۰۰ ظهر</p>
              </div>

              <div className="pt-2 border-t border-[#dfd9cc]">
                <strong className="block text-sm font-semibold text-[#172554] mb-0.5">رزرو اختصاصی و دربست:</strong>
                <p>امکان رزرو کامل عمارت برای جلسات، مراسم‌های خانوادگی و سفرهای گروهی با هماهنگی مدیریت وجود دارد.</p>
              </div>

              <div className="pt-2 border-t border-[#dfd9cc]">
                <strong className="block text-sm font-semibold text-[#172554] mb-0.5">پست الکترونیک:</strong>
                <p dir="ltr" className="text-right text-[#172554]">info@farhadihotel.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

