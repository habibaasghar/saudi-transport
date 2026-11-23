import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import type { ServicePage } from "@/content/types";
import { childrenOf, getPage, pages, trail } from "@/content/registry";
import { blogPosts } from "@/content/blog/posts";
import { getImage } from "@/content/images";
import { pageSchema } from "@/lib/schema";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { HowItWorks } from "./HowItWorks";
import { QuoteSection } from "./QuoteSection";
import { SectionHead } from "./SectionHead";
import { JsonLd } from "./JsonLd";
import { ContactRow } from "./ContactCta";
import { RouteTracker } from "./RouteTracker";
import { RichText } from "./RichText";
import { stripLinks } from "@/content/inline-links";
import { FleetCards } from "./Fleet";
import { pagePrefill } from "@/content/location-prefill";
import { HeavyQuoteSection, HeavySteps, HeavyWhatsApp } from "./HeavyQuoteSection";

type Table = { h: string; head: string[]; rows: string[][] };

/** Comparison table block (AIO-friendly, server-rendered). */
function TableBlock({ table, id }: { table: Table; id: string }) {
  return (
    <section className="section section--sand" aria-labelledby={id}>
      <div className="wrap">
        <h2 id={id} className="table-title">{table.h}</h2>
        <div className="table-wrap" tabIndex={0} role="region" aria-labelledby={id}>
          <table className={table.head.length <= 2 ? "table--fit" : undefined}>
            <thead>
              <tr>{table.head.map((h) => <th key={h} scope="col">{h}</th>)}</tr>
            </thead>
            <tbody>
              {table.rows.map((r) => (
                <tr key={r[0]}>
                  {r.map((cell, j) => (j === 0 ? <th key={j} scope="row">{cell}</th> : <td key={j}>{cell}</td>))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

const href = (path: string) => `/${path}`;
const ROUTE_PREFIX = "services/intercity-transfers/";
const CITY_PREFIX = "services/city-transport/";

/** On a city hub, every route page that starts or ends in that city (by slug), not already linked as related or child. */
function cityRoutes(page: ServicePage, exclude: Set<string>): ServicePage[] {
  if (!page.path.startsWith(CITY_PREFIX)) return [];
  const hub = page.path.slice(CITY_PREFIX.length);
  /** City hub slugs that are spelled differently in route slugs. */
  const city = ({ buraidah: "buraydah" } as Record<string, string>)[hub] ?? hub;
  if (!hub || hub.includes("/")) return [];
  return pages.filter((p) => {
    if (!p.path.startsWith(ROUTE_PREFIX) || exclude.has(p.path)) return false;
    const [o, d] = p.path.slice(ROUTE_PREFIX.length).split("-to-");
    return o === city || d === city;
  });
}

export async function ServicePageView({ page, locale }: { page: ServicePage; locale: Locale }) {
  const t = await getTranslations({ locale, namespace: "svc" });
  const f = await getTranslations({ locale, namespace: "fleet" });
  const h = await getTranslations({ locale, namespace: "heavy" });
  /** Heavy transport / satha pages: own CTA wording, WhatsApp message, process steps and quotation form. */
  const heavy = page.variant === "industrial";
  const c = page.copy[locale];
  const crumbs = trail(page);
  const hero = getImage(page.path);
  const kids = childrenOf(page.path);
  const related = page.related.map(getPage).filter((p): p is ServicePage => Boolean(p));
  const routes = cityRoutes(page, new Set([...page.related, ...kids.map((k) => k.path)]));
  /** Guides that cite this page link back to it, so informational and commercial pages reinforce each other. */
  const guides = blogPosts.filter((b) => b.links.includes(page.path));

  return (
    <>
      <JsonLd data={pageSchema(page, locale)} />
      {page.path.startsWith("services/intercity-transfers/") && <RouteTracker route={page.path.split("/").pop() ?? ""} locale={locale} />}
      <Header locale={locale} quoteHref="#quote" switchHref={href(page.path)} />
      <main id="main" className={`svc svc--${page.variant}`}>
        <section className={`svc-hero${hero ? " svc-hero--img" : ""}`} aria-labelledby="svc-h1">
          {hero && (
            <Image
              className="svc-hero__bg"
              src={hero.src}
              alt={hero.alt[locale]}
              fill
              priority
              fetchPriority="high"
              sizes="100vw"
              style={{ objectFit: "cover", objectPosition: hero.focus ?? "50% 50%" }}
            />
          )}
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
              <a href="#quote" className="btn btn--primary btn--lg">{heavy ? h("cta") : t("getQuote")}</a>
            </div>
            {heavy ? (
              <HeavyWhatsApp locale={locale} topic={c.h1} className="hero__contact" />
            ) : (
              <ContactRow locale={locale} topic={c.h1} kinds={["whatsapp"]} className="hero__contact" />
            )}
            <p className="hero__note">{heavy ? h("notice") : t("notice")}</p>
          </div>
        </section>

        <section className="section section--white svc-answer" aria-labelledby="answer-h">
          <div className="wrap">
            <div className="answer">
              <h2 id="answer-h" className="answer__label">{t("answerLabel")}</h2>
              <p>{c.answer}</p>
              {!heavy && <p className="answer__exclusive">{t("exclusive")}</p>}
            </div>
          </div>
        </section>

        {page.path === "fleet" && (
          <section className="section section--sand fleet-page" aria-labelledby="fleet-cards-h">
            <div className="wrap">
              <SectionHead id="fleet-cards-h" eyebrow={c.eyebrow} title={f("title")} intro={`${f("partnerNote")} ${f("photoNote")}`} />
              <FleetCards locale={locale} />
            </div>
          </section>
        )}

        {kids.length > 0 && (
          <section className="section section--sand" aria-labelledby="kids-h">
            <div className="wrap">
              <SectionHead id="kids-h" eyebrow={c.eyebrow} title={t("inSection")} />
              <ul className="cards">
                {kids.map((k, i) => (
                  <li key={k.path} className="card">
                    <span className="card__num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                    {getImage(k.path) && (
                      <Image className="card__img" src={getImage(k.path)!.src} alt={getImage(k.path)!.alt[locale]} width={getImage(k.path)!.width} height={getImage(k.path)!.height} sizes="(min-width: 1000px) 33vw, (min-width: 700px) 50vw, 100vw" loading="lazy" />
                    )}
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
                  {s.p.map((para) => <p key={stripLinks(para)}><RichText text={para} /></p>)}
                  {s.list && (
                    <ul className="ticks">
                      {s.list.map((li) => <li key={stripLinks(li)}><RichText text={li} /></li>)}
                    </ul>
                  )}
                </div>
              </div>
            </section>
            {i === 0 && c.table && <TableBlock table={c.table} id="table-h" />}
            {c.tables?.filter((x) => x.after === i).map((x, k) => <TableBlock key={x.h} table={x} id={`table-${i}-${k}-h`} />)}
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
                <a href="#quote" className="btn btn--primary">{heavy ? h("cta") : t("getQuote")}</a>
              </div>
            </div>
          </section>
        )}

        {heavy ? <HeavySteps locale={locale} /> : <HowItWorks />}

        {related.length > 0 && (
          <section className="section section--sand" aria-labelledby="rel-h">
            <div className="wrap">
              <SectionHead id="rel-h" eyebrow={t("relatedEyebrow")} title={t("related")} />
              <ul className="cards">
                {related.map((r, i) => (
                  <li key={r.path} className="card">
                    <span className="card__num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                    {getImage(r.path) && (
                      <Image className="card__img" src={getImage(r.path)!.src} alt={getImage(r.path)!.alt[locale]} width={getImage(r.path)!.width} height={getImage(r.path)!.height} sizes="(min-width: 1000px) 33vw, (min-width: 700px) 50vw, 100vw" loading="lazy" />
                    )}
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

        {(routes.length > 0 || guides.length > 0) && (
          <section className="section section--white" aria-labelledby="more-h">
            <div className="wrap">
              <SectionHead id="more-h" eyebrow={t("relatedEyebrow")} title={routes.length > 0 ? t("cityRoutes") : t("guides")} />
              {routes.length > 0 && (
                <ul className="chips">
                  {routes.map((r) => (
                    <li key={r.path}><Link href={href(r.path)}>{r.copy[locale].nav}</Link></li>
                  ))}
                </ul>
              )}
              {routes.length > 0 && guides.length > 0 && <h3 className="more__sub">{t("guides")}</h3>}
              {guides.length > 0 && (
                <ul className="chips">
                  {guides.map((b) => (
                    <li key={b.slug}><Link href={`/blog/${b.slug}`}>{b.copy[locale].nav}</Link></li>
                  ))}
                </ul>
              )}
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

        {heavy ? <HeavyQuoteSection locale={locale} service={page.heavyService} topic={c.h1} prefill={pagePrefill(page.path, locale)} /> : <QuoteSection locale={locale} defaultService={page.service} topic={c.h1} prefill={pagePrefill(page.path, locale)} />}
        <p className="wrap svc-reviewed">{t("reviewed")}: <time dateTime={page.updated}>{page.updated}</time></p>
      </main>
      <Footer locale={locale} switchHref={href(page.path)} />
    </>
  );
}
