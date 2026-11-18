import { Suspense } from "react";
import { getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import { EnquiryForm } from "./EnquiryForm";
import { ContactRow } from "./ContactCta";

/** Doubles as the final CTA: "Plan your journey with RideSaudi" + the quote request. */
export async function QuoteSection({ locale, defaultService, topic, prefill }: { locale: Locale; defaultService?: string; topic?: string; prefill?: { pickup: string; dropoff: string } }) {
  const t = await getTranslations("cta");
  const f = await getTranslations("form");
  const c = await getTranslations("contact");
  const ft = await getTranslations("footer");
  return (
    <section id="quote" className="section section--dusk" aria-labelledby="quote-h">
      <div className="wrap quote">
        <div className="quote__intro">
          <p className="eyebrow eyebrow--light">{f("eyebrow")}</p>
          <h2 id="quote-h">{t("title")}</h2>
          <p className="lede">{t("text")}</p>
          <p className="quote__notice">{f("intro")}</p>
          <p className="quote__legal"><Link href="/terms-and-conditions">{ft("terms")}</Link> · <Link href="/privacy-policy">{ft("privacy")}</Link></p>
          <div className="quote__contact">
            <p className="quote__contact-title">{c("quoteAlt")}</p>
            <ContactRow locale={locale} topic={topic} variant="ghost" />
            <p className="quote__more"><Link href="/contact">{c("allOptions")}</Link></p>
          </div>
        </div>
        <Suspense fallback={null}>
          <EnquiryForm locale={locale} defaultService={defaultService} prefill={prefill} />
        </Suspense>
      </div>
    </section>
  );
}
