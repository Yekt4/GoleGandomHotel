"use client";

import React from "react";
import { Phone, MessageCircle } from "lucide-react";
import { BookingDialog } from "./BookingDialog";

export function FloatingCTA() {
  return (
    <aside aria-label="دسترسی سریع به پذیرش" className="fixed bottom-6 left-6 z-40 flex items-center gap-2">
      {/* WhatsApp Quiet Link */}
      <a
        href="https://wa.me/989170000000"
        target="_blank"
        rel="noopener noreferrer"
        className="w-11 h-11 rounded-full bg-white/95 hover:bg-white text-[#25D366] flex items-center justify-center shadow-lg border border-[#dfd9cc] backdrop-blur-md transition-colors"
        aria-label="گفتگو با پذیرش در واتس‌اپ"
        title="واتس‌اپ پذیرش"
      >
        <MessageCircle className="w-5 h-5" />
      </a>

      {/* Reception Call Button */}
      <BookingDialog
        trigger={
          <button className="h-11 px-5 rounded-full bg-[#172554] hover:bg-[#0f172a] text-white font-medium text-xs sm:text-sm flex items-center gap-2 shadow-lg transition-colors cursor-pointer border border-white/10">
            <Phone className="w-4 h-4 text-white/80" />
            <span>پذیرش هتل</span>
          </button>
        }
      />
    </aside>
  );
}

