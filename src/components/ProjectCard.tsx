import type { Project } from "@/lib/projects";

const STATUS_LABEL: Record<Project["status"], string> = {
  live: "En línea",
  "en-desarrollo": "En desarrollo",
  archivado: "Archivado",
};

export default function ProjectCard({ project }: { project: Project }) {
  const isPlaceholderTitle = project.title.startsWith("acá va");
  const isPlaceholderDesc = project.description.startsWith("acá va");

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/8 bg-space-900/60 transition-colors hover:border-accent/40">
      <div className="relative flex aspect-video items-center justify-center overflow-hidden border-b border-white/8 bg-[radial-gradient(circle_at_30%_20%,_var(--color-space-800),_var(--color-space-950))]">
        {project.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.image}
            alt={`Captura de ${project.title}`}
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="font-display text-xs italic tracking-wide text-star-faint">
            acá va una captura del proyecto
          </span>
        )}
        <span
          aria-hidden="true"
          className="twinkle absolute right-4 top-4 h-1 w-1 rounded-full bg-accent-strong star-dot"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3
            className={`font-display text-lg text-star ${isPlaceholderTitle ? "italic text-star-faint" : ""}`}
          >
            {project.title}
          </h3>
          <span className="shrink-0 rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-star-dim">
            {STATUS_LABEL[project.status]}
          </span>
        </div>

        <p
          className={`text-sm leading-relaxed text-star-dim ${isPlaceholderDesc ? "italic text-star-faint" : ""}`}
        >
          {project.description}
        </p>

        <div className="mt-1 flex flex-wrap gap-2">
          {project.tags.map((tag) => {
            const isPlaceholderTag = tag.startsWith("acá va");
            return (
              <span
                key={tag}
                className={`rounded-full bg-space-800 px-2.5 py-1 text-[11px] text-star-dim ${isPlaceholderTag ? "italic text-star-faint" : ""}`}
              >
                {tag}
              </span>
            );
          })}
        </div>

        <div className="mt-auto flex gap-4 pt-3 text-sm">
          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-strong transition-opacity hover:opacity-80"
            >
              Ver demo →
            </a>
          ) : (
            <span className="italic text-star-faint">acá va el link a la demo</span>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-star-dim transition-colors hover:text-accent-strong"
            >
              Código
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
