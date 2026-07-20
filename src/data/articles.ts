interface ArticleBase {
  title: string;
  summary: string;
  date: string;
  tags: string[];
  /** Path (relative to /public) to the social-preview / header image. */
  image?: string;
}

interface HostedArticle extends ArticleBase {
  slug: string;
  externalUrl?: never;
}

interface ExternalArticle extends ArticleBase {
  externalUrl: string;
  slug?: never;
}

export type Article = HostedArticle | ExternalArticle;

export const articles: Article[] = [
  {
    title: 'AI Compounds the Cost of Inexperience',
    summary:
      'The pitch is that AI lets companies trim senior engineers. The reality is the opposite. AI compounds the cost of having fewer engineers, because the experience that prevents catastrophic decisions does not live in the model.',
    date: '2026-05-29',
    tags: [
      'AI',
      'SoftwareEngineering',
      'EngineeringLeadership',
      'SoftwareArchitecture',
    ],
    slug: 'ai-compounds-the-cost-of-inexperience',
    image:
      '/articles/ai-compounds-the-cost-of-inexperience/header-hell-gate-bridge.jpg',
  },
  {
    title: 'Getting a Grip on the Black Box',
    summary:
      "An AI agent is a black box you can't fully reproduce or control, and we point it at decisions that matter. Here is how I built confidence anyway, by taking a firm grip on the parts I can test: tools, structured output, and the model's own judgment.",
    date: '2026-06-05',
    tags: [
      'AI',
      'EngineeringLeadership',
      'SoftwareEngineering',
      'SpringAI',
      'Testing',
    ],
    slug: 'getting-a-grip-on-the-black-box',
    image:
      '/articles/getting-a-grip-on-the-black-box/header-engine-cutaway.jpg',
  },
  {
    title: 'The Comfortable Lie About Agent Security',
    summary:
      "Securing an AI agent on a platform built for trusted human admins: why the model must never be the security boundary, where privileged integrations break that promise, and how Meta's Rule of Two decides when the agent has to stop and ask a human.",
    date: '2026-07-08',
    tags: ['AI', 'Security', 'SpringAI', 'Java', 'MCP'],
    slug: 'agent-security-lies',
    image: '/articles/agent-security-lies/header-somme-trench-map-og.jpg',
  },
  {
    title: "Elixir - Why It's My Side Project Language",
    summary:
      "Why Elixir, Phoenix, and Ash have become my default side-project stack. A journey from a comfortable Java and React setup to a single consolidated Elixir stack, and what Ash's \"Declare Once, Derive the Rest\" actually buys you.",
    date: '2026-07-20',
    tags: ['Elixir', 'Phoenix', 'Ash', 'SideProjects', 'WebDevelopment'],
    slug: 'elixir-why-its-my-side-project-language',
    image:
      '/articles/elixir-why-its-my-side-project-language/header-the-alchemist-og.jpg',
  },
];

export function sortedArticles(): Article[] {
  return [...articles].sort((a, b) => b.date.localeCompare(a.date));
}
