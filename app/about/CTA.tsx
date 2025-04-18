"use client";

// Component Purpose: Displays the call-to-action section with buttons
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ABOUT_CONSTANTS } from "@/constants/aboutPage/constants";

export default function CTASection() {
  const { TEXT, ANIMATIONS } = ABOUT_CONSTANTS;

  return (
    <section className="py-24 bg-gradient-to-r from-[#0098AF] to-[#5B5B5B] text-white relative">
      <div className="max-w-7xl mx-auto px-6 text-center items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={ANIMATIONS.STAGGER_CHILDREN}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            {TEXT.CTA_TITLE}
          </h2>
          <div className="text-center">
            <p className="text-lg font-light text-center max-w-2xl mx-auto mb-8 relative">
              {TEXT.CTA_DESC}
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1 }}
                style={{ transformOrigin: "center" }}
                className="absolute top-14 left-[32%] -translate-x-[30%] w-[37%] h-0.5 bg-white opacity-50"
              />
            </p>
          </div>
          <div className="flex justify-center space-x-6">
            <Link href="/contact">
              <Button
                variant="default"
                className="bg-white text-[#5B5B5B] hover:bg-gray-100 px-10 py-4 rounded-full text-lg font-semibold shadow-lg relative overflow-hidden"
              >
                Get in Touch
              </Button>
            </Link>
            <Link href="/services">
              <Button
                variant="outline"
                className="text-[#0098AF] border-white hover:bg-white hover:text-[#0098AF] px-10 py-4 rounded-full text-lg font-semibold shadow-lg relative overflow-hidden"
              >
                Explore Services
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
