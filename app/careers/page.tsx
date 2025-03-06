"use client";

// This file puts together all parts of the careers page
import Footer from "@/components/footer";
import { MegaMenu } from "@/components/ui/MegaMenu";
import HeroSection from "./HeroSection";
import ValuesSection from "./ValuesSection";
import TestimonialsSection from "./TestimonialsSection";
import BenefitsSection from "./BenefitsSection";
import OpenPositions from "./OpenPositions";

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans overflow-hidden">
      {/* Top navigation */}
      <MegaMenu />
      {/* Hero section */}
      <HeroSection />
      {/* Values section */}
      <ValuesSection />
      {/* Open positions section */}
      <OpenPositions />
      {/* Testimonials section */}
      <TestimonialsSection />
      {/* Benefits section */}
      <BenefitsSection />
      {/* Footer */}
      <Footer />
    </div>
  );
}