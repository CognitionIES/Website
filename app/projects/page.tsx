"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
//import { FiChevronDown, FiChevronRight, FiHome } from "react-icons/fi";
import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
// import projectsHeroImage from "@/constants/images/WEB LOGO.png"; // Replace with actual hero image
import Hero from "./hero";
import TestimonialSlider from "@/components/HomePage/Testimonials";
import Footer from "@/components/footer";

const Projects: React.FC = () => {
  // Expanded project data
  const projects = [
    {
      title: "Digitalization",
      slug: "digitalization",
      description:
        "Transforming businesses through cutting-edge digital solutions, enhancing efficiency and scalability.",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
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
      image:
        "https://images.unsplash.com/photo-1551288049-b5f3c5e7c7c0?q=80&w=2070&auto=format&fit=crop",
      features: ["Point 1", "Point 2", "Point 3"],
      client: "ABC",
      duration: " 0 months",
      technologies: ["one", "two", "three"],
    },
  ];

//   const testimonials = [
//     { quote: "Revolutionized our workflow!", author: "Jane Doe, TechCorp" },
//     { quote: "Boosted our profitability.", author: "John Smith, ManufactureX" },
//   ];

  const stats = [
    { label: "Projects Completed", value: "100+" },
    { label: "Clients Served", value: "100+" },
    { label: "Industries Impacted", value: "100+" },
  ];

  const faqs = [
    {
      question: "What types of projects do you undertake?",
      answer:
        "We specialize in digital transformation and cost management projects.",
    },
    {
      question: "How long does a typical project take?",
      answer: "Most projects range from 6 to 12 months depending on scope.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <MegaMenu />

      {/* Hero Section */}
      <section className="relative h-[350px] overflow-hidden">
        <Hero />
      </section>

      {/* Intro Section 
      <section className="w-full py-12 sm:py-14 lg:py-22 relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-justify">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#003C46] relative drop-shadow-md">
            Innovating for Impact
            <span className="absolute bottom-0 transform w-12 h-0.5 bg-gradient-to-r from-[#0098AF] to-transparent" />
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-gray-600 mt-6 max-w-7xl mx-auto">
            Our projects harness technology and strategy to deliver transformative results, driving efficiency and profitability across industries.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-1/4 right-1/4 w-5 h-5 bg-[#0098AF] opacity-30 rounded-full -z-10"
        />
      </section>*/}

      {/* Projects Section */}
      <section className="w-full py-12 sm:py-14 lg:py-22 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#003C46] relative drop-shadow-md text-justify mb-12">
            Featured Projects
            <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-[#0098AF] to-transparent" />
          </h2>
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div
                key={project.title}
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
              </div>
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

      {/* Testimonials Section */}
      <section className="w-full py-12 sm:py-14 lg:py-22 bg-gray-100 relative overflow-hidden">
        {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#003C46] relative drop-shadow-md text-center mb-12">
            Client Testimonials
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-[#0098AF] to-transparent" />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg text-center space-y-4"
              >
                <p className="text-base sm:text-lg text-gray-600 italic">
                  &quot;{testimonial.quote}&quot;
                </p>
                <p className="text-gray-800 font-semibold">
                  {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div> */}
        <TestimonialSlider />
      </section>

      {/* Stats Section */}
      <section className="w-full py-12 sm:py-14 lg:py-22 bg-[#003C46] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label} className="space-y-2">
                <p className="text-4xl sm:text-5xl font-bold">{stat.value}</p>
                <p className="text-base sm:text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{
            delay: 1,
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute top-1/4 right-1/4 w-5 h-5 bg-[#0098AF] opacity-30 rounded-full -z-10"
        />
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 sm:py-14 lg:py-22 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#003C46] relative drop-shadow-md text-center mb-12">
            Frequently Asked Questions
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-[#0098AF] to-transparent" />
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl sm:text-2xl font-semibold text-[#003C46]">
                  {faq.question}
                </h3>
                <p className="text-base sm:text-lg text-gray-600 mt-2 text-justify">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full py-12 sm:py-14 lg:py-22 bg-[#0098AF] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
        </div>
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
