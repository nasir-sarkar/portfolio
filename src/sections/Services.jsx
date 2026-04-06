import React, { useRef } from 'react'
import { services } from '../data'
import { useScrollAnimation } from '../hooks/useIntersectionObserver'
import SectionHeader from '../components/ui/SectionHeader'
import ServiceCard from '../components/ui/ServiceCard'

export default function Services() {
  const headerRef = useScrollAnimation('fade-up', { threshold: 0.12 })
  const cardRefs = useRef([])


  React.useEffect(() => {
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
      { threshold: 0.12 }
    )
    cardRefs.current.forEach((card, i) => {
      if (card) {
        card.classList.add('fade-up')
        card.dataset.delay = i * 80
        observer.observe(card)
      }
    })
    return () => observer.disconnect()
  }, [])



  return (
    <section id="services" className="bg-[#f7f7f7] py-[100px]">
      <div className="max-w-[1200px] mx-auto px-5">
        <div ref={headerRef}>
          <SectionHeader
            eyebrow="Creative Service"
            title="Service I offer you"
            subtitle={
              <>
                Technologies and skills I bring to every project,<br />
                making best effort for quality results
              </>
            }
          />
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {services.map((svc, i) => (
            <div key={i} ref={(el) => (cardRefs.current[i] = el)}>
              <ServiceCard icon={svc.icon} title={svc.title} desc={svc.desc} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
