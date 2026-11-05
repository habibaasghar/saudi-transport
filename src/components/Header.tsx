import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { MobileNav } from "./MobileNav";
import { navItems } from "@/lib/nav";

export async function Header({ locale, quoteHref = "/#quote", switchHref = "/" }: { locale: Locale; quoteHref?: string; switchHref?: string }) {
  const t = await getTranslations("nav");
  const a = await getTranslations("a11y");
  const l = await getTranslations("lang");
  const other = routing.locales.find((x) => x !== locale)!;

  return (
    <>
      <a className="skip" href="#main">{a("skip")}</a>
      <header className="site-header">
        <div className="wrap site-header__bar">
          <Link href="/" className="wordmark" aria-label={a("home")}>
            Ride<span>Saudi</span>
          </Link>
          <nav className="nav-desktop" aria-label={a("primaryNav")}>
            <ul>
              {navItems.map((n) => (
                <li key={n.key}><Link href={n.href}>{t(n.key)}</Link></li>
              ))}
            </ul>
          </nav>
          <div className="site-header__actions">
            <Link href={switchHref} locale={other} hrefLang={other} lang={other} className="lang-switch" aria-label={`${a("languageSwitch")}: ${l(other)}`}>
              {l("switchTo")}
            </Link>
            {quoteHref.startsWith("#") ? (
              <a href={quoteHref} className="btn btn--primary btn--sm site-header__cta">{t("quote")}</a>
            ) : (
              <Link href={quoteHref} className="btn btn--primary btn--sm site-header__cta">{t("quote")}</Link>
            )}
            <MobileNav
              items={navItems.map((n) => ({ href: n.href, label: t(n.key) }))}
              quoteLabel={t("quote")}
              quoteHref={quoteHref}
              openLabel={a("openMenu")}
              closeLabel={a("closeMenu")}
              navLabel={a("primaryNav")}
              otherLocale={other}
              switchHref={switchHref}
              otherLabel={l("switchTo")}
            />
          </div>
        </div>
      </header>
    </>
  );
}
