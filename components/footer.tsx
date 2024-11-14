import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Cinzel } from "next/font/google";
import { Josefin_Sans } from "next/font/google";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["600"],
  display: "swap",
});
const cinzel = Cinzel({
  subsets: ["latin"],
  display: "swap",
});

const Footer = () => {
  return (
    <div className="relative pt-1">
      {/* Background Image */}
      <div className="relative h-[400px]">
        <Image
          src="/Images/Image6.jpg"
          alt="Luxury Footer Background"
          fill
          className="object-cover brightness-50"
          priority
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="absolute inset-0 z-10">
          <div className="container mx-auto px-2 py-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-48 mt-16">
              {/* GET IN TOUCH */}
              <div>
                <h2
                  className={`${cinzel.className} text-white text-[20px] font-semibold mb-2`}
                >
                  GET IN TOUCH
                </h2>
                <div className="h-[2px] bg-[#cbc2b5] w-[340px] mb-3"></div>
                <p
                  className={`${josefin.className} text-[#cccccc] text-[18px] leading-relaxed w-[360px]`}
                >
                  Your Luxury Experience Starts Here
                </p>
                <div
                  className={`${josefin.className} text-[#cccccc] text-[18px] leading-relaxed w-[360px]`}
                >
                  Thank you for choosing TheLuxuryFocus.com. We invite you to
                  explore a world where each detail reflects excellence, and
                  every interaction is a step closer to luxury redefined. Let's
                  create unforgettable experiences together.
                </div>
              </div>

              {/* ADDRESS */}
              <div>
                <h2
                  className={`${cinzel.className} text-white text-[20px] font-semibold mb-2`}
                >
                  ADDRESS
                </h2>
                <div className="h-[2px] bg-[#cbc2b5] w-[340px] mb-3"></div>
                <p
                  className={`${josefin.className} text-[#cccccc] text-[18px] leading-relaxed w-[360px]`}
                >
                  Coimbatore, Tamil Nadu, India
                </p>
                <div className="w-full h-[200px] relative rounded-lg overflow-hidden">
                  {/* <Image
                    // src="/Images/map.png"
                    alt="Location Map"
                    fill
                    className="object-cover"
                  /> */}
                </div>
              </div>

              {/* CONTACT US */}
              <div>
                <h2
                  className={`${cinzel.className} text-white text-[20px] font-semibold mb-2`}
                >
                  CONTACT US
                </h2>
                <div className="h-[2px] bg-[#cbc2b5] w-[340px] mb-4"></div>
                <div className="flex gap-8 mb-8 ml-3">
                  <Link
                    href="#"
                    className="text-white hover:text-[#c26d2d] transition-colors"
                  >
                    <FaInstagram size={24} />
                  </Link>
                  <Link
                    href="#"
                    className="text-white hover:text-[#c26d2d] transition-colors"
                  >
                    <FaWhatsapp size={24} />
                  </Link>
                  <Link
                    href="#"
                    className="text-white hover:text-[#c26d2d] transition-colors"
                  >
                    <FaFacebook size={24} />
                  </Link>
                  <Link
                    href="#"
                    className="text-white hover:text-[#c26d2d] transition-colors"
                  >
                    <FaYoutube size={24} />
                  </Link>
                  <Link
                    href="#"
                    className="text-white hover:text-[#c26d2d] transition-colors"
                  >
                    <FaLinkedin size={24} />
                  </Link>
                  <Link
                    href="#"
                    className="text-white hover:text-[#c26d2d] transition-colors"
                  >
                    <FaXTwitter size={24} />
                  </Link>
                </div>

                {/* Copyright */}
                <div
                  className={`${josefin.className} text-[#cccccc] text-[18px] leading-relaxed w-[360px]`}
                >
                  <p>Copyright © 2024 TheLuxuryFocus.com</p>
                  <p>All Rights Reserved.</p>
                  <p className="mt-4">Designed by Shreyalicious</p>
                  <p>Developed by Mrinmayee Sarkar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
