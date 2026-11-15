import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import Image from "next/image";
import { MobileNav } from "./MobileNav";
import { navItems, type ResolvedNavItem } from "@/lib/nav";
import { getPage } from "@/content/registry";
import { DesktopNav } from "./DesktopNav";
import { ContactCta } from "./ContactCta";
import { CONTACT, mailHref, telHref, whatsappHref } from "@/config/contact";

export async function Header({ locale, quoteHref = "/#quote", switchHref = "/" }: { locale: Locale; quoteHref?: string; switchHref?: string }) {
  const t = await getTranslations("nav");
  const a = await getTranslations("a11y");
  const l = await getTranslations("lang");
  const c = await getTranslations("contact");
  const other = routing.locales.find((x) => x !== locale)!;

  // Dropdown labels come from each page's own nav copy; an unknown path fails the build.
  const items: ResolvedNavItem[] = navItems.map((n) => ({
    key: n.key,
    href: n.href,
    label: t(n.key),
    optional: n.optional,
    children: n.children?.map((path) => {
      const page = getPage(path);
      if (!page) throw new Error(`nav: unknown page ${path}`);
      return { href: `/${path}`, label: page.copy[locale].nav };
    }),
  }));

  return (
    <>
      <a className="skip" href="#main">{a("skip")}</a>
      <header className="site-header">
        <div className="wrap site-header__bar">
          <Link href="/" className="wordmark" aria-label={a("home")}>
            <Image src="/logo.webp" alt="RideSaudi" width={830} height={360} priority sizes="(min-width:1000px) 150px, 120px" className="logo" />
          </Link>
          <DesktopNav items={items} navLabel={a("primaryNav")} />
          <div className="site-header__actions">
            <ContactCta kind="call" locale={locale} variant="outline" size="sm" iconOnly className="site-header__call" />
            <ContactCta kind="whatsapp" locale={locale} size="sm" iconOnly className="site-header__wa" />
            <Link href={switchHref} locale={other} hrefLang={other} lang={other} className="lang-switch" aria-label={`${a("languageSwitch")}: ${l(other)}`}>
              {l("switchTo")}
            </Link>
            {quoteHref.startsWith("#") ? (
              <a href={quoteHref} className="btn btn--primary btn--sm site-header__cta">{t("quote")}</a>
            ) : (
              <Link href={quoteHref} className="btn btn--primary btn--sm site-header__cta">{t("quote")}</Link>
            )}
            <MobileNav
              items={items}
              quoteLabel={t("quote")}
              quoteHref={quoteHref}
              openLabel={a("openMenu")}
              closeLabel={a("closeMenu")}
              navLabel={a("primaryNav")}
              otherLocale={other}
              switchHref={switchHref}
              otherLabel={l("switchTo")}
              whatsappHref={whatsappHref(c("whatsappGeneral"))}
              telHref={telHref}
              mailHref={mailHref(c("emailSubject"))}
              whatsappLabel={c("whatsapp")}
              callLabel={c("call")}
              emailLabel={c("email")}
              phoneDisplay={CONTACT.phoneDisplay}
            />
          </div>
        </div>
      </header>
    </>
  );
}
