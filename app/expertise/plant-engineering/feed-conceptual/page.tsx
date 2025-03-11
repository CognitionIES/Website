"use client"; // Required for onClick in FeedConceptualContent

import FeedConceptualHero from "./hero";
import FeedConceptualContent from "./content";
import ServiceSidebar from "../ServiceSidebar";

export default function FeedConceptualPage() {
  return (
    <div>
      <section>
        <FeedConceptualHero />
      </section>
      <section className="py-12">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#0098AF] drop-shadow-md animate-fadeIn">
          Our Engineering Services
        </h2>
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-6">
          <FeedConceptualContent />
          <div className="lg:w-1/6">
            {/* Adjusted to lg:w-1/6 (16.67%) to complement lg:w-5/6, fitting within max-w-7xl */}
            <ServiceSidebar />
          </div>
        </div>
        <div className="absolute top-1/4 right-10 w-16 h-16 bg-[#0098AF] rounded-full blur-md animate-float z-100" />
      </section>
    </div>
  );
}