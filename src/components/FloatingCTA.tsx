"use client";

import React from "react";
import { Phone, MessageCircle } from "lucide-react";
import { BookingDialog } from "./BookingDialog";

export function FloatingCTA() {
  return (
    <div className="fixed bottom-5 left-5 z-40 flex items-center gap-2.5 animate-in fade-in slide-in-from-bottom-4 duration-300">
      {/* WhatsApp Quick Button */}
      <a
        href="https://wa.me/989170000000"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-[12px] bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-lg transition-transform hover:-translate-y-1"
        aria-label="گفتگو در واتس‌اپ"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Reserve Button */}
      <BookingDialog
        trigger={
          <button className="h-12 px-5 rounded-[12px] bg-[#0096f7] hover:bg-[#0084dc] text-white font-medium text-sm sm:text-base flex items-center gap-2 shadow-lg transition-transform hover:-translate-y-1 cursor-pointer">
            <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>تماس برای رزرو</span>
          </button>
        }
      />
    </div>
  );
}
