import VideoMoments from './components/VideoMoments'
import ArtistSpotlight from './components/ArtistSpotlight'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LatestNews from './components/LatestNews'
import MusicPicks from './components/MusicPicks'
function App() {
  return (
    <div className="min-h-screen bg-black text-white">

      <Navbar />

      <main>

        <Hero />

        <LatestNews />

        <ArtistSpotlight />

        <MusicPicks />

        <VideoMoments />

      </main>

    </div>
  )
}

export default App