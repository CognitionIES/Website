import Image from "next/image";
import React from "react";
import approachImage from "@/constants/images/projects/pcm/pcm-approach.jpg";
//import bgImage from "@/constants/images/projects/pcm/7.jpg";

const ProjectApproach = () => {
  return (
    <div className="relative ">
      <div className="absolute inset-0 bg-gradient-to-b from-[#E6F0F5] to-white opacity-90 z-0" />
      <div className="absolute inset-0 bg-[] bg-cover bg-center opacity-20 z-0" />

      <section className="relative z-10 py-8 sm:py-10 lg:py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-xl p-4">
          <h1 className="text-4xl font-bold mb-2 text-[#003C46]">
            🧠 Cognition&apos;s PCM Approach
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-6">
            <div className="lg:col-span-4">
              {[
                {
                  title: "Cost Analysis & Optimization",
                  points: [
                    "Conducted a thorough review of material costs, design efficiency, and manufacturing processes.",
                    "Applied value engineering principles to identify cost-saving opportunities.",
                    "Implemented should-costing methodologies to drive supplier negotiations.",
                  ],
                },
                {
                  title: "Physical Benchmarking",
                  points: [
                    "Performed hands-on analysis of competitor equipment to gain actionable insights.",
                    "Compared product performance and material choices to industry standards.",
                    "Leveraged reverse engineering to understand competitor cost structures.",
                  ],
                },
                {
                  title: "Applied VAVE Method",
                  points: [
                    "Utilized VAVE method to optimize design and manufacturing.",
                    "Focused on enhancing product value while reducing unnecessary costs.",
                    "Implemented a phased approach with regular feedback loops to refine recommendations.",
                  ],
                },
                {
                  title: "Cross-functional Collaboration",
                  points: [
                    "Engaged with client teams across engineering, procurement, and operations to align strategies.",
                    "Facilitated workshops to identify and implement cost-saving opportunities.",
                    "Provided training & knowledge transfer to internal teams for continuous improvement.",
                  ],
                },
              ].map((section, idx) => (
                <div
                  key={idx}
                  className={`p-1 ml-14 rounded-xl transition-shadow ${
                    idx % 2 === 0 ? "px-0" : "px-32"
                  }`}
                >
                  <div
                    className="shadow-md px-2 py-1 rounded-xl bg-white/80 backdrop-blur-sm border border-[#0098af] w-[600px]"
                    style={{ zIndex: idx + 1 }}
                  >
                    <h2 className="text-xl font-bold text-[#0098af] ">
                      {idx + 1}. {section.title}
                    </h2>
                    <div className="space-y-1">
                      {section.points.map((point, pointIdx) => (
                        <div key={pointIdx} className="flex items-start gap-2">
                          <span className="text-[#00b4d8]  pl-4">•</span>
                          <p className="text-[#5b5b5b] text-sm">{point}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-2 z-20 justify-end hidden lg:flex items-center">
              <Image
                src={approachImage}
                alt="Project approach visualization with wooden blocks"
                className="h-[500px] w-[280px] z-10 rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectApproach;
