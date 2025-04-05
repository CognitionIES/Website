"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
import Hero from "./hero";
import Footer from "@/components/footer";
import digitalizationImage from "@/constants/images/projects/digitalization.jpg";
import pcmImage from "@/constants/images/projects/pcm-2.jpg";

const Projects: React.FC = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const projects = [
    {
      title: "Digitalization",
      slug: "digitalization",
      description:
        "Transforming businesses through cutting-edge digital solutions, enhancing efficiency and scalability.",
      image: digitalizationImage,
      features: ["Point 1", "Point 2", "Point 3"],
      client: "ABC",
      duration: "0 months",
      technologies: ["one", "two", "three"],
    },
    {
      title: "Product Cost Management",
      slug: "product-cost-management",
      description:
        "Optimizing product costs through strategic analysis and resource management for maximum profitability.",
      image: pcmImage,
      features: ["Point 1", "Point 2", "Point 3"],
      client: "ABC",
      duration: "0 months",
      technologies: ["one", "two", "three"],
    },
  ];

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

  // Animation variants for individual cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.3, // Stagger each card by 0.3 seconds
      },
    }),
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <MegaMenu />
      <section className="relative h-[400px] overflow-hidden">
        <Hero />
      </section>

      <section
        ref={sectionRef}
        className="w-full py-12 sm:py-14 lg:py-22 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-7xl">
            <span className="inline-block px-3 py-1 bg-[#0098af]/10 text-[#0098af] text-xs font-medium uppercase tracking-wider rounded-full mb-4">
              Projects
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#003C46] mb-4">
              Fresh Results / Current Wins / What’s Done
            </h2>
          </div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                custom={index}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={cardVariants}
                className={cn(
                  "grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white p-6 rounded-xl shadow-lg",
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                )}
              >
                <div className="relative h-[300px] md:h-[400px] rounded-xl shadow-lg overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="space-y-5">
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#003C46] drop-shadow-sm">
                    {project.title}
                  </h3>
                  <p className="text-base sm:text-lg leading-relaxed text-gray-600 text-justify">
                    {project.description}
                  </p>
                  <ul className="space-y-2">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center text-gray-700"
                      >
                        <span className="w-2 h-2 bg-[#0098AF] rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="space-y-2 text-gray-700">
                    <p>
                      <strong>Client:</strong> {project.client}
                    </p>
                    <p>
                      <strong>Duration:</strong> {project.duration}
                    </p>
                    <p>
                      <strong>Technologies:</strong>{" "}
                      {project.technologies.join(", ")}
                    </p>
                  </div>
                  <Link href={`/projects/${project.slug}`}>
                    <Button className="bg-[#0098af] text-white hover:bg-white hover:text-black text-base transition-colors duration-200 border-2 border-transparent hover:border-[#0098af] mt-4 hover:outline hover:outline-2 hover:outline-[#0098af]">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="absolute bottom-1/3 left-1/3 w-32 h-32 bg-[#000000] opacity-20 rounded-full blur-3xl -z-10"
        />
      </section>

      <section className="w-full py-12 sm:py-14 lg:py-22 bg-[#0098AF] text-white relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 drop-shadow-md">
            Ready to Start Your Project?
          </h2>
          <p className="text-base sm:text-lg mb-8">
            Contact us today to see how we can bring your ideas to life.
          </p>
          <Link href="/contact">
            <Button className="bg-white text-[#0098AF] rounded-lg hover:bg-[#5b5b5b] hover:text-white transition-colors duration-200 text-lg px-6 py-2 w-fit">
              Get in Touch
            </Button>
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="absolute bottom-1/3 left-1/3 w-32 h-32 bg-[#000000] opacity-20 rounded-full blur-3xl -z-10"
        />
      </section>
      <Footer />
    </div>
  );
};

export default Projects;
/* "use client";
import { Button } from "@/components/ui/button";
import { 
  ArrowUpRight, 
   
} from "lucide-react";
import { ProjectCard } from "@/components/ProjectCard";
import { useInView } from "@/hooks/useInViews";
import Hero from "./hero";
import Link from "next/link";
import Footer from "@/components/footer"; 
import digitImage from "@/constants/images/projects/digitalization.jpg";
import { StaticImageData } from "next/image";
import pcmImage from "@/constants/images/projects/pcm-2.jpg";

// Define project type for better type safety
interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  imageSrc: string | StaticImageData;
  features: string[];
  client: string;
  duration: string;
  technologies: string[];
  featured?: boolean;
}

const Projects: React.FC = () => {
  // Use our custom hook to detect when elements enter viewport
  const { ref: sectionRef, inView } = useInView({ threshold: 0.2 });
  const { ref: ctaRef, inView: ctaInView } = useInView({ threshold: 0.3 });
  
  const projects: Project[] = [
    {
      id: "1",
      title: "Digitalization",
      slug: "digitalization",
      description:
        "Transforming businesses through cutting-edge digital solutions, enhancing efficiency and scalability through strategic implementation of modern technologies.",
      imageSrc: digitImage,
      features: [
        "Process automation",
        "Cloud infrastructure setup",
        "Digital workflow optimization"
      ],
      client: "Global Financial Group",
      duration: "6 months",
      technologies: ["React", "Node.js", "AWS"],
      featured: true
    },
    {
      id: "2",
      title: "Product Cost Management",
      slug: "product-cost-management",
      description:
        "Optimizing product costs through strategic analysis and resource management for maximum profitability with detailed reporting and forecasting.",
      imageSrc:pcmImage ,
      features: [
        "Cost analysis dashboard",
        "Supply chain optimization",
        "Predictive pricing models"
      ],
      client: "Manufacturing Excellence Corp",
      duration: "8 months",
      technologies: ["Python", "TensorFlow", "Power BI"],
    },
    {
      id: "3",
      title: "Enterprise Resource Planning",
      slug: "enterprise-resource-planning",
      description:
        "Comprehensive ERP solution tailored for medium to large enterprises, seamlessly integrating all business processes into a unified platform.",
      imageSrc: "/images/erp-system.jpg", 
      features: [
        "Real-time data synchronization",
        "Custom reporting modules",
        "Multi-department integration"
      ],
      client: "Retail Innovations Ltd",
      duration: "12 months",
      technologies: ["Java", "PostgreSQL", "Docker"],
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Hero />
      
      {/* Hero Section 
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-50 to-blue-50 z-0"></div>
        <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: "url('/images/grid-pattern.svg')",
            backgroundSize: "cover"
          }}
        ></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div 
              className={`transition-all duration-700 ease-out transform ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
              <span className="inline-block px-3 py-1 bg-cyan-600/10 text-cyan-700 text-xs font-medium uppercase tracking-wider rounded-full mb-4">
                Our Portfolio
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-tight">
                Innovative Solutions for <span className="text-cyan-600">Modern Challenges</span>
              </h1>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-3xl">
                Browse our recent projects that showcase our expertise in delivering cutting-edge solutions 
                tailored to our clients&apos; specific needs and business objectives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Gallery 
      <section
        ref={sectionRef}
        className="w-full py-16 md:py-24 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-16 text-center">
            <span className="inline-block px-3 py-1 bg-cyan-600/10 text-cyan-700 text-xs font-medium uppercase tracking-wider rounded-full">
              Case Studies
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">
              Our Latest Projects
            </h2>
            <div className="w-24 h-1 bg-cyan-600 mx-auto mt-6"></div>
          </header>

          <div className="space-y-16 md:space-y-24">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                inView={inView}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section 
      <section 
        ref={ctaRef}
        className="w-full py-16 md:py-24 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 skew-y-1 transform -translate-y-10"></div>
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
                <path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.5"></path>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)"></rect>
          </svg>
        </div>
        
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 transition-all duration-700 ease-out transform ${ctaInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 lg:p-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
              Ready to Transform Your <span className="text-cyan-600">Business</span>?
            </h2>
            <p className="text-lg mb-8 text-slate-600 max-w-3xl mx-auto">
              Our team of experts is ready to help you implement innovative solutions 
              that will drive your business forward in today&apos;s competitive landscape.
            </p>
            <Link href="/contact">
              <Button className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-6 text-lg rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-cyan-200">
                Start Your Project
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
*/