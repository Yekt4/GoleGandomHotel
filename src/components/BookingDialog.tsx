"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Phone, MessageCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

interface BookingDialogProps {
  initialRoom?: string;
  trigger?: React.ReactNode;
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function BookingDialog({
  initialRoom,
  trigger,
  isOpen,
  onOpenChange,
}: BookingDialogProps) {
  const { language } = useLanguage();
  const t = translations[language];
  const isEn = language === "en";

  const [internalOpen, setInternalOpen] = useState(false);

  const openState = isOpen !== undefined ? isOpen : internalOpen;
  const setOpen = onOpenChange !== undefined ? onOpenChange : setInternalOpen;

  const defaultRoomName = isEn ? "Farhadi Boutique Hotel" : "عمارت تاریخی فرهادی";
  const currentRoom = initialRoom || defaultRoomName;

  const whatsappMessage = encodeURIComponent(
    isEn
      ? `Hello, I would like to inquire about booking ${currentRoom} (including 4-installment Snapp! Pay option) at Farhadi Boutique Hotel Shiraz.`
      : `سلام و درود، جهت استعلام و هماهنگی اقامت در ${currentRoom} بوتیک هتل فرهادی شیراز (امکان پرداخت ۴ قسطه اسنپ‌پی) پیام می‌دهم.`
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
        <DialogContent className={`sm:max-w-[440px] p-6 sm:p-8 bg-white rounded-[24px] border border-[#dfd9cc] shadow-xl ${isEn ? "text-left" : "text-right"}`}>
          <DialogHeader className={`pb-3 border-b border-[#dfd9cc] ${isEn ? "text-left" : "text-right"}`}>
            <DialogTitle className="text-xl sm:text-2xl font-bold text-[#172554]">
              {t.booking.title}
            </DialogTitle>
            {initialRoom && initialRoom !== defaultRoomName && (
              <p className="text-xs sm:text-sm text-[#8c7b64] font-medium mt-1">
                {t.booking.selectedRoomPrefix} {initialRoom}
              </p>
            )}
          </DialogHeader>

          {/* Minimal Harmonious Snapp Pay Note in Dialog */}
          <div className="mt-4 py-2 px-3.5 rounded-xl bg-[#faf8f5] border border-[#e8e4db] flex items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-4 relative flex-shrink-0">
                <Image src="/images/snapp-pay.png" alt="اسنپ پی Snapp Pay" fill className="object-contain" />
              </div>
              <span className="font-semibold text-[#172554]">
                {isEn ? "Pay in 4 installments with Snapp! Pay" : "امکان پرداخت در ۴ قسط ماهانه با اسنپ‌پی"}
              </span>
            </div>
            <span className="text-[11px] text-[#8c7b64] font-light whitespace-nowrap">
              {isEn ? "0% fee · No check" : "بدون کارمزد و ضامن"}
            </span>
          </div>

          <p className="text-xs sm:text-sm leading-6 text-[#555f6d] mt-3 mb-5 font-light">
            {t.booking.desc}
          </p>

          <div className="space-y-3">
            {/* WhatsApp Direct */}
            <a
              href={`https://wa.me/989173029002?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-[16px] bg-[#25D366] hover:bg-[#20ba59] text-white transition-colors shadow-sm"
            >
              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5" />
                <span className="text-sm font-semibold">{t.booking.whatsappText}</span>
              </div>
              <span className="text-xs font-light text-white/90">
                {t.booking.whatsappQuick}
              </span>
            </a>

            {/* Landline */}
            <a
              href={`tel:${isEn ? "+987132222294" : "07132222294"}`}
              className="flex items-center justify-between p-4 rounded-[16px] bg-[#faf8f5] hover:bg-[#f3efe6] border border-[#dfd9cc] text-[#172554] transition-colors"
            >
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#8c7b64]" />
                <span className="text-sm font-semibold">{t.booking.landlineText}</span>
              </div>
              <span className="text-base font-bold tabular-nums tracking-wide" dir="ltr">{t.nav.phone}</span>
            </a>

            {/* Mobile */}
            <a
              href={`tel:${isEn ? "+989173029002" : "09173029002"}`}
              className="flex items-center justify-between p-4 rounded-[16px] bg-[#faf8f5] hover:bg-[#f3efe6] border border-[#dfd9cc] text-[#172554] transition-colors"
            >
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#8c7b64]" />
                <span className="text-sm font-semibold">{t.booking.mobileText}</span>
              </div>
              <span className="text-base font-bold tabular-nums tracking-wide" dir="ltr">{t.nav.mobile}</span>
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

