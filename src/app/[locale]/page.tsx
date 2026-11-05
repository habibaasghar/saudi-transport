import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
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
      // No og:image yet: add one only once a real, licensed asset exists (see docs/missing-assets.md).
    },
    twitter: { card: "summary", title: t("ogTitle"), description: t("ogDescription") },
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
            },
          ],
        }}
      />
      <Header locale={locale} />
      <main id="main">
        <Hero />
        <Services />
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
