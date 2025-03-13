"use client";

import Image from "next/image";
import { SetStateAction, useEffect, useState } from "react";
import { heroSlides } from "@/constants/hero"; // Points to your updated file
import { ChevronLeft, ChevronRight } from "lucide-react";

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide with pause on hover
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused]);

  // Navigation functions
  const goToPrevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  const goToNextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const goToSlide = (index: SetStateAction<number>) => setCurrentSlide(index);

  return (
    <section
      className="relative h-[calc(100vh-4rem)] w-full overflow-hidden font-sans" // Assuming a sans-serif font
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Cognition IES Hero Slideshow"
    >
      {/* Slides */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            width={1920}
            height={1080}
            priority={index === 0}
            sizes="100vw"
            className="w-full h-full object-cover brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#003C46]/70 to-[#0098AF]/50" />

          {/* Text Overlay */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="text-center text-white px-4 sm:px-6 max-w-4xl mx-auto">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-3 text-[#99D5DF] font-medium tracking-widest uppercase drop-shadow-sm">
                {slide.subtitle}
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight text-white drop-shadow-lg">
                {slide.title}
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-8 max-w-lg mx-auto text-gray-100 font-light leading-relaxed drop-shadow-md">
                {slide.description}
              </p>
              {/* <button className="px-6 py-2.5 bg-[#0098AF] hover:bg-[#007B8F] text-white font-semibold rounded-md shadow-md transition-all duration-200 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#0098AF]/50">
                Get in Touch
              </button> */}
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/40 p-2 rounded-full z-20 hover:bg-[#0098AF]/70 transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#0098AF]"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="text-white w-5 h-5" />
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/40 p-2 rounded-full z-20 hover:bg-[#0098AF]/70 transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#0098AF]"
        aria-label="Next Slide"
      >
        <ChevronRight className="text-white w-5 h-5" />
      </button>

      {/* Slide Indicators (Vertical Dots) */}
      <div className="absolute bottom-8 right-8 flex flex-col space-y-2.5 z-20">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              currentSlide === index
                ? "bg-[#0098AF] h-5"
                : "bg-white/60 hover:bg-white/90 hover:scale-125"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;