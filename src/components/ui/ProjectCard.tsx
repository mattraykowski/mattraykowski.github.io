import { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col rounded-lg border border-border bg-surface-alt p-6 transition-all hover:border-highlight/50 hover:shadow-lg hover:shadow-highlight/5">
      <h3 className="font-mono text-lg font-semibold text-text">
        {project.title}
      </h3>
      <p className="mt-2 flex-1 text-text-muted">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded border border-border px-2 py-0.5 font-mono text-xs text-accent-purple"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-4 flex gap-4">
        {project.pageUrl && (
          <a
            href={project.pageUrl}
            className="font-mono text-sm text-highlight hover:text-highlight-hover"
          >
            details
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-highlight hover:text-highlight-hover"
          >
            github
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-highlight hover:text-highlight-hover"
          >
            live
          </a>
        )}
      </div>
    </div>
  );
}
