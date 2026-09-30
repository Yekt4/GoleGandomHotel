import type { Metadata } from "next";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://farhadihotel.com"),
  title: "بوتیک هتل فرهادی شیراز | اقامت در عمارت تاریخی قاجار-پهلوی",
  description: "بوتیک هتل سنتی فرهادی در بافت تاریخی شیراز، بازسازی اصیل دوران قاجار و پهلوی با ۱۴ اتاق اختصاصی، تالار آینه، پنج‌دری، کافه سنتی و چشم‌انداز گنبد شاهچراغ. رزرو مستقیم.",
  keywords: ["بوتیک هتل فرهادی شیراز", "هتل سنتی شیراز", "رزرو هتل شیراز", "شاهچراغ", "هتل بافت تاریخی"],
  openGraph: {
    title: "بوتیک هتل فرهادی شیراز | اقامتگاه تاریخی و بومی",
    description: "تجربه‌ای فراموش‌نشدنی از اقامت در قلب تاریخی شیراز؛ سه‌راه نمازی، خیابان شهید دستغیب.",
    images: ["/images/hero.jpg"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className="h-full">
      <head>
        {/* Google Fonts - Estedad (weights 100 to 900) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Estedad:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-slate-900 antialiased selection:bg-[#eff6ff] selection:text-[#172554]">
        {children}
        <Toaster dir="rtl" richColors position="top-center" />
      </body>
    </html>
  );
}
