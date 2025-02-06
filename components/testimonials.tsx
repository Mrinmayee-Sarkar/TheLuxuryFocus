"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { Tangerine, Josefin_Sans, Hanken_Grotesk } from "next/font/google";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const tangerine = Tangerine({ weight: ["400"], subsets: ["latin"] });
const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});
const hanken = Hanken_Grotesk({ weight: ["300"], subsets: ["latin"] });

const testimonials = [
  {
    text: "Working with The Luxury Focus has been a game changer for our business. Their insightful consulting and exquisite taste in luxury have elevated our brand to new heights.",
    author: "Shreya Chatterjee",
    image: "/Images/Testimonial.jpg",
  },
  {
    text: "The Luxury Focus has redefined what it means to provide luxury consulting. Their expertise, combined with their genuine passion for luxury, has made a remarkable difference in our business.",
    author: "Divyansh Palia",
    image: "/Images/Testimonial2.jpg",
  },
  {
    text: "The Luxury Focus provided unparalleled consulting services that transformed our luxury offerings. Their attention to detail and deep industry knowledge were evident in every aspect of their work.",
    author: "Mrinmayee Sarkar",
    image: "/Images/Testimonial3.jpg",
  },
];

const partners = [
  "/Images/Partner.jpg",
  "/Images/Partner2.png",
  "/Images/Partner3.jpg",
  "/Images/Partner4.jpg",
];

export default function TestimonialsPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [currentPartnerIndex, setCurrentPartnerIndex] = useState(0);

  const handleTestimonialNext = () => {
    setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handleTestimonialPrev = () => {
    setCurrentTestimonialIndex((prev) =>
      prev - 1 < 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handlePartnerNext = () => {
    setCurrentPartnerIndex((prev) => (prev + 1) % partners.length);
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
        className="pt-16 md:pt-24 pb-1 overflow-hidden"
        id="testimonials"
      >
        <div className="flex flex-col md:flex-row justify-center items-center md:items-end px-4 md:px-0">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`text-[#c26d2d] ${tangerine.className} text-center text-[60px] md:text-[80px]`}
          >
            Our Clients
          </motion.h1>

          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`text-[#13100e] ${josefin.className} text-[16px] md:text-[20px] mt-2 md:mt-0 md:ml-5 text-center md:text-left`}
          >
            Here's what some of our satisfied clients have shared:
          </motion.h2>
        </div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={
            isInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }
          }
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative h-[700px] md:h-[550px] mt-8 md:mt-0"
        >
          <Image
            src="/Images/Image8.jpg"
            alt="Luxury Redefined"
            fill
            className="object-cover object-[center_50%] brightness-40"
            sizes="100vw"
            priority
          />

          <div className="absolute inset-0 flex flex-col justify-between py-8 md:py-10 px-4 md:px-10 z-30">
            <div className="flex overflow-hidden bg-[#cbc2b5] relative">
              <ChevronLeft
                className="w-6 h-6 text-gray-800 absolute left-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                onClick={handleTestimonialPrev}
              />
              {[0, 1, 2].map((offset) => {
                const index =
                  (currentTestimonialIndex + offset) % testimonials.length;
                const testimonial = testimonials[index];
                return (
                  <div
                    key={`testimonial-${index}`}
                    className="w-full h-auto md:h-40 p-4"
                  >
                    <div className="rounded-lg flex flex-col md:flex-row items-center text-[12px] md:text-[14px]">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        width={100}
                        height={100}
                        className="rounded-full mb-2 md:mb-0 md:mr-4"
                      />
                      <p
                        className={`text-center md:text-left ${hanken.className} text-gray-800`}
                      >
                        {testimonial.text}
                      </p>
                    </div>
                    <p className="italic text-sm text-gray-500 text-center md:text-left mt-2">
                      - {testimonial.author}
                    </p>
                  </div>
                );
              })}
              <ChevronRight
                className="w-6 h-6 text-gray-800 absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                onClick={handleTestimonialNext}
              />
            </div>

            <div className="bg-[#f5f5ef] mt-8 md:mt-5 p-4 md:p-0">
              <div className="flex flex-col md:flex-row justify-center items-center">
                <h2
                  className={`text-center text-[50px] md:text-[80px] ${tangerine.className} text-[#c26d2d]`}
                >
                  Our Partners
                </h2>
                <p
                  className={`text-center ${josefin.className} text-[16px] md:text-[20px] mt-2 md:mt-[60px] md:ml-3`}
                >
                  We are proud to have them with us
                </p>
              </div>
            </div>

            <div className="flex items-center pt-4 justify-center space-x-4 md:space-x-8 overflow-hidden bg-[#cbc2b5] h-32 md:h-40 mt-4 md:mt-0">
              <ChevronLeft
                className="w-8 h-8 md:w-10 md:h-10 text-gray-800 transform -translate-y-1/2 cursor-pointer"
                onClick={handlePartnerPrev}
              />
              {[0, 1, 2].map((offset) => {
                const index = (currentPartnerIndex + offset) % partners.length;
                const logo = partners[index];
                return (
                  <motion.div
                    key={`partner-${index}`}
                    whileHover={{ scale: 1.1 }}
                    className="w-[100px] h-[100px] md:w-[100px] md:h-[100px] flex justify-center items-center bg-[#cbc2b5]"
                  >
                    <Image
                      src={logo}
                      alt={`Partner ${index + 1}`}
                      width={500}
                      height={500}
                      className="w-auto h-auto max-w-full max-h-full"
                    />
                  </motion.div>
                );
              })}
              <ChevronRight
                className="w-8 h-8 md:w-10 md:h-10 text-gray-800 transform -translate-y-1/2 cursor-pointer"
                onClick={handlePartnerNext}
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
