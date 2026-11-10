import type { Locale } from "@/i18n/routing";
import type { Section } from "../types";

export type BlogCopy = {
  nav: string;
  title: string;
  description: string;
  h1: string;
  answer: string;
  summary: string;
  sections: Section[];
  faqs: { q: string; a: string }[];
};

export type BlogPost = {
  slug: string;
  /** ISO dates. */
  published: string;
  updated: string;
  /** Registry paths this guide links to (commercial pages first). Must exist. */
  links: string[];
  copy: Record<Locale, BlogCopy>;
};
