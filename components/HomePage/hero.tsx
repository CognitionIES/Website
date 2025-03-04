"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { heroSlides } from "@/constants/hero";
import { ChevronLeft, ChevronRight } from "lucide-react";

 function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[calc(100vh-4rem)] w-full overflow-hidden">
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            width={1920}
            height={1080}
            priority
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#003C46]/85 to-[#0098AF]/70" />
          {/* Text Overlay */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="text-center text-white px-4 max-w-4xl mx-auto">
              <p className="text-lg md:text-xl mb-4 text-[#99D5DF] font-medium">
                {slide.subtitle}
              </p>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-md text-white">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow-md text-gray-100">
                {slide.description}
              </p>
              <button className="bg-[#0098AF] hover:bg-[#007B8F] text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={() =>
          setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
        }
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full z-20 hover:bg-[#0098AF]/70 transition-colors duration-200"
      >
        <ChevronLeft className="text-white w-6 h-6" />
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full z-20 hover:bg-[#0098AF]/70 transition-colors duration-200"
      >
        <ChevronRight className="text-white w-6 h-6" />
      </button>
    </div>
  );
}
export default Hero