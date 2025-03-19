import React from 'react';
import { ArrowRight, Sparkle } from 'lucide-react';

const ProjectCTA = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-brand-teal to-brand-blue rounded-xl py-12 md:py-16 px-8 md:px-12">
      <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 rounded-full bg-white/20" />
      <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 rounded-full bg-white/10" />
      <Sparkle size={24} className="absolute top-10 left-10 text-brand-orange/50" />
      <Sparkle size={16} className="absolute bottom-10 right-10 text-brand-orange/30" />
      
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-medium mb-6 text-white">
          Ready to <span className="text-brand-orange">optimize</span> your manufacturing costs?
        </h2>
        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
          Our team specializes in cost optimization without compromising quality.
        </p>
        <button className="inline-flex items-center bg-brand-orange text-white px-6 py-3 rounded-lg font-medium hover:bg-brand-teal hover:shadow-lg transition-all duration-300 group">
          Start Your Project
          <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
};

export default ProjectCTA;