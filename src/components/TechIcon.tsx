import React from "react";

export const TechIcon = ({
  component: Component,
}: {
  component: React.ElementType;
}) => {
  return (
    <>
      <Component className="size-10 fill-[url(#tech-icon-gradient)]" />
      <svg className="size-0 absolute">
        <linearGradient id="tech-icon-gradient">
          <stop offset="0%" stopColor="rgb(59 130 246)" />{" "}
          {/* blue-500/20 */}
          <stop offset="100%" stopColor="rgb(59 130 246)" />{" "}
          {/* blue-500/30 */}
        </linearGradient>
      </svg>
    </>
  );
};
