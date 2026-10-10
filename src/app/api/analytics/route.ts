import { NextRequest, NextResponse } from "next/server";
import {
  getAnalyticsReport,
  resetAnalyticsStore,
  seedSamplePilotData,
} from "@/lib/analytics-store";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
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
