import type { Locale } from "@/i18n/routing";
import type { ServicePage } from "@/content/types";
import { trail } from "@/content/registry";
import { getImage } from "@/content/images";
import { pageUrl, localeUrl, SITE_URL } from "@/lib/site";

const home = (l: Locale) => (l === "ar" ? "الرئيسية" : "Home");

/**
 * JSON-LD for a content page. Everything here mirrors visible page content:
 * no ratings, reviews, prices, awards or credentials are ever emitted.
 */
export function pageSchema(page: ServicePage, locale: Locale) {
  const c = page.copy[locale];
  const url = pageUrl(locale, page.path);
  const crumbs = trail(page);
  const isHub = page.path === "services";
  const img = getImage(page.path);

  const graph: Record<string, unknown>[] = [
    { "@type": "Organization", "@id": `${SITE_URL}/#organization`, name: "RideSaudi", url: SITE_URL },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "RideSaudi",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: ["en", "ar"],
    },
    {
      "@type": isHub ? "CollectionPage" : "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: c.title,
      description: c.description,
      inLanguage: locale,
      dateModified: page.updated,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      breadcrumb: { "@id": `${url}#breadcrumb` },
      ...(img ? { primaryImageOfPage: { "@type": "ImageObject", url: `${SITE_URL}${img.src}`, width: img.width, height: img.height, caption: img.alt[locale] } } : {}),
      ...(isHub ? {} : { about: { "@id": `${url}#service` } }),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: home(locale), item: localeUrl(locale) },
        ...crumbs.map((p, i) => ({
          "@type": "ListItem",
          position: i + 2,
          name: p.copy[locale].nav,
          item: pageUrl(locale, p.path),
        })),
      ],
    },
  ];

  if (!isHub) {
    graph.push({
      "@type": "Service",
      "@id": `${url}#service`,
      name: c.h1,
      serviceType: c.nav,
      description: c.answer,
      url,
      inLanguage: locale,
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: { "@type": "Country", name: locale === "ar" ? "المملكة العربية السعودية" : "Saudi Arabia" },
    });
  }

  // FAQ markup mirrors the visible FAQ list exactly.
  graph.push({
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    inLanguage: locale,
    mainEntity: c.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  });

  return { "@context": "https://schema.org", "@graph": graph };
}
