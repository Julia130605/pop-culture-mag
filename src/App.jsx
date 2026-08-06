import { BrowserRouter, Routes, Route } from "react-router-dom";


import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./components/Hero";
import EditorNote from "./components/EditorNote";
import LatestNews from "./components/LatestNews";
import ArtistSpotlight from "./components/ArtistSpotlight";
import MusicPicks from "./components/MusicPicks";
import VideoMoments from "./components/VideoMoments";

import ArtistPage from "./components/ArtistPage";



function Home(){


return (

<>

<Hero />


<EditorNote />


<LatestNews />


<ArtistSpotlight />


<MusicPicks />


<VideoMoments />


<Footer />


</>


)

}





function App(){


return (

<BrowserRouter>


<Navbar />


<Routes>



{/* 首页 */}

<Route

path="/"

element={<Home />}

/>




{/* Artist 页面 */}

<Route

path="/artists"

element={<ArtistPage />}

/>



</Routes>



</BrowserRouter>


)

}



export default App;