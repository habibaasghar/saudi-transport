import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { BlogHubView, BlogPostView } from "@/components/BlogView";
import { blogHubs, getHub } from "@/content/blog/hubs";
import { blogPosts, getPost } from "@/content/blog/posts";
import { routing, type Locale } from "@/i18n/routing";
import { blogPostUrl } from "@/lib/blog-schema";
import { ogImage } from "@/lib/og";

export const dynamicParams = false;

type Params = Promise<{ locale: string; slug: string }>;

export function generateStaticParams() {
  return routing.locales.flatMap((locale) => [...blogHubs.map((h) => h.slug), ...blogPosts.map((p) => p.slug)].map((slug) => ({ locale, slug })));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale: l, slug } = await params;
  const locale = l as Locale;
  const post = getPost(slug) ?? getHub(slug);
  if (!post) return {};
  const c = post.copy[locale];
  const isPost = "published" in post;
  const url = blogPostUrl(locale, slug);
  return {
    title: { absolute: `${c.title} | RideSaudi` },
    description: c.description,
    alternates: {
      canonical: url,
      languages: { ...Object.fromEntries(routing.locales.map((x) => [x, blogPostUrl(x, slug)])), "x-default": blogPostUrl(routing.defaultLocale, slug) },
    },
    openGraph: {
      type: isPost ? "article" : "website",
      siteName: "RideSaudi",
      url,
      title: c.title,
      description: c.description,
      locale: locale === "ar" ? "ar_SA" : "en_US",
      alternateLocale: locale === "ar" ? ["en_US"] : ["ar_SA"],
      ...(isPost ? { publishedTime: post.published, modifiedTime: post.updated } : {}),
      images: [ogImage(post.hero, locale)],
    },
    twitter: { card: "summary_large_image", title: c.title, description: c.description, images: [ogImage(post.hero, locale).url] },
    robots: { index: true, follow: true },
  };
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const hub = getHub(slug);
  if (hub) return <BlogHubView hub={hub} locale={locale as Locale} />;
  const post = getPost(slug);
  if (!post) notFound();
  return <BlogPostView post={post} locale={locale as Locale} />;
}
