"use client"; // Kept for potential interactivity (e.g., slider)

import { FiChevronRight } from "react-icons/fi"; // Decorative icon

export default function Content() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 lg:w-5/6">
      {/* Section 1: Service Name and Overview */}
      <section className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#003C46] mb-6 tracking-tight animate-fade-in">
          Civil Engineering
          <span className="block w-24 h-1.5 bg-gradient-to-r from-[#0098AF] to-[#003C46]/50 mt-4 rounded-full transition-all duration-300" />
        </h1>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl font-light">
          At Cognition, our Civil Engineering services are dedicated to delivering robust, efficient, and sustainable solutions for site development, infrastructure, foundations, and industrial buildings. We prioritize seamless integration with your project needs, ensuring safety and functionality at every step. With years of experience, our team collaborates closely with you to tackle challenges like tough terrains or tight schedules, ensuring smooth execution from start to finish.
        </p>
      </section>

      {/* Section 2: Tools & Technologies */}
      <section className="mb-16 relative">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#0098AF] mb-6 flex items-center tracking-tight animate-slide-up">
          Tools & Technologies
          <FiChevronRight className="ml-2 text-[#003C46] transition-transform duration-300 group-hover:translate-x-1" />
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6 font-light max-w-3xl">
          We leverage industry-leading tools like AutoCAD, STAAD.Pro, and Civil 3D to deliver precise and efficient civil engineering solutions.
        </p>
        {/* Enhanced slider placeholder */}
        <div className="w-full h-28 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center rounded-xl mt-6 border border-[#0098AF]/10 shadow-lg shadow-[#0098AF]/5 transition-all duration-300 hover:shadow-xl">
          <span className="text-gray-600 font-medium tracking-wide">
            Logo Slider Carousel
          </span>
        </div>
        {/* Subtle decorative element */}
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#0098AF] rounded-full opacity-30 animate-pulse" />
      </section>

      {/* Section 3: What We Offer? */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#0098AF] mb-6 tracking-tight animate-slide-up">
          What We Offer
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-3xl font-light">
          We provide a comprehensive set of services to ensure your success in Civil Engineering. Here’s how we can support you:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ul className="space-y-5">
            {/* Category 1: Site Development & Infrastructure */}
            <li className="flex items-start gap-3 group">
              <span className="text-[#0098AF] text-xl transition-transform duration-300 group-hover:scale-110">➢</span>
              <span className="font-semibold text-gray-800 text-lg tracking-tight">
                Site Development & Infrastructure
              </span>
            </li>
            <li className="flex items-start gap-3 ml-6">
              <span className="text-[#0098AF] text-base">•</span>
              <span className="text-gray-700 font-light leading-relaxed">
                Site Preparation, Grading, and Fencing
              </span>
            </li>
            <li className="flex items-start gap-3 ml-6">
              <span className="text-[#0098AF] text-base">•</span>
              <span className="text-gray-700 font-light leading-relaxed">
                Drainage, Roads, and Paving Layouts
              </span>
            </li>
            <li className="flex items-start gap-3 ml-6">
              <span className="text-[#0098AF] text-base">•</span>
              <span className="text-gray-700 font-light leading-relaxed">
                Underground Utilities, Valve Pits, Duct Banks, and Culverts
              </span>
            </li>

            {/* Category 2: Foundation Engineering */}
            <li className="flex items-start gap-3 group">
              <span className="text-[#0098AF] text-xl transition-transform duration-300 group-hover:scale-110">➢</span>
              <span className="font-semibold text-gray-800 text-lg tracking-tight">
                Foundation Engineering
              </span>
            </li>
            <li className="flex items-start gap-3 ml-6">
              <span className="text-[#0098AF] text-base">•</span>
              <span className="text-gray-700 font-light leading-relaxed">
                Equipment Foundations – Static & Dynamic Analysis
              </span>
            </li>
            <li className="flex items-start gap-3 ml-6">
              <span className="text-[#0098AF] text-base">•</span>
              <span className="text-gray-700 font-light leading-relaxed">
                Foundation Layouts & Design Reports
              </span>
            </li>
          </ul>
          <ul className="space-y-5">
            {/* Category 3: Industrial & Commercial Building Design */}
            <li className="flex items-start gap-3 group">
              <span className="text-[#0098AF] text-xl transition-transform duration-300 group-hover:scale-110">➢</span>
              <span className="font-semibold text-gray-800 text-lg tracking-tight">
                Industrial & Commercial Building Design
              </span>
            </li>
            <li className="flex items-start gap-3 ml-6">
              <span className="text-[#0098AF] text-base">•</span>
              <span className="text-gray-700 font-light leading-relaxed">
                Admin Buildings, Canteens, Utility Blocks, and Non-Plant Structures
              </span>
            </li>
          </ul>
        </div>
        {/* Enhanced decorative wave line */}
        <div className="mt-10 w-full h-1 bg-gradient-to-r from-transparent via-[#0098AF]/20 to-transparent rounded-full animate-pulse-slow" />
      </section>
    </div>
  );
}