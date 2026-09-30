"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Mail, MapPin, Copy, Check, Clock, Coffee, Sparkles, Shield, Compass } from "lucide-react";
import { toast } from "sonner";
import { BookingDialog } from "./BookingDialog";

export function ContactSection() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(label);
    toast.success(`${label} کپی شد: ${text}`);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#172554]"></span>
            <span className="text-xs sm:text-sm font-bold tracking-wider text-[#172554] uppercase">
              ارتباط مستقیم و پذیرش
            </span>
          </div>
          <h2 className="text-[34px] sm:text-[46px] font-bold leading-[44px] sm:leading-[58px] tracking-[-1px] text-[#172554] mb-3">
            پذیرش ۲۴ ساعته عمارت فرهادی
          </h2>
          <p className="text-base sm:text-lg leading-8 text-[#475569]">
            رزرو بدون واسطه و دریافت اطلاعات اقامت؛ کارشناسان پذیرش ما به صورت ۲۴ ساعته از طریق تماس و واتس‌اپ پاسخگوی شما هستند.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Direct Communication Channels */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-4">
            <div
              onClick={() => copyToClipboard("07132220000", "تلفن ثابت هتل")}
              className="p-6 rounded-[20px] border border-[#e2e8f0] bg-[#f8fafc] hover:border-[#172554] hover:bg-white transition-all flex items-center gap-5 group shadow-xs cursor-pointer"
            >
              <div className="w-14 h-14 rounded-[16px] bg-[#eff6ff] text-[#172554] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <Phone className="w-7 h-7 text-[#2563eb]" />
              </div>
              <div className="flex-1">
                <span className="block text-xs text-[#64748b] mb-1 font-medium">تلفن ثابت رزرو هتل (کلیک برای کپی)</span>
                <span className="text-xl sm:text-2xl font-extrabold text-[#172554]">۰۷۱-۳۲۲۲۰۰۰۰</span>
              </div>
              <span className="text-xs text-[#2563eb] font-bold hidden sm:inline-block">
                {copiedKey === "تلفن ثابت هتل" ? "کپی شد ✓" : "تماس مستقیم ←"}
              </span>
            </div>

            <div
              onClick={() => copyToClipboard("09170000000", "شماره همراه پذیرش")}
              className="p-6 rounded-[20px] border border-[#e2e8f0] bg-[#f8fafc] hover:border-[#172554] hover:bg-white transition-all flex items-center gap-5 group shadow-xs cursor-pointer"
            >
              <div className="w-14 h-14 rounded-[16px] bg-[#eff6ff] text-[#172554] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <Phone className="w-7 h-7 text-[#2563eb]" />
              </div>
              <div className="flex-1">
                <span className="block text-xs text-[#64748b] mb-1 font-medium">شماره همراه و رزرو هتل (کلیک برای کپی)</span>
                <span className="text-xl sm:text-2xl font-extrabold text-[#172554]">۰۹۱۷-۰۰۰-۰۰۰۰</span>
              </div>
              <span className="text-xs text-[#2563eb] font-bold hidden sm:inline-block">
                {copiedKey === "شماره همراه پذیرش" ? "کپی شد ✓" : "تماس مستقیم ←"}
              </span>
            </div>

            <a
              href="https://wa.me/989170000000?text=%D8%B3%D9%84%D8%A7%D9%85%D8%8C%20%D8%AC%D9%87%D8%AA%20%D8%B1%D8%B2%D8%B1%D9%88%20%D8%A7%D9%82%D8%A7%D9%85%D8%AA%20%D8%AF%D8%B1%20%D8%A8%D9%88%D8%AA%DB%8C%DA%A9%20%D9%87%D8%AA%D9%84%20%D9%81%D8%B1%D9%87%D8%A7%D8%AF%DB%8C%20%D8%B4%DB%8C%D8%B1%D8%A7%D8%B2%20%D9%BE%DB%8C%D8%A7%D9%85%20%D9%85%DB%8C%E2%80%8C%D8%AF%D9%87%D9%85."
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-[20px] border border-[#25D366]/30 bg-[#25D366]/5 hover:bg-[#25D366]/10 transition-all flex items-center gap-5 group shadow-xs"
            >
              <div className="w-14 h-14 rounded-[16px] bg-[#25D366] text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <MessageCircle className="w-7 h-7" />
              </div>
              <div className="flex-1">
                <span className="block text-xs text-[#20ba59] font-bold mb-1">پاسخگویی سریع در پیام‌رسان</span>
                <span className="text-lg sm:text-xl font-extrabold text-[#172554]">گفتگوی مستقیم با پذیرش در واتس‌اپ</span>
              </div>
              <span className="text-xs text-[#20ba59] font-bold hidden sm:inline-block">ارسال پیام ←</span>
            </a>

            <div className="p-6 rounded-[20px] border border-[#e2e8f0] bg-[#f8fafc] flex items-center gap-5">
              <div className="w-14 h-14 rounded-[16px] bg-white border border-[#e2e8f0] text-[#172554] flex items-center justify-center flex-shrink-0">
                <Mail className="w-7 h-7 text-[#172554]" />
              </div>
              <div>
                <span className="block text-xs text-[#64748b] mb-1 font-medium">پست الکترونیک رسمی</span>
                <span className="text-base sm:text-lg font-bold text-[#172554]">info@farhadihotel.com</span>
              </div>
            </div>
          </div>

          {/* Boutique Reception Info Card (Zero Forms) */}
          <div className="lg:col-span-6 bg-[#f8fafc] p-8 sm:p-10 rounded-[24px] border border-[#e2e8f0] shadow-sm flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-[#2563eb]" />
                <span className="text-xs font-bold text-[#2563eb] tracking-wide">
                  اطلاعات اقامتی و میزبانی
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#172554] mb-3">
                خدمات میزبانی عمارت تاریخی فرهادی
              </h3>
              <p className="text-xs sm:text-sm text-[#64748b] leading-7 mb-6">
                برای رزرو مستقیم هریک از اتاق‌ها و سوئیت‌های قاجاری، نیازی به پر کردن فرم نیست. شما می‌توانید در هر ساعت از شبانه‌روز مستقیماً با کارشناسان پذیرش تماس بگیرید یا در واتس‌اپ گفتگو نمایید.
              </p>

              {/* Specs & Services Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-[14px] bg-white border border-slate-200/80">
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <Clock className="w-4 h-4 text-[#172554]" />
                    <span className="text-xs font-bold text-[#172554]">ساعات تحویل و تخلیه</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    ورود از ساعت ۱۴:۰۰ | تخلیه تا ساعت ۱۲:۰۰ (امکان تحویل زودهنگام با هماهنگی)
                  </p>
                </div>

                <div className="p-4 rounded-[14px] bg-white border border-slate-200/80">
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <Coffee className="w-4 h-4 text-[#172554]" />
                    <span className="text-xs font-bold text-[#172554]">صبحانه اصیل شیرازی</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    سلف‌سرویس در حیاط مرکزی با نان تازه، عرقیات سنتی شیراز و سرشیر
                  </p>
                </div>

                <div className="p-4 rounded-[14px] bg-white border border-slate-200/80">
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <Compass className="w-4 h-4 text-[#172554]" />
                    <span className="text-xs font-bold text-[#172554]">موقعیت در بافت کهن</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    فاصله ۴ دقیقه‌ای تا شاهچراغ، مسجد نصیرالملک و بازار وکیل
                  </p>
                </div>

                <div className="p-4 rounded-[14px] bg-white border border-slate-200/80">
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <Shield className="w-4 h-4 text-[#172554]" />
                    <span className="text-xs font-bold text-[#172554]">رزرو دربست عمارت</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    امکان رزرو اختصاصی کل عمارت برای جلسات، دورهمی‌ها و سفرهای خانوادگی
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Action CTA inside the card */}
            <div className="pt-4 border-t border-[#e2e8f0] flex flex-col sm:flex-row gap-3">
              <BookingDialog
                trigger={
                  <Button className="w-full sm:flex-1 h-12 bg-[#172554] hover:bg-[#0f172a] text-white rounded-[12px] font-bold text-sm sm:text-base gap-2 cursor-pointer shadow-md">
                    <Phone className="w-4 h-4 text-[#60a5fa]" />
                    تماس با پذیرش هتل
                  </Button>
                }
              />
              <a
                href="https://wa.me/989170000000?text=%D8%B3%D9%84%D8%A7%D9%85%D8%8C%20%D8%AC%D9%87%D8%AA%20%D8%B1%D8%B2%D8%B1%D9%88%20%D8%A7%D9%82%D8%A7%D9%85%D8%AA%20%D8%AF%D8%B1%20%D8%A8%D9%88%D8%AA%DB%8C%DA%A9%20%D9%87%D8%AA%D9%84%20%D9%81%D8%B1%D9%87%D8%A7%D8%AF%DB%8C%20%D8%B4%DB%8C%D8%B1%D8%A7%D8%B2%20%D9%BE%DB%8C%D8%A7%D9%85%20%D9%85%DB%8C%E2%80%8C%D8%AF%D9%87%D9%85."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto h-12 px-6 rounded-[12px] bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center gap-2 font-bold text-sm sm:text-base shadow-md transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>پیام در واتس‌اپ</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
