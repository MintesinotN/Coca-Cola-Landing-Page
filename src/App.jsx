import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sustainability from './components/Sustainability'
import Carousel from './components/Carousel'
import Jobs from './components/Jobs'
import PurposeDrivenHistory from './components/PurposeDrivenHistory'
import Brands from './components/Brands'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-coke-white">
      <Navbar />
      <Hero />
      <Sustainability />
      <Carousel />
      <Jobs />
      <PurposeDrivenHistory />
      <Brands />
      <Footer />
    </div>
  )
}

export default App