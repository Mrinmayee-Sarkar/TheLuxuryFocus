import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Cinzel } from "next/font/google";
import { Josefin_Sans } from "next/font/google";
import {
  FaInstagram,
  FaWhatsapp,
  FaFacebook,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
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
    <div className="relative ">
      <div className="relative h-[450px] max-sm:h-[896px]">
        <Image
          src="/Images/Image6.jpg"
          alt="Luxury Footer Background"
          fill
          className="object-cover brightness-50 hidden sm:block"
          priority
        />
        <Image
          src="/Images/TheLuxuryFocusMobileVersion2.png"
          alt="Luxury Footer Mobile Background"
          fill
          className="object-cover brightness-50 sm:hidden"
          priority
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 z-10">
          <div className="container mx-auto px-4 py-8 max-sm:py-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-48 mt-8 md:mt-16 ">
              {/* GET IN TOUCH */}
              <div className="mb-8 md:mb-0">
                <h2
                  className={`${cinzel.className} text-white text-[18px] md:text-[20px] font-semibold mb-2`}
                >
                  GET IN TOUCH
                </h2>
                <div className="h-[2px] bg-[#cbc2b5] w-full md:w-[340px] mb-3"></div>
                <p
                  className={`${josefin.className} text-[#cccccc] text-[16px] md:text-[18px] leading-relaxed`}
                >
                  Your Luxury Experience Starts Here
                </p>
                <div
                  className={`${josefin.className} text-[#cccccc] text-[16px] md:text-[18px] leading-relaxed mt-2`}
                >
                  Thank you for choosing TheLuxuryFocus.com. We invite you to
                  explore a world where each detail reflects excellence, and
                  every interaction is a step closer to luxury redefined. Let's
                  create unforgettable experiences together.
                </div>
              </div>

              {/* ADDRESS */}
              <div className="mb-8 max:sm:mb-3">
                <h2
                  className={`${cinzel.className} text-white text-[18px] md:text-[20px] font-semibold mb-2`}
                >
                  ADDRESS
                </h2>
                <div className="h-[2px] bg-[#cbc2b5] w-full md:w-[340px] mb-3"></div>
                <p
                  className={`${josefin.className} text-[#cccccc] pl-0 md:pl-5 text-[16px] md:text-[18px] leading-relaxed`}
                >
                  Coimbatore, Tamil Nadu, India
                </p>
                <div className="w-full h-[200px]  pt-3 pl-0 md:pl-5 relative rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.346018624243!2d76.95583209999999!3d11.0168445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1698496054294!5m2!1sen!2sin"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              {/* CONTACT US */}
              <div>
                <h2
                  className={`${cinzel.className} text-white text-[18px] md:text-[20px] font-semibold mb-2`}
                >
                  CONTACT US
                </h2>
                <div className="h-[2px] bg-[#cbc2b5] w-full md:w-[340px] mb-4"></div>
                <div className="flex gap-4 md:gap-8 mb-8 max-sm:mb-4 ml-0 md:ml-3">
                  <Link
                    href="https://www.instagram.com/raamilpandya"
                    className="text-white hover:text-[#c26d2d] transition-colors"
                  >
                    <FaInstagram size={20} className="md:w-6 md:h-6" />
                  </Link>
                  <Link
                    href="https://api.whatsapp.com/message/HQTKBRXZI7YRI1?autoload=1&app_absent=0"
                    className="text-white hover:text-[#c26d2d] transition-colors"
                  >
                    <FaWhatsapp size={20} className="md:w-6 md:h-6" />
                  </Link>
                  <Link
                    href="https://www.facebook.com/raamil?mibextid=ZbWKwL"
                    className="text-white hover:text-[#c26d2d] transition-colors"
                  >
                    <FaFacebook size={20} className="md:w-6 md:h-6" />
                  </Link>
                  <Link
                    href="https://www.youtube.com/@ramilramu"
                    className="text-white hover:text-[#c26d2d] transition-colors"
                  >
                    <FaYoutube size={20} className="md:w-6 md:h-6" />
                  </Link>
                  <Link
                    href="linkedin.com/in/ramil-pandya-5b429824"
                    className="text-white hover:text-[#c26d2d] transition-colors"
                  >
                    <FaLinkedin size={20} className="md:w-6 md:h-6" />
                  </Link>
                  <Link
                    href="https://x.com/ramilramu?t=PmIjuhIyj0M1dN-RG8hgYw&s=09"
                    className="text-white hover:text-[#c26d2d] transition-colors"
                  >
                    <FaXTwitter size={20} className="md:w-6 md:h-6" />
                  </Link>
                </div>

                {/* Copyright */}
                <div
                  className={`${josefin.className} text-[#cccccc] text-[16px] md:text-[18px] leading-relaxed`}
                >
                  <p>Copyright © 2024 TheLuxuryFocus.com</p>
                  <p>All Rights Reserved.</p>
                  <Link href="https://theluxuryfocus.com/privacy-policy/">
                    Privacy & Policy
                  </Link>
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

