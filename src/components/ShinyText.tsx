"use client";
import React from "react";

interface ShinyTextProps {
  children: React.ReactNode; // ✅ Accept children instead of 'text'
  disabled?: boolean;
  speed?: number;
  className?: string;
}

const ShinyText: React.FC<ShinyTextProps> = ({
  children,
  disabled = false,
  speed = 5,
  className = "",
}) => {
  const animationDuration = `${speed}s`;

  return (
    <div
      className={`text-white/70 bg-clip-text inline-block ${
        disabled ? "" : "animate-shine"
      } ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 60%)",
        backgroundSize: "200% 100%",
        WebkitBackgroundClip: "text",
        animationDuration: animationDuration,
      }}
    >
      {children}
    </div>
  );
};

export default ShinyText;
