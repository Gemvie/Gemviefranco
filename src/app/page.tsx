"use client";
import { useState, useEffect } from "react";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { BlogSection}  from "@/sections/Blogs";
import { AboutSection } from "@/sections/About";
import ClickSpark from "@/components/ClickSpark";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import DotGrid from "@/components/DotGrid";

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative">
      {/* Full-page DotGrid background */}
      <div
        className="fixed top-0 left-0 w-full h-full -z-10 opacity-20"
        style={{ pointerEvents: "none" }}
      >
        <DotGrid
          dotSize={5}
          gap={40}
          baseColor="#0ABAB5"
          activeColor="#10606A"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      {/* Foreground content with spark effect */}
      <ClickSpark
        sparkColor="rgba(0, 204, 255, 0.7)"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <Header />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <TapeSection />
        <BlogSection />
        <ContactSection />
        <Footer />
      </ClickSpark>

      {/* Scroll to Top Button (fade, bounce, rotate on hover) */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 p-3 rounded-full shadow-lg text-white text-lg
          bg-gradient-to-r from-blue-500/20  to-blue-500/20 
          hover:from-blue-500/30 hover:to-blue-500/30
          animate-bounce transition-all duration-500 ease-in-out
          hover:rotate-12
        ${
          showScrollTop
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        ↑
      </button>
    </div>
  );
}
