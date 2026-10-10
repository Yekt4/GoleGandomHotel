import { NextRequest, NextResponse } from "next/server";
import {
  getAnalyticsReport,
  resetAnalyticsStore,
  seedSamplePilotData,
} from "@/lib/analytics-store";

export const dynamic = "force-dynamic";

function checkAuth(req: NextRequest, bodyPassword?: string): boolean {
  const expectedPassword = process.env.STATS_PASSWORD || "farhadi2026";
  const headerPassword = req.headers.get("x-stats-password");
  const queryPassword = req.nextUrl.searchParams.get("password");

  const provided = bodyPassword || headerPassword || queryPassword;
  return Boolean(provided && provided.trim() === expectedPassword.trim());
}

export async function GET(req: NextRequest) {
  try {
    if (!checkAuth(req)) {
      return NextResponse.json(
        { success: false, error: "دسترسی غیرمجاز: رمز عبور اشتباه است یا وارد نشده است." },
        { status: 401 }
      );
    }

    const report = getAnalyticsReport();
    return NextResponse.json({ success: true, report });
  } catch (err: any) {
    console.error("Analytics report error:", err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const action = body.action;

    // Special check for verify action
    if (action === "verify") {
      if (checkAuth(req, body.password)) {
        return NextResponse.json({
          success: true,
          message: "رمز عبور تایید شد.",
        });
      }
      return NextResponse.json(
        { success: false, error: "رمز عبور نادرست است." },
        { status: 401 }
      );
    }

    // All other actions require valid authentication
    if (!checkAuth(req, body.password)) {
      return NextResponse.json(
        { success: false, error: "دسترسی غیرمجاز: رمز عبور نامعتبر است." },
        { status: 401 }
      );
    }

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

