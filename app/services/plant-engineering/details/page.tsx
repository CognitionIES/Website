"use client";

import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
import Footer from "@/components/footer";
import { PLANT_ENGINEERING_CONSTANTS } from "@/constants/plant-engineering/constants";
import { HorizontalScrollSection } from "@/components/horizontalScrollSection";
import { useEffect, useState, useRef } from "react";
import { ChevronDown, MousePointer2 } from "lucide-react";
import frameBackground from "@/constants/images/Background/Frame_8.jpg";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export default function PlantEngineeringDetailsPage() {
  const shouldReduceMotion = useReducedMotion();
  const { ITEMS } = PLANT_ENGINEERING_CONSTANTS.SERVICES;
  const [showScrollHint, setShowScrollHint] = useState(true);
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Add IDs and normalize bullet points
  const servicesWithIds = ITEMS.map((item, index) => ({
    ...item,
    id: `section-${index + 1}`,
    bulletPoints: (
      item.bulletPoints || ["Default point 1", "Default point 2"]
    ).map((point: string | { mainTopic: string; subPoints?: string[] }) =>
      typeof point === "string"
        ? { mainTopic: point, subPoints: [] }
        : { mainTopic: point.mainTopic, subPoints: point.subPoints || [] }
    ),
  }));

  // Handle hash-based navigation and initial setup
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        const index = servicesWithIds.findIndex(
          (service) => service.id === hash.slice(1)
        );
        if (index !== -1) setCurrentSection(index);
      }
    }

    const timer = setTimeout(() => setShowScrollHint(false), 5000);
    return () => clearTimeout(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Scroll to a specific section
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const scrollToSection = (index: number) => {
    if (index < 0 || index >= sectionRefs.current.length || isScrolling) return;
    setIsScrolling(true);
    setCurrentSection(index);
    sectionRefs.current[index]?.scrollIntoView({
      behavior: shouldReduceMotion ? "auto" : "smooth",
    });
  };

  // Wheel and keyboard navigation
  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (isScrolling) return;
      event.preventDefault();
      setIsScrolling(true);
      const direction = event.deltaY > 0 ? 1 : -1;
      const nextSection = Math.max(
        0,
        Math.min(sectionRefs.current.length - 1, currentSection + direction)
      );
      scrollToSection(nextSection);
    };

    const handleKeydown = (event: KeyboardEvent) => {
      if (isScrolling) return;
      if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        event.preventDefault();
        setIsScrolling(true);
        const direction = event.key === "ArrowDown" ? 1 : -1;
        const nextSection = Math.max(
          0,
          Math.min(sectionRefs.current.length - 1, currentSection + direction)
        );
        scrollToSection(nextSection);
      }
    };

    const handleScrollEnd = () => setIsScrolling(false);

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeydown);
    window.addEventListener("scrollend", handleScrollEnd);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeydown);
      window.removeEventListener("scrollend", handleScrollEnd);
    };
  }, [currentSection, isScrolling, scrollToSection]);

  return (
    <div className="relative min-h-screen overflow-y-auto snap-y snap-mandatory">
      <div
        className="fixed inset-0 bg-cover bg-center -z-10"
        style={{ backgroundImage: `url(${frameBackground.src})` }}
      />
      <div className="relative">
        <div className="sticky top-0 z-50">
          <MegaMenu />
        </div>
        {servicesWithIds.map((service, index) => (
          <div
            key={service.id}
            ref={(el) => {
              sectionRefs.current[index] = el;
            }}
            className="relative min-h-screen w-full flex items-center justify-center snap-start"
          >
            <HorizontalScrollSection
              index={index}
              id={service.id}
              title={service.title}
              bulletPoints={service.bulletPoints}
              imageUrl={service.image}
            />
          </div>
        ))}
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
