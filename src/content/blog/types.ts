import type { Locale } from "@/i18n/routing";
import type { Section } from "../types";
import type { PageImage } from "../images";

export type BlogCopy = {
  nav: string;
  title: string;
  description: string;
  h1: string;
  answer: string;
  summary: string;
  sections: Section[];
  /** Optional facts table, rendered after the first section. */
  table?: { h: string; head: string[]; rows: string[][] };
  faqs: { q: string; a: string }[];
};

export type BlogPost = {
  slug: string;
  /** ISO dates. */
  published: string;
  updated: string;
  /** Registry paths this guide links to (commercial pages first). Must exist. */
  links: string[];
  /** Topic hub the guide belongs to (shown on /blog/<cluster>/ and in breadcrumbs). Guides without one sit on /blog/ only. */
  cluster?: BlogCluster;
  /** Heavy-quote form service preselected on heavy guides (see HEAVY_SERVICES); heavy guides use the heavy form. */
  heavyService?: string;
  /** Hero picture. Editorial only: never shows or implies RideSaudi-owned vehicles. */
  hero?: PageImage;
  /** Hand-picked related guides (slugs). Falls back to guides in the same cluster. */
  related?: string[];
  copy: Record<Locale, BlogCopy>;
};

export type BlogCluster = "towing-heavy-transport" | "private-transfers";
