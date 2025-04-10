"use client";

import { motion } from "framer-motion";
import { FiChevronDown, FiChevronRight, FiHome } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import HeroImageSm from "@/constants/images/staffing-recruitment/job-seeker-hero-sm.jpg"; // Small screen image
import HeroImageMd from "@/constants/images/staffing-recruitment/job-seeker-hero.jpg"; // Medium screen image
import HeroImageLg from "@/constants/images/staffing-recruitment/job-seeker-hero.jpg"; // Large screen image

export default function Hero() {
  return (
    <section className="relative w-full">
      <div className="relative h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] overflow-hidden">
        {/* Image for small screens (hidden on sm and above) */}
        <Image
          src={HeroImageSm}
          alt="Job Seeker Hero Image Small"
          fill
          className="object-cover object-center block sm:hidden"
          priority
        />
        {/* Image for medium screens (hidden below sm and above md) */}
        <Image
          src={HeroImageMd}
          alt="Job Seeker Hero Image Medium"
          fill
          className="object-cover object-center hidden sm:block md:hidden"
          priority
        />
        {/* Image for large screens (hidden below md) */}
        <Image
          src={HeroImageLg}
          alt="Job Seeker Hero Image Large"
          fill
          className="object-cover object-center hidden md:block"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-br from-[#003C46]/85 via-[#0098AF]/70 to-[#00b4d8]/50" />
        <div className="absolute inset-0 opacity-5 bg-[url('/images/engineering-pattern.jpg')] bg-repeat" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col items-center justify-center text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white drop-shadow-md mb-3 sm:mb-4">
            Your Career. Our Commitment
          </h1>
          <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-light max-w-2xl sm:max-w-3xl mx-auto mb-4 sm:mb-6">
            We’re more than a job board. We’re your career partners. We aim to
            make the job-seeking process easier, smoother, and more transparent
            for everyone.
          </p>
          <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-light max-w-2xl sm:max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16 lg:mb-20">
            Because you’re not just finding a job — you’re stepping into your
            future.
          </p>

          <nav className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 lg:left-6 flex flex-wrap items-center gap-1 sm:gap-2 md:gap-3 text-xs sm:text-sm md:text-base font-light text-white/80 px-2 py-1 sm:px-3 sm:py-2 rounded-full">
            <Link
              href="/"
              className="hover:text-[#5b5b5b] flex items-center gap-1 transition-colors duration-200"
            >
              <FiHome className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" /> Home
            </Link>
            <FiChevronRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
            <Link
              href="/services/staffing"
              className="hover:text-[#5b5b5b] transition-colors duration-200"
            >
              Staffing And Recruitment
            </Link>
            <FiChevronRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
            <Link
              href="/services/staffing/job-seekers"
              className="hover:text-[#5b5b5b] transition-colors duration-200"
            >
              For Job Seekers
            </Link>
          </nav>
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 0.7, y: 0 }}
            transition={{
              repeat: Infinity,
              duration: 1,
              repeatType: "reverse",
            }}
            className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 text-white/70"
          >
            <FiChevronDown className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.25, scale: 1.2 }}
          transition={{
            delay: 0.5,
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute bottom-0 left-0 w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-[#00b4d8] opacity-50 rounded-full blur-3xl -z-10"
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
          className="absolute top-6 sm:top-10 md:top-20 right-2 sm:right-4 md:right-10 w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5 bg-[#5B5B5B] opacity-30 rounded-full -z-10"
        />
      </div>
    </section>
  );
}