"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Scope() {
  const listRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
    if (isInView) {
      listRefs.current.forEach((item, index) => {
        if (item) {
          setTimeout(() => {
            item.classList.add("opacity-100", "translate-y-0");
            item.classList.remove("opacity-0", "translate-y-4");
          }, 300 + index * 150);
        }
      });
    }
  }, [isInView]);

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

  // Common data for both desktop and mobile
  const scopeItems = [
    {
      title: "Dimensional Laser Survey Scanning",
      desc: "Conducted high-precision 3D scans of the facility to capture accurate spatial data, ensuring a comprehensive digital representation of the plant layout.",
    },
    {
      title: "Digital Dimensional Control",
      desc: "Utilized AI-powered software to analyze and validate laser survey scans against engineering designs and P&IDs, identifying necessary adjustments before fabrication and installation.",
    },
    {
      title: "Intelligent Digital Twin Creation",
      desc: "Developed a dynamic digital twin of the facility, integrating real-time data and enabling simulation of operational scenarios for proactive decision-making.",
    },
    {
      title: "Software Application Integration",
      desc: "Implemented a suite of applications within the digital twin to drive efficiencies across departments, including maintenance scheduling, inventory management, and performance analytics.",
    },
    {
      title: "Evergreen Program Implementation",
      desc: "Established a continuous update mechanism to maintain the accuracy and relevance of the digital twin, ensuring it reflects real-time changes in the facility.",
    },
  ];

  return (
    <div>
      <section
        ref={sectionRef}
        className="w-full py-6 sm:py-10 lg:py-6 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 opacity-90 z-0"></div>
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
          variants={sectionVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Desktop version */}
          <div className="relative hidden bg-white/95 md:block md:h-[370px] rounded-xl overflow-hidden shadow-lg transform transition-all duration-500 hover:shadow-xl animate-fade-in">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#0098AF]/10 to-transparent rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#0098AF]/10 to-transparent rounded-tr-full"></div>
            <div className="absolute inset-0 flex flex-col p-6">
              <div className="w-full flex justify-end">
                <ul className="">
                  <h3 className="text-3xl font-semibold uppercase pl-2 text-[#5b5b5b] mb-4 flex items-center animate-fade-in">
                    <span className="text-[#0098af] animate-float">🛠</span>
                    <span className="pl-4">Scope of Work</span>
                  </h3>
                  {scopeItems.map((item, index) => (
                    <li
                      key={index}
                      ref={(el) => {
                        listRefs.current[index] = el;
                      }}
                      className="flex pl-4 mb-2 opacity-0 translate-y-4 transition-all duration-500 ease-out"
                    >
                      <span className="text-[#0098af] pr-2 transition-transform duration-300 hover:scale-110">
                        ⦿
                      </span>
                      <p className="flex-1 text-indent-0 pl-6 hanging-indent">
                        <span className="font-bold uppercase">
                          {item.title}:{" "}
                        </span>
                        {item.desc}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Mobile version */}
          <motion.div
            className="md:hidden bg-white/95 rounded-xl overflow-hidden shadow-lg p-4 animate-fade-in"
            variants={sectionVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h3 className="text-2xl font-semibold uppercase text-[#5b5b5b] mb-4 flex items-center">
              <span className="text-[#0098af] animate-float">🛠</span>
              <span className="pl-2">Scope of Work</span>
            </h3>
            <ul className="space-y-4">
              {scopeItems.map((item, index) => (
                <li
                  key={index}
                  ref={(el) => {
                    listRefs.current[index + scopeItems.length] = el; // Offset index for mobile
                  }}
                  className="opacity-0 translate-y-4 transition-all duration-500 ease-out"
                >
                  <div className="flex">
                    <span className="text-[#0098af] pr-2 transition-transform duration-300 hover:scale-110">
                      ⦿
                    </span>
                    <div>
                      <span className="font-bold text-sm uppercase block">
                        {item.title}
                      </span>
                      <p className="text-sm text-gray-700">{item.desc}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
