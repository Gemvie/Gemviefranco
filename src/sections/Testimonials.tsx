import Image from "next/image";
import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { Fragment } from "react";



const testimonials = [
  {
    name: "Aigem F.",
    position: "Creative Director (Mock Feedback)",
    text: "Clean cuts, smooth transitions, and a keen eye for pacing — the video work hit all the right notes.",
    avatar: memojiAvatar1,
  },
  {
    name: "Frank F.",
    position: "Founder, Concept Studio",
    text: "Visually sharp and technically smooth. The website felt intuitive and responsive across all devices.",
    avatar: memojiAvatar2,
  },
  {
    name: "Marvee F.",
    position: "Product Designer (Fictional Project)",
    text: "The edits were thoughtful and on-brand. If this were a real collaboration, I'd hire again in a heartbeat.",
    avatar: memojiAvatar3,
  },
  {
    name: "Gem F.",
    position: "Brand Strategist (Sample Feedback)",
    text: "The attention to detail in both visuals and user flow showed a strong understanding of digital design principles.",
    avatar: memojiAvatar4,
  },
  {
    name: "Aiza T.",
    position: "Creative Lead, Demo Campaign",
    text: "Professional, versatile, and quick to adapt. The creative work speaks for itself — polished and purposeful.",
    avatar: memojiAvatar5,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Impressions & Experiences"
          title="What Collaborators Might Say"
          description="Inspired by my personal projects and hands-on process."
        />
        <div
          className="mt-12 lg:mt-20 flex overflow-x-clip 
        [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4"
        >
          <div
            className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] 
          hover:[animation-play-state:paused]"
          >
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {testimonials.map((testimonial) => (
                    <Card
                      key={testimonial.name}
                      className="max-w-xs md:max-w-md p-6
               md:p-8 hover:-rotate-3 transition duration-300"
                    >
                      <div className="flex gap-4 items-center">
                        {/* Avatar with border and circle */}
                        <div
                          className="size-14 bg-gray-700 inline-flex items-center justify-center
                   rounded-full flex-shrink-0"
                        >
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="max-h-full"
                          />
                        </div>

                        {/* Name and position */}
                        <div>
                          <div className="font-semibold">
                            {testimonial.name}
                          </div>
                          <div className="text-sm text-white/40">
                            {testimonial.position}
                          </div>
                        </div>
                      </div>

                      {/* Testimonial text */}
                      <p className="mt-4 md:mt-6 text-sm md:text-base">
                        {testimonial.text}
                      </p>
                    </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


