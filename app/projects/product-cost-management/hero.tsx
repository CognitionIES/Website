import React from 'react';
import { ArrowDownIcon } from 'lucide-react';

const ProjectHero = () => {
  const scrollToContent = () => {
    const contentElement = document.getElementById('overview');
    if (contentElement) window.scrollTo({ top: contentElement.offsetTop - 50, behavior: 'smooth' });
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-brand-teal/5 to-brand-blue/5">
      <div className="absolute inset-0 bg-[#F7FAFC] z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/80"></div>
      </div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-24 md:pt-40 md:pb-32 z-10">
        <div className="max-w-3xl animate-fade-in">
          <div className="inline-block px-3 py-1 mb-6 text-sm font-medium text-brand-teal bg-brand-teal/10 rounded-full">Case Study</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 text-brand-darkGray">
            Log Splitter <span className="text-brand-orange">Cost Optimization</span>
          </h1>
          <p className="text-xl md:text-2xl text-brand-gray mb-12 leading-relaxed">
            Engineering innovative solutions for manufacturing efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            {["Industrial Equipment", "Manufacturing", "Cost Optimization"].map((tag, idx) => (
              <div key={idx} className="rounded-full px-4 py-2 inline-flex items-center text-sm text-brand-gray bg-white border border-brand-teal/20">
                <span className="mr-2 w-2 h-2 rounded-full bg-brand-orange" />
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <button 
          onClick={scrollToContent}
          className="rounded-full w-12 h-12 bg-brand-teal text-white shadow-lg hover:bg-brand-orange transition-all duration-300"
          aria-label="Scroll to content"
        >
          <ArrowDownIcon size={20} />
        </button>
      </div>
    </div>
  );
};

export default ProjectHero;