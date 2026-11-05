"use client";
import type { ReactNode } from "react";
import { track, type TrackEvent } from "@/lib/analytics";

/** Plain anchor that fires a privacy-safe analytics event (no personal data). */
export default function TrackedLink({
  href,
  className,
  event,
  where,
  children,
}: {
  href: string;
  className?: string;
  event: TrackEvent;
  where: string;
  children: ReactNode;
}) {
  return (
    <a href={href} className={className} onClick={() => track(event, { location: where })}>
      {children}
    </a>
  );
}
