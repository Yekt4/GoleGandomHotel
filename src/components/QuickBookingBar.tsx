"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { BookingDialog } from "./BookingDialog";

export function QuickBookingBar() {
  const [selectedRoom, setSelectedRoom] = useState("همه اتاق‌ها");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsDialogOpen(true);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 relative z-20 -mt-10 sm:-mt-14">
      <div className="bg-white rounded-[20px] border border-[#e2e8f0] p-6 sm:p-8 shadow-xl">
        <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
          <div className="space-y-1.5">
            <label htmlFor="q-checkin" className="text-xs sm:text-sm font-bold text-[#172554]">
              تاریخ ورود
            </label>
            <input
              id="q-checkin"
              type="date"
              className="w-full h-12 px-3 bg-[#f8fafc] border border-[#cbd5e1] rounded-[8px] text-sm focus:outline-none focus:border-[#172554] focus:bg-white transition-colors"
              required
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="q-checkout" className="text-xs sm:text-sm font-bold text-[#172554]">
              تاریخ خروج
            </label>
            <input
              id="q-checkout"
              type="date"
              className="w-full h-12 px-3 bg-[#f8fafc] border border-[#cbd5e1] rounded-[8px] text-sm focus:outline-none focus:border-[#172554] focus:bg-white transition-colors"
              required
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="q-room" className="text-xs sm:text-sm font-bold text-[#172554]">
              نوع اقامتگاه
            </label>
            <select
              id="q-room"
              value={selectedRoom}
              onChange={(e) => setSelectedRoom(e.target.value)}
              className="w-full h-12 px-3 bg-[#f8fafc] border border-[#cbd5e1] rounded-[8px] text-sm focus:outline-none focus:border-[#172554] focus:bg-white"
            >
              <option value="همه اتاق‌ها">انتخاب اتاق (همه واحدهای عمارت)</option>
              <option value="اتاق تالار آینه قاجاری">اتاق تالار آینه قاجاری</option>
              <option value="سوئیت رویال شاه‌نشین">سوئیت رویال شاه‌نشین</option>
              <option value="اتاق پنج‌دری رو به آفتاب">اتاق پنج‌دری رو به آفتاب</option>
              <option value="اتاق دبل سنتی با طاق خشتی">اتاق دبل سنتی با طاق خشتی</option>
              <option value="اتاق ارسی سه‌دری مشرف به مهتابی">اتاق ارسی سه‌دری مشرف به مهتابی</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="q-guests" className="text-xs sm:text-sm font-bold text-[#172554]">
              تعداد مهمانان
            </label>
            <select
              id="q-guests"
              className="w-full h-12 px-3 bg-[#f8fafc] border border-[#cbd5e1] rounded-[8px] text-sm focus:outline-none focus:border-[#172554] focus:bg-white"
            >
              <option value="1">۱ نفر</option>
              <option value="2" defaultValue="2">۲ نفر</option>
              <option value="3">۳ نفر</option>
              <option value="4">۴ نفر یا بیشتر</option>
            </select>
          </div>

          <div>
            <Button
              type="submit"
              className="w-full h-12 bg-[#172554] hover:bg-[#0f172a] text-white rounded-[12px] font-bold text-sm sm:text-base transition-all shadow-md cursor-pointer"
            >
              استعلام ظرفیت و نرخ
            </Button>
          </div>
        </form>

        <BookingDialog
          initialRoom={selectedRoom === "همه اتاق‌ها" ? "اتاق تالار آینه قاجاری" : selectedRoom}
          isOpen={isDialogOpen}
          onOpenChange={setIsDialogOpen}
        />
      </div>
    </section>
  );
}
