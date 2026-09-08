import Constellation from "./Constellation";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-[92vh] w-full max-w-6xl flex-col items-center gap-10 px-6 pt-20 pb-16 sm:flex-row sm:items-center sm:justify-between sm:pt-16"
    >
      <div className="drift-in max-w-xl text-center sm:text-left">
        <p className="mb-4 font-display text-xs tracking-[0.35em] text-accent">
          δ AQUARII · PORTFOLIO PERSONAL
        </p>
        <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-star text-glow sm:text-6xl">
          Skat Systems
        </h1>
        <p className="mt-5 text-base leading-relaxed text-star-dim sm:text-lg">
          Como Skat brilla en la constelación de Acuario, cada proyecto acá
          es un punto de luz propio: aplicaciones y páginas que desarrollé
          por mi cuenta, mostradas en su versión más simple.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3 sm:justify-start">
          <a
            href="#proyectos"
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-space-950 transition-transform hover:scale-105"
          >
            Ver proyectos
          </a>
          <a
            href="#contacto"
            className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-star transition-colors hover:border-accent/60 hover:text-accent-strong"
          >
            Contacto
          </a>
        </div>
      </div>

      <div className="w-full max-w-xs sm:max-w-sm">
        <Constellation className="w-full drop-shadow-[0_0_25px_rgba(125,216,255,0.08)]" />
      </div>
    </section>
  );
}
