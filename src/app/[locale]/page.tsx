import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Destinations, homeDestinations } from "@/components/Destinations";
import { getPage } from "@/content/registry";
import { images } from "@/content/images";
import { Featured } from "@/components/Featured";
import { Services } from "@/components/Services";
import { Why } from "@/components/Why";
import { Airport } from "@/components/Airport";
import { Intercity } from "@/components/Intercity";
import { Fleet } from "@/components/Fleet";
import { HowItWorks } from "@/components/HowItWorks";
import { Trust } from "@/components/Trust";
import { Faq } from "@/components/Faq";
import { QuoteSection } from "@/components/QuoteSection";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { routing, type Locale } from "@/i18n/routing";
import { localeUrl, SITE_URL } from "@/lib/site";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = (await params) as { locale: Locale };
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: { absolute: t("title") },
    description: t("description"),
    alternates: {
      canonical: localeUrl(locale),
      languages: {
        ...Object.fromEntries(routing.locales.map((l) => [l, localeUrl(l)])),
        "x-default": localeUrl(routing.defaultLocale),
      },
    },
    openGraph: {
      type: "website",
      siteName: "RideSaudi",
      url: localeUrl(locale),
      title: t("ogTitle"),
      description: t("ogDescription"),
      locale: locale === "ar" ? "ar_SA" : "en_US",
      alternateLocale: locale === "ar" ? ["en_US"] : ["ar_SA"],
      images: [{ url: `${SITE_URL}${images.riyadh.src}`, width: images.riyadh.width, height: images.riyadh.height, alt: images.riyadh.alt[locale] }],
    },
    twitter: { card: "summary_large_image", title: t("ogTitle"), description: t("ogDescription"), images: [`${SITE_URL}${images.riyadh.src}`] },
    robots: { index: true, follow: true },
  };
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = (await params) as { locale: Locale };
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "meta" });

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
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
              "@type": "WebPage",
              "@id": `${localeUrl(locale)}#webpage`,
              url: localeUrl(locale),
              name: t("title"),
              description: t("description"),
              inLanguage: locale,
              isPartOf: { "@id": `${SITE_URL}/#website` },
              about: { "@id": `${SITE_URL}/#organization` },
              primaryImageOfPage: { "@type": "ImageObject", url: `${SITE_URL}${images.riyadh.src}`, width: images.riyadh.width, height: images.riyadh.height, caption: images.riyadh.alt[locale] },
              mainEntity: { "@id": `${localeUrl(locale)}#destinations` },
            },
            {
              "@type": "ItemList",
              "@id": `${localeUrl(locale)}#destinations`,
              name: t("title"),
              itemListElement: homeDestinations.map((p, i) => ({ "@type": "ListItem", position: i + 1, name: getPage(p)!.copy[locale].nav, url: `${SITE_URL}/${locale}/${p}/` })),
            },
          ],
        }}
      />
      <Header locale={locale} />
      <main id="main">
        <Hero />
        <About />
        <Featured />
        <Services />
        <Destinations locale={locale} />
        <Why />
        <Airport />
        <Intercity locale={locale} />
        <Fleet locale={locale} />
        <HowItWorks />
        <Trust />
        <Faq />
        <QuoteSection locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
