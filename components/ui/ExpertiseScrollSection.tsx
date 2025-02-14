'use client'; 

import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import dynamic from "next/dynamic"; 
import content from "@/constants/content";

const ScrollSection = dynamic(() => import("./ScrollSection"), { ssr: false });


const ExpertiseScrollSection = () => {
  return (
    <div className="p-10 space-y-20">
      {content.map((item, index) => (
        <ScrollSection key={index} item={item} swap={index % 2 !== 0} />
      ))}
    </div>
  );
};

const ScrollSection = ({ item, swap, }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0 });
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: swap ? 100 : -100 }}
      animate={controls}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`flex flex-col md:flex-row items-center justify-between ${swap ? "flex-row-reverse" : ""} gap-10`}
    >
      {/* Image Section */}
      <motion.div
        className="w-full md:w-1/2"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src={item.imageSrc}
          width={500}
          height={500}
          className="rounded-2xl object-cover shadow-xl"
          alt={item.title}
        />
      </motion.div>

      {/* Text Section */}
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl font-bold mb-4">{item.title}</h2>
        <p className="text-lg text-gray-600">{item.description}</p>
      </div>
    </motion.div>
  );
};

export default ExpertiseScrollSection;
