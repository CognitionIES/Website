"use client";

import React from "react";
import Image from "next/image";
// import Link from "next/link";
//import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Footer from "@/components/footer";
// import { FiHome, FiChevronRight } from "react-icons/fi";
import pcmOverviewImage from "@/constants/images/projects/pcm-overview.jpg";
import { Award, BarChart3, Cog, Lightbulb, Users } from "lucide-react";
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
  const scaleIn = {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.5 },
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <MegaMenu />
      <Hero />

      {/* Overview Section */}
      <motion.section
        {...fadeInUp}
        id="overview"
        className="py-10 lg:py-14 bg-[#F5F7FA] scroll-mt-20 relative"
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
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
                  <div className="pl-16  ">
                    <Image
                      src={pcmOverviewImage}
                      width={120}
                      height={400}
                      className="rounded-lg shadow-lg"
                      alt="Project overview"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm py-8 shadow-sm p-6 rounded-lg border border-gray-100">
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

      <section
        id="overview"
        className="py-24 scroll-mt-16 relative max-w-7xl mx-auto"
      >
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#0098af]/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#0098af]/30 to-transparent"></div>
        <div className="absolute right-0 inset-y-0 w-1/3 pattern-grid opacity-30"></div>

        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row items-center mb-8">
            <div className="md:w-1/3">
              <span className="inline-block mb-2 text-sm font-semibold text-[#00b4d8] tracking-wider">
                PROJECT OVERVIEW
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#003C46] mb-4">
                Optimizing for{" "}
                <span className="text-gradient">performance</span>
              </h2>
            </div>
            <div className="md:w-2/3 md:pl-12">
              <div className="h-px w-12 bg-[#00b4d8] mb-6 md:hidden"></div>
              <p className="text-lg text-[#5b5b5b] leading-relaxed">
                Our client, a leading manufacturer in the industrial equipment
                sector, specializes in outdoor power tools. They engaged us to
                optimize costs and improve the competitiveness of their Log
                Splitter product line.
              </p>
            </div>
          </div>

          {/* Innovative layout with stacked cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left column: Client & Duration */}
            <div className="space-y-6">
              <motion.div
                className=" bg-white/60 backdrop-blur-md border border-white/20 shadow-md  rounded-2xl p-6 overflow-hidden relative  transition-all duration-300 hover:shadow-lg hover:-translate-y-1 "
                {...scaleIn}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00b4d8] to-transparent"></div>
                <h3 className="text-xl font-semibold text-[#003C46] mb-4 flex items-center">
                  <Users className="w-5 h-5 mr-2 text-[#00b4d8]" />
                  Client
                </h3>
                <p className="text-lg text-[#5b5b5b]">{project.client}</p>
              </motion.div>

              <motion.div
                className=" bg-white/60 backdrop-blur-md border border-white/20 shadow-md  rounded-2xl p-6 overflow-hidden relative  transition-all duration-300 hover:shadow-lg hover:-translate-y-1 "
                {...scaleIn}
                transition={{ delay: 0.1 }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00b4d8] to-transparent"></div>
                <h3 className="text-xl font-semibold text-[#003C46] mb-4 flex items-center">
                  <Cog className="w-5 h-5 mr-2 text-[#00b4d8]" />
                  Project Duration
                </h3>
                <p className="text-lg text-[#5b5b5b]">{project.duration}</p>
              </motion.div>

              <motion.div
                className=" bg-white/60 backdrop-blur-md border border-white/20 shadow-md  rounded-2xl p-6 overflow-hidden relative md:mt-12 lg:mt-24  transition-all duration-300 hover:shadow-lg hover:-translate-y-1 "
                {...scaleIn}
                transition={{ delay: 0.2 }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00b4d8] to-transparent"></div>
                <h3 className="text-xl font-semibold text-[#003C46] mb-4 flex items-center">
                  <Award className="w-5 h-5 mr-2 text-[#00b4d8]" />
                  Project Objectives
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#0098af] mt-2 mr-2"></span>
                    <span>Manufacturing Cost Reduction</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#0098af] mt-2 mr-2"></span>
                    <span>Increase Profit Margins (50% target)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#0098af] mt-2 mr-2"></span>
                    <span>Benchmarking with Competitors</span>
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* Center column: Main image */}
            <motion.div
              className="relative md:col-span-2 lg:translate-y-12"
              {...scaleIn}
              transition={{ delay: 0.3 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={project.overviewImage}
                  alt="Project analysis meeting"
                  width={1200}
                  height={500}
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#003C46]/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    The Challenge
                  </h3>
                  <p className="text-white/90">
                    Analyzing the product&apos;s design, components, and
                    manufacturing costs to identify opportunities for cost
                    reduction without compromising quality and performance.
                  </p>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-6 right-6">
                  <div className="w-16 h-16 rounded-full border-2 border-white/20 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-[#00b4d8]/50 backdrop-blur-sm pulse-slow"></div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-brand p-0.5 rounded-2xl absolute -bottom-4 right-8 shadow-lg">
                <div className="bg-white rounded-2xl p-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#E6F0F5] flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-[#0098af]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#003C46]">
                      Strategic Approach
                    </h4>
                    <p className="text-sm text-[#5b5b5b]">
                      Applied value engineering methodology
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

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
