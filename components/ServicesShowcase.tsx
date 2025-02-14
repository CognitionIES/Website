'use client';

import { useState } from 'react';
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Mobility",
    description: "We bring together digital and physical engineering expertise to revolutionize the future of transportation. From autonomous vehicles to smart infrastructure, we're shaping how the world moves.",
    color: "bg-[#2563eb]",
    image: "https://images.unsplash.com/photo-1611266353653-48952db9da32?auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    title: "Sustainability",
    description: "Creating sustainable solutions that balance environmental responsibility with business growth. Our innovative approaches help organizations reduce their carbon footprint while maximizing efficiency.",
    color: "bg-[#16a34a]",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    title: "Tech",
    description: "Pioneering technological advancements that define the digital era. From AI and machine learning to IoT solutions, we're at the forefront of digital transformation.",
    color: "bg-[#7c3aed]",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80",
  },
];

export default function ServicesShowcase() {
  const [activeCard, setActiveCard] = useState<number>(1);

  return (
    <section className="w-full py-12 px-4 md:px-6 bg-gray-50">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row gap-5 h-[400px] md:h-[600px]">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => setActiveCard(service.id)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveCard(service.id);
                }
              }}
              tabIndex={0}
              role="button"
              aria-expanded={activeCard === service.id}
              aria-label={`${service.title} service card. Click to ${activeCard === service.id ? 'collapse' : 'expand'}`}
              className={cn(
                "relative overflow-hidden rounded-xl transition-all duration-400 ease-in-out cursor-pointer",
                "md:w-[27.5%]",
                activeCard === service.id && "md:w-[45%]",
                "flex-1"
              )}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-400"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              
              {/* Color Overlay with Diagonal Transition */}
              <div 
                className={cn(
                  "absolute inset-0 transition-all duration-400",
                  service.color
                )}
                style={{
                  clipPath: activeCard === service.id 
                    ? 'polygon(0% 100%, 100% 0%, 100% 100%, 0% 100%)' 
                    : 'polygon(100% 0%, 100% 0%, 100% 0%, 100% 0%)',
                  transition: 'clip-path 0.4s ease-in-out',
                  opacity: 0.95
                }}
              />

              {/* Content */}
              <div className="relative h-full p-6 md:p-8 flex flex-col justify-end z-10">
                <h2 className={cn(
                  "text-white font-bold mb-4 transition-all duration-300",
                  "text-xl md:text-[28px]"
                )}>
                  {service.title}
                </h2>
                
                <div className={cn(
                  "overflow-hidden transition-all duration-300 delay-300",
                  activeCard === service.id ? "opacity-100 max-h-[300px]" : "opacity-0 max-h-0"
                )}>
                  <p className="text-white/90 text-sm md:text-base leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  {/* Read More Button */}
                  <button 
                    className={cn(
                      "group flex items-center gap-2 text-white border border-white/30 px-6 py-2 rounded-full",
                      "hover:bg-white hover:text-black transition-all duration-300",
                      "text-sm md:text-base",
                      "transform translate-y-0 hover:-translate-y-1"
                    )}
                    onClick={(e) => {
                      e.stopPropagation();
                      // Add your read more action here
                    }}
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}