import { pages } from "@/content/registry";
import { blogPosts } from "@/content/blog/posts";
import { legalPages } from "@/content/legal";
import { routing, type Locale } from "@/i18n/routing";
import { localeUrl, pageUrl, SITE_URL } from "@/lib/site";

/**
 * Single source for every canonical, indexable URL (both languages, with hreflang alternates).
 * Grouped so Search Console can report indexing per cluster: /sitemap.xml is a sitemap index that
 * points to one file per group and language (e.g. /sitemaps/routes-ar.xml).
 * lastmod is each page's own `updated` date from the content files, never the build or request time.
 */
export const SITEMAP_GROUPS = ["pages", "routes", "airports", "cities", "luxury", "heavy", "guides"] as const;
export type SitemapGroup = (typeof SITEMAP_GROUPS)[number];

export type SitemapEntry = { group: SitemapGroup; locale: Locale; url: string; lastmod: string; alternates: [string, string][] };

const latest = (dates: string[]) => dates.reduce((a, b) => (b > a ? b : a), "");

export function groupOf(path: string): SitemapGroup {
  const p = path.replace(/^\/|\/$/g, "");
  if (p.startsWith("blog")) return "guides";
  if (p.startsWith("services/recovery-heavy-transport")) return "heavy";
  if (p.startsWith("luxury-transportation")) return "luxury";
  if (/^services\/(intercity-transfers|cross-border-transfers)\/.+/.test(p)) return "routes";
  if (/^services\/airport-transfers\/.+/.test(p) || p === "services/umrah-transport/jeddah-airport-to-makkah") return "airports";
  if (/^services\/city-transport\/.+/.test(p)) return "cities";
  return "pages";
}

function alternates(urlFor: (l: Locale) => string): [string, string][] {
  return [...routing.locales.map((x) => [x, urlFor(x)] as [string, string]), ["x-default", urlFor(routing.defaultLocale)]];
}

export function sitemapEntries(): SitemapEntry[] {
  const blogUpdated = latest(blogPosts.map((b) => b.updated));
  const items: { path: string; updated: string; urlFor: (l: Locale) => string }[] = [
    { path: "", updated: latest([...pages.map((p) => p.updated), blogUpdated]), urlFor: (l) => localeUrl(l) },
    ...pages.map((p) => ({ path: p.path, updated: p.updated, urlFor: (l: Locale) => pageUrl(l, p.path) })),
    { path: "blog", updated: blogUpdated, urlFor: (l: Locale) => pageUrl(l, "blog") },
    ...blogPosts.map((b) => ({ path: `blog/${b.slug}`, updated: b.updated, urlFor: (l: Locale) => pageUrl(l, `blog/${b.slug}`) })),
    ...legalPages.map((p) => ({ path: p.slug, updated: p.updated, urlFor: (l: Locale) => pageUrl(l, p.slug) })),
  ];
  return items.flatMap((it) =>
    routing.locales.map((l) => ({ group: groupOf(it.path), locale: l, url: it.urlFor(l), lastmod: it.updated, alternates: alternates(it.urlFor) })),
  );
}

export const sitemapFileName = (g: SitemapGroup, l: Locale) => `${g}-${l}.xml`;
export const sitemapFileUrl = (g: SitemapGroup, l: Locale) => `${SITE_URL}/sitemaps/${sitemapFileName(g, l)}`;

const xmlEsc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export function urlsetXml(entries: SitemapEntry[]): string {
  const body = entries.map((e) =>
    `<url>\n<loc>${xmlEsc(e.url)}</loc>\n${e.alternates.map(([h, u]) => `<xhtml:link rel="alternate" hreflang="${h}" href="${xmlEsc(u)}" />`).join("\n")}\n<lastmod>${e.lastmod}</lastmod>\n</url>`,
  ).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${body}\n</urlset>\n`;
}

export function sitemapIndexXml(): string {
  const all = sitemapEntries();
  const files = SITEMAP_GROUPS.flatMap((g) => routing.locales.map((l) => {
    const es = all.filter((e) => e.group === g && e.locale === l);
    return es.length ? `<sitemap>\n<loc>${sitemapFileUrl(g, l)}</loc>\n<lastmod>${latest(es.map((e) => e.lastmod))}</lastmod>\n</sitemap>` : "";
  })).filter(Boolean);
  return `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${files.join("\n")}\n</sitemapindex>\n`;
}
