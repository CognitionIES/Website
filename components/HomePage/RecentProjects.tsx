import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  // ChevronRight,
  // ChevronLeft,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  href: string;
  stats?: {
    value: string;
    label: string;
  }[];
};

const projects: Project[] = [
  {
    id: "project-1",
    title: "Digitalization",
    category: "Digital Transformation",
    description:
      "Transform business operations with cutting-edge digital solutions that enhance efficiency and drive scalability. Our approach integrates seamless workflows and data-driven insights.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    href: "/projects/digitalization",
    stats: [
      { value: "40%", label: "Efficiency Increase" },
      { value: "3.5x", label: "ROI" },
    ],
  },
  {
    id: "project-2",
    title: "Product Cost Management",
    category: "Financial Optimization",
    description:
      "Strategic cost analysis and management systems that optimize spending and enhance profitability. Our methodology identifies opportunities for sustainable cost reduction while maintaining quality.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    href: "/projects/product-cost-management",
    stats: [
      { value: "28%", label: "Cost Reduction" },
      { value: "6mo", label: "Implementation" },
    ],
  },
];

const RecentProjects = () => {
  //const [activeIndex, setActiveIndex] = useState(0);
  const [activeIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();
  const visibleProjects = isMobile ? 1 : 2;

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
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // const handleNext = () => {
  //   setActiveIndex((prev) =>
  //     prev + visibleProjects >= projects.length ? 0 : prev + visibleProjects
  //   );
  // };

  // const handlePrev = () => {
  //   setActiveIndex((prev) =>
  //     prev - visibleProjects < 0
  //       ? Math.max(0, projects.length - visibleProjects)
  //       : prev - visibleProjects
  //   );
  // };

  return (
    <section
      ref={sectionRef}
      className="w-full py-16 sm:py-20 lg:py-24 overflow-hidden relative"
      style={{
        backgroundImage:
          "radial-gradient(circle at 10% 90%, rgba(0, 152, 175, 0.05) 0%, transparent 30%), radial-gradient(circle at 90% 10%, rgba(91, 91, 91, 0.05) 0%, transparent 30%)",
      }}
    >
      {/* Decorative elements with subtle motion */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 -left-10 w-40 h-40 rounded-full bg-[##0098af] opacity-5 blur-3xl"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.05, 0.07, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-[#5b5b5b] opacity-5 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.08, 0.05],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
        />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#0098af] opacity-5 blur-3xl"></div>
        <div className="absolute w-full h-full bg-dot-pattern bg-[length:20px_20px] opacity-[0.03]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Section header with animation */}
        <div className="inline-block mb-2 px-3 py-1 bg-[#E6F0F5] bg-opacity-70 rounded-full backdrop-blur-sm">
          <p className="text-xs font-medium tracking-wider text-[#0098af] uppercase">
            Featured Work
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12 max-w-7xl"
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#5b5b5b] mb-4 reveal-line inline-block">
            Our Recent Projects
          </h2>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-7xl">
            Discover our latest innovations, each crafted with precision to
            deliver exceptional results for businesses across various
            industries.
          </p>
        </motion.div>

        {/* Navigation controls */}
        {/* <div className="flex justify-between items-center mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex items-center"
          >
            <div className="w-8 h-1 bg-gradient-to-r from-[#0098af] to-transparent mr-3 rounded-full"></div>
            <p className="text-sm font-medium text-[#5b5b5b]">
              <span className="text-[#5b5b5b]">{activeIndex + 1}</span>
              <span className="mx-1">/</span>
              <span>{projects.length}</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex space-x-2"
          >
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrev}
              className="rounded-full w-10 h-10 border-[#0098af]/20 hover:bg-[#0098af]/10 hover:border-[#5b5b5b] transition-colors duration-300"
              aria-label="Previous projects"
            >
              <ChevronLeft className="h-5 w-5 text-[#0098af]" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              className="rounded-full w-10 h-10 border-[#0098af]/20 hover:bg-[#0098af]/10 hover:border-[#0098af] transition-colors duration-300"
              aria-label="Next projects"
            >
              <ChevronRight className="h-5 w-5 text-[#0098af]" />
            </Button>
          </motion.div>
        </div> */}

        {/* Projects grid with smooth animation */}
        <div className="relative">
          <div
            className="flex transition-all duration-500 ease-out gap-6 lg:gap-8"
            style={{
              transform: `translateX(-${
                activeIndex * (100 / visibleProjects)
              }%)`,
            }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className={cn(
                  "project-card flex-shrink-0 w-full",
                  isMobile ? "w-full" : "w-1/2"
                )}
                whileHover={{ y: -5 }}
              >
                <div className="group h-full bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
                  {/* Image container with hover effect */}
                  <div className="relative h-[240px] w-full overflow-hidden">
                    <div
                      className="image-hover-scale absolute inset-0 bg-cover bg-center h-full w-full"
                      style={{ backgroundImage: `url(${project.image})` }}
                    />

                    {/* Subtle gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-60 group-hover:opacity-70 transition-opacity" />

                    {/* Category chip */}
                    <div className="absolute top-4 left-4">
                      <div className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full">
                        <p className="text-xs font-medium text-[#003C46]">
                          {project.category}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-2xl font-semibold text-[#5b5b5b] group-hover:text-[#0098af] transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 line-clamp-3 text-base text-justify leading-relaxed">
                      {project.description}
                    </p>

                    {/* Project statistics */}
                    {project.stats && (
                      <div className="flex gap-4 mt-4 pt-3 border-t border-gray-100">
                        {project.stats.map((stat, i) => (
                          <div key={i} className="flex flex-col">
                            <span className="text-lg font-semibold text-[#0098af]">
                              {stat.value}
                            </span>
                            <span className="text-sm text-gray-500">
                              {stat.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    <a
                      href={project.href}
                      className="inline-flex items-center gap-1.5 text-base font-medium text-[#0098af] group relative"
                    >
                      <span className="relative">
                        View Project
                        <span className="absolute -bottom-px left-0 w-full h-px bg-[#0098af]/50 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                      </span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* View all projects button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <a href="/projects">
            <Button
              variant="outline"
              className="rounded-full bg-[#0098af] text-white  hover:bg-white hover:text-black  hover:outline hover:outline-2 hover:outline-[#0098af] px-4 py-4 h-auto text-base font-medium border-[#0098af]  transition-colors duration-300"
            >
              {/* <Button className="w-full bg-[#0098af] text-white hover:bg-white hover:text-black border-2 border-transparent hover:border-[#0098af] hover:outline hover:outline-2 hover:outline-[#0098af] transition-colors duration-200"> */}

              <span>View All Projects</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default RecentProjects;
