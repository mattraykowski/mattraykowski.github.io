import type { ReactNode } from 'react';
import { Article } from '@/data/articles';

function formatDate(iso: string): string {
  const d = new Date(iso + 'T00:00:00Z');
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

export default function ArticleLayout({
  article,
  children,
}: {
  article: Article;
  children: ReactNode;
}) {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20 md:py-28">
      <p className="mb-2 font-mono text-sm text-accent-green">
        <span className="text-text-muted">$</span> cat articles/{article.slug}.md
      </p>
      <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
        {article.title}
      </h1>
      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-sm text-text-muted">
        <time dateTime={article.date}>{formatDate(article.date)}</time>
        <div className="flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="rounded border border-border px-2 py-0.5 text-xs text-accent-purple"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-12">{children}</div>
      <div className="mt-16 border-t border-border pt-6">
        <a
          href="/articles"
          className="font-mono text-sm text-highlight hover:text-highlight-hover"
        >
          ← back to all articles
        </a>
      </div>
    </article>
  );
}
