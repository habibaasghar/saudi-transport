import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { ServicePageView } from "@/components/ServicePageView";
import { getPage, pages, validateRegistry } from "@/content/registry";
import { routing, type Locale } from "@/i18n/routing";
import { getImage } from "@/content/images";
import { pageUrl, SITE_URL } from "@/lib/site";

validateRegistry();

export const dynamicParams = false;

export function generateStaticParams() {
  return routing.locales.flatMap((locale) => pages.map((p) => ({ locale, slug: p.path.split("/") })));
}

type Params = Promise<{ locale: string; slug: string[] }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale: l, slug } = await params;
  const locale = l as Locale;
  const page = getPage(slug.join("/"));
  if (!page) return {};
  const c = page.copy[locale];
  const url = pageUrl(locale, page.path);
  const img = getImage(page.path);
  const ogImages = img ? [{ url: `${SITE_URL}${img.src}`, width: img.width, height: img.height, alt: img.alt[locale] }] : undefined;
  return {
    title: { absolute: `${c.title} | RideSaudi` },
    description: c.description,
    alternates: {
      canonical: url,
      languages: {
        ...Object.fromEntries(routing.locales.map((x) => [x, pageUrl(x, page.path)])),
        "x-default": pageUrl(routing.defaultLocale, page.path),
      },
    },
    openGraph: {
      type: "website",
      siteName: "RideSaudi",
      url,
      title: c.title,
      description: c.description,
      locale: locale === "ar" ? "ar_SA" : "en_US",
      alternateLocale: locale === "ar" ? ["en_US"] : ["ar_SA"],
      ...(ogImages ? { images: ogImages } : {}),
    },
    twitter: { card: img ? "summary_large_image" : "summary", title: c.title, description: c.description, ...(ogImages ? { images: [ogImages[0].url] } : {}) },
    robots: { index: true, follow: true },
  };
}

export default async function ContentPage({ params }: { params: Params }) {
  const { locale, slug } = await params;
  const page = getPage(slug.join("/"));
  if (!page) notFound();
  setRequestLocale(locale);
  return <ServicePageView page={page} locale={locale as Locale} />;
}
