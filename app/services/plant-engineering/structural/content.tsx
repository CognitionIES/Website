"use client"; // Required if you add interactivity (e.g., for a slider); remove if static

import { FiChevronRight } from "react-icons/fi"; // Decorative icon

export default function Content() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 lg:w-5/6">
      {/* Section 1: Service Name and Overview */}
      <section className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#003C46] mb-4 tracking-tight">
          Structural Engineering
          <span className="block w-20 h-1 bg-gradient-to-r from-[#0098AF] to-transparent mt-3 rounded-full" />
        </h1>
        <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl font-light text-justify">
          At Cognition, our Structural Engineering services are designed to
          deliver robust, safe, and efficient structural solutions for
          industrial plants. We specialize in designing and analyzing
          specialized structures, providing detailed engineering for complex
          frameworks, and ensuring safe transportation and lifting operations.
          Our expert team collaborates with you to meet project-specific
          requirements, ensuring compliance with industry standards and
          optimizing structural performance for long-term reliability.
        </p>
      </section>

      {/* Section 2: Tools & Technologies */}
      <section className="mb-12 relative">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#003C46] mb-4 flex items-center tracking-tight">
          Tools & Technologies
          <FiChevronRight className="ml-2 text-[#0098AF]" />
        </h2>
        <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4 font-light">
          We utilize industry-leading tools like STAAD.Pro, SAP2000, and ANSYS
          to deliver precise and efficient structural engineering solutions.
        </p>
        {/* Placeholder for slider with subtle shadow and border */}
        <div className="w-full h-24 bg-gray-100 flex items-center justify-center rounded-lg mt-4 border border-gray-200 shadow-sm">
          <span className="text-gray-500 font-medium">
            Logo Slider Carousel
          </span>
        </div>
        {/* Decorative dot */}
        <div className="absolute top-4 right-4 w-3 h-3 bg-[#0098AF] rounded-full opacity-50" />
      </section>

      {/* Section 3: What We Offer? */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#003C46] mb-4 tracking-tight">
          What We Offer
        </h2>
        <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6 max-w-3xl font-light text-justify">
          We provide a comprehensive set of services to ensure your success in
          Structural Engineering. Here’s how we can support you:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ul className="space-y-4">
            {/* Category 1: Specialized Structural Engineering */}
            <li className="flex items-start gap-3">
              <span className="text-[#0098AF] text-lg">➢</span>
              <span className="font-semibold text-gray-800 text-lg">
                Specialized Structural Engineering
              </span>
            </li>
            <li className="flex items-start gap-3 ml-6">
              <span className="text-[#0098AF] text-base">•</span>
              <span className="text-gray-600 font-light">
                Hot Oil Heater Supporting Structures
              </span>
            </li>
            <li className="flex items-start gap-3 ml-6">
              <span className="text-[#0098AF] text-base">•</span>
              <span className="text-gray-600 font-light">
                Waste Heat Recovery Units (WHRU)
              </span>
            </li>
            <li className="flex items-start gap-3 ml-6">
              <span className="text-[#0098AF] text-base">•</span>
              <span className="text-gray-600 font-light">
                Reactor Structures & FPSO Modules
              </span>
            </li>
            <li className="flex items-start gap-3 ml-6">
              <span className="text-[#0098AF] text-base">•</span>
              <span className="text-gray-600 font-light">
                Technological Structures & Heavy Industrial Frameworks
              </span>
            </li>

            {/* Category 3: Transportation & Lifting Engineering */}
            <li className="flex items-start gap-3">
              <span className="text-[#0098AF] text-lg">➢</span>
              <span className="font-semibold text-gray-800 text-lg">
                Transportation & Lifting Engineering
              </span>
            </li>
            <li className="flex items-start gap-3 ml-6">
              <span className="text-[#0098AF] text-base">•</span>
              <span className="text-gray-600 font-light">
                Structural Integrity Assessments for Transport
              </span>
            </li>
            <li className="flex items-start gap-3 ml-6">
              <span className="text-[#0098AF] text-base">•</span>
              <span className="text-gray-600 font-light">
                Lifting Analysis, Reports & Drawings
              </span>
            </li>
          </ul>
          <ul className="space-y-4">
            {/* Category 2: Structural Detailing & Analysis */}

            <li className="flex items-start gap-3">
              <span className="text-[#0098AF] text-lg">➢</span>
              <span className="font-semibold text-gray-800 text-lg">
                Structural Detailing & Analysis
              </span>
            </li>
            <li className="flex items-start gap-3 ml-6">
              <span className="text-[#0098AF] text-base">•</span>
              <span className="text-gray-600 font-light">
                General Arrangement (GA), Erection, and Fabrication Drawings
              </span>
            </li>
            <li className="flex items-start gap-3 ml-6">
              <span className="text-[#0098AF] text-base">•</span>
              <span className="text-gray-600 font-light">
                Pipe Supports, Pipe Racks, Shelters, Platforms, Crossovers, and
                Sleepers
              </span>
            </li>
            <li className="flex items-start gap-3 ml-6">
              <span className="text-[#0098AF] text-base">•</span>
              <span className="text-gray-600 font-light">
                Structural Stress Analysis for:
              </span>
            </li>
            <li className="flex items-start gap-3 ml-12">
              <span className="text-[#0098AF] text-base">◦</span>
              <span className="text-gray-600 font-light">
                Barge Transport & Offshore Load Handling
              </span>
            </li>
            <li className="flex items-start gap-3 ml-12">
              <span className="text-[#0098AF] text-base">◦</span>
              <span className="text-gray-600 font-light">
                Dropped Object Impact Studies
              </span>
            </li>
            <li className="flex items-start gap-3 ml-12">
              <span className="text-[#0098AF] text-base">◦</span>
              <span className="text-gray-600 font-light">
                Transit & Survival Load Assessments
              </span>
            </li>
            <li className="flex items-start gap-3 ml-12">
              <span className="text-[#0098AF] text-base">◦</span>
              <span className="text-gray-600 font-light">
                Fire, Blast, and Fatigue Conditions
              </span>
            </li>
            <li className="flex items-start gap-3 ml-12">
              <span className="text-[#0098AF] text-base">◦</span>
              <span className="text-gray-600 font-light">
                In-Place Analysis (Operating, Damage, Extreme Scenarios)
              </span>
            </li>
          </ul>
        </div>
        {/* Decorative wave line at the bottom */}
        <div className="mt-8 w-full h-1 bg-gradient-to-r from-[#0098AF]/10 via-transparent to-[#0098AF]/10 rounded-full" />
      </section>
    </div>
  );
}
