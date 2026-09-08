export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contacto"
      className="mt-auto border-t border-white/5 bg-space-950/60"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-14 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-display text-sm tracking-[0.2em] text-star">
            SKAT SYSTEMS
          </p>
          <p className="mt-3 max-w-sm italic text-sm text-star-faint">
            acá va un texto de contacto: mail, LinkedIn o GitHub para que te
            puedan escribir
          </p>
        </div>

        <div className="flex flex-col gap-2 text-sm text-star-dim sm:items-end">
          <span className="italic text-star-faint">acá van tus redes o links</span>
          <span className="text-xs text-star-faint">
            © {year} Skat Systems · δ Aquarii
          </span>
        </div>
      </div>
    </footer>
  );
}
