import React from "react";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import keyImage from "@/constants/images/bg/key.jpg";
import deliverablesImage from "@/constants/images/bg/deliverables.jpg";
import Image from "next/image";

const PCMKeyFindings = () => {
  const keyFindings = [
    "Major weight savings and design simplification opportunities were found across valves, cradles, tanks, and support structures",
    "Several NorthStar components were over-engineered, leading to excess material usage and fabrication costs",
    "Benchmark competitors utilized fabricated or modular designs with fewer parts and less hardware",
    "Opportunities to standardize SKUs across product families were identified to improve inventory and sourcing efficiency",
    "Areas such as hydraulic tanks, filter systems, and frames showed potential for leaner, cost-effective alternatives",
  ];

  const deliverables = [
    "SWOT Analysis",
    "Pareto Analysis (80/20)",
    "Idea Pool Generation Report",
    "DFA / DFM / DFMEA Reports",
    "Root Cause Analysis",
    "Should-Costing ",
    "FEA  Reports",
    "Final Manufacturing Drawings",
    "BOM Evolution ",
    "Vendor Identification",
    "Function Cost-Worth Analysis Report",
    "Physical Competitive Benchmark Report",
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  

  return (
    <div className="relative  overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#E6F0F5] via-white to-white opacity-90 z-0" />
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-[#0098af]/5 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-[#003C46]/5 rounded-full blur-3xl z-0" />

      <div
        className="absolute bottom-40 left-1/3 w-4 h-4 bg-[#00b4d8] rounded-full animate-float opacity-70"
        style={{ animationDelay: "2s" }}
      />

      <section className="relative z-10 py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Key Findings Section */}
        <div className="relative hidden md:block h-[320px] rounded-xl shadow-md overflow-hidden mb-8">
          <Image
            src={keyImage}
            alt="Engineering services"
            width={300}
            height={500}
            className="w-full h-full opacity-40 object-cover"
          />
          {/* Overlay text on top of the image */}
          <div className="absolute inset-0 bg-black/40 flex flex-col  p-6">
            <h2 className="text-4xl font-bold mb-6 flex items-center gap-2 ">
              <span className="text-3xl">📌</span> Key Findings
            </h2>

            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-1 gap-2"
            >
              {keyFindings.map((finding, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="rounded-xl px-5 py-1 transition-all duration-300"
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-7 h-7 rounded-full z-10 text-black flex items-center justify-center transform-gpu transition-transform duration-300 group-hover:scale-110">
                      <span className="text-sm font-bold">{idx + 1}</span>
                    </div>
                    <p className="text-black group-hover:text-[#003C46] transition-colors duration-300">
                      {finding}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Deliverables Section */}
        <div className="relative hidden md:block h-[280px] rounded-xl shadow-md overflow-hidden ">
          <Image
            src={deliverablesImage}
            alt="Engineering services"
            width={300}
            height={500}
            className="w-full h-full object-cover"
          />
          {/* Overlay text on top of the image */}
          <div className="absolute inset-0 bg-black/40 flex flex-col  p-6">
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-6 flex items-center gap-2 bg-gradient-to-r from-[#003C46] to-[#0098af] bg-clip-text text-transparent">
                <span className="text-3xl">📦</span> Deliverables
              </h2>

              <motion.div
                variants={containerVariants}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1"
              >
                {deliverables.map((deliverable, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="group"
                  >
                    <div className="flex items-start gap-2 mb-2 p-3 border-l-4 border-[#00b4d8] bg-white/70 rounded-r-lg shadow-sm hover:bg-white hover:shadow-md transition-all duration-300">
                      <CheckCircle className="text-[#00b4d8] h-4 w-4 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-[#000000] text-sm group-hover:text-[#003C46] transition-colors duration-300">
                        {deliverable}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PCMKeyFindings;
