import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { BlogIndexView } from "@/components/BlogView";
import { routing, type Locale } from "@/i18n/routing";
import { blogIndexUrl } from "@/lib/blog-schema";
import { ogImage } from "@/lib/og";

type Params = Promise<{ locale: string }>;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const meta = {
  en: { title: "Private Transfer & Heavy Transport Guides | RideSaudi", description: "Practical guides on airport pickups, intercity private cars, cross-border road trips, car towing, satha recovery and heavy machinery transport in Saudi Arabia." },
  ar: { title: "أدلة التوصيل الخاص والنقل الثقيل | RideSaudi", description: "أدلة عملية عن الاستقبال من المطار والسيارات الخاصة بين المدن والرحلات عبر الحدود وسحب السيارات بالسطحة ونقل المعدات الثقيلة في السعودية." },
};

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale: l } = await params;
  const locale = l as Locale;
  const m = meta[locale];
  return {
    title: { absolute: m.title },
    description: m.description,
    alternates: {
      canonical: blogIndexUrl(locale),
      languages: { ...Object.fromEntries(routing.locales.map((x) => [x, blogIndexUrl(x)])), "x-default": blogIndexUrl(routing.defaultLocale) },
    },
    openGraph: { type: "website", siteName: "RideSaudi", url: blogIndexUrl(locale), title: m.title, description: m.description, locale: locale === "ar" ? "ar_SA" : "en_US", images: [ogImage(undefined, locale)] },
    twitter: { card: "summary_large_image", title: m.title, description: m.description, images: [ogImage(undefined, locale).url] },
    robots: { index: true, follow: true },
  };
}

export default async function BlogIndexPage({ params }: { params: Params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <BlogIndexView locale={locale as Locale} />;
}
