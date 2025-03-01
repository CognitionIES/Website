"use client";

import Image from "next/image";
import { FiHome, FiChevronRight } from "react-icons/fi";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="relative h-[400px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1581094794329-c8112c4e5190?auto=format&fit=crop&w=2000&q=80"
        alt="Mobility Industry"
        fill
        className="object-cover"
        priority
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#003C46]/90 to-[#0098AF]/80" />

      {/* Hexagonal Pattern Overlay (Subtle) */}
      <div className="absolute inset-0 opacity-5 bg-[url('/images/mobility-pattern.jpg')] bg-repeat" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-full flex flex-col justify-center">
        {/* Breadcrumbs */}
        <nav className="self-start mb-8 flex items-center space-x-2 text-sm font-light text-white opacity-80">
          <Link
            href="/"
            className="hover:text-[#99D5DF] flex items-center gap-1"
          >
            <FiHome className="w-4 h-4" />
            Home
          </Link>
          <FiChevronRight className="w-4 h-4" />
          <Link href="/industries" className="hover:text-[#99D5DF]">
            Industries
          </Link>
          <FiChevronRight className="w-4 h-4" />
          <span>Mobility</span>
        </nav>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-white drop-shadow-md text-sparkle">
          Driving the Future of Mobility
        </h1>
        <p className="text-xl md:text-2xl text-[#99D5DF] max-w-2xl font-light leading-relaxed mb-6">
          Smart, efficient, and sustainable solutions for modern transportation.
        </p>
        <Button
          variant="default"
          className="bg-[#0098AF] text-white hover:bg-[#007B8F] px-4 py-1.5 rounded-md font-medium shadow-md hover:scale-105 transition-transform duration-1000 text-sm max-w-[180px] glow-trail"
          onClick={() =>
            document
              .getElementById("services")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          onMouseEnter={() => {
            const audio = new Audio("/sounds/hover.mp3");
            audio.play();
          }}
        >
          Discover Services
          <motion.span
            initial={{ x: 0 }}
            whileHover={{ x: 2 }}
            transition={{ duration: 1000 }}
            className="inline-block ml-1"
          >
            <FiChevronRight className="w-4 h-4" />
          </motion.span>
        </Button>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1000 }}
          className="absolute bottom-0 left-0 w-32 h-32 bg-[#0098AF] opacity-20 rounded-full blur-xl -z-10"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{
            duration: 1000,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute top-10 right-10 w-5 h-5 bg-[#0098AF] opacity-30 rounded-full"
        />
        <motion.div
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 0.1, rotate: 360 }}
          transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-12 left-12 w-16 h-16 border-2 border-[#0098AF] opacity-20 rounded-full"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{
            duration: 1000,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute top-12 right-12 w-3 h-3 bg-[#5B5B5B] opacity-10 rounded-full shadow-[0_0_4px_#5B5B5B]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.03 }}
          transition={{
            duration: 1000,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute bottom-16 left-16 w-2 h-2 bg-[#0098AF] opacity-15 rounded-full glow-trail"
        />
      
        <motion.span
          initial={{ width: 0 }}
          animate={{ width: "10%" }}
          transition={{ delay: 0.6, duration: 1 }}
          className="block h-0.5 bg-[#0098AF] opacity-60 mt-4 rounded-full ripple"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{
            duration: 1000,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute top-8 left-8 w-2 h-2 bg-[#000000] opacity-5 rounded-full shadow-[0_0_3px_#0098AF] glow-trail"
        />
      </div>
    </div>
  );
}
