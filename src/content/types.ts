import type { Locale } from "@/i18n/routing";

export type Section = { h: string; p: string[]; list?: string[] };

export type Copy = {
  /** Short label: breadcrumbs, cards, related links. */
  nav: string;
  /** <title> without the brand suffix (added by the template). */
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  /** Answer-first block: a direct, factual 40-70 word answer to the page's core question. */
  answer: string;
  /** One sentence used on parent/related cards. */
  summary: string;
  sections: Section[];
  /** "What to include in your enquiry" style list. */
  checklist?: { h: string; items: string[] };
  /** Optional comparison table (AIO-friendly). */
  table?: { h: string; head: string[]; rows: string[][] };
  faqs: { q: string; a: string }[];
};

export type Variant = "default" | "luxury" | "event" | "umrah";

export type ServicePage = {
  /** Path without locale or slashes, e.g. "services/airport-transfers/jeddah-airport". */
  path: string;
  parent?: string;
  variant: Variant;
  /** Pre-selects this service in the enquiry form. */
  service: "airport" | "chauffeur" | "intercity" | "hourly" | "corporate" | "vip" | "umrah" | "event" | "luxury";
  /** Paths of related pages (must exist in the registry). */
  related: string[];
  /** ISO date of last substantive content review. */
  updated: string;
  copy: Record<Locale, Copy>;
};
