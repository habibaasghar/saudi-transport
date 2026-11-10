import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { BlogPostView } from "@/components/BlogView";
import { blogPosts, getPost } from "@/content/blog/posts";
import { routing, type Locale } from "@/i18n/routing";
import { blogPostUrl } from "@/lib/blog-schema";

export const dynamicParams = false;

type Params = Promise<{ locale: string; slug: string }>;

export function generateStaticParams() {
  return routing.locales.flatMap((locale) => blogPosts.map((p) => ({ locale, slug: p.slug })));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale: l, slug } = await params;
  const locale = l as Locale;
  const post = getPost(slug);
  if (!post) return {};
  const c = post.copy[locale];
  const url = blogPostUrl(locale, slug);
  return {
    title: { absolute: `${c.title} | RideSaudi` },
    description: c.description,
    alternates: {
      canonical: url,
      languages: { ...Object.fromEntries(routing.locales.map((x) => [x, blogPostUrl(x, slug)])), "x-default": blogPostUrl(routing.defaultLocale, slug) },
    },
    openGraph: {
      type: "article",
      siteName: "RideSaudi",
      url,
      title: c.title,
      description: c.description,
      locale: locale === "ar" ? "ar_SA" : "en_US",
      alternateLocale: locale === "ar" ? ["en_US"] : ["ar_SA"],
      publishedTime: post.published,
      modifiedTime: post.updated,
    },
    twitter: { card: "summary", title: c.title, description: c.description },
    robots: { index: true, follow: true },
  };
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const { locale, slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  setRequestLocale(locale);
  return <BlogPostView post={post} locale={locale as Locale} />;
}
