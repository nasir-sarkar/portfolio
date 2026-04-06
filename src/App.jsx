import React, { useState, useEffect } from 'react'
import Preloader from './sections/Preloader'
import Sidebar from './sections/Sidebar'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Services from './sections/Services'
import Skills from './sections/Skills'
import Portfolio from './sections/Portfolio'
import Education from './sections/Education'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import BackToTop from './sections/BackToTop'

export default function App() {
  const [preloaderHidden, setPreloaderHidden] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)

 
  useEffect(() => {
    const handleLoad = () => setTimeout(() => setPreloaderHidden(true), 800)
    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
    }
    return () => window.removeEventListener('load', handleLoad)
  }, [])


  // Lock body scroll when sidebar is open
  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? 'hidden' : ''
  }, [sidebarOpen])


  
  return (
    <>
      <Preloader hidden={preloaderHidden} />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <Navbar onSidebarOpen={() => setSidebarOpen(true)} />

      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Portfolio />
        <Education />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  )
}
