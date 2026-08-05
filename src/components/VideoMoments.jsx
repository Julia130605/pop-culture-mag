const videos = [
  {
    category: 'MUSIC VIDEO',
    title: 'The Visuals Shaping Pop Right Now',
    duration: '04:12',
    image:
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=85',
  },
  {
    category: 'LIVE PERFORMANCE',
    title: 'A Stage Moment Worth Rewatching',
    duration: '06:48',
    image:
      'https://images.unsplash.com/photo-1501612780327-45045538702b?auto=format&fit=crop&w=1200&q=85',
  },
  {
    category: 'VIRAL MOMENT',
    title: 'The Performance Everyone Is Talking About',
    duration: '02:35',
    image:
      'https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=1200&q=85',
  },
]

function VideoMoments() {
  return (
    <section
  id="videos"
  className="bg-black text-white py-20"
>
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex items-end justify-between border-b border-white/20 pb-5">
          <div>
            <p className="mb-2 text-xs tracking-[0.25em] text-white/50">
              PRESS PLAY
            </p>

            <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
              Video Moments
            </h2>
          </div>

          <a
            href="#"
            className="hidden text-xs tracking-[0.2em] text-white/70 transition hover:text-white sm:block"
          >
            WATCH ALL
          </a>
        </div>

        <div className="grid gap-10 md:grid-cols-3 md:gap-6">
          {videos.map((video) => (
            <article key={video.title} className="group cursor-pointer">
              <div className="relative aspect-video overflow-hidden bg-neutral-900">
                <img
                  src={video.image}
                  alt={video.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/20 transition duration-300 group-hover:bg-black/40" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white bg-black/20 text-sm backdrop-blur-sm transition duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-black">
                    ▶
                  </div>
                </div>

                <span className="absolute right-3 bottom-3 bg-black px-2 py-1 text-[10px] tracking-wider">
                  {video.duration}
                </span>
              </div>

              <p className="mt-5 text-[10px] tracking-[0.2em] text-white/50">
                {video.category}
              </p>

              <h3 className="mt-2 text-xl font-semibold leading-tight md:text-2xl">
                {video.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default VideoMoments