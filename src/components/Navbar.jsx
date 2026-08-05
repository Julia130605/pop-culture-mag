import { useState } from "react";


function Navbar() {


  const [open, setOpen] = useState(false);

  const [activeItem, setActiveItem] = useState(null);



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





  const handleNavigate = (id,index)=>{


    // 触发当前菜单动画

    setActiveItem(index);



    // 等动画结束再跳转

    setTimeout(()=>{


      setOpen(false);



      document
      .getElementById(id)
      ?.scrollIntoView({

        behavior:"smooth",

      });


    },500);


  };





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






<div

className="
space-y-8
"

>



{

menuItems.map((item,index)=>(



<button


key={item.id}



onClick={()=>handleNavigate(item.id,index)}




style={{

animationDelay:`${index*0.1}s`

}}




className={

`

block

font-serif

text-5xl

tracking-wide

opacity-0

animate-item

transition-all

duration-500



${
activeItem===index

?

"scale-125 -translate-y-3 opacity-50"

:

""

}



`

}



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