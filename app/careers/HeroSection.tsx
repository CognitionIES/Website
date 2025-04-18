"use client";

import { motion } from "framer-motion";
import { FiChevronDown, FiChevronRight, FiHome } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

// Assuming HeroCareerImg is an imported image or a path
import HeroCareerImg from "@/constants/images/career/hero.jpg";

const CAREERS_CONSTANTS = {
  HERO: {
    IMAGE: HeroCareerImg, // Local image path or imported asset
    TITLE: "Join Our Team",
    SUBTITLE:
      "Shape the future with us. We’re seeking passionate innovators to join our journey.",
    TAGS: "#ComeJoinUs in #EngineeringABetterWorld",
  },
};

export default function HeroSection() {
  const { IMAGE, TITLE, SUBTITLE, TAGS } = CAREERS_CONSTANTS.HERO;

  // Scroll to positions section smoothly
  const scrollToPositions = () => {
    const positionsSection = document.getElementById("positions");
    if (positionsSection) {
      positionsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative">
      {/* Hero Container */}
      <div className="relative h-[70vh] min-h-[400px] max-h-[750px] overflow-hidden">
        {/* Background Image */}
        <Image
          src={IMAGE}
          alt="Vibrant Office Environment"
          fill
          className="object-cover object-center"
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 90vw, 1280px"
          quality={80} // Slightly reduced for performance
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#003C46]/90 via-[#003C46]/70 to-[#0098AF]/60" />
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 bg-[url('/images/career-pattern.jpg')] bg-repeat" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col items-center justify-center text-center">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white drop-shadow-lg mb-3 sm:mb-4 md:mb-6 leading-tight"
          >
            {TITLE}
          </motion.h1>
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-white/90 text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-light max-w-3xl xs:max-w-4xl mx-auto mb-4 sm:mb-6 md:mb-8 leading-relaxed"
          >
            {SUBTITLE}
          </motion.p>
          {/* Tags */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-white/80 text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-medium max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-10"
          >
            {TAGS}
          </motion.p>
        </div>

        {/* Breadcrumb Navigation */}
        <div className="relative z-30 max-w-7xl mx-auto ">
          <nav className="absolute bottom-4 xs:bottom-6 sm:bottom-8 left-0 mb-4 xs:mb-6 flex items-center  sm:px-6 lg:px-12 space-x-1 xs:space-x-2 text-xs xs:text-sm sm:text-base font-light text-white/80">
            <FiHome className="w-3 xs:w-4 h-3 xs:h-4"/>
            <Link
              href="/"
              className="hover:text-[#99D5DF] flex items-center gap-1 transition-colors duration-200"
            >
              Home
            </Link>
            <FiChevronRight className="w-3 xs:w-4 h-3 xs:h-4" />
            <Link
              href="/services/staffing"
              className="hover:text-[#99D5DF] transition-colors duration-200"
            >
              Staffing
            </Link>
            <FiChevronRight className="w-3 xs:w-4 h-3 xs:h-4" />
            <Link
              href="/services/staffing/job-seekers"
              className="hover:text-[#99D5DF] transition-colors duration-200"
            >
              Job Seekers
            </Link>
          </nav>
        </div>
        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.7, y: 0 }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="absolute bottom-4 xs:bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 cursor-pointer"
          onClick={scrollToPositions}
        >
          <FiChevronDown className="w-5 xs:w-6 sm:w-8 h-5 xs:h-6 sm:h-8" />
        </motion.div>
      </div>
    </section>
  );
}