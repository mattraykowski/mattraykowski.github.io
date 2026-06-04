import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="mt-12 mb-4 text-2xl font-bold tracking-tight md:text-3xl">
        <span className="font-mono text-accent-green">{'// '}</span>
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-8 mb-3 font-mono text-lg font-semibold text-text">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="my-4 text-text-muted leading-relaxed">{children}</p>
    ),
    a: ({ children, href }) => (
      <a
        href={href}
        className="text-highlight underline underline-offset-4 hover:text-highlight-hover"
        target={href?.startsWith('http') ? '_blank' : undefined}
        rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    ),
    ul: ({ children }) => (
      <ul className="my-4 list-disc space-y-2 pl-6 text-text-muted">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="my-4 list-decimal space-y-2 pl-6 text-text-muted">
        {children}
      </ol>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-6 border-l-2 border-highlight pl-4 text-text-muted italic">
        {children}
      </blockquote>
    ),
    code: ({ children, ...props }) => {
      // rehype-pretty-code adds data-language to highlighted block code;
      // let those pass through untouched so Shiki's token styles apply.
      if ('data-language' in props) {
        return <code {...props}>{children}</code>;
      }
      return (
        <code className="rounded border border-border bg-surface-alt px-1.5 py-0.5 font-mono text-sm text-accent-purple">
          {children}
        </code>
      );
    },
    pre: ({ children, ...props }) => (
      <pre
        {...props}
        className="my-6 overflow-x-auto rounded border border-border bg-surface-alt p-4 font-mono text-sm"
      >
        {children}
      </pre>
    ),
    hr: () => <hr className="my-8 border-border" />,
    ...components,
  };
}
