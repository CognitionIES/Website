"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import logo from "@/constants/Imported-images"; // Import the logo object

const AnimatedLogoCloud: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Use a subset of 7 random logos
  const selectedLogos = [
    { name: "AI", url: logo.AI },
    { name: "Ansys", url: logo.Ansys },
    { name: "AutoCad", url: logo.AutoCad },
    { name: "Creo", url: logo.Creo },
    { name: "figma", url: logo.figma },
    { name: "SiemensNX", url: logo.SiemensNX },
    { name: "tableau", url: logo.tableau },
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const clone = container.innerHTML;
    container.innerHTML += clone; // Duplicate the content for seamless looping

    const animate = () => {
      const scrollWidth = container.scrollWidth / 2; // Half because we duplicated
      if (container.scrollLeft >= scrollWidth) {
        container.scrollLeft = 0;
      } else {
        container.scrollLeft += 0.5; // Slower speed for smoother movement
      }
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId); // Cleanup on unmount
  }, []);

  return (
    <div className="relative w-full overflow-hidden py-1 bg-[#E6F0FA] rounded-lg border border-[#D1E8FF]">
      <div
        ref={containerRef}
        className="flex gap-2"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 95%)",
          animation: "none",
          whiteSpace: "nowrap",
        }}
      >
        {selectedLogos.map((logoItem, index) => (
          <div key={index} className="inline-flex shrink-0 items-center">
            <Image
              src={logoItem.url}
              alt={logoItem.name}
              width={50} // Fixed width for consistency
              height={25} // Fixed height for consistency
              className="h-5 md:h-6 w-auto object-contain" // Ensures logos fit within the height
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedLogoCloud;