import heroImage from "../assets/hero.jpg";
function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-90px)] overflow-hidden bg-black">
    <img
  src={heroImage}
  alt="Pop music live performance"
  className="absolute inset-0 h-full w-full object-cover object-[40%_center] md:object-center"
/>

<div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-90px)] max-w-7xl items-end px-6 pb-16 md:px-10 md:pb-24">
        <div className="max-w-4xl">
          <p className="mb-4 text-xs tracking-[0.3em] text-white/70">
            MUSIC · ARTISTS · CULTURE
          </p>

          <h1 className="text-5xl font-bold leading-[0.9] tracking-tight sm:text-6xl md:text-8xl lg:text-9xl">
            THE NEW ERA
            <br />
            OF POP
          </h1>

          <p className="mt-6 max-w-md text-sm text-white/70 md:text-base">
            Explore music, artists and culture.
          </p>

          <a
            href="#latest"
            className="mt-8 inline-block border border-white px-6 py-3 text-xs tracking-[0.2em] transition duration-300 hover:bg-white hover:text-black"
          >
            EXPLORE NOW
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero