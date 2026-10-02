"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Phone, MessageCircle } from "lucide-react";

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

  const openState = isOpen !== undefined ? isOpen : internalOpen;
  const setOpen = onOpenChange !== undefined ? onOpenChange : setInternalOpen;

  const whatsappMessage = encodeURIComponent(
    `سلام و درود، جهت استعلام و هماهنگی اقامت در ${initialRoom} بوتیک هتل فرهادی شیراز پیام می‌دهم.`
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
        <DialogContent className="sm:max-w-[440px] p-6 sm:p-8 text-right bg-white rounded-[24px] border border-[#dfd9cc] shadow-xl">
          <DialogHeader className="text-right pb-3 border-b border-[#dfd9cc]">
            <DialogTitle className="text-xl sm:text-2xl font-bold text-[#172554]">
              پذیرش عمارت فرهادی
            </DialogTitle>
            {initialRoom && initialRoom !== "عمارت تاریخی فرهادی" && (
              <p className="text-xs sm:text-sm text-[#8c7b64] font-medium mt-1">
                واحد انتخابی: {initialRoom}
              </p>
            )}
          </DialogHeader>

          <p className="text-xs sm:text-sm leading-6 text-[#555f6d] mt-2 mb-6 font-light">
            جهت آگاهی از ظرفیت خالی اتاق‌ها و هماهنگی اقامت در شیراز، با پذیرش عمارت تماس بگیرید یا در واتس‌اپ پیام ارسال فرمایید:
          </p>

          <div className="space-y-3">
            {/* WhatsApp Direct */}
            <a
              href={`https://wa.me/989170000000?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-[16px] bg-[#25D366] hover:bg-[#20ba59] text-white transition-colors shadow-sm"
            >
              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5" />
                <span className="text-sm font-semibold">ارسال پیام در واتس‌اپ</span>
              </div>
              <span className="text-xs font-light text-white/90">پاسخگویی سریع ←</span>
            </a>

            {/* Landline */}
            <a
              href="tel:07132220000"
              className="flex items-center justify-between p-4 rounded-[16px] bg-[#faf8f5] hover:bg-[#f3efe6] border border-[#dfd9cc] text-[#172554] transition-colors"
            >
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#8c7b64]" />
                <span className="text-sm font-semibold">تلفن ثابت هتل</span>
              </div>
              <span className="text-base font-bold font-mono" dir="ltr">۰۷۱-۳۲۲۲۰۰۰۰</span>
            </a>

            {/* Mobile */}
            <a
              href="tel:09170000000"
              className="flex items-center justify-between p-4 rounded-[16px] bg-[#faf8f5] hover:bg-[#f3efe6] border border-[#dfd9cc] text-[#172554] transition-colors"
            >
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#8c7b64]" />
                <span className="text-sm font-semibold">همراه پذیرش ۲۴ ساعته</span>
              </div>
              <span className="text-base font-bold font-mono" dir="ltr">۰۹۱۷-۰۰۰-۰۰۰۰</span>
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

