import { getTranslations } from "next-intl/server";
import { SectionHead } from "./SectionHead";

const keys = ["quote", "airport", "intercity", "flight", "confirm", "vehicle", "change"] as const;

/** Native <details>: keyboard + screen-reader accessible with zero JavaScript. */
export async function Faq() {
  const t = await getTranslations("faq");
  return (
    <section id="faq" className="section section--white" aria-labelledby="faq-h">
      <div className="wrap faq">
        <SectionHead id="faq-h" eyebrow={t("eyebrow")} title={t("title")} />
        <div className="faq__list">
          {keys.map((k) => (
            <details key={k} name="faq">
              <summary><h3>{t(`items.${k}.q`)}</h3></summary>
              <p>{t(`items.${k}.a`)}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
