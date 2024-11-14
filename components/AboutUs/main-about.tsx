import React from "react";
import Image from "next/image";
import { Tangerine } from "next/font/google";
import { Josefin_Sans } from "next/font/google";

const tangerine = Tangerine({
  weight: ["400"],
});

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight:['400'],
  display: "swap",
});

const MainAbout = () => {
  return (
    <div className="bg-[#f5f5ef] pt-16 pb-1">
      <h1
        className={`flex justify-center text-[#c26d2d] ${tangerine.className} text-[100px]`}
      >
        Discover us
      </h1>
      <p className="text-[#444444] text-[25px] px-80 text-center">
        Welcome to TheLuxuryFocus, where we elevate luxury with passion and
        precision. As a premier destination for elite business listings,
        TheLuxuryFocus.com redefines high-end living through seamless
        connections between luxury brands and clients who demand excellence.
      </p>

      <div className="relative h-[500px] mt-10">
        {/* Red Background for Debugging */}
        <div className="absolute inset-0 z-0"></div>

        {/* Image */}
        <Image
          src="/Images/Image5.jpg"
          alt="Luxury Redefined"
          fill
          className="object-cover object-[center_90%] brightness-50 z-10"
          sizes="100vw"
          priority
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30 z-20" />

        {/* Content Overlay */}
        <div className="absolute inset-0 z-30 flex gap-8 px-16">
          {/* Left side - Text content */}
          <div className="w-2/3 flex justify-center text-white">
            <h2 className={`${tangerine.className} text-[#af8c53] text-[100px] mt-20 `}>
              Truth 
              <p className={` ${josefin.className} text-[25px] text-white`}>ABOUT US</p>
            </h2>
            
            <p className={`${josefin.className} text-[16px] text-center text-[#f6e5d9] leading-relaxed w-[390px] ml-[350px] my-24 `}>
              Founded by Ramil Pandya, with over 20 years of experience in luxury sales and marketing, 
              TheLuxuryFocus.com was created to connect the entire luxury industry. Through our paid membership 
              platform and exclusive networks, we provide a streamlined platform for brands to advertise and 
              connect with high-net-worth individuals. We also offer a WhatsApp business group for a trusted 
              network of industry friends and associates.
            </p>
          </div>

          {/* Right side - Video section */}
          <div className="w-1/3 flex items-center">
            <div className="w-full  rounded-lg p-4">
              <div className="relative h-[300px] bg-white/10 rounded-lg overflow-hidden">
                {/* Cloud decorations */}
                <div className="absolute top-4 right-4">
                  <div className="w-12 h-6 bg-white rounded-full opacity-80" />
                </div>
                <div className="absolute top-8 right-12">
                  <div className="w-16 h-8 bg-white rounded-full opacity-60" />
                </div>
                
                {/* Video placeholder */}
                <video
                  className="w-full h-full object-cover rounded-lg"
                  autoPlay
                  muted
                  loop
                >
                  <source src="/Images/Perfume.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Video progress bar */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-2 bg-white/30 rounded-full">
                  <div className="w-1/3 h-full bg-white rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainAbout;