import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { serviceKeys, servicePath } from "@/lib/site";
import { SectionHead } from "./SectionHead";

export async function Services() {
  const t = await getTranslations("services");
  return (
    <section id="services" className="section section--sand" aria-labelledby="services-h">
      <div className="wrap">
        <SectionHead id="services-h" eyebrow={t("eyebrow")} title={t("title")} intro={t("intro")} />
        <ul className="cards">
          {serviceKeys.map((k, i) => (
            <li key={k} className="card">
              <span className="card__num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
              <h3>{t(`items.${k}.title`)}</h3>
              <p>{t(`items.${k}.text`)}</p>
              <Link className="card__link" href={servicePath[k]}>
                {t("cta")}
                <span className="sr-only"> — {t(`items.${k}.title`)}</span>
                <span aria-hidden="true" className="arrow">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
