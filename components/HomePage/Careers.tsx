"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CAREERS_CONSTANTS } from "@/constants/home/careers";

// Define types for props and constants
interface CareersContent {
  IMAGE: string;
  SUBTITLE: string;
  DESCRIPTION: string;
}

// Animation variants for consistent motion
const motionVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Configuration for responsive design
const responsiveConfig = {
  sectionPadding: "py-8 sm:py-12 md:py-16 lg:py-24",
  containerPadding: "px-4 sm:px-6 md:px-8 lg:px-12",
  gap: "gap-4 sm:gap-6 md:gap-8 lg:gap-12",
  imageSize: {
    width: 1500,
    height: 350,
    className: "w-full h-[150px] sm:h-[250px] md:h-[350px] lg:h-[450px]",
  },
  overlayPosition: "bottom-2 right-2 sm:bottom-4 sm:right-4 md:bottom-6 md:right-6",
  badgePosition: "top-4 right-4 sm:top-8 sm:right-8 md:top-12 md:right-12 lg:right-40",
};

// Main Careers component
const Careers: React.FC = () => {
  const { IMAGE, SUBTITLE, DESCRIPTION } =
    CAREERS_CONSTANTS as unknown as CareersContent;

  return (
    <section
      className={`w-full ${responsiveConfig.sectionPadding} bg-gradient-to-b from-white to-[#E6F0F5]/20 relative overflow-hidden`}
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-[#0098af]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-40 sm:w-56 md:w-72 h-40 sm:h-56 md:h-72 bg-[#0098af]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Content Container */}
      <div className={`max-w-7xl mx-auto ${responsiveConfig.containerPadding}`}>
        {/* "We're Hiring" Badge - Positioned Absolutely */}
        <div className={`absolute ${responsiveConfig.badgePosition}`}>
          <span className="inline-block px-2 py-1 sm:px-3 sm:py-1.5 bg-[#0098af]/10 text-[#0098af] text-xs sm:text-sm font-medium uppercase tracking-wider rounded-full">
            We&apos;re Hiring
          </span>
        </div>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 ${responsiveConfig.gap} items-center`}
        >
          {/* Image Section */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={IMAGE}
                alt="Team collaborating in office"
                width={responsiveConfig.imageSize.width}
                height={responsiveConfig.imageSize.height}
                className={`${responsiveConfig.imageSize.className} object-cover transition-transform duration-300 hover:scale-105`}
                priority
              />
              {/* Decorative Overlay - Bottom Right Corner */}
              <div
                className={`absolute ${responsiveConfig.overlayPosition} bg-white/90 backdrop-blur-sm p-1.5 sm:p-2 md:p-3 rounded-xl shadow-md`}
              >
                <p className="text-xs sm:text-sm md:text-base font-medium text-[#003C46] italic">
                  Building the future together
                </p>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={motionVariants}
            viewport={{ once: true }}
            className="order-2 md:order-1 mt-4 md:mt-0"
          >
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#003C46] leading-tight">
                Join Our Team
              </h2>
              <h3 className="text-base sm:text-lg md:text-xl text-gray-600 font-medium leading-snug">
                {SUBTITLE}
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 text-justify leading-relaxed">
                {DESCRIPTION}
              </p>
              <div className="pt-2 text-right">
                <Link href="/careers">
                  <Button className="group bg-[#0098af] text-white hover:bg-white hover:text-[#003C46] text-xs sm:text-sm md:text-base font-medium transition-all duration-300 border-2 border-transparent hover:border-[#0098af] rounded-xl px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 h-8 sm:h-9 md:h-10 shadow-md hover:shadow-lg">
                    <span>Opportunities</span>
                    <ArrowRight className="ml-1 sm:ml-2 h-3 sm:h-4 md:h-5 w-3 sm:w-4 md:w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-6 sm:mt-10 md:mt-12 lg:mt-16 h-[2px] w-full max-w-3xl mx-auto bg-gradient-to-r from-transparent via-[#0098af]/50 to-transparent" />
    </section>
  );
};

export default Careers;