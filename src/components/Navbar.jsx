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

    <>

      <header
      className="
      fixed top-0 left-0 w-full
      z-50
      bg-black
      text-white
      border-b
      border-white/10
      ">

        <nav
        className="
        px-8 py-6
        flex
        justify-between
        items-center
        ">


          <a
          href="#"
          className="
          text-xl
          tracking-[0.3em]
          "
          >
            POP CULTURE MAG
          </a>



          <button

          onClick={() => setOpen(true)}

          className="
          tracking-[0.3em]
          text-sm
          "
          >

            MENU

          </button>


        </nav>


      </header>



      {
      open && (

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
        "

        >



          <button

          onClick={() => setOpen(false)}

          className="
          absolute
          top-8
          right-8
          tracking-[0.3em]
          "

          >

            CLOSE

          </button>



          <div
          className="
          space-y-8
          "
          >



            <button

            onClick={()=>{
              setOpen(false);
              window.scrollTo({
                top:0,
                behavior:"smooth"
              });
            }}

            className="
            block
            text-5xl
            font-serif
            "
            >

              HOME

            </button>



            <button

            onClick={()=>handleNavigate("latest")}

            className="
            block
            text-5xl
            font-serif
            "
            >

              LATEST

            </button>




            <button

            onClick={()=>handleNavigate("artists")}

            className="
            block
            text-5xl
            font-serif
            "
            >

              ARTISTS

            </button>





            <button

            onClick={()=>handleNavigate("music")}

            className="
            block
            text-5xl
            font-serif
            "
            >

              MUSIC

            </button>





            <button

            onClick={()=>handleNavigate("videos")}

            className="
            block
            text-5xl
            font-serif
            "
            >

              VIDEOS

            </button>



          </div>


        </div>


      )
      }



    </>

  );

}


export default Navbar;