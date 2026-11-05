import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import { localeUrl } from "@/lib/site";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};
  const t = await getTranslations({ locale, namespace: "legal" });
  return {
    title: t("privacyTitle") + " | RideSaudi",
    robots: { index: false, follow: true }, // placeholder until final legal text is approved
    alternates: { canonical: localeUrl(locale, "/privacy") },
  };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "legal" });
  return (
    <div className="container legal-page">
      <h1>{t("privacyTitle")}</h1>
      <p>{t("privacyBody")}</p>
      <p className="draft">{t("draftNotice")}</p>
      <Link href="/">{t("back")}</Link>
    </div>
  );
}
