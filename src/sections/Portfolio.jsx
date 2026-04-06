import React, { useRef, useEffect } from 'react'
import { portfolioProjects } from '../data'
import { useScrollAnimation } from '../hooks/useIntersectionObserver'
import SectionHeader from '../components/ui/SectionHeader'
import Button from '../components/ui/Button'


import eventImg from '../assets/images/event.jpg'
import universityImg from '../assets/images/university.jpg'
import petImg from '../assets/images/pet.jpg'
import foodImg from '../assets/images/food.jpg'

const imgMap = { event: eventImg, university: universityImg, pet: petImg, food: foodImg }


function PortfolioCard({ proj, animRef }) {
  const img = imgMap[proj.imgKey]
  return (
    <div
      ref={animRef}
      className="portfolio-item rounded-[8px] overflow-hidden bg-white cursor-pointer"
      style={{ boxShadow: '0 10px 40px rgba(0,0,0,0.10)' }}
      onClick={() => window.open(proj.link, '_blank')}
    >
      <div className="overflow-hidden" style={{ background: proj.gradient }}>
        <img src={img} alt={proj.title} className="portfolio-img-fill" />
      </div>
      <div className="p-[22px]">
        <span className="block text-[11px] font-[700] text-[#f9004d] uppercase tracking-[1.5px] mb-2">
          {proj.cat}
        </span>
        <h5 className="text-[16px] font-[700] mb-2">
          <a
            href={proj.link}
            target="_blank"
            rel="noreferrer"
            className="text-[#0d0d0d] hover:text-[#f9004d] transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {proj.title}
          </a>
        </h5>
        <p className="text-[#777] text-[13px]">{proj.tech}</p>
      </div>
    </div>
  )
}


export default function Portfolio() {
  const headerRef = useScrollAnimation('fade-up')
  const itemRefs = useRef([])


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
    itemRefs.current.forEach((item, i) => {
      if (item) {
        item.classList.add('fade-up')
        item.dataset.delay = i * 100
        observer.observe(item)
      }
    })
    return () => observer.disconnect()
  }, [])


  

  return (
    <section id="portfolio" className="bg-white py-[100px]">
      <div className="max-w-[1200px] mx-auto px-5">
        <div ref={headerRef}>
          <SectionHeader
            eyebrow="Creative Portfolio"
            title="Solutions I've built"
            subtitle={
              <>
                Projects I've completed, demonstrating practical skills<br />
                and real-world problem solving
              </>
            }
          />
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[50px] lg:gap-[30px]">
          {portfolioProjects.map((proj, i) => (
            <PortfolioCard
              key={i}
              proj={proj}
              animRef={(el) => (itemRefs.current[i] = el)}
            />
          ))}
        </div>


        <div className="text-center mt-[40px]">
          <Button
            href="https://github.com/nasir-sarkar"
            target="_blank"
            rel="noreferrer"
            variant="outline"
          >
            View All Works <i className="fas fa-arrow-right ml-1" />
          </Button>
        </div>
      </div>
    </section>
  )
}
