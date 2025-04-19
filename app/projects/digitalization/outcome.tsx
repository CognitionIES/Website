"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import outcomeImage from "@/constants/images/projects/digitalization/outcome.jpg";
import Image from "next/image";

export default function Outcome() {
  const listItemsRef = useRef<(HTMLLIElement | null)[]>([]);
  const tableRowsRef = useRef<(HTMLTableRowElement | null)[]>([]);
  const imageRef = useRef<HTMLDivElement>(null);
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
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // Only animate elements when section is in view
    if (isInView) {
      // Animate list items with staggered delay
      listItemsRef.current.forEach((item, index) => {
        if (item) {
          setTimeout(() => {
            item.classList.add("opacity-100", "translate-x-0");
            item.classList.remove("opacity-0", "translate-x-10");
          }, 300 + index * 150);
        }
      });

      // Animate table rows
      tableRowsRef.current.forEach((row, index) => {
        if (row) {
          setTimeout(() => {
            row.classList.add("opacity-100");
            row.classList.remove("opacity-0");
          }, 800 + index * 200);
        }
      });

      // Animate image
      if (imageRef.current) {
        setTimeout(() => {
          imageRef.current?.classList.add("opacity-100", "translate-y-0");
          imageRef.current?.classList.remove("opacity-0", "translate-y-10");
        }, 300);
      }
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

  const titleVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div>
      <section
        ref={sectionRef}
        className="w-full py-8 sm:py-10 lg:py-6 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 z-0"></div>
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
          variants={sectionVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-3xl uppercase font-bold text-[#003C46] relative mb-8 animate-fade-in"
            variants={titleVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <span className="animate-float inline-block">💡</span> Key Results &
            Outcomes
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div
              ref={imageRef}
              className="relative h-[320px] md:h-[520px] w-full rounded-xl shadow-md overflow-hidden transition-all duration-500 hover:shadow-xl opacity-0 translate-y-10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#0098af]/20 to-[#003C46]/30 transition-transform duration-700 hover:scale-105">
                <div className="absolute inset-0 flex items-center justify-center text-white text-opacity-80">
                 
                    <Image
                      src={outcomeImage}
                      alt="Outcome of Digitalization Project"
                      className="object-cover w-full h-full rounded-lg transition-transform duration-700 hover:scale-105"
                      width={500}
                      height={500}
                    />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100"></div>
            </div>

            <div className="col-span-2">
              <p className="text-lg sm:text-xl leading-relaxed text-gray-700 text-justify"></p>

              <div className="text-justify">
                <ul className="space-y-4">
                  {[
                    {
                      title: "Improved Accuracy",
                      content:
                        "3D validation reduced layout deviations drastically, saving hours in installation rework.",
                    },
                    {
                      title: "Operational Efficiency",
                      content:
                        "Downtime was minimized through real-time alerts & predictive maintenance insights.",
                    },
                    {
                      title: "Energy Optimization",
                      content:
                        "Monitoring & simulation helped reduce energy consumption per unit produced.",
                    },
                    {
                      title: "Scalable Infrastructure",
                      content:
                        "The platform is future-ready, adaptable for upcoming automation and robotics integration.",
                    },
                    {
                      title: "Better Visibility",
                      content:
                        "Stakeholders can now access real-time status, performance metrics, and alerts via a centralized dashboard.",
                    },
                  ].map((item, index) => (
                    <li
                      key={index}
                      ref={(el) => {
                        listItemsRef.current[index] = el;
                      }}
                      className="text-base text-gray-700 opacity-0 translate-x-10 transition-all duration-500 ease-out"
                    >
                      <span className="text-[#0098af] pr-2 transition-transform duration-300 inline-block hover:scale-110">
                        ⦿
                      </span>
                      <span className="font-semibold text-lg">
                        {item.title}:
                      </span>{" "}
                      {item.content}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Responsive table */}
              <div className="mt-20 overflow-x-auto rounded-lg shadow-md">
                <table className="w-full text-center border-collapse">
                  <tbody>
                    <tr
                      ref={(el) => {
                        tableRowsRef.current[0] = el;
                      }}
                      className="opacity-0 transition-opacity duration-700"
                    >
                      <td className="p-4 border border-gray-100 bg-gradient-to-r from-[#0098af]/60 to-[#0098af]/80 text-white uppercase transition-all duration-300">
                        <span className="font-semibold text-lg">Metric</span>
                      </td>
                      <td className="p-4 border border-gray-100 bg-gradient-to-r from-[#0098af]/60 to-[#0098af]/80 text-white uppercase transition-all duration-300">
                        <span className="font-semibold text-lg">Before</span>
                      </td>
                      <td className="p-4 border border-gray-100 bg-gradient-to-r from-[#0098af]/60 to-[#0098af]/80 text-white uppercase transition-all duration-300">
                        <span className="font-semibold text-lg">After</span>
                      </td>
                    </tr>

                    {[
                      {
                        metric: "Layout Error Rate",
                        before: "~8%",
                        after: "less than 2%",
                      },
                      {
                        metric: "Production Downtime",
                        before: "12hrs/month",
                        after: "less than 3hrs/month",
                      },
                      {
                        metric: "Rework due to fit issues",
                        before: "5+ incidents/month",
                        after: "0 incident",
                      },
                    ].map((row, index) => (
                      <tr
                        key={index}
                        ref={(el) => {
                          tableRowsRef.current[index + 1] = el;
                        }}
                        className="opacity-0 transition-opacity duration-700 hover:bg-gray-50"
                      >
                        <td className="px-4 py-3 border bg-[#00b4d8]/10 border-gray-100 transition-all duration-300">
                          <span className="font-semibold"></span> {row.metric}
                        </td>
                        <td className="px-4 py-3 border bg-[#00b4d8]/10 border-gray-100 transition-all duration-300">
                          {row.before}
                        </td>
                        <td className="px-4 py-3 border bg-[#00b4d8]/10 border-gray-100 transition-all duration-300 font-medium">
                          {row.after}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </motion.div>
        {/* Animated decorative corner element */}
      </section>
    </div>
  );
}
