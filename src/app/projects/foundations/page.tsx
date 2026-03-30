import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Foundations — ${SITE.name}`,
  description:
    "A complete suite of tools for FoundryVTT game masters and streamers to creatively engage their audience and empower them to affect the game.",
};

export default function FoundationsPage() {
  const technologies = [
    "TypeScript",
    "Tailwind",
    "Twitch Extension",
    "Elixir",
    "Phoenix",
    "Ash Framework",
    "Flutter",
  ];

  return (
    <div className="mx-auto max-w-4xl px-6 py-20 md:py-28">
      <div className="mb-4">
        <p className="mb-2 font-mono text-sm text-accent-green">
          <span className="text-text-muted">$</span> cat projects/foundations
        </p>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          Foundations
        </h1>
        <p className="mt-4 text-lg text-text-muted">
          A complete suite of tools for FoundryVTT game masters and streamers to
          creatively engage their audience and empower them to affect the game.
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

      <section className="mt-16">
        <SectionHeading title="About This Project" />
        <p className="text-text-muted">Coming soon.</p>
      </section>
    </div>
  );
}
