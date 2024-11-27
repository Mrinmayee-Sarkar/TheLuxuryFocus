'use client'

import React from "react"
import Image from "next/image"
import { Cinzel, Solway, Josefin_Sans, Tangerine } from "next/font/google"

const tangerine = Tangerine({
  weight: ['400'],
  subsets: ['latin'],
})

const cinzel = Cinzel({
  subsets: ["latin"],
  display: "swap",
})

const solway = Solway({
  subsets: ["latin"],
  weight: ["800"],
  display: "swap",
})

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["600"],
  display: "swap",
})

export default function HomePage() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Image container that takes full width */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/Images/Image1.jpg"
          alt="Luxury Redefined"
          fill
          className="object-cover object-[center_45%] brightness-60"
          sizes="100vw"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content centered over the image */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 py-8">
        <h1 
          className={`${tangerine.className} text-6xl xs:text-7xl sm:text-8xl md:text-9xl  lg:text-[190px] text-[#d1966a] mt-[60px] sm:mt-[100px] md:mt-[145px]
            [text-shadow:_0_0_30px_#d1966a,_0_0_60px_#d1966a,_0_0_90px_rgba(209,150,106,0.8)]
            animate-pulse-subtle
          `}
          style={{
            filter: 'brightness(1.3) contrast(0.9)',
          }}
        >
          The Luxury Focus
        </h1> 
        <h2
          className={`${solway.className} text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-bold text-[#cbc2b5] tracking-[0.2em]`}
        >
          LUXURY REDEFINED
        </h2>
        <p
          className={`${josefin.className} mt-7 text-lg sm:text-xl md:text-2xl lg:text-[25px] leading-tight font-light tracking-wider mb-6 sm:mb-8 md:mb-10 lg:mb-11 text-gray-100 max-w-2xl mx-auto`}
        >
       A Journey of Prestige and Perfection Awaits
        </p>

        <div className="items-center space-y-3 sm:space-y-4 md:space-y-5">
          <div className="h-[1px] sm:h-[3px] sm:w-64 md:w-80 lg:w-96 bg-[#cbc2b5]" />
          <span
           onClick={() => document.getElementById('about-us')?.scrollIntoView({ behavior: 'smooth' })}
            className={`${cinzel.className} text-[#f6e5d9] text-lg sm:text-xl md:text-2xl lg:text-[22px] leading-tight tracking-widest font-[500] block cursor-pointer`}
          >
            VIEW MORE
          </span>
          <div className="h-[1px] sm:h-[3px]  sm:w-64 md:w-80 lg:w-96 bg-[#cbc2b5]" />
        </div>
      </div>
    </div>
  )
}