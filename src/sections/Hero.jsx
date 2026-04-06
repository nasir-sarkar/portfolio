import React, { useRef, useState, useEffect } from 'react'
import homeBg from '../assets/images/home.jpg'
import { heroStats } from '../data'
import { useCounter } from '../hooks/useCounter'
import Button from '../components/ui/Button'
import { smoothScrollTo } from '../utils/scroll'


function StatCounter({ target, isDecimal, label, started }) {
  const value = useCounter(target, isDecimal, started)
  return (
    <div>
      <h3 className="text-[36px] font-[800] text-white">{value}</h3>
      <p className="text-[#ccc] text-[13px] uppercase tracking-wide">{label}</p>
    </div>
  )
}


export default function Hero() {
  const [countersStarted, setCountersStarted] = useState(false)
  const statsRef = useRef(null)

 
  useEffect(() => {
    const checkVisible = () => {
      if (!statsRef.current || countersStarted) return
      const rect = statsRef.current.getBoundingClientRect()
      if (rect.top < window.innerHeight) setCountersStarted(true)
    }
    window.addEventListener('scroll', checkVisible, { passive: true })
    checkVisible()
    return () => window.removeEventListener('scroll', checkVisible)
  }, [countersStarted])

  const handleReadMore = (e) => {
    e.preventDefault()
    smoothScrollTo('#about')
  }



  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center"
      style={{
        background: `url(${homeBg}) no-repeat center center / cover`,
        height: '100vh',
      }}
    >
      <div className="hero-text-block relative w-full max-w-[1200px] mx-auto px-10 pt-[120px] pb-[80px] flex items-center justify-between gap-10">
        <div className="flex-1 max-w-[800px]">
          <h1
            className="font-[800] text-white leading-[1.1] mb-4"
            style={{ fontSize: 'clamp(42px, 6vw, 72px)' }}
          >
            I'm Nasir
          </h1>
          <h1
            className="font-[800] text-[#f9004d] leading-[1.1] mb-4 whitespace-nowrap"
            style={{ fontSize: 'clamp(42px, 6vw, 72px)' }}
          >
            Web Developer
          </h1>
          <h4 className="text-white text-[18px] mb-[30px]">Fronted Based Developer</h4>

          <Button
            href="#about"
            onClick={handleReadMore}
            variant="filled"
            style={{ boxShadow: 'none' }}
            className="hover:bg-[#c41020] hover:border-[#c41020] hover:-translate-y-0.5"
          >
            Read More
          </Button>


          {/* Stats */}
          <div ref={statsRef} className="flex gap-10 mt-[50px] flex-wrap">
            {heroStats.map((stat, i) => (
              <StatCounter key={i} {...stat} started={countersStarted} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
