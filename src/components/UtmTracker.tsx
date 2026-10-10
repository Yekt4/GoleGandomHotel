"use client";

import { useEffect, Suspense, useRef } from "react";
import { useSearchParams, usePathname } from "next/navigation";
import { captureAndStoreUtm, trackEvent } from "@/lib/tracker";

function TrackerInner() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const reportedMilestones = useRef<{ [key: number]: boolean }>({});
  const sessionStart = useRef<number>(Date.now());

  useEffect(() => {
    // 1. Capture UTM params from URL or storage
    const utm = captureAndStoreUtm();
    sessionStart.current = Date.now();
    reportedMilestones.current = {};

    // 2. Track Page View
    trackEvent("page_view", {
      path: pathname,
      referrer: typeof document !== "undefined" ? document.referrer : "",
      title: typeof document !== "undefined" ? document.title : "",
      utmSource: utm.utm_source,
      utmCampaign: utm.utm_campaign,
      utmMedium: utm.utm_medium,
    });

    // 3. Scroll Depth Tracking (25%, 50%, 75%, 100%)
    const handleScroll = () => {
      if (typeof window === "undefined" || typeof document === "undefined") return;
      const scrollY = window.scrollY || window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      const pct = Math.round((scrollY / docHeight) * 100);

      const milestones = [25, 50, 75, 100];
      for (const m of milestones) {
        if (pct >= m && !reportedMilestones.current[m]) {
          reportedMilestones.current[m] = true;
          trackEvent("scroll_depth", {
            depth: m,
            path: pathname,
          });
        }
      }
    };

    // 4. Session Dwell Time Tracking
    const reportDwellTime = () => {
      const elapsed = Math.round((Date.now() - sessionStart.current) / 1000);
      if (elapsed >= 3) {
        trackEvent("dwell_time", {
          seconds: elapsed,
          path: pathname,
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("pagehide", reportDwellTime);
    window.addEventListener("beforeunload", reportDwellTime);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("pagehide", reportDwellTime);
      window.removeEventListener("beforeunload", reportDwellTime);
      reportDwellTime();
    };
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
