"use client";
import { Button } from "@/components/ui/button";
import { ABOUT_CONSTANTS } from "@/constants/home/about";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useInView, useAnimation } from "framer-motion";

const AboutUs = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const controls = useAnimation();
  const isInView = useInView(sectionRef, { amount: 0.2, once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Variants for text content (staggered children)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const circleVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 0.04,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="w-full py-12 sm:py-16 lg:py-24 relative"
      style={{
        backgroundImage:
          "radial-gradient(circle at 10% 90%, rgba(0, 152, 175, 0.05) 0%, transparent 30%), radial-gradient(circle at 90% 10%, rgba(91, 91, 91, 0.05) 0%, transparent 30%)",
      }}
    >
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#0098af] blur-3xl"
          variants={circleVariants}
          initial="hidden"
          animate={controls}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-[#0098af] blur-3xl"
          variants={circleVariants}
          initial="hidden"
          animate={controls}
        />
        <div className="absolute w-full h-full bg-dot-pattern bg-[length:20px_20px] opacity-[0.02]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl text-justify font-semibold tracking-tight text-[#003C46]"
          variants={childVariants}
          initial="hidden"
          animate={controls}
        >
          {ABOUT_CONSTANTS.TITLE}
        </motion.h2>
        <motion.div
          className="w-[80px] sm:w-[100px] h-[3px] bg-gradient-to-r from-[#0098af] to-transparent rounded-full mt-1"
          variants={childVariants}
          initial="hidden"
          animate={controls}
        />

        <div className="grid grid-cols-1 py-8 md:grid-cols-[1fr_auto] items-start gap-10 md:gap-8 max-w-7xl mx-auto">
          {/* Text content */}
          <motion.div
            className="order-2 md:order-1"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            <motion.p
              className="text-sm sm:text-base md:text-lg text-justify text-gray-600 leading-relaxed"
              variants={childVariants}
            >
              {ABOUT_CONSTANTS.DESCRIPTION_1}
            </motion.p>
            <motion.h3
              className="text-lg sm:text-xl font-semibold py-2 text-justify text-[#003c46]"
              variants={childVariants}
            >
              {ABOUT_CONSTANTS.SUBTITLE}
            </motion.h3>
            <motion.p
              className="text-xs sm:text-sm md:text-[16px] py-2 text-justify text-gray-600 leading-relaxed"
              variants={childVariants}
            >
              {ABOUT_CONSTANTS.DESCRIPTION_2}
            </motion.p>
            <motion.p
              className="text-lg sm:text-xl font-semibold py-2 text-justify text-[#003c46]"
              variants={childVariants}
            >
              {ABOUT_CONSTANTS.DESCRIPTION_3}
            </motion.p>

            <motion.div className="mt-4" variants={childVariants}>
              <Link href={ABOUT_CONSTANTS.BUTTON_HREF}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button className="bg-[#0098af] text-white hover:bg-white hover:text-black text-sm sm:text-base px-4 py-2 sm:px-6 sm:py-3 transition-colors duration-200 border-2 border-transparent hover:border-[#0098af] hover:outline hover:outline-2 hover:outline-[#0098af]">
                    {ABOUT_CONSTANTS.BUTTON_TEXT}
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>

          {/* Image (hidden on mobile) */}
          <motion.div
            className="order-1 md:order-2 relative hidden md:block md:h-[400px] md:w-[555px] rounded-xl shadow-md overflow-hidden justify-self-end"
            variants={imageVariants}
            initial="hidden"
            animate={controls}
          >
            <Image
              src={ABOUT_CONSTANTS.IMAGE}
              alt="Team collaboration"
              width={400}
              height={100}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;