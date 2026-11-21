import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import { whatsappHref } from "@/config/contact";
import { HeavyQuoteForm } from "./HeavyQuoteForm";
import { WhatsAppIcon } from "./Icons";
import { SectionHead } from "./SectionHead";

/** Final CTA + quotation form for heavy transport / satha pages. Server-rendered so the form is in the HTML. */
export async function HeavyQuoteSection({ locale, service, topic }: { locale: Locale; service?: string; topic: string }) {
  const h = await getTranslations({ locale, namespace: "heavy" });
  const c = await getTranslations({ locale, namespace: "contact" });
  const ft = await getTranslations({ locale, namespace: "footer" });
  // Only this page's form strings go to the browser (the layout ships a small shared set).
  const all = await getMessages({ locale });
  return (
    <section id="quote" className="section section--dusk" aria-labelledby="quote-h">
      <div className="wrap quote">
        <div className="quote__intro">
          <p className="eyebrow eyebrow--light">{h("quoteEyebrow")}</p>
          <h2 id="quote-h">{h("quoteTitle")}</h2>
          <p className="lede">{h("quoteText")}</p>
          <p className="quote__notice">{h("quoteNotice")}</p>
          <p className="quote__legal"><Link href="/terms-and-conditions">{ft("terms")}</Link> · <Link href="/privacy-policy">{ft("privacy")}</Link></p>
          <div className="quote__contact">
            <p className="quote__contact-title">{c("quoteAlt")}</p>
            <HeavyWhatsApp locale={locale} topic={topic} />
          </div>
        </div>
        <NextIntlClientProvider locale={locale} messages={{ heavy: { form: all.heavy.form } }}>
          <HeavyQuoteForm locale={locale} defaultService={service} />
        </NextIntlClientProvider>
      </div>
    </section>
  );
}

/** WhatsApp button whose pre-filled message names the heavy transport service (not the private-transfer wording). */
export async function HeavyWhatsApp({ locale, topic, className = "" }: { locale: Locale; topic: string; className?: string }) {
  const h = await getTranslations({ locale, namespace: "heavy" });
  const c = await getTranslations({ locale, namespace: "contact" });
  return (
    <div className={`cta-row ${className}`.trim()}>
      <a
        href={whatsappHref(h("whatsappTopic", { topic }))}
        className="btn btn--md cta cta--whatsapp"
        aria-label={c("whatsappAria")}
        target="_blank"
        rel="noopener noreferrer"
      >
        <WhatsAppIcon className="cta__icon" />
        <span>{c("whatsapp")}</span>
      </a>
    </div>
  );
}

/** Three-step process for heavy jobs (replaces the passenger "how it works" block). */
export async function HeavySteps({ locale }: { locale: Locale }) {
  const h = await getTranslations({ locale, namespace: "heavy.steps" });
  const steps = ["one", "two", "three"] as const;
  return (
    <section id="how" className="section section--night" aria-labelledby="heavy-steps-h">
      <div className="wrap">
        <SectionHead id="heavy-steps-h" eyebrow={h("eyebrow")} title={h("title")} />
        <ol className="steps">
          {steps.map((s, i) => (
            <li key={s}>
              <span className="steps__n" aria-hidden="true">{i + 1}</span>
              <h3>{h(`${s}.title`)}</h3>
              <p>{h(`${s}.text`)}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
