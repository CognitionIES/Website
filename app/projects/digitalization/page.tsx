"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
import Hero from "./hero";
import Footer from "@/components/footer";
import AboutSection from "./about";
import Objective from "./objective";
import Scope from "./scope";
import Outcome from "./outcome";
import Tech from "./tech";

export default function DigitalizationProject() {
  

  // Minimal animation for CTA button
  const buttonFadeIn = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F9FAFB] to-[#E5ECEF]">
      <MegaMenu />
      {/* Hero Section */}
      <section className="relative h-[450px] overflow-hidden">
        <Hero />
      </section>
      <AboutSection />
      <Objective />
      <Scope />
      <Outcome />
      <Tech /> {/* Project Overview Section */}
      
      {/* Call to Action Section */}
      <section className="w-full py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#0098AF] to-[#007B8F] text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Digitize Your Business?
          </h2>
          <p className="text-lg sm:text-xl mb-8">
            Contact us to explore how our digitalization solutions can transform
            your operations.
          </p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={buttonFadeIn}
          >
            <Link href="/contact">
              <Button className="bg-white text-[#000000] rounded-lg hover:bg-[#5b5b5b] hover:text-white transition-colors duration-300 text-lg px-8 py-3 shadow-md">
                Get in Touch
              </Button>
            </Link>
          </motion.div>
        </div>
        <div className="absolute top-12 right-12 w-16 h-1 bg-[#99D5DF]/20" />
      </section>
      <Footer />
    </div>
  );
}
