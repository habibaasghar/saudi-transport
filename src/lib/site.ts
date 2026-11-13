import type { Locale } from "@/i18n/routing";

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.ridesaudi.com").replace(/\/$/, "");
export const BRAND = "RideSaudi";

export const localeUrl = (locale: Locale) => `${SITE_URL}/${locale}/`;
/** Absolute canonical URL for a content page (trailing slash convention). */
export const pageUrl = (locale: Locale, path: string) => `${SITE_URL}/${locale}/${path.replace(/^\/|\/$/g, "")}/`;

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
  /** Public contact details live in src/config/contact.ts. */
};

export const serviceKeys = ["airport", "chauffeur", "intercity", "hourly", "corporate", "vip"] as const;
export type ServiceKey = (typeof serviceKeys)[number];

/** Real, indexable page per homepage service. Never link to /?service=x: it only creates canonicalised duplicate URLs. */
export const servicePath: Record<ServiceKey, string> = {
  airport: "/services/airport-transfers/",
  chauffeur: "/services/chauffeur-services/",
  intercity: "/services/intercity-transfers/",
  hourly: "/services/chauffeur-services/",
  corporate: "/services/chauffeur-services/business-chauffeur/",
  vip: "/luxury-transportation/",
};

/** Services selectable in the enquiry form (homepage cards keep using `serviceKeys`). */
export const formServiceKeys = [...serviceKeys, "umrah", "event", "luxury"] as const;
