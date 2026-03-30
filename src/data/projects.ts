export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  pageUrl?: string;
}

export const projects: Project[] = [
  {
    title: 'Foundations',
    description:
      'A complete suite of tools for FoundryVTT game masters and streamers to creatively engage their audience and empower them to affect the game.',
    technologies: [
      'TypeScript',
      'Tailwind',
      'Twitch Extension',
      'Elixir',
      'Phoenix',
      'Ash Framework',
      'Flutter',
    ],
    pageUrl: '/projects/foundations',
  },
  {
    title: '7th Sea 2e for FoundryVTT',
    description:
      'An open-source tool that simplifies a common developer workflow, built with extensibility and developer experience in mind.',
    technologies: ['JavaScript', 'FoundryVTT API', 'Vite'],
    githubUrl: 'https://github.com/Detailing-the-Realm/svnsea2e',
  },
  {
    title: 'RyzomCore',
    description:
      'A real-time data processing pipeline designed for high throughput and reliability in production environments.',
    technologies: ['C++', 'PHP', 'Lua', 'MySQL'],
    githubUrl: 'https://github.com/ryzom/ryzomcore',
  },
  {
    title: 'OpenNMS',
    description:
      'A network management platform that provides comprehensive monitoring, performance management, and fault management capabilities.',
    technologies: ['Java', 'Spring', 'Hibernate', 'PostgreSQL'],
    githubUrl: 'https://github.com/OpenNMS/opennms',
  },
];
