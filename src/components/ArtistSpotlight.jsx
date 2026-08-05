import artist1 from "../assets/artist1.jpg";
import artist2 from "../assets/artist2.jpg";
import artist3 from "../assets/artist3.jpg";
import artist4 from "../assets/artist4.jpg";


const artists = [
  {
    name: "Ariana Grande",
    description:
      "A voice defining a new generation of pop.",
    image: artist1,
  },
  {
    name: "Taylor Swift",
    description:
      "Transforming stories into cultural moments.",
    image: artist2,
  },
  {
    name: "Billie Eilish",
    description:
      "Redefining the sound and image of modern music.",
    image: artist3,
  },
  {
    name: "Dua Lipa",
    description:
      "Bringing glamour and movement back to pop.",
    image: artist4,
  },
];


function ArtistSpotlight() {
  return (
    <section 
  id="artists"
  className="bg-black text-white py-20"
>

      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-14">

          <p className="text-xs tracking-[0.4em] text-gray-400 mb-4">
            PEOPLE TO WATCH
          </p>

          <h2 className="text-5xl md:text-7xl font-serif tracking-tight">
            Artist Spotlight
          </h2>

        </div>


        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-8
          "
        >

          {artists.map((artist) => (

            <article
              key={artist.name}
              className="group"
            >

              <div
                className="
                  aspect-[3/4]
                  overflow-hidden
                  mb-6
                "
              >

                <img
                  src={artist.image}
                  alt={artist.name}
                  className="
                    w-full
                    h-full
                    object-cover
                    grayscale
                    transition
                    duration-700
                    group-hover:scale-105
                    group-hover:grayscale-0
                  "
                />

              </div>


              <h3
                className="
                  text-2xl
                  font-serif
                  mb-3
                "
              >
                {artist.name}
              </h3>


              <p
                className="
                  text-sm
                  text-gray-400
                  leading-relaxed
                  tracking-wide
                "
              >
                {artist.description}
              </p>


            </article>

          ))}

        </div>

      </div>

    </section>
  );
}


export default ArtistSpotlight;