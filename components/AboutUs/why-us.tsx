"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { Tangerine, Josefin_Sans, Hanken_Grotesk } from "next/font/google";
import { motion, useInView, AnimatePresence } from "framer-motion";

interface ModalFields {
  isOpen: any,
  onClose: any,
  children: any

}


const tangerine = Tangerine({ weight: ["400"], subsets: ["latin"] });
const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});
const hanken = Hanken_Grotesk({ weight: ["700"], subsets: ["latin"] });

const advantages = [
  {
    title: "Unmatched Expertise",
    description:
      "With over 20 years in the industry, our team brings a deep understanding of luxury and high-end service, making us experts at delivering results tailored for discerning clients.",
    image: "/Images/Arrow.png",
  },
  {
    title: "Personalized Service",
    description:
      "We take a tailored approach, carefully curating every detail to align with your unique vision and needs. From start to finish, you'll experience a truly personalized journey with us.",
    image: "/Images/Arrow.png",
  },
  {
    title: "Innovation",
    description:
      "By blending the latest trends with advanced technology, we continually elevate your brand, ensuring it remains relevant, impactful, and ahead of the curve.",
    image: "/Images/Arrow.png",
  },
];

const Modal = ({ isOpen, onClose, children }:ModalFields) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-transparent p-4 rounded-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default function WhyUsAbout() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1 }}
      className="pt-24 pb-1 overflow-hidden bg-white"
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

      <motion.section className="relative flex flex-col md:flex-row items-center overflow-hidden">
        {/* Full width video background */}
        <video
          className="absolute inset-0 object-cover object-[center_70%] brightness-75 w-full h-full"
          src="/Images/Perfume.mp4"
          autoPlay
          muted
          loop
        />
        <div className="absolute inset-0 bg-black bg-opacity-30" />

        {/* Content overlay */}
        <div className="relative z-10 w-full flex flex-col md:flex-row">
          {/* Left Part - Advantages */}
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={
              isInView ? { x: 0, opacity: 1 } : { x: "-100%", opacity: 0 }
            }
            transition={{ duration: 0.8, delay: 0.8 }}
            className="w-full md:w-2/3 p-16 mt-16"
          >
            <ul className="space-y-8">
              {advantages.map((advantage, index) => (
                <motion.li
                  key={index}
                  initial={{ x: -50, opacity: 0 }}
                  animate={
                    isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }
                  }
                  transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
                  className="flex items-start space-x-2"
                >
                  <Image
                    src={advantage.image}
                    alt={advantage.title}
                    width={80}
                    height={80}
                    className="rounded-lg object-cover"
                  />
                  <div>
                    <h4
                      style={{
                        filter: "brightness(1.3) contrast(0.9)",
                      }}
                      className={`${hanken.className} text-[#af8c53] text-[23px] font-bold pb-2  [text-shadow:_0_0_30px_#d1966a,_0_0_60px_#d1966a,_0_0_90px_rgba(209,150,106,0.8)]
            animate-pulse-subtle`}
                    >
                      {advantage.title}
                    </h4>
                    <p
                      className={`${josefin.className} text-[#c8d0d8] text-[17px] w-[540px]`}
                    >
                      {advantage.description}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Part - Image */}
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={
              isInView ? { x: 0, opacity: 1 } : { x: "100%", opacity: 0 }
            }
            transition={{ duration: 1, delay: 1 }}
            className="w-full md:w-1/3 h-[50vh] md:h-[80vh] relative"
          >
            {/* Join Us Button */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 1, delay: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="absolute left-[40px] text-[18px] top-14 z-20 px-[85px] py-[11px] bg-[#af8c53] rounded-[20px] text-white cursor-pointer"
            >
              Join Us
            </motion.div>

            {/* Overlayed Image */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="absolute inset-0 flex items-center"
            >
              <Image
                src="/Images/Biz.png"
                alt="Overlay Image"
                width={300}
                height={500}
                className="z-10 pt-[90px] cursor-pointer"
                onClick={() => setIsModalOpen(true)}
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <AnimatePresence>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <Image
            src="/Images/Biz.png"
            alt="Enlarged Image"
            width={700}
            height={1000}
            className="max-w-full max-h-[80vh] object-contain"
          />
        </Modal>
      </AnimatePresence>
    </motion.div>
  );
}

