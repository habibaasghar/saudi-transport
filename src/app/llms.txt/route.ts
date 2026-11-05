import { pages } from "@/content/registry";
import { pageUrl, SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

/**
 * /llms.txt: a plain-text map of the site for language models and AI search tools.
 * Generated from the content registry so it never drifts from the real pages.
 * It does not guarantee indexing, citations or rankings.
 */
export function GET() {
  const section = (locale: "en" | "ar") =>
    pages.map((p) => `- [${p.copy[locale].nav}](${pageUrl(locale, p.path)}): ${p.copy[locale].summary}`).join("\n");

  const body = `# RideSaudi

> RideSaudi arranges pre-booked private transport in Saudi Arabia: airport transfers, Umrah transport, intercity journeys, private chauffeurs, event transportation and luxury transportation. Every journey is quoted individually and arranged only after the customer confirms. The website collects enquiries; an enquiry is not a confirmed reservation. No fixed fares are published.

## Key facts
- Website: ${SITE_URL}/
- Languages: English (/en/) and Arabic (/ar/, right-to-left)
- Booking model: enquiry first, quotation, then confirmation
- Vehicle and route availability is confirmed per quotation, not published as a fleet or route list
- Not affiliated with any religious or government authority; does not issue Umrah visas or permits

## Services (English)
${section("en")}

## الخدمات (العربية)
${section("ar")}
`;
  return new Response(body, { headers: { "content-type": "text/plain; charset=utf-8" } });
}
