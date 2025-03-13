"use client";

// This component shows info about product engineering with an image
import { motion } from "framer-motion";
import Image from "next/image";
import { PRODUCT_ENGINEERING_CONSTANTS } from "@/constants/product-engineering/constants";

export default function AboutSection() {
  const { TITLE, DESCRIPTION_1, DESCRIPTION_2, IMAGE } =
    PRODUCT_ENGINEERING_CONSTANTS.ABOUT;

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-[#F5FDFF]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#003C46]">
              {TITLE}
            </h2>
            <p className="text-lg text-[#4A4A4A] mb-6 text-justify">
              {DESCRIPTION_1}
            </p>
            <p className="text-lg text-[#4A4A4A] text-justify">
              {DESCRIPTION_2}
            </p>
          </motion.div>
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative h-[400px]"
          >
            <Image
              src={IMAGE}
              alt="Engineering services"
              fill
              className="object-cover rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
