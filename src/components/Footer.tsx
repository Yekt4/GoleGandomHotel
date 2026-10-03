"use client";

import React from "react";
import Image from "next/image";
import { Phone, MapPin, MessageCircle } from "lucide-react";
import { BookingDialog } from "./BookingDialog";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export function Footer() {
  const { language } = useLanguage();
  const t = translations[language];
  const isEn = language === "en";

  const navLinks = [
    { href: "#home", label: t.nav.home },
    { href: "#story", label: t.nav.story },
    { href: "#rooms", label: t.nav.rooms },
    { href: "#gallery", label: t.nav.gallery },
    { href: "#reels", label: t.nav.reels },
    { href: "#amenities", label: t.nav.amenities },
    { href: "#location", label: t.nav.location },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <footer className="relative bg-[#faf8f5] text-[#172554] border-t border-[#dfd9cc] pt-14 pb-10 overflow-hidden">
      {/* Persian Gereh-Chini Geometric Background Watermark */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.035]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="footer-persian-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
              <path
                d="M 30 0 L 60 30 L 30 60 L 0 30 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <rect
                x="15"
                y="15"
                width="30"
                height="30"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                transform="rotate(45 30 30)"
              />
              <circle cx="30" cy="30" r="5" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-persian-pattern)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
        {/* Islamic & Persian Architectural Medallion (شمسه هشت‌پر قاجاری) */}
        <div className="mb-5 flex flex-col items-center">
          <div className="relative flex items-center justify-center mb-3">
            {/* Geometric 8-Point Star (Shamseh) Vector Motif */}
            <svg
              width="52"
              height="52"
              viewBox="0 0 100 100"
              className="text-[#8c7b64] drop-shadow-xs"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {/* Outer decorative dashed halo */}
              <circle
                cx="50"
                cy="50"
                r="46"
                stroke="currentColor"
                strokeWidth="0.8"
                strokeDasharray="3 3"
                opacity="0.5"
              />
              {/* Outer square */}
              <rect x="22" y="22" width="56" height="56" rx="2" stroke="currentColor" strokeWidth="1.2" />
              {/* Overlapping rotated square forming 8-point Islamic star */}
              <rect
                x="22"
                y="22"
                width="56"
                height="56"
                rx="2"
                stroke="currentColor"
                strokeWidth="1.2"
                transform="rotate(45 50 50)"
              />
              {/* Inner eight-point star (Khatam star) */}
              <polygon
                points="50,25 57,43 75,50 57,57 50,75 43,57 25,50 43,43"
                fill="currentColor"
                opacity="0.12"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              {/* Central floral rosette ring */}
              <circle cx="50" cy="50" r="9" stroke="currentColor" strokeWidth="1.2" fill="#faf8f5" />
              <circle cx="50" cy="50" r="3.5" fill="currentColor" />
            </svg>
          </div>

          {/* Hotel Identity */}
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#172554] mb-1">
            {t.brand.name}
          </h3>
          <span className="text-xs text-[#8c7b64] font-medium tracking-wide">
            {t.brand.subtitle}
          </span>
        </div>

        {/* Short Editorial Heritage Note */}
        <p className="max-w-xl text-xs sm:text-sm text-[#555f6d] leading-relaxed font-light mb-8">
          {t.footer.desc}
        </p>

        {/* Minimal Clean Navigation Row */}
        <nav
          aria-label={t.footer.quickNav}
          className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2.5 text-xs sm:text-sm text-[#475569] font-medium mb-8"
        >
          {navLinks.map((link, idx) => (
            <React.Fragment key={link.href}>
              <a
                href={link.href}
                className="hover:text-[#172554] transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
              {idx < navLinks.length - 1 && (
                <span className="text-[#8c7b64]/40 select-none hidden sm:inline">·</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Minimal Direct Contacts & Quick Action */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-[#555f6d] mb-8 pb-4">
          <a
            href={`tel:${isEn ? "+987132220000" : "07132220000"}`}
            className="flex items-center gap-2 hover:text-[#172554] transition-colors font-semibold"
          >
            <Phone className="w-3.5 h-3.5 text-[#8c7b64]" />
            <span dir="ltr">{t.nav.phone}</span>
          </a>

          <span className="text-[#8c7b64]/40 select-none hidden sm:inline">·</span>

          <a
            href="https://wa.me/989170000000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#25D366] transition-colors font-semibold"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
            <span dir="ltr">{t.nav.mobile}</span>
          </a>

          <span className="text-[#8c7b64]/40 select-none hidden sm:inline">·</span>

          <div className="flex items-center gap-1.5 text-xs text-[#555f6d] font-light">
            <MapPin className="w-3.5 h-3.5 text-[#8c7b64] flex-shrink-0" />
            <span>{t.nav.address}</span>
          </div>

          <div className="w-full sm:w-auto mt-2 sm:mt-0 flex justify-center">
            <BookingDialog
              trigger={
                <Button className="h-8.5 px-4 rounded-full bg-[#172554] hover:bg-[#0f172a] text-white text-xs font-semibold shadow-xs cursor-pointer">
                  {t.footer.contactBtn}
                </Button>
              }
            />
          </div>
        </div>

        {/* Persian Ornamental Divider (نقش ترنج خطی مینیمال) */}
        <div className="w-full flex items-center justify-center my-4">
          <div className="flex-grow border-t border-[#dfd9cc]" />
          <div className="mx-3.5 flex items-center gap-1 text-[#8c7b64]/70">
            {/* Mini Persian Diamond Knot */}
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="w-4 h-4" aria-hidden="true">
              <path
                d="M 10 2 L 13 8 L 19 10 L 13 12 L 10 18 L 7 12 L 1 10 L 7 8 Z"
                fill="currentColor"
                opacity="0.85"
              />
              <circle cx="10" cy="10" r="2" fill="#faf8f5" />
            </svg>
          </div>
          <div className="flex-grow border-t border-[#dfd9cc]" />
        </div>

        {/* Bottom Dignified Bar */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#8c7b64] font-light pt-2">
          <span>{t.footer.copyright}</span>
          <span>{t.footer.locationTag}</span>
        </div>
      </div>
    </footer>
  );
}
