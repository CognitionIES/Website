"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import aboutImage from "@/constants/images/projects/about.jpg";

export default function AboutSection() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting); // Update state when section enters or leaves view
      },
      {
        threshold: 0.2, // Triggers when 20% of the section is visible
        rootMargin: "0px 0px -20% 0px", // Ensures it triggers only when scrolling down into the section
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Animation variants for fade-in and fade-out
  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div>
      <section
        ref={sectionRef}
        className="w-full py-8 sm:py-10 lg:py-6 relative bg-gradient-to-b from-white to-[#E6F0F5]/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="mb-8 max-w-7xl">
            <span className="inline-block px-3 py-1 bg-[#0098af]/10 text-[#0098af] text-xs font-medium uppercase tracking-wider rounded-full mb-4">
              Digitalization
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#003C46] mb-4">
              Project Objective
            </h2>
          </div>

          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="items-center"
          >
            <div className="relative hidden md:block h-[350px] rounded-xl shadow-md overflow-hidden">
              <Image
                src={aboutImage}
                alt="Engineering services"
                width={300}
                height={500}
                className="w-full h-full object-cover"
              />
              {/* Overlay text on top of the image */}
              <div className="absolute  inset-0 bg-black/40 flex flex-col justify-center p-6">
                <div className="w-3/4 sm:px-6 md:px-8 lg:px-12">
                  <h3 className="text-3xl  font-semibold uppercase text-white mb-4">
                    🔍 Background & Challenge
                  </h3>
                  <p className="text-white/90 text-lg text-justify">
                    The client, a reputed manufacturer of industrial chemical,
                    was facing growing challenges in scaling production due to
                    manual processes, lack of visibility into real-time plant
                    performance, and inefficient data communication across
                    departments. Additionally, errors in equipment layout and
                    installation were causing delays and cost overruns.
                  </p>
                  <p className="text-white/90 text-lg text-justify">
                    Cognition IES was approached to lead a complete digital
                    transformation of the plant, with the goal of creating a
                    fully integrated, intelligent digital ecosystem — from
                    layout validation to live production monitoring.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
