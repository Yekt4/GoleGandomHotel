"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Phone, Menu, X, MessageCircle, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookingDialog } from "./BookingDialog";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, isEn } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Minimal Top Notice Bar - Only visible at top */}
      <aside
        className={`bg-[#172554] text-white/80 text-xs py-2 transition-all duration-300 ${
          scrolled ? "max-h-0 opacity-0 overflow-hidden py-0" : "max-h-12 opacity-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="truncate font-light text-white/90">{t.nav.address}</span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href="tel:07132220000"
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-[#c59b27]" />
              <span className="font-semibold" dir="ltr">{t.nav.phone}</span>
            </a>
            <a
              href="https://wa.me/989170000000"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 hover:text-[#25D366] transition-colors"
            >
              <MessageCircle className="w-3 h-3 text-[#25D366]" />
              <span dir="ltr">{t.nav.mobile}</span>
            </a>
          </div>
        </div>
      </aside>

      {/* Main Header - Morphs into a Centered Floating Minimal Island on Scroll */}
      <header
        className={`fixed z-50 transition-all duration-300 ease-out ${
          scrolled
            ? `top-3 sm:top-4 inset-x-0 mx-auto w-[calc(100%-1.5rem)] lg:w-max max-w-[96vw] bg-white/95 backdrop-blur-xl shadow-[0_10px_35px_-5px_rgba(23,37,84,0.12)] border border-[#dfd9cc] px-3.5 sm:px-5 lg:px-6 py-2 sm:py-2.5 ${
                mobileMenuOpen ? "rounded-2xl" : "rounded-full"
              }`
            : "top-8 inset-x-0 w-full bg-white/95 backdrop-blur-md border-b border-[#dfd9cc] px-4 sm:px-8 py-3"
        }`}
      >
        <div className="w-full flex items-center justify-between gap-3 sm:gap-4 lg:gap-8">
          {/* Brand Logo & Name */}
          <a href="#home" className="flex items-center gap-2 sm:gap-2.5 group flex-shrink-0 whitespace-nowrap">
            <div
              className={`relative rounded-full overflow-hidden border border-[#dfd9cc] bg-white flex items-center justify-center transition-all flex-shrink-0 ${
                scrolled ? "w-8 h-8 sm:w-9 sm:h-9" : "w-10 h-10 sm:w-11 sm:h-11"
              }`}
            >
              <Image
                src="/images/logo.jpg"
                alt={t.brand.title}
                fill
                sizes="44px"
                className="object-contain p-0.5"
                priority
              />
            </div>
            <div className={`flex flex-col whitespace-nowrap ${isEn ? "text-left" : "text-right"}`}>
              <span
                className={`font-bold tracking-tight text-[#172554] transition-all whitespace-nowrap ${
                  scrolled ? "text-sm sm:text-base" : "text-base sm:text-xl font-black"
                }`}
              >
                {t.brand.name}
              </span>
              {!scrolled && (
                <span className="hidden sm:block text-[10px] text-[#8c7b64] whitespace-nowrap">
                  {t.brand.subtitle}
                </span>
              )}
            </div>
          </a>

          {/* Desktop Nav - Clean & Centered */}
          <nav className="hidden lg:flex items-center gap-3.5 xl:gap-5 text-center flex-nowrap whitespace-nowrap">
            <a
              href="#home"
              className="text-xs xl:text-sm font-medium text-[#172554] hover:text-[#8c7b64] transition-colors whitespace-nowrap py-1"
            >
              {t.nav.home}
            </a>
            <a
              href="#story"
              className="text-xs xl:text-sm font-medium text-[#172554] hover:text-[#8c7b64] transition-colors whitespace-nowrap py-1"
            >
              {t.nav.story}
            </a>
            <a
              href="#rooms"
              className="text-xs xl:text-sm font-medium text-[#172554] hover:text-[#8c7b64] transition-colors whitespace-nowrap py-1"
            >
              {t.nav.rooms}
            </a>
            <a
              href="#gallery"
              className="text-xs xl:text-sm font-medium text-[#172554] hover:text-[#8c7b64] transition-colors whitespace-nowrap py-1"
            >
              {t.nav.gallery}
            </a>
            <a
              href="#reels"
              className="text-xs xl:text-sm font-medium text-[#172554] hover:text-[#8c7b64] transition-colors whitespace-nowrap py-1"
            >
              {t.nav.reels}
            </a>
            <a
              href="#amenities"
              className="text-xs xl:text-sm font-medium text-[#172554] hover:text-[#8c7b64] transition-colors whitespace-nowrap py-1"
            >
              {t.nav.amenities}
            </a>
            <a
              href="#location"
              className="text-xs xl:text-sm font-medium text-[#172554] hover:text-[#8c7b64] transition-colors whitespace-nowrap py-1"
            >
              {t.nav.location}
            </a>
            <a
              href="#contact"
              className="text-xs xl:text-sm font-medium text-[#172554] hover:text-[#8c7b64] transition-colors whitespace-nowrap py-1"
            >
              {t.nav.contact}
            </a>
          </nav>

          {/* Actions: Language Switcher & CTA */}
          <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0 whitespace-nowrap">
            {/* Language Switcher Pill */}
            <button
              type="button"
              onClick={toggleLanguage}
              className="h-8 sm:h-9 px-2.5 sm:px-3 rounded-full border border-[#dfd9cc] bg-white hover:bg-[#faf8f5] text-[#172554] text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs whitespace-nowrap flex-shrink-0"
              title={isEn ? "تغییر زبان به فارسی" : "Switch language to English"}
              aria-label="Language switcher"
            >
              <Globe className="w-3.5 h-3.5 text-[#8c7b64] flex-shrink-0" />
              <span className="font-bold whitespace-nowrap">{isEn ? "فارسی" : "EN"}</span>
            </button>

            <BookingDialog
              trigger={
                <Button
                  className={`bg-[#172554] hover:bg-[#0f172a] text-white font-medium transition-all shadow-sm cursor-pointer whitespace-nowrap flex-shrink-0 ${
                    scrolled
                      ? "rounded-full px-3.5 sm:px-4.5 py-1.5 h-8 sm:h-9 text-xs sm:text-xs"
                      : "rounded-full px-4 sm:px-5 py-2 h-9 sm:h-10 text-xs sm:text-sm"
                  }`}
                >
                  <Phone className="w-3.5 h-3.5 text-white/80 flex-shrink-0" />
                  <span className="whitespace-nowrap">{t.nav.bookBtn}</span>
                </Button>
              }
            />

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 sm:p-2 text-[#172554] hover:bg-slate-100 rounded-full transition-colors cursor-pointer flex-shrink-0"
              aria-label="منو"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-[#dfd9cc] bg-white/95 rounded-2xl p-4 shadow-lg flex flex-col gap-2.5">
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-sm font-medium text-[#172554] hover:text-[#8c7b64]"
            >
              {t.nav.home}
            </a>
            <a
              href="#story"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-sm font-medium text-[#172554] hover:text-[#8c7b64]"
            >
              {t.nav.story}
            </a>
            <a
              href="#rooms"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-sm font-medium text-[#172554] hover:text-[#8c7b64]"
            >
              {t.nav.rooms}
            </a>
            <a
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-sm font-medium text-[#172554] hover:text-[#8c7b64]"
            >
              {t.nav.gallery}
            </a>
            <a
              href="#reels"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-sm font-medium text-[#172554] hover:text-[#8c7b64]"
            >
              {t.nav.reels}
            </a>
            <a
              href="#amenities"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-sm font-medium text-[#172554] hover:text-[#8c7b64]"
            >
              {t.nav.amenities}
            </a>
            <a
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-sm font-medium text-[#172554] hover:text-[#8c7b64]"
            >
              {t.nav.location}
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-sm font-medium text-[#172554] hover:text-[#8c7b64]"
            >
              {t.nav.contact}
            </a>
            <div className="pt-2 border-t border-[#dfd9cc] flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  toggleLanguage();
                  setMobileMenuOpen(false);
                }}
                className="py-1.5 text-xs text-[#172554] flex items-center justify-between font-bold"
              >
                <span className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-[#8c7b64]" />
                  <span>زبان / Language</span>
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#faf8f5] border border-[#dfd9cc]">
                  {isEn ? "فارسی" : "English"}
                </span>
              </button>
              <a
                href="tel:07132220000"
                className="py-1 text-xs text-[#172554] flex items-center gap-2 font-bold"
              >
                <Phone className="w-3.5 h-3.5 text-[#172554]" />
                <span dir="ltr">{t.nav.phone}</span>
              </a>
              <a
                href="https://wa.me/989170000000"
                target="_blank"
                rel="noopener noreferrer"
                className="py-1 text-xs text-[#25D366] flex items-center gap-2 font-bold"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span dir="ltr">{t.nav.mobile}</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

