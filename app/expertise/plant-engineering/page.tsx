"use client";

// This file puts together all parts of the plant engineering page
import { MegaMenu } from "@/components/ui/MegaMenu";
import Footer from "@/components/footer";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import FAQSection from "./FAQSection";

export default function PlantEngineeringPage() {
  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      {/* Top navigation */}
      <MegaMenu />
      {/* Hero section */}
      <HeroSection />
      {/* About section */}
      <AboutSection />
      {/* Services section */}
      <ServicesSection />
      {/* FAQ section */}
      <FAQSection />
      {/* Footer */}
      <Footer />
    </div>
  );
}