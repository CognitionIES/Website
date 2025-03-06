"use client";

// This component shows the text and services list on the left side
import { ArrowRight } from "lucide-react";
import { BROCHURE_CONSTANTS } from "@/constants/brochurePage/constants";

export default function LeftSection() {
  const { TITLE, DESCRIPTION_1, DESCRIPTION_2, SERVICES } = BROCHURE_CONSTANTS.LEFT_CONTENT;

  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl">
        {/* Title */}
        <h2 className="text-3xl font-bold text-[#003C46] mb-6 relative drop-shadow-sm">
          {TITLE}
        </h2>
        {/* First paragraph */}
        <p className="text-gray-600 mb-8 text-justify">
          {DESCRIPTION_1}
        </p>
        {/* Second paragraph */}
        <p className="text-gray-600 mb-6">
          {DESCRIPTION_2}
        </p>

        {/* List of services */}
        <div className="space-y-4">
          {SERVICES.map((service, index) => (
            <div key={index} className="flex items-start gap-3">
              <ArrowRight className="h-6 w-6 mt-1 text-[#23dce1]" />
              <p className="text-gray-700">{service}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}