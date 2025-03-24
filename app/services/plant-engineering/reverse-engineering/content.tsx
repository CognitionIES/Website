"use client"; // Required if you add interactivity (e.g., for a slider); remove if static

import { FiChevronRight } from "react-icons/fi"; // Decorative icon

export default function Content() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 lg:w-5/6">
      {/* Section 1: Service Name and Overview */}
      <section className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#003C46] mb-4 tracking-tight">
          Reverse Engineering
          <span className="block w-20 h-1 bg-gradient-to-r from-[#0098AF] to-transparent mt-3 rounded-full" />
        </h1>
        <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl font-light text-justify">
          At Cognition, our Reverse Engineering services enable you to recreate,
          analyze, and enhance existing systems with precision and efficiency.
          We leverage advanced scanning and modeling techniques to transform
          physical assets into accurate digital models, facilitating upgrades,
          maintenance, and integration. Our expert team ensures seamless data
          capture and detailed deliverables, empowering you to optimize plant
          performance and extend asset lifespan with confidence.
        </p>
      </section>

      {/* Section 2: Tools & Technologies */}
      <section className="mb-12 relative">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#003C46] mb-4 flex items-center tracking-tight">
          Tools & Technologies
          <FiChevronRight className="ml-2 text-[#0098AF]" />
        </h2>
        <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4 font-light">
          We utilize industry-leading tools like FARO Laser Scanner, Geomagic
          Design X, and AutoCAD to deliver precise and efficient reverse
          engineering solutions.
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
          Reverse Engineering. Here’s how we can support you:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ul className="space-y-4">
            {/* Category 1: Advanced Scanning & Data Capture */}
            <li className="flex items-start gap-3">
              <span className="text-[#0098AF] text-lg">➢</span>
              <span className="font-semibold text-gray-800 text-lg">
                Advanced Scanning & Data Capture
              </span>
            </li>
            <li className="flex items-start gap-3 ml-6">
              <span className="text-[#0098AF] text-base">•</span>
              <span className="text-gray-600 font-light">
                High-Precision Laser Scanning for Existing Plants & Equipment
              </span>
            </li>
            <li className="flex items-start gap-3 ml-6">
              <span className="text-[#0098AF] text-base">•</span>
              <span className="text-gray-600 font-light">
                Creating Accurate 3D Laser Models from Scanned Point Cloud Data
              </span>
            </li>
            <li className="flex items-start gap-3 ml-6">
              <span className="text-[#0098AF] text-base">•</span>
              <span className="text-gray-600 font-light">
                Supported File Formats: .pptx, .pcg, .xyz, .dwg, .dgn, .rvt, .fl
                .fls
              </span>
            </li>

            {/* Category 2: 3D Modeling & Data Translation */}
            <li className="flex items-start gap-3">
              <span className="text-[#0098AF] text-lg">➢</span>
              <span className="font-semibold text-gray-800 text-lg">
                3D Modeling & Data Translation
              </span>
            </li>
            <li className="flex items-start gap-3 ml-6">
              <span className="text-[#0098AF] text-base">•</span>
              <span className="text-gray-600 font-light">
                Converting As-Built Data into Millimeter-Accurate 3D CAD Models
              </span>
            </li>
            <li className="flex items-start gap-3 ml-6">
              <span className="text-[#0098AF] text-base">•</span>
              <span className="text-gray-600 font-light">
                Generating Dumb Models from Laser Scans
              </span>
            </li>
            <li className="flex items-start gap-3 ml-6">
              <span className="text-[#0098AF] text-base">•</span>
              <span className="text-gray-600 font-light">
                Transforming Dumb Models into Intelligent Models
              </span>
            </li>
          </ul>
          <ul className="space-y-4">
            {/* Category 3: Deliverables & Final Outputs */}
            <li className="flex items-start gap-3">
              <span className="text-[#0098AF] text-lg">➢</span>
              <span className="font-semibold text-gray-800 text-lg">
                Deliverables & Final Outputs
              </span>
            </li>
            <li className="flex items-start gap-3 ml-6">
              <span className="text-[#0098AF] text-base">•</span>
              <span className="text-gray-600 font-light">
                Extraction & Submission of Detailed Engineering Drawings &
                Reports
              </span>
            </li>
            <li className="flex items-start gap-3 ml-6">
              <span className="text-[#0098AF] text-base">•</span>
              <span className="text-gray-600 font-light">
                Integration of Reverse Engineered Models into Existing Design
                Workflows
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
