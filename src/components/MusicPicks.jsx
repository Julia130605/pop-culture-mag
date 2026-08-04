const musicPicks = [
  {
    label: 'SONG OF THE WEEK',
    title: 'The Track We Cannot Stop Playing',
    description: 'One song defining this week in pop.',
    image:
      'https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?auto=format&fit=crop&w=1000&q=85',
  },
  {
    label: 'ALBUM RECOMMENDATION',
    title: 'A Pop Record Worth Hearing',
    description: 'Our essential album selection.',
    image:
      'https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?auto=format&fit=crop&w=1000&q=85',
  },
  {
    label: 'HIDDEN GEMS',
    title: 'Five Songs Under the Radar',
    description: 'Unexpected discoveries for your playlist.',
    image:
      'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=1000&q=85',
  },
]

function MusicPicks() {
  return (
    <section className="bg-[#f2f0eb] px-6 py-20 text-black md:px-10 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 border-b border-black/25 pb-5">
          <p className="mb-2 text-xs tracking-[0.25em] text-black/50">
            WHAT WE ARE LISTENING TO
          </p>

          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
            Music Picks
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {musicPicks.map((pick) => (
            <article
              key={pick.label}
              className="group relative min-h-[500px] cursor-pointer overflow-hidden bg-black"
            >
              <img
                src={pick.image}
                alt={pick.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-8">
                <p className="text-[10px] tracking-[0.22em] text-white/65">
                  {pick.label}
                </p>

                <h3 className="mt-3 text-2xl font-semibold leading-tight">
                  {pick.title}
                </h3>

                <p className="mt-3 text-sm text-white/60">
                  {pick.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MusicPicks