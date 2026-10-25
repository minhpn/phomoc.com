import { useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Highlights from './components/Highlights.jsx'
import About from './components/About.jsx'
import Signature from './components/Signature.jsx'
import MenuSection from './components/MenuSection.jsx'
import PromoBanner from './components/PromoBanner.jsx'
import Gallery from './components/Gallery.jsx'
import Reviews from './components/Reviews.jsx'
import Delivery from './components/Delivery.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import FloatingBar from './components/FloatingBar.jsx'
import MenuBoardFab from './components/MenuBoardFab.jsx'
import MenuBoard from './components/MenuBoard.jsx'

export default function App() {
  const [menuBoardOpen, setMenuBoardOpen] = useState(false)

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Highlights />
        <About />
        <Signature />
        <MenuSection />
        <PromoBanner />
        <Gallery />
        <Reviews />
        <Delivery />
        <Contact />
      </main>
      <Footer />
      <FloatingBar />
      <MenuBoardFab onClick={() => setMenuBoardOpen(true)} />
      <MenuBoard open={menuBoardOpen} onClose={() => setMenuBoardOpen(false)} />
    </>
  )
}
