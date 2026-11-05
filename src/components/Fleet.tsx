import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { confirmed } from "@/lib/site";
import type { Locale } from "@/i18n/routing";
import { SectionHead } from "./SectionHead";

/** Renders only vendor-verified vehicles from `confirmed.fleet`. Empty until supplied. */
export async function Fleet({ locale }: { locale: Locale }) {
  const t = await getTranslations("fleet");
  const fleet = confirmed.fleet;
  return (
    <section id="fleet" className="section section--sand" aria-labelledby="fleet-h">
      <div className="wrap">
        <SectionHead id="fleet-h" eyebrow={t("eyebrow")} title={t("title")} intro={t("text")} />
        {fleet.length > 0 ? (
          <ul className="fleet">
            {fleet.map((v) => (
              <li key={v.name} className="fleet__item">
                {v.image && (
                  <Image src={v.image.src} alt={v.image.alt[locale]} width={v.image.width} height={v.image.height} sizes="(min-width: 900px) 33vw, 100vw" loading="lazy" />
                )}
                <h3>{v.name}</h3>
                <p>{v.category[locale]}</p>
                <dl>
                  <div><dt>{t("passengers")}</dt><dd>{v.passengers}</dd></div>
                  {v.luggage !== undefined && <div><dt>{t("luggage")}</dt><dd>{v.luggage}</dd></div>}
                </dl>
              </li>
            ))}
          </ul>
        ) : (
          <div className="note-box note-box--light">
            <h3>{t("emptyTitle")}</h3>
            <p>{t("emptyText")}</p>
            <Link href={{ pathname: "/", hash: "quote" }} className="btn btn--dark">{t("cta")}</Link>
          </div>
        )}
      </div>
    </section>
  );
}
