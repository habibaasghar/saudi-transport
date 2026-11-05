import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { serviceKeys } from "@/lib/site";
import { navItems } from "@/lib/nav";

export async function Footer({ locale }: { locale: Locale }) {
  const t = await getTranslations("footer");
  const n = await getTranslations("nav");
  const s = await getTranslations("form.services");
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
              {serviceKeys.map((k) => (
                <li key={k}><Link href={{ pathname: "/", query: { service: k }, hash: "quote" }}>{s(k)}</Link></li>
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
