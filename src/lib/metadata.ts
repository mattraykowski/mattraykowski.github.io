import type { Metadata } from 'next';
import { articles, type Article } from '@/data/articles';
import { SITE } from '@/lib/constants';

/**
 * Build per-article metadata (including Open Graph + Twitter card tags) so that
 * links shared to Slack, LinkedIn, etc. preview the article rather than
 * inheriting the site-wide defaults from the root layout.
 */
export function articleMetadata(slug: string): Metadata {
  const article = articles.find(
    (a): a is Extract<Article, { slug: string }> => a.slug === slug,
  );

  if (!article) return {};

  const title = `${article.title} — ${SITE.name}`;
  const url = `${SITE.url}/articles/${article.slug}`;
  const images = article.image ? [{ url: article.image }] : undefined;

  return {
    title,
    description: article.summary,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      title,
      description: article.summary,
      url,
      siteName: SITE.name,
      publishedTime: article.date,
      authors: [SITE.name],
      tags: article.tags,
      images,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: article.summary,
      images: article.image ? [article.image] : undefined,
    },
  };
}
