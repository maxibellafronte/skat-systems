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

// Los campos sin dato confirmado deben mostrarse en cursiva (ver ProjectCard),
// nunca inventados ni vacíos. demoUrl/repoUrl quedan sin definir cuando la
// decisión es "no va a tener" (ej. proyectos con datos reales de terceros),
// no cuando el dato todavía falta — en ese caso el placeholder induciría a error.
export const projects: Project[] = [
  {
    id: "programacion-crossfit",
    title: "Programación de CrossFit",
    description:
      "Plataforma para un box de CrossFit: la coach programa la semana por bloques y cada atleta la consulta, carga sus resultados de WOD y lleva registro de sus marcas personales. Incluye aprobación manual de altas.",
    tags: ["React", "Vite", "Supabase", "Vercel"],
    status: "live",
    // Sin demoUrl/repoUrl a propósito: la app maneja datos reales de atletas.
    // image: falta agregar una captura tomada con cuenta de prueba (sin
    // nombres ni resultados reales de atletas).
  },
];
