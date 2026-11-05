import type { MetadataRoute } from "next";
import { pages } from "@/content/registry";
import { routing } from "@/i18n/routing";
import { localeUrl, pageUrl } from "@/lib/site";

/** Every canonical, indexable URL in both languages, each with hreflang alternates. */
export default function sitemap(): MetadataRoute.Sitemap {
  const home = routing.locales.map((l) => ({
    url: localeUrl(l),
    alternates: {
      languages: {
        ...Object.fromEntries(routing.locales.map((x) => [x, localeUrl(x)])),
        "x-default": localeUrl(routing.defaultLocale),
      },
    },
  }));

  const content = pages.flatMap((p) =>
    routing.locales.map((l) => ({
      url: pageUrl(l, p.path),
      lastModified: p.updated,
      alternates: {
        languages: {
          ...Object.fromEntries(routing.locales.map((x) => [x, pageUrl(x, p.path)])),
          "x-default": pageUrl(routing.defaultLocale, p.path),
        },
      },
    })),
  );

  return [...home, ...content];
}
