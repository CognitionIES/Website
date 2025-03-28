"use client";

import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
import Footer from "@/components/footer";
import { PLANT_ENGINEERING_CONSTANTS } from "@/constants/plant-engineering/constants";
import { HorizontalScrollSection } from "@/components/horizontalScrollSection";
import { useEffect, useState } from "react";
import { ChevronDown, MousePointer2 } from "lucide-react";
//import Link from "next/link";
import frameBackground from "@/constants/images/Background/Frame_8.jpg"; 
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export default function PlantEngineeringDetailsPage() {
  const shouldReduceMotion = useReducedMotion();
  const { ITEMS } = PLANT_ENGINEERING_CONSTANTS.SERVICES;

  // Add IDs to each service item for linking
  const servicesWithIds = ITEMS.map((item, index) => ({
    ...item,
    id: `section-${index + 1}`, // e.g., section-1, section-2, etc.
    bulletPoints: item.bulletPoints || ["Default point 1", "Default point 2"], 
  }));

  // Track the current section in view
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentSection, setCurrentSection] = useState(0);
  const [showScrollHint, setShowScrollHint] = useState(true);

  // Handle hash-based navigation on page load
  useEffect(() => {
    const hash = window.location.hash; // e.g., #section-3
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }

    // Add scroll event listener to track the current section
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sectionHeight = window.innerHeight;
      const sectionIndex = Math.round(scrollPosition / sectionHeight);
      setCurrentSection(sectionIndex);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Hide scroll hint after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowScrollHint(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-y-auto snap-y snap-mandatory">
      {/* Fixed Background Image */}
      <div
        className="fixed inset-0 bg-cover bg-center -z-10"
        style={{
          backgroundImage: `url(${frameBackground.src})`,
        }}
      />

      {/* Main Content */}
      <div className="relative">
        {/* Top navigation - Fixed at the top */}
        <div className="sticky top-0 z-50">
          <MegaMenu />
        </div>

        {/* Sections with snap scrolling */}
        {servicesWithIds.map((service, index) => (
          <div
            key={service.id}
            className="relative min-h-screen w-full flex items-center justify-center snap-start"
          >
            <HorizontalScrollSection
              index={index}
              id={service.id}
              title={service.title}
              description={service.description}
              bulletPoints={service.bulletPoints || ["Default point 1", "Default point 2"]}
              imageUrl={service.image}
            />

            {/* Scroll Indicator (not shown on the last section or footer) */}
            
          </div>
        ))}

    


        {/* Scroll Hint */}
        <AnimatePresence>
          {showScrollHint && (
            <motion.div
              className="fixed bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary/90"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
            >
              <motion.div
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm shadow-lg"
                animate={shouldReduceMotion ? {} : { y: [0, 4, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <MousePointer2 size={16} aria-hidden="true" />
                <span className="text-sm font-medium">Scroll to explore</span>
                <ChevronDown size={16} aria-hidden="true" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    <Footer />
    </div>
    
  );
}