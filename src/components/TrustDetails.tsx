import { getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { COMPANY } from "@/config/company";
import { SectionHead } from "./SectionHead";

const DEV = process.env.NODE_ENV !== "production";

/**
 * Trust block: company details, partner vetting and reviews. Every item comes from config/company.ts and is left out
 * until the owner fills it in. In production the whole block disappears when nothing is filled; dev shows placeholders.
 */
export async function TrustDetails({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: "trustBlock" });
  const ph = (label: string) => (DEV ? <mark>[{label}]</mark> : null);

  const facts: { k: string; v: React.ReactNode }[] = [
    { k: t("legalName"), v: COMPANY.legalName?.[locale] ?? ph(t("legalName")) },
    { k: t("cr"), v: COMPANY.cr ? <bdi dir="ltr">{COMPANY.cr}</bdi> : ph(t("cr")) },
    { k: t("vat"), v: COMPANY.vat ? <bdi dir="ltr">{COMPANY.vat}</bdi> : ph(t("vat")) },
    { k: t("address"), v: COMPANY.address?.[locale] ?? ph(t("address")) },
    { k: t("email"), v: COMPANY.domainEmail ? <a href={`mailto:${COMPANY.domainEmail}`}><bdi dir="ltr">{COMPANY.domainEmail}</bdi></a> : ph(t("email")) },
  ].filter((f) => f.v !== null);
  const vetting = COMPANY.vetting?.map((s) => s[locale]) ?? (DEV ? [`[${t("vettingTitle")}]`] : []);
  const reviews = COMPANY.reviewsUrl ?? (DEV ? "#" : null);

  if (facts.length === 0 && vetting.length === 0 && !reviews) return null;

  return (
    <section className="section section--sand trust-details" aria-labelledby="trustd-h">
      <div className="wrap">
        <SectionHead id="trustd-h" eyebrow={t("eyebrow")} title={t("title")} />
        <div className="trust-details__grid">
          {facts.length > 0 && (
            <div>
              <h3>{t("companyTitle")}</h3>
              <dl className="trust-details__facts">
                {facts.map((f) => (
                  <div key={f.k}><dt>{f.k}</dt><dd>{f.v}</dd></div>
                ))}
              </dl>
            </div>
          )}
          {vetting.length > 0 && (
            <div>
              <h3>{t("vettingTitle")}</h3>
              <ul className="ticks">{vetting.map((s) => <li key={s}>{s}</li>)}</ul>
            </div>
          )}
          {reviews && (
            <div>
              <h3>{t("reviewsTitle")}</h3>
              <p>
                <a href={reviews} target="_blank" rel="noopener noreferrer">{COMPANY.reviewsLabel?.[locale] ?? (DEV ? `[${t("reviewsTitle")}]` : t("reviewsLink"))}</a>
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
