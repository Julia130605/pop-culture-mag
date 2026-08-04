function Navbar() {
  const menuItems = ['NEWS', 'ARTISTS', 'MUSIC', 'VIDEOS']

  return (
    <header className="border-b border-white/15 bg-black text-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <div>
          <a
            href="#"
            className="text-xl font-bold tracking-[0.18em] md:text-2xl"
          >
            POP CULTURE MAG
          </a>

          <p className="mt-1 font-serif text-[10px] italic tracking-[0.12em] text-white/55">
            Curated with love by Julia
          </p>
        </div>

        <ul className="hidden items-center gap-8 md:flex">
          {menuItems.map((item) => (
            <li key={item}>
              <a
                href="#"
                className="text-xs tracking-[0.2em] text-white/75 transition-colors duration-300 hover:text-white"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="text-xs tracking-[0.2em] md:hidden"
          aria-label="Open navigation menu"
        >
          MENU
        </button>
      </nav>
    </header>
  )
}

export default Navbar