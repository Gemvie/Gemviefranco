"use client";
import { useState } from "react";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    alert("Message sent!");
    setShowPopup(false);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div id="contact" className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div
          className="bg-gradient-to-r from-cyan-300 to-orange-400 text-gray-900 py-8 
          px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0"
        >
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{ backgroundImage: `url(${grainImage.src})` }}
          ></div>
          <div className="flex flex-col md:flex-row lg:justify-between gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Let&apos;s Collaborate
              </h2>
              <p className="text-sm md:text-base mt-2">
                Got a project or a cool idea in mind? I&apos;m just a message away!
              </p>
            </div>
            <div>
              <button
                onClick={() => setShowPopup(true)}
                className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl 
                gap-2 w-max border border-gray-900"
              >
                <span className="font-semibold">Get in Touch</span>
                <ArrowUpRightIcon className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div
            className="bg-gradient-to-br from-cyan-300/80 to-orange-400/80 p-8 rounded-3xl 
            w-full max-w-md backdrop-blur-md shadow-xl animate-fade-in"
          >
            <h3 className="text-xl font-bold mb-4 text-gray-900">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="p-3 rounded-md border border-gray-300 text-gray-900"
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-3 rounded-md border border-gray-300 text-gray-900"
                required
              />
              <textarea
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="p-3 rounded-md border border-gray-300 text-gray-900"
                rows={4}
                required
              ></textarea>
              <div className="flex justify-between mt-2">
                <button
                  type="submit"
                  className="bg-gray-900 text-white px-4 py-2 rounded-md"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={() => setShowPopup(false)}
                  className="text-gray-700"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
