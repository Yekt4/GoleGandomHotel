"use client";

export interface UtmParams {
  utm_source: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
}

const STORAGE_KEY = "farhadi_utm_params";
const VISITOR_KEY = "farhadi_visitor_id";

/**
 * Get or create unique anonymous visitor ID
 */
export function getVisitorId(): string {
  if (typeof window === "undefined") return "";
  let id = localStorage.getItem(VISITOR_KEY);
  if (!id) {
    id = "vis_" + Math.random().toString(36).substring(2, 9) + "_" + Date.now().toString(36);
    localStorage.setItem(VISITOR_KEY, id);
  }
  return id;
}

/**
 * Extract UTM parameters from current URL or storage
 */
export function captureAndStoreUtm(): UtmParams {
  if (typeof window === "undefined") {
    return { utm_source: "direct" };
  }

  const urlParams = new URLSearchParams(window.location.search);
  const utmSource = urlParams.get("utm_source");

  // If new UTM found in URL, overwrite and persist
  if (utmSource) {
    const freshUtm: UtmParams = {
      utm_source: utmSource.toLowerCase(),
      utm_medium: urlParams.get("utm_medium")?.toLowerCase() || undefined,
      utm_campaign: urlParams.get("utm_campaign")?.toLowerCase() || undefined,
      utm_content: urlParams.get("utm_content")?.toLowerCase() || undefined,
      utm_term: urlParams.get("utm_term")?.toLowerCase() || undefined,
    };
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(freshUtm));
      localStorage.setItem(STORAGE_KEY, JSON.stringify(freshUtm));
    } catch {
      // Storage quota or private mode fallback
    }
    return freshUtm;
  }

  // Check existing stored UTM from this session
  try {
    const sessionUtm = sessionStorage.getItem(STORAGE_KEY);
    if (sessionUtm) return JSON.parse(sessionUtm);

    const localUtm = localStorage.getItem(STORAGE_KEY);
    if (localUtm) return JSON.parse(localUtm);
  } catch {
    // ignore
  }

  // Check organic referrer if no UTM present
  const ref = document.referrer ? new URL(document.referrer).hostname : "";
  let organicSource = "direct";
  if (ref) {
    if (ref.includes("instagram.com")) organicSource = "instagram_organic";
    else if (ref.includes("google.com")) organicSource = "google_search";
    else if (ref.includes("t.me") || ref.includes("telegram")) organicSource = "telegram";
    else if (ref.includes("snapp")) organicSource = "snapp_ecosystem";
    else organicSource = ref.replace("www.", "");
  }

  return { utm_source: organicSource };
}

/**
 * Get current UTM parameters
 */
export function getStoredUtm(): UtmParams {
  return captureAndStoreUtm();
}

/**
 * Detect client device type
 */
function getDeviceType(): "mobile" | "tablet" | "desktop" {
  if (typeof window === "undefined") return "desktop";
  const ua = navigator.userAgent.toLowerCase();
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return "tablet";
  }
  if (
    /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/i.test(
      ua
    ) ||
    window.innerWidth < 768
  ) {
    return "mobile";
  }
  return "desktop";
}

/**
 * Send an event to our analytics engine and push to dataLayer
 */
export function trackEvent(
  eventName: string,
  properties: Record<string, any> = {}
) {
  if (typeof window === "undefined") return;

  const utm = getStoredUtm();
  const visitorId = getVisitorId();
  const device = getDeviceType();

  const payload = {
    eventName,
    visitorId,
    timestamp: new Date().toISOString(),
    path: window.location.pathname,
    device,
    utmSource: utm.utm_source,
    utmMedium: utm.utm_medium,
    utmCampaign: utm.utm_campaign,
    utmContent: utm.utm_content,
    utmTerm: utm.utm_term,
    ...properties,
  };

  // Push to GTM/GA4 dataLayer if installed
  if (typeof (window as any).dataLayer !== "undefined") {
    (window as any).dataLayer.push({
      event: eventName,
      ...payload,
    });
  }

  // Send to internal tracking endpoint via beacon or fetch
  const jsonPayload = JSON.stringify(payload);
  const endpoint = "/api/track";

  try {
    if (navigator.sendBeacon) {
      const blob = new Blob([jsonPayload], { type: "application/json" });
      navigator.sendBeacon(endpoint, blob);
    } else {
      fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: jsonPayload,
        keepalive: true,
      }).catch(() => {});
    }
  } catch {
    // Silent fail to avoid disrupting user experience
  }
}

/**
 * Build WhatsApp click URL with campaign attribution tag embedded into text
 */
export function buildAttributedWhatsAppUrl(
  phone: string = "989173029002",
  roomTitle?: string,
  lang: string = "fa"
): string {
  const utm = getStoredUtm();
  let refTag = "";
  if (utm.utm_source && utm.utm_source !== "direct") {
    refTag = ` [کد ارجاع: ${utm.utm_source}${utm.utm_campaign ? ` / ${utm.utm_campaign}` : ""}]`;
  }

  let message = "";
  if (lang === "en") {
    message = roomTitle
      ? `Hello, I would like to inquire about booking ${roomTitle} at Farhadi Boutique Hotel Shiraz.${refTag}`
      : `Hello, I would like to inquire about booking a room at Farhadi Boutique Hotel Shiraz.${refTag}`;
  } else {
    message = roomTitle
      ? `سلام، درخواست رزرو ${roomTitle} در بوتیک هتل فرهادی شیراز را دارم.${refTag}`
      : `سلام، جهت استعلام و رزرو اتاق در بوتیک هتل فرهادی شیراز پیام می‌دهم.${refTag}`;
  }

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
