import React from 'react'
import Image from 'next/image'
import visitus from '../../public/Images/VisitUS.jpg'
import { Tangerine, Josefin_Sans, Hanken_Grotesk } from "next/font/google"

const josefin= Josefin_Sans({
  subsets:['latin'],
  weight:['600'],
  display:'swap'
  })

  const tangerine  = Tangerine({
    weight:['400']
  })

  const hanken = Hanken_Grotesk({
    weight: ["500"],
    subsets: ["latin"],
  })

const StayTuned = () => {
  return (
    <div className="relative w-full min-h-screen bg-[#0a0a14] overflow-hidden p-10 sm:p-12 md:p-16"> {/* Update 1: Container padding */}
    {/* Background texture */}
    <div 
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: `url(${visitus.src})`,
      }}
    />
    
    {/* Content overlay */}
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 sm:px-8 py-16 sm:py-24 text-center"> 
      {/* Main heading */}
      <h1 className={`${tangerine.className} text-5xl sm:text-6xl md:text-7xl lg:text-[139px] text-[#d1966a] mb-6 sm:mb-10`} 
          >
        Stay Tuned!
      </h1>
      
      {/* Subheading */}
      <h2 className={`${hanken.className} px-10 sm:px-20 text-2xl sm:text-4xl md:text-5xl lg:text-[43px] text-[#af8c53] mb-8 sm:mb-16 max-w-4xl leading-tight [text-shadow:_0_0_30px_#d1966a,_0_0_60px_#d1966a,_0_0_90px_rgba(209,150,106,0.8)] animate-pulse-subtle`}>
        The Ultimate Luxury Experience Awaits You!
      </h2>
      
      {/* Description */}
      <p className={`text-[#c8d0d8] max-w-4xl mb-8 sm:mb-12 text-lg sm:text-[18px] leading-relaxed px-8 sm:px-14 ${josefin.className}`}> 
        Experience a world where sophistication meets innovation. The Luxury Focus is your exclusive gateway 
        to high-end business listings and premium services. Immerse yourself in a curated collection of brands 
        and professionals, tailored to meet the demands of a refined lifestyle.
      </p>
      
      {/* Bottom tagline */}
      <div className={`flex ${josefin.className} items-center gap-4 sm:gap-6 text-[#866727] text-xl sm:text-2xl md:text-[28px]`}>
        <span className="hidden md:inline">✧</span>
        REDEFINING ELEGANCE, CRAFTING EXCELLENCE
        <span className="hidden md:inline">✧</span>
      </div>
    </div>
    
    {/* Decorative side elements */}
    <div className="absolute top-0 right-0 w-1/4 h-full bg-gradient-to-l from-[rgba(255,255,255,0.1)] to-transparent" />
    <div className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-r from-[rgba(255,255,255,0.1)] to-transparent" />
  </div>
  )
}

export default StayTuned

