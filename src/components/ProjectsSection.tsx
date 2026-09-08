import { projects } from "@/lib/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <section id="proyectos" className="mx-auto w-full max-w-6xl px-6 py-24">
      <div className="mb-12 max-w-2xl">
        <p className="font-display text-xs tracking-[0.35em] text-accent uppercase">
          El cielo de proyectos
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold text-star sm:text-4xl">
          Proyectos
        </h2>
        <p className="mt-4 text-star-dim">
          Una muestra de las aplicaciones y páginas que fui desarrollando.
          Cada una acá es un modelo o vista general del proyecto completo.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
