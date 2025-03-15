"use client";

// About Us section with text and image
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ABOUT_CONSTANTS } from "@/constants/home/about";

export default function AboutUs() {
  return (
    <section className="w-full py-12 sm:py-14 lg:py-22 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-5">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#003C46] relative drop-shadow-md">
              {ABOUT_CONSTANTS.TITLE}
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-[#0098AF] to-transparent" />
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-gray-600 text-justify">
              {ABOUT_CONSTANTS.DESCRIPTION_1}
            </p>
            <p className="font-bold text-2xl text-[#003C46] relative drop-shadow-sm">
              {ABOUT_CONSTANTS.SUBTITLE}
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-gray-600 text-justify">
              {ABOUT_CONSTANTS.DESCRIPTION_2}
            </p>
            <div className="mt-2">
              <Link href={ABOUT_CONSTANTS.BUTTON_HREF}>
              <Button className="bg-[#0098af] text-white hover:bg-white hover:text-black text-base transition-colors duration-200 border-2 border-transparent hover:border-[#0098af] hover:outline hover:outline-2 hover:outline-[#0098af]">
              {ABOUT_CONSTANTS.BUTTON_TEXT}
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[400px] ml-2 rounded-xl shadow-lg overflow-hidden">
            <Image
              src={ABOUT_CONSTANTS.IMAGE}
              alt="Team working together"
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{
          delay: 1,
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute top-1/4 right-1/4 w-5 h-5 bg-[#0098AF] opacity-30 rounded-full -z-10"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
        className="absolute bottom-1/3 left-1/3 w-32 h-32 bg-[#000000] opacity-20 rounded-full blur-3xl -z-10"
      />
    </section>
  );
}
