"use client";

import React from "react";
import { Phone, MessageCircle } from "lucide-react";
import { BookingDialog } from "./BookingDialog";

export function FloatingCTA() {
  return (
    <div className="fixed bottom-6 left-6 z-40 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-300">
      {/* WhatsApp Quick Button */}
      <a
        href="https://wa.me/989170000000"
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 rounded-[14px] bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-xl transition-all hover:scale-105 hover:-translate-y-1"
        aria-label="گفتگو در واتس‌اپ"
      >
        <MessageCircle className="w-7 h-7" />
      </a>

      {/* Reserve Button */}
      <BookingDialog
        trigger={
          <button className="h-13 px-6 rounded-[14px] bg-[#172554] hover:bg-[#0f172a] text-white font-bold text-sm sm:text-base flex items-center gap-2.5 shadow-xl transition-all hover:scale-105 hover:-translate-y-1 cursor-pointer border border-white/20">
            <Phone className="w-5 h-5 text-[#60a5fa]" />
            <span>تماس برای رزرو</span>
          </button>
        }
      />
    </div>
  );
}
