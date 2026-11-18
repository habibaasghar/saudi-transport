import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { CONTACT } from "@/config/contact";
import { getLegalPage, legalPages, type LegalPage } from "@/content/legal";
import { localeUrl, pageUrl, SITE_URL } from "@/lib/site";
import { organizationSchema } from "@/lib/schema";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { JsonLd } from "./JsonLd";
import { ContactRow } from "./ContactCta";
import { QuoteSection } from "./QuoteSection";

/** Metadata for the privacy, terms and contact pages: indexable, self-canonical, reciprocal hreflang. */
export function legalMetadata(slug: LegalPage["slug"], locale: Locale): Metadata {
  const page = getLegalPage(slug)!;
  const c = page.copy[locale];
  const url = pageUrl(locale, slug);
  return {
    title: { absolute: `${c.title} | RideSaudi` },
    description: c.description,
    alternates: {
      canonical: url,
      languages: {
        ...Object.fromEntries(routing.locales.map((x) => [x, pageUrl(x, slug)])),
        "x-default": pageUrl(routing.defaultLocale, slug),
      },
    },
    openGraph: { type: "website", siteName: "RideSaudi", url, title: c.title, description: c.description, locale: locale === "ar" ? "ar_SA" : "en_US", alternateLocale: locale === "ar" ? ["en_US"] : ["ar_SA"] },
    twitter: { card: "summary", title: c.title, description: c.description },
    robots: { index: true, follow: true },
  };
}

export async function LegalPageView({ slug, locale }: { slug: LegalPage["slug"]; locale: Locale }) {
  const page = getLegalPage(slug)!;
  const c = page.copy[locale];
  const t = await getTranslations({ locale, namespace: "svc" });
  const l = await getTranslations({ locale, namespace: "legal" });
  const url = pageUrl(locale, slug);
  const others = legalPages.filter((p) => p.slug !== slug);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            organizationSchema(),
            { "@type": "WebSite", "@id": `${SITE_URL}/#website`, url: SITE_URL, name: "RideSaudi", publisher: { "@id": `${SITE_URL}/#organization` }, inLanguage: ["en", "ar"] },
            {
              "@type": slug === "contact" ? "ContactPage" : "WebPage",
              "@id": `${url}#webpage`,
              url,
              name: c.title,
              description: c.description,
              inLanguage: locale,
              dateModified: page.updated,
              isPartOf: { "@id": `${SITE_URL}/#website` },
              breadcrumb: { "@id": `${url}#breadcrumb` },
            },
            {
              "@type": "BreadcrumbList",
              "@id": `${url}#breadcrumb`,
              itemListElement: [
                { "@type": "ListItem", position: 1, name: t("home"), item: localeUrl(locale) },
                { "@type": "ListItem", position: 2, name: c.nav, item: url },
              ],
            },
          ],
        }}
      />
      <Header locale={locale} quoteHref="/#quote" switchHref={`/${slug}`} />
      <main id="main" className="svc svc--default">
        <section className="svc-hero" aria-labelledby="info-h1">
          <div className="wrap">
            <nav aria-label={t("breadcrumb")} className="crumbs">
              <ol>
                <li><Link href="/">{t("home")}</Link></li>
                <li><span aria-current="page">{c.nav}</span></li>
              </ol>
            </nav>
            <h1 id="info-h1">{c.h1}</h1>
            <p className="svc-hero__sub">{c.intro}</p>
          </div>
        </section>

        <section className="section section--white" aria-label={c.h1}>
          <div className="wrap info-page">
            <p className="info-page__meta">{l("updated")}: <time dateTime={page.updated}>{page.updated}</time></p>
            {c.sections.map((s) => (
              <section key={s.h}>
                <h2>{s.h}</h2>
                {s.p?.map((para) => <p key={para}>{para}</p>)}
                {s.list && <ul>{s.list.map((li) => <li key={li}>{li}</li>)}</ul>}
                {slug === "contact" && s.h === c.sections[0].h && <ContactDetails locale={locale} />}
              </section>
            ))}

            {slug !== "contact" && (
              <section>
                <h2>{l("contactHeading")}</h2>
                <ContactDetails locale={locale} />
              </section>
            )}

            <section>
              <h2>{l("related")}</h2>
              <ul>
                {others.map((o) => (
                  <li key={o.slug}><Link href={`/${o.slug}`}>{o.copy[locale].nav}</Link></li>
                ))}
                <li><Link href="/fleet">{l("fleet")}</Link></li>
                <li><Link href="/services">{l("services")}</Link></li>
              </ul>
            </section>
          </div>
        </section>
        {slug === "contact" && <QuoteSection locale={locale} />}
      </main>
      <Footer locale={locale} switchHref={`/${slug}`} />
    </>
  );
}

function ContactDetails({ locale }: { locale: Locale }) {
  return (
    <>
      <p className="info-page__contact">
        <span><bdi dir="ltr">{CONTACT.phoneDisplay}</bdi> · WhatsApp</span>
        <span><bdi dir="ltr">{CONTACT.email}</bdi></span>
      </p>
      <ContactRow locale={locale} variant="outline" />
    </>
  );
}
