'use client';
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import TailwindCSSIcon from "@/assets/icons/tailwindcss.svg";
import ReactIcon from "@/assets/icons/react.svg";
import CapcutIcon from "@/assets/icons/capcut.svg";
import AftereffectsIcon from "@/assets/icons/aftereffects.svg";
import ExcelIcon from "@/assets/icons/excel.svg";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";
const toolboxItems = [
  {
    title: "JavaScript",
    iconType: JavascriptIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "Tailwind CSS",
    iconType: TailwindCSSIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Capcut",
    iconType: CapcutIcon,
  },
  {
    title: "After Effects",
    iconType: AftereffectsIcon,
  },
  {
    title: "Excel",
    iconType: ExcelIcon,
  },
];

const hobbies = [
  {
    title: "Gaming",
    emoji: "🎮",
    left: "5%",
    top: "5%",
  },
  {
    title: "Anime",
    emoji: "📺",
    left: "50%",
    top: "5%",
  },
  {
    title: "Reading",
    emoji: "📚",
    left: "10%",
    top: "35%",
  },
  {
    title: "Coding",
    emoji: "💻",
    left: "35%",
    top: "40%",
  },
  {
    title: "Editing",
    emoji: "🎬",
    left: "70%",
    top: "45%",
  },
  {
    title: "Learning AI",
    emoji: "🧠",
    left: "5%",
    top: "65%",
  },
  {
    title: "Music",
    emoji: "🎵",
    left: "45%",
    top: "70%",
  },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <div id="about" className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Peek Into My World"
          description="Learn more about who I am, the tools I use, what I enjoy, and where I'm from."
        />

        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:h-[360px] md:col-span-2 lg:col-span-1">       
                <CardHeader
                  title="My Reads"
                  description="Books that challenge and expand my perspective."
                />
                <div className="w-40 mx-auto mt-2 md:mt-0">
                  <Image src={bookImage} alt="Book Cover" />
                </div>
            </Card>

            <Card className="h-[320px] md:h-[360px] p-0 md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Discover the tools and technologies behind my digital creations."
                className="px-6 pt-6"
              />

              <ToolboxItems
                items={toolboxItems}
                className=""
                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
              />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-right [animation-duration:15s]"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            <Card className="h-[320px] md:h-[360px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="A Glimpse into my passions and pursuits outside the screen."
                className=""
              />
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-cyan-300 to-orange-400 
                  rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] md:h-[360px] relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="map"
                className="h-full w-full object-cover md:object-center object-left-top"
              />
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
              size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline 
               after:outline-2 after:outline-offset-2 after:rounded-full after:outline-gray-950/30"
              >
                <div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400
               to-orange-400 -z-20 animate-ping [animation-duration:2s]"
                ></div>
                <div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400
               to-orange-400 -z-10"
                ></div>
                <Image src={smileMemoji} alt="smiling" className="size-17" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
