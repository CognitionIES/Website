"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import { heroSlides } from "@/constants/hero";
import { ChevronLeft, ChevronRight } from "lucide-react";


export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[calc(100vh-4rem)] w-full overflow-hidden ">
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute  inset-0 transition-opacity duration-1000 ${
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
          {/* Text Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 z-10">
            <div className="text-center text-white px-4 max-w-4xl mx-auto">
              <p className="text-lg md:text-xl mb-4 text-blue-400 font-medium">
                {slide.subtitle}
              </p>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-md">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow-md">
                {slide.description}
              </p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-white hover:text-black font-medium transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Left & Right Navigation */}
      <button
        onClick={() =>
          setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
        }
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full z-20"
      >
        <ChevronLeft className="text-white w-6 h-6" />
      </button>

      <button
        onClick={() =>
          setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
        }
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full z-20"
      >
        <ChevronRight className="text-white w-6 h-6" />
      </button>
    </div>
  );
}
