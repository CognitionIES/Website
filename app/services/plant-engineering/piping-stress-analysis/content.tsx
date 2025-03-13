"use client"; // Required if you add interactivity (e.g., for a slider); remove if static

import { FiChevronRight } from "react-icons/fi"; // Decorative icon

export default function Content() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 lg:w-5/6">
      {/* Section 1: Service Name and Overview */}
      <section className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#003C46] mb-4 tracking-tight">
          Piping Stress Analysis
          <span className="block w-20 h-1 bg-gradient-to-r from-[#0098AF] to-transparent mt-3 rounded-full" />
        </h1>
        <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl font-light text-justify">
          At Cognition, our Piping Stress Analysis services are dedicated to
          ensuring the safety, reliability, and longevity of piping systems in
          industrial plants. We employ advanced analytical techniques to
          evaluate stress under various conditions, optimizing design and
          supporting structures to meet stringent standards. With deep
          services, our team collaborates with you to address complex
          challenges, from high-pressure systems to seismic loads, delivering
          tailored solutions that enhance operational efficiency and compliance.
          Whether for new designs or existing upgrades, we provide comprehensive
          stress analysis to safeguard your infrastructure.
        </p>
      </section>

      {/* Section 2: Tools & Technologies */}
      <section className="mb-12 relative">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#003C46] mb-4 flex items-center tracking-tight">
          Tools & Technologies
          <FiChevronRight className="ml-2 text-[#0098AF]" />
        </h2>
        <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4 font-light">
          We utilize industry-leading tools like CAESAR II, AutoPIPE, and ANSYS
          to deliver precise and efficient piping stress analysis solutions.
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
          Piping Stress Analysis. Here’s how we can support you:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ul className="space-y-4">
            {/* Category 1: Types of Piping Stress Analysis */}
            <li className="flex items-start gap-3">
              <span className="text-[#0098AF] text-lg">➢</span>
              <span className="font-semibold text-gray-800 text-lg">
                Types of Piping Stress Analysis
              </span>
            </li>
            <li className="flex items-start gap-3 ml-6">
              <span className="text-[#0098AF] text-base">•</span>
              <span className="text-gray-600 font-light">
                Finite Element Analysis (FEA)
              </span>
            </li>
            <li className="flex items-start gap-3 ml-6">
              <span className="text-[#0098AF] text-base">•</span>
              <span className="text-gray-600 font-light">
                Surge & Slug Flow Analysis
              </span>
            </li>
            <li className="flex items-start gap-3 ml-6">
              <span className="text-[#0098AF] text-base">•</span>
              <span className="text-gray-600 font-light">
                Fatigue & Creep Assessment
              </span>
            </li>
            <li className="flex items-start gap-3 ml-6">
              <span className="text-[#0098AF] text-base">•</span>
              <span className="text-gray-600 font-light">
                Displacement & Deflection Studies
              </span>
            </li>
            <li className="flex items-start gap-3 ml-6">
              <span className="text-[#0098AF] text-base">•</span>
              <span className="text-gray-600 font-light">
                Occasional Load Analysis (Wind & Seismic)
              </span>
            </li>
            <li className="flex items-start gap-3 ml-6">
              <span className="text-[#0098AF] text-base">•</span>
              <span className="text-gray-600 font-light">
                Sustained / Longitudinal Stress Evaluation
              </span>
            </li>
            <li className="flex items-start gap-3 ml-6">
              <span className="text-[#0098AF] text-base">•</span>
              <span className="text-gray-600 font-light">
                Piping Flexibility & Support Optimization
              </span>
            </li>
            <li className="flex items-start gap-3 ml-6">
              <span className="text-[#0098AF] text-base">•</span>
              <span className="text-gray-600 font-light">
                Elastic & Plastic Stress Analysis
              </span>
            </li>

            {/* Category 2: Critical System Stress Analysis services */}
            <li className="flex items-start gap-3">
              <span className="text-[#0098AF] text-lg">➢</span>
              <span className="font-semibold text-gray-800 text-lg">
                Critical System Stress Analysis services
              </span>
            </li>
            <li className="flex items-start gap-3 ml-6">
              <span className="text-[#0098AF] text-base">•</span>
              <span className="text-gray-600 font-light">
                Cryogenic Piping Systems
              </span>
            </li>
            <li className="flex items-start gap-3 ml-6">
              <span className="text-[#0098AF] text-base">•</span>
              <span className="text-gray-600 font-light">
                Above-Ground & Underground Piping Networks
              </span>
            </li>
            <li className="flex items-start gap-3 ml-6">
              <span className="text-[#0098AF] text-base">•</span>
              <span className="text-gray-600 font-light">
                Jacketed Piping Systems
              </span>
            </li>
            <li className="flex items-start gap-3 ml-6">
              <span className="text-[#0098AF] text-base">•</span>
              <span className="text-gray-600 font-light">
                FRP (Fiberglass Reinforced Plastic) Piping Systems
              </span>
            </li>
            <li className="flex items-start gap-3 ml-6">
              <span className="text-[#0098AF] text-base">•</span>
              <span className="text-gray-600 font-light">
                Offshore & FPSO (Floating Production Storage & Offloading)
                Piping Systems
              </span>
            </li>
            <li className="flex items-start gap-3 ml-6">
              <span className="text-[#0098AF] text-base">•</span>
              <span className="text-gray-600 font-light">
                High-Temperature & High-Pressure Piping
              </span>
            </li>
          </ul>
          <ul className="space-y-4">
            {/* Category 3: Engineering Calculations & Validations */}
            <li className="flex items-start gap-3">
              <span className="text-[#0098AF] text-lg">➢</span>
              <span className="font-semibold text-gray-800 text-lg">
                Engineering Calculations & Validations
              </span>
            </li>
            <li className="flex items-start gap-3 ml-6">
              <span className="text-[#0098AF] text-base">•</span>
              <span className="text-gray-600 font-light">
                Trunnion Support Load Check
              </span>
            </li>
            <li className="flex items-start gap-3 ml-6">
              <span className="text-[#0098AF] text-base">•</span>
              <span className="text-gray-600 font-light">
                Flange Integrity Analysis (NC-3685.3 & API Standards)
              </span>
            </li>
            <li className="flex items-start gap-3 ml-6">
              <span className="text-[#0098AF] text-base">•</span>
              <span className="text-gray-600 font-light">
                Upheaval & Buckling Analysis
              </span>
            </li>
            <li className="flex items-start gap-3 ml-6">
              <span className="text-[#0098AF] text-base">•</span>
              <span className="text-gray-600 font-light">
                Weld Strength Evaluation
              </span>
            </li>
            <li className="flex items-start gap-3 ml-6">
              <span className="text-[#0098AF] text-base">•</span>
              <span className="text-gray-600 font-light">
                U-Bolt Load Calculations
              </span>
            </li>
            <li className="flex items-start gap-3 ml-6">
              <span className="text-[#0098AF] text-base">•</span>
              <span className="text-gray-600 font-light">
                Collapse & Structural Stability Calculations
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
