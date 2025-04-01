import React, { forwardRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import BulletPointGray from "@/constants/images/Bullet_points/bullet_point_gray.png";
import BulletPointBlue from "@/constants/images/Bullet_Points/bullet_point_blue_1.png";

interface BulletPoint {
  mainTopic: string;
  subPoints: string[];
}

interface HorizontalScrollSectionProps {
  index: number;
  title: string;
  bulletPoints: BulletPoint[];
  imageUrl: string;
  id?: string;
  columns?: 3 | 4; // New optional prop for number of columns
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
      columns = 4, // Default to 4 columns
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
        transition: { duration: 0.6, ease: "easeOut" },
      },
    };

    const itemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: shouldReduceMotion ? 0 : 0.5, ease: "easeOut" },
      },
    };

    const imageVariants = {
      hidden: { opacity: 0, scale: 0.95 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.7, ease: "easeOut" },
      },
      hover: {
        scale: shouldReduceMotion ? 1 : 1.02,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      },
    };

    const columnVariants = {
      hidden: { opacity: 0, x: -20 },
      visible: (i: number) => ({
        opacity: 1,
        x: 0,
        transition: {
          duration: shouldReduceMotion ? 0 : 0.4,
          ease: "easeOut",
          delay: shouldReduceMotion ? 0 : i * 0.1,
        },
      }),
    };

    const bulletVariants = {
      rest: { x: 0, color: "#6B7280" },
      hover: {
        x: shouldReduceMotion ? 0 : 5,
        color: "#000000",
        transition: { type: "spring", stiffness: 400, damping: 20 },
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

    // Prepare columns based on the 'columns' prop
    const columnGroups: BulletPoint[] = Array(columns).fill({
      mainTopic: "",
      subPoints: [],
    });
    bulletPoints.forEach((point, idx) => {
      if (idx < columns) {
        columnGroups[idx] = point;
      } else {
        columnGroups[columns - 1].subPoints = [
          ...columnGroups[columns - 1].subPoints,
          ...point.subPoints,
        ];
      }
    });

    const isBlueBackground = index % 2 === 0;
    const bulletPointImage = isBlueBackground
      ? BulletPointGray
      : BulletPointBlue;
    const titleColor = isBlueBackground ? "#5b5b5b" : "#0098af";

    // Dynamic width class based on number of columns
    const columnWidthClass = columns === 3 ? "lg:w-1/3" : "lg:w-1/4";
    return (
      <motion.section
        ref={setRefs}
        id={id}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative max-w-7xl mx-auto w-full flex flex-col justify-center py-14 lg:py-24"
        role="region"
        aria-labelledby={`${id}-title`}
      >
        <div
          className={`w-full h-[580px] max-w-7xl mx-auto px-6 py-4 rounded-xl transition-all duration-300 outline outline-1 outline-black shadow-md hover:shadow-lg ${
            isBlueBackground
              ? "bg-gradient-to-br from-[#0098af]/10 to-[#0098af]/5"
              : "bg-gradient-to-br from-[#5b5b5b]/10 to-[#5b5b5b]/5"
          }`}
        >
          <div className="flex flex-col space-y-4 h-full">
            {/* Heading Section */}
            <motion.div className="text-left" variants={itemVariants}>
              <motion.h2
                id={`${id}-title`}
                className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight"
                style={{ color: titleColor }}
                variants={itemVariants}
              >
                {title}
              </motion.h2>
            </motion.div>

            {/* Enhanced Bullet Points Section */}
            <motion.div
              className="relative flex flex-col lg:flex-row gap-4 justify-between"
              variants={containerVariants}
            >
              {columnGroups.map((group, groupIdx) => (
                <React.Fragment key={groupIdx}>
                  <motion.div
                    custom={groupIdx}
                    variants={columnVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className={`flex flex-col p-1 w-full ${columnWidthClass} h-[280px] transition-all duration-300`}
                  >
                    <motion.h3
                      className="text-base uppercase font-semibold text-[#1F2937] pb-2 border-b border-[#0098af]/20 mb-3"
                      variants={itemVariants}
                    >
                      {group.mainTopic}
                    </motion.h3>
                    <ul className="space-y-[10px] flex-1 overflow-hidden">
                      {(group.subPoints || []).map((point, idx) => (
                        <motion.li
                          key={idx}
                          className="flex items-start gap-[6px]"
                          variants={bulletVariants}
                          initial="rest"
                          whileHover="hover"
                        >
                          <Image
                            src={bulletPointImage}
                            alt="Bullet point"
                            width={14}
                            height={14}
                            className="mt-1 flex-shrink-0"
                          />
                          <span className="text-sm text-black/80 leading-snug">
                            {point}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                  {/* Gradient Vertical Divider */}
                  {groupIdx < columns - 1 && (
                    <div className="hidden lg:block w-[1px] h-[280px] bg-gradient-to-b from-gray-200/50 via-gray-400/50 to-gray-200/50 dark:from-gray-700 dark:via-gray-400 dark:to-gray-700 self-center" />
                  )}
                </React.Fragment>
              ))}
            </motion.div>

            {/* Image Section */}
            <motion.div
              className="relative w-full h-[200px] rounded-xl overflow-hidden shadow-md"
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
                className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent"
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
