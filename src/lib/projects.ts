export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  year?: number;
  image?: string;
  demoUrl?: string;
  repoUrl?: string;
  status: "live" | "en-desarrollo" | "archivado";
};

// Placeholder de ejemplo: reemplazá estos valores por tus proyectos reales.
// Los campos sin dato confirmado deben mostrarse en cursiva (ver ProjectCard),
// nunca inventados ni vacíos.
export const projects: Project[] = [
  {
    id: "proyecto-ejemplo",
    title: "acá va el nombre del proyecto",
    description: "acá va una descripción corta de qué hace este proyecto",
    tags: ["acá va el stack"],
    status: "en-desarrollo",
  },
];
