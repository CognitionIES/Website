import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; // Import react-intersection-observer
import approachImage from "@/constants/images/projects/pcm/pcm-approach.jpg";

const ProjectApproach = () => {
  // Hook to detect when section enters viewport
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.2, // Trigger when 20% of the section is visible
  });

  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (idx: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: idx * 0.2, ease: "easeOut" },
    }),
  };

  // Animation variants for image
  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  // Animation variants for container and heading
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#E6F0F5] to-white opacity-90 z-0 animate-gradient" />
      <div className="absolute inset-0 bg-[] bg-cover bg-center opacity-20 z-0" />

      <section
        ref={ref} // Attach the ref to the section for viewport detection
        className="relative z-10 py-8 sm:py-10 lg:py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          className="bg-white/80 backdrop-blur-sm rounded-xl shadow-xl p-4"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"} // Trigger based on inView
        >
          <motion.h1
            className="text-4xl font-bold mb-2 text-[#003C46]"
            variants={headingVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            🧠 Cognition&apos;s PCM Approach
          </motion.h1>
          <div className="grid grid-cols-1 md:grid-cols-6">
            <div className="lg:col-span-4">
              {[
                {
                  title: "Cost Analysis & Optimization",
                  points: [
                    "Conducted a thorough review of material costs, design efficiency, and manufacturing processes.",
                    "Applied value engineering principles to identify cost-saving opportunities.",
                    "Implemented should-costing methodologies to drive supplier negotiations.",
                  ],
                },
                {
                  title: "Physical Benchmarking",
                  points: [
                    "Performed hands-on analysis of competitor equipment to gain actionable insights.",
                    "Compared product performance and material choices to industry standards.",
                    "Leveraged reverse engineering to understand competitor cost structures.",
                  ],
                },
                {
                  title: "Applied VAVE Method",
                  points: [
                    "Utilized VAVE method to optimize design and manufacturing.",
                    "Focused on enhancing product value while reducing unnecessary costs.",
                    "Implemented a phased approach with regular feedback loops to refine recommendations.",
                  ],
                },
                {
                  title: "Cross-functional Collaboration",
                  points: [
                    "Engaged with client teams across engineering, procurement, and operations to align strategies.",
                    "Facilitated workshops to identify and implement cost-saving opportunities.",
                    "Provided training & knowledge transfer to internal teams for continuous improvement.",
                  ],
                },
              ].map((section, idx) => (
                <motion.div
                  key={idx}
                  className={`p-1 ml-14 rounded-xl transition-shadow  ${
                    idx % 2 === 0 ? "px-0" : "px-32"
                  }`}
                  variants={sectionVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  custom={idx}
                >
                  <motion.div
                    className="shadow-md px-2 py-1 rounded-xl bg-white/80 backdrop-blur-sm border border-[#0098af] w-[600px] hover:border-[#00b4d8] transition-colors duration-300"
                    style={{ zIndex: idx + 1 }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="text-xl font-bold text-[#0098af]">
                      {idx + 1}. {section.title}
                    </h2>
                    <div className="space-y-1">
                      {section.points.map((point, pointIdx) => (
                        <motion.div
                          key={pointIdx}
                          className="flex items-start gap-2"
                          initial={{ opacity: 0, x: -10 }}
                          animate={
                            inView
                              ? { opacity: 1, x: 0, transition: { duration: 0.4, delay: (pointIdx + idx) * 0.1 } }
                              : { opacity: 0, x: -10 }
                          }
                        >
                          <span className="text-[#00b4d8] pl-4">•</span>
                          <p className="text-[#5b5b5b] text-sm">{point}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="lg:col-span-2 z-20 justify-end hidden lg:flex items-center"
              variants={imageVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <motion.div
                whileHover={{ scale: 1.03,  }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={approachImage}
                  alt="Project approach visualization with wooden blocks"
                  className="h-[500px] w-[280px] z-10 rounded-xl shadow-lg transition-transform duration-300"
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default ProjectApproach;