"use client";

import React from "react";
import Image from "next/image";
import { Phone, MapPin } from "lucide-react";
import { BookingDialog } from "./BookingDialog";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export function Footer() {
  const { language } = useLanguage();
  const t = translations[language];
  const isEn = language === "en";

  return (
    <footer className="bg-[#fcfbf7] border-t border-[#e0ded4] pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12 ${isEn ? "text-left" : "text-right"}`}>
          {/* Brand Info */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#e0ded4] bg-white p-0.5">
                <Image
                  src="/images/logo.jpg"
                  alt={t.brand.title}
                  fill
                  sizes="48px"
                  className="object-contain p-0.5"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-[#1e2952]">{t.brand.name}</span>
                <span className="text-xs text-[#555555]">{t.brand.subtitle}</span>
              </div>
            </div>

            <p className="text-sm leading-7 text-[#555555] max-w-md">
              {t.footer.desc}
            </p>

            <div className="flex items-center gap-2 text-xs text-[#555f6d]">
              <MapPin className="w-4 h-4 text-[#8c7b64] flex-shrink-0" />
              <span>{t.nav.address}</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="text-base font-medium text-[#172554] mb-1">{t.footer.quickNav}</h4>
            <ul className="flex flex-col gap-2 text-sm text-[#555f6d]">
              <li>
                <a href="#home" className="hover:text-[#172554] transition-colors">
                  {t.nav.home}
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-[#172554] transition-colors">
                  {t.nav.story}
                </a>
              </li>
              <li>
                <a href="#rooms" className="hover:text-[#172554] transition-colors">
                  {t.nav.rooms}
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#172554] transition-colors">
                  {t.nav.gallery}
                </a>
              </li>
              <li>
                <a href="#reels" className="hover:text-[#172554] transition-colors">
                  {t.nav.reels}
                </a>
              </li>
              <li>
                <a href="#amenities" className="hover:text-[#172554] transition-colors">
                  {t.nav.amenities}
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#172554] transition-colors">
                  {t.nav.location}
                </a>
              </li>
            </ul>
          </div>

          {/* Rooms */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="text-base font-medium text-[#172554] mb-1">{t.footer.roomsNav}</h4>
            <ul className="flex flex-col gap-2 text-sm text-[#555f6d]">
              {t.rooms.items.map((room) => (
                <li key={room.id}>
                  <a href="#rooms" className="hover:text-[#172554]">
                    {room.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="text-base font-medium text-[#172554] mb-1">{t.footer.directReserve}</h4>
            <p className="text-xs text-[#555f6d] leading-relaxed font-light">
              {t.footer.receptionNotice}
            </p>
            <div className="flex flex-col gap-2 mt-1">
              <a
                href={`tel:${isEn ? "+987132220000" : "07132220000"}`}
                className="text-base font-bold text-[#172554] flex items-center gap-1.5"
                dir="ltr"
              >
                <Phone className="w-4 h-4 text-[#8c7b64]" />
                {t.nav.phone}
              </a>
              <a
                href={`tel:${isEn ? "+989170000000" : "09170000000"}`}
                className="text-base font-bold text-[#172554] flex items-center gap-1.5"
                dir="ltr"
              >
                <Phone className="w-4 h-4 text-[#8c7b64]" />
                {t.nav.mobile}
              </a>
            </div>
            <div className="pt-2">
              <BookingDialog
                trigger={
                  <Button className="w-full bg-[#172554] hover:bg-[#0f172a] text-white rounded-full h-10 text-xs sm:text-sm font-medium cursor-pointer">
                    {t.footer.contactBtn}
                  </Button>
                }
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#dfd9cc] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8c7b64]">
          <span>
            {t.footer.copyright}
          </span>
          <span>
            {t.footer.locationTag}
          </span>
        </div>
      </div>
    </footer>
  );
}
