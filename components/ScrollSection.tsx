"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import blueBulletImage from "@/constants/images/Bullet_Points/bullet_point_blue_1.png";
import grayBulletImage from "@/constants/images/Bullet_Points/bullet_point_gray.png";

interface LogoItem {
  src: string | { src: string }; // Support both string and imported image module
  alt: string;
}

interface LogoRow {
  label: string;
  items: LogoItem[];
}

interface ScrollSectionProps {
  index: number;
  title: string;
  description: string;
  imageUrl: string;
  bulletPoints: string[];
  logos: LogoRow[];
}

export function ScrollSection({
  index,
  title,
  description,
  imageUrl,
  bulletPoints = [],
  logos = [],
}: ScrollSectionProps) {
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
        staggerChildren: 0.1,
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
        duration: 0.4,
      },
    },
  };

  const gridColumnMap: { [key: string]: string } = {
    "CAD & PLM:": "md:grid-cols-7",
    "ELECTRICAL CAD & PCB DESIGN:": "md:grid-cols-6",
    "COMPUTER AIDED ENGINEERING:": "md:grid-cols-5",
    "COMPUTATIONAL FLUID DYNAMICS:": "md:grid-cols-5",
    "3D MODEL SOFTWARE:": "md:grid-cols-3",
    "CAD:": "md:grid-cols-6",
    "SIMULATION:": "md:grid-cols-6",
    "ASSET MANAGEMENT SOFTWARE:": "md:grid-cols-4",
    "ANALYTICS AND DATA VISUALIZATION:": "md:grid-cols-4",
    "IDE AND PROGRAMMING:": "md:grid-cols-3",
    "TESTING AND DEBUGGING:": "md:grid-cols-3",
    "RTOS DEVELOPMENT:": "md:grid-cols-3",
    "PUBLISHING, DIGITAL AND GRAPHICS:": "md:grid-cols-5",
    "SUPPLY CHAIN MANAGEMENT:": "md:grid-cols-4",
  };

  const getGridClass = (label: string) => {
    return gridColumnMap[label] || "md:grid-cols-5";
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="relative max-w-7xl mx-auto px-4"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
        <motion.div
          className={`space-y-6 ${
            isEven
              ? "md:order-1 md:pr-8 md:col-span-8"
              : "md:order-2 md:pl-8 md:col-span-8"
          }`}
          variants={itemVariants}
        >
          <div className="space-y-3">
            <motion.h2
              className="text-3xl md:text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80 uppercase"
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
            variants={itemVariants}
          >
            {description}
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-x-8 gap-y-3"
            variants={containerVariants}
          >
            {bulletPoints.map((point, idx) => (
              <motion.div
                key={idx}
                className="flex items-start space-x-3 group flex-1 min-w-[250px]"
                variants={itemVariants}
                whileHover={{ x: 5 }}
              >
                <Image
                  src={bulletImage}
                  alt="bullet point"
                  width={16}
                  height={16}
                  className="mt-1.5 flex-shrink-1 transition-transform group-hover:scale-125"
                />
                <p className="text-base md:text-sm text-muted-foreground/90 group-hover:text-foreground transition-colors uppercase">
                  {point}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {logos.length > 0 && (
            <motion.div
              className="bg-white shadow-lg rounded-xl p-6 space-y-2"
              style={{ maxWidth: "750px" }}
              variants={itemVariants}
            >
              {logos.map((row, rowIdx) => (
                <motion.div
                  key={rowIdx}
                  className="flex items-center  justify gap-4"
                  variants={itemVariants}
                >
                  <div className="w-30 flex-shrink-0">
                    <h3 className="text-sm font-semibold text-foreground uppercase">
                      {row.label}
                    </h3>
                  </div>
                  <div
                    className={`grid ${getGridClass(
                      row.label
                    )} gap-2 justify-center`}
                  >
                    {row.items.map((logo, idx) => (
                      <motion.div
                        key={idx}
                        className="aspect-square relative group min-w-[80px] min-h-[80px] outline-none group-hover:outline group-hover:outline-2 group-hover:outline-green group-hover:outline-offset-2 rounded-lg"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        variants={itemVariants}
                      >
                        {/* Adjusted background size */}
                        <div className="relative w-[80%] h-[80%] mx-auto my-auto bg-foreground/5 rounded-lg opacity-0 transition-opacity" />
                        <div className="absolute inset-0 flex items-center justify-center w-full h-full">
                          <Image
                            src={
                              typeof logo.src === "string"
                                ? logo.src
                                : logo.src.src
                            }
                            alt={logo.alt}
                            width={100}
                            height={100}
                            className="object-contain p-1 flex justify items-center transition-all duration-300 group-hover:brightness-110 rounded-lg"
                            sizes="(max-width: 768px) 50px, 80px"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>

        <motion.div
          className={`relative h-[600px] w-[350px] ${
            isEven
              ? "md:order-2 md:col-span-4 md:ml-auto"
              : "md:order-1 md:col-span-4 md:mr-auto"
          }`}
          variants={itemVariants}
        >
          <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent z-10" />
            <motion.div
              className="relative w-full h-full transform-gpu"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src={imageUrl}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                priority
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
