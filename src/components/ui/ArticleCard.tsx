import { Article } from '@/data/articles';

function formatDate(iso: string): string {
  const d = new Date(iso + 'T00:00:00Z');
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

export default function ArticleCard({ article }: { article: Article }) {
  const href = article.slug ? `/articles/${article.slug}` : article.externalUrl;
  const isExternal = Boolean(article.externalUrl);

  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className="group flex flex-col rounded-lg border border-border bg-surface-alt p-6 transition-all hover:border-highlight/50 hover:shadow-lg hover:shadow-highlight/5"
    >
      <div className="flex items-center gap-3 font-mono text-xs text-text-muted">
        <time dateTime={article.date}>{formatDate(article.date)}</time>
        {isExternal && (
          <span className="text-accent-green">external ↗</span>
        )}
      </div>
      <h3 className="mt-2 font-mono text-lg font-semibold text-text group-hover:text-highlight">
        {article.title}
      </h3>
      <p className="mt-2 flex-1 text-text-muted">{article.summary}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {article.tags.map((tag) => (
          <span
            key={tag}
            className="rounded border border-border px-2 py-0.5 font-mono text-xs text-accent-purple"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}
