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

  const [filter, setFilter] = useState<string>("all");
  const [roomImageIndexes, setRoomImageIndexes] = useState<Record<string, number>>({});
  const [selectedRoomForDialog, setSelectedRoomForDialog] = useState<string>("");
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  const filteredRooms = t.rooms.items.filter((room) => {
    if (filter === "all") return true;
    return room.category === filter;
  });

  const handleOpenBooking = (roomTitle: string) => {
    setSelectedRoomForDialog(roomTitle);
    setDialogOpen(true);
  };

  const getCategoryCount = (catId: string) => {
    if (catId === "all") return t.rooms.items.length;
    return t.rooms.items.filter((r) => r.category === catId).length;
  };

  // Convert digits to Persian format if language is FA
  const formatNumber = (num: number) => {
    if (language === "fa") {
      const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
      return String(num).replace(/\d/g, (d) => persianDigits[Number(d)]);
    }
    return String(num);
  };

  return (
    <section id="rooms" className="py-20 sm:py-28 md:py-36 bg-white border-t border-[#dfd9cc]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header - Editorial & Restrained */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 pb-8 border-b border-[#dfd9cc]">
          <div className={`max-w-2xl ${isEn ? "text-left" : "text-right"}`}>
            <h2 className="text-[30px] sm:text-[42px] lg:text-[46px] font-bold leading-tight text-[#172554] tracking-tight mb-3">
              {t.rooms.heading}
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-[#555f6d] font-light">
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

        {/* Minimalist Room Category Filter Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-6 mb-10 scrollbar-none [scrollbar-width:none]">
          {t.rooms.categories?.map((cat) => {
            const isActive = filter === cat.id;
            const count = getCategoryCount(cat.id);
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setFilter(cat.id)}
                className={`h-10 px-4 sm:px-5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer flex items-center gap-2 whitespace-nowrap ${
                  isActive
                    ? "bg-[#172554] text-white shadow-xs"
                    : "bg-[#faf8f5] hover:bg-white text-[#555f6d] hover:text-[#172554] border border-[#dfd9cc]"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[11px] px-2 py-0.5 rounded-full font-mono ${
                    isActive ? "bg-white/20 text-white" : "bg-white text-[#8c7b64] border border-[#dfd9cc]"
                  }`}
                >
                  {formatNumber(count)}
                </span>
              </button>
            );
          })}
        </div>


        {/* Room Showcases - Alternating Editorial Layout */}
        <div className="flex flex-col gap-20 sm:gap-28">
          {filteredRooms.map((room, index) => {
            const isEven = index % 2 === 0;
            const currentImgIdx = roomImageIndexes[room.id] || 0;
            const currentSrc = room.images?.[currentImgIdx] || room.image;

            return (
              <div
                key={room.id}
                className="bg-[#faf8f5] rounded-[24px] border border-[#dfd9cc] overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch shadow-xs hover:shadow-md transition-shadow duration-300"
              >
                {/* Photo Frame with Multi-Image Support */}
                <div
                  className={`lg:col-span-7 relative min-h-[360px] sm:min-h-[440px] lg:min-h-[500px] overflow-hidden group ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <Image
                    src={currentSrc}
                    alt={room.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent lg:hidden" />

                  {/* Room Category Pill */}
                  {room.categoryLabel && (
                    <div className={`absolute top-4 ${isEn ? "left-4" : "right-4"} z-20`}>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/95 text-[#172554] backdrop-blur-md shadow-sm border border-white/60">
                        {room.categoryLabel}
                      </span>
                    </div>
                  )}

                  {/* Multi-Photo Dots Switcher */}
                  {room.images && room.images.length > 1 && (
                    <div className={`absolute bottom-4 ${isEn ? "right-4" : "left-4"} z-20 flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-2.5 py-1.5 rounded-full border border-white/20`}>
                      {room.images.map((_, imgIdx) => (
                        <button
                          key={imgIdx}
                          type="button"
                          onClick={() => {
                            setRoomImageIndexes((prev) => ({ ...prev, [room.id]: imgIdx }));
                          }}
                          className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                            currentImgIdx === imgIdx
                              ? "bg-white scale-125 shadow-xs"
                              : "bg-white/40 hover:bg-white/80"
                          }`}
                          aria-label={`Photo ${imgIdx + 1}`}
                          title={`تصویر ${formatNumber(imgIdx + 1)}`}
                        />
                      ))}
                    </div>
                  )}

                  <div className={`absolute bottom-5 right-5 left-5 text-white lg:hidden z-10 ${isEn ? "text-left" : "text-right"}`}>
                    <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-sm">{room.title}</h3>
                    <p className="text-xs text-white/90 drop-shadow-sm">{room.subtitle}</p>
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

