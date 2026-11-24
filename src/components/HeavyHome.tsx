import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getPage } from "@/content/registry";
import { getImage } from "@/content/images";
import { HT, SATHA, HEAVY, LOWBED, CARS, HYDRAULIC, TRUCKS } from "@/content/heavy/shared";
import type { Locale } from "@/i18n/routing";
import { SectionHead } from "./SectionHead";

/** City pages first (highest local demand), then the core service pages. All are live registry pages. */
const HOME_HEAVY = [
  `${SATHA}/riyadh`, `${SATHA}/jeddah`, `${SATHA}/dammam`,
  `${HEAVY}/riyadh`, `${HEAVY}/jeddah`, `${HEAVY}/dammam`,
  SATHA, HYDRAULIC, TRUCKS, CARS, LOWBED, HEAVY,
];

/** Homepage entry point into the heavy transport and satha category (contextual links, not just the menu). */
export async function HeavyHome({ locale }: { locale: Locale }) {
  const t = await getTranslations("heavy.home");
  const links = HOME_HEAVY.map(getPage).filter((p) => p !== undefined);
  const art = getImage(HT);
  return (
    <section id="heavy-transport" className="section" aria-labelledby="heavy-home-h">
      <div className="wrap split">
        {art && (
          <div className="split__art">
            <Image src={art.src} alt={art.alt[locale]} width={art.width} height={art.height} sizes="(min-width: 900px) 45vw, 100vw" loading="lazy" style={{ width: "100%", height: "auto", borderRadius: 12 }} />
          </div>
        )}
        <div>
          <SectionHead id="heavy-home-h" eyebrow={t("eyebrow")} title={t("title")} intro={t("text")} />
          <h3 className="mini-title">{t("listTitle")}</h3>
          <ul className="chips">
            {links.map((p) => (
              <li key={p.path}><Link href={`/${p.path}/`}>{p.copy[locale].nav}</Link></li>
            ))}
          </ul>
          <Link href={`/${HT}/`} className="btn btn--primary btn--lg">{t("cta")}</Link>
        </div>
      </div>
    </section>
  );
}
