"use client";

import React from "react";

interface Amenity {
  title: string;
  desc: string;
  detail: string;
}

const AMENITIES: Amenity[] = [
  {
    title: "صبحانه اصیل در حیاط مرکزی",
    desc: "سرو روزانه نان تازه محلی، سرشیر شیرازی، پنیر سنتی، مرباهای خانگی و عرقیات بهارنارنج در کنار حوض فیروزه‌ای.",
    detail: "سلف‌سرویس · ۸:۰۰ تا ۱۰:۳۰",
  },
  {
    title: "چای‌خانه و کافه سنتی عمارت",
    desc: "پذیرایی عصرگاهی با فالوده شیرازی، چای دمی در استکان‌های قاجاری، دمنوش‌های گیاهی و شیرینی‌های سنتی در مهتابی.",
    detail: "همه روزه تا نیمه‌شب",
  },
  {
    title: "کانسیرج و راهنمای بافت کهن",
    desc: "راهنمایی تخصصی جهت پیاده‌گردی در کوچه‌های آرام سنگ‌سیاه، دسترسی به بازار وکیل و روایت‌های ناشنیده شیراز تاریخی.",
    detail: "پذیرش شبانه‌روزی",
  },
  {
    title: "اینترنت پرسرعت فیبر نوری",
    desc: "پوشش سراسری و نامحدود در تمام اتاق‌ها، شاه‌نشین، حیاط مرکزی و بام اختصاصی عمارت بدون قطعی.",
    detail: "Wi-Fi رایگان",
  },
  {
    title: "پارکینگ اختصاصی و نگهبانی",
    desc: "هماهنگی فضای پارک اختصاصی، امن و مسقف در چندقدمی عمارت با نگهبانی ۲۴ ساعته برای خودروهای مهمانان.",
    detail: "امن و در مجاورت هتل",
  },
  {
    title: "ترانسفر و گشت‌های اختصاصی",
    desc: "استقبال مستقیم از فرودگاه بین‌المللی شیراز و هماهنگی گشت‌های روزانه به تخت‌جمشید، نقش‌رستم و پاسارگاد.",
    detail: "با هماهنگی قبلی",
  },
];

export function AmenitiesSection() {
  return (
    <section id="amenities" className="py-20 md:py-28 bg-[#faf8f5] border-t border-[#e8e4db]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header - Editorial, Confident, No Eyebrow Pill */}
        <div className="max-w-2xl mb-14 md:mb-18 text-right">
          <h2 className="text-[30px] sm:text-[40px] font-bold text-[#172554] tracking-tight leading-tight mb-3">
            میزبانی و خدمات عمارت
          </h2>
          <p className="text-base sm:text-lg text-[#555f6d] leading-relaxed font-light">
            آرامش خانه‌ای قاجاری با کیفیتی بی‌تکلف؛ فراهم آوردن هرآنچه برای اقامتی آسوده در شیراز نیاز دارید.
          </p>
        </div>

        {/* Editorial Grid: Clean separators, elegant typography, zero cartoonish icon boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 text-right">
          {AMENITIES.map((item, index) => (
            <div
              key={index}
              className="pt-5 border-t border-[#dfd9cc] flex flex-col justify-between"
            >
              <div>
                <span className="text-xs text-[#8c7b64] font-medium block mb-2">
                  {item.detail}
                </span>
                <h3 className="text-lg font-bold text-[#172554] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm leading-7 text-[#555f6d] font-light">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

