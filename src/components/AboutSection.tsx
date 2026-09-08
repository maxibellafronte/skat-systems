export default function AboutSection() {
  return (
    <section
      id="sobre-mi"
      className="mx-auto w-full max-w-6xl px-6 py-24"
    >
      <div className="grid gap-10 rounded-2xl border border-white/8 bg-space-900/50 p-8 sm:grid-cols-[auto_1fr] sm:p-12">
        <div
          aria-hidden="true"
          className="flex h-14 w-14 items-center justify-center rounded-full border border-accent/30 bg-space-800"
        >
          <span className="twinkle h-2.5 w-2.5 rounded-full bg-accent-strong star-dot" />
        </div>

        <div>
          <p className="font-display text-xs tracking-[0.35em] text-accent uppercase">
            Sobre mí
          </p>
          <p className="mt-4 max-w-2xl italic leading-relaxed text-star-faint">
            acá va una breve presentación: quién sos, qué te interesa
            desarrollar y qué tecnologías usás habitualmente
          </p>
        </div>
      </div>
    </section>
  );
}
