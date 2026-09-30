"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import { BookingDialog } from "./BookingDialog";

export function ContactSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `پیام از وبسایت بوتیک هتل فرهادی شیراز:%0A` +
      `نام: ${encodeURIComponent(name || "مهمان گرامی")}%0A` +
      `شماره تماس: ${encodeURIComponent(phone)}%0A` +
      `متن پیام: ${encodeURIComponent(message)}`;

    window.open(`https://wa.me/989170000000?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#172554]"></span>
            <span className="text-xs sm:text-sm font-bold tracking-wider text-[#172554] uppercase">
              ارتباط مستقیم و رزرو
            </span>
          </div>
          <h2 className="text-[34px] sm:text-[46px] font-bold leading-[44px] sm:leading-[58px] tracking-[-1px] text-[#172554] mb-3">
            پذیرش ۲۴ ساعته عمارت فرهادی
          </h2>
          <p className="text-base sm:text-lg leading-8 text-[#475569]">
            جهت رزرو مستقیم بدون واسطه، اطلاع از ظرفیت خالی اتاق‌ها و هماهنگی ترانسفر، کارشناسان ما همواره پاسخگوی شما هستند.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Contact Cards */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <a
              href="tel:07132220000"
              className="p-6 rounded-[16px] border border-[#e2e8f0] bg-[#f8fafc] hover:border-[#172554] hover:bg-white transition-all flex items-center gap-5 group shadow-xs"
            >
              <div className="w-14 h-14 rounded-[14px] bg-[#eff6ff] text-[#172554] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <Phone className="w-7 h-7 text-[#2563eb]" />
              </div>
              <div className="flex-1">
                <span className="block text-xs text-[#64748b] mb-1 font-medium">تلفن ثابت رزرو هتل</span>
                <span className="text-xl font-extrabold text-[#172554]">۰۷۱-۳۲۲۲۰۰۰۰</span>
              </div>
              <span className="text-xs text-[#2563eb] font-bold hidden sm:inline-block">تماس سریع &larr;</span>
            </a>

            <a
              href="tel:09170000000"
              className="p-6 rounded-[16px] border border-[#e2e8f0] bg-[#f8fafc] hover:border-[#172554] hover:bg-white transition-all flex items-center gap-5 group shadow-xs"
            >
              <div className="w-14 h-14 rounded-[14px] bg-[#eff6ff] text-[#172554] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <Phone className="w-7 h-7 text-[#2563eb]" />
              </div>
              <div className="flex-1">
                <span className="block text-xs text-[#64748b] mb-1 font-medium">شماره همراه پذیرش و مدیریت</span>
                <span className="text-xl font-extrabold text-[#172554]">۰۹۱۷-۰۰۰-۰۰۰۰</span>
              </div>
              <span className="text-xs text-[#2563eb] font-bold hidden sm:inline-block">تماس سریع &larr;</span>
            </a>

            <a
              href="https://wa.me/989170000000"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-[16px] border border-[#25D366]/30 bg-[#25D366]/5 hover:bg-[#25D366]/10 transition-all flex items-center gap-5 group shadow-xs"
            >
              <div className="w-14 h-14 rounded-[14px] bg-[#25D366] text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <MessageCircle className="w-7 h-7" />
              </div>
              <div className="flex-1">
                <span className="block text-xs text-[#20ba59] font-bold mb-1">گفتگوی مستقیم در واتس‌اپ</span>
                <span className="text-lg sm:text-xl font-extrabold text-[#172554]">ارسال پیام به پذیرش</span>
              </div>
              <span className="text-xs text-[#20ba59] font-bold hidden sm:inline-block">شروع گفتگو &larr;</span>
            </a>

            <div className="p-6 rounded-[16px] border border-[#e2e8f0] bg-[#f8fafc] flex items-center gap-5">
              <div className="w-14 h-14 rounded-[14px] bg-white border border-[#e2e8f0] text-[#172554] flex items-center justify-center flex-shrink-0">
                <Mail className="w-7 h-7 text-[#172554]" />
              </div>
              <div>
                <span className="block text-xs text-[#64748b] mb-1 font-medium">پست الکترونیک رسمی</span>
                <span className="text-base font-bold text-[#172554]">info@farhadihotel.com</span>
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="lg:col-span-6 bg-[#f8fafc] p-8 sm:p-10 rounded-[20px] border border-[#e2e8f0] shadow-sm">
            <h3 className="text-2xl font-bold text-[#172554] mb-2">
              فرم استعلام آنلاین یا مشاوره
            </h3>
            <p className="text-xs sm:text-sm text-[#64748b] mb-6">
              مشخصات خود را وارد نمایید تا کارشناسان اقامتی ما در کمترین زمان هماهنگی‌های لازم را انجام دهند.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="c-name" className="text-xs sm:text-sm font-bold text-[#172554]">نام و نام خانوادگی</Label>
                <Input
                  id="c-name"
                  placeholder="مثال: رامین حسینی"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="rounded-[8px] border-[#cbd5e1] bg-white focus:border-[#172554] h-11"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="c-phone" className="text-xs sm:text-sm font-bold text-[#172554]">شماره همراه</Label>
                <Input
                  id="c-phone"
                  type="tel"
                  placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="rounded-[8px] border-[#cbd5e1] bg-white focus:border-[#172554] h-11"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="c-msg" className="text-xs sm:text-sm font-bold text-[#172554]">پیام یا تاریخ مدنظر شما</Label>
                <Textarea
                  id="c-msg"
                  placeholder="تاریخ ورود و خروج مدنظر، تعداد نفرات یا سوالات خود را بنویسید..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="rounded-[8px] border-[#cbd5e1] bg-white focus:border-[#172554] min-h-[110px]"
                  required
                />
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  className="w-full h-12 bg-[#172554] hover:bg-[#0f172a] text-white rounded-[12px] font-bold text-base gap-2 cursor-pointer shadow-md"
                >
                  <MessageCircle className="w-5 h-5 text-[#25D366]" />
                  ارسال پیام به واتس‌اپ هتل
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
