import heroImage from "../assets/hero.jpg";


function Hero() {


  return (


<section

id="home"

className="
relative
min-h-[calc(100vh-90px)]
overflow-hidden
"


>


{/* Background Image */}


<img

src={heroImage}

alt="Pop culture live performance"

className="
absolute
inset-0
h-full
w-full
object-cover
"

/>





{/* Dark Overlay */}


<div

className="
absolute
inset-0
bg-black/70
"

/>






{/* Content */}



<div

className="
relative
z-10
mx-auto
flex
min-h-[calc(100vh-90px)]
max-w-7xl
items-center
px-8

"

>



<div

className="
max-w-4xl
"

>




<p

className="
mb-6
text-xs
tracking-[0.45em]
text-white/70
"

>

MUSIC · ARTISTS · CULTURE

</p>







<h1

className="
font-serif
text-6xl
leading-[0.9]
tracking-tight
text-white

md:text-8xl

"

>

THE NEW

<br/>

ERA

<br/>

POP


</h1>







<p

className="
mt-10
max-w-xl
text-lg
tracking-wide
text-white/80

"

>

Explore music, artists and culture.

</p>







<button


className="
mt-12

border
border-white/70

px-10
py-4

text-sm
tracking-[0.35em]

text-white

transition
duration-500

hover:bg-white
hover:text-black

"

>


EXPLORE


</button>






</div>




</div>




</section>



  );


}


export default Hero;