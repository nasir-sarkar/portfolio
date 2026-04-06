import React, { useRef, useEffect } from 'react'
import { educationCards, certCards } from '../data'
import { useScrollAnimation } from '../hooks/useIntersectionObserver'
import SectionHeader from '../components/ui/SectionHeader'
import EduCard from '../components/ui/EduCard'


import ciscoImg from '../assets/images/cisco.png'
import freecodeImg from '../assets/images/freecodecamp.png'

const certImgMap = { cisco: ciscoImg, freecodecamp: freecodeImg }


export default function Education() {
  const headerRef = useScrollAnimation('fade-up')
  const cardRefs = useRef([])


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = parseInt(entry.target.dataset.delay || '0', 10)
            setTimeout(() => entry.target.classList.add('visible'), delay)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )


    cardRefs.current.forEach((card, i) => {
      if (card) {
        card.classList.add('fade-up')
        card.dataset.delay = i * 100
        observer.observe(card)
      }
    })

    return () => observer.disconnect()
  }, [])

  let idx = 0



  return (
    <section id="education" className="bg-[#f7f7f7] py-[100px]">
      <div className="max-w-[1200px] mx-auto px-5">
        

        {/* Header */}
        <div ref={headerRef}>
          <SectionHeader
            eyebrow="Academic Journey"
            title="Education & Achievements"
            subtitle={
              <>
                My academic background that built the foundation<br />
                for my technical expertise
              </>
            }
          />
        </div>


        {/* Education: 2-column */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] mb-[30px] auto-rows-fr">
          {educationCards.map((card, i) => (
            <div
              key={i}
              className="h-full"
              ref={(el) => (cardRefs.current[idx++] = el)}
            >
              <EduCard card={card} hasImg={false} />
            </div>
          ))}
        </div>


        {/* Certifications: 3-column */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] auto-rows-fr">
          {certCards.map((card, i) => (
            <div
              key={i}
              className="h-full"
              ref={(el) => (cardRefs.current[idx++] = el)}
            >
              <EduCard
                card={card}
                hasImg
                img={certImgMap[card.imgKey]}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}