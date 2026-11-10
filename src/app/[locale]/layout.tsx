import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { routing, rtlLocales } from "@/i18n/routing";
import { arabic, display, sans } from "@/lib/fonts";
import { SITE_URL } from "@/lib/site";
import { whatsappHref } from "@/config/contact";
import { Analytics } from "@/components/Analytics";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import "../globals.css";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = { metadataBase: new URL(SITE_URL) };

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  const all = await getMessages();
  // Only ship the namespaces Client Components actually use.
  const clientMessages = { form: all.form, quick: all.quick, nav: all.nav, a11y: all.a11y };
  const isRtl = rtlLocales.includes(locale);
  const c = await getTranslations({ locale, namespace: "contact" });

  return (
    <html
      lang={locale}
      dir={isRtl ? "rtl" : "ltr"}
      className={`${display.variable} ${sans.variable} ${arabic.variable}`}
    >
      <body>
        <NextIntlClientProvider messages={clientMessages}>{children}</NextIntlClientProvider>
        <Analytics />
        <FloatingWhatsApp href={whatsappHref(c("whatsappGeneral"))} label={c("whatsapp")} aria={c("whatsappAria")} />
      </body>
    </html>
  );
}
