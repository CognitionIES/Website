"use client";

import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Updated service data with refined descriptions and better image selection
const services = [
  {
    id: 1,
    title: "Product Engineering",
    description:
      "We deliver end-to-end product solutions with precision engineering across mechanical design, electrical systems, and prototyping. Our expertise transforms concepts into market-ready innovations through rigorous analysis and integrated manufacturing solutions.",
    color: "bg-[#0098af]",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200",
  //  icon: "🛠️",
  //  features: ["Mechanical Design", "Electrical Engineering", "CAE/CFD Analysis", "Prototyping"]
  },
  {
    id: 2,
    title: "Plant Engineering",
    description:
      "Our plant engineering services optimize industrial facilities through integrated process design, structural analysis, and modular solutions. We enhance operational efficiency while maintaining rigorous safety standards across mechanical, electrical, and civil engineering disciplines.",
    color: "bg-[#003C46]",
    image:
      "https://images.unsplash.com/photo-1487875961445-47a00398c267?auto=format&fit=crop&q=80&w=1200",
  //  icon: "🏭",
  //  features: ["Process Engineering", "Piping Design", "Structural Analysis", "Modular Packages"]
  },
  {
    id: 3,
    title: "SaaS Solutions",
    description: "We deliver enterprise-grade SaaS platforms that transform business operations through intelligent automation and analytics. Our solutions integrate seamlessly with existing infrastructure to enhance productivity, optimize workflows, and provide actionable insights across your organization.",
    color: "bg-[#00b4d8]",
    image:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=1200",
    // icon: "☁️",
    //features: ["Cloud Infrastructure", "Custom Development", "Data Analytics", "System Integration"]
  },
  {
    id: 4,
    title: "Staffing and Recruitment",
    description: "Our specialized recruitment solutions connect industry-leading organizations with exceptional talent. We employ a consultative approach that aligns technical expertise with organizational culture, ensuring optimal workforce solutions for specialized engineering, technology, and leadership roles.",
    color: "bg-[#0098af]",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1200",
//    icon: "👥",
   // features: ["Technical Recruitment", "Executive Search", "Contract Staffing", "Talent Assessment"]
  },
];

export default function EnhancedServicesShowcase() {
  const [activeCard, setActiveCard] = useState(1);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [direction, setDirection] = useState("right");
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check viewport size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // const handleNext = (e: React.MouseEvent) => {
  //   e.stopPropagation();
  //   setDirection("right");
  //   setActiveCard((prev) => (prev === services.length ? 1 : prev + 1));
  // };

  // const handlePrev = (e: React.MouseEvent) => {
  //   e.stopPropagation();
  //   setDirection("left");
  //   setActiveCard((prev) => (prev === 1 ? services.length : prev - 1));
  // };

  // Auto-scroll to active card on mobile
  useEffect(() => {
    if (isMobile && containerRef.current) {
      const activeElement = containerRef.current.querySelector(`[data-service-id="${activeCard}"]`);
      if (activeElement) {
        containerRef.current.scrollTo({
          left: activeElement.getBoundingClientRect().left + containerRef.current.scrollLeft - 20,
          behavior: 'smooth'
        });
      }
    }
  }, [activeCard, isMobile]);

  return (
    <section className="w-full py-20 px-4 md:px-6 bg-gradient-to-b from-white via-white to-[#E6F0F5]/20">
      <div className="max-w-[1200px] mx-auto">
        <div className=" mb-8 space-y-1">
          <h2 className="text-3xl md:text-4xl font-bold text-[#003C46] mb-3 tracking-tight">Our Services
          </h2>
          <p className="text-[#5b5b5b]/80 max-w-7xl mx-auto text-base md:text-lg font-light">
          Driving innovation and efficiency through advanced engineering solutions, optimizing products and processes for maximum performance.

</p>
        </div>

        {/* Desktop Navigation Controls */}
        {/* {!isMobile && (
          <div className="hidden md:flex justify-end gap-2 mb-6">
            <button 
              onClick={handlePrev}
              className="p-2 rounded-full border border-[#003C46]/10 hover:bg-[#E6F0F5] transition-colors duration-300 group"
              aria-label="Previous service"
            >
              <ChevronLeft className="w-5 h-5 text-[#003C46]/70 group-hover:text-[#003C46]" />
            </button>
            <button 
              onClick={handleNext}
              className="p-2 rounded-full border border-[#003C46]/10 hover:bg-[#E6F0F5] transition-colors duration-300 group"
              aria-label="Next service"
            >
              <ChevronRight className="w-5 h-5 text-[#003C46]/70 group-hover:text-[#003C46]" />
            </button>
          </div>
        )} */}

        {/* Services Cards Container */}
        <div 
          ref={containerRef}
          className="flex gap-6 md:gap-8 overflow-x-auto md:overflow-x-visible pb-6 md:pb-0 snap-x md:snap-none scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {services.map((service) => (
            <div
              key={service.id}
              data-service-id={service.id}
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
                "relative overflow-hidden rounded-xl md:rounded-2xl shadow-md transition-all ease-out cursor-pointer",
                "snap-center shrink-0",
                "min-w-[280px] md:min-w-0", 
                "h-[420px] md:h-[480px]",
                isMobile ? "w-[280px]" : "flex-1",
                !isMobile && activeCard === service.id ? "md:w-[42%]" : "md:w-[19.333%]",
                activeCard === service.id ? "ring-1 ring-[#0098af]/30" : "",
                "duration-500"
              )}
            >
              {/* Icon Badge
              <div className={cn(
                "absolute top-6 left-6 z-20 w-10 h-10 flex items-center justify-center rounded-full",
                service.color,
                "opacity-90 shadow-md transition-transform duration-300",
                activeCard === service.id ? "scale-110" : ""
              )}>
                <span className="text-white text-xl">{service.icon}</span>
              </div> */}
              
              {/* Background Image with subtle zoom effect */}
              <div
                className={cn(
                  "absolute inset-0 bg-cover bg-center transition-transform duration-700",
                  activeCard === service.id ? "scale-105" : "scale-100"
                )}
                style={{ backgroundImage: `url(${service.image})` }}
              />

              {/* Gradient Overlay */}
              <div
                className={cn(
                  "absolute inset-0 transition-opacity duration-500",
                  activeCard === service.id ? "opacity-95" : "opacity-90"
                )}
                style={{
                  background: activeCard === service.id 
                    ? `linear-gradient(to top, ${
                        service.color === "bg-[#0098af]" 
                          ? "#0098af" 
                          : service.color === "bg-[#003C46]" 
                          ? "#003C46" 
                          : "#00b4d8"
                      } 30%, rgba(0,0,0,0.5) 100%)`
                    : "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.5) 100%)"
                }}
              />

              {/* Content Container */}
              <div className="relative h-full  md:p-8 flex flex-col justify-end z-10">
                {/* Title with animated underline on active */}
                <h3
                  className={cn(
                    "text-white font-medium -rotate-90  transition-all duration-300",
                    "text-xl md:text-2xl lg:text-3xl relative inline-block"
                  )}
                >
                  {service.title}
                  {/* {activeCard === service.id && (
                    <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-white/50 transform origin-left animate-slide-in"></span>
                  )} */}
                </h3>

                {/* Animated Content for Active Card */}
                <AnimatePresence mode="wait">
                  {activeCard === service.id && (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="space-y-4"
                    >
                      <p className="text-white/90  text-sm md:text-base leading-relaxed font-light">
                        {service.description}
                      </p>
                      
                      {/* Features List
                      <ul className="grid grid-cols-2 gap-2 mt-6">
                        {service.features.map((feature, index) => (
                          <motion.li 
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.15 + index * 0.1 }}
                            className="flex items-center text-white/80 text-sm"
                          >
                            <div className="w-1.5 h-1.5 bg-white rounded-full mr-2"></div>
                            <span className="font-light">{feature}</span>
                          </motion.li>
                        ))}
                      </ul> */}

                      {/* Explore Button */}
                      <motion.button
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.4 }}
                        className={cn(
                          "group flex items-center gap-2 text-white mt-6",
                          "bg-white/10 hover:bg-white/80 hover:text-black backdrop-blur-sm",
                          "px-5 py-2.5 rounded-full transition-all duration-300",
                          "text-sm font-medium"
                        )}
                        onClick={(e) => {
                          e.stopPropagation();
                          // Add navigation action here
                        }}
                      >
                        Explore Solutions
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </motion.button>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Preview Text for Inactive Cards */}
                {activeCard !== service.id && (
                  <p className="text-white/80 text-sm line-clamp-3 transition-all duration-300 font-light">
                    {service.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Indicators */}
        {isMobile && (
          <div className="flex justify-center gap-1.5 mt-6">
            {services.map((service) => (
              <button
                key={service.id}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  activeCard === service.id
                    ? "bg-[#0098af] scale-125"
                    : "bg-[#5b5b5b]/20"
                )}
                onClick={() => setActiveCard(service.id)}
                aria-label={`Go to ${service.title} service`}
              />
            ))}
          </div>
        )}

        {/* View All Solutions Link */}
        <div className="mt-12 text-center">
          <a 
            href="#" 
            className="inline-flex items-center gap-1 text-[#003C46]/80 hover:text-[#0098af] transition-colors duration-300 text-sm font-medium group"
          >
            View all our solutions
            <ExternalLink className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
