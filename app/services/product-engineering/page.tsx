"use client";

import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
import Footer from "@/components/footer";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServiceSection";
//import { motion } from "framer-motion";
//import { Button } from "@/components/ui/button";
//import Link from "next/link";
import CTASection from "@/components/CTA";

export default function ProductEngineeringPage() {
  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      <MegaMenu />
      <HeroSection />
      <AboutSection />
      <section id="services">
        <ServicesSection />
      </section>

      {/* CTA Section */}
      <CTASection />

      <Footer />
    </div>
  );
}
