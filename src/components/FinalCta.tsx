import { useTranslations } from "next-intl";
import TrackedLink from "./TrackedLink";

export default function FinalCta() {
  const t = useTranslations("cta");
  return (
    <section id="contact" className="section on-night final-cta" aria-labelledby="cta-title">
      <div className="container">
        <h2 id="cta-title">{t("title")}</h2>
        <p>{t("text")}</p>
        <TrackedLink href="#quote" className="btn btn-primary" event="quote_cta_click" where="final">
          {t("button")} <span className="arrow" aria-hidden="true">→</span>
        </TrackedLink>
      </div>
    </section>
  );
}
