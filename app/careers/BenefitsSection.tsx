
import React from 'react';
import { CAREERS_CONSTANTS } from '@/constants/careersPage/constants';

const BenefitsSection = () => {
  const { ITEMS, TITLE } = CAREERS_CONSTANTS.BENEFITS;

  return (
    <section className="py-24 bg-[#F5FDFF]/50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
        <span className="inline-block px-3 py-1 bg-[#0098AF]/10 text-[#0098AF] text-sm font-medium rounded-full mb-4">
            Benefits & Perks
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#003C46] relative drop-shadow-md text-center">
            {TITLE}
          </h2>
          <p className="text-lg text-[#5B5B5B] mb-12 max-w-2xl mx-auto">
            We believe in taking care of our team with comprehensive benefits and a supportive environment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {ITEMS.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 card-hover animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-[#0098AF]/10 mb-6">
                <div className="w-8 h-8 rounded-md bg-[#0098AF] flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{index + 1}</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#003C46] mb-3">{benefit.title}</h3>
              <p className="text-[#5B5B5B]">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;