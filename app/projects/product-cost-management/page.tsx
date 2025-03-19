"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
import Footer from "@/components/footer";
import {
  ArrowRightIcon,
  ChartBarIcon,
  ChevronDownIcon,
  CogIcon,
  LightBulbIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";
import { FiHome, FiChevronRight } from "react-icons/fi";

export default function ProductCostManagement() {
  const project = {
    title: "Log Splitter Cost Optimization",
    subtitle:
      "Engineering innovative solutions for manufacturing efficiency and market competitiveness.",
    description:
      "Our client, a leading manufacturer in the industrial equipment sector, specializes in outdoor power tools including log splitters, pressure washers, and air compressors. They engaged Cognition Engineering Solutions to optimize costs and improve the competitiveness of their Log Splitter product line. The primary goal was to analyze the product’s design, components, and manufacturing costs to identify opportunities for cost reduction without compromising quality and performance.",
    heroImage: "/path/to/hero-log-splitter.jpg",
    overviewImage: "/path/to/log-splitter-overview.jpg",
    approachImage: "/path/to/approach-gear.jpg",
    resultsImage: "/path/to/results-image.jpg",
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

  const buttonHover = {
    whileHover: { scale: 1.05, transition: { duration: 0.3 } },
    whileTap: { scale: 0.95 },
  };

  // Active Indicator Line Animation for Cards
  const cardHover = {
    whileHover: {
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <MegaMenu />

      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0">
          <Image
            src={project.heroImage}
            alt="Log Splitter Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#003C46]/85 to-[#0098AF]/70" />
          <div className="absolute inset-0 opacity-5 bg-[url('/images/pattern.jpg')] bg-repeat" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-full flex flex-col justify-center">
          <nav className="self-start mb-6 flex items-center space-x-2 text-sm font-light text-white/80">
            <Link
              href="/"
              className="hover:text-[#99D5DF] flex items-center gap-1 transition-colors duration-200"
            >
              <FiHome className="w-4 h-4" /> Home
            </Link>
            <FiChevronRight className="w-4 h-4" />
            <Link
              href="/log-splitter-cost-optimization"
              className="hover:text-[#99D5DF] transition-colors duration-200"
            >
              Log Splitter Cost Optimization
            </Link>
          </nav>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-block px-3 py-1 mb-6 text-xs font-medium text-white bg-[#0098AF]/50 rounded-full uppercase">
              Case Study
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight relative">
              {project.title}
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-[#99D5DF] to-transparent" />
            </h1>
            <p className="mt-4 text-lg sm:text-xl lg:text-2xl max-w-2xl mx-auto text-[#99D5DF]/90 font-light">
              {project.subtitle}
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              {[
                "Industrial Equipment",
                "Manufacturing",
                "Cost Optimization",
              ].map((tag) => (
                <span
                  key={tag}
                  className="flex items-center text-sm text-[#99D5DF]/90 font-light"
                >
                  <span className="w-2 h-2 rounded-full bg-[#99D5DF] inline-block mr-2" />
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
            <button
              onClick={() =>
                document
                  .getElementById("overview")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="rounded-full w-12 h-12 bg-white text-[#0098AF] shadow-lg hover:bg-[#E6F4FA] transition-all duration-300 border border-[#E6F4FA]"
            >
              <ChevronDownIcon className="h-6 w-6 mx-auto" />
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
          {/* Horizontal Line */}
          <div className="w-12 h-[2px] bg-[#0098AF] rounded-full mb-2"></div>

          {/* Heading */}
          <div className="mb-4">
            <h2 className="text-4xl lg:text-5xl font-semibold text-[#5B5B5B]">
              Project Overview
            </h2>
          </div>

          {/* Subheading */}
          <h3 className="text-2xl  text-[#5B5B5B] mb-10">
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
              Cognition Engineering Solutions to optimize costs and improve the
              competitiveness of their Log Splitter product line.
            </p>
            <p className="text-lg text-[#5b5b5b] text-justify">
              The primary goal was to analyze the product&apos;s design,
              components, and manufacturing costs to identify opportunities for
              cost reduction without compromising quality and performance.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white/80 backdrop-blur-sm shadow-sm p-6 rounded-lg border border-gray-100">
              <h3 className="text-xl font-medium mb-4 text-brand-darkGray">
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
          </div>
        </div>
        </div>
      </motion.section>

      {/* Approach Section */}
      <motion.section
        {...fadeInUp}
        id="approach"
        className="py-20 lg:py-28 bg-gradient-to-br bg-gradient-to-b from-gray-50 to-[#F5FDFF] relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-12 h-1 bg-[#0098AF] rounded-full mr-4"></div>
          <div className="flex items-center mb-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#5B5B5B]">
              Our Approach
            </h2>
          </div>
          <h3 className="text-2xl font-semibold text-[#5B5B5B] mb-12">
            Applying engineering expertise to drive tangible business results
          </h3>
          <motion.div
            {...staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {[
              {
                icon: ChartBarIcon,
                title: "Cost Analysis & Optimization",
                points: [
                  "Thorough review of material costs and design efficiency",
                  "Value engineering principles to identify savings",
                  "Implemented should-costing methodologies",
                ],
              },
              {
                icon: CogIcon,
                title: "Physical Benchmarking",
                points: [
                  "Hands-on analysis of competitor equipment",
                  "Comparison of performance and material choices",
                  "Reverse engineering to understand cost structures",
                ],
              },
              {
                icon: LightBulbIcon,
                title: "Applied VAVE Method",
                points: [
                  "Value Analysis/Value Engineering methodology",
                  "Enhanced product value while reducing unnecessary costs",
                  "Phased approach with regular feedback loops",
                ],
              },
              {
                icon: UsersIcon,
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
                  <div className="w-10 h-10 bg-[#E6F4FA] rounded-full flex items-center justify-center">
                    <approach.icon className="h-6 w-6 text-[#0098AF]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#5B5B5B] mb-4">
                      {approach.title}
                    </h3>
                    <ul className="space-y-2 text-lg text-[#5B5B5B]">
                      {approach.points.map((point) => (
                        <li key={point} className="flex items-start">
                          <span className="w-2 h-2 bg-[#0098AF] rounded-full mt-2 mr-3" />
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
      <motion.section
        {...fadeInUp}
        id="results"
        className="py-20 lg:py-28 bg-white relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-12 h-[2px] bg-[#0098AF] rounded-full mr-4"></div>
          <div className="flex items-center mb-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#5B5B5B]">
              Results & Impact
            </h2>
          </div>
          <h3 className="text-2xl font-semibold text-[#5B5B5B]  mb-8">
            Delivering measurable improvement in cost and competitiveness
          </h3>
          <motion.div
            {...staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            {[
              { value: "50%", label: "Increased Profit Margins" },
              { value: "35%", label: "Reduced Manufacturing Costs" },
              { value: "40+", label: "Optimization Opportunities" },
              { value: "3x", label: "Market Competitiveness" },
            ].map((outcome) => (
              <motion.div
                key={outcome.label}
                {...fadeInUp}
                className="relative bg-gradient-to-br bg-gradient-to-b from-gray-50 to-[#F5FDFF] p-6 rounded-xl shadow-md text-center overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/50 backdrop-blur-sm" />
                <div className="relative z-10">
                  <h3 className="text-4xl font-bold text-[#0098AF]">
                    {outcome.value}
                  </h3>
                  <p className="text-lg text-[#5B5B5B] mt-2">{outcome.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-[#5B5B5B] mb-4">
                Key Findings
              </h3>
              <div className="space-y-4">
                {[
                  "Significant weight and design differences between client’s product and benchmarked models",
                  "Complex component design increased manufacturing costs unnecessarily",
                  "Benchmarked products had lighter, simpler designs without compromising functionality",
                  "Opportunities to standardize parts across product lines for cost efficiency",
                ].map((finding, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#E6F4FA] rounded-full flex items-center justify-center">
                      <span className="text-[#0098AF] font-semibold">
                        {index + 1}
                      </span>
                    </div>
                    <p className="text-lg text-[#5B5B5B]">{finding}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl shadow-xl overflow-hidden border border-[#E6F4FA]">
              <Image
                src={project.resultsImage}
                alt="Results Image"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <div className="p-8 rounded-2xl bg-[#F5FDFF]">
        <motion.section
          {...fadeInUp}
          className="py-20 lg:py-28 bg-gradient-to-br from-[#0098AF] to-[#5B5B5B] text-white relative overflow-hidden rounded-xl mx-4 sm:mx-6 lg:mx-8"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to optimize your manufacturing costs?
            </h2>
            <p className="text-lg lg:text-xl mb-8 max-w-2xl mx-auto text-[#E6F4FA]">
              Our engineering team specializes in cost optimization without
              compromising quality. Discover how we can help improve your
              product’s market competitiveness.
            </p>
            <motion.div {...buttonHover}>
              <Link href="/contact">
                <Button className="bg-white text-[#5B5B5B] hover:bg-[#E6F4FA] px-10 py-4 text-lg font-semibold rounded-full shadow-lg transition-all duration-300">
                  Start Your Project <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.section>
      </div>
      <Footer />
    </div>
  );
}
