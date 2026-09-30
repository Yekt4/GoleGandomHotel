"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Clock, Coffee, ShieldCheck, Copy, Check } from "lucide-react";
import { toast } from "sonner";

interface BookingDialogProps {
  initialRoom?: string;
  trigger?: React.ReactNode;
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function BookingDialog({
  initialRoom = "عمارت تاریخی فرهادی",
  trigger,
  isOpen,
  onOpenChange,
}: BookingDialogProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  const openState = isOpen !== undefined ? isOpen : internalOpen;
  const setOpen = onOpenChange !== undefined ? onOpenChange : setInternalOpen;

  const copyNumber = (number: string, label: string) => {
    navigator.clipboard.writeText(number);
    setCopied(label);
    toast.success(`${label} کپی شد: ${number}`);
    setTimeout(() => setCopied(null), 2000);
  };

  const whatsappMessage = encodeURIComponent(
    `سلام و درود، جهت رزرو مستقیم و اقامت در ${initialRoom} بوتیک هتل فرهادی شیراز پیام می‌دهم.`
  );

  const renderedTrigger = trigger && React.isValidElement(trigger)
    ? React.cloneElement(trigger as React.ReactElement<{ onClick?: () => void }>, {
        onClick: () => setOpen(true),
      })
    : trigger ? (
      <div onClick={() => setOpen(true)} className="inline-block cursor-pointer">
        {trigger}
      </div>
    ) : null;

  return (
    <>
      {renderedTrigger}
      <Dialog open={openState} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[480px] p-6 sm:p-7 text-right bg-white rounded-[24px] border border-slate-200 shadow-2xl">
          <DialogHeader className="text-right pb-2 border-b border-slate-100">
            <div className="inline-flex items-center gap-2 mb-1">
              <span className="w-2.5 h-2.5 rounded-full bg-[#172554]" />
              <span className="text-xs font-bold text-[#172554] tracking-wide">
                رزرو مستقیم و بدون واسطه
              </span>
            </div>
            <DialogTitle className="text-xl sm:text-2xl font-bold text-[#172554]">
              پذیرش بوتیک هتل فرهادی
            </DialogTitle>
            {initialRoom && initialRoom !== "عمارت تاریخی فرهادی" && (
              <p className="text-xs sm:text-sm font-semibold text-[#2563eb] mt-1">
                واحد انتخابی: {initialRoom}
              </p>
            )}
          </DialogHeader>

          <p className="text-xs sm:text-sm leading-6 text-slate-600 mt-3 mb-5">
            جهت هماهنگی اقامت، آگاهی از موجودی اتاق‌ها و تجربه میزبانی اختصاصی در شیراز، با کارشناسان پذیرش ما به صورت ۲۴ ساعته تماس بگیرید یا در واتس‌اپ پیام ارسال فرمایید:
          </p>

          {/* Direct Action Channels - Zero Form */}
          <div className="space-y-3">
            {/* WhatsApp Direct */}
            <a
              href={`https://wa.me/989170000000?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-[16px] bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-[#172554] transition-all group shadow-xs"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-[12px] bg-[#25D366] text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-[#16a34a]">پاسخگویی آنی</span>
                  <span className="text-base font-extrabold text-[#0f172a]">گفتگو در واتس‌اپ</span>
                </div>
              </div>
              <span className="text-xs font-bold text-[#16a34a] bg-white px-3 py-1.5 rounded-full border border-[#25D366]/30">
                ارسال پیام &larr;
              </span>
            </a>

            {/* Landline Reception */}
            <div className="flex items-center justify-between p-4 rounded-[16px] bg-[#f8fafc] hover:bg-[#eff6ff] border border-slate-200 hover:border-[#172554] transition-all">
              <a
                href="tel:07132220000"
                className="flex items-center gap-3.5 flex-1"
              >
                <div className="w-12 h-12 rounded-[12px] bg-[#eff6ff] text-[#172554] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#2563eb]" />
                </div>
                <div>
                  <span className="block text-xs text-slate-500 font-medium">تلفن ثابت پذیرش ۲۴ ساعته</span>
                  <span className="text-lg font-extrabold text-[#172554]">۰۷۱-۳۲۲۲۰۰۰۰</span>
                </div>
              </a>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => copyNumber("07132220000", "تلفن ثابت")}
                className="h-9 px-2.5 text-xs text-slate-500 hover:text-[#172554]"
                title="کپی شماره"
              >
                {copied === "تلفن ثابت" ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
              </Button>
            </div>

            {/* Mobile Reception */}
            <div className="flex items-center justify-between p-4 rounded-[16px] bg-[#f8fafc] hover:bg-[#eff6ff] border border-slate-200 hover:border-[#172554] transition-all">
              <a
                href="tel:09170000000"
                className="flex items-center gap-3.5 flex-1"
              >
                <div className="w-12 h-12 rounded-[12px] bg-[#eff6ff] text-[#172554] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#2563eb]" />
                </div>
                <div>
                  <span className="block text-xs text-slate-500 font-medium">همراه مدیریت و پذیرش هتل</span>
                  <span className="text-lg font-extrabold text-[#172554]">۰۹۱۷-۰۰۰-۰۰۰۰</span>
                </div>
              </a>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => copyNumber("09170000000", "همراه پذیرش")}
                className="h-9 px-2.5 text-xs text-slate-500 hover:text-[#172554]"
                title="کپی شماره"
              >
                {copied === "همراه پذیرش" ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
              </Button>
            </div>
          </div>

          {/* Quick Perks / Info Badge */}
          <div className="mt-5 pt-4 border-t border-slate-100 grid grid-cols-3 gap-2 text-center text-slate-600">
            <div className="p-2 bg-slate-50 rounded-[10px]">
              <Clock className="w-4 h-4 mx-auto mb-1 text-[#2563eb]" />
              <span className="block text-[11px] font-bold text-slate-700">پذیرش ۲۴ ساعته</span>
              <span className="text-[10px] text-slate-500">ورود ۱۴ / خروج ۱۲</span>
            </div>
            <div className="p-2 bg-slate-50 rounded-[10px]">
              <Coffee className="w-4 h-4 mx-auto mb-1 text-[#2563eb]" />
              <span className="block text-[11px] font-bold text-slate-700">صبحانه اصیل</span>
              <span className="text-[10px] text-slate-500">سلف‌سرویس رایگان</span>
            </div>
            <div className="p-2 bg-slate-50 rounded-[10px]">
              <ShieldCheck className="w-4 h-4 mx-auto mb-1 text-[#2563eb]" />
              <span className="block text-[11px] font-bold text-slate-700">بهترین نرخ</span>
              <span className="text-[10px] text-slate-500">رزرو مستقیم</span>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
