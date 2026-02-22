"use client";
import React from "react";
import { motion } from "framer-motion";
import { Camera, Video, Palette } from "lucide-react";

const services = [
  {
    title: "Graphic Design",
    description:
      "Striking visual identities, typography, and premium branding that sets your agency apart.",
    icon: <Palette className="w-8 h-8 text-white" />,
  },
  {
    title: "Photography",
    description:
      "World-class photography capturing the true essence of your moments with unparalleled clarity.",
    icon: <Camera className="w-8 h-8 text-white" />,
  },
  {
    title: "Videography",
    description:
      "Cinematic storytelling and cutting-edge video production that leaves a lasting impression.",
    icon: <Video className="w-8 h-8 text-white" />,
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Our Expertise
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Delivering the highest caliber of creative solutions tailored to
            elevate your brand&apos;s digital presence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
              className="p-8 pb-10 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300 group cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
