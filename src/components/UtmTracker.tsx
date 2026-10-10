"use client";

import { useEffect, Suspense } from "react";
import { useSearchParams, usePathname } from "next/navigation";
import { captureAndStoreUtm, trackEvent } from "@/lib/tracker";

function TrackerInner() {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  useEffect(() => {
    // 1. Capture UTM params from URL or storage
    const utm = captureAndStoreUtm();

    // 2. Track Page View
    trackEvent("page_view", {
      path: pathname,
      referrer: typeof document !== "undefined" ? document.referrer : "",
      title: typeof document !== "undefined" ? document.title : "",
      utmSource: utm.utm_source,
      utmCampaign: utm.utm_campaign,
      utmMedium: utm.utm_medium,
    });
  }, [searchParams, pathname]);

  return null;
}

export function UtmTracker() {
  return (
    <Suspense fallback={null}>
      <TrackerInner />
    </Suspense>
  );
}
