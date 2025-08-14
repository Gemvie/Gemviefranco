"use client";

import gemvie from "@/assets/images/gemvie.png";
import Image from "next/image";
import { useRef } from "react";
import generatePDF from "react-to-pdf";

const CV = () => {
  const targetRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <main
        ref={targetRef}
        className="max-w-3xl mx-auto p-6 bg-white shadow rounded border border-gray-200 font-sans text-sm leading-snug"
      >
        {/* Profile */}
        <div className="flex flex-col items-center mb-4">
          <Image
            src={gemvie}
            alt="Gemvie Frank Franco"
            className="w-24 h-24 rounded-full object-cover border-2 border-green-600 mb-2"
          />
          <h1 className="text-2xl font-bold text-gray-900 text-center">
            Gemvie Frank Franco
          </h1>
        </div>

        {/* Summary */}
        <section className="mb-4">
          <h2 className="text-lg font-bold border-b-2 border-green-500 pb-1 mb-1 text-green-700">
            Professional Summary
          </h2>
          <p className="text-gray-700">
            Motivated Web Developer, SEO Specialist, Data Specialist, and Video
            Editor with hands-on experience in front-end development, SEO, and
            data management. Skilled in modern web tools, video editing, and
            data entry with strong attention to detail.
          </p>
        </section>

        {/* Education */}
        <section className="mb-4">
          <h2 className="text-lg font-bold border-b-2 border-green-500 pb-1 mb-1 text-green-700">
            Education
          </h2>
          <p className="text-gray-700">
            Bachelor&apos;s Degree (Undergraduate), 3rd Year College (On school
            break)
          </p>
        </section>

        {/* Experience */}
        <section className="mb-4">
          <h2 className="text-lg font-bold border-b-2 border-green-500 pb-1 mb-2 text-green-700">
            Work Experience
          </h2>

          <div className="mb-2">
            <h3 className="font-semibold text-gray-900 text-sm">
              Data Specialist
            </h3>
            <p className="italic text-green-600 text-xs mb-1">3 years</p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Managed large datasets for sports/collectibles</li>
              <li>Performed accurate data entry & cleaning</li>
            </ul>
          </div>

          <div className="mb-2">
            <h3 className="font-semibold text-gray-900 text-sm">
              SEO Specialist
            </h3>
            <p className="italic text-green-600 text-xs mb-1">1 year</p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Implemented SEO strategies to boost visibility</li>
              <li>Conducted keyword research & competitor analysis</li>
            </ul>
          </div>

          <div className="mb-2">
            <h3 className="font-semibold text-gray-900 text-sm">
              Web Developer
            </h3>
            <p className="italic text-green-600 text-xs mb-1">7 months</p>
            <ul className="list-disc list-inside text-gray-700">
              <li>
                Developed responsive websites (Tailwind, HTML5, JS, React)
              </li>
              <li>Built personal projects (e.g. text-to-image app)</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 text-sm">
              Video Editor
            </h3>
            <p className="italic text-green-600 text-xs mb-1">Beginner</p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Edited videos using CapCut & Adobe After Effects</li>
            </ul>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-4">
          <h2 className="text-lg font-bold border-b-2 border-green-500 pb-1 mb-1 text-green-700">
            Skills
          </h2>
          <ul className="list-disc list-inside grid grid-cols-2 gap-x-6 gap-y-1 text-gray-700">
            <li>Tailwind CSS</li>
            <li>HTML5</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>CapCut</li>
            <li>Adobe After Effects</li>
            <li>Microsoft Excel</li>
            <li>SEO (Keyword Research, On-page)</li>
          </ul>
        </section>

        {/* Projects */}
        <section className="mb-4">
          <h2 className="text-lg font-bold border-b-2 border-green-500 pb-1 mb-1 text-green-700">
            Projects
          </h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Data Entry: Alpha & PARA listings</li>
            <li>Web Dev: E-commerce sites, text-to-image app</li>
            <li>Video Editing: Social media promos</li>
          </ul>
        </section>

        {/* Certifications */}
        <section>
          <h2 className="text-lg font-bold border-b-2 border-green-500 pb-1 mb-1 text-green-700">
            Certifications
          </h2>
          <p className="text-gray-700">
            None yet — actively pursuing relevant certifications.
          </p>
        </section>
      </main>

      {/* Download Button */}
      <div className="flex justify-center my-6">
        <button
          onClick={() =>
            generatePDF(targetRef, { filename: "GemvieFrankFranco_CV.pdf" })
          }
          className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded shadow"
        >
          Download CV as PDF
        </button>
      </div>
    </>
  );
};

export default CV;
