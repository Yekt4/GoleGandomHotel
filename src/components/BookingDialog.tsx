"use client";

import React, { useState } from "react";
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
      ? `Hello, I would like to inquire about booking ${currentRoom} at Farhadi Boutique Hotel Shiraz.`
      : `سلام و درود، جهت استعلام و هماهنگی اقامت در ${currentRoom} بوتیک هتل فرهادی شیراز پیام می‌دهم.`
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

          <p className="text-xs sm:text-sm leading-6 text-[#555f6d] mt-2 mb-6 font-light">
            {t.booking.desc}
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
                <span className="text-sm font-semibold">{t.booking.whatsappText}</span>
              </div>
              <span className="text-xs font-light text-white/90">
                {t.booking.whatsappQuick}
              </span>
            </a>

            {/* Landline */}
            <a
              href={`tel:${isEn ? "+987132220000" : "07132220000"}`}
              className="flex items-center justify-between p-4 rounded-[16px] bg-[#faf8f5] hover:bg-[#f3efe6] border border-[#dfd9cc] text-[#172554] transition-colors"
            >
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#8c7b64]" />
                <span className="text-sm font-semibold">{t.booking.landlineText}</span>
              </div>
              <span className="text-base font-bold font-mono" dir="ltr">{t.nav.phone}</span>
            </a>

            {/* Mobile */}
            <a
              href={`tel:${isEn ? "+989170000000" : "09170000000"}`}
              className="flex items-center justify-between p-4 rounded-[16px] bg-[#faf8f5] hover:bg-[#f3efe6] border border-[#dfd9cc] text-[#172554] transition-colors"
            >
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#8c7b64]" />
                <span className="text-sm font-semibold">{t.booking.mobileText}</span>
              </div>
              <span className="text-base font-bold font-mono" dir="ltr">{t.nav.mobile}</span>
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

