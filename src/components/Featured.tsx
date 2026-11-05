import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { SectionHead } from "./SectionHead";

const items = [
  { key: "luxury", href: "/luxury-transportation" },
  { key: "events", href: "/services/event-transportation" },
  { key: "umrah", href: "/services/umrah-transport" },
] as const;

/** Homepage entry points to the three journeys that need their own planning. */
export async function Featured() {
  const t = await getTranslations("featured");
  return (
    <section id="featured" className="section section--sand" aria-labelledby="featured-h">
      <div className="wrap">
        <SectionHead id="featured-h" eyebrow={t("eyebrow")} title={t("title")} intro={t("intro")} />
        <ul className="cards">
          {items.map((it, i) => (
            <li key={it.key} className="card">
              <span className="card__num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
              <h3>{t(`items.${it.key}.title`)}</h3>
              <p>{t(`items.${it.key}.text`)}</p>
              <Link className="card__link" href={it.href}>
                {t("cta")}
                <span className="sr-only"> — {t(`items.${it.key}.title`)}</span>
                <span aria-hidden="true" className="arrow">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
