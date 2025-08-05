"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const EcommerceCountdownPage = () => {
  const COUNTDOWN_DURATION = 10; // 30 seconds
  const ERROR_DISPLAY_DURATION = 3;

  const [timeLeft, setTimeLeft] = useState(COUNTDOWN_DURATION);
  const [showError, setShowError] = useState(false);
  const [viewCount, setViewCount] = useState(0);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    let interval: NodeJS.Timeout;

    if (!showError) {
      interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            setShowError(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      const errorTimeout = setTimeout(() => {
        setShowError(false);
        setTimeLeft(COUNTDOWN_DURATION);
        setViewCount((count) => count + 1);
      }, ERROR_DISPLAY_DURATION * 1000);

      return () => clearTimeout(errorTimeout);
    }

    return () => clearInterval(interval);
  }, [showError]);

  useEffect(() => {
    if (viewCount >= 4) {
      router.push("/#project");
    }
  }, [viewCount, router]);

  if (!mounted) return null;

  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");

  const getTitle = () => {
    switch (viewCount) {
      case 2:
        return "You're so persistent 😅";
      case 3:
        return "You really don't want to go back to the page? 🤨";
      default:
        return (
          <>
            🎮 Gaming Landing will open in{" "}
            <span className="text-yellow-400">only 10 seconds!</span>
          </>
        );
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white gap-8 text-center px-4">
      {!showError ? (
        <>
          <h1 className="text-3xl sm:text-4xl font-bold">{getTitle()}</h1>
          <div className="text-6xl font-mono">
            {minutes}:{seconds}
          </div>
        </>
      ) : (
        <h1 className="text-3xl sm:text-4xl font-bold text-red-500">
          🤡 Oops! Something went wrong...💀
        </h1>
      )}

      <Link
        href="/#project"
        className="bg-white text-black px-6 py-2 rounded-full hover:bg-white/80 transition"
      >
        🔙 Back to Project
      </Link>
    </main>
  );
};

export default EcommerceCountdownPage;
