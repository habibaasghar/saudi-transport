import { getTranslations } from "next-intl/server";
import { SectionHead } from "./SectionHead";

const keys = ["prebook", "plan", "clear", "presentation"] as const;

export async function Why() {
  const t = await getTranslations("why");
  return (
    <section id="why" className="section section--night" aria-labelledby="why-h">
      <div className="wrap why">
        <SectionHead id="why-h" eyebrow={t("eyebrow")} title={t("title")} intro={t("intro")} />
        <ol className="why__list">
          {keys.map((k) => (
            <li key={k}>
              <h3>{t(`items.${k}.title`)}</h3>
              <p>{t(`items.${k}.text`)}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
