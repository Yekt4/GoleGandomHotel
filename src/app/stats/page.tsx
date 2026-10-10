"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Phone,
  MessageCircle,
  Users,
  TrendingUp,
  Smartphone,
  Monitor,
  RefreshCw,
  Copy,
  Check,
  Sparkles,
  ArrowRight,
  SlidersHorizontal,
  Hotel,
  ShieldCheck,
  Clock,
  ExternalLink,
} from "lucide-react";
import { DashboardReport } from "@/lib/analytics-store";
import { toast } from "sonner";

export default function AnalyticsStatsPage() {
  const [data, setData] = useState<DashboardReport | null>(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [copied, setCopied] = useState(false);

  // Link Generator State
  const [genSource, setGenSource] = useState("instagram");
  const [genMedium, setGenMedium] = useState("story");
  const [genCampaign, setGenCampaign] = useState("summer_pilot");

  const fetchStats = async (isManual = false) => {
    if (isManual) setRefreshing(true);
    try {
      const res = await fetch("/api/analytics");
      const json = await res.json();
      if (json.success && json.report) {
        setData(json.report);
        if (isManual) toast.success("داده‌های آماری به‌روزرسانی شدند");
      }
    } catch {
      toast.error("خطا در دریافت اطلاعات آماری");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchStats();
    // Auto-refresh every 30 seconds
    const interval = setInterval(() => fetchStats(), 30000);
    return () => clearInterval(interval);
  }, []);

  const handleReset = async () => {
    if (!confirm("آیا از ریست کامل داده‌های تحلیلی اطمینان دارید؟")) return;
    try {
      await fetch("/api/analytics", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "reset" }),
      });
      toast.info("داده‌ها ریست شدند");
      fetchStats();
    } catch {
      toast.error("خطا در ریست داده‌ها");
    }
  };

  const handleSeed = async () => {
    try {
      await fetch("/api/analytics", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "seed" }),
      });
      toast.success("داده‌های شبیه‌سازی پایلوت با موفقیت تزریق شدند");
      fetchStats();
    } catch {
      toast.error("خطا در تزریق داده‌های نمونه");
    }
  };

  const generatedUrl = typeof window !== "undefined"
    ? `${window.location.origin}/?utm_source=${genSource}&utm_medium=${genMedium}&utm_campaign=${genCampaign}`
    : `https://farhadihotel.com/?utm_source=${genSource}&utm_medium=${genMedium}&utm_campaign=${genCampaign}`;

  const copyGeneratedLink = () => {
    navigator.clipboard.writeText(generatedUrl);
    setCopied(true);
    toast.success("لینک کمپین کپی شد");
    setTimeout(() => setCopied(false), 2000);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#faf8f5] flex items-center justify-center p-6 text-center" dir="rtl">
        <div className="flex flex-col items-center gap-3">
          <RefreshCw className="w-8 h-8 text-[#172554] animate-spin" />
          <p className="text-sm font-semibold text-[#172554]">در حال آماده‌سازی داده‌های تحلیلی پایلوت...</p>
        </div>
      </div>
    );
  }

  const summary = data?.summary || {
    totalVisitors: 0,
    totalPageviews: 0,
    totalLeads: 0,
    totalCalls: 0,
    totalWhatsApp: 0,
    conversionRate: 0,
    topSource: "direct",
    topRoom: "اتاق تالار آیینه",
  };

  return (
    <div className="min-h-screen bg-[#f7f5f0] text-[#172554] p-4 sm:p-6 lg:p-10 select-none" dir="rtl">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Top Header & Brand Bar */}
        <header className="bg-white rounded-3xl p-6 sm:p-8 border border-[#dfd9cc] shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#172554] text-white">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-300" />
                پایلوت اسنپ‌تریپ
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-100 text-emerald-800">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                داده‌های زنده
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-[#172554] tracking-tight">
              پایش عملکرد و نرخ تبدیل لیدهای تلفنی
            </h1>
            <p className="text-xs sm:text-sm text-[#555f6d]">
              سنجش تقاضای رزرو مستقیم، تبدیل تماس‌ها به رزرو قطعی و سهم کانال‌های ورودی بوتیک هتل فرهادی شیراز
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto">
            <button
              onClick={() => fetchStats(true)}
              disabled={refreshing}
              className="flex-1 sm:flex-initial h-10 px-4 rounded-xl bg-[#faf8f5] hover:bg-slate-100 border border-[#dfd9cc] text-xs font-semibold text-[#172554] flex items-center justify-center gap-2 transition-all cursor-pointer shadow-2xs active:scale-95"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${refreshing ? "animate-spin" : ""}`} />
              <span>به‌روزرسانی</span>
            </button>

            <button
              onClick={handleSeed}
              className="flex-1 sm:flex-initial h-10 px-4 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-200 text-xs font-semibold text-amber-900 flex items-center justify-center gap-2 transition-all cursor-pointer shadow-2xs active:scale-95"
              title="تزریق داده‌های شبیه‌سازی شده برای پرزنت به مدیران"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>دیتای دمو</span>
            </button>

            <button
              onClick={handleReset}
              className="h-10 px-3 rounded-xl bg-[#faf8f5] hover:bg-rose-50 border border-[#dfd9cc] hover:border-rose-200 text-xs font-semibold text-slate-500 hover:text-rose-700 transition-all cursor-pointer"
              title="پاک‌سازی کامل لاگ‌ها"
            >
              ریست
            </button>

            <Link
              href="/"
              target="_blank"
              className="h-10 px-4 rounded-xl bg-[#172554] hover:bg-[#0f172a] text-white text-xs font-semibold flex items-center gap-2 transition-all shadow-sm"
            >
              <span>مشاهده سایت</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
        </header>

        {/* 4 Key Executive Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Metric 1: Total Visitors */}
          <div className="bg-white rounded-3xl p-6 border border-[#dfd9cc] shadow-xs relative overflow-hidden flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-[#8c7b64]">کل بازدیدکنندگان</span>
              <div className="w-10 h-10 rounded-2xl bg-[#eff6ff] flex items-center justify-center text-[#172554]">
                <Users className="w-5 h-5" />
              </div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black text-[#172554] tracking-tight tabular-nums">
                {summary.totalVisitors.toLocaleString("fa-IR")}
              </div>
              <p className="text-[11px] text-[#555f6d] mt-1.5 flex items-center gap-2">
                <span>موبایل: {data?.devices.mobile.toLocaleString("fa-IR")} ({data?.devices.mobileShare}٪)</span>
                <span>·</span>
                <span>دسکتاپ: {data?.devices.desktop.toLocaleString("fa-IR")}</span>
              </p>
            </div>
          </div>

          {/* Metric 2: Total Leads (Calls & WhatsApp) */}
          <div className="bg-white rounded-3xl p-6 border border-[#dfd9cc] shadow-xs relative overflow-hidden flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-emerald-800">کل لیدهای تماس (Lead)</span>
              <div className="w-10 h-10 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-700">
                <Phone className="w-5 h-5" />
              </div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black text-emerald-700 tracking-tight tabular-nums">
                {summary.totalLeads.toLocaleString("fa-IR")}
              </div>
              <p className="text-[11px] text-[#555f6d] mt-1.5 flex items-center gap-2">
                <span>تماس تلفنی: {summary.totalCalls.toLocaleString("fa-IR")}</span>
                <span>·</span>
                <span>چت واتس‌اپ: {summary.totalWhatsApp.toLocaleString("fa-IR")}</span>
              </p>
            </div>
          </div>

          {/* Metric 3: Conversion Rate */}
          <div className="bg-white rounded-3xl p-6 border border-[#dfd9cc] shadow-xs relative overflow-hidden flex flex-col justify-between bg-gradient-to-br from-white to-amber-50/40">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-amber-900">نرخ تبدیل لید (CR %)</span>
              <div className="w-10 h-10 rounded-2xl bg-amber-100/70 flex items-center justify-center text-amber-800">
                <TrendingUp className="w-5 h-5" />
              </div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black text-amber-900 tracking-tight tabular-nums flex items-baseline gap-1">
                <span>{summary.conversionRate.toLocaleString("fa-IR")}</span>
                <span className="text-xl font-bold">٪</span>
              </div>
              <p className="text-[11px] text-[#8c7b64] mt-1.5">
                از هر ۱۰۰ بازدیدکننده، حدود {summary.conversionRate.toLocaleString("fa-IR")} نفر تماس می‌گیرند
              </p>
            </div>
          </div>

          {/* Metric 4: Top Performing Room */}
          <div className="bg-white rounded-3xl p-6 border border-[#dfd9cc] shadow-xs relative overflow-hidden flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-[#8c7b64]">بیشترین استعلام اتاق</span>
              <div className="w-10 h-10 rounded-2xl bg-slate-100 flex items-center justify-center text-[#172554]">
                <Hotel className="w-5 h-5" />
              </div>
            </div>
            <div>
              <div className="text-lg sm:text-xl font-bold text-[#172554] truncate">
                {summary.topRoom}
              </div>
              <p className="text-[11px] text-[#555f6d] mt-1.5">
                کانال برتر ورودی: <strong className="text-[#172554]">{summary.topSource}</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Channels & Rooms Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Channel Attribution Breakdown (Table) */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-7 border border-[#dfd9cc] shadow-xs">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#f0ece1]">
              <div>
                <h2 className="text-base sm:text-lg font-bold text-[#172554]">
                  عملکرد به تفکیک کانال‌های ورودی (UTM Attribution)
                </h2>
                <p className="text-xs text-[#555f6d] mt-1">
                  کدام کمپین‌ها بیشترین ترافیک و تماس تلفنی را وارد چرخه فروش کرده‌اند؟
                </p>
              </div>
              <SlidersHorizontal className="w-4 h-4 text-[#8c7b64]" />
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-right text-xs">
                <thead>
                  <tr className="border-b border-[#f0ece1] text-[#8c7b64] font-bold">
                    <th className="pb-3 pr-2">کانال ورودی (Source)</th>
                    <th className="pb-3 text-center">کمپین (Campaign)</th>
                    <th className="pb-3 text-center">بازدیدکننده</th>
                    <th className="pb-3 text-center">تماس تلفنی</th>
                    <th className="pb-3 text-center">واتس‌اپ</th>
                    <th className="pb-3 text-center">مجموع لیدها</th>
                    <th className="pb-3 text-left pl-2">نرخ تبدیل (CR)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#f7f5f0]">
                  {data?.channels.map((chan, idx) => (
                    <tr key={idx} className="hover:bg-[#faf8f5] transition-colors">
                      <td className="py-3.5 pr-2 font-bold text-[#172554]">
                        <span className="inline-block px-2.5 py-1 rounded-md bg-[#faf8f5] border border-[#dfd9cc]">
                          {chan.source}
                        </span>
                      </td>
                      <td className="py-3.5 text-center text-[#555f6d] font-mono text-[11px]" dir="ltr">
                        {chan.campaign || "—"}
                      </td>
                      <td className="py-3.5 text-center tabular-nums font-semibold text-[#172554]">
                        {chan.visitors.toLocaleString("fa-IR")}
                      </td>
                      <td className="py-3.5 text-center tabular-nums text-emerald-700 font-bold">
                        {chan.calls.toLocaleString("fa-IR")}
                      </td>
                      <td className="py-3.5 text-center tabular-nums text-emerald-700 font-bold">
                        {chan.whatsapp.toLocaleString("fa-IR")}
                      </td>
                      <td className="py-3.5 text-center tabular-nums font-black text-[#172554]">
                        {chan.leads.toLocaleString("fa-IR")}
                      </td>
                      <td className="py-3.5 text-left pl-2">
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-black bg-amber-50 text-amber-900 border border-amber-200 tabular-nums">
                          {chan.conversionRate.toLocaleString("fa-IR")}٪
                        </span>
                      </td>
                    </tr>
                  ))}
                  {(!data?.channels || data.channels.length === 0) && (
                    <tr>
                      <td colSpan={7} className="py-6 text-center text-slate-400">
                        داده‌ای ثبت نشده است. روی «دیتای دمو» کلیک کنید.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Room Inquiry Share (Card) */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-6 sm:p-7 border border-[#dfd9cc] shadow-xs space-y-5">
            <div>
              <h2 className="text-base sm:text-lg font-bold text-[#172554]">
                تقاضای رزرو به تفکیک اتاق‌ها
              </h2>
              <p className="text-xs text-[#555f6d] mt-1">
                سهم هر اتاق از کل تماس‌ها و چت‌های دریافتی
              </p>
            </div>

            <div className="space-y-3.5">
              {data?.rooms.slice(0, 6).map((r, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span className="text-[#172554]">{r.room}</span>
                    <span className="text-[#8c7b64] tabular-nums">
                      {r.leads.toLocaleString("fa-IR")} لید ({r.share}٪)
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-[#f0ece1] overflow-hidden">
                    <div
                      className="h-full rounded-full bg-[#172554]"
                      style={{ width: `${Math.min(r.share * 2.5, 100)}%` }}
                    />
                  </div>
                </div>
              ))}
              {(!data?.rooms || data.rooms.length === 0) && (
                <p className="text-xs text-slate-400 text-center py-6">هنوز لیدی برای اتاق‌ها ثبت نشده است.</p>
              )}
            </div>
          </div>
        </div>

        {/* Live Leads Stream & Link Generator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Live Recent Inquiries Feed */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-7 border border-[#dfd9cc] shadow-xs space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#f0ece1]">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#8c7b64]" />
                <h2 className="text-base font-bold text-[#172554]">جریان زنده لیدها (Live Activity Stream)</h2>
              </div>
              <span className="text-xs text-[#8c7b64]">آخرین رویدادهای تماس</span>
            </div>

            <div className="space-y-2.5 max-h-[360px] overflow-y-auto pr-1">
              {data?.recentLeads.map((lead, idx) => {
                const isCall = lead.eventName.includes("call");
                return (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 rounded-2xl bg-[#faf8f5] border border-[#dfd9cc]/70 text-xs"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 ${
                          isCall ? "bg-emerald-100 text-emerald-800" : "bg-emerald-500 text-white"
                        }`}
                      >
                        {isCall ? <Phone className="w-4 h-4" /> : <MessageCircle className="w-4 h-4" />}
                      </div>
                      <div>
                        <div className="font-bold text-[#172554]">
                          {lead.room || "استعلام عمومی هتل"}
                        </div>
                        <div className="text-[11px] text-[#555f6d] flex items-center gap-1.5 mt-0.5">
                          <span>منبع: <strong className="text-[#172554]">{lead.utmSource || "direct"}</strong></span>
                          {lead.utmCampaign && <span>· کمپین: {lead.utmCampaign}</span>}
                        </div>
                      </div>
                    </div>

                    <div className="text-left text-[11px] text-[#8c7b64] tabular-nums font-mono">
                      {new Date(lead.timestamp).toLocaleTimeString("fa-IR", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </div>
                  </div>
                );
              })}
              {(!data?.recentLeads || data.recentLeads.length === 0) && (
                <p className="text-center py-8 text-xs text-slate-400">
                  هنوز تماسی ثبت نشده است. با کلیک روی دکمه‌های سایت یا «دیتای دمو» آن را تست کنید.
                </p>
              )}
            </div>
          </div>

          {/* Campaign Link Generator */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-7 border border-[#dfd9cc] shadow-xs space-y-4">
            <div>
              <h2 className="text-base font-bold text-[#172554]">ابزار ساخت لینک کمپین (UTM Builder)</h2>
              <p className="text-xs text-[#555f6d] mt-1">
                برای استوری اینستاگرام، پیامک اسنپ‌تریپ یا اینفلوئنسرها لینک اختصاصی بسازید تا دقیق تفکیک شوند:
              </p>
            </div>

            <div className="space-y-3">
              <div>
                <label className="text-[11px] font-bold text-[#8c7b64] block mb-1">منبع (utm_source):</label>
                <div className="grid grid-cols-3 gap-1.5">
                  {["instagram", "snapp_sms", "google", "telegram", "influencer", "direct"].map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setGenSource(s)}
                      className={`h-8 rounded-lg text-xs font-semibold border transition-all ${
                        genSource === s
                          ? "bg-[#172554] text-white border-[#172554]"
                          : "bg-[#faf8f5] text-[#555f6d] border-[#dfd9cc] hover:bg-white"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[11px] font-bold text-[#8c7b64] block mb-1">نوع رسانه (medium):</label>
                  <input
                    type="text"
                    value={genMedium}
                    onChange={(e) => setGenMedium(e.target.value)}
                    className="w-full h-8 px-2.5 rounded-lg border border-[#dfd9cc] text-xs font-mono text-left bg-[#faf8f5]"
                    dir="ltr"
                    placeholder="story / banner / cpc"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-bold text-[#8c7b64] block mb-1">نام کمپین (campaign):</label>
                  <input
                    type="text"
                    value={genCampaign}
                    onChange={(e) => setGenCampaign(e.target.value)}
                    className="w-full h-8 px-2.5 rounded-lg border border-[#dfd9cc] text-xs font-mono text-left bg-[#faf8f5]"
                    dir="ltr"
                    placeholder="pilot_shiraz"
                  />
                </div>
              </div>

              <div className="pt-2">
                <div className="p-2.5 rounded-xl bg-[#faf8f5] border border-[#dfd9cc] font-mono text-[11px] break-all text-[#172554] text-left select-all" dir="ltr">
                  {generatedUrl}
                </div>
                <button
                  type="button"
                  onClick={copyGeneratedLink}
                  className="mt-2.5 w-full h-10 rounded-xl bg-[#172554] hover:bg-[#0f172a] text-white text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm active:scale-95"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? "لینک در کلیپ‌بورد کپی شد!" : "کپی لینک اختصاصی کمپین"}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
