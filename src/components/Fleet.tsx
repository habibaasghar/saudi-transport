import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { fleetCategories } from "@/content/fleet";
import { SectionHead } from "./SectionHead";

/** Vehicle category cards. Data comes from src/content/fleet.ts (owner-confirmed facts only). */
export async function FleetCards({ locale }: { locale: Locale }) {
  const t = await getTranslations("fleet");
  return (
    <ul className="fleet">
      {fleetCategories.map((v) => (
        <li key={v.key} className="fleet__item">
          {v.photo ? (
            <Image src={v.photo.src} alt={v.photo.alt[locale]} width={v.photo.width} height={v.photo.height} sizes="(min-width: 900px) 33vw, 100vw" loading="lazy" />
          ) : null}
          <h3>{v.name[locale]}</h3>
          <p className="fleet__cat">{v.category[locale]}</p>
          <dl>
            <div>
              <dt>{t("capacity")}</dt>
              <dd>
                {v.capacity ? t("capacityValue", { passengers: v.capacity.passengers, luggage: v.capacity.luggageAtLeast }) : t("capacityPerQuote")}
              </dd>
            </div>
          </dl>
          <p className="fleet__label">{t("suitableFor")}</p>
          <ul className="ticks fleet__suit">
            {v.suitableFor[locale].map((s) => <li key={s}>{s}</li>)}
          </ul>
          <p className="fleet__avail">{t("availability")}</p>
        </li>
      ))}
    </ul>
  );
}

export async function Fleet({ locale }: { locale: Locale }) {
  const t = await getTranslations("fleet");
  return (
    <section id="fleet" className="section section--sand" aria-labelledby="fleet-h">
      <div className="wrap">
        <SectionHead id="fleet-h" eyebrow={t("eyebrow")} title={t("title")} intro={t("text")} />
        <FleetCards locale={locale} />
        <p className="fleet__note">{t("partnerNote")} {t("photoNote")}</p>
        <div className="cta-row">
          <Link href="/fleet" className="btn btn--dark">{t("viewFleet")}</Link>
          <Link href={{ pathname: "/", hash: "quote" }} className="btn btn--ghost">{t("cta")}</Link>
        </div>
      </div>
    </section>
  );
}
