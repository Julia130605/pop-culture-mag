import news1 from "../assets/news1.jpg";
import news2 from "../assets/news2.jpg";
import news3 from "../assets/news3.jpg";


function LatestNews() {


  const newsItems = [

    {
      title:
        "Ariana Grande Unveils petal, A Delicate Return to Her Most Personal Sound",
      category: "MUSIC",
      date: "AUG 2026",
      image: news1,
    },


    {
      title:
        "Tate McRae Reveals The Visual World Behind Her Latest Pop Chapter",
      category: "ARTIST",
      date: "AUG 2026",
      image: news2,
    },


    {
      title:
        "Olivia Rodrigo Brings Her Latest Songs To Life Under The Spotlight",
      category: "LIVE",
      date: "AUG 2026",
      image: news3,
    },

  ];



  return (

    <section
      id="latest"
      className="
      bg-[#f5f3ee]
      text-black
      py-24
      px-6
      "
    >


      <div
      className="
      max-w-7xl
      mx-auto
      "
      >



        {/* 标题 */}

        <div className="mb-14">


          <p
          className="
          text-xs
          tracking-[0.4em]
          text-gray-500
          "
          >
            LATEST STORIES
          </p>



          <h2
          className="
          text-4xl
          md:text-6xl
          font-serif
          mt-5
          tracking-tight
          "
          >
            What's happening now
          </h2>


        </div>





        {/* 三张卡片 */}

        <div
        className="
        grid
        md:grid-cols-3
        gap-8
        "
        >


        {
          newsItems.map((news)=>(


            <article
            key={news.title}
            className="group"
            >



              {/* 图片 */}

              <div
              className="
              overflow-hidden
              "
              >


                <img

                src={news.image}

                alt={news.title}

                className="
                w-full
                aspect-[4/5]
                object-cover
                group-hover:scale-105
                transition
                duration-700
                "

                />


              </div>





              {/* 分类 */}

              <p
              className="
              text-[11px]
              tracking-[0.35em]
              text-gray-500
              mt-6
              "
              >

                {news.category}

                &nbsp; • &nbsp;

                {news.date}

              </p>






              {/* 标题 */}

              <h3
              className="
              text-xl
              md:text-2xl
              font-serif
              leading-relaxed
              mt-4
              "
              >

                {news.title}

              </h3>




            </article>


          ))
        }


        </div>


      </div>


    </section>

  );

}


export default LatestNews;