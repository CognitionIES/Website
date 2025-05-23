"use client";

// This file puts together all parts of the plant engineering page
import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
//import Footer from "@/components/footer";
import HeroSection from "./HeroSection";
//import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
//import FAQSection from "./FAQSection";
import CTASection from "@/components/CTA";
import Footer from "@/components/footer";
//import About from "./about";
import AboutSection from "./AboutSection";

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
      <section id="services">
      <ServicesSection />
      </section>
      {/* FAQ section */}
      <CTASection />
      {/* Footer */}
      <Footer />
    </div>
  );
}