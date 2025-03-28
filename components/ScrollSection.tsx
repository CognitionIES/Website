"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import blueBulletImage from "@/constants/images/Bullet_Points/bullet_point_blue_1.png";
import grayBulletImage from "@/constants/images/Bullet_Points/bullet_point_gray.png";

interface ScrollSectionProps {
  index: number;
  title: string;
  description: string;
  imageUrl: string;
  bulletPoints: string[];
  additionalImageUrl?: string;
}

export function ScrollSection({
  index,
  title,
  description,
  imageUrl,
  bulletPoints = [],
  additionalImageUrl,
}: ScrollSectionProps) {
  const shouldReduceMotion = useReducedMotion();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  const isEven = index % 2 === 0;
  const bulletImage = isEven ? blueBulletImage : grayBulletImage;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: isEven ? -30 : 30,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.4,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="relative max-w-7xl mx-auto px-4"
      role="region"
      aria-label={`Section ${title}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-center">
        {/* Reduced gap-8 to gap-4 and md:gap-12 to md:gap-6 to bring image and text closer */}
        <motion.div
          className={`space-y-2 flex flex-col justify-between h-full ${
            isEven
              ? "md:order-2  md:col-span-8" // Reduced padding from md:pl-8 to md:pl-4
              : "md:order-1  md:col-span-8" // Reduced padding from md:pr-8 to md:pr-4
          }`}
          variants={itemVariants}
        >
          <div className="space-y-3">
            <motion.h2
              className="text-4xl md:text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80 uppercase"
              // Increased text size from text-3xl to text-4xl and md:text-2xl to md:text-3xl
              variants={itemVariants}
            >
              {title}
            </motion.h2>
            <motion.div
              className="h-1 w-32 md:w-40 bg-gradient-to-r from-primary to-transparent rounded-full"
              variants={itemVariants}
            />
          </div>

          <motion.p
            className="text-lg text-muted-foreground/90 leading-relaxed uppercase"
            // Increased text size from text-base to text-lg
            variants={itemVariants}
          >
            {description}
          </motion.p>

          <motion.ul
            className="flex flex-wrap gap-x-8 gap-y-3 mb-4"
            // Reduced mb-8 to mb-4 to minimize space below bullet points
            variants={containerVariants}
          >
            {bulletPoints.map((point, idx) => (
              <motion.li
                key={idx}
                className="flex items-start space-x-3 group flex-1 min-w-[250px]"
                variants={itemVariants}
                whileHover={shouldReduceMotion ? {} : { x: 5 }}
                role="listitem"
              >
                <Image
                  src={bulletImage}
                  alt=""
                  width={16}
                  height={16}
                  className="mt-1.5 flex-shrink-0 transition-transform group-hover:scale-125 "
                  aria-hidden="true"
                />
                <span className="text-xl md:text-base text-muted-foreground/90 group-hover:text-foreground transition-colors uppercase">
                  {/* Increased text size from text-lg to text-xl and md:text-sm to md:text-base */}
                  {point}
                </span>
              </motion.li>
            ))}
          </motion.ul>

          {additionalImageUrl && (
            <motion.div
              className="relative max-w-[1200px] py-0 h-[140px] rounded-lg overflow-hidden mt-auto"
              // Removed py-10, added mt-auto to stick the image to the bottom
              variants={itemVariants}
            >
              <motion.div
                className="relative w-full h-full transform-gpu"
              //  whileHover={shouldReduceMotion ? {} : { scale: 1.0 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src={additionalImageUrl}
                  alt={`Additional image for ${title}`}
                  className="object-cover"
                  fill
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  loading="lazy"
                />
              </motion.div>
            </motion.div>
          )}
        </motion.div>

        <motion.div
          className={`relative h-[510px] w-[360px] ${
            isEven
              ? "md:order-1 md:col-span-4 md:mr-2" // Reduced margin from md:mr-auto to md:mr-2
              : "md:order-2 md:col-span-4 md:ml-8 " // Reduced margin from md:ml-auto to md:ml-2
          }`}
          variants={itemVariants}
        >
          <div className="absolute inset-0  rounded-2xl overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent z-10" />
            <motion.div
              className="relative w-full h-full transform-gpu"
              whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src={imageUrl}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                priority={index === 0}
                loading={index === 0 ? "eager" : "lazy"}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}