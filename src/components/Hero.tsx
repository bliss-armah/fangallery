"use client";
import React from "react";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6 flex justify-center"
        >
          <span className="px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-xs sm:text-sm font-medium tracking-wide text-gray-300">
            A Premium Creative Agency
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-tight text-white mb-6"
        >
          Visual Excellence <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-gray-300 via-white to-gray-500">
            Unleashed.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light mb-10"
        >
          Elevating brands through state-of-the-art Graphic Design, world-class
          Photography, and cinematic Videography.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#portfolio"
            className="px-8 py-4 rounded-full bg-white text-black font-semibold tracking-wide hover:scale-105 transition-transform duration-300"
          >
            View Our Work
          </a>
          <a
            href="#services"
            className="px-8 py-4 rounded-full border border-white/20 text-white font-semibold tracking-wide hover:bg-white/10 transition-colors duration-300 backdrop-blur-md"
          >
            Our Services
          </a>
        </motion.div>
      </div>

      {/* Decorative gradient orb for depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white opacity-5 blur-[150px] rounded-full pointer-events-none" />
    </section>
  );
};

export default Hero;
