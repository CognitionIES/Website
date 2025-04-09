"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PLANT_ENGINEERING_CONSTANTS } from "@/constants/plant-engineering/constants";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutSection() {
  const { DESCRIPTION_1, DESCRIPTION_2, IMAGE } =
    PLANT_ENGINEERING_CONSTANTS.ABOUT;
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
        className="w-full py-16 sm:py-20 lg:py-12 relative bg-gradient-to-b from-white to-[#E6F0F5]/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="mb-8 max-w-7xl">
            <span className="inline-block px-3 py-1 bg-[#0098af]/10 text-[#0098af] text-xs font-medium uppercase tracking-wider rounded-full mb-4">
              Plant Engineering Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#003C46] mb-4">
              Engineering efficiency where it matters most
            </h2>
          </div>

          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <p className="text-lg text-gray-600 mb-6 text-justify leading-relaxed">
                {DESCRIPTION_1}
              </p>
              <p className="text-lg text-gray-600 text-justify leading-relaxed">
                {DESCRIPTION_2}
              </p>
              <div className="mt-4">
                <Link href="/brochure">
                  <Button className="bg-[#0098af] text-white hover:bg-white hover:text-black text-sm sm:text-base px-4 py-2 sm:px-6 sm:py-3 transition-colors duration-200 border-2 border-transparent hover:border-[#0098af] hover:outline hover:outline-2 hover:outline-[#0098af]">
                    Download Brochure
                  </Button>
                </Link>
              </div>
            </div>
            <div className="order-1 md:order-2 relative hidden md:block md:h-[350px] md:w-[555px] rounded-xl shadow-md overflow-hidden justify-self-end">
              <Image
                src={IMAGE}
                alt="Engineering services"
                width={300}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
