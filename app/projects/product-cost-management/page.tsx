"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
//import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Footer from "@/components/footer";
// import { FiHome, FiChevronRight } from "react-icons/fi";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  BarChart3,
  ChevronDown,
  Cog,
  Lightbulb,
  Users,
} from "lucide-react";
import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
import ProjectCTA from "./ProjectCTA";
import ProjectResults from "./result";
import Hero from "./hero";

export default function ProductCostManagement() {
  const project = {
    title: "Log Splitter Cost Optimization",
    subtitle:
      "Engineering innovative solutions for manufacturing efficiency and market competitiveness.",
    description:
      "Our client, a leading manufacturer in the industrial equipment sector, specializes in outdoor power tools including log splitters, pressure washers, and air compressors. They engaged Cognition Engineering Solutions to optimize costs and improve the competitiveness of their Log Splitter product line. The primary goal was to analyze the product's design, components, and manufacturing costs to identify opportunities for cost reduction without compromising quality and performance.",
    heroImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    overviewImage:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
    approachImage:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop",
    resultsImage:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2376&auto=format&fit=crop",
    client: "Leading Industrial Equipment Manufacturer",
    duration: "6 months",
  };

  // Animation Variants
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.2 } },
  };

  // const buttonHover = {
  //   whileHover: { scale: 1.05, transition: { duration: 0.3 } },
  //   whileTap: { scale: 0.95 },
  // };

  // Active Indicator Line Animation for Cards
  const cardHover = {
    whileHover: {
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <MegaMenu />
      <Hero />
      <section className="relative bg-gradient-to-br from-[#003C46] via-[#003C46] to-[#0098af]/90 py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-dot-pattern bg-[length:20px_20px]"></div>

        {/* Subtle animated accent */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00b4d8] via-[#0098af] to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Breadcrumb navigation */}
          <div className="flex items-center space-x-2 text-sm font-medium text-[#E6F0F5]/80 mb-12">
            <Link
              href="/"
              className="hover:text-[#00b4d8] flex items-center gap-1.5 transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </div>

          <div className="max-w-4xl">
            {/* Case study label */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 text-xs font-medium text-white bg-[#0098af]/60 rounded-full uppercase backdrop-blur-sm">
              <Award className="h-3.5 w-3.5" />
              <span>Case Study</span>
            </div>

            {/* Title with decorative underline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {project.title}
              <div className="h-1 w-[150px] bg-gradient-to-r from-[#00b4d8] to-transparent rounded-full mt-4" />
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl max-w-2xl text-[#E6F0F5] font-light mb-8">
              {project.subtitle}
            </p>

            {/* Tags with refined styling */}
            <div className="flex flex-wrap gap-4 mb-10">
              {[
                "Industrial Equipment",
                "Manufacturing",
                "Cost Optimization",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm text-[#E6F0F5]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Key metrics in a horizontal layout */}
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              <div className="bg-white/10 backdrop-blur-sm p-5 rounded-lg border border-white/10">
                <div className="text-sm text-[#E6F0F5]/80 mb-1">Client</div>
                <div className="text-white font-medium">{project.client}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-5 rounded-lg border border-white/10">
                <div className="text-sm text-[#E6F0F5]/80 mb-1">
                  Project Duration
                </div>
                <div className="text-white font-medium">{project.duration}</div>
              </div>
            </div> */}

            {/* CTA button with subtle hover effect */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <button
                onClick={() =>
                  document
                    .getElementById("overview")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="flex items-center gap-2 px-6 py-3 bg-white text-[#003C46] rounded-full hover:bg-[#E6F0F5] transition-colors duration-300"
              >
                <span>Explore Case Study</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>
          </div>

          {/* Scroll indicator with reduced animation */}
          <div className="absolute  left-1/2 transform -translate-x-1/2 z-10 hidden sm:block">
            <button
              onClick={() =>
                document
                  .getElementById("overview")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="rounded-full w-10 h-10 bg-white text-[#0098af] shadow-md hover:bg-[#E6F0F5] transition-colors duration-200 flex items-center justify-center"
            >
              <ChevronDown className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <motion.section
        {...fadeInUp}
        id="overview"
        className="py-20 lg:py-28 bg-[#F5F7FA] scroll-mt-20 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="mb-4">
            <h2 className="text-4xl lg:text-5xl font-semibold text-[#5b5b5b]">
              Project Overview
            </h2>
          </div>

          {/* Subheading */}
          <h3 className="text-2xl text-[#5b5b5b] mb-10">
            Optimizing cost and competitiveness in industrial equipment
            manufacturing
          </h3>

          {/* Two-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg text-[#5b5b5b] text-justify">
                Our client, a leading manufacturer in the industrial equipment
                sector, specializes in outdoor power tools including log
                splitters, pressure washers, and air compressors. They engaged
                Cognition Engineering Solutions to optimize costs and improve
                the competitiveness of their Log Splitter product line.
              </p>
              <p className="text-lg text-[#5b5b5b] text-justify">
                The primary goal was to analyze the product&apos;s design,
                components, and manufacturing costs to identify opportunities
                for cost reduction without compromising quality and performance.
              </p>
              <div className="mt-6 relative rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={project.overviewImage}
                  alt="Team analyzing equipment"
                  width={600}
                  height={350}
                  className="object-cover w-full h-[250px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white text-sm font-medium">
                  Product analysis meeting
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white/80 backdrop-blur-sm shadow-sm p-6 rounded-lg border border-gray-100">
                <h3 className="text-xl font-medium mb-4 text-[#003C46]">
                  Project Objectives
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-[#0098af] mr-2">⦿</span>
                    <span>Manufacturing Cost Reduction</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0098af] mr-2">⦿</span>
                    <span>Increase Profit Margins (50% target)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0098af] mr-2">⦿</span>
                    <span>Benchmarking with Competitors</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0098af] mr-2">⦿</span>
                    <span>Improve Quality and Processes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0098af] mr-2">⦿</span>
                    <span>Factor of Safety Validation</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/80 backdrop-blur-sm shadow-sm p-6 rounded-lg border border-gray-100">
                <h3 className="text-xl font-medium mb-4 text-[#003C46]">
                  Project Metrics
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-[#E6F0F5] rounded-lg">
                    <div className="text-sm text-[#5b5b5b]/80">Client</div>
                    <div className="font-medium text-[#003C46]">
                      {project.client}
                    </div>
                  </div>
                  <div className="p-4 bg-[#E6F0F5] rounded-lg">
                    <div className="text-sm text-[#5b5b5b]/80">Duration</div>
                    <div className="font-medium text-[#003C46]">
                      {project.duration}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Approach Section */}
      <motion.section
        {...fadeInUp}
        id="approach"
        className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-[#F5FDFF] relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#5b5b5b]">
              Our Approach
            </h2>
          </div>
          <h3 className="text-2xl font-semibold text-[#5b5b5b] mb-12">
            Applying engineering expertise to drive tangible business results
          </h3>

          <div className="mb-12 relative rounded-xl overflow-hidden shadow-xl">
            <Image
              src={project.approachImage}
              alt="Engineering approach"
              width={1200}
              height={400}
              className="object-cover w-full h-[300px]"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#003C46]/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white max-w-lg">
              <h4 className="text-2xl font-semibold mb-2">
                Systematic Analysis
              </h4>
              <p className="text-white/90">
                Our engineering team systematically evaluated every component to
                identify optimization opportunities
              </p>
            </div>
          </div>

          <motion.div
            {...staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {[
              {
                icon: BarChart3,
                title: "Cost Analysis & Optimization",
                points: [
                  "Thorough review of material costs and design efficiency",
                  "Value engineering principles to identify savings",
                  "Implemented should-costing methodologies",
                ],
              },
              {
                icon: Cog,
                title: "Physical Benchmarking",
                points: [
                  "Hands-on analysis of competitor equipment",
                  "Comparison of performance and material choices",
                  "Reverse engineering to understand cost structures",
                ],
              },
              {
                icon: Lightbulb,
                title: "Applied VAVE Method",
                points: [
                  "Value Analysis/Value Engineering methodology",
                  "Enhanced product value while reducing unnecessary costs",
                  "Phased approach with regular feedback loops",
                ],
              },
              {
                icon: Users,
                title: "Cross-Functional Collaboration",
                points: [
                  "Engaged with client teams across departments",
                  "Facilitated workshops to implement opportunities",
                  "Provided training for continuous improvement",
                ],
              },
            ].map((approach) => (
              <motion.div
                key={approach.title}
                {...fadeInUp}
                {...cardHover}
                className="relative bg-white p-6 rounded-xl shadow-md transition-all duration-300 group overflow-hidden"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#E6F0F5] rounded-full flex items-center justify-center">
                    <approach.icon className="h-6 w-6 text-[#0098af]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#5b5b5b] mb-4">
                      {approach.title}
                    </h3>
                    <ul className="space-y-2 text-lg text-[#5b5b5b]">
                      {approach.points.map((point) => (
                        <li key={point} className="flex items-start">
                          <span className="w-2 h-2 bg-[#0098af] rounded-full mt-2 mr-3" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>{" "}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#0098af]/75 group-hover:w-full transition-all duration-700" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Results & Impact Section */}
      <ProjectResults />
      {/* Call to Action Section */}

      <ProjectCTA />
      <Footer />
    </div>
  );
}
