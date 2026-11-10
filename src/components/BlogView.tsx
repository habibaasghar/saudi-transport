import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { getPage } from "@/content/registry";
import { blogPosts } from "@/content/blog/posts";
import type { BlogPost } from "@/content/blog/types";
import { blogIndexSchema, blogPostSchema } from "@/lib/blog-schema";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { QuoteSection } from "./QuoteSection";
import { SectionHead } from "./SectionHead";
import { JsonLd } from "./JsonLd";
import { ContactRow } from "./ContactCta";

const L = {
  en: { home: "Home", blog: "Guides", eyebrow: "Travel guides", indexH1: "Private transport guides for Saudi Arabia", indexSub: "Practical, plain-language guidance for planning airport pickups, intercity trips and cross-border road journeys. We publish no prices or unverified claims here.", read: "Read the guide", answer: "Quick answer", plan: "Plan this journey", planText: "Pages that match this guide:", faq: "Frequently asked questions", updated: "Last reviewed", getQuote: "Get a Quote", crumb: "Breadcrumb" },
  ar: { home: "الرئيسية", blog: "الأدلة", eyebrow: "أدلة السفر", indexH1: "أدلة النقل الخاص في السعودية", indexSub: "إرشادات عملية بلغة واضحة لتخطيط الاستقبال من المطار والرحلات بين المدن والرحلات البرية عبر الحدود. لا ننشر هنا أسعارًا أو ادعاءات غير مؤكدة.", read: "اقرأ الدليل", answer: "الإجابة السريعة", plan: "خطط لرحلتك", planText: "صفحات تناسب هذا الدليل:", faq: "الأسئلة الشائعة", updated: "آخر مراجعة", getQuote: "اطلب عرض سعر", crumb: "مسار التنقل" },
} as const;

const href = (path: string) => `/${path}`;

export async function BlogIndexView({ locale }: { locale: Locale }) {
  const l = L[locale];
  const t = await getTranslations({ locale, namespace: "svc" });
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
            <ContactRow locale={locale} topic={l.indexH1} kinds={["whatsapp", "call"]} className="hero__contact" />
            <p className="hero__note">{t("notice")}</p>
          </div>
        </section>
        <section className="section section--sand" aria-labelledby="guides-h">
          <div className="wrap">
            <SectionHead id="guides-h" eyebrow={l.eyebrow} title={l.blog} />
            <ul className="cards">
              {blogPosts.map((p, i) => (
                <li key={p.slug} className="card">
                  <span className="card__num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
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
          </div>
        </section>
        <QuoteSection locale={locale} topic={l.indexH1} />
      </main>
      <Footer locale={locale} />
    </>
  );
}

export async function BlogPostView({ post, locale }: { post: BlogPost; locale: Locale }) {
  const l = L[locale];
  const c = post.copy[locale];
  const links = post.links.map(getPage).filter((p): p is NonNullable<ReturnType<typeof getPage>> => Boolean(p));
  const others = blogPosts.filter((p) => p.slug !== post.slug);
  return (
    <>
      <JsonLd data={blogPostSchema(post, locale)} />
      <Header locale={locale} quoteHref="#quote" switchHref={`/blog/${post.slug}`} />
      <main id="main" className="svc svc--default">
        <section className="svc-hero" aria-labelledby="post-h1">
          <div className="wrap">
            <nav aria-label={l.crumb} className="crumbs">
              <ol>
                <li><Link href="/">{l.home}</Link></li>
                <li><Link href="/blog">{l.blog}</Link></li>
                <li><span aria-current="page">{c.nav}</span></li>
              </ol>
            </nav>
            <p className="eyebrow eyebrow--light">{l.eyebrow}</p>
            <h1 id="post-h1">{c.h1}</h1>
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

        {c.sections.map((s, i) => (
          <section key={s.h} className={`section ${i % 2 === 0 ? "section--sand" : "section--white"} prose-section`} aria-labelledby={`s${i}-h`}>
            <div className="wrap prose">
              <h2 id={`s${i}-h`}>{s.h}</h2>
              <div className="prose__body">
                {s.p.map((para) => <p key={para}>{para}</p>)}
              </div>
            </div>
          </section>
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
                {others.map((o) => (
                  <li key={o.slug}><Link href={`/blog/${o.slug}`}>{o.copy[locale].nav}</Link></li>
                ))}
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

        <QuoteSection locale={locale} topic={c.h1} />
        <p className="wrap svc-reviewed">{l.updated}: <time dateTime={post.updated}>{post.updated}</time></p>
      </main>
      <Footer locale={locale} />
    </>
  );
}
