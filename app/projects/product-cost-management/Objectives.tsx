"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import objectiveImage from "@/constants/images/projects/pcm/objective.jpg";
import objectiveImage2 from "@/constants/images/projects/pcm/objective-two.jpg";

export default function Objectives() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div>
      <section
        ref={sectionRef}
        className="w-full py-8 sm:py-10 lg:py-6 relative bg-gradient-to-b from-white to-[#E6F0F5]/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          

          {/* Mobile version - Visible only on small screens */}
          <div className="md:hidden rounded-xl shadow-md overflow-hidden mb-8">
            <div className="relative h-[200px]">
              <Image
                src={objectiveImage}
                alt="Engineering services"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-[#003C46] p-4">
              <h3 className="text-xl font-semibold uppercase text-white mb-2">
                🏢 Client Profile
              </h3>
              <p className="text-white/90 text-sm">
                The client, a reputed manufacturer of industrial chemical, was
                facing growing challenges in scaling production due to manual
                processes, lack of visibility into real-time plant performance,
                and inefficient data communication across departments.
              </p>
              <p className="text-white/90 text-sm mt-2">
                Cognition IES was approached to lead a complete digital
                transformation of the plant, with the goal of creating a fully
                integrated, intelligent digital ecosystem — from layout
                validation to live production monitoring.
              </p>
            </div>
          </div>

          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="items-center grid grid-cols-[3fr_2fr] gap-8"
          >
            {/* 🎯 Client Objectives */}
            <div className="relative hidden md:block h-[430px] rounded-xl shadow-md overflow-hidden">
              <Image
                src={objectiveImage}
                alt="Engineering services"
                width={300}
                height={500}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col  p-6">
                <h3 className="text-3xl font-semibold uppercase text-white mb-8">
                  🎯 Client Objectives
                </h3>
                <div className="w-full space-y-2 sm:px-2 md:px-4 lg:px-6">
                  <p className="text-white/90 mr-20 text-lg ">
                    🔧 Manufacturing Cost Reduction
                  </p>
                  <p className="text-white/90 mr-20 text-lg ">
                    💸 Improve Margins up to 50%
                  </p>
                  <p className="text-white/90 mr-20 text-lg ">
                    📉 Move Down the Price Ladder
                  </p>
                  <p className="text-white/90 mr-20 text-lg ">
                    🛠 Re-imagine Product Architecture
                  </p>
                  <p className="text-white/90 mr-20 text-lg ">
                    🆚 Benchmarking with Market Leaders
                  </p>
                  <p className="text-white/90 mr-20 text-lg ">
                    🔍 Reverse Engineering of Competitor Models
                  </p>
                  <p className="text-white/90 mr-20 text-lg ">
                    📈 Process Quality Enhancement
                  </p>
                  <p className="text-white/90 mr-20 text-lg">
                    🧮 Factor of Safety Validation on Reengineered Parts
                  </p>
                </div>
              </div>
            </div>

            
            {/* Business Perspective */}
            <div className="relative hidden md:block h-[430px] rounded-xl shadow-md overflow-hidden">
              <Image
                src={objectiveImage2}
                alt="Engineering services"
                width={300}
                height={500}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col  p-6">
                <h3 className="text-3xl font-semibold uppercase text-white mb-8">
                  💼Business Perspective
                </h3>
                {/* Market Positioning */}
                <div className="w-full  sm:px-2 md:px-4 lg:px-6">
                  <h6 className="text-xl font-semibold uppercase text-white mb-4">
                    🧭 Market Positioning
                  </h6>
                  <p className="text-white/90  text-lg ">
                   <span className="text-[#E6F0F5] mr-2 transition-transform duration-300 inline-block hover:scale-110">
                      ⦿
                    </span> Enhance brand value 
                    improvements{" "}
                  </p>
                  <p className="text-white/90  text-lg ">
                   <span className="text-[#E6F0F5] mr-2 transition-transform duration-300 inline-block hover:scale-110">
                      ⦿
                    </span> Compete more aggressively on price ladder
                  </p>
                </div>
                {/* Revenue Growth */}
                <div className="w-full  sm:px-2 md:px-4 lg:px-6">
                  <h6 className="text-xl font-semibold uppercase text-white py-4">
                    📊 Revenue Growth
                  </h6>
                  <p className="text-white/90  text-lg ">
                 
                       <span className="text-[#E6F0F5] mr-2 transition-transform duration-300 inline-block hover:scale-110">
                      ⦿
                    </span>
                    Increased margins with cost-effective designs
                  </p>
                  <p className="text-white/90  text-lg ">
                   <span className="text-[#E6F0F5] mr-2 transition-transform duration-300 inline-block hover:scale-110">
                      ⦿
                    </span> Expand customer base with optimized SKUs
                  </p>
                </div>
              </div>
            </div>


          </motion.div>
        </div>
      </section>
    </div>
  );
}
