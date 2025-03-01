
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const services = [
  {
    id: 1,
    title: " Mobility",
    shortDescription:
      "We engineer the future of transportation, from next-gen vehicles to smart infrastructure.",
    fullDescription:
      "Mobility is evolving, and we’re at the forefront of this transformation. Our expertise bridges digital and physical engineering, enabling everything from autonomous systems and electric mobility to advanced aerospace and rail solutions. The result? Seamless, efficient, and future-ready transportation.",
    bgColor: "bg-[#0A1E5C]",
    textColor: "text-white",
    image:
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Sustainable ",
    shortDescription:
      "Engineering smarter, cleaner, and more efficient solutions for a sustainable tomorrow.",
    fullDescription:
      "Sustainability isn’t just a buzzword—it’s the foundation of future industries. We optimize manufacturing, enhance renewable energy integration, and develop eco-friendly infrastructure,  helping businesses cut waste, reduce emissions, and operate more responsibly.",
    bgColor: "bg-[#E5EEF6]",
    textColor: "text-gray-800",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: " Technology",
    shortDescription:
      "From AI-driven systems to embedded solutions, we power the next era of innovation.",
    fullDescription:
      "Technology is reshaping industries, and we make sure businesses stay ahead.  Our expertise spans MedTech, semiconductor advancements, and connected systems,  ensuring our clients leverage cutting-edge solutions to enhance efficiency, scalability, and performance.",
    bgColor: "bg-black",
    textColor: "text-white",
    image:
      "https://images.unsplash.com/photo-1535378917042-10a22c95931a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
];

export default function ServicesSection() {
  const [activeCard, setActiveCard] = useState<number>(1); // Set Mobility (id: 1) as default active card

  return (
    <section className="w-full py-12 sm:py-16 lg:py-24 bg-[#e6e6e6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A1E5C] mb-4">
          We Go Deeper
        </h1>
        <p className="text-base leading-relaxed text-gray-700 mb-8">
          Engineering isn’t just about solving problems—it’s about pushing
          boundaries. Our expertise spans three core domains, where precision
          meets innovation. Whether it’s revolutionizing mobility, engineering
          sustainable solutions, or harnessing the power of technology, we help
          industries move faster, work smarter, and build for the future.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={cn(
                "rounded-xl overflow-hidden relative cursor-pointer transition-all duration-500 ease-in-out",
                service.bgColor,
                service.textColor,
                activeCard === service.id ? "md:col-span-6" : "md:col-span-3",
                activeCard !== service.id && "md:col-span-3"
              )}
              onClick={() => setActiveCard(service.id)}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
                style={{
                  backgroundImage: `url(${service.image})`,
                  opacity: activeCard === service.id ? 0 : 1,
                }}
              />
              <div
                className={cn(
                  "absolute inset-0 transition-opacity duration-500",
                  service.id === 2
                    ? "bg-gradient-to-b from-transparent to-[#E5EEF6] opacity-90"
                    : "bg-gradient-to-b from-transparent to-black opacity-70"
                )}
              />
              <div className="relative h-full p-8 flex flex-col justify-between min-h-[400px]">
                <div>
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <p
                    className={cn(
                      "text-lg transition-all duration-500 ease-in-out",
                      activeCard === service.id ? "opacity-90" : "opacity-0 h-0"
                    )}
                  >
                    {activeCard === service.id
                      ? service.fullDescription
                      : service.shortDescription}
                  </p>
                </div>
                <div className="flex justify-end mt-4">
                  <Button
                    variant="secondary"
                    className="bg-[#0098af] hover:bg-white text-black rounded-sm px-6 transition-transform duration-300"
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
