import Footer from './components/Footer'
import VideoMoments from './components/VideoMoments'
import ArtistSpotlight from './components/ArtistSpotlight'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SocialFollow from "./components/SocialFollow";
import LatestNews from './components/LatestNews'
import MusicPicks from './components/MusicPicks'
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

</main>
    

      <Footer />
    </div>
  )
}



export default App