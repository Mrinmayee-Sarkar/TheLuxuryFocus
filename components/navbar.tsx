"use client";
import React from "react";
import { Cinzel } from "next/font/google";
import Image from "next/image";

const cinzel = Cinzel({
  subsets: ["latin"],
  display: "swap",
});

export default function Navbar() {
  const [activeSection, setActiveSection] = React.useState("HOME");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(
      sectionId.toLowerCase().replace(" ", "-")
    );
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "HOME",
        "ABOUT US",
        "PACKAGES",
        "TESTIMONIALS",
        "CONTACT US",
      ];
      const scrollPosition = window.scrollY + 100; // Adding offset for better detection

      for (const section of sections) {
        const element = document.getElementById(
          section.toLowerCase().replace(" ", "-")
        );
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-transparent ${cinzel.className}`}
    >
      <style jsx global>{`
        @keyframes glow {
          0%,
          100% {
            color: #ffffff;
            text-shadow: 0 0 7px #ffffff, 0 0 10px #ffffff, 0 0 21px #ffffff,
              0 0 42px rgba(255, 255, 255, 0.5);
          }
          50% {
            color: #ffffff;
            text-shadow: 0 0 10px #ffffff, 0 0 20px #ffffff, 0 0 30px #ffffff,
              0 0 50px rgba(255, 255, 255, 0.5);
          }
        }
        .nav-link {
          position: relative;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .nav-link.active {
          color: white;
          animation: glow 2s ease-in-out infinite;
          font-weight: 500;
          opacity: 1;
        }
        .nav-link.inactive {
          color: #f6e5d9;
          opacity: 0.9;
        }
        .nav-link.inactive:hover {
          color: #fbbf24;
        }
      `}</style>
      <div className="container py-2">
        <div className="flex justify-between items-center">
          <Image
            width={300}
            height={300}
            alt="logo"
            src="/Images/logo.png"
          ></Image>
          <ul className="flex space-x-28 text-[16px]">
            {["HOME", "ABOUT US", "PACKAGES", "TESTIMONIALS", "CONTACT US"].map(
              (item) => (
                <li key={item}>
                  <span
                    onClick={() => scrollToSection(item)}
                    className={`nav-link ${
                      activeSection === item ? "active" : "inactive"
                    }`}
                  >
                    {item}
                  </span>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
