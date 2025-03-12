"use client"; // Required if you add interactivity (e.g., for a slider); remove if static

import { FiChevronRight } from "react-icons/fi"; // Decorative icon

export default function Content() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 lg:w-5/6">
      {/* Section 1: Service Name and Overview */}
      <section className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#003C46] mb-4 tracking-tight">
          Mechanical Engineering
          <span className="block w-20 h-1 bg-gradient-to-r from-[#0098AF] to-transparent mt-3 rounded-full" />
        </h1>
        <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl font-light text-justify">
          At Cognition, our Mechanical Engineering services are dedicated to designing and delivering robust, efficient, and reliable mechanical systems for industrial plants. We specialize in static and rotating equipment, detailed engineering, and HVAC solutions, ensuring optimal performance and durability. With extensive expertise, our team works closely with you to address complex mechanical challenges, providing tailored solutions for new installations or upgrades. Whether it’s equipment design or system optimization, we bring your project to life with precision and practicality.
        </p>
      </section>

      {/* Section 2: Tools & Technologies */}
      <section className="mb-12 relative">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#003C46] mb-4 flex items-center tracking-tight">
          Tools & Technologies
          <FiChevronRight className="ml-2 text-[#0098AF]" />
        </h2>
        <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4 font-light">
          We leverage industry-leading tools like SolidWorks, ANSYS, and AutoCAD Mechanical to deliver precise and efficient mechanical engineering solutions.
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
          We provide a comprehensive set of services to ensure your success in Mechanical Engineering. Here’s how we can support you:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ul className="space-y-4">
            {/* Category 1: Design & Engineering of Static & Rotating Equipment */}
            <li className="flex items-start gap-3">
              <span className="text-[#0098AF] text-lg">➢</span>
              <span className="font-semibold text-gray-800 text-lg">
                Design & Engineering of Static & Rotating Equipment
              </span>
            </li>
            <li className="flex items-start gap-3 ml-6">
              <span className="text-[#0098AF] text-base">•</span>
              <span className="text-gray-600 font-light">Pressure Vessels</span>
            </li>
            <li className="flex items-start gap-3 ml-6">
              <span className="text-[#0098AF] text-base">•</span>
              <span className="text-gray-600 font-light">Columns & Towers</span>
            </li>
            <li className="flex items-start gap-3 ml-6">
              <span className="text-[#0098AF] text-base">•</span>
              <span className="text-gray-600 font-light">Heat Exchangers</span>
            </li>
            <li className="flex items-start gap-3 ml-6">
              <span className="text-[#0098AF] text-base">•</span>
              <span className="text-gray-600 font-light">Storage Tanks</span>
            </li>
            <li className="flex items-start gap-3 ml-6">
              <span className="text-[#0098AF] text-base">•</span>
              <span className="text-gray-600 font-light">Dryers & Cooling Towers</span>
            </li>
            <li className="flex items-start gap-3 ml-6">
              <span className="text-[#0098AF] text-base">•</span>
              <span className="text-gray-600 font-light">
                Pumping Systems (Pumps & Accessories)
              </span>
            </li>
            <li className="flex items-start gap-3 ml-6">
              <span className="text-[#0098AF] text-base">•</span>
              <span className="text-gray-600 font-light">
                Air & Gas Compressors, Vacuum Systems
              </span>
            </li>

            {/* Category 2: Equipment Drawings & Detailing (Part 1) */}
            <li className="flex items-start gap-3">
              <span className="text-[#0098AF] text-lg">➢</span>
              <span className="font-semibold text-gray-800 text-lg">
                Equipment Drawings & Detailing
              </span>
            </li>
            <li className="flex items-start gap-3 ml-6">
              <span className="text-[#0098AF] text-base">•</span>
              <span className="text-gray-600 font-light">
                Equipment List & Mechanical Datasheets
              </span>
            </li>
            <li className="flex items-start gap-3 ml-6">
              <span className="text-[#0098AF] text-base">•</span>
              <span className="text-gray-600 font-light">
                Mechanical Schematic Diagrams
              </span>
            </li>
            <li className="flex items-start gap-3 ml-6">
              <span className="text-[#0098AF] text-base">•</span>
              <span className="text-gray-600 font-light">
                Equipment Layout & Arrangement Drawings
              </span>
            </li>
            <li className="flex items-start gap-3 ml-6">
              <span className="text-[#0098AF] text-base">•</span>
              <span className="text-gray-600 font-light">
                Fatigue & Failure Analysis (FEA)
              </span>
            </li>
            <li className="flex items-start gap-3 ml-6">
              <span className="text-[#0098AF] text-base">•</span>
              <span className="text-gray-600 font-light">
                General Assembly (GA) Drawings for Equipment
              </span>
            </li>
          </ul>
          <ul className="space-y-4">
            {/* Category 2: Equipment Drawings & Detailing (Part 2) */}
            <li className="flex items-start gap-3">
              <span className="text-[#0098AF] text-lg">➢</span>
              <span className="font-semibold text-gray-800 text-lg">
                Equipment Drawings & Detailing (Continued)
              </span>
            </li>
            <li className="flex items-start gap-3 ml-6">
              <span className="text-[#0098AF] text-base">•</span>
              <span className="text-gray-600 font-light">
                Nozzle & Manhole Detail Drawings
              </span>
            </li>
            <li className="flex items-start gap-3 ml-6">
              <span className="text-[#0098AF] text-base">•</span>
              <span className="text-gray-600 font-light">
                Equipment & Pipe Support Drawings
              </span>
            </li>
            <li className="flex items-start gap-3 ml-6">
              <span className="text-[#0098AF] text-base">•</span>
              <span className="text-gray-600 font-light">
                Ladder & Platform Support Drawings
              </span>
            </li>
            <li className="flex items-start gap-3 ml-6">
              <span className="text-[#0098AF] text-base">•</span>
              <span className="text-gray-600 font-light">
                Tray Support & Welded Internal Details
              </span>
            </li>
            <li className="flex items-start gap-3 ml-6">
              <span className="text-[#0098AF] text-base">•</span>
              <span className="text-gray-600 font-light">
                Tube Bundle Detailing for Shell & Tube Heat Exchangers
              </span>
            </li>
            <li className="flex items-start gap-3 ml-6">
              <span className="text-[#0098AF] text-base">•</span>
              <span className="text-gray-600 font-light">
                3D Modeling & Visualization
              </span>
            </li>
            <li className="flex items-start gap-3 ml-6">
              <span className="text-[#0098AF] text-base">•</span>
              <span className="text-gray-600 font-light">
                Material Take-Off (MTO) & Bill of Materials (BOM)
              </span>
            </li>

            {/* Category 3: HVAC System Design & Engineering */}
            <li className="flex items-start gap-3">
              <span className="text-[#0098AF] text-lg">➢</span>
              <span className="font-semibold text-gray-800 text-lg">
                HVAC System Design & Engineering
              </span>
            </li>
            <li className="flex items-start gap-3 ml-6">
              <span className="text-[#0098AF] text-base">•</span>
              <span className="text-gray-600 font-light">
                HVAC System Design Basis
              </span>
            </li>
            <li className="flex items-start gap-3 ml-6">
              <span className="text-[#0098AF] text-base">•</span>
              <span className="text-gray-600 font-light">
                Heat Load Calculation
              </span>
            </li>
            <li className="flex items-start gap-3 ml-6">
              <span className="text-[#0098AF] text-base">•</span>
              <span className="text-gray-600 font-light">
                Technical Specifications for HVAC Packages
              </span>
            </li>
            <li className="flex items-start gap-3 ml-6">
              <span className="text-[#0098AF] text-base">•</span>
              <span className="text-gray-600 font-light">
                Ducting Layout & Routing
              </span>
            </li>
            <li className="flex items-start gap-3 ml-6">
              <span className="text-[#0098AF] text-base">•</span>
              <span className="text-gray-600 font-light">
                Duct Fabrication Drawings
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