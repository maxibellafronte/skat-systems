const NAV_LINKS = [
  { href: "#proyectos", label: "Proyectos" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-space-950/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a
          href="#top"
          className="flex shrink-0 items-center gap-2 whitespace-nowrap font-display text-xs tracking-[0.15em] text-star sm:text-base sm:tracking-[0.2em]"
        >
          <span
            aria-hidden="true"
            className="twinkle inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent-strong star-dot"
          />
          SKAT SYSTEMS
        </a>

        <nav className="flex items-center gap-3 text-xs text-star-dim sm:gap-8 sm:text-sm">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-accent-strong"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
