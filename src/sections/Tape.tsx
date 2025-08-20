import StarIcon from "@/assets/icons/star.svg";
import { Fragment } from "react";

const words = [
  "Video Editor",
  "Web Developer",
  "UI Designer",
  "SEO Specialist",
  "Data Analyst",
  "Motion Designer",
  "Frontend Developer",
  "Automation Specialist",
  "Full-Stack Explorer",
  "Data Specialist",
];
export const TapeSection = () => {
  return (
    <div className="py-16 lg:py-24 overflow-x-clip">
      <div className="bg-gradient-to-r from-blue-500/20 to-blue-500/20 -rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4 pr-4 py-3  animate-move-left [animation-duration:30s]">
            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {words.map((word) => (
                  <div key={word} className="inline-flex gap-4 items-center">
                    <span className="text-white uppercase font-extrabold text-sm">
                      {word}
                    </span>
                    <StarIcon className="size-6 text-white -rotate-12 " />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
