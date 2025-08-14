import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "Personal Project",
    year: "2025",
    title: "Modern E-Commerce UI",
    results: [
      { title: "Built full responsive storefront with cart system" },
      { title: "Integrated product filtering and search experience" },
      { title: "Designed smooth UX for mobile-first users" },
    ],
    link: "/projects/ecommerce",

    image: darkSaasLandingPage,
  },
  {
    company: "Concept Project",
    year: "2025",
    title: "Gaming Landing Page",
    results: [
      { title: "Crafted animated hero section with game trailer" },
      { title: "Designed for gamer engagement and retention" },
      { title: "Optimized for fast loads and visual flair" },
    ],
    link: "/projects/gaming",
    image: lightSaasLandingPage,
  },
  {
    company: "Personal Project",
    year: "• 2025",
    title: "AI Text-to-Image Generato",
    results: [
      {
        title: "Transforms prompts into high-quality images using AI.",
      },
      {
        title: "Showcases prompt handling, image rendering, modern UI.",
      },
      {
        title: "Built to attract users and clients of AI tools.",
      },
    ],
    link: "https://textimageai.vercel.app/",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="project" className="pb-16 lg:py-24">
      <div className="container ">
        <SectionHeader
          eyebrow="Highlight Work Sample"
          title="Featured Projects"
          description="See how I transformed ideas into impactful digital experiences."
        />
        <div className="mt-10 md:mt-20 flex flex-col gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 
            md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px `,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div
                    className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase
                tracking-widest text-sm text-transparent bg-clip-text"
                  >
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <button
                      className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl 
                font-semibold inline-flex items-center justify-center gap-2 mt-8"
                    >
                      <span>Visit Live Site</span>
                      <ArrowRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
