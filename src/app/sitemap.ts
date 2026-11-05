import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { localeUrl } from "@/lib/site";

/** Only pages that exist. Add service/route pages here as they ship. Legal placeholders are noindex and excluded. */
export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries([
    ...routing.locales.map((l) => [l, localeUrl(l)]),
    ["x-default", localeUrl(routing.defaultLocale)],
  ]);
  return routing.locales.map((l) => ({
    url: localeUrl(l),
    changeFrequency: "monthly" as const,
    priority: 1,
    alternates: { languages },
  }));
}
