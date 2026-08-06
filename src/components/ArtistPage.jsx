import { Link } from "react-router-dom";


import ariana from "../assets/artist1.jpg";
import tate from "../assets/artist2.jpg";
import olivia from "../assets/artist3.jpg";
import billie from "../assets/artist4.jpg";



function ArtistPage(){


const artists=[

{
name:"Ariana Grande",
image:ariana,
slug:"ariana-grande"
},


{
name:"Tate McRae",
image:tate,
slug:"tate-mcrae"
},


{
name:"Olivia Rodrigo",
image:olivia,
slug:"olivia-rodrigo"
},


{
name:"Billie Eilish",
image:billie,
slug:"billie-eilish"
}

];



return(


<section
id="artists"
className="
bg-[#f5f3ed]
px-8
py-24
"
>


<div
className="
max-w-7xl
mx-auto
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
text-6xl
font-serif
mb-16
"
>

Artists

</h1>




<div
className="
grid
grid-cols-1
md:grid-cols-4
gap-8
"
>


{

artists.map((artist)=>(


<Link

to={`/artists/${artist.slug}`}

key={artist.slug}

>



<div>


<img

src={artist.image}

className="
aspect-[4/5]
object-cover
hover:scale-105
transition
duration-500
"

/>



<h2
className="
mt-5
text-2xl
font-serif
"
>

{artist.name}

</h2>



</div>


</Link>


))


}



</div>


</div>


</section>


)

}


export default ArtistPage;