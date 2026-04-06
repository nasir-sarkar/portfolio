import React, { useRef } from 'react'
import { skillsRow1, skillsRow2 } from '../data'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

function SkillTag({ name }) {
  return (
    <div className="bg-[#f9f9f9] border border-[#e0e0e0] rounded-[8px] px-[28px] py-[16px] shrink-0 cursor-default hover:bg-[rgba(232,25,44,0.08)] hover:border-[#f9004d] transition-all duration-300">
      <span className="text-[#333] text-[13px] font-[600] whitespace-nowrap">{name}</span>
    </div>
  )
}

function MarqueeRow({ skills, reverse = false }) {
  const doubled = [...skills, ...skills]
  return (
    <div className="overflow-hidden">
      <div className={`skills-marquee${reverse ? ' reverse' : ''}`}>
        {doubled.map((skill, i) => (
          <SkillTag key={i} name={skill} />
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  const leftRef = useRef(null)

  useIntersectionObserver([{ ref: leftRef, animClass: 'fade-left' }])

  
  return (
    <section id="skills" className="bg-white py-[100px]">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="flex items-center gap-[80px] flex-col lg:flex-row">


          {/* Left heading */}
          <div ref={leftRef} className="lg:w-[280px] shrink-0 w-full">
            <span className="block text-[13px] font-[600] text-[#f9004d] uppercase tracking-[2px] mb-[10px]">
              My Skills
            </span>
            <h2 className="text-[38px] font-[700] text-[#111] leading-[1.25]">
              I worked with<br />technologies
            </h2>
          </div>


          {/* Right: Marquee rows */}
          <div className="flex-1 overflow-hidden">
            <MarqueeRow skills={skillsRow1} />
            <div className="mt-5">
              <MarqueeRow skills={skillsRow2} reverse />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
