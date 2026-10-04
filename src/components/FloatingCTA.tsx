"use client";

import React from "react";
import { Phone, MessageCircle } from "lucide-react";
import { BookingDialog } from "./BookingDialog";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export function FloatingCTA() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <aside
      aria-label={t.floatingCTA.receptionBtn}
      className={`fixed bottom-[max(1rem,calc(env(safe-area-inset-bottom)+0.75rem))] z-40 flex items-center gap-2 ${
        language === "fa" ? "left-3 sm:left-6" : "right-3 sm:right-6"
      }`}
    >
      {/* WhatsApp Quiet Link */}
      <a
        href="https://wa.me/989173029002"
        target="_blank"
        rel="noopener noreferrer"
        className="w-11 h-11 rounded-full bg-white/95 hover:bg-white text-[#25D366] flex items-center justify-center shadow-lg border border-[#dfd9cc] backdrop-blur-md transition-colors"
        aria-label={t.floatingCTA.whatsappAria}
        title={t.floatingCTA.whatsappAria}
      >
        <MessageCircle className="w-5 h-5" />
      </a>

      {/* Reception Call Button with Installment Tag */}
      <BookingDialog
        trigger={
          <button className="h-11 px-4 sm:px-5 rounded-full bg-[#172554] hover:bg-[#0f172a] text-white font-medium text-xs sm:text-sm flex items-center gap-2 shadow-xl transition-all cursor-pointer border border-white/10 hover:scale-105">
            <Phone className="w-4 h-4 text-white/80" />
            <span>{t.floatingCTA.receptionBtn}</span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#0085FF] text-[10px] font-bold text-white shadow-2xs">
              {language === "fa" ? "۴ قسطه با اسنپ‌پی" : "4x Snapp! Pay"}
            </span>
          </button>
        }
      />
    </aside>
  );
}

