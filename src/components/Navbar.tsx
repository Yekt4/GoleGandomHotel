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
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Notice Bar */}
      <aside className="bg-[#fcfbf7] border-b border-[#e0ded4] text-xs sm:text-sm py-2 text-[#333333]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="text-[#0096f7]">📍</span>
            <span>شیراز، سه‌راه نمازی، خیابان شهید دستغیب، کوچه ۶، عمارت فرهادی</span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href="tel:07132220000"
              className="inline-flex items-center gap-1.5 hover:text-[#0096f7] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#0096f7]" />
              <span className="font-medium">۰۷۱-۳۲۲۲۰۰۰۰</span>
            </a>
            <a
              href="https://wa.me/989170000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-[#25D366] transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
              <span>پذیرش واتس‌اپ: ۰۹۱۷۰۰۰۰۰۰۰</span>
            </a>
          </div>
        </div>
      </aside>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#e0ded4] transition-all duration-200 ${
          scrolled ? "shadow-sm py-2" : "py-3"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Brand with User's Uploaded Logo */}
          <a href="#home" className="flex items-center gap-3.5 group">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border border-[#e0ded4] bg-white flex items-center justify-center p-0.5 group-hover:border-[#0096f7] transition-colors shadow-xs">
              <Image
                src="/images/logo.jpg"
                alt="لوگوی عمارت بوتیک هتل فرهادی شیراز"
                fill
                className="object-contain p-0.5"
                priority
              />
            </div>
            <div className="flex flex-col text-right">
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#1e2952]">
                بوتیک هتل فرهادی
              </span>
              <span className="text-xs text-[#555555]">
                عمارت تاریخی قاجار و پهلوی در شیراز
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            <a href="#home" className="text-[15px] font-normal text-black hover:text-[#0096f7] transition-colors">
              صفحه اصلی
            </a>
            <a href="#story" className="text-[15px] font-normal text-black hover:text-[#0096f7] transition-colors">
              داستان عمارت
            </a>
            <a href="#rooms" className="text-[15px] font-normal text-black hover:text-[#0096f7] transition-colors">
              اتاق‌ها و سوئیت‌ها
            </a>
            <a href="#gallery" className="text-[15px] font-normal text-black hover:text-[#0096f7] transition-colors">
              تصاویر
            </a>
            <a href="#amenities" className="text-[15px] font-normal text-black hover:text-[#0096f7] transition-colors">
              امکانات
            </a>
            <a href="#location" className="text-[15px] font-normal text-black hover:text-[#0096f7] transition-colors">
              موقعیت و نقشه
            </a>
            <a href="#contact" className="text-[15px] font-normal text-black hover:text-[#0096f7] transition-colors">
              تماس با ما
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            <a
              href="tel:07132220000"
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-[12px] border border-[#e0ded4] text-sm text-black hover:border-[#0096f7] hover:text-[#0096f7] hover:bg-[#e6f5fe] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#0096f7]" />
              <span>تماس مستقیم</span>
            </a>

            <BookingDialog
              trigger={
                <Button className="bg-[#0096f7] hover:bg-[#0084dc] text-white rounded-[12px] px-5 py-2 text-sm font-medium transition-all shadow-xs">
                  تماس برای رزرو
                </Button>
              }
            />

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-black hover:text-[#0096f7]"
              aria-label="منو"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-[#e0ded4] px-5 py-5 flex flex-col gap-3.5 mt-2">
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-base text-black hover:text-[#0096f7]"
            >
              صفحه اصلی
            </a>
            <a
              href="#story"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-base text-black hover:text-[#0096f7]"
            >
              داستان عمارت و معماری
            </a>
            <a
              href="#rooms"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-base text-black hover:text-[#0096f7]"
            >
              اتاق‌ها و سوئیت‌ها
            </a>
            <a
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-base text-black hover:text-[#0096f7]"
            >
              گالری تصاویر عمارت
            </a>
            <a
              href="#amenities"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-base text-black hover:text-[#0096f7]"
            >
              امکانات رفاهی و خدمات
            </a>
            <a
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-base text-black hover:text-[#0096f7]"
            >
              موقعیت مکانی و نقشه
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-base text-black hover:text-[#0096f7]"
            >
              ارتباط و رزرو
            </a>
            <div className="pt-3 border-t border-[#e0ded4] flex flex-col gap-2">
              <a
                href="tel:07132220000"
                className="py-2 text-sm text-[#0096f7] flex items-center gap-2 font-medium"
              >
                <Phone className="w-4 h-4" />
                تماس تلفنی: ۰۷۱-۳۲۲۲۰۰۰۰
              </a>
              <a
                href="https://wa.me/989170000000"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 text-sm text-[#25D366] flex items-center gap-2 font-medium"
              >
                <MessageCircle className="w-4 h-4" />
                واتس‌اپ پذیرش: ۰۹۱۷۰۰۰۰۰۰۰
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
