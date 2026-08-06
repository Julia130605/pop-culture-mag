import { Link } from "react-router-dom";


import ariana from "../assets/artist1.jpg";
import tate from "../assets/artist2.jpg";
import olivia from "../assets/artist3.jpg";
import billie from "../assets/artist4.jpg";



function ArtistPage(){


const artists = [


{
name:"Ariana Grande",
category:"POP · R&B",
image:ariana,
slug:"ariana-grande"
},


{
name:"Tate McRae",
category:"POP · DANCE",
image:tate,
slug:"tate-mcrae"
},


{
name:"Olivia Rodrigo",
category:"POP · ALTERNATIVE",
image:olivia,
slug:"olivia-rodrigo"
},


{
name:"Billie Eilish",
category:"POP · ALTERNATIVE",
image:billie,
slug:"billie-eilish"
},


];




return (


<section

className="
bg-[#f5f3ed]
text-black
min-h-screen
px-6
py-24
"

>


<div

className="
max-w-7xl
mx-auto
"

>



{/* HEADER */}


<div

className="
mb-20
"

>


<p

className="
text-xs
tracking-[0.4em]
text-gray-500
mb-6
"

>

FEATURED VOICES

</p>



<h1

className="
font-serif
text-6xl
md:text-8xl
tracking-tight
"

>

Artists

</h1>



<p

className="
mt-8
max-w-xl
font-serif
text-xl
leading-relaxed
text-gray-600
"

>

The artists shaping today's pop culture.
Discover the voices, stories and moments
behind the music.

</p>



</div>







{/* ARTIST GRID */}


<div

className="
grid
grid-cols-1
md:grid-cols-2
lg:grid-cols-4
gap-10
"

>


{

artists.map((artist)=>(


<Link

key={artist.slug}

to={`/artists/${artist.slug}`}

>



<article

className="
group
"

>


<div

className="
overflow-hidden
"

>


<img

src={artist.image}

alt={artist.name}

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





<p

className="
text-[11px]
tracking-[0.35em]
text-gray-500
mt-6
"

>

{artist.category}

</p>




<h2

className="
font-serif
text-3xl
mt-3
"

>

{artist.name}

</h2>



</article>


</Link>


))

}



</div>






{/* FOOTER TEXT */}


<div

className="
mt-24
border-t
border-black/20
pt-12
"

>


<p

className="
font-serif
text-3xl
max-w-2xl
leading-relaxed
"

>

Discover the voices,
stories and moments
behind today's biggest artists.

</p>


</div>




</div>


</section>



)


}



export default ArtistPage;