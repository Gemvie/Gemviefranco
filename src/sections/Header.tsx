"use client";
import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Dock, DockIcon, DockItem, DockLabel } from "@/components/dock";
import AboutMe from "@/assets/icons/AboutMe.svg";
import { FolderKanban, HomeIcon, Contact, ScrollText } from "lucide-react";

const data = [
  {
    title: "Home",
    icon: (
      <HomeIcon className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "#home",
  },
  {
    title: "About Me",
    icon: (
      <AboutMe className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "#about",
  },
  {
    title: "Project",
    icon: (
      <FolderKanban className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "#project",
  },
  {
    title: "Blogs",
    icon: (
      <ScrollText className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "#blogs",
  },
  {
    title: "Contact",
    icon: (
      <Contact className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "#contact",
  },
];

export const Header = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.2);
  const [menuOpen, setMenuOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const [scrollDir, setScrollDir] = useState<"up" | "down">("up");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDir = () => {
      const scrollY = window.scrollY;
      if (Math.abs(scrollY - lastScrollY) > 5) {
        setScrollDir(scrollY > lastScrollY ? "down" : "up");
        lastScrollY = scrollY > 0 ? scrollY : 0;
      }
    };

    window.addEventListener("scroll", updateScrollDir);
    return () => window.removeEventListener("scroll", updateScrollDir);
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      if (isPlaying) {
        audioRef.current.play().catch((err) => {
          console.log("Playback error:", err);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, volume]);

  const toggleSound = () => setIsPlaying((prev) => !prev);
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setVolume(parseFloat(e.target.value));

  return (
    <header className="fixed top-5 w-full z-10">
      {/* MOBILE HEADER (no scroll animation) */}
      <div className="flex justify-between items-center px-4 md:hidden">
        <div className="text-lg font-bold">GF</div>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 bg-white/10 rounded-lg border border-white/20"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* DESKTOP HEADER with scroll animation */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: scrollDir === "down" ? -100 : 0 }}
        transition={{ duration: 0.3 }}
        className="hidden md:flex justify-center items-center"
      >
        <nav className="flex gap-1 p-1 border border-white/15 rounded-full bg-white/10 backdrop-blur items-center">
          <Dock className="items-end pb-3">
            {data.map((item, idx) => (
              <a key={idx} href={item.href} className="no-underline">
                <DockItem className="aspect-square rounded-full bg-blue-200 dark:bg-blue-500/30">
                  <DockLabel>{item.title}</DockLabel>
                  <DockIcon>{item.icon}</DockIcon>
                </DockItem>
              </a>
            ))}
          </Dock>

          {/* Sound Toggle */}
          <button
            onClick={toggleSound}
            className="nav-item flex items-center gap-1 px-3 py-1 text-sm"
          >
            {isPlaying ? (
              <>
                <Volume2 className="w-4 h-4 text-green-600" /> On
              </>
            ) : (
              <>
                <VolumeX className="w-4 h-4 text-red-700" /> Off
              </>
            )}
          </button>

          {/* Volume Slider */}
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="w-24 h-2 rounded-lg accent-white cursor-pointer"
          />
        </nav>
      </motion.div>

      {/* MOBILE DROPDOWN MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-2 px-4"
          >
            <nav className="flex flex-col items-center gap-3 p-4 border border-white/15 rounded-lg bg-white/10 backdrop-blur">
              <a href="#home" className="nav-item">
                Home
              </a>
              <a href="#about" className="nav-item">
                About
              </a>
              <a href="#project" className="nav-item">
                Project
              </a>
              <a href="#project" className="nav-item">
                Blogs
              </a>
              <a
                href="#contact"
                className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
              >
                Contact
              </a>

              {/* Sound Toggle */}
              <button
                onClick={toggleSound}
                className="nav-item flex items-center gap-1 px-3 py-1 text-sm"
              >
                {isPlaying ? (
                  <>
                    <Volume2 className="w-4 h-4 text-green-600" /> On
                  </>
                ) : (
                  <>
                    <VolumeX className="w-4 h-4 text-red-700" /> Off
                  </>
                )}
              </button>

              {/* Volume Slider */}
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                className="w-24 h-2 rounded-lg accent-white cursor-pointer"
              />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Sound */}
      <audio ref={audioRef} src="/sound.aac" loop />
    </header>
  );
};
