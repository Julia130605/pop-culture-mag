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

    },100);

  };


  const menuItems = [
    {
      name:"HOME",
      id:"home",
    },
    {
      name:"LATEST",
      id:"latest",
    },
    {
      name:"ARTISTS",
      id:"artists",
    },
    {
      name:"MUSIC",
      id:"music",
    },
    {
      name:"VIDEOS",
      id:"videos",
    },
  ];



  return (

<header
className="
border-b
border-white/15
bg-black
text-white
"
>


<nav
className="
mx-auto
flex
max-w-7xl
items-center
justify-between
px-8
py-6
"
>


{/* LOGO */}

<div>

<a
href="#"
className="
text-xl
font-bold
tracking-[0.18em]
"
>
POP CULTURE MAG
</a>


<p
className="
mt-1
font-serif
text-[10px]
italic
text-gray-400
"
>
Curated with love by Julia
</p>


</div>



{/* MENU BUTTON */}

<button

onClick={()=>setOpen(true)}

className="
tracking-[0.3em]
text-sm
hover:opacity-70
transition
"

>

MENU

</button>



</nav>





{/* FULL SCREEN MENU */}


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
animate-menu
"

>


{/* CLOSE */}

<button

onClick={()=>setOpen(false)}

className="
absolute
top-8
right-8
tracking-[0.3em]
text-sm
"

>

CLOSE

</button>





{/* ITEMS */}


<div
className="
space-y-8
"
>


{
menuItems.map((item,index)=>(


<button

key={item.id}

onClick={()=>handleNavigate(item.id)}

style={{
animationDelay:`${index*0.1}s`
}}

className="
block
font-serif
text-5xl
tracking-wide
opacity-0
animate-item
hover:opacity-60
transition
"

>

{item.name}

</button>


))

}


</div>



</div>


)

}


</header>


  );

}


export default Navbar;