"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Phone, Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookingDialog } from "./BookingDialog";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
            <span className="truncate font-light text-white/90">شیراز، سه‌راه نمازی، خیابان شهید دستغیب، کوچه ۶</span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href="tel:07132220000"
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-[#c59b27]" />
              <span className="font-semibold" dir="ltr">۰۷۱-۳۲۲۲۰۰۰۰</span>
            </a>
            <a
              href="https://wa.me/989170000000"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 hover:text-[#25D366] transition-colors"
            >
              <MessageCircle className="w-3 h-3 text-[#25D366]" />
              <span dir="ltr">۰۹۱۷-۰۰۰-۰۰۰۰</span>
            </a>
          </div>
        </div>
      </aside>

      {/* Main Header - Morphs into a Centered Floating Minimal Island on Scroll */}
      <header
        className={`fixed z-50 transition-all duration-300 ease-out ${
          scrolled
            ? "top-4 inset-x-0 mx-auto w-[92%] sm:w-[88%] max-w-4xl bg-white/95 backdrop-blur-xl rounded-full shadow-lg border border-[#dfd9cc] px-4 sm:px-6 py-2.5"
            : "top-8 inset-x-0 w-full bg-white/95 backdrop-blur-md border-b border-[#dfd9cc] px-4 sm:px-8 py-3"
        }`}
      >
        <div className="w-full flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a href="#home" className="flex items-center gap-2.5 group flex-shrink-0">
            <div
              className={`relative rounded-full overflow-hidden border border-[#dfd9cc] bg-white flex items-center justify-center transition-all ${
                scrolled ? "w-9 h-9" : "w-11 h-11"
              }`}
            >
              <Image
                src="/images/logo.jpg"
                alt="لوگوی عمارت بوتیک هتل فرهادی شیراز"
                fill
                sizes="44px"
                className="object-contain p-0.5"
                priority
              />
            </div>
            <div className="flex flex-col text-right">
              <span
                className={`font-black tracking-tight text-[#172554] transition-all ${
                  scrolled ? "text-base sm:text-lg" : "text-lg sm:text-xl"
                }`}
              >
                عمارت فرهادی
              </span>
              {!scrolled && (
                <span className="hidden sm:block text-[10px] text-[#8c7b64]">
                  بوتیک هتل سنتی شیراز
                </span>
              )}
            </div>
          </a>

          {/* Desktop Nav - Clean & Centered */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-7 text-center">
            <a
              href="#home"
              className="text-xs sm:text-sm font-medium text-[#172554] hover:text-[#8c7b64] transition-colors"
            >
              خانه
            </a>
            <a
              href="#story"
              className="text-xs sm:text-sm font-medium text-[#172554] hover:text-[#8c7b64] transition-colors"
            >
              داستان عمارت
            </a>
            <a
              href="#rooms"
              className="text-xs sm:text-sm font-medium text-[#172554] hover:text-[#8c7b64] transition-colors"
            >
              اتاق‌ها
            </a>
            <a
              href="#gallery"
              className="text-xs sm:text-sm font-medium text-[#172554] hover:text-[#8c7b64] transition-colors"
            >
              تصاویر
            </a>
            <a
              href="#reels"
              className="text-xs sm:text-sm font-medium text-[#172554] hover:text-[#8c7b64] transition-colors"
            >
              ویدیوها
            </a>
            <a
              href="#amenities"
              className="text-xs sm:text-sm font-medium text-[#172554] hover:text-[#8c7b64] transition-colors"
            >
              خدمات
            </a>
            <a
              href="#location"
              className="text-xs sm:text-sm font-medium text-[#172554] hover:text-[#8c7b64] transition-colors"
            >
              موقعیت
            </a>
            <a
              href="#contact"
              className="text-xs sm:text-sm font-medium text-[#172554] hover:text-[#8c7b64] transition-colors"
            >
              تماس
            </a>
          </nav>

          {/* Actions & CTA */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <BookingDialog
              trigger={
                <Button
                  className={`bg-[#172554] hover:bg-[#0f172a] text-white font-medium transition-all shadow-sm cursor-pointer ${
                    scrolled
                      ? "rounded-full px-4 sm:px-5 py-1.5 h-9 text-xs sm:text-sm"
                      : "rounded-full px-5 py-2 h-10 text-sm"
                  }`}
                >
                  <Phone className="w-3.5 h-3.5 text-white/80 ml-1.5" />
                  <span>پذیرش هتل</span>
                </Button>
              }
            />

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#172554]"
              aria-label="منو"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-slate-100 bg-white/95 rounded-2xl p-4 shadow-lg flex flex-col gap-2.5">
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-sm font-medium text-[#172554] hover:text-[#8c7b64]"
            >
              صفحه اصلی
            </a>
            <a
              href="#story"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-sm font-medium text-[#172554] hover:text-[#8c7b64]"
            >
              داستان عمارت
            </a>
            <a
              href="#rooms"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-sm font-medium text-[#172554] hover:text-[#8c7b64]"
            >
              اتاق‌ها و سوئیت‌ها
            </a>
            <a
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-sm font-medium text-[#172554] hover:text-[#8c7b64]"
            >
              گالری تصاویر
            </a>
            <a
              href="#reels"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-sm font-medium text-[#172554] hover:text-[#8c7b64]"
            >
              روایت‌های ویدیویی
            </a>
            <a
              href="#amenities"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-sm font-medium text-[#172554] hover:text-[#8c7b64]"
            >
              میزبانی و خدمات
            </a>
            <a
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-sm font-medium text-[#172554] hover:text-[#8c7b64]"
            >
              موقعیت و نقشه
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-sm font-medium text-[#172554] hover:text-[#8c7b64]"
            >
              ارتباط و پذیرش
            </a>
            <div className="pt-2 border-t border-slate-100 flex flex-col gap-1.5">
              <a
                href="tel:07132220000"
                className="py-1.5 text-xs text-[#172554] flex items-center gap-2 font-bold"
              >
                <Phone className="w-3.5 h-3.5 text-[#172554]" />
                تلفن: ۰۷۱-۳۲۲۲۰۰۰۰
              </a>
              <a
                href="https://wa.me/989170000000"
                target="_blank"
                rel="noopener noreferrer"
                className="py-1.5 text-xs text-[#25D366] flex items-center gap-2 font-bold"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                واتس‌اپ: ۰۹۱۷۰۰۰۰۰۰۰
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
