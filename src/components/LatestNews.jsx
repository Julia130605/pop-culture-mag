import news1 from "../assets/news1.jpg";
import news2 from "../assets/news2.jpg";
import news3 from "../assets/news3.jpg";


function LatestNews() {

const newsItems = [
{
title:"Taylor Swift Enters A New Era",
category:"LIVE",
date:"JUL 2026",
image:news1
},
{
title:"Ariana Grande Returns To The Spotlight",
category:"NEWS",
date:"JUL 2026",
image:news2
},
{
title:"Olivia Rodrigo Defines A Generation",
category:"ARTIST",
date:"JUL 2026",
image:news3
}
]


return (

<section 
id="latest"
className="bg-[#f5f3ee] text-black py-24 px-6"
>


<div className="max-w-7xl mx-auto">


<div className="mb-14">

<p className="text-xs tracking-[0.4em] text-gray-500">
LATEST STORIES
</p>


<h2 className="text-5xl md:text-7xl font-serif mt-4">
What's happening now
</h2>

</div>



<div className="grid md:grid-cols-3 gap-8">


{/* 大新闻 */}

<article className="md:col-span-2 group">

<div className="overflow-hidden">

<img
src={newsItems[0].image}
className="
w-full
h-[520px]
object-cover
group-hover:scale-105
transition
duration-700
"
/>

</div>


<p className="text-xs tracking-[0.3em] mt-6 text-gray-500">
{newsItems[0].category}
&nbsp; • &nbsp;
{newsItems[0].date}
</p>


<h3 className="text-4xl font-serif mt-4">
{newsItems[0].title}
</h3>


</article>





{/* 两个小新闻 */}

<div className="space-y-10">


{
newsItems.slice(1).map((news)=>(
<article key={news.title}>


<img
src={news.image}
className="
w-full
h-56
object-cover
"
/>


<p className="text-xs tracking-[0.3em] mt-4 text-gray-500">
{news.category}
&nbsp; • &nbsp;
{news.date}
</p>


<h3 className="text-2xl font-serif mt-3">
{news.title}
</h3>


</article>
))
}


</div>


</div>


</div>


</section>

)

}


export default LatestNews;