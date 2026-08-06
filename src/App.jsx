import Navbar from "./components/Navbar";

import Hero from "./components/Hero";

import EditorNote from "./components/EditorNote";

import SocialFollow from "./components/SocialFollow";

import LatestNews from "./components/LatestNews";

import MusicPicks from "./components/MusicPicks";

import ArtistSpotlight from "./components/ArtistSpotlight";

import VideoMoments from "./components/VideoMoments";

import Footer from "./components/Footer";



function Home(){


return (

<>


<Hero />


<EditorNote />


<SocialFollow />


<LatestNews />


<MusicPicks />


<ArtistSpotlight />


<VideoMoments />


<Footer />


</>

)


}





function App() {


return (

<>


<Navbar />


<Home />


</>

);


}



export default App;