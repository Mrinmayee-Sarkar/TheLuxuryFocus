'use client'

import Image from "next/image"
import { Playfair_Display, Cormorant } from "next/font/google"
import Link from "next/link"
import { FaInstagram, FaWhatsapp, FaFacebook, FaYoutube, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Tangerine } from "next/font/google";
import { Josefin_Sans } from "next/font/google";
import { Cinzel } from "next/font/google";
const tangerine  = Tangerine({
  weight:['400']
})

const josefin= Josefin_Sans({
  subsets:['latin'],
  weight:['100','200','300','400','500','600','700'],
  display:'swap'
  })

  const cinzel = Cinzel({
    subsets: ['latin'],
    display: 'swap',
  })
  
export default function ContactPage() {
  return (
    <div className="grid lg:grid-cols-2 min-h-screen">
      {/* Left Section - Image */}
      <div className="relative hidden lg:block">
        <Image
          src="/Images/Image7.jpg"
          alt="Luxury Interior"
          className="object-cover"
          fill
          priority
        />
      </div>

      {/* Right Section - Content */}
      <div className=" md:p-12 flex flex-col justify-center bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8 ">
            <h1 className={`${tangerine.className} md:text-6xl lg:text-8xl text-[#af8c53] `}>
              {"Let's Talk"}
            </h1>
            <h2 className={`${josefin.className} text-[25px] md:text-2xl tracking-[0.2em] text-[#13100e]`}>
              CONNECT WITH US
            </h2>
          </div>

          <div className="space-y-8 text-center md:text-left">
            <div className={`${josefin.className} text-[17px] leading-relaxed text-[#444444]`}>
              <p>
                A World of Bespoke Luxury Awaits. Welcome to TheLuxuryFocus.com, where your vision is our mission. Our team is ready to bring your brand's story to life, transforming ideas into realities marked by elegance and distinction. Connect with us to begin a journey defined by exclusivity, sophistication, and impeccable service.
              </p>
              <p>
                Reach Out To Your Luxury Concierge. Indulge in personalized service from the moment you reach out. Let us handle every detail with care, discretion, and a commitment to perfection.
              </p>
            </div>
            
           

            <div className={`${josefin.className} text-[#af8c53] hover:text-[#C5A572] space-y-4 ml-6 text-[17px]`}>
              <Link 
                href="https://theluxuryfocus.com" 
                className={` hover:text-[#9A815A] transition-colors ml-6 block underline underline-offset-2`}
              >
                www.theluxuryfocus.com
              </Link>

              <Link 
                href="tel:+91-701018092" 
                className="flex border border-[#af8c53] rounded-[25px] w-[350px] h-[46px] bottom-2 items-center justify-center md:justify-start gap-2  transition-colors"
              >
              
                <span className="ml-6">+91-701018092</span>
              </Link>

              <Link 
                href="mailto:rmfpandya@gmail.com" 
                className="flex items-center  transition-colors border border-[#af8c53] rounded-[25px] w-[350px] h-[46px]"
              >
               <span className="ml-6">rmfpandya@gmail.com</span> 
              </Link>
            </div>

            <div className=" ml-6 ">
        
              <div className="flex items-center  border border-[#af8c53] rounded-[25px] bg-[#af8c53] w-[350px] h-[46px] justify-center md:justify-start">
                <div className={`${cinzel.className} font-semibold ml-2 text-[15px]`}>GET SOCIAL</div>
                <Link href="#" className=" text-white p-2 rounded-full hover:bg-[#9A815A] transition-colors">
                  <FaInstagram className="w-5 h-5 ml-3" />
                </Link>
                <Link href="#" className=" text-white p-2 rounded-full hover:bg-[#9A815A] transition-colors">
                  <FaWhatsapp className="w-5 h-5" />
                </Link>
                <Link href="#" className=" text-white p-2 rounded-full hover:bg-[#9A815A] transition-colors">
                  <FaFacebook className="w-5 h-5" />
                </Link>
                <Link href="#" className=" text-white p-2 rounded-full hover:bg-[#9A815A] transition-colors">
                  <FaYoutube className="w-5 h-5" />
                </Link>
                <Link href="#" className=" text-white p-2 rounded-full hover:bg-[#9A815A] transition-colors">
                  <FaLinkedin className="w-5 h-5" />
                </Link>
                <Link href="#" className=" text-white p-2 rounded-full hover:bg-[#9A815A] transition-colors">
                  <FaXTwitter className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Button */}
      <Link 
        href="#" 
        className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      </Link>
    </div>
  )
}