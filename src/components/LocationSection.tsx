"use client";

import React from "react";
import dynamic from "next/dynamic";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation, ExternalLink } from "lucide-react";

// Dynamic import of Leaflet map to prevent SSR issues
const HotelMap = dynamic(() => import("./HotelMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[420px] bg-[#f7f7f5] rounded-[16px] flex items-center justify-center text-[#555555] text-sm">
      در حال بارگذاری نقشه تعاملی شیراز...
    </div>
  ),
});

export function LocationSection() {
  const attractions = [
    {
      name: "حرم مطهر حضرت شاهچراغ (ع)",
      desc: "پیاده‌روی مستقیم از کوچه دستغیب",
      time: "۴ دقیقه پیاده",
      highlight: true,
    },
    {
      name: "بازار وکیل، مسجد و حمام وکیل",
      desc: "گذر از بافت تاریخی زندیه",
      time: "۸ دقیقه پیاده",
      highlight: false,
    },
    {
      name: "مسجد نصیرالملک (مسجد صورتی)",
      desc: "گذر از محله تاریخی گود عربان",
      time: "۱۲ دقیقه پیاده",
      highlight: false,
    },
    {
      name: "ارگ کریم‌خان زند",
      desc: "میدان شهدا (توپخانه کهن)",
      time: "۵ دقیقه با خودرو",
      highlight: false,
    },
    {
      name: "فرودگاه شهید دستغیب شیراز",
      desc: "مسیر بزرگراه مدرس",
      time: "۲۰ دقیقه با خودرو",
      highlight: false,
    },
  ];

  return (
    <section id="location" className="py-16 md:py-24 bg-[#fcfbf7] border-y border-[#e0ded4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-12">
          <Badge className="bg-white text-[#1e2952] border border-[#e0ded4] rounded-[12px] px-3.5 py-1 text-xs mb-3">
            موقعیت و دسترسی شهری
          </Badge>
          <h2 className="text-[30px] sm:text-[36px] font-normal leading-[42px] tracking-[-0.5px] text-[#1e2952] mb-3">
            در همسایگی شاهچراغ و راسته بازار وکیل
          </h2>
          <p className="text-base leading-7 text-[#555555]">
            بوتیک هتل فرهادی در بافت پیاده‌مدار و آرام تاریخی شیراز قرار گرفته و دسترسی پیاده به شاهکارهای معماری عصر زندیه و قاجار را میسر می‌سازد.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Info Card */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-7 rounded-[16px] border border-[#e0ded4] flex flex-col gap-6 shadow-xs">
            {/* Address Box */}
            <div className="flex items-start gap-3.5 p-4 rounded-[12px] bg-[#fcfbf7] border border-[#e0ded4]">
              <div className="w-10 h-10 rounded-[10px] bg-[#e6f5fe] text-[#0096f7] flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <strong className="block text-sm text-[#1e2952] mb-1">نشانی دقیق عمارت:</strong>
                <p className="text-xs sm:text-sm text-[#555555] leading-6">
                  شیراز، سه‌راه نمازی، خیابان شهید دستغیب، کوچه ۶، پلاک عمارت تاریخی فرهادی
                </p>
              </div>
            </div>

            {/* Attractions List */}
            <div>
              <h3 className="text-base font-medium text-[#1e2952] mb-3">
                فاصله تا جاذبه‌های کهن شیراز:
              </h3>
              <div className="flex flex-col gap-2.5">
                {attractions.map((att, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 rounded-[10px] border border-[#e0ded4] hover:border-[#0096f7] transition-colors"
                  >
                    <div>
                      <span className="block text-sm font-medium text-[#1e2952]">
                        {att.name}
                      </span>
                      <span className="text-xs text-[#777777]">{att.desc}</span>
                    </div>
                    <span
                      className={`text-xs px-2.5 py-1 rounded-[8px] font-medium whitespace-nowrap ${
                        att.highlight
                          ? "bg-[#e6f5fe] text-[#0096f7]"
                          : "bg-[#f7f7f5] text-[#444444]"
                      }`}
                    >
                      {att.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div>
              <span className="block text-xs font-medium text-[#555555] mb-2.5">
                مسیریابی با اپلیکیشن‌های نقشه:
              </span>
              <div className="flex flex-wrap gap-2">
                <a
                  href="https://maps.google.com/?q=29.6112,52.5442"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[8px] border border-[#e0ded4] hover:border-[#0096f7] text-xs text-black hover:text-[#0096f7] transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  گوگل مپ
                </a>
                <a
                  href="https://neshan.org/maps/@29.6112,52.5442,16z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[8px] border border-[#e0ded4] hover:border-[#0096f7] text-xs text-black hover:text-[#0096f7] transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  مسیریاب نشان
                </a>
                <a
                  href="https://balad.ir/location?latitude=29.6112&longitude=52.5442"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[8px] border border-[#e0ded4] hover:border-[#0096f7] text-xs text-black hover:text-[#0096f7] transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  مسیریاب بلد
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Map */}
          <div className="lg:col-span-7 h-[420px] sm:h-[500px] rounded-[16px] overflow-hidden border border-[#e0ded4] shadow-xs relative">
            <HotelMap />
          </div>
        </div>
      </div>
    </section>
  );
}
