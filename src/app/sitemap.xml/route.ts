import { sitemapIndexXml } from "@/lib/sitemap-entries";

export const dynamic = "force-static";

/** Sitemap index: one child sitemap per content group and language (see lib/sitemap-entries.ts). */
export function GET() {
  return new Response(sitemapIndexXml(), { headers: { "content-type": "application/xml; charset=utf-8" } });
}
