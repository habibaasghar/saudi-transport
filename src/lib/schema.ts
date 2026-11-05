import type { Locale } from "@/i18n/routing";
import { BRAND, SITE_URL, contact, localeUrl } from "./site";

type Faq = { q: string; a: string };

/**
 * JSON-LD from verified facts only. Deliberately omitted until verified: address, telephone, openingHours,
 * priceRange, reviews/ratings, sameAs, founding date, legal name, specific service areas below country level.
 */
export function buildSchema(locale: Locale, t: { title: string; description: string; tagline: string }, faqs: Faq[]) {
  const orgId = `${SITE_URL}/#organization`;
  const siteId = `${SITE_URL}/#website`;
  const pageUrl = localeUrl(locale);

  const organization: Record<string, unknown> = {
    "@type": "Organization",
    "@id": orgId,
    name: BRAND,
    url: SITE_URL,
    description: t.tagline,
    areaServed: { "@type": "Country", name: "Saudi Arabia" },
    knowsLanguage: ["en", "ar"],
  };
  if (contact.email) organization.email = contact.email;

  return {
    "@context": "https://schema.org",
    "@graph": [
      organization,
      {
        "@type": "WebSite",
        "@id": siteId,
        url: SITE_URL,
        name: BRAND,
        inLanguage: ["en", "ar"],
        publisher: { "@id": orgId },
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: t.title,
        description: t.description,
        inLanguage: locale,
        isPartOf: { "@id": siteId },
        about: { "@id": orgId },
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        inLanguage: locale,
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };
}
