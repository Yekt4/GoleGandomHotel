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
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Badge className="bg-[#fcfbf7] text-[#1e2952] border border-[#e0ded4] rounded-[12px] px-3.5 py-1 text-xs mb-3">
            ارتباط مستقیم و رزرو
          </Badge>
          <h2 className="text-[30px] sm:text-[36px] font-normal leading-[42px] tracking-[-0.5px] text-[#1e2952] mb-3">
            پذیرش ۲۴ ساعته عمارت فرهادی
          </h2>
          <p className="text-base leading-7 text-[#555555]">
            جهت رزرو مستقیم بدون واسطه، اطلاع از ظرفیت خالی و هماهنگی ترانسفر، کارشناسان ما همواره پاسخگوی شما هستند.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Contact Cards */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <a
              href="tel:07132220000"
              className="p-5 rounded-[14px] border border-[#e0ded4] bg-[#fcfbf7] hover:border-[#0096f7] hover:bg-white transition-all flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-[12px] bg-[#e6f5fe] text-[#0096f7] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <span className="block text-xs text-[#777777] mb-1">تلفن ثابت رزرو هتل</span>
                <span className="text-lg font-bold text-[#1e2952]">۰۷۱-۳۲۲۲۰۰۰۰</span>
              </div>
              <span className="text-xs text-[#0096f7] font-medium hidden sm:inline-block">تماس سریع &larr;</span>
            </a>

            <a
              href="tel:09170000000"
              className="p-5 rounded-[14px] border border-[#e0ded4] bg-[#fcfbf7] hover:border-[#0096f7] hover:bg-white transition-all flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-[12px] bg-[#e6f5fe] text-[#0096f7] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <span className="block text-xs text-[#777777] mb-1">شماره همراه پذیرش و مدیریت</span>
                <span className="text-lg font-bold text-[#1e2952]">۰۹۱۷-۰۰۰-۰۰۰۰</span>
              </div>
              <span className="text-xs text-[#0096f7] font-medium hidden sm:inline-block">تماس سریع &larr;</span>
            </a>

            <a
              href="https://wa.me/989170000000"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-[14px] border border-[#25D366]/30 bg-[#25D366]/5 hover:bg-[#25D366]/10 transition-all flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-[12px] bg-[#25D366] text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <span className="block text-xs text-[#20ba59] font-medium mb-1">گفتگوی آنلاین در واتس‌اپ</span>
                <span className="text-base sm:text-lg font-bold text-[#1e2952]">ارسال پیام به کارشناس پذیرش</span>
              </div>
              <span className="text-xs text-[#20ba59] font-medium hidden sm:inline-block">شروع گفتگو &larr;</span>
            </a>

            <div className="p-5 rounded-[14px] border border-[#e0ded4] bg-[#fcfbf7] flex items-center gap-4">
              <div className="w-12 h-12 rounded-[12px] bg-white border border-[#e0ded4] text-[#1e2952] flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="block text-xs text-[#777777] mb-1">پست الکترونیک رسمی</span>
                <span className="text-sm font-medium text-[#1e2952]">info@farhadihotel.com</span>
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="lg:col-span-6 bg-[#fcfbf7] p-6 sm:p-8 rounded-[16px] border border-[#e0ded4]">
            <h3 className="text-xl font-medium text-[#1e2952] mb-2">
              فرم استعلام یا درخواست مشاوره
            </h3>
            <p className="text-xs sm:text-sm text-[#555555] mb-5">
              مشخصات خود را وارد نمایید تا کارشناسان اقامتی ما هماهنگی‌های لازم را انجام دهند.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <Label htmlFor="c-name" className="text-xs sm:text-sm text-[#444444]">نام و نام خانوادگی</Label>
                <Input
                  id="c-name"
                  placeholder="مثال: رامین حسینی"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="rounded-[6px] border-[#e0ded4] bg-white focus:border-[#0096f7] h-10"
                  required
                />
              </div>

              <div className="space-y-1">
                <Label htmlFor="c-phone" className="text-xs sm:text-sm text-[#444444]">شماره همراه</Label>
                <Input
                  id="c-phone"
                  type="tel"
                  placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="rounded-[6px] border-[#e0ded4] bg-white focus:border-[#0096f7] h-10"
                  required
                />
              </div>

              <div className="space-y-1">
                <Label htmlFor="c-msg" className="text-xs sm:text-sm text-[#444444]">پیام یا تاریخ مدنظر شما</Label>
                <Textarea
                  id="c-msg"
                  placeholder="تاریخ ورود و خروج مدنظر، تعداد نفرات یا سوالات خود را بنویسید..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="rounded-[6px] border-[#e0ded4] bg-white focus:border-[#0096f7] min-h-[100px]"
                  required
                />
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  className="w-full h-11 bg-[#0096f7] hover:bg-[#0084dc] text-white rounded-[12px] font-medium text-sm gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
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
