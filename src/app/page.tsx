import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";
import { AboutSection } from "@/sections/About";
import ClickSpark from "@/components/ClickSpark";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
export default function Home() {
  return (
    <div>
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
