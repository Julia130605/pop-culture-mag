import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SocialFollow from './components/SocialFollow'
import LatestNews from './components/LatestNews'
import ArtistSpotlight from './components/ArtistSpotlight'
import MusicPicks from './components/MusicPicks'
import VideoMoments from './components/VideoMoments'


function App() {

return (

<div className="min-h-screen bg-black text-white">

<Navbar />

<main>

<Hero />

<SocialFollow />

<LatestNews />

<ArtistSpotlight />

<MusicPicks />

<VideoMoments />

</main>

</div>

)

}

export default App