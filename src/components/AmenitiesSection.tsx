"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Wifi, Coffee, Car, Flame, CarTaxiFront, Compass } from "lucide-react";

export function AmenitiesSection() {
  const amenities = [
    {
      icon: <Wifi className="w-6 h-6 text-[#0096f7]" />,
      title: "اینترنت پرسرعت رایگان (Wi-Fi)",
      desc: "دسترسی نامحدود و پرسرعت در تمام اتاق‌ها، حیاط مرکزی، کافه و بام عمارت.",
    },
    {
      icon: <Coffee className="w-6 h-6 text-[#0096f7]" />,
      title: "صبحانه رایگان ایرانی",
      desc: "سرو بوفه سرد و گرم شامل نان داغ، مرباهای خانگی، عرقیات شیراز و پنیر و گردو محلی.",
    },
    {
      icon: <Car className="w-6 h-6 text-[#0096f7]" />,
      title: "پارکینگ اختصاصی نزدیک هتل",
      desc: "هماهنگی پارکینگ امن و مسقف در چندقدمی عمارت با نگهبانی ۲۴ ساعته.",
    },
    {
      icon: <Flame className="w-6 h-6 text-[#0096f7]" />,
      title: "چای‌خانه و کافه سنتی",
      desc: "پذیرایی با فالوده اصیل شیرازی، چای سماور ذغالی و دمنوش‌های گیاهی در ایوان.",
    },
    {
      icon: <CarTaxiFront className="w-6 h-6 text-[#0096f7]" />,
      title: "ترانسفر فرودگاهی و گشت‌ها",
      desc: "استقبال اختصاصی از فرودگاه بین‌المللی شیراز و برنامه‌ریزی گشت‌های تخت‌جمشید و پاسارگاد.",
    },
    {
      icon: <Compass className="w-6 h-6 text-[#0096f7]" />,
      title: "کانسیرج و راهنمای محلی",
      desc: "راهنمایی تخصصی جهت بازدید از زوایای پنهان بازار وکیل، باغ ارم، حافظیه و سعدیه.",
    },
  ];

  return (
    <section id="amenities" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Badge className="bg-[#fcfbf7] text-[#1e2952] border border-[#e0ded4] rounded-[12px] px-3.5 py-1 text-xs mb-3">
            خدمات و امکانات رفاهی
          </Badge>
          <h2 className="text-[30px] sm:text-[36px] font-normal leading-[42px] tracking-[-0.5px] text-[#1e2952] mb-3">
            میزبانی گرم شیرازی همراه با استانداردهای مدرن
          </h2>
          <p className="text-base leading-7 text-[#555555]">
            تلاش ما فراهم آوردن اقامتی بی‌دغدغه، آرام و سرشار از آسایش برای مهمانان گرامی است.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {amenities.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-[14px] border border-[#e0ded4] bg-[#fcfbf7] hover:border-[#0096f7] hover:bg-white transition-all duration-200 flex items-start gap-4 group"
            >
              <div className="w-12 h-12 rounded-[12px] bg-[#e6f5fe] group-hover:bg-[#0096f7]/10 flex items-center justify-center flex-shrink-0 transition-colors">
                {item.icon}
              </div>
              <div>
                <h3 className="text-base font-medium text-[#1e2952] mb-1.5">{item.title}</h3>
                <p className="text-sm leading-6 text-[#555555]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
