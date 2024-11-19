'use client'

import React, { useRef } from "react";
import Image from "next/image";
import { Tangerine, Josefin_Sans } from "next/font/google";
import { motion, useInView } from "framer-motion";

const tangerine = Tangerine({
  weight: ["400"],
  subsets: ["latin"],
});

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ['400'],
  display: "swap",
});

export default function MainAbout() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1 }}
      className="bg-[#f5f5ef] pt-16 pb-1 overflow-hidden"
    >
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`flex justify-center text-[#c26d2d] ${tangerine.className} text-[100px]`}
      >
        Discover us
      </motion.h1>
      <motion.p 
        initial={{ y: 50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-[#444444] text-[25px] px-80 text-center"
      >
        Welcome to TheLuxuryFocus, where we elevate luxury with passion and
        precision. As a premier destination for elite business listings,
        TheLuxuryFocus.com redefines high-end living through seamless
        connections between luxury brands and clients who demand excellence.
      </motion.p>

      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative h-[500px] mt-10"
      >
        <Image
          src="/Images/Image5.jpg"
          alt="Luxury Redefined"
          fill
          className="object-cover object-[center_90%] brightness-50 z-10"
          sizes="100vw"
          priority
        />

        <div className="absolute inset-0 bg-black/30 z-20" />

        <div className="absolute inset-0 z-30 flex gap-8 px-16">
          <div className="w-2/3 flex justify-center text-white">
            <motion.h2 
              initial={{ x: -100, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className={`${tangerine.className} text-[#af8c53] text-[100px] mt-20`}
            >
              Truth 
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className={`${josefin.className} text-[25px] text-white`}
              >
                ABOUT US
              </motion.p>
            </motion.h2>
            
            <motion.p 
              initial={{ x: 100, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className={`${josefin.className} text-[16px] text-center text-[#f6e5d9] leading-relaxed w-[390px] ml-[350px] my-24`}
            >
              Founded by Ramil Pandya, with over 20 years of experience in luxury sales and marketing, 
              TheLuxuryFocus.com was created to connect the entire luxury industry. Through our paid membership 
              platform and exclusive networks, we provide a streamlined platform for brands to advertise and 
              connect with high-net-worth individuals. We also offer a WhatsApp business group for a trusted 
              network of industry friends and associates.
            </motion.p>
          </div>

          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="w-1/3 flex items-center"
          >
            <div className="w-full rounded-lg p-4">
              <div className="relative h-[300px] bg-white/10 rounded-lg overflow-hidden">
                <motion.div 
                  animate={{ 
                    x: [0, 10, 0],
                    y: [0, -5, 0],
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 5,
                    ease: "easeInOut"
                  }}
                  className="absolute top-4 right-4"
                >
                  <div className="w-12 h-6 bg-white rounded-full opacity-80" />
                </motion.div>
                <motion.div 
                  animate={{ 
                    x: [0, -15, 0],
                    y: [0, 8, 0],
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 7,
                    ease: "easeInOut"
                  }}
                  className="absolute top-8 right-12"
                >
                  <div className="w-16 h-8 bg-white rounded-full opacity-60" />
                </motion.div>
                
                <video
                  className="w-full h-full object-cover rounded-lg"
                  autoPlay
                  muted
                  loop
                >
                  <source src="/Images/Perfume.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                <motion.div 
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-2 bg-white/30 rounded-full overflow-hidden"
                >
                  <div className="h-full bg-white rounded-full" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}