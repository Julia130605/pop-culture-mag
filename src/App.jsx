import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Hero from "./components/Hero";
import EditorNote from "./components/EditorNote";
import SocialFollow from "./components/SocialFollow";
import LatestNews from "./components/LatestNews";
import MusicPicks from "./components/MusicPicks";
import ArtistSpotlight from "./components/ArtistSpotlight";
import VideoMoments from "./components/VideoMoments";
import Footer from "./components/Footer";


// 首页
function Home() {

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

  );

}


// Artist 页面（先占位）
function Artists(){

  return (

    <div className="min-h-screen bg-white">

      <h1 className="text-6xl font-serif p-20">
        Artists
      </h1>

    </div>

  )

}



function App(){

return (

<BrowserRouter>


<Navbar />


<Routes>


<Route 
path="/" 
element={<Home />}
/>


<Route 
path="/artists" 
element={<Artists />}
/>


</Routes>


</BrowserRouter>


)

}



export default App;