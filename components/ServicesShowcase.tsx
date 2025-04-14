import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import plantImage from "@/constants/images/home/plant.jpg";
import productImage from "@/constants/images/home/product-2.jpg";
import saasImage from "@/constants/images/home/saas.jpg";
import recruitImage from "@/constants/images/home/staff.jpg";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "Product Engineering",
    description:
      "Bridging innovation and execution, we engineer high-performance products that meet industry standards and customer expectations.",
    color: "bg-[#003C46]",
    image: productImage,
    href: "/services/product-engineering",
  },
  {
    id: 2,
    title: "Plant Engineering",
    description:
      "Simplifying complexity through smart process solutions that boost operational agility and cost-effectiveness.",
    color: "bg-[#003C46]",
    image: plantImage,
    href: "/services/plant-engineering",
  },
  {
    id: 3,
    title: "SaaS Solutions",
    description:
      "Enabling digital transformation through user-friendly, adaptable, and future-proof SaaS applications.",
    color: "bg-[#003C46]",
    image: saasImage,
    href: "/services/saas-solution/servicecpq",
  },
  {
    id: 4,
    title: "Staffing and Recruitment",
    description:
      "Finding the perfect fit for every role through a data-driven, industry-specific approach to talent acquisition.",
    color: "bg-[#003C46]",
    image: recruitImage,
    href: "/services/staffing",
  },
];

const ServicesShowcase = () => {
  const [activeCard, setActiveCard] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile && containerRef.current) {
      const activeElement = containerRef.current.querySelector(
        `[data-service-id="${activeCard}"]`
      );
      if (activeElement) {
        containerRef.current.scrollTo({
          left:
            activeElement.getBoundingClientRect().left +
            containerRef.current.scrollLeft -
            20,
          behavior: "smooth",
        });
      }
    }
  }, [activeCard, isMobile]);

  return (
    <section className="w-full py-12 px-4 md:px-6 bg-gradient-to-b from-white via-white to-[#E6F0F5]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 space-y-2 md:mb-8 ">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#003C46] mb-2 md:mb-3 tracking-tight">
            Our Services
          </h2>
          {/* <p className="text-[#5b5b5b]/80 text-sm md:text-base lg:text-lg font-light">
            Driving innovation and efficiency through advanced engineering
            solutions, optimizing products and processes for maximum
            performance.
          </p> */}
        </div>

        <div
          ref={containerRef}
          className="flex gap-4 md:gap-6 overflow-x-auto md:overflow-x-visible pb-4 md:pb-6 snap-x md:snap-none scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {services.map((service) => (
            <Link
              key={service.id}
              href={service.href}
              data-service-id={service.id}
              onMouseEnter={() => !isMobile && setActiveCard(service.id)}
              onMouseLeave={() => !isMobile && setActiveCard(1)}
              onClick={() => isMobile && setActiveCard(service.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActiveCard(service.id);
                }
              }}
              tabIndex={0}
              role="link"
              aria-expanded={activeCard === service.id}
              aria-label={`${service.title} service card. ${
                activeCard === service.id ? "Expanded" : "Collapsed"
              }`}
              className={cn(
                "relative overflow-hidden rounded-xl md:rounded-2xl shadow-md transition-all ease-out cursor-pointer",
                "snap-center shrink-0",
                "min-w-[250px] md:min-w-0",
                "h-[350px] md:h-[420px] lg:h-[480px]",
                isMobile ? "w-[250px]" : "flex-1",
                !isMobile && activeCard === service.id
                  ? "md:w-[42%]"
                  : "md:w-[19.333%]",
                activeCard === service.id ? "ring-1 ring-[#0098af]/30" : "",
                "duration-500"
              )}
            >
              <div
                className={cn(
                  "absolute inset-0 bg-cover bg-center transition-transform duration-700",
                  activeCard === service.id ? "scale-105" : "scale-100"
                )}
                style={{
                  backgroundImage: `url(${service.image.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              <div
                className={cn(
                  "absolute inset-0 transition-opacity duration-500",
                  activeCard === service.id ? "opacity-95" : "opacity-90"
                )}
                style={{
                  background:
                    activeCard === service.id
                      ? `linear-gradient(to top, ${
                          service.color === "bg-[#0098af]"
                            ? "#0098af"
                            : service.color === "bg-[#003C46]"
                            ? "#003C46"
                            : "#00b4d8"
                        } 30%, rgba(0,0,0,0.5) 100%)`
                      : "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.5) 100%)",
                }}
              />

              <div className="relative h-full w-full p-4 md:p-8 flex flex-col justify-end z-10">
                <div
                  className="absolute bottom-4 left-16 h-full flex items-end origin-bottom-left"
                  style={{ width: "100%", minWidth: "400px md:minWidth:480px" }}
                >
                  <h3
                    className={cn(
                      "text-white font-medium text-2xl sm:text-3xl md:text-4xl whitespace-nowrap",
                      "transition-all duration-300",
                      "-rotate-90"
                    )}
                    style={{ transformOrigin: "bottom left" }}
                  >
                    {service.title}
                  </h3>
                </div>

                <div className="space-y-4 ml-20 sm:ml-12 mt-2 sm:mt-4">
                  <p
                    className={cn(
                      "text-white/90 text-sm md:text-base leading-relaxed font-light",
                      activeCard !== service.id && "line-clamp-3"
                    )}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {isMobile && (
          <div className="flex justify-center gap-1.5 mt-4 md:mt-6">
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

        <div className="mt-8 md:mt-2 text-center">
          <a
            href="/services"
            className="inline-flex items-center gap-1 text-[#003C46]/80 hover:text-[#0098af] transition-colors duration-300 text-sm md:text-base font-medium group"
          >
            View all our solutions
            <ExternalLink className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;
