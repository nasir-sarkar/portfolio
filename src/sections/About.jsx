import React, { useRef } from 'react'
import aboutImg from '../assets/images/about.jpg'
import { aboutInfoLeft, aboutInfoRight } from '../data'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import InfoList from '../components/ui/InfoList'
import Button from '../components/ui/Button'


export default function About() {
  const imgRef = useRef(null)
  const infoRef = useRef(null)


  useIntersectionObserver([
    { ref: imgRef, animClass: 'fade-left' },
    { ref: infoRef, animClass: 'fade-right' },
  ])


  return (
    <section id="about" className="bg-white py-[100px]">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="flex items-center gap-[80px] flex-col lg:flex-row">


          {/* Image Column */}
          <div ref={imgRef} className="lg:w-[400px] shrink-0 w-full max-w-[400px] mx-auto lg:mx-0">
            <div className="relative pb-[30px] pl-[30px]">
              <img
                src={aboutImg}
                alt="Nasir Sarkar"
                className="w-full rounded-[10px] relative z-10"
                style={{
                  height: '460px',
                  objectFit: 'cover',
                  objectPosition: 'top center',
                  boxShadow: '0 16px 48px rgba(0,0,0,0.12)',
                }}
              />


              {/* Experience Badge */}
              <div
                className="absolute z-10 text-center text-white rounded-[20px] px-[26px] py-[22px]"
                style={{
                  bottom: '200px',
                  left: '-30px',
                  background: '#111',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
                  transform: 'rotate(-10deg)',
                }}
              >
                <span className="block text-[36px] font-[800] leading-none">3+</span>
                <span className="block text-[13px] font-[600] leading-[1.3] capitalize tracking-[0.5px]">
                  Years of<br />Experience
                </span>
              </div>
            </div>
          </div>


          {/* Info Column */}
          <div ref={infoRef} className="flex-1">
            <span className="block text-[13px] font-[600] text-[#f9004d] uppercase tracking-[2px] mb-[10px]">
              About Me
            </span>
            <h2 className="text-[38px] font-[700] text-[#0d0d0d] leading-[1.25] mb-[18px]">
              Well Experienced<br />
              <span className="text-[#f9004d]">CSE Student</span>
            </h2>
            <p className="text-[#777] text-[15px] leading-[1.8] mb-[28px]">
              Familiar with web development and languages like HTML, CSS, JavaScript, PHP, NestJS, C++, and C#.
              Completed projects in web development and C#, gaining practical experience. Motivated to learn new
              technologies and contribute to real-world projects.
            </p>


            {/* Two-column info lists */}
            <div className="flex gap-10 mb-[5px] flex-col sm:flex-row">
              <div className="flex-1">
                <InfoList items={aboutInfoLeft} />
              </div>
              <div className="flex-1">
                <InfoList items={aboutInfoRight} />
              </div>
            </div>


            <div className="mt-6">
              <Button
                href="https://drive.google.com/file/d/1rVgR5ObAme8us-4Bx2L77XXCeJ1g4Enm/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                variant="filled"
                className="!px-[25px] !py-[6px]"
              >
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
