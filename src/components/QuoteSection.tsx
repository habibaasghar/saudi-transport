import { Suspense } from "react";
import { getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { EnquiryForm } from "./EnquiryForm";

/** Doubles as the final CTA: "Plan your journey with RideSaudi" + the quote request. */
export async function QuoteSection({ locale }: { locale: Locale }) {
  const t = await getTranslations("cta");
  const f = await getTranslations("form");
  return (
    <section id="quote" className="section section--dusk" aria-labelledby="quote-h">
      <div className="wrap quote">
        <div className="quote__intro">
          <p className="eyebrow eyebrow--light">{f("eyebrow")}</p>
          <h2 id="quote-h">{t("title")}</h2>
          <p className="lede">{t("text")}</p>
          <p className="quote__notice">{f("intro")}</p>
        </div>
        <Suspense fallback={null}>
          <EnquiryForm locale={locale} />
        </Suspense>
      </div>
    </section>
  );
}
