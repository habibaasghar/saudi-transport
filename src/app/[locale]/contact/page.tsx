import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { LegalPageView, legalMetadata } from "@/components/LegalPageView";
import type { Locale } from "@/i18n/routing";

type Params = Promise<{ locale: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale } = await params;
  return legalMetadata("contact", locale as Locale);
}

export default async function Page({ params }: { params: Params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <LegalPageView slug="contact" locale={locale as Locale} />;
}
