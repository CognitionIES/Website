"use client";
import { Button } from "@/components/ui/button";
import { ABOUT_CONSTANTS } from "@/constants/home/about";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const AboutUs = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return (
    <section
      ref={sectionRef}
      className="w-full py-12 sm:py-16 lg:py-24 relative"
      style={{
        backgroundImage:
          "radial-gradient(circle at 10% 90%, rgba(0, 152, 175, 0.05) 0%, transparent 30%), radial-gradient(circle at 90% 10%, rgba(91, 91, 91, 0.05) 0%, transparent 30%)",
      }}
    >
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#0098af] opacity-[0.03] blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-[#0098af] opacity-[0.04] blur-3xl"></div>
        <div className="absolute w-full h-full bg-dot-pattern bg-[length:20px_20px] opacity-[0.02]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {" "}
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-justify font-semibold tracking-tight text-[#003C46]">
          {ABOUT_CONSTANTS.TITLE}
        </h2>
        <div className="w-[80px] sm:w-[100px] h-[3px] bg-gradient-to-r from-[#0098af] to-transparent rounded-full mt-1" />
        <div className="grid grid-cols-1 py-8 md:grid-cols-[1fr_auto] items-start gap-10 md:gap-8 max-w-7xl mx-auto">
          {/* Text content */}
          <div className="order-2 md:order-1">
            <div>
              <p className="text-sm sm:text-base md:text-lg text-justify text-gray-600 leading-relaxed">
                {ABOUT_CONSTANTS.DESCRIPTION_1}
              </p>
              <h3 className="text-lg sm:text-xl font-semibold py-2 text-justify text-[#003c46]">
                {ABOUT_CONSTANTS.SUBTITLE}
              </h3>
              <p className="text-xs sm:text-sm md:text-[16px] py-2 text-justify text-gray-600 leading-relaxed">
                {ABOUT_CONSTANTS.DESCRIPTION_2}
              </p>
              <p className="text-lg sm:text-xl font-semibold py-2 text-justify text-[#003c46]">
                {ABOUT_CONSTANTS.DESCRIPTION_3}
              </p>

              <div className="mt-4">
                <Link href={ABOUT_CONSTANTS.BUTTON_HREF}>
                  <Button className="bg-[#0098af] text-white hover:bg-white hover:text-black text-sm sm:text-base px-4 py-2 sm:px-6 sm:py-3 transition-colors duration-200 border-2 border-transparent hover:border-[#0098af] hover:outline hover:outline-2 hover:outline-[#0098af]">
                    {ABOUT_CONSTANTS.BUTTON_TEXT}
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Image (hidden on mobile) */}
          <div className="order-1 md:order-2 relative hidden md:block md:h-[400px] md:w-[555px] rounded-xl shadow-md overflow-hidden justify-self-end">
            <Image
              src={ABOUT_CONSTANTS.IMAGE}
              alt="Team collaboration"
              width={400}
              height={100}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
