import type { Locale } from "@/i18n/routing";
import type { BlogPost } from "@/content/blog/types";
import { blogPosts } from "@/content/blog/posts";
import { organizationSchema } from "@/lib/schema";
import { SITE_URL, localeUrl, pageUrl } from "@/lib/site";

export const blogIndexUrl = (l: Locale) => pageUrl(l, "blog");
export const blogPostUrl = (l: Locale, slug: string) => pageUrl(l, `blog/${slug}`);

const home = (l: Locale) => (l === "ar" ? "الرئيسية" : "Home");
const guides = (l: Locale) => (l === "ar" ? "الأدلة" : "Guides");

const website = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "RideSaudi",
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: ["en", "ar"],
};

export function blogIndexSchema(locale: Locale) {
  const url = blogIndexUrl(locale);
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema(),
      website,
      {
        "@type": "CollectionPage",
        "@id": `${url}#webpage`,
        url,
        name: guides(locale),
        inLanguage: locale,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: home(locale), item: localeUrl(locale) },
          { "@type": "ListItem", position: 2, name: guides(locale), item: url },
        ],
      },
    ],
  };
}

/** Article + breadcrumb + FAQ markup; everything mirrors visible content. No ratings, reviews or prices. */
export function blogPostSchema(post: BlogPost, locale: Locale) {
  const c = post.copy[locale];
  const url = blogPostUrl(locale, post.slug);
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema(),
      website,
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: c.h1,
        description: c.description,
        url,
        inLanguage: locale,
        datePublished: post.published,
        dateModified: post.updated,
        mainEntityOfPage: url,
        author: { "@id": `${SITE_URL}/#organization` },
        publisher: { "@id": `${SITE_URL}/#organization` },
        isPartOf: { "@id": `${SITE_URL}/#website` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: home(locale), item: localeUrl(locale) },
          { "@type": "ListItem", position: 2, name: guides(locale), item: blogIndexUrl(locale) },
          { "@type": "ListItem", position: 3, name: c.nav, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        inLanguage: locale,
        mainEntity: c.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
    ],
  };
}

export const allPosts = blogPosts;
