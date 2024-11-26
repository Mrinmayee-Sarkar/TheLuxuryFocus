'use client'

import React, { useRef, useState } from "react";
import Image from "next/image";
import { Tangerine, Josefin_Sans, Hanken_Grotesk } from "next/font/google";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const tangerine = Tangerine({ weight: ["400"], subsets: ["latin"] });
const josefin = Josefin_Sans({ subsets: ["latin"], weight: ["400"], display: "swap" });
const hanken = Hanken_Grotesk({ weight: ["300"], subsets: ["latin"] });

const testimonials = [
  {
    text: "The ambiance was great - and the food even better! Simple recipes done well with top-notch ingredients.",
    author: "Dahl, Mother",
    image: "/Images/images.jpg",
  },
  {
    text: "Eating here made me miss Paris so much. What a treat! I will bring my clients here.",
    author: "Cathy, Entrepreneur",
    image: "/Images/images.jpg",
  },
  {
    text: "Exceptional service and attention to detail. A truly luxurious experience!",
    author: "Michael, CEO",
    image: "/Images/images.jpg",
  },
  {
    text: "The perfect blend of elegance and comfort. I'll definitely be returning!",
    author: "Sarah, Designer",
    image: "/Images/images.jpg",
  },
  {
    text: "An unforgettable experience that exceeded all my expectations.",
    author: "John, Travel Blogger",
    image: "/Images/images.jpg",
  },
  {
    text: "The epitome of luxury and sophistication. Highly recommended!",
    author: "Emma, Fashion Editor",
    image: "/Images/images.jpg",
  },
];

const partners = [
  "/Images/brand2.png",
  "/Images/brand1.webp",
  "/Images/brand2.png",
  "/Images/brand1.webp",
  "/Images/brand2.png",
  "/Images/brand1.webp",
  "/Images/brand2.png",
  "/Images/brand1.webp",
  "/Images/brand2.png",
  "/Images/brand1.webp",
  "/Images/brand2.png",
];

export default function TestimonialsPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  // State for partners carousel
  const [currentPartnerIndex, setCurrentPartnerIndex] = useState(0);

  // Handlers for testimonials navigation
  const handleTestimonialNext = () => {
    setCurrentTestimonialIndex((prev) =>
      (prev + 1) % testimonials.length
    );
  };

  const handleTestimonialPrev = () => {
    setCurrentTestimonialIndex((prev) =>
      prev - 1 < 0 ? testimonials.length - 1 : prev - 1
    );
  };

  // Handlers for partners navigation
  const handlePartnerNext = () => {
    setCurrentPartnerIndex((prev) =>
      (prev + 1) % partners.length
    );
  };

  const handlePartnerPrev = () => {
    setCurrentPartnerIndex((prev) =>
      prev - 1 < 0 ? partners.length - 1 : prev - 1
    );
  };

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
        className="pt-24 pb-1 overflow-hidden"
        id='testimonials'
      >
        <div className="flex justify-center">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`text-[#c26d2d] ${tangerine.className} -mt-8 text-center text-[80px]`}
          >
            Our Clients
          </motion.h1>

          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`text-[#13100e] ${josefin.className} text-[20px] ml-5 mt-6`}
          >
            Here's what some of our satisfied clients have shared:
          </motion.h2>
        </div>

        {/* Background image with overlay */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative h-[550px]"
        >
          <Image
            src="/Images/Image8.jpg"
            alt="Luxury Redefined"
            fill
            className="object-cover object-[center_50%] brightness-40"
            sizes="100vw"
            priority
          />

          {/* Testimonials Section */}
          <div className="absolute top-10 left-0 right-0 mx-auto px-10 z-30">
            <div className="flex overflow-hidden bg-[#cbc2b5] relative ">
              <ChevronLeft
                className="w-6 h-6 text-gray-800 absolute left-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                onClick={handleTestimonialPrev}
              />
              {[0, 1, 2].map((offset) => {
                const index = (currentTestimonialIndex + offset) % testimonials.length;
                const testimonial = testimonials[index];
                return (
                  <div key={index} className="w-full h-40">
                    <div className="rounded-lg flex items-center text-[14px] mx-4 my-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        width={80}
                        height={80}
                        className="rounded-full"
                      />
                      <p className={`text-center ${hanken.className} text-gray-800 ml-4`}>
                        {testimonial.text}
                      </p>
                    </div>
                    <p className="italic text-sm text-gray-500 text-center ml-16">- {testimonial.author}</p>
                  </div>
                );
              })}
              <ChevronRight
                className="w-6 h-6 text-gray-800 absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                onClick={handleTestimonialNext}
              />
            </div>

            <div className="bg-[#f5f5ef] my-5 flex justify-center">
              <h2 className={`text-center text-[80px] ${tangerine.className} text-[#c26d2d]`}>
                Our Partners
              </h2>
              <p className={`text-center ${josefin.className} text-[20px] mt-[60px] ml-3`}>
                We are proud to have them with us
              </p>
            </div>

            {/* Partners Section */}
            <div className="flex items-center justify-center space-x-8 overflow-hidden bg-[#cbc2b5] h-40 ">
              <ChevronLeft
                className="w-10 h-10 text-gray-800 transform -translate-y-1/2 cursor-pointer"
                onClick={handlePartnerPrev}
              />
              {[0, 1, 2, 3, 4, 5].map((offset) => {
                const index = (currentPartnerIndex + offset) % partners.length;
                const logo = partners[index];
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    className="w-[100px] h-[100px] flex justify-center bg-white shadow-md"
                  >
                    <Image
                      src={logo}
                      alt={`Partner ${index + 1}`}
                      width={150}
                      height={150}
                    />
                  </motion.div>
                );
              })}
              <ChevronRight
                className="w-10 h-10 text-gray-800 transform -translate-y-1/2 cursor-pointer"
                onClick={handlePartnerNext}
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}

