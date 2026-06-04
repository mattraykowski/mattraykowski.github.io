interface ArticleBase {
  title: string;
  summary: string;
  date: string;
  tags: string[];
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
  },
];

export function sortedArticles(): Article[] {
  return [...articles].sort((a, b) => b.date.localeCompare(a.date));
}
