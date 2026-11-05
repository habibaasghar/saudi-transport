import type { Locale } from "@/i18n/routing";

/** Canonical origin. The correct domain is ridesaudi.com (never saudiride.com). */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.ridesaudi.com").replace(/\/$/, "");
export const BRAND = "RideSaudi";

/**
 * Verified business facts. Anything empty is NEVER rendered and NEVER put in structured data.
 * Fill via environment variables once the business confirms them.
 */
export const contact = {
  whatsapp: (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "").replace(/[^\d]/g, ""),
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "",
};

export const isPreview = process.env.VERCEL_ENV === "preview";

export function localeUrl(locale: Locale, path = ""): string {
  return `${SITE_URL}/${locale}${path}`;
}

export const dirOf = (locale: Locale) => (locale === "ar" ? "rtl" : "ltr");

/**
 * Service registry. Single source of truth for cards, form options, footer links and (later) service pages.
 * `href` stays an in-page anchor until a dedicated page exists; set `page` when a service page ships.
 */
export const services = [
  { id: "airport", anchor: "airport-transfers", page: null },
  { id: "chauffeur", anchor: "services", page: null },
  { id: "intercity", anchor: "intercity", page: null },
  { id: "hourly", anchor: "services", page: null },
  { id: "corporate", anchor: "services", page: null },
  { id: "vip", anchor: "services", page: null },
] as const;

export type ServiceId = (typeof services)[number]["id"];

/** Fleet slots. Empty until real vehicle details are supplied (never invent models/capacities). */
export const fleet: { id: string; name: string; seats: number; bags: number; image?: string }[] = [];

export function serviceHref(s: (typeof services)[number]): string {
  return s.page ?? `#${s.anchor}`;
}
