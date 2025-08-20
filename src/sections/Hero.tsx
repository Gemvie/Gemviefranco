import memojiImage from "@/assets/images/memoji-computer.png";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import RotatingText from "@/components/RotatingText";
import StarBorder from "@/components/StarBorder";
import ShinyText from "@/components/ShinyText";
import SplitText from "@/components/SplitText";
export const HeroSection = () => {
  return (
    <div
      id="home"
      className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip"
    >
      {/* Background with proper z-index and pointer-events-none */}
      <div className="absolute inset-0 z-0 pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]"></div>

      {/* Foreground content */}
      <div className="container relative z-10">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }} // start slightly below and invisible
            animate={{ opacity: 1, y: 0 }} // end at normal position fully visible
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-3"
          >
            <Image
              src={memojiImage}
              className="size-[100px]"
              alt="Gemvie Gwapo"
            />
          </motion.div>
          <StarBorder
            as="a"
            href="https://www.onlinejobs.ph/jobseekers/info/1963547"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-950 border border-gray-800 hover:bg-gray-800 transition"
            color="cyan"
            speed="3s"
          >
            <div className="flex items-center gap-4 px-1.5 py-0.5">
              <div className="bg-green-500 size-3.5 rounded-full relative">
                <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
              </div>
              <div className="text-sm font-medium">Available for Work</div>
            </div>
          </StarBorder>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="font-serif text-3xl md:text-4xl text-center mt-8 tracking-wide">
            <SplitText
              text="HELLO, WELCOME!"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
            />
          </div>
          <div className="flex items-baseline justify-center gap-2 mt-4">
            <ShinyText
              disabled={false}
              speed={3}
              className="mt-0 text-center text-white/60 md:text-lg"
            >
              Turning ideas into clean:
            </ShinyText>

            <RotatingText
              texts={[
                "Web Interfaces",
                "UI Layouts",
                "Clean UI Design",
                "Responsive",
                "Optimized Code",
                "Video Cuts",
                "Motion Graphics",
                "SEO Content",
              ]}
              mainClassName="bg-[#0ABAB5] font-bold text-xs sm:text-sm md:text-base px-1.5 sm:px-2 md:px-3 py-0.5 sm:py-1 md:py-2 text-white overflow-hidden justify-center rounded-lg"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <Link
            href="/projects/CV"
            target=".blank"
            className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl hover:bg-white/10 transition"
          >
            <span className="font-semibold">Check My CV</span>
            <span
              className="size-5 mb-2 text-white
          animate-[glow_6s_infinite]"
            >
              👀
            </span>

            <style jsx global>{`
              @keyframes glow {
                0%,
                100% {
                  text-shadow: 0 0 5px blue, 0 0 10px blue;
                }
                25% {
                  text-shadow: 0 0 5px green, 0 0 10px green;
                }
                50% {
                  text-shadow: 0 0 5px magenta, 0 0 10px magenta;
                }
                75% {
                  text-shadow: 0 0 5px purple, 0 0 10px purple;
                }
              }
            `}</style>
          </Link>

          <Link
            href="#contact"
            className="inline-flex items-center gap-2 border-white bg-white text-gray-900 h-12 px-6 rounded-xl hover:bg-gray-200 transition"
          >
            <span>👋</span>
            <span className="font-semibold">Say Hello</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
