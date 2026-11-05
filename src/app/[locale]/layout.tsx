import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, IBM_Plex_Sans_Arabic } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { SITE_URL, dirOf, isPreview, localeUrl } from "@/lib/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";
import "../globals.css";

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", display: "swap", axes: ["opsz"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const arabic = IBM_Plex_Sans_Arabic({ subsets: ["arabic"], weight: ["400", "500", "600", "700"], variable: "--font-arabic", display: "swap" });

export const viewport: Viewport = { themeColor: "#0F1B2D", width: "device-width", initialScale: 1 };

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};
  const t = await getTranslations({ locale, namespace: "meta" });
  const gsc = process.env.NEXT_PUBLIC_GSC_VERIFICATION;
  return {
    metadataBase: new URL(SITE_URL),
    title: t("title"),
    description: t("description"),
    applicationName: t("siteName"),
    alternates: {
      canonical: localeUrl(locale),
      languages: { en: localeUrl("en"), ar: localeUrl("ar"), "x-default": localeUrl(routing.defaultLocale) },
    },
    openGraph: {
      type: "website",
      siteName: t("siteName"),
      title: t("ogTitle"),
      description: t("description"),
      url: localeUrl(locale),
      locale: locale === "ar" ? "ar_SA" : "en_US",
      alternateLocale: locale === "ar" ? ["en_US"] : ["ar_SA"],
    },
    twitter: { card: "summary_large_image", title: t("ogTitle"), description: t("description") },
    robots: isPreview ? { index: false, follow: false } : { index: true, follow: true },
    verification: gsc ? { google: gsc } : undefined,
  };
}

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "common" });
  const all = (await getMessages()) as Record<string, unknown>;
  // Only ship the namespaces client components need
  const clientMessages = { form: all.form, consent: all.consent, services: { items: (all.services as { items: unknown }).items } };

  return (
    <html lang={locale} dir={dirOf(locale)} className={`${fraunces.variable} ${inter.variable} ${arabic.variable}`}>
      <body>
        <a className="skip-link" href="#main">{t("skip")}</a>
        <NextIntlClientProvider locale={locale} messages={clientMessages}>
          <Header locale={locale} />
          <main id="main">{children}</main>
          <Footer locale={locale} />
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
