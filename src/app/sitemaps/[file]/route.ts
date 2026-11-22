import { routing, type Locale } from "@/i18n/routing";
import { SITEMAP_GROUPS, sitemapEntries, sitemapFileName, urlsetXml, type SitemapGroup } from "@/lib/sitemap-entries";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return SITEMAP_GROUPS.flatMap((g) => routing.locales.map((l) => ({ file: sitemapFileName(g, l) })));
}

export async function GET(_req: Request, { params }: { params: Promise<{ file: string }> }) {
  const { file } = await params;
  const m = file.match(/^([a-z]+)-(en|ar)\.xml$/);
  if (!m || !(SITEMAP_GROUPS as readonly string[]).includes(m[1])) return new Response("Not found", { status: 404 });
  const entries = sitemapEntries().filter((e) => e.group === (m[1] as SitemapGroup) && e.locale === (m[2] as Locale));
  return new Response(urlsetXml(entries), { headers: { "content-type": "application/xml; charset=utf-8" } });
}
