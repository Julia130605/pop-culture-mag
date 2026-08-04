const artists = [
  {
    name: 'Ariana Grande',
    description: 'A voice defining a new generation of pop.',
    image:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85',
  },
  {
    name: 'Taylor Swift',
    description: 'Transforming stories into cultural moments.',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=85',
  },
  {
    name: 'Billie Eilish',
    description: 'Redefining the sound and image of modern music.',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=85',
  },
  {
    name: 'Dua Lipa',
    description: 'Bringing glamour and movement back to pop.',
    image:
      'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=900&q=85',
  },
]

function ArtistSpotlight() {
  return (
    <section className="bg-black px-6 py-20 text-white md:px-10 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 border-b border-white/20 pb-5">
          <p className="mb-2 text-xs tracking-[0.25em] text-white/50">
            PEOPLE TO WATCH
          </p>

          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
            Artist Spotlight
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4 lg:gap-6">
          {artists.map((artist) => (
            <article key={artist.name} className="group cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden bg-neutral-900">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />
              </div>

              <h3 className="mt-4 text-lg font-semibold md:text-2xl">
                {artist.name}
              </h3>

              <p className="mt-2 max-w-xs text-xs leading-relaxed text-white/55 md:text-sm">
                {artist.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ArtistSpotlight