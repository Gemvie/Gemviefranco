import React from "react";

export const TechIcon = ({
  component: Component,
}: {
  component: React.ElementType;
}) => {
  return (
    <>
      <Component className="w-10 h-10 object-contain fill-[url(#tech-icon-gradient)]" />
      <svg className="w-0 h-0 absolute">
        <linearGradient id="tech-icon-gradient">
          <stop offset="0%" stopColor="rgb(59 130 246)" /> {/* blue-500 */}
          <stop offset="100%" stopColor="rgb(59 130 246)" /> {/* blue-500 */}
        </linearGradient>
      </svg>
    </>
  );
};
