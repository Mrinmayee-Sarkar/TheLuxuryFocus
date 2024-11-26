'use client'

import React, { useRef } from "react"
import Image from "next/image"
import { Tangerine, Josefin_Sans, Hanken_Grotesk } from "next/font/google"
import { motion, useInView } from "framer-motion"


const tangerine = Tangerine({
  weight: ["400"],
  subsets: ["latin"],
})

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
})

const hanken = Hanken_Grotesk({
  weight: ["300"],
  subsets: ["latin"],
})

export default function WhyUsAbout() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1 }}
      className="pt-24 pb-1"
      id='packages'
    >
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className={`flex justify-center pl-72 text-[#13100e] ${josefin.className} text-[25px]`}
      >
        PRICING AND PACKAGES
      </motion.h2>

      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`flex justify-center -mt-16 text-[#c26d2d] ${tangerine.className} text-[100px]`}
      >
        Special
      </motion.h1>

      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative h-[570px]"
      >
        <Image
          src="/Images/Image9.jpg"
          alt="Luxury Redefined"
          fill
          className="object-cover object-[center_50%] brightness-55"
          sizes="100vw"
          priority
        />
        
        <div className="absolute inset-0 flex justify-center items-center space-x-3 -mt-10">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative w-[397px] h-[557px] overflow-hidden"
          >
            <Image
              src="/Images/Silver.png"
              alt="Silver Package 1"
              fill
              className="object-cover rounded-lg shadow-lg"
              sizes="500px"
            />
          </motion.div>
          
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="relative w-[397px] h-[557px] overflow-hidden"
          >
            <Image
              src="/Images/Gold.png"
              alt="Gold Package 2"
              fill
              className="object-cover rounded-lg shadow-lg"
              sizes="500px"
            />
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="relative w-[397px] h-[557px] overflow-hidden"
          >
            <Image
              src="/Images/Platinum.png"
              alt="Platinum Package 2"
              fill
              className="object-cover rounded-lg shadow-lg"
              sizes="500px"
            />
          </motion.div>

        </div>
      </motion.div>
    </motion.div>
  )
}