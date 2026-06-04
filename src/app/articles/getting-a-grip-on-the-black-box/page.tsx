import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ArticleLayout from '@/components/layout/ArticleLayout';
import { articles } from '@/data/articles';
import { SITE } from '@/lib/constants';
import Content from './content.mdx';

const slug = 'getting-a-grip-on-the-black-box';
const article = articles.find((a) => a.slug === slug);

export const metadata: Metadata = article
  ? {
      title: `${article.title} — ${SITE.name}`,
      description: article.summary,
    }
  : {};

export default function Page() {
  if (!article) notFound();

  return (
    <ArticleLayout article={article}>
      <Content />
    </ArticleLayout>
  );
}
