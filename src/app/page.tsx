import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";
import { AboutSection } from "@/sections/About";
import ClickSpark from "@/components/ClickSpark";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import DotGrid from "@/components/DotGrid";

export default function Home() {
  return (
    <div className="relative">
      {/* Full-page DotGrid background */}
      <div
        className="fixed top-0 left-0 w-full h-full -z-10 opacity-20"
        style={{ pointerEvents: "none" }}
      >
        <DotGrid
          dotSize={5}
          gap={15}
          baseColor="#271E37"
          activeColor="#5227FF"
          proximity={200}
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
        <TestimonialsSection />
        <ContactSection />
        <Footer />
      </ClickSpark>
    </div>
  );
}
