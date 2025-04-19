/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState, useRef, useEffect } from "react";
import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
import Hero from "./hero";
import Footer from "@/components/footer";
import { useIsMobile } from "@/hooks/use-mobile";
import { StaticImageData } from "next/image";
import digitalImage from "@/constants/images/home/our-recent-projects/digitalization.jpg";
import pcmImage2 from "@/constants/images/home/our-recent-projects/digitalization.jpg";

import AboutSection from "./about";
import CTASection from "@/components/CTA";

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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();
  const visibleProjects = isMobile ? 1 : 2;

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
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1 >= projects.length ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 < 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <MegaMenu />
      <section className="relative h-[450px] overflow-hidden">
        <Hero />
      </section>
      <AboutSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Projects;
