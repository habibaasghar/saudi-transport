import type { MetadataRoute } from "next";
import { pages } from "@/content/registry";
import { routing } from "@/i18n/routing";
import { localeUrl, pageUrl } from "@/lib/site";
import { blogPosts } from "@/content/blog/posts";

/** Every canonical, indexable URL in both languages, each with hreflang alternates. */
export default function sitemap(): MetadataRoute.Sitemap {
  const latest = (dates: string[]) => dates.reduce((a, b) => (b > a ? b : a), "");
  const blogUpdated = latest(blogPosts.map((b) => b.updated));
  const home = routing.locales.map((l) => ({
    url: localeUrl(l),
    lastModified: latest([...pages.map((p) => p.updated), blogUpdated]),
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

  const alt = (path: string) => ({
    languages: {
      ...Object.fromEntries(routing.locales.map((x) => [x, pageUrl(x, path)])),
      "x-default": pageUrl(routing.defaultLocale, path),
    },
  });
  const blog = [
    ...routing.locales.map((l) => ({ url: pageUrl(l, "blog"), lastModified: blogUpdated, alternates: alt("blog") })),
    ...blogPosts.flatMap((b) =>
      routing.locales.map((l) => ({ url: pageUrl(l, `blog/${b.slug}`), lastModified: b.updated, alternates: alt(`blog/${b.slug}`) })),
    ),
  ];

  return [...home, ...content, ...blog];
}
