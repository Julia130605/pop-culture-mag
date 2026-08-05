import { useState } from "react";

function Navbar() {

  const [open, setOpen] = useState(false);


  const handleNavigate = (id) => {

    setOpen(false);

    setTimeout(() => {

      document
        .getElementById(id)
        ?.scrollIntoView({
          behavior: "smooth",
        });

    }, 100);

  };


  return (

    <header className="border-b border-white/10 bg-black text-white">

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">


        {/* Logo */}

        <div>

          <a
            href="#home"
            className="
            text-xl
            font-bold
            tracking-[0.18em]
            "
          >

            POP CULTURE MAG

          </a>


          <p className="
          mt-1
          font-serif
          text-[10px]
          italic
          text-gray-400
          ">

            Curated with love by Julia

          </p>

        </div>



        {/* MENU BUTTON */}

        <button

          onClick={() => setOpen(true)}

          className="
          text-sm
          tracking-[0.3em]
          "

        >

          MENU

        </button>


      </nav>




      {/* FULL SCREEN MENU */}

      {open && (

        <div

          className="
          fixed
          inset-0
          z-[100]
          bg-black
          text-white
          flex
          flex-col
          justify-center
          px-12
          animate-fade-in
          "

        >


          {/* CLOSE */}

          <button

            onClick={() => setOpen(false)}

            className="
            absolute
            top-8
            right-8
            text-sm
            tracking-[0.3em]
            "

          >

            CLOSE

          </button>



          {/* MENU ITEMS */}

          <button

            onClick={() => handleNavigate("home")}

            className="
            block
            text-5xl
            font-serif
            mb-8
            transition-all
            duration-500
            hover:tracking-[0.15em]
            "

          >

            HOME

          </button>



          <button

            onClick={() => handleNavigate("latest")}

            className="
            block
            text-5xl
            font-serif
            mb-8
            transition-all
            duration-500
            hover:tracking-[0.15em]
            "

          >

            LATEST

          </button>



          <button

            onClick={() => handleNavigate("artists")}

            className="
            block
            text-5xl
            font-serif
            mb-8
            transition-all
            duration-500
            hover:tracking-[0.15em]
            "

          >

            ARTISTS

          </button>



          <button

            onClick={() => handleNavigate("music")}

            className="
            block
            text-5xl
            font-serif
            mb-8
            transition-all
            duration-500
            hover:tracking-[0.15em]
            "

          >

            MUSIC

          </button>



          <button

            onClick={() => handleNavigate("videos")}

            className="
            block
            text-5xl
            font-serif
            transition-all
            duration-500
            hover:tracking-[0.15em]
            "

          >

            VIDEOS

          </button>



        </div>

      )}



    </header>

  );

}


export default Navbar;