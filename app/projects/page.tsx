"use client"; // Mark as Client Component to allow event handlers or interactivity

import React, { useState, useRef, useEffect } from "react";
import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
import Hero from "./hero";
import Footer from "@/components/footer";
import { useIsMobile } from "@/hooks/use-mobile";
import { StaticImageData } from "next/image";
import digitalImage from "@/constants/images/home/our-recent-projects/digitalization.jpg";
import pcmImage2 from "@/constants/images/home/our-recent-projects/pcm.jpg";
import AboutSection from "./about";
import CTASection from "@/components/CTA";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

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

const Projects: React.FC = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const isMobile = useIsMobile();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * index,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <MegaMenu />
      <section className="relative h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px] overflow-hidden">
        <Hero />
      </section>
      <AboutSection />
      <section
        ref={sectionRef}
        className="w-full py-8 sm:py-10 lg:py-12 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-12">
          <h2 className="text-2xl sm:text-xl md:text-2xl lg:text-4xl font-bold text-[#003C46] mb-6 sm:mb-8">
            Recent Projects
          </h2>

          <div className="space-y-6 md:grid md:grid-cols-1 md:gap-6 lg:grid-cols-2 lg:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                <div className="relative h-[150px] sm:h-[200px] md:h-[200px] lg:h-[250px]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 50vw"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <span className="inline-block px-2 sm:px-3 py-1 bg-[#0098af]/10 text-[#0098af] text-xs sm:text-sm font-medium uppercase tracking-wider rounded-full mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-[#003C46] mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <Link
                    href={project.href}
                    className="inline-flex items-center gap-1 sm:gap-1.5 text-sm sm:text-base md:text-lg font-medium text-[#0098af] group relative"
                  >
                    <span className="relative">
                      View in detail
                      <span className="absolute -bottom-px left-0 w-full h-px bg-[#0098af]/50 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                    </span>
                    <ArrowUpRight className="w-4 h-4 sm:w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
      <Footer />
    </div>
  );
};

export default Projects;
