import React, { forwardRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

interface HorizontalScrollSectionProps {
  index: number;
  title: string;
  bulletPoints: string[];
  imageUrl: string;
  id?: string;
  description?: string;
}

export const HorizontalScrollSection = forwardRef<
  HTMLDivElement,
  HorizontalScrollSectionProps
>(
  (
    {
      index,
      title,
      bulletPoints = [],
      imageUrl,
      id,
      description = "Comprehensive solutions tailored to your specific needs and requirements.",
    }: HorizontalScrollSectionProps,
    ref
  ) => {
    const shouldReduceMotion = useReducedMotion();
    const [inViewRef, inView] = useInView({
      threshold: 0.2,
      triggerOnce: false,
    });

    const containerVariants = {
      hidden: { opacity: 0, y: 30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          ease: "easeOut",
        },
      },
    };

    const itemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: shouldReduceMotion ? 0 : 0.5,
          ease: "easeOut",
        },
      },
    };

    const imageVariants = {
      hidden: { opacity: 0, scale: 0.95 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.7,
          ease: "easeOut",
        },
      },
      hover: {
        scale: shouldReduceMotion ? 1 : 1.02,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 20,
        },
      },
    };

    // Bullet point variants for left-to-right fade on view
    const bulletVariants = {
      hidden: { opacity: 0, x: -20 },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: shouldReduceMotion ? 0 : 0.4,
          ease: "easeOut",
          // Delay based on row (group of 3) for simultaneous column animation
          delay: shouldReduceMotion ? 0 : Math.floor(index / 3) * 0.2,
        },
      },
    };

    const setRefs = (node: HTMLDivElement) => {
      if (typeof ref === "function") {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
      inViewRef(node);
    };

    return (
      <motion.section
        ref={setRefs}
        id={id}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-center py-12 md:py-16"
        role="region"
        aria-labelledby={`${id}-title`}
      >
        <div
          className={`w-full max-w-7xl mx-auto px-4 py-4 rounded-xl transition-all duration-300 outline outline-2 outline-black/20 shadow-lg hover:shadow-xl ${
            index % 2 === 0 ? "bg-primary/5" : "bg-muted/10"
          }`}
        >
          <div className="flex flex-col space-y-6">
            {/* Heading Section */}
            <motion.div className="text-left" variants={itemVariants}>
              <motion.h2
                id={`${id}-title`}
                className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-2 text-foreground"
                variants={itemVariants}
              >
                {title}
              </motion.h2>

              <motion.p
                className="text-base md:text-lg text-muted-foreground max-w-7xl mb-4 leading-relaxed"
                variants={itemVariants}
              >
                {description}
              </motion.p>

              <motion.div
                className="h-1 w-32 md:w-40 bg-gradient-to-r from-primary via-primary/70 to-transparent rounded-full"
                variants={itemVariants}
              />
            </motion.div>

            {/* Bullet Points Section - Reduced spacing */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-2"
              variants={containerVariants}
            >
              {bulletPoints.map((point, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-start space-x-2 group cursor-default"
                  variants={bulletVariants}
                  // Removed whileHover to prevent hover-based animation
                  role="listitem"
                >
                  <motion.div
                    className="mt-1.5 h-2.5 w-2.5 rounded-full bg-primary flex-shrink-0"
                    whileHover={{ scale: shouldReduceMotion ? 1 : 1.3 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                  <span className="text-sm md:text-xs text-muted-foreground/90 group-hover:text-foreground transition-colors duration-200">
                    {point}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Image Section */}
            <motion.div
              className="relative w-full h-[192px] md:h-[200px] lg:h-[250px] rounded-lg overflow-hidden mt-8 shadow-md"
              variants={imageVariants}
              whileHover="hover"
            >
              <Image
                src={imageUrl}
                alt={`Illustration for ${title}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-opacity duration-300 hover:opacity-95"
                priority={index === 0}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>
        </div>
      </motion.section>
    );
  }
);

HorizontalScrollSection.displayName = "HorizontalScrollSection";
