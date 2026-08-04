const newsItems = [
  {
    title: "Ariana Grande's New Era",
    category: 'ARTISTS',
    date: 'AUGUST 04, 2026',
    image:
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1000&q=85',
  },
  {
    title: 'Dua Lipa Brings Disco Energy Back',
    category: 'MUSIC',
    date: 'AUGUST 02, 2026',
    image:
      'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1000&q=85',
  },
  {
    title: "Olivia Rodrigo's Latest Stage Moment",
    category: 'LIVE',
    date: 'JULY 30, 2026',
    image:
      'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1000&q=85',
  },
]

function LatestNews() {
  return (
    <section id="latest" className="bg-[#f2f0eb] px-6 py-20 text-black md:px-10 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex items-end justify-between border-b border-black/25 pb-5">
          <div>
            <p className="mb-2 text-xs tracking-[0.25em] text-black/50">
              THE LATEST
            </p>

            <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
              Latest News
            </h2>
          </div>

          <a
            href="#"
            className="hidden text-xs tracking-[0.2em] transition-opacity hover:opacity-50 sm:block"
          >
            VIEW ALL
          </a>
        </div>

        <div className="grid gap-10 md:grid-cols-3 md:gap-6">
          {newsItems.map((news) => (
            <article key={news.title} className="group cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden bg-neutral-300">
                <img
                  src={news.image}
                  alt={news.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="mt-5 flex items-center gap-3 text-[10px] tracking-[0.18em] text-black/50">
                <span>{news.category}</span>
                <span>—</span>
                <time>{news.date}</time>
              </div>

              <h3 className="mt-3 text-2xl font-semibold leading-tight transition-opacity duration-300 group-hover:opacity-55">
                {news.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LatestNews