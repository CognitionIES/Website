import React from 'react';

const results = [
  { metric: "50%", description: "Increased Profit Margins" },
  { metric: "35%", description: "Reduced Manufacturing Costs" },
  { metric: "40+", description: "Optimization Opportunities" },
  { metric: "3x", description: "Market Competitiveness" }
];

const findings = [
  "Significant weight and design differences...",
  "Complex component design increased costs...",
  "Benchmarked products had lighter designs...",
  "Opportunities to standardize parts..."
];

const ProjectResults = () => {
  return (
    <div className="space-y-16 bg-gradient-to-b from-white to-blue/5 py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {results.map((result, index) => (
          <div 
            key={index} 
            className="text-center p-6 rounded-xl bg-white border border-brand-teal/10 shadow-md hover:shadow-xl hover:border-brand-orange/30 transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-teal/5 to-brand-orange/5" />
            <div className="relative text-3xl font-bold text-brand-teal mb-2">{result.metric}</div>
            <div className="text-sm text-brand-darkGray">{result.description}</div>
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl p-8 border border-brand-blue/10 shadow-md hover:shadow-lg transition-all duration-300 order-2 lg:order-1">
          <h3 className="text-2xl font-medium mb-6 text-brand-darkGray">
            Key <span className="text-brand-orange">Findings</span>
          </h3>
          <div className="grid grid-cols-1 gap-6">
            {findings.map((finding, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-teal/20 flex items-center justify-center mr-4 mt-1">
                  <span className="text-brand-teal font-medium">{index + 1}</span>
                </div>
                <p className="text-brand-gray">{finding}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-xl overflow-hidden shadow-md order-1 lg:order-2 bg-gradient-to-br from-brand-teal/10 to-brand-blue/10">
          <h1 className="text-2xl font-semibold text-brand-darkGray p-8">Visual Placeholder</h1>
        </div>
      </div>
    </div>
  );
};

export default ProjectResults;