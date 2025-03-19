import React from 'react';
import { CheckCircle, BarChart, PackageSearch, Wrench } from 'lucide-react';
import Image from 'next/image';

const approaches = [
  { icon: BarChart, title: "Cost Analysis & Optimization", descriptions: ["abc"] },
  { icon: PackageSearch, title: "Physical Benchmarking", descriptions: ["..."] },
  { icon: Wrench, title: "Applied VAVE Method", descriptions: ["..."] },
  { icon: CheckCircle, title: "Cross-Functional Collaboration", descriptions: ["..."] },
];

const ProjectApproach = () => {
  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#F7FAFC]">
      {/* Hero Section */}
      <div className="relative mb-16 rounded-2xl overflow-hidden bg-gradient-to-br from-brand-teal/10 to-brand-blue/10">
        <Image
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&q=80"
          alt="Engineering team collaborating on project"
          width={1200}
          height={675}
          className="object-cover w-full h-64 md:h-96 opacity-90"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-darkGray/70 to-transparent" />
        <div className="absolute bottom-0 left-0 p-6 md:p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
            Our <span className="text-brand-orange">Project Approach</span>
          </h1>
          <p className="mt-2 text-brand-gray text-sm md:text-base max-w-2xl">
            Innovative strategies for optimal results
          </p>
        </div>
      </div>

      {/* Approaches Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {approaches.map((approach, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-brand-teal/30"
            role="article"
            aria-labelledby={`approach-title-${index}`}
          >
            <div className="absolute top-0 left-0 w-1 h-0 bg-gradient-to-b from-brand-orange to-brand-teal group-hover:h-full transition-all duration-500" />
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 p-3 rounded-full bg-brand-teal/10 group-hover:bg-brand-teal/20 transition-colors duration-300">
                <approach.icon className="text-brand-teal group-hover:text-brand-orange transition-colors duration-300" size={24} aria-hidden="true" />
              </div>
              <div className="flex-1">
                <h3
                  id={`approach-title-${index}`}
                  className="text-xl font-semibold text-brand-darkGray group-hover:text-brand-teal transition-colors duration-300"
                >
                  {approach.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {approach.descriptions.map((desc, idx) => (
                    <li key={idx} className="flex items-start text-sm text-brand-gray">
                      <span className="flex-shrink-0 w-2 h-2 mt-1.5 mr-3 rounded-full bg-brand-orange/70" />
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectApproach;