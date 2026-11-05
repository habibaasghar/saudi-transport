import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import type { ServicePage } from "@/content/types";
import { childrenOf, getPage, trail } from "@/content/registry";
import { confirmed } from "@/lib/site";
import { pageSchema } from "@/lib/schema";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { HowItWorks } from "./HowItWorks";
import { QuoteSection } from "./QuoteSection";
import { SectionHead } from "./SectionHead";
import { JsonLd } from "./JsonLd";

const href = (path: string) => `/${path}`;

export async function ServicePageView({ page, locale }: { page: ServicePage; locale: Locale }) {
  const t = await getTranslations({ locale, namespace: "svc" });
  const c = page.copy[locale];
  const crumbs = trail(page);
  const kids = childrenOf(page.path);
  const related = page.related.map(getPage).filter((p): p is ServicePage => Boolean(p));
  const wa = confirmed.contact.whatsapp?.replace(/[^\d]/g, "");
  const waLink = wa ? `https://wa.me/${wa}?text=${encodeURIComponent(t("whatsappText", { service: c.h1 }))}` : null;

  return (
    <>
      <JsonLd data={pageSchema(page, locale)} />
      <Header locale={locale} quoteHref="#quote" switchHref={href(page.path)} />
      <main id="main" className={`svc svc--${page.variant}`}>
        <section className="svc-hero" aria-labelledby="svc-h1">
          <div className="wrap">
            <nav aria-label={t("breadcrumb")} className="crumbs">
              <ol>
                <li><Link href="/">{t("home")}</Link></li>
                {crumbs.map((p, i) => (
                  <li key={p.path}>
                    {i === crumbs.length - 1 ? (
                      <span aria-current="page">{p.copy[locale].nav}</span>
                    ) : (
                      <Link href={href(p.path)}>{p.copy[locale].nav}</Link>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
            <p className="eyebrow eyebrow--light">{c.eyebrow}</p>
            <h1 id="svc-h1">{c.h1}</h1>
            <p className="svc-hero__sub">{c.summary}</p>
            <div className="hero__actions">
              <a href="#quote" className="btn btn--primary btn--lg">{t("getQuote")}</a>
              {waLink ? (
                <a href={waLink} className="btn btn--ghost btn--lg" rel="noopener" target="_blank">{t("whatsapp")}</a>
              ) : null}
            </div>
            <p className="hero__note">{t("notice")}</p>
          </div>
        </section>

        <section className="section section--white svc-answer" aria-labelledby="answer-h">
          <div className="wrap">
            <div className="answer">
              <h2 id="answer-h" className="answer__label">{t("answerLabel")}</h2>
              <p>{c.answer}</p>
            </div>
          </div>
        </section>

        {kids.length > 0 && (
          <section className="section section--sand" aria-labelledby="kids-h">
            <div className="wrap">
              <SectionHead id="kids-h" eyebrow={c.eyebrow} title={t("inSection")} />
              <ul className="cards">
                {kids.map((k, i) => (
                  <li key={k.path} className="card">
                    <span className="card__num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                    <h3>{k.copy[locale].nav}</h3>
                    <p>{k.copy[locale].summary}</p>
                    <Link className="card__link" href={href(k.path)}>
                      {t("viewPage")}
                      <span className="sr-only"> — {k.copy[locale].nav}</span>
                      <span aria-hidden="true" className="arrow">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {c.sections.map((s, i) => (
          <div key={s.h} style={{ display: "contents" }}>
            <section className={`section ${i % 2 === 0 ? "section--sand" : "section--white"} prose-section`} aria-labelledby={`s${i}-h`}>
              <div className="wrap prose">
                <h2 id={`s${i}-h`}>{s.h}</h2>
                <div className="prose__body">
                  {s.p.map((para) => <p key={para}>{para}</p>)}
                  {s.list && (
                    <ul className="ticks">
                      {s.list.map((li) => <li key={li}>{li}</li>)}
                    </ul>
                  )}
                </div>
              </div>
            </section>
            {i === 0 && c.table && (
              <section className="section section--sand" aria-labelledby="table-h">
                <div className="wrap">
                  <h2 id="table-h" className="table-title">{c.table.h}</h2>
                  <div className="table-wrap" tabIndex={0} role="region" aria-labelledby="table-h">
                    <table>
                      <thead>
                        <tr>{c.table.head.map((h) => <th key={h} scope="col">{h}</th>)}</tr>
                      </thead>
                      <tbody>
                        {c.table.rows.map((r) => (
                          <tr key={r[0]}>
                            {r.map((cell, j) => (j === 0 ? <th key={cell} scope="row">{cell}</th> : <td key={cell}>{cell}</td>))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>
            )}
          </div>
        ))}

        {c.checklist && (
          <section className="section section--palm" aria-labelledby="check-h">
            <div className="wrap prose">
              <h2 id="check-h">{c.checklist.h}</h2>
              <div className="prose__body">
                <ul className="ticks ticks--light">
                  {c.checklist.items.map((it) => <li key={it}>{it}</li>)}
                </ul>
                <a href="#quote" className="btn btn--primary">{t("getQuote")}</a>
              </div>
            </div>
          </section>
        )}

        <HowItWorks />

        {related.length > 0 && (
          <section className="section section--sand" aria-labelledby="rel-h">
            <div className="wrap">
              <SectionHead id="rel-h" eyebrow={t("relatedEyebrow")} title={t("related")} />
              <ul className="cards">
                {related.map((r, i) => (
                  <li key={r.path} className="card">
                    <span className="card__num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                    <h3>{r.copy[locale].nav}</h3>
                    <p>{r.copy[locale].summary}</p>
                    <Link className="card__link" href={href(r.path)}>
                      {t("viewPage")}
                      <span className="sr-only"> — {r.copy[locale].nav}</span>
                      <span aria-hidden="true" className="arrow">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        <section className="section section--white" aria-labelledby="faq-h">
          <div className="wrap faq">
            <SectionHead id="faq-h" eyebrow={t("faqEyebrow")} title={t("faqTitle")} />
            <div className="faq__list">
              {c.faqs.map((f) => (
                <details key={f.q} name="faq">
                  <summary><h3>{f.q}</h3></summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <QuoteSection locale={locale} defaultService={page.service} />
        <p className="wrap svc-reviewed">{t("reviewed")}: <time dateTime={page.updated}>{page.updated}</time></p>
      </main>
      <Footer locale={locale} />
    </>
  );
}
