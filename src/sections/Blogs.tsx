"use client";

import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { motion } from "framer-motion";
import { Fragment } from "react";

const blogPosts = [
  {
    title: "Designing for Engagement",
    excerpt:
      "How thoughtful visuals and smooth interactions can keep users hooked on your product.",
    image: "/",
    href: "#",
  },
  {
    title: "The Future of Video Editing",
    excerpt:
      "Short-form vs. long-form, AI tools, and where editing is headed in 2025.",
    image: "/",
    href: "#",
  },
  {
    title: "Building Responsive Portfolios",
    excerpt:
      "A deep dive into making your personal brand shine across devices and platforms.",
    image: "/",
    href: "#",
  },
  {
    title: "Storytelling in Design",
    excerpt:
      "Why the best digital experiences feel like stories rather than just layouts.",
    image: "/",
    href: "#",
  },
];

export const BlogSection = () => {
  return (
    <div id="blogs" className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Ideas & Insights"
          title="From My Notebook"
          description="Thoughts, lessons, and stories that inspire my creative process."
        />

        {/* Mobile = grid-cols-1 with scroll-triggered animations */}
        <div className="mt-12 lg:hidden grid grid-cols-1 gap-6">
          {blogPosts.map((post, idx) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }} // triggers on scroll
            >
              <Card className="p-0 overflow-hidden shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition duration-500">
                <div className="relative w-full h-48 overflow-hidden">
                  <motion.div
                    initial={{ scale: 1.1 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: false }}
                    className="w-full h-full"
                  >
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{post.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{post.excerpt}</p>
                  <a
                    href={post.href}
                    className="mt-3 inline-block text-sm text-blue-400 hover:underline"
                  >
                    Read more →
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Desktop = marquee with hover effects */}
        <div
          className="hidden lg:flex overflow-x-clip 
          [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4 mt-20"
        >
          <div
            className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:80s] 
            hover:[animation-play-state:paused]"
          >
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {blogPosts.map((post) => (
                  <Card
                    key={post.title}
                    className="max-w-xs md:max-w-md p-0 overflow-hidden 
                    bg-gradient-to-b from-gray-900 to-gray-800
                    transition duration-500 hover:-rotate-3 hover:scale-105
                    hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]"
                  >
                    <div className="relative w-full h-48 md:h-56 lg:h-64 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-semibold text-lg md:text-xl">
                        {post.title}
                      </h3>
                      <p className="mt-2 text-sm md:text-base text-white/70">
                        {post.excerpt}
                      </p>
                      <a
                        href={post.href}
                        className="mt-3 inline-block text-sm text-blue-400 hover:underline"
                      >
                        Read more →
                      </a>
                    </div>
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
