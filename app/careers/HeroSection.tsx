"use client";

// This component shows the hero section with an image and call-to-action
import { motion } from "framer-motion";
import { FiChevronDown, FiChevronRight, FiHome } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CAREERS_CONSTANTS } from "@/constants/careersPage/constants";

export default function HeroSection() {
  const { IMAGE, TITLE, SUBTITLE } = CAREERS_CONSTANTS.HERO;

  // Scrolls to the positions section smoothly
  const scrollToPositions = () => {
    document
      .getElementById("positions")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section>
      <div className="relative h-[500px] overflow-hidden">
        {/* Background image */}
        <Image
          src={IMAGE}
          alt="Office Environment"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#003C46]/85 to-[#0098AF]/70" />
        <div className="absolute inset-0 opacity-5 bg-[url('/images/career-pattern.jpg')] bg-repeat" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-full flex flex-col justify-center">
          {/* Navigation breadcrumbs */}
          <nav className="self-start mb-6 flex items-center space-x-2 text-sm font-light text-white/80">
            <Link
              href="/"
              className="hover:text-[#99D5DF] flex items-center gap-1 transition-colors duration-200"
            >
              <FiHome className="w-4 h-4" /> Home
            </Link>
            <FiChevronRight className="w-4 h-4" />
            <Link
              href="/careers"
              className="hover:text-[#99D5DF] transition-colors duration-200"
            >
              Careers
            </Link>
          </nav>

          {/* Main title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 text-white drop-shadow-md relative">
            {TITLE}
            <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-[#99D5DF] to-transparent" />
          </h1>
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-[#99D5DF]/90 max-w-xl font-light leading-relaxed mb-6">
            {SUBTITLE}
          </p>
          {/* Explore careers button */}
          <Button
            variant="default"
            className="bg-[#0098AF] text-white hover:bg-[#007B8F] px-2 py-1 rounded-lg font-medium shadow-md hover:scale-105 transition-transform duration-200 self-start"
            onClick={scrollToPositions}
          >
            Explore Careers
          </Button>
          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.7, y: 0 }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              repeatType: "reverse",
            }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70"
          >
            <FiChevronDown className="w-6 h-6" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
