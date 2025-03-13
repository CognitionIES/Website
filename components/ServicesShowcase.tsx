"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Product Engineering",
    description:
      "We deliver end-to-end product solutions with services in Mechanical Design, Electrical Engineering, CAE/CFD, Hydraulic Systems, Prototyping, Asset Management, Embedded Systems, Technical Publications, and Supply Chain Management—transforming ideas into innovative, market-ready products.",
    color: "bg-[#0098AF]",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 2,
    title: "Plant Engineering",
    description:
      "Our plant engineering services optimize industrial facilities with Process & Safety Engineering, Mechanical & Piping Design, Stress Analysis, Civil & Structural Engineering, Electrical & Instrumentation solutions, Modular Packages, Reverse Engineering, and Procurement Support—ensuring efficiency and reliability.",
    color: "bg-[#003C46]",
    image:
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200",
  },
];

export default function ServicesShowcase() {
  const [activeCard, setActiveCard] = useState(1);

  return (
    <section className="w-full py-12 px-4 md:px-6 bg-gray-50">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row gap-6 h-[400px] md:h-[500px]">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => setActiveCard(service.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActiveCard(service.id);
                }
              }}
              tabIndex={0}
              role="button"
              aria-expanded={activeCard === service.id}
              aria-label={`${service.title} service card. Click to ${
                activeCard === service.id ? "collapse" : "expand"
              }`}
              className={cn(
                "relative overflow-hidden rounded-xl transition-all duration-400 ease-in-out cursor-pointer",
                "md:w-[50%]", // Equal width when inactive
                activeCard === service.id && "md:w-[65%]", // Expand active card
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
                    ? "polygon(0% 100%, 100% 0%, 100% 100%, 0% 100%)"
                    : "polygon(100% 0%, 100% 0%, 100% 0%, 100% 0%)",
                  transition: "clip-path 0.4s ease-in-out",
                  opacity: 0.9,
                }}
              />

              {/* Content */}
              <div className="relative h-full p-6 md:p-8 flex flex-col justify-end z-10">
                <h2
                  className={cn(
                    "text-white font-semibold mb-4 transition-all duration-300",
                    "text-xl md:text-2xl lg:text-3xl"
                  )}
                >
                  {service.title}
                </h2>

                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300 delay-200",
                    activeCard === service.id
                      ? "opacity-100 max-h-[250px]"
                      : "opacity-0 max-h-0"
                  )}
                >
                  <p className="text-white/90 text-sm md:text-base leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Read More Button */}
                  <button
                    className={cn(
                      "group flex items-center gap-2 text-white border border-white/40 px-5 py-2 rounded-full",
                      "hover:bg-white hover:text-[#003C46] transition-all duration-300",
                      "text-sm md:text-base"
                    )}
                    onClick={(e) => {
                      e.stopPropagation();
                      // Add your read more action here (e.g., link to a page)
                    }}
                  >
                    Explore Services
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