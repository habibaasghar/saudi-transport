import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { getPage } from "@/content/registry";
import { getImage } from "@/content/images";
import { SectionHead } from "./SectionHead";

/** Homepage destinations: every card links to a real page and shows that page's own picture. */
export const homeDestinations = [
  "services/city-transport/riyadh",
  "services/city-transport/jeddah",
  "services/umrah-transport",
  "services/tourism-transport/alula",
  "services/intercity-transfers/riyadh-to-dammam",
  "services/intercity-transfers/riyadh-to-doha",
  "services/intercity-transfers/riyadh-to-dubai",
  "services/cross-border-transfers/bahrain",
] as const;

export async function Destinations({ locale }: { locale: Locale }) {
  const t = await getTranslations("destinations");
  return (
    <section id="destinations" className="section section--white" aria-labelledby="dest-h">
      <div className="wrap">
        <SectionHead id="dest-h" eyebrow={t("eyebrow")} title={t("title")} intro={t("intro")} />
        <ul className="dest">
          {homeDestinations.map((path) => {
            const page = getPage(path)!;
            const c = page.copy[locale];
            const img = getImage(path);
            return (
              <li key={path}>
                {img && (
                  <Image className="dest__img" src={img.src} alt={img.alt[locale]} width={img.width} height={img.height} sizes="(min-width: 1000px) 25vw, (min-width: 640px) 50vw, 100vw" loading="lazy" />
                )}
                <div className="dest__body">
                  <h3>{c.nav}</h3>
                  <p>{c.summary}</p>
                  <Link className="card__link" href={`/${path}`}>
                    {t("cta")}
                    <span className="sr-only"> — {c.nav}</span>
                    <span aria-hidden="true" className="arrow">→</span>
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
