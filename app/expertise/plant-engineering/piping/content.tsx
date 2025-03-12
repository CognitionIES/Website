"use client"; // Required if you add interactivity (e.g., for a slider); remove if static

import { FiChevronRight } from "react-icons/fi"; // Decorative icon

export default function Content() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 lg:w-5/6">
      {/* Section 1: Service Name and Overview */}
      <section className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#003C46] mb-4 tracking-tight">
          Piping Engineering
          <span className="block w-20 h-1 bg-gradient-to-r from-[#0098AF] to-transparent mt-3 rounded-full" />
        </h1>
        <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl font-light text-justify">
          At Cognition, our Piping Engineering services are designed to deliver efficient, safe, and optimized piping systems for industrial plants. We specialize in creating detailed layouts, conducting rigorous analysis, and managing materials to ensure seamless integration and performance. With extensive expertise, our team collaborates with you to address complex piping challenges, from design to documentation, enhancing project reliability and compliance. Whether it’s a new installation or an upgrade, we provide tailored solutions to meet your specific piping needs.
        </p>
      </section>

      {/* Section 2: Tools & Technologies */}
      <section className="mb-12 relative">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#003C46] mb-4 flex items-center tracking-tight">
          Tools & Technologies
          <FiChevronRight className="ml-2 text-[#0098AF]" />
        </h2>
        <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4 font-light">
          We utilize industry-leading tools like AutoCAD Plant 3D, CAESAR II, and PDMS to deliver precise and efficient piping engineering solutions.
        </p>
        {/* Placeholder for slider with subtle shadow and border */}
        <div className="w-full h-24 bg-gray-100 flex items-center justify-center rounded-lg mt-4 border border-gray-200 shadow-sm">
          <span className="text-gray-500 font-medium">Logo Slider Carousel</span>
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
          We provide a comprehensive set of services to ensure your success in Piping Engineering. Here’s how we can support you:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ul className="space-y-4">
            {/* Category 1: Piping Layout & Design */}
            <li className="flex items-start gap-3">
              <span className="text-[#0098AF] text-lg">➢</span>
              <span className="font-semibold text-gray-800 text-lg">
                Piping Layout & Design
              </span>
            </li>
            <li className="flex items-start gap-3 ml-6">
              <span className="text-[#0098AF] text-base">•</span>
              <span className="text-gray-600 font-light">
                Overall & Unit Plot Plans
              </span>
            </li>
            <li className="flex items-start gap-3 ml-6">
              <span className="text-[#0098AF] text-base">•</span>
              <span className="text-gray-600 font-light">
                Equipment Layout & General Arrangement Drawings
              </span>
            </li>
            <li className="flex items-start gap-3 ml-6">
              <span className="text-[#0098AF] text-base">•</span>
              <span className="text-gray-600 font-light">
                Piping Layout & General Arrangement Drawings
              </span>
            </li>
            <li className="flex items-start gap-3 ml-6">
              <span className="text-[#0098AF] text-base">•</span>
              <span className="text-gray-600 font-light">
                Piping Isometric Drawings
              </span>
            </li>
            <li className="flex items-start gap-3 ml-6">
              <span className="text-[#0098AF] text-base">•</span>
              <span className="text-gray-600 font-light">
                Line List / Line Schedule
              </span>
            </li>
            <li className="flex items-start gap-3 ml-6">
              <span className="text-[#0098AF] text-base">•</span>
              <span className="text-gray-600 font-light">
                Nozzle Orientation, Spool Fabrication, Special Supports & Platform Design
              </span>
            </li>
            <li className="flex items-start gap-3 ml-6">
              <span className="text-[#0098AF] text-base">•</span>
              <span className="text-gray-600 font-light">
                Piping Support Design & Load Calculations
              </span>
            </li>

            {/* Category 2: Material & Specification Management */}
            <li className="flex items-start gap-3">
              <span className="text-[#0098AF] text-lg">➢</span>
              <span className="font-semibold text-gray-800 text-lg">
                Material & Specification Management
              </span>
            </li>
            <li className="flex items-start gap-3 ml-6">
              <span className="text-[#0098AF] text-base">•</span>
              <span className="text-gray-600 font-light">
                Piping Material Take-Off (MTO) & Bill of Materials (BOM)
              </span>
            </li>
            <li className="flex items-start gap-3 ml-6">
              <span className="text-[#0098AF] text-base">•</span>
              <span className="text-gray-600 font-light">
                Insulation, Painting, & Material Specifications
              </span>
            </li>
            <li className="flex items-start gap-3 ml-6">
              <span className="text-[#0098AF] text-base">•</span>
              <span className="text-gray-600 font-light">
                Specialty Items List
              </span>
            </li>
            <li className="flex items-start gap-3 ml-6">
              <span className="text-[#0098AF] text-base">•</span>
              <span className="text-gray-600 font-light">
                Valve & Piping Special Component Data Sheets
              </span>
            </li>
          </ul>
          <ul className="space-y-4">
            {/* Category 3: Analysis & Modeling */}
            <li className="flex items-start gap-3">
              <span className="text-[#0098AF] text-lg">➢</span>
              <span className="font-semibold text-gray-800 text-lg">
                Analysis & Modeling
              </span>
            </li>
            <li className="flex items-start gap-3 ml-6">
              <span className="text-[#0098AF] text-base">•</span>
              <span className="text-gray-600 font-light">
                Piping Stress Analysis
              </span>
            </li>
            <li className="flex items-start gap-3 ml-6">
              <span className="text-[#0098AF] text-base">•</span>
              <span className="text-gray-600 font-light">
                3D Modeling & Simulation
              </span>
            </li>

            {/* Category 4: Procurement & Documentation Support */}
            <li className="flex items-start gap-3">
              <span className="text-[#0098AF] text-lg">➢</span>
              <span className="font-semibold text-gray-800 text-lg">
                Procurement & Documentation Support
              </span>
            </li>
            <li className="flex items-start gap-3 ml-6">
              <span className="text-[#0098AF] text-base">•</span>
              <span className="text-gray-600 font-light">
                Technical Bid Evaluation (TBE) for Piping Components
              </span>
            </li>
            <li className="flex items-start gap-3 ml-6">
              <span className="text-[#0098AF] text-base">•</span>
              <span className="text-gray-600 font-light">
                As-Built Documentation & Updates
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