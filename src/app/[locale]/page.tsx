import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { buildSchema } from "@/lib/schema";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Feature from "@/components/Feature";
import Fleet from "@/components/Fleet";
import HowItWorks from "@/components/HowItWorks";
import Trust from "@/components/Trust";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  const meta = await getTranslations({ locale, namespace: "meta" });
  const faq = await getTranslations({ locale, namespace: "faq" });
  const faqItems = (faq.raw("items") as { q: string; a: string }[]) ?? [];
  const schema = buildSchema(locale, { title: meta("title"), description: meta("description"), tagline: meta("tagline") }, faqItems);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\u003c") }} />
      <Hero locale={locale} />
      <Services />
      <WhyUs />
      <Feature id="airport-transfers" ns="airport" art="airport" />
      <Feature id="intercity" ns="intercity" art="route" flip />
      <Fleet />
      <HowItWorks />
      <Trust />
      <Faq />
      <FinalCta />
    </>
  );
}
