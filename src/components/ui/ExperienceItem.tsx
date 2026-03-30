import { Experience } from "@/data/experience";

export default function ExperienceItem({
  experience,
}: {
  experience: Experience;
}) {
  return (
    <div className="relative border-l-2 border-border pb-10 pl-8 last:pb-0">
      <div className="absolute -left-[9px] top-0 size-4 rounded-full border-2 border-highlight bg-surface" />
      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold">{experience.role}</h3>
          <p className="text-text-muted">{experience.company}</p>
        </div>
        <span className="font-mono text-sm text-text-muted">
          {experience.period}
        </span>
      </div>
      <ul className="mt-3 space-y-2">
        {experience.description.map((item, i) => (
          <li key={i} className="text-text-muted">
            {item}
          </li>
        ))}
      </ul>
      {experience.technologies && (
        <div className="mt-3 flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded border border-border px-2 py-0.5 font-mono text-xs text-accent-purple"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
