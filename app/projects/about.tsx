"use client";

import { motion } from "framer-motion";
import { StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";
//import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import digitalImage from "@/constants/images/projects/digitalization.jpg";
import pcmImage2 from "@/constants/images/home/pcm-2.jpg";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string | StaticImageData;
  href: string;
};

const projects: Project[] = [
  {
    id: "project-1",
    title: "Digitalization",
    category: "Digital Transformation",
    description:
      "Comprehensive Digital Transformation of a Manufacturing Plant through 3D Scanning, Digital Twin, and Real-Time Data Integration to Improve Efficiency and Accuracy.",
    image: digitalImage,
    href: "/projects/digitalization",
  },
  {
    id: "project-2",
    title: "Log Splitter Cost Optimization & Benchmarking",
    category: "Financial Optimization",
    description:
      "Conducted a detailed cost and function analysis of the Log Splitter, identifying cost-saving opportunities through competitive benchmarking and design optimization.",
    image: pcmImage2,
    href: "/projects/product-cost-management",
  },
];
export default function AboutSection() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = useIsMobile();
  const visibleProjects = isMobile ? 1 : 2;

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1 >= projects.length ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 < 0 ? projects.length - 1 : prev - 1));
  };

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
  //   const contentVariants = {
  //     hidden: { opacity: 0, y: 50 },
  //     visible: {
  //       opacity: 1,
  //       y: 0,
  //       transition: {
  //         duration: 0.8,
  //         ease: "easeOut",
  //       },
  //     },
  //   };

  return (
    <div>
      <section
        ref={sectionRef}
        className="w-full py-16 sm:py-20 lg:py-12 relative bg-gradient-to-b from-white to-[#E6F0F5]/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Section header */}
          <div className="inline-block mb-1 bg-[#E6F0F5] bg-opacity-70 rounded-full backdrop-blur-sm px-3 py-1">
            <p className="text-xs font-medium tracking-wider text-[#0098af] uppercase">
              Featured Work
            </p>
          </div>
          <h1 className="text-xl sm:text-2xl lg:text-4xl font-semibold text-[#003C46] tracking-tight drop-shadow-sm">
            Recent Projects
          </h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 sm:mb-6"
          ></motion.div>

          {/* Projects grid with navigation */}
          <div className="relative max-w-7xl">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out gap-4 sm:gap-6 lg:gap-6"
                style={{
                  transform: `translateX(-${
                    activeIndex * (100 / visibleProjects)
                  }%)`,
                }}
              >
                {projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }
                    }
                    transition={{ duration: 0.25, delay: 0.2 + index * 0.1 }}
                    className={cn(
                      "project-card flex-shrink-0 w-full",
                      isMobile ? "w-full" : "w-1/2"
                    )}
                    whileHover={{ y: -5 }}
                  >
                    <div className="group h-full bg-white/30 rounded-xl overflow-hidden shadow-sm border border-gray-100">
                      {/* Image container */}
                      <div className="relative h-[180px] sm:h-[240px] w-full overflow-hidden">
                        <div
                          className="image-hover-scale absolute inset-0 bg-cover bg-center h-full w-full"
                          style={{
                            backgroundImage: `url(${
                              typeof project.image === "string"
                                ? project.image
                                : project.image.src
                            })`,
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-60 group-hover:opacity-70 transition-opacity" />
                        <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                          <div className="px-2 sm:px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full">
                            <p className="text-[10px] sm:text-xs font-medium text-[#003C46]">
                              {project.category}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-4 sm:p-6 space-y-2 sm:space-y-3">
                        <h3 className="text-lg sm:text-2xl font-semibold text-[#5b5b5b] group-hover:text-[#0098af] transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 line-clamp-3  text-sm sm:text-base  leading-relaxed">
                          {project.description}
                        </p>
                        <a
                          href={project.href}
                          className="inline-flex items-center gap-1.5 text-sm sm:text-base font-medium text-[#0098af] group relative"
                        >
                          <span className="relative">
                            View in detail
                            <span className="absolute -bottom-px leftgap- left-0 w-full h-px bg-[#0098af]/50 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                          </span>
                          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Navigation buttons (mobile only) */}
            {isMobile && (
              <div className="flex justify-between mt-4 sm:hidden">
                <Button
                  variant="outline"
                  className="p-2 rounded-full bg-white border-[#0098af] text-[#0098af] hover:bg-[#0098af] hover:text-white transition-colors"
                  onClick={handlePrev}
                  aria-label="Previous project"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  className="p-2 rounded-full bg-white border-[#0098af] text-[#0098af] hover:bg-[#0098af] hover:text-white transition-colors"
                  onClick={handleNext}
                  aria-label="Next project"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
