import type { Locale } from "@/i18n/routing";

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.ridesaudi.com").replace(/\/$/, "");
export const BRAND = "RideSaudi";

export const localeUrl = (locale: Locale) => `${SITE_URL}/${locale}`;

/**
 * BUSINESS-CONFIRMED DATA. Everything here ships EMPTY on purpose.
 * Fill these once RideSaudi supplies verified facts; the sections render from them.
 * Do not add unverified entries.
 */
export const confirmed = {
  airports: [] as { code: string; name: Record<Locale, string> }[],
  routes: [] as { from: Record<Locale, string>; to: Record<Locale, string> }[],
  fleet: [] as {
    name: string;
    category: Record<Locale, string>;
    passengers: number;
    luggage?: number;
    image?: { src: string; alt: Record<Locale, string>; width: number; height: number };
  }[],
  /** Verified public contact details; leave undefined until supplied. */
  contact: { whatsapp: undefined as string | undefined, email: undefined as string | undefined },
};

export const serviceKeys = ["airport", "chauffeur", "intercity", "hourly", "corporate", "vip"] as const;
export type ServiceKey = (typeof serviceKeys)[number];
