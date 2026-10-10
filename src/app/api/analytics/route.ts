import { NextRequest, NextResponse } from "next/server";
import {
  getAnalyticsReport,
  resetAnalyticsStore,
  seedSamplePilotData,
} from "@/lib/analytics-store";
import { isAuthenticatedSession } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    const isAuth = await isAuthenticatedSession(req);
    if (!isAuth) {
      return NextResponse.json(
        {
          success: false,
          error: "دسترسی غیرمجاز: نشست کاربری معتبر نیست یا منقضی شده است. لطفاً وارد شوید.",
        },
        { status: 401 }
      );
    }

    const range = (req.nextUrl.searchParams.get("range") || "7d") as "today" | "7d" | "30d" | "all";
    const startDate = req.nextUrl.searchParams.get("startDate") || undefined;
    const endDate = req.nextUrl.searchParams.get("endDate") || undefined;

    const report = getAnalyticsReport({ range, startDate, endDate });
    return NextResponse.json({ success: true, report });
  } catch (err: any) {
    console.error("Analytics report error:", err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const isAuth = await isAuthenticatedSession(req);
    if (!isAuth) {
      return NextResponse.json(
        {
          success: false,
          error: "دسترسی غیرمجاز: انجام این عملیات نیازمند ورود به حساب کاربری است.",
        },
        { status: 401 }
      );
    }

    const body = await req.json();
    const action = body.action;

    if (action === "reset") {
      resetAnalyticsStore();
      return NextResponse.json({ success: true, message: "داده‌های تحلیلی با موفقیت ریست شدند." });
    }

    if (action === "seed") {
      seedSamplePilotData();
      return NextResponse.json({
        success: true,
        message: "داده‌های نمونه پایلوت با موفقیت ایجاد و تزریق شدند.",
      });
    }

    return NextResponse.json({ error: "Invalid action" }, { status: 400 });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
