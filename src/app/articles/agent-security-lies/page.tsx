import { notFound } from 'next/navigation';
import ArticleLayout from '@/components/layout/ArticleLayout';
import { articles } from '@/data/articles';
import { articleMetadata } from '@/lib/metadata';
import Content from './content.mdx';

const slug = 'agent-security-lies';
const article = articles.find((a) => a.slug === slug);

export const metadata = articleMetadata(slug);

export default function Page() {
  if (!article) notFound();

  return (
    <ArticleLayout article={article}>
      <Content />
    </ArticleLayout>
  );
}
