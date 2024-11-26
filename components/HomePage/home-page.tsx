"use client";

import { useState, useEffect } from "react";
import HomePage from "@/components/HomePage/home";
import HomePage1 from "@/components/HomePage/home1";
import HomePage2 from "@/components/HomePage/home2";
import HomePage3 from "@/components/HomePage/home3";
import HomePage4 from "@/components/HomePage/home4";

export default function MainHomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const components = [
    <HomePage key={0} />,
    <HomePage1 key={1} />,
    <HomePage2 key={2} />,
    <HomePage3 key={3} />,
    <HomePage4 key={4} />
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === components.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div id="home" className="relative w-full h-screen bg-gray-900">
      {components.map((component, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-1000 ${
            currentIndex === index ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          {component}
        </div>
      ))}
    </div>
  );
}