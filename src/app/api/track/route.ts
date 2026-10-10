import { NextRequest, NextResponse } from "next/server";
import { appendEvent } from "@/lib/analytics-store";

export async function POST(req: NextRequest) {
  try {
    let body: any = {};
    const contentType = req.headers.get("content-type") || "";

    if (contentType.includes("application/json")) {
      body = await req.json();
    } else {
      const text = await req.text();
      try {
        body = JSON.parse(text);
      } catch {
        body = {};
      }
    }

    if (!body.eventName) {
      return NextResponse.json({ error: "Missing eventName" }, { status: 400 });
    }

    const userAgent = req.headers.get("user-agent") || "";
    const referer = req.headers.get("referer") || "";

    const event = appendEvent({
      eventName: body.eventName,
      visitorId: body.visitorId || "anonymous",
      timestamp: body.timestamp || new Date().toISOString(),
      path: body.path || "/",
      device: body.device || (userAgent.includes("Mobi") ? "mobile" : "desktop"),
      utmSource: body.utmSource || "direct",
      utmMedium: body.utmMedium || undefined,
      utmCampaign: body.utmCampaign || undefined,
      utmContent: body.utmContent || undefined,
      utmTerm: body.utmTerm || undefined,
      room: body.room || undefined,
      type: body.type || undefined,
      number: body.number || undefined,
      location: body.location || undefined,
      metadata: {
        userAgent: userAgent.substring(0, 150),
        referer: referer.substring(0, 150),
        ...body.metadata,
      },
    });

    return NextResponse.json({ success: true, eventId: event.id });
  } catch (err: any) {
    console.error("Tracking API error:", err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
