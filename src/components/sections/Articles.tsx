import SectionHeading from '@/components/ui/SectionHeading';
import ArticleCard from '@/components/ui/ArticleCard';
import { sortedArticles } from '@/data/articles';

export default function Articles() {
  const recent = sortedArticles().slice(0, 3);
  if (recent.length === 0) return null;

  return (
    <section id="articles" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title="Articles" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recent.map((article) => (
            <ArticleCard
              key={article.slug ?? article.externalUrl}
              article={article}
            />
          ))}
        </div>
        <div className="mt-8">
          <a
            href="/articles"
            className="font-mono text-sm text-highlight hover:text-highlight-hover"
          >
            see all articles →
          </a>
        </div>
      </div>
    </section>
  );
}
