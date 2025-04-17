"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import aboutImage from "@/constants/images/projects/pcm/project-overview.jpg";

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
        className="w-full py-8 sm:py-14 lg:py-6 mt-6 relative bg-gradient-to-b from-white to-[#E6F0F5]/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Mobile version - Visible only on small screens */}
          <div className="md:hidden rounded-xl shadow-md overflow-hidden mb-8">
            <div className="relative h-[200px]">
              <Image
                src={aboutImage}
                alt="Engineering services"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-[#003C46] p-4">
              <h3 className="text-xl font-semibold uppercase text-white mb-2">
                🏢 Client Profile
              </h3>
              <p className="text-white/90 text-sm">
                The client, a reputed manufacturer of industrial chemical, was
                facing growing challenges in scaling production due to manual
                processes, lack of visibility into real-time plant performance,
                and inefficient data communication across departments.
              </p>
              <p className="text-white/90 text-sm mt-2">
                Cognition IES was approached to lead a complete digital
                transformation of the plant, with the goal of creating a fully
                integrated, intelligent digital ecosystem — from layout
                validation to live production monitoring.
              </p>
            </div>
          </div>

          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="items-center"
          >
            <div className="relative hidden md:block h-[500px] rounded-xl shadow-md overflow-hidden">
              <Image
                src={aboutImage}
                alt="Engineering services"
                width={300}
                height={500}
                className="w-full h-full object-cover"
              />
              {/* Overlay text on top of the image */}
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center p-6">
                <div>
                  <div className="w-3/4 sm:px-6 md:px-8 lg:px-12">
                    <h3 className="text-3xl font-semibold uppercase text-white mb-4">
                      🏢 Client Profile
                    </h3>
                    <p className="text-white/90 mr-20 text-lg text-justify">
                      Our client is a leading manufacturer in the industrial
                      equipment sector, known for delivering high-performance
                      outdoor power tools such as log splitters, pressure
                      washers, and air compressors. Serving both commercial and
                      residential markets, the client holds a reputable market
                      presence in North America. With a focus on maintaining
                      competitive advantage, they partnered with Cognition
                      Engineering Solutions to drive product cost optimization
                      and design innovation for their Log Splitter product line.{" "}
                    </p>
                    <h3 className="text-3xl mt-8 font-semibold uppercase text-white mb-4">
                      🎯 Project Overview
                    </h3>
                    <p className="text-white/90 mr-20 text-lg text-justify">
                      The engagement was aimed at a complete cost transformation
                      and design refinement of the Log Splitter lineup. The key
                      was to maintain product quality and safety while achieving
                      substantial cost reductions and improving margin.
                      Cognition’s unique PCM (Product Cost Management) approach
                      was adopted to uncover inefficiencies, benchmark
                      competitors, and propose high-impact design optimizations.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
