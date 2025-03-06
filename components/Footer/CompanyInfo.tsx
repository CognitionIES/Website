"use client";

// This component shows the company logo and description
import { motion } from "framer-motion";
import { FOOTER_CONSTANTS } from "@/constants/footer/constants";

export default function CompanyInfo() {
  const { NAME, DESCRIPTION } = FOOTER_CONSTANTS.COMPANY;
  const { FADE_IN } = FOOTER_CONSTANTS.ANIMATIONS;

  return (
    <motion.div variants={FADE_IN} className="col-span-12 md:col-span-5">
      {/* Company logo */}
      <div className="flex items-center mb-6 relative">
        <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
          <span className="text-[#0098AF] drop-shadow-md">{NAME}</span>
        </span>
      </div>
      {/* Company description */}
      <p className="text-lg text-justify leading-relaxed text-gray-200 mb-6 font-light">
        {DESCRIPTION}
      </p>
      {/* Decorative line */}
      <motion.span
        initial={{ width: 0 }}
        whileInView={{ width: "50%" }}
        transition={{ delay: 0.6, duration: 1 }}
        className="block h-1 bg-[#0098AF] opacity-70 mt-4 rounded-full"
      />
    </motion.div>
  );
}