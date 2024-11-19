'use client'

import React, { useRef } from "react";
import Image from "next/image";
import { Tangerine } from "next/font/google";
import { Josefin_Sans } from "next/font/google";
import { Hanken_Grotesk } from "next/font/google";
import { motion, useInView } from "framer-motion";

const tangerine = Tangerine({
  weight: ["400"],
  subsets: ["latin"],
});

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const hanken = Hanken_Grotesk({
  weight: ["300"],
  subsets: ["latin"],
});

// Reusable list data
const advantages = [
  {
    title: "Unmatched Expertise",
    description:
      "With over 20 years in the industry, our team brings a deep understanding of luxury and high-end service, making us experts at delivering results tailored for discerning clients.",
  },
  {
    title: "Personalized Service",
    description:
      "We take a tailored approach, carefully curating every detail to align with your unique vision and needs. From start to finish, you'll experience a truly personalized journey with us.",
  },
  {
    title: "Innovation",
    description:
      "By blending the latest trends with advanced technology, we continually elevate your brand, ensuring it remains relevant, impactful, and ahead of the curve.",
  },
];

export default function WhyUsAbout() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1 }}
      className="pt-24 pb-1"
    >
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`flex justify-center text-[#c26d2d] ${tangerine.className} text-[100px]`}
      >
        Why us
      </motion.h1>
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className={`flex justify-center pl-72 pb-3 -mt-11 text-[#13100e] ${josefin.className} text-[25px]`}
      >
        OUR ADVANTAGES
      </motion.h2>

      <motion.section 
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative flex flex-col md:flex-row items-center"
      >
        {/* Left Part - Video with Content */}
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="w-full md:w-2/3 relative md:h-[80vh]"
        >
          <video
            className="absolute inset-0 object-cover w-full h-full"
            src="/Images/Perfume.mp4"
            autoPlay
            muted
            loop
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-start p-8 text-white space-y-4">
            <ul className="space-y-4 px-16">
              {advantages.map((advantage, index) => (
                <motion.li 
                  key={index}
                  initial={{ x: -50, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
                >
                  <h4
                    className={`${hanken.className} text-[#f5f5ef] text-[22px] font-bold pb-2`}
                  >
                    {advantage.title}
                  </h4>
                  <p
                    className={`${josefin.className} text-[#c8d0d8] text-[17px] w-[420px]`}
                  >
                    {advantage.description}
                  </p>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
        {/* Right Part - Background Image with Overlaid Image */}
        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="w-full md:w-1/3 h-[50vh] md:h-[80vh] relative"
        >
          {/* Background Image */}
          <Image
            src="/Images/Image6.jpg"
            alt="Background Image"
            fill
            className="object-cover object-[center_45%] brightness-60"
          />

          {/* Join Us Button */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="absolute left-[160px] text-[18px] top-14 z-20 px-[85px] py-[11px] bg-[#af8c53] rounded-[20px] text-white cursor-pointer"
          >
            Join Us
          </motion.div>

          {/* Overlayed Image */}
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="absolute inset-0 flex justify-center items-center"
          >
            <Image
              src="/Images/Biz.png"
              alt="Overlay Image"
              width={300}
              height={500}
              className="z-10 pt-[90px]"
            />
          </motion.div>
        </motion.div>
      </motion.section>
    </motion.div>
  );
}