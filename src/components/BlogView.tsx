import { Fragment } from "react";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { getPage } from "@/content/registry";
import { blogPosts, relatedPosts } from "@/content/blog/posts";
import { blogHubs, getHub, type BlogHub } from "@/content/blog/hubs";
import type { BlogPost } from "@/content/blog/types";
import type { PageImage } from "@/content/images";
import { guidePrefill } from "@/content/location-prefill";
import { blogHubSchema, blogIndexSchema, blogPostSchema } from "@/lib/blog-schema";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { QuoteSection } from "./QuoteSection";
import { HeavyQuoteSection, HeavyWhatsApp } from "./HeavyQuoteSection";
import { SectionHead } from "./SectionHead";
import { JsonLd } from "./JsonLd";
import { ContactRow } from "./ContactCta";

const L = {
  en: { home: "Home", blog: "Guides", eyebrow: "Travel guides", heavyEyebrow: "Transport guides", indexH1: "Private transport and heavy transport guides for Saudi Arabia", indexSub: "Practical, plain-language guidance for planning airport pickups, intercity trips, cross-border road journeys, car towing and machinery transport. We publish no prices or unverified claims here.", read: "Read the guide", answer: "Quick answer", plan: "Plan this job", planText: "Pages that match this guide:", related: "Related guides", faq: "Frequently asked questions", updated: "Last reviewed", getQuote: "Get a Quote", crumb: "Breadcrumb", allIn: "All guides in this topic", book: "Book this service", hubOpen: "Open the topic", other: "More guides" },
  ar: { home: "الرئيسية", blog: "الأدلة", eyebrow: "أدلة السفر", heavyEyebrow: "أدلة النقل", indexH1: "أدلة التوصيل الخاص والنقل الثقيل في السعودية", indexSub: "إرشادات عملية بلغة واضحة لتخطيط الاستقبال من المطار والرحلات بين المدن والرحلات البرية عبر الحدود وسحب السيارات ونقل المعدات. لا ننشر هنا أسعارًا أو ادعاءات غير مؤكدة.", read: "اقرأ الدليل", answer: "الإجابة السريعة", plan: "خطط لمهمتك", planText: "صفحات تناسب هذا الدليل:", related: "أدلة ذات صلة", faq: "الأسئلة الشائعة", updated: "آخر مراجعة", getQuote: "اطلب عرض سعر", crumb: "مسار التنقل", allIn: "كل الأدلة في هذا الموضوع", book: "احجز الخدمة", hubOpen: "افتح الموضوع", other: "أدلة أخرى" },
} as const;

const href = (path: string) => `/${path}`;

function HeroImage({ img, locale }: { img: PageImage; locale: Locale }) {
  return (
    <Image
      className="svc-hero__bg"
      src={img.src}
      alt={img.alt[locale]}
      fill
      priority
      fetchPriority="high"
      sizes="100vw"
      style={{ objectFit: "cover", objectPosition: img.focus ?? "50% 50%" }}
    />
  );
}

function GuideCards({ posts, locale, start = 0 }: { posts: BlogPost[]; locale: Locale; start?: number }) {
  const l = L[locale];
  return (
    <ul className="cards">
      {posts.map((p, i) => (
        <li key={p.slug} className="card">
          <span className="card__num" aria-hidden="true">{String(start + i + 1).padStart(2, "0")}</span>
          <h3>{p.copy[locale].nav}</h3>
          <p>{p.copy[locale].summary}</p>
          <Link className="card__link" href={`/blog/${p.slug}`}>
            {l.read}
            <span className="sr-only"> — {p.copy[locale].nav}</span>
            <span aria-hidden="true" className="arrow">→</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export async function BlogIndexView({ locale }: { locale: Locale }) {
  const l = L[locale];
  const t = await getTranslations({ locale, namespace: "svc" });
  const loose = blogPosts.filter((p) => !p.cluster);
  return (
    <>
      <JsonLd data={blogIndexSchema(locale)} />
      <Header locale={locale} quoteHref="#quote" switchHref="/blog" />
      <main id="main" className="svc svc--default">
        <section className="svc-hero" aria-labelledby="blog-h1">
          <div className="wrap">
            <nav aria-label={l.crumb} className="crumbs">
              <ol>
                <li><Link href="/">{l.home}</Link></li>
                <li><span aria-current="page">{l.blog}</span></li>
              </ol>
            </nav>
            <p className="eyebrow eyebrow--light">{l.eyebrow}</p>
            <h1 id="blog-h1">{l.indexH1}</h1>
            <p className="svc-hero__sub">{l.indexSub}</p>
            <ContactRow locale={locale} topic={l.indexH1} kinds={["whatsapp"]} className="hero__contact" />
            <p className="hero__note">{t("notice")}</p>
          </div>
        </section>
        {blogHubs.map((h, i) => {
          const posts = blogPosts.filter((p) => p.cluster === h.slug);
          return (
            <section key={h.slug} className={`section ${i % 2 === 0 ? "section--sand" : "section--white"}`} aria-labelledby={`hub-${h.slug}-h`}>
              <div className="wrap">
                <SectionHead id={`hub-${h.slug}-h`} eyebrow={h.heavy ? l.heavyEyebrow : l.eyebrow} title={h.copy[locale].nav} />
                <p className="lede">{h.copy[locale].summary} <Link href={`/blog/${h.slug}`}>{l.hubOpen}: {h.copy[locale].nav} →</Link></p>
                <GuideCards posts={posts} locale={locale} />
              </div>
            </section>
          );
        })}
        {loose.length > 0 && (
          <section className="section section--sand" aria-labelledby="guides-h">
            <div className="wrap">
              <SectionHead id="guides-h" eyebrow={l.eyebrow} title={l.other} />
              <GuideCards posts={loose} locale={locale} />
            </div>
          </section>
        )}
        <QuoteSection locale={locale} topic={l.indexH1} />
      </main>
      <Footer locale={locale} switchHref="/blog" />
    </>
  );
}

export async function BlogHubView({ hub, locale }: { hub: BlogHub; locale: Locale }) {
  const l = L[locale];
  const c = hub.copy[locale];
  const posts = blogPosts.filter((p) => p.cluster === hub.slug);
  const links = hub.links.map(getPage).filter((p): p is NonNullable<ReturnType<typeof getPage>> => Boolean(p));
  const other = blogHubs.filter((h) => h.slug !== hub.slug);
  return (
    <>
      <JsonLd data={blogHubSchema(hub, locale)} />
      <Header locale={locale} quoteHref="#quote" switchHref={`/blog/${hub.slug}`} />
      <main id="main" className={`svc svc--${hub.heavy ? "industrial" : "default"}`}>
        <section className="svc-hero svc-hero--img" aria-labelledby="hub-h1">
          <HeroImage img={hub.hero} locale={locale} />
          <div className="wrap">
            <nav aria-label={l.crumb} className="crumbs">
              <ol>
                <li><Link href="/">{l.home}</Link></li>
                <li><Link href="/blog">{l.blog}</Link></li>
                <li><span aria-current="page">{c.nav}</span></li>
              </ol>
            </nav>
            <p className="eyebrow eyebrow--light">{hub.heavy ? l.heavyEyebrow : l.eyebrow}</p>
            <h1 id="hub-h1">{c.h1}</h1>
            <p className="svc-hero__sub">{c.summary}</p>
            <div className="hero__actions">
              <a href="#quote" className="btn btn--primary btn--lg">{l.getQuote}</a>
            </div>
          </div>
        </section>
        <section className="section section--white svc-answer" aria-labelledby="answer-h">
          <div className="wrap">
            <div className="answer">
              <h2 id="answer-h" className="answer__label">{l.answer}</h2>
              <p>{c.answer}</p>
            </div>
          </div>
        </section>
        <section className="section section--sand" aria-labelledby="hub-guides-h">
          <div className="wrap">
            <SectionHead id="hub-guides-h" eyebrow={hub.heavy ? l.heavyEyebrow : l.eyebrow} title={l.allIn} />
            <GuideCards posts={posts} locale={locale} />
          </div>
        </section>
        {c.sections.map((s, i) => (
          <section key={s.h} className={`section ${i % 2 === 0 ? "section--white" : "section--sand"} prose-section`} aria-labelledby={`s${i}-h`}>
            <div className="wrap prose">
              <h2 id={`s${i}-h`}>{s.h}</h2>
              <div className="prose__body">
                {s.p.map((para) => <p key={para}>{para}</p>)}
                {s.list && <ul className="ticks">{s.list.map((item) => <li key={item}>{item}</li>)}</ul>}
              </div>
            </div>
          </section>
        ))}
        <section className="section section--palm" aria-labelledby="book-h">
          <div className="wrap prose">
            <h2 id="book-h">{l.book}</h2>
            <div className="prose__body">
              <ul className="ticks ticks--light">
                {links.map((p) => <li key={p.path}><Link href={href(p.path)}>{p.copy[locale].nav}</Link></li>)}
                {other.map((h) => <li key={h.slug}><Link href={`/blog/${h.slug}`}>{h.copy[locale].nav}</Link></li>)}
              </ul>
              <a href="#quote" className="btn btn--primary">{l.getQuote}</a>
            </div>
          </div>
        </section>
        <section className="section section--white" aria-labelledby="faq-h">
          <div className="wrap faq">
            <SectionHead id="faq-h" eyebrow={l.eyebrow} title={l.faq} />
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
        {hub.heavy ? <HeavyQuoteSection locale={locale} topic={c.h1} /> : <QuoteSection locale={locale} topic={c.h1} />}
        <p className="wrap svc-reviewed">{l.updated}: <time dateTime={hub.updated}>{hub.updated}</time></p>
      </main>
      <Footer locale={locale} switchHref={`/blog/${hub.slug}`} />
    </>
  );
}

export async function BlogPostView({ post, locale }: { post: BlogPost; locale: Locale }) {
  const l = L[locale];
  const c = post.copy[locale];
  const links = post.links.map(getPage).filter((p): p is NonNullable<ReturnType<typeof getPage>> => Boolean(p));
  const others = relatedPosts(post);
  const hub = post.cluster ? getHub(post.cluster) : undefined;
  const heavy = Boolean(hub?.heavy);
  const form = guidePrefill(post.slug, locale);
  return (
    <>
      <JsonLd data={blogPostSchema(post, locale)} />
      <Header locale={locale} quoteHref="#quote" switchHref={`/blog/${post.slug}`} />
      <main id="main" className={`svc svc--${heavy ? "industrial" : "default"}`}>
        <section className={`svc-hero${post.hero ? " svc-hero--img" : ""}`} aria-labelledby="post-h1">
          {post.hero && <HeroImage img={post.hero} locale={locale} />}
          <div className="wrap">
            <nav aria-label={l.crumb} className="crumbs">
              <ol>
                <li><Link href="/">{l.home}</Link></li>
                <li><Link href="/blog">{l.blog}</Link></li>
                {hub && <li><Link href={`/blog/${hub.slug}`}>{hub.copy[locale].nav}</Link></li>}
                <li><span aria-current="page">{c.nav}</span></li>
              </ol>
            </nav>
            <p className="eyebrow eyebrow--light">{heavy ? l.heavyEyebrow : l.eyebrow}</p>
            <h1 id="post-h1">{c.h1}</h1>
            <p className="svc-hero__sub">{c.summary}</p>
            <div className="hero__actions">
              <a href="#quote" className="btn btn--primary btn--lg">{l.getQuote}</a>
            </div>
            {heavy && <HeavyWhatsApp locale={locale} topic={c.h1} className="hero__contact" />}
          </div>
        </section>

        <section className="section section--white svc-answer" aria-labelledby="answer-h">
          <div className="wrap">
            <div className="answer">
              <h2 id="answer-h" className="answer__label">{l.answer}</h2>
              <p>{c.answer}</p>
            </div>
          </div>
        </section>

        {c.sections.map((s, i) => (
          <Fragment key={s.h}>
            <section className={`section ${i % 2 === 0 ? "section--sand" : "section--white"} prose-section`} aria-labelledby={`s${i}-h`}>
              <div className="wrap prose">
                <h2 id={`s${i}-h`}>{s.h}</h2>
                <div className="prose__body">
                  {s.p.map((para) => <p key={para}>{para}</p>)}
                  {s.list && (
                    <ul className="ticks">
                      {s.list.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  )}
                </div>
              </div>
            </section>
            {i === 0 && c.table && (
              <section className="section section--white" aria-labelledby="table-h">
                <div className="wrap">
                  <h2 id="table-h" className="table-title">{c.table.h}</h2>
                  <div className="table-wrap" tabIndex={0} role="region" aria-labelledby="table-h">
                    <table className={c.table.head.length <= 2 ? "table--fit" : undefined}>
                      <thead>
                        <tr>{c.table.head.map((h) => <th key={h} scope="col">{h}</th>)}</tr>
                      </thead>
                      <tbody>
                        {c.table.rows.map((r) => (
                          <tr key={r[0]}>{r.map((cell, j) => (j === 0 ? <th key={j} scope="row">{cell}</th> : <td key={j}>{cell}</td>))}</tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>
            )}
          </Fragment>
        ))}

        <section className="section section--palm" aria-labelledby="plan-h">
          <div className="wrap prose">
            <h2 id="plan-h">{l.plan}</h2>
            <div className="prose__body">
              <p>{l.planText}</p>
              <ul className="ticks ticks--light">
                {links.map((p) => (
                  <li key={p.path}><Link href={href(p.path)}>{p.copy[locale].nav}</Link></li>
                ))}
              </ul>
              <h3>{l.related}</h3>
              <ul className="ticks ticks--light">
                {others.map((o) => (
                  <li key={o.slug}><Link href={`/blog/${o.slug}`}>{o.copy[locale].nav}</Link></li>
                ))}
                {hub && <li><Link href={`/blog/${hub.slug}`}>{l.allIn}: {hub.copy[locale].nav}</Link></li>}
              </ul>
              <a href="#quote" className="btn btn--primary">{l.getQuote}</a>
            </div>
          </div>
        </section>

        <section className="section section--white" aria-labelledby="faq-h">
          <div className="wrap faq">
            <SectionHead id="faq-h" eyebrow={l.eyebrow} title={l.faq} />
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

        {heavy ? <HeavyQuoteSection locale={locale} service={post.heavyService} topic={c.h1} /> : <QuoteSection locale={locale} topic={c.h1} defaultService={form.service} prefill={form.prefill} />}
        <p className="wrap svc-reviewed">{l.updated}: <time dateTime={post.updated}>{post.updated}</time></p>
      </main>
      <Footer locale={locale} switchHref={`/blog/${post.slug}`} />
    </>
  );
}
