import { Suspense } from "react";
import { getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { EnquiryForm } from "./EnquiryForm";
import { ContactRow } from "./ContactCta";

/** Doubles as the final CTA: "Plan your journey with RideSaudi" + the quote request. */
export async function QuoteSection({ locale, defaultService, topic }: { locale: Locale; defaultService?: string; topic?: string }) {
  const t = await getTranslations("cta");
  const f = await getTranslations("form");
  const c = await getTranslations("contact");
  return (
    <section id="quote" className="section section--dusk" aria-labelledby="quote-h">
      <div className="wrap quote">
        <div className="quote__intro">
          <p className="eyebrow eyebrow--light">{f("eyebrow")}</p>
          <h2 id="quote-h">{t("title")}</h2>
          <p className="lede">{t("text")}</p>
          <p className="quote__notice">{f("intro")}</p>
          <div className="quote__contact">
            <p className="quote__contact-title">{c("quoteAlt")}</p>
            <ContactRow locale={locale} topic={topic} variant="ghost" />
          </div>
        </div>
        <Suspense fallback={null}>
          <EnquiryForm locale={locale} defaultService={defaultService} />
        </Suspense>
      </div>
    </section>
  );
}
