import fs from "fs";
import path from "path";

export interface AnalyticsEvent {
  id: string;
  eventName: string;
  visitorId: string;
  timestamp: string;
  path: string;
  device?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
  utmTerm?: string;
  room?: string;
  type?: string;
  number?: string;
  location?: string;
  [key: string]: any;
}

export interface ChannelStat {
  source: string;
  medium?: string;
  campaign?: string;
  visitors: number;
  leads: number;
  calls: number;
  whatsapp: number;
  conversionRate: number;
}

export interface RoomStat {
  room: string;
  leads: number;
  calls: number;
  whatsapp: number;
  share: number;
}

export interface DashboardReport {
  summary: {
    totalVisitors: number;
    totalPageviews: number;
    totalLeads: number;
    totalCalls: number;
    totalWhatsApp: number;
    conversionRate: number;
    topSource: string;
    topRoom: string;
  };
  channels: ChannelStat[];
  rooms: RoomStat[];
  devices: {
    mobile: number;
    desktop: number;
    tablet: number;
    mobileShare: number;
  };
  recentLeads: AnalyticsEvent[];
  hourlyActivity: { hour: string; visitors: number; leads: number }[];
}

const DATA_DIR = path.join(process.cwd(), ".data");
const DATA_FILE = path.join(DATA_DIR, "analytics.json");

function ensureStoreExists() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(
      DATA_FILE,
      JSON.stringify({ events: [], seeded: false }, null, 2),
      "utf-8"
    );
  }
}

export function getAllEvents(): AnalyticsEvent[] {
  ensureStoreExists();
  try {
    const raw = fs.readFileSync(DATA_FILE, "utf-8");
    const data = JSON.parse(raw);
    return data.events || [];
  } catch (err) {
    console.error("Error reading analytics file:", err);
    return [];
  }
}

export function appendEvent(eventData: Omit<AnalyticsEvent, "id">): AnalyticsEvent {
  ensureStoreExists();
  const events = getAllEvents();
  const newEvent: AnalyticsEvent = {
    eventName: eventData.eventName,
    visitorId: eventData.visitorId,
    timestamp: eventData.timestamp,
    path: eventData.path,
    ...eventData,
    id: "evt_" + Math.random().toString(36).substring(2, 9) + "_" + Date.now().toString(36),
  };

  events.push(newEvent);

  // Keep up to 10,000 most recent events to prevent unbounded file growth
  const trimmed = events.slice(-10000);

  fs.writeFileSync(
    DATA_FILE,
    JSON.stringify({ events: trimmed, lastUpdated: new Date().toISOString() }, null, 2),
    "utf-8"
  );

  return newEvent;
}

export function resetAnalyticsStore(): void {
  ensureStoreExists();
  fs.writeFileSync(
    DATA_FILE,
    JSON.stringify({ events: [], lastUpdated: new Date().toISOString() }, null, 2),
    "utf-8"
  );
}

/**
 * Seed sample data reflecting a realistic 14-day boutique hotel pilot run
 * useful for demonstrations and executive presentations.
 */
export function seedSamplePilotData(): void {
  ensureStoreExists();
  const sampleEvents: AnalyticsEvent[] = [];

  const sources = [
    { source: "instagram", medium: "story", campaign: "summer_getaway", weight: 45 },
    { source: "snapp_trip", medium: "direct_sms", campaign: "vip_members", weight: 30 },
    { source: "google", medium: "organic", campaign: "shiraz_boutique_hotels", weight: 15 },
    { source: "direct", medium: "none", campaign: "direct_traffic", weight: 10 },
  ];

  const rooms = [
    "اتاق تالار آیینه",
    "اتاق ارسی پستو",
    "اتاق پهلوی",
    "اتاق پنج‌دری",
    "اتاق ارجان",
    "اتاق هزار آیینه",
    "اتاق کریم‌خان",
    "اتاق سه‌دری",
  ];

  const now = Date.now();

  // Generate 240 simulated visitors across the last 7 days
  for (let i = 0; i < 240; i++) {
    const hoursAgo = Math.floor(Math.random() * 168); // within last 7 days
    const eventTime = new Date(now - hoursAgo * 3600 * 1000).toISOString();
    const visitorId = "vis_sim_" + i;

    // Pick source based on weights
    const randWeight = Math.random() * 100;
    let chosenSource = sources[0];
    let cumulative = 0;
    for (const s of sources) {
      cumulative += s.weight;
      if (randWeight <= cumulative) {
        chosenSource = s;
        break;
      }
    }

    const device = Math.random() < 0.78 ? "mobile" : "desktop";

    // 1. Pageview
    sampleEvents.push({
      id: `seed_pv_${i}`,
      eventName: "page_view",
      visitorId,
      timestamp: eventTime,
      path: "/",
      device,
      utmSource: chosenSource.source,
      utmMedium: chosenSource.medium,
      utmCampaign: chosenSource.campaign,
    });

    // 2. High-intent conversion: ~18% convert into phone calls or WhatsApp leads
    if (Math.random() < 0.18) {
      const room = rooms[Math.floor(Math.random() * rooms.length)];
      const isCall = Math.random() < 0.65;
      const eventName = isCall ? "phone_call_click" : "whatsapp_click";

      sampleEvents.push({
        id: `seed_lead_${i}`,
        eventName,
        visitorId,
        timestamp: new Date(new Date(eventTime).getTime() + 180000).toISOString(), // 3 mins later
        path: "/",
        device,
        utmSource: chosenSource.source,
        utmMedium: chosenSource.medium,
        utmCampaign: chosenSource.campaign,
        room,
        location: Math.random() < 0.5 ? "room_card" : "floating_bar",
        type: isCall ? (Math.random() < 0.6 ? "mobile" : "landline") : "whatsapp",
      });
    }
  }

  // Sort chronologically
  sampleEvents.sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime());

  fs.writeFileSync(
    DATA_FILE,
    JSON.stringify({ events: sampleEvents, seeded: true, lastUpdated: new Date().toISOString() }, null, 2),
    "utf-8"
  );
}

/**
 * Compute the complete executive metrics report
 */
export function getAnalyticsReport(): DashboardReport {
  ensureStoreExists();
  const events = getAllEvents();


  const visitorsSet = new Set<string>();
  let totalPageviews = 0;
  let totalCalls = 0;
  let totalWhatsApp = 0;

  const channelMap = new Map<string, { visitors: Set<string>; calls: number; whatsapp: number; campaign?: string; medium?: string }>();
  const roomMap = new Map<string, { calls: number; whatsapp: number }>();
  const deviceCounts = { mobile: 0, desktop: 0, tablet: 0 };
  const recentLeads: AnalyticsEvent[] = [];

  for (const evt of events) {
    const vId = evt.visitorId || "anonymous";
    visitorsSet.add(vId);

    const source = evt.utmSource || "direct";
    if (!channelMap.has(source)) {
      channelMap.set(source, {
        visitors: new Set(),
        calls: 0,
        whatsapp: 0,
        campaign: evt.utmCampaign,
        medium: evt.utmMedium,
      });
    }
    const cData = channelMap.get(source)!;
    cData.visitors.add(vId);

    if (evt.device === "mobile") deviceCounts.mobile++;
    else if (evt.device === "tablet") deviceCounts.tablet++;
    else deviceCounts.desktop++;

    if (evt.eventName === "page_view") {
      totalPageviews++;
    }

    if (evt.eventName === "phone_call_click" || evt.eventName === "lead_phone_click") {
      totalCalls++;
      cData.calls++;
      recentLeads.push(evt);

      if (evt.room) {
        const r = roomMap.get(evt.room) || { calls: 0, whatsapp: 0 };
        r.calls++;
        roomMap.set(evt.room, r);
      }
    }

    if (evt.eventName === "whatsapp_click" || evt.eventName === "lead_whatsapp_click") {
      totalWhatsApp++;
      cData.whatsapp++;
      recentLeads.push(evt);

      if (evt.room) {
        const r = roomMap.get(evt.room) || { calls: 0, whatsapp: 0 };
        r.whatsapp++;
        roomMap.set(evt.room, r);
      }
    }
  }

  const totalVisitors = visitorsSet.size;
  const totalLeads = totalCalls + totalWhatsApp;
  const conversionRate = totalVisitors > 0 ? Number(((totalLeads / totalVisitors) * 100).toFixed(1)) : 0;

  // Channel array
  const channels: ChannelStat[] = Array.from(channelMap.entries()).map(([source, data]) => {
    const visCount = data.visitors.size;
    const leads = data.calls + data.whatsapp;
    const cr = visCount > 0 ? Number(((leads / visCount) * 100).toFixed(1)) : 0;
    return {
      source,
      medium: data.medium,
      campaign: data.campaign,
      visitors: visCount,
      leads,
      calls: data.calls,
      whatsapp: data.whatsapp,
      conversionRate: cr,
    };
  });

  channels.sort((a, b) => b.leads - a.leads || b.visitors - a.visitors);

  // Rooms array
  const rooms: RoomStat[] = Array.from(roomMap.entries()).map(([room, data]) => {
    const leads = data.calls + data.whatsapp;
    const share = totalLeads > 0 ? Number(((leads / totalLeads) * 100).toFixed(1)) : 0;
    return {
      room,
      leads,
      calls: data.calls,
      whatsapp: data.whatsapp,
      share,
    };
  });

  rooms.sort((a, b) => b.leads - a.leads);

  // Top source and room
  const topSource = channels[0]?.source || "—";
  const topRoom = rooms[0]?.room || "—";

  // Device breakdown share
  const totalDevices = deviceCounts.mobile + deviceCounts.desktop + deviceCounts.tablet;
  const mobileShare = totalDevices > 0 ? Number(((deviceCounts.mobile / totalDevices) * 100).toFixed(1)) : 0;

  // Sort recent leads descending
  recentLeads.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

  // Last 7 days / hourly trend
  const hourlyActivity: { hour: string; visitors: number; leads: number }[] = [];
  const hoursMap = new Map<string, { visitors: Set<string>; leads: number }>();

  for (let d = 6; d >= 0; d--) {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() - d);
    const dateStr = targetDate.toLocaleDateString("fa-IR", { month: "numeric", day: "numeric" });
    hoursMap.set(dateStr, { visitors: new Set(), leads: 0 });
  }

  for (const evt of events) {
    try {
      const evtDate = new Date(evt.timestamp).toLocaleDateString("fa-IR", { month: "numeric", day: "numeric" });
      if (hoursMap.has(evtDate)) {
        const item = hoursMap.get(evtDate)!;
        item.visitors.add(evt.visitorId);
        if (evt.eventName.includes("call") || evt.eventName.includes("whatsapp")) {
          item.leads++;
        }
      }
    } catch {
      // ignore
    }
  }

  hoursMap.forEach((val, key) => {
    hourlyActivity.push({
      hour: key,
      visitors: val.visitors.size,
      leads: val.leads,
    });
  });

  return {
    summary: {
      totalVisitors,
      totalPageviews,
      totalLeads,
      totalCalls,
      totalWhatsApp,
      conversionRate,
      topSource,
      topRoom,
    },
    channels,
    rooms,
    devices: {
      ...deviceCounts,
      mobileShare,
    },
    recentLeads: recentLeads.slice(0, 20),
    hourlyActivity,
  };
}
