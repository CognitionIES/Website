"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiHome, FiChevronRight, FiChevronDown } from "react-icons/fi";
import { PLANT_ENGINEERING_CONSTANTS } from "@/constants/plant-engineering/constants";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const { TITLE, SUBTITLE } = PLANT_ENGINEERING_CONSTANTS.HERO;
  const { FADE_IN } = PLANT_ENGINEERING_CONSTANTS.ANIMATIONS;

  // Explicit background image for Plant Engineering (industrial pipelines)
  const backgroundImage = "https://images.unsplash.com/photo-1471958680802-1345a694ba6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80";

  return (
    <section>
      <div className="relative h-[500px] overflow-hidden">
        {/* Background Image */}
        <Image
          src={backgroundImage}
          alt="Plant Engineering Expertise"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#003C46]/85 to-[#0098AF]/70" />
        <div className="absolute inset-0 opacity-5 bg-[url('/images/plant-pattern.jpg')] bg-repeat" /> {/* Optional pattern */}

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-full flex flex-col justify-center">
          {/* Breadcrumbs */}
          <nav className="self-start mb-6 flex items-center space-x-2 text-sm font-light text-white/80">
            <Link
              href="/"
              className="hover:text-[#99D5DF] flex items-center gap-1 transition-colors duration-200"
            >
              <FiHome className="w-4 h-4" />
              Home
            </Link>
            <FiChevronRight className="w-4 h-4" />
            <Link
              href="/expertise"
              className="hover:text-[#99D5DF] transition-colors duration-200"
            >
              Expertise
            </Link>
            <FiChevronRight className="w-4 h-4" />
            <span>Plant Engineering</span>
          </nav>

          {/* Title */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 text-white drop-shadow-md relative"
            {...FADE_IN}
          >
            {TITLE}
            <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-[#99D5DF] to-transparent" />
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl text-[#99D5DF]/90 max-w-xl font-light leading-relaxed mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {SUBTITLE}
          </motion.p>

          {/* CTA Button */}
          <Button
            variant="default"
            className="bg-[#0098AF] text-white hover:bg-[#007B8F] px-2 py-1 rounded-lg font-medium shadow-md hover:scale-105 transition-transform duration-200 self-start"
            onClick={() =>
              document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Explore Services
          </Button>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.7, y: 0 }}
            transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70"
          >
            <FiChevronDown className="w-6 h-6" />
          </motion.div>
        </div>

        {/* Random Dots and Circles */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.25, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute bottom-0 left-0 w-80 h-80 bg-[#0098AF] opacity-50 rounded-full blur-3xl -z-10"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{
            delay: 1,
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute top-20 right-16 w-5 h-5 bg-[#5B5B5B] opacity-30 rounded-full -z-10"
        />
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 0.05, x: 0 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-32 left-24 w-3 h-3 bg-[#0098AF] opacity-15 rounded-full shadow-[0_0_4px_#0098AF] -z-10"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-20 right-32 w-4 h-4 bg-[#99D5DF] opacity-20 rounded-full -z-10"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ delay: 0.8, duration: 1.2 }}
          className="absolute top-10 left-1/3 w-6 h-6 bg-[#5B5B5B] opacity-25 rounded-full blur-md -z-10"
        />
      </div>
    </section>
  );
}