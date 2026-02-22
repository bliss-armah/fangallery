"use client";
import React from "react";
import { motion } from "framer-motion";

const portfolioItems = [
  {
    id: 1,
    title: "Nebula Campaign",
    category: "Graphic Design",
    aspect: "aspect-square",
  },
  {
    id: 2,
    title: "Urban Shadows",
    category: "Photography",
    aspect: "aspect-[3/4]",
  },
  {
    id: 3,
    title: "Echoes in Time",
    category: "Videography",
    aspect: "aspect-video",
  },
  {
    id: 4,
    title: "Aurora Branding",
    category: "Graphic Design",
    aspect: "aspect-[4/3]",
  },
  {
    id: 5,
    title: "Midnight Sun",
    category: "Photography",
    aspect: "aspect-[3/4]",
  },
  {
    id: 6,
    title: "The Catalyst",
    category: "Videography",
    aspect: "aspect-square",
  },
];

export const PortfolioShowcase = () => {
  return (
    <section
      id="portfolio"
      className="py-24 px-6 relative z-10 bg-black/40 border-y border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Selected Works
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A curated showcase of our finest creative endeavors.
          </p>
        </motion.div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative group overflow-hidden rounded-xl bg-white/5 border border-white/10 break-inside-avoid shadow-2xl"
            >
              <div
                className={`w-full ${item.aspect} bg-linear-to-br from-white/10 to-transparent flex items-center justify-center p-6 text-center transition-transform duration-700 group-hover:scale-105`}
              >
                <span className="text-white/20 font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Visual Placeholder
                </span>
              </div>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p className="text-sm font-medium text-gray-300 mb-1 tracking-widest uppercase">
                  {item.category}
                </p>
                <h3 className="text-2xl font-bold text-white">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioShowcase;
