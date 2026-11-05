import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { getPage } from "@/content/registry";
import { navItems } from "@/lib/nav";

const footerServices = [
  "services/airport-transfers",
  "services/umrah-transport",
  "services/intercity-transfers",
  "services/chauffeur-services",
  "services/event-transportation",
  "luxury-transportation",
  "services/cross-border-transfers",
  "services/city-transport",
  "services/tourism-transport",
  "services/group-transportation",
  "services/special-transportation",
  "fleet",
];

export async function Footer({ locale }: { locale: Locale }) {
  const t = await getTranslations("footer");
  const n = await getTranslations("nav");
  const a = await getTranslations("a11y");
  const l = await getTranslations("lang");

  return (
    <footer className="footer">
      <div className="wrap footer__grid">
        <div>
          <p className="wordmark wordmark--lg">Ride<span>Saudi</span></p>
          <p className="footer__tag">{t("tagline")}</p>
        </div>
        <nav aria-label={a("footerNav")} className="footer__cols">
          <div>
            <h2>{t("explore")}</h2>
            <ul>
              {navItems.map((i) => <li key={i.key}><Link href={i.href}>{n(i.key)}</Link></li>)}
            </ul>
          </div>
          <div>
            <h2>{t("services")}</h2>
            <ul>
              {footerServices.map((p) => (
                <li key={p}><Link href={`/${p}`}>{getPage(p)!.copy[locale].nav}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h2>{t("legal")}</h2>
            <ul>
              <li>{t("privacy")} <small>({t("soon")})</small></li>
              <li>{t("terms")} <small>({t("soon")})</small></li>
            </ul>
            <h2>{t("language")}</h2>
            <ul>
              {routing.locales.map((x) => (
                <li key={x}>
                  {x === locale ? (
                    <span aria-current="true">{l(x)}</span>
                  ) : (
                    <Link href="/" locale={x} hrefLang={x} lang={x}>{l(x)}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
      <div className="wrap footer__base">
        <p>{t("contactText")}</p>
        <p>{t("copyright", { year: new Date().getFullYear() })}</p>
      </div>
    </footer>
  );
}
