"use client";

// Component Purpose: Displays company stats with a background pattern
import { motion } from "framer-motion";
import Image from "next/image";
import { ABOUT_CONSTANTS } from "@/constants/aboutPage/constants";

export default function StatsSection() {
  const { IMAGES, STATS, ANIMATIONS } = ABOUT_CONSTANTS;

  return (
    <section className="py-24 bg-[#5B5B5B] text-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 tracking-tight">
          Our Impact
        </h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={ANIMATIONS.STAGGER_CHILDREN}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {STATS.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-[#5B5B5B] bg-opacity-60 rounded-lg shadow-lg border-2 border-[#0098AF] opacity-100 relative overflow-hidden"
            >
              <h3 className="text-5xl font-bold mb-2">{item.stat}</h3>
              <p className="text-lg font-light">{item.label}</p>
            </div>
          ))}
        </motion.div>
        <div className="absolute inset-0 opacity-10">
          <Image
            src={IMAGES.TECH_PATTERN}
            alt="Tech Pattern"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
}
