import type { Metadata } from 'next';
import SectionHeading from '@/components/ui/SectionHeading';
import { SITE } from '@/lib/constants';
import Gallery from './Gallery';

export const metadata: Metadata = {
  title: `Game Night — ${SITE.name}`,
  description:
    'A web application that allows users to create and manage their own game nights, including scheduling, invitations, and game selection.',
};

export default function GameNightPage() {
  const technologies = [
    'TypeScript',
    'Tailwind',
    'Twitch Extension',
    'Elixir',
    'Phoenix',
    'Ash Framework',
    'Flutter',
  ];

  return (
    <div className="mx-auto max-w-4xl px-6 py-20 md:py-28">
      <div className="mb-4">
        <p className="mb-2 font-mono text-sm text-accent-green">
          <span className="text-text-muted">$</span> cat projects/game-night
        </p>
        <div className="flex items-center justify-between gap-4">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Game Night
          </h1>
          <a
            href="https://gamenight.foundationsvtt.com"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded border border-border px-3 py-1.5 font-mono text-sm text-accent-green transition-colors hover:border-accent-green"
          >
            Check It Out →
          </a>
        </div>
        <p className="mt-4 text-lg text-text-muted">
          A web application that allows users to create and manage their own
          game nights, including scheduling, invitations, and game selection.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded border border-border px-2 py-0.5 font-mono text-xs text-accent-purple"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <section className="mt-16 space-y-4">
        <SectionHeading title="About This Project" />
        <p className="text-text-muted">
          Game Night is a scheduling tool built for tabletop Game Masters who
          run sessions for multiple groups and struggle to find dates that work
          for everyone. It replaces the usual sprawl of group chats and shared
          spreadsheets with a single workflow for collecting availability and
          locking in a month of sessions.
        </p>
        <p className="text-text-muted">
          GMs start by marking the dates they can run. From there, they invite
          their players to post their own availability against those windows. A
          master view brings every response together so the GM can see overlaps
          at a glance and finalize the month&apos;s schedule without chasing
          anyone down.
        </p>
        <p className="text-text-muted">
          Once sessions are confirmed, every player and GM gets a unified
          calendar showing the games they&apos;re running and the games
          they&apos;re playing in — across every table they&apos;re part of — so
          nothing slips through the cracks.
        </p>
      </section>

      <section className="mt-16">
        <SectionHeading title="Screenshots" />
        <Gallery
          items={[
            {
              src: '/projects/gamenight/campaign.png',
              alt: "Campaign detail view for Abomination Vaults, showing the current month's posted session and next month's scheduled session",
              width: 1042,
              height: 584,
              caption:
                "Per-campaign view with this month's confirmed session and next month on deck.",
            },
            {
              src: '/projects/gamenight/calendar.png',
              alt: 'Monthly calendar view aggregating sessions from every campaign onto a single page',
              width: 1153,
              height: 767,
              caption:
                'Every game day across every campaign, on a single page.',
            },
          ]}
        />
      </section>
    </div>
  );
}
