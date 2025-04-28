"use client";
import { motion } from "framer-motion";
import { FOOTER_CONSTANTS } from "@/constants/footer/constants";
import Image from "next/image";
import { useIsMobile } from "@/hooks/use-mobile";

export default function CompanyInfo() {
  const { DESCRIPTION, iamge } = FOOTER_CONSTANTS.COMPANY;
  const { FADE_IN } = FOOTER_CONSTANTS.ANIMATIONS;
  const isMobile = useIsMobile();

  const Container = isMobile ? "div" : motion.div;
  const Line = isMobile ? "span" : motion.span;

  return (
    <Container
      {...(!isMobile && {
        variants: FADE_IN,
      })}
      className="col-span-1 md:col-span-5"
    >
      {/* Company logo */}
      <div className="flex items-center mb-4 sm:mb-6 relative">
        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
          <Image
            src={iamge}
            alt="Company Logo"
            width={480}
            height={80}
            className="w-[200px] sm:w-[300px] md:w-[400px] lg:w-[480px] h-auto"
          />
        </span>
      </div>
      {/* Company description */}
      <div className="pr-0 sm:pr-8">
        <p className="text-xs sm:text-sm md:text-base text-justify leading-relaxed text-gray-200 mb-4 sm:mb-6 font-light">
          {DESCRIPTION}
        </p>
      </div>
      {/* Decorative line */}
      {!isMobile && (
        <Line
          initial={{ width: 0 }}
          whileInView={{ width: "70%" }}
          transition={{ delay: 0.6, duration: 1 }}
          className="block h-1 bg-gradient-to-r from-[#0098af] to-[#003C46] opacity-70 rounded-full"
        />
      )}
    </Container>
  );
}
