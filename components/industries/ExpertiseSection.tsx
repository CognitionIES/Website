"use client";

import { FC } from 'react';
import { Industry } from '@/types/industry';
import { CheckCircle } from 'lucide-react';

interface ExpertiseSectionProps {
  industry: Industry;
}

const ExpertiseSection: FC<ExpertiseSectionProps> = ({ industry }) => {
  const expertisePoints = [
    "Industry-leading technical expertise",
    "Proven track record of successful projects",
    "Innovative solutions using cutting-edge technology",
    "Comprehensive end-to-end service delivery",
    "Global presence with local expertise",
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Expertise in {industry.title}</h2>
            <p className="text-gray-600 mb-8">
              With years of experience in the {industry.title.toLowerCase()} sector, 
              we bring unparalleled expertise and innovative solutions to every project.
            </p>
            <div className="space-y-4">
              {expertisePoints.map((point, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-gray-700">{point}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <img
              src={industry.heroImage}
              alt={`${industry.title} expertise`}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;