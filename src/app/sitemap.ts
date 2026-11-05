import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { localeUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(routing.locales.map((l) => [l, localeUrl(l)]));
  return routing.locales.map((l) => ({
    url: localeUrl(l),
    alternates: { languages: { ...languages, "x-default": localeUrl(routing.defaultLocale) } },
  }));
}
