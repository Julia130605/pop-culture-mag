function Footer() {
  return (
    <footer className="border-t border-white/15 bg-black px-6 py-12 text-white md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-[0.18em]">
            POP CULTURE MAG
          </h2>

          <p className="mt-2 font-serif text-xs italic tracking-[0.1em] text-white/50">
            Curated with love by Julia
          </p>
        </div>

        <div className="text-left md:text-right">
          <p className="text-xs tracking-[0.18em] text-white/50">
            MUSIC · ARTISTS · CULTURE
          </p>

          <p className="mt-3 text-xs text-white/35">
            © 2026 POP CULTURE MAG
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer