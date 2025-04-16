"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Tech() {
  const techItemsRef = useRef<(HTMLLIElement | null)[]>([]);
  const containerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Intersection Observer to detect when section enters viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -20% 0px",
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

  useEffect(() => {
    // Only animate elements when section is in view
    if (isInView) {
      // Animate tech items
      techItemsRef.current.forEach((item, index) => {
        if (item) {
          setTimeout(() => {
            item.classList.add("opacity-100", "translate-x-0");
            item.classList.remove("opacity-0", "translate-x-10");
          }, 300 + index * 150);
        }
      });

      // Animate containers
      containerRefs.current.forEach((container, index) => {
        if (container) {
          setTimeout(() => {
            container.classList.add("opacity-100", "translate-y-0");
            container.classList.remove("opacity-0", "translate-y-8");
          }, 200 + index * 200);
        }
      });
    }
  }, [isInView]);

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div>
      <section
        ref={sectionRef}
        className="w-full py-8 sm:py-10 lg:py-6 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#5b5b5b]/5 to-[#5b5b5b]/15 z-0"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#0098AF]/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#003C46]/5 rounded-full filter blur-3xl"></div>

        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8 relative z-10"
          variants={sectionVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <motion.div
              ref={(el) => {
                containerRefs.current[0] = el;
              }}
              className="md:col-span-3 bg-white p-6 rounded-xl shadow-md transition-all duration-500 hover:shadow-lg opacity-0 translate-y-8"
              custom={0}
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-[#003C46] mb-4 flex items-center animate-fade-in">
                <span className="inline-block mr-2 animate-float">💡</span>
                Technologies Used
                <span className="ml-2 h-0.5 w-0 bg-[#0098AF] transition-all duration-700 group-hover:w-16"></span>
              </h3>

              <ul className="space-y-3 text-gray-700 text-base">
                {[
                  "3D Laser Scanning Equipment: For precise spatial data acquisition.",
                  "AI-Powered Analysis Tools: To validate and analyze scan data against design specifications.",
                  "Digital Twin Platforms: For creating and managing the intelligent digital replica of the facility.",
                  "Dashboard and Visualization Tools: For real-time monitoring and analytics.",
                ].map((tech, index) => (
                  <li
                    key={index}
                    ref={(el) => {techItemsRef.current[index] = el;}}
                    className="flex items-start opacity-0 translate-x-10 transition-all duration-500 ease-out hover:bg-gray-50 p-2 rounded-md"
                  >
                    <span className="text-[#0098AF] mr-2 transition-transform duration-300 inline-block hover:scale-110">
                      ⦿
                    </span>
                    {tech}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              ref={(el) => {
                containerRefs.current[1] = el;
              }}
              className="md:col-span-2 bg-white p-6 rounded-xl shadow-md transition-all duration-500 hover:shadow-lg opacity-0 translate-y-8"
              custom={1}
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-[#003C46] mb-4 flex items-center animate-fade-in">
                <span className="inline-block mr-2 animate-float">🔄</span>
                Client Feedback
              </h3>

              <blockquote className="text-gray-700 text-lg italic border-l-4 border-[#0098AF]/30 pl-4 transition-all duration-500 hover:border-l-6 hover:border-[#0098AF]/50">
                &quot;This digital transformation has fundamentally changed how
                we operate. We now have a living, breathing model of our plant
                that helps us plan better, run smoother, and grow smarter.&quot;
                <br />
                <cite className="not-italic mt-2 block text-right text-sm text-gray-500 transition-all duration-300 hover:text-[#0098AF]">
                  — Head of Operations, Confidential Client
                </cite>
              </blockquote>
            </motion.div>
          </div>
        </motion.div>

        {/* Animated decorative corner element */}
      </section>
    </div>
  );
}
