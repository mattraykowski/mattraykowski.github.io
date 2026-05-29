import type { Metadata } from 'next';
import SectionHeading from '@/components/ui/SectionHeading';
import ArticleCard from '@/components/ui/ArticleCard';
import { sortedArticles } from '@/data/articles';
import { SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Articles — ${SITE.name}`,
  description: 'Writing on engineering leadership, scaling teams, and the tools I build with.',
};

export default function ArticlesPage() {
  const articles = sortedArticles();

  return (
    <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <p className="mb-2 font-mono text-sm text-accent-green">
        <span className="text-text-muted">$</span> ls articles/
      </p>
      <SectionHeading title="Articles" />
      {articles.length === 0 ? (
        <p className="text-text-muted">Nothing here yet.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard
              key={article.slug ?? article.externalUrl}
              article={article}
            />
          ))}
        </div>
      )}
    </div>
  );
}
