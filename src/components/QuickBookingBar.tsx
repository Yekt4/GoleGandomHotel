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
    <section className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 -mt-6 sm:-mt-10">
      <div className="bg-white rounded-[12px] border border-[#e0ded4] p-5 sm:p-7 shadow-sm">
        <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
          <div className="space-y-1">
            <label htmlFor="q-checkin" className="text-xs sm:text-sm font-medium text-[#333333]">
              تاریخ ورود
            </label>
            <input
              id="q-checkin"
              type="date"
              className="w-full h-11 px-3 bg-white border border-[#e0ded4] rounded-[6px] text-sm focus:outline-none focus:border-[#0096f7] transition-colors"
              required
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="q-checkout" className="text-xs sm:text-sm font-medium text-[#333333]">
              تاریخ خروج
            </label>
            <input
              id="q-checkout"
              type="date"
              className="w-full h-11 px-3 bg-white border border-[#e0ded4] rounded-[6px] text-sm focus:outline-none focus:border-[#0096f7] transition-colors"
              required
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="q-room" className="text-xs sm:text-sm font-medium text-[#333333]">
              نوع اقامتگاه
            </label>
            <select
              id="q-room"
              value={selectedRoom}
              onChange={(e) => setSelectedRoom(e.target.value)}
              className="w-full h-11 px-3 bg-white border border-[#e0ded4] rounded-[6px] text-sm focus:outline-none focus:border-[#0096f7]"
            >
              <option value="همه اتاق‌ها">انتخاب نوع اتاق (همه)</option>
              <option value="اتاق تالار آینه">اتاق تالار آینه</option>
              <option value="سوئیت سلطنتی شاه‌نشین">سوئیت سلطنتی شاه‌نشین</option>
              <option value="اتاق پنج‌دری قاجاری">اتاق پنج‌دری قاجاری</option>
              <option value="اتاق دبل سنتی">اتاق دبل سنتی</option>
              <option value="اتاق ارسی سنتی">اتاق ارسی سنتی</option>
            </select>
          </div>

          <div className="space-y-1">
            <label htmlFor="q-guests" className="text-xs sm:text-sm font-medium text-[#333333]">
              تعداد مهمانان
            </label>
            <select
              id="q-guests"
              className="w-full h-11 px-3 bg-white border border-[#e0ded4] rounded-[6px] text-sm focus:outline-none focus:border-[#0096f7]"
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
              className="w-full h-11 bg-[#0096f7] hover:bg-[#0084dc] text-white rounded-[12px] font-medium text-sm transition-all"
            >
              استعلام ظرفیت و رزرو
            </Button>
          </div>
        </form>

        <BookingDialog
          initialRoom={selectedRoom === "همه اتاق‌ها" ? "اتاق تالار آینه" : selectedRoom}
          isOpen={isDialogOpen}
          onOpenChange={setIsDialogOpen}
        />
      </div>
    </section>
  );
}
