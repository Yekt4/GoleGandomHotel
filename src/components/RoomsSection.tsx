"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BookingDialog } from "./BookingDialog";
import { MessageCircle, Phone, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export function RoomsSection() {
  const { language } = useLanguage();
  const t = translations[language];
  const isEn = language === "en";

  const [selectedRoomForDialog, setSelectedRoomForDialog] = useState<string>("");
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  const handleOpenBooking = (roomTitle: string) => {
    setSelectedRoomForDialog(roomTitle);
    setDialogOpen(true);
  };

  return (
    <section id="rooms" className="py-24 md:py-36 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header - Editorial & Restrained */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-24 pb-8 border-b border-[#dfd9cc]">
          <div className={`max-w-2xl ${isEn ? "text-left" : "text-right"}`}>
            <h2 className="text-[32px] sm:text-[44px] lg:text-[48px] font-bold leading-tight text-[#172554] tracking-tight mb-4">
              {t.rooms.heading}
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-[#555f6d] font-light">
              {t.rooms.desc}
            </p>
          </div>

          <div className="flex-shrink-0">
            <BookingDialog
              trigger={
                <Button className="bg-[#172554] hover:bg-[#0f172a] text-white rounded-full h-11 px-7 text-sm font-semibold shadow-sm cursor-pointer">
                  {t.rooms.inquireBtn}
                </Button>
              }
            />
          </div>
        </div>

        {/* Minimal Harmonious Snapp Pay 4-Installment Banner */}
        <div className="mb-14 p-5 sm:p-6 rounded-[22px] bg-[#faf8f5] border border-[#dfd9cc] flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-right">
            <div className="w-14 h-9 sm:w-16 sm:h-10 relative bg-white rounded-xl p-1.5 border border-[#dfd9cc] flex-shrink-0 flex items-center justify-center">
              <Image
                src="/images/snapp-pay.png"
                alt="اسنپ پی Snapp Pay"
                fill
                className="object-contain p-0.5"
              />
            </div>
            <div>
              <div className="flex items-center gap-2 justify-center sm:justify-start mb-1">
                <span className="text-xs font-bold text-[#172554]">
                  {t.rooms.snappPayBannerTitle}
                </span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#172554]/10 text-[#172554]">
                  {t.rooms.snappPayShortTag}
                </span>
              </div>
              <p className="text-xs text-[#555f6d] leading-relaxed font-light">
                {t.rooms.snappPayBannerDesc}
              </p>
            </div>
          </div>

          <div className="flex-shrink-0 w-full sm:w-auto">
            <Button
              onClick={() => handleOpenBooking(isEn ? "Snapp! Pay 4-Installments Booking" : "رزرو ۴ قسطه اسنپ‌پی")}
              className="w-full sm:w-auto h-10 px-6 rounded-full bg-[#172554] hover:bg-[#0f172a] text-white text-xs font-semibold shadow-2xs transition-colors cursor-pointer"
            >
              <span>{t.rooms.snappPayBtn}</span>
            </Button>
          </div>
        </div>

        {/* Room Showcases - Alternating Editorial Layout */}
        <div className="flex flex-col gap-20 sm:gap-28">
          {t.rooms.items.map((room, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={room.id}
                className="bg-[#faf8f5] rounded-[24px] border border-[#dfd9cc] overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch"
              >
                {/* Photo Frame */}
                <div
                  className={`lg:col-span-7 relative min-h-[360px] sm:min-h-[440px] lg:min-h-[500px] overflow-hidden group ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <Image
                    src={room.image}
                    alt={room.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent lg:hidden" />

                  <div className={`absolute bottom-5 right-5 left-5 text-white lg:hidden z-10 ${isEn ? "text-left" : "text-right"}`}>
                    <h3 className="text-2xl font-bold text-white mb-1">{room.title}</h3>
                    <p className="text-xs text-white/90">{room.subtitle}</p>
                  </div>
                </div>

                {/* Content Panel */}
                <div
                  className={`lg:col-span-5 p-7 sm:p-9 lg:p-11 flex flex-col justify-between ${
                    isEn ? "text-left" : "text-right"
                  } ${isEven ? "lg:order-2" : "lg:order-1"}`}
                >
                  <div>
                    <h3 className="hidden lg:block text-2xl sm:text-3xl font-bold text-[#172554] leading-snug mb-3">
                      {room.title}
                    </h3>

                    <p className="text-sm sm:text-base text-[#555f6d] mb-6 leading-relaxed font-light">
                      {room.description}
                    </p>

                    {/* Room Specs - Editorial Line */}
                    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 py-3 border-y border-[#dfd9cc] text-xs sm:text-sm text-[#555f6d] mb-6">
                      <span>{t.rooms.capacityLabel} <strong className="text-[#172554] font-semibold">{room.capacity}</strong></span>
                      <span>·</span>
                      <span>{t.rooms.sizeLabel} <strong className="text-[#172554] font-semibold">{room.size}</strong></span>
                      <span>·</span>
                      <span>{room.architectureFeature}</span>
                    </div>

                    {/* Highlights - Editorial Typography, No Checkmark Icons */}
                    <ul className="space-y-2.5 mb-6 text-xs sm:text-sm text-[#475569] font-light">
                      {room.highlights.map((item, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2.5">
                          <span className="text-[#8c7b64] font-bold select-none">—</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Minimal Harmonious Snapp Pay Note */}
                    <div className="mb-6 py-2 px-3.5 rounded-xl bg-[#faf8f5] border border-[#e8e4db] flex items-center justify-between gap-2 text-xs">
                      <div className="flex items-center gap-2.5">
                        <div className="w-6 h-4 relative flex-shrink-0">
                          <Image src="/images/snapp-pay.png" alt="اسنپ پی" fill className="object-contain" />
                        </div>
                        <span className="text-[#8c7b64]/30 select-none hidden sm:inline">|</span>
                        <span className="font-medium text-[#172554]">
                          {isEn ? "Pay in 4 installments with Snapp! Pay" : "امکان پرداخت در ۴ قسط با اسنپ‌پی"}
                        </span>
                      </div>
                      <span className="text-[11px] text-[#8c7b64] font-light whitespace-nowrap">
                        {isEn ? "0% fee · No check" : "بدون کارمزد و ضامن"}
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-[#dfd9cc] flex items-center gap-3">
                    <Button
                      onClick={() => handleOpenBooking(room.title)}
                      className="flex-1 bg-[#172554] hover:bg-[#0f172a] text-white rounded-full h-11 text-sm font-semibold gap-2 shadow-sm cursor-pointer"
                    >
                      <Phone className="w-4 h-4 text-white/80" />
                      {t.rooms.callToBook}
                    </Button>

                    <a
                      href={`https://wa.me/989173029002?text=${encodeURIComponent(
                        isEn
                          ? `Hello, I would like to inquire about booking ${room.title} at Farhadi Boutique Hotel Shiraz.`
                          : `سلام، درخواست رزرو ${room.title} در بوتیک هتل فرهادی شیراز را دارم.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-11 px-5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center gap-2 text-sm font-semibold transition-colors shadow-sm"
                      aria-label={`${t.rooms.whatsapp} - ${room.title}`}
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>{t.rooms.whatsapp}</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Dialog triggered from cards */}
        <BookingDialog
          initialRoom={selectedRoomForDialog}
          isOpen={dialogOpen}
          onOpenChange={setDialogOpen}
        />
      </div>
    </section>
  );
}

