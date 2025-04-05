"use client";

// This component shows the company logo and description
import { motion } from "framer-motion";
import { FOOTER_CONSTANTS } from "@/constants/footer/constants";
import Image from "next/image";

export default function CompanyInfo() {
  const { DESCRIPTION, iamge } = FOOTER_CONSTANTS.COMPANY;
  const { FADE_IN } = FOOTER_CONSTANTS.ANIMATIONS;

  return (
    <motion.div variants={FADE_IN} className="col-span-12  md:col-span-5">
      {/* Company logo */}
      <div className="flex items-center mb-6 relative">
        <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
          <Image
            src={iamge}
            alt="Company Logo"
            width={580}
            height={100}
            className=""
          />
        </span>
      </div>
      {/* Company description */}
      <div className="pr-8">
        <p className="text-base text-justify leading-relaxed text-gray-200 mb-6 font-light">
          {DESCRIPTION}
        </p>
      </div>
      {/* Decorative line */}
      <motion.span
        initial={{ width: 0 }}
        whileInView={{ width: "70%" }}
        transition={{ delay: 0.6, duration: 1 }}
        className="block h-1 bg-gradient-to-r from-[#0098af] to-[#003C46] opacity-70  rounded-full"
      />
      {/* <div className="hidden lg:block w-[1px] h-[280px] bg-gradient-to-b from-gray-200/50 via-gray-400/50 to-gray-200/50 dark:from-gray-700 dark:via-gray-400 dark:to-gray-700 self-center" /> */}
    </motion.div>
  );
}
