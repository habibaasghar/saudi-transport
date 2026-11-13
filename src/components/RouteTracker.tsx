"use client";

import { useEffect } from "react";
import { track } from "@/lib/analytics";

/** Fires route_page_view once per route page load. A page view is not a lead. */
export function RouteTracker({ route, locale }: { route: string; locale: string }) {
  useEffect(() => {
    track("route_page_view", { route, language: locale });
  }, [route, locale]);
  return null;
}
