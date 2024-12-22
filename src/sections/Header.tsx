"use client";

import { useState, useEffect } from "react";

export const Header = () => {
  const [currentSection, setCurrentSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "about", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 2 + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    // Run on page load to set the initial section
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (currentSection === null) return null; // Prevent rendering until ready

  const handleScrollToSection = (id: string) => {
    setCurrentSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a
          onClick={() => handleScrollToSection("home")}
          className={`nav-item px-4 py-2 rounded-full transition-colors duration-300 ${
            currentSection === "home" ? "bg-white text-gray-900" : "text-white"
          }`}
        >
          Home
        </a>
        <a
          onClick={() => handleScrollToSection("projects")}
          className={`nav-item px-4 py-2 rounded-full transition-colors duration-300 ${
            currentSection === "projects"
              ? "bg-white text-gray-900"
              : "text-white"
          }`}
        >
          Projects
        </a>
        <a
          onClick={() => handleScrollToSection("about")}
          className={`nav-item px-4 py-2 rounded-full transition-colors duration-300 ${
            currentSection === "about" ? "bg-white text-gray-900" : "text-white"
          }`}
        >
          About
        </a>
        <a
          onClick={() => handleScrollToSection("contact")}
          className={`nav-item px-4 py-2 rounded-full transition-colors duration-300 ${
            currentSection === "contact"
              ? "bg-white text-gray-900"
              : "text-white"
          }`}
        >
          Contact
        </a>
      </nav>
    </div>
  );
};
