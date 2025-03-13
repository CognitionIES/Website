"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
import Hero from "./hero";
import Footer from "@/components/footer";

export default function DigitalizationProject() {
  const project = {
    title: "Digitalization",
    description:
      "Transforming businesses through cutting-edge digital solutions, enhancing efficiency and scalability.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
    features: ["point 1", "point 3", "point 2"],
    client: "Company Name",
    duration: "6 months",
    technologies: ["tech 1", "tech 2", "tech 3"],
    testimonial: {
      quote: "Testimony",
      author: "Jane Doe, CTO at CompanyName",
    },
  };

  // Minimal animation for CTA button
  const buttonFadeIn = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F9FAFB] to-[#E5ECEF]">
      <MegaMenu />

      {/* Hero Section */}
      <section className="relative h-[350px] overflow-hidden">
        <Hero />
      </section>

      {/* Project Overview Section */}
      <section className="w-full py-16 sm:py-20 lg:py-24 relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#003C46] relative">
                Project Overview
                <span className="absolute -bottom-1 left-0 w-16 h-1 bg-gradient-to-r from-[#0098AF] to-transparent" />
              </h2>
              <p className="text-lg sm:text-xl leading-relaxed text-gray-700 text-justify">
                {project.description}
              </p>
              <p className="text-lg sm:text-xl leading-relaxed text-gray-700 text-justify">
                Partnering with {project.client}, we delivered a tailored
                digital transformation solution over {project.duration},
                leveraging modern technologies to streamline processes and drive
                business growth.
              </p>
            </div>
            <div className="relative h-[320px] md:h-[450px] rounded-xl shadow-md overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
        <div className="absolute top-12 left-8 w-12 h-12 border-t border-l border-[#0098AF]/10" />
      </section>

      {/* Key Features Section */}
      <section className="w-full py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#F1F5F9] to-[#E5ECEF] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#003C46] relative text-center mb-12">
            Key Features
            <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-[#0098AF] to-transparent" />
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="bg-white p-6 rounded-xl shadow-md flex items-center space-x-4"
              >
                <span className="w-3 h-3 bg-[#0098AF] rounded-full"></span>
                <p className="text-lg text-gray-700">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="absolute bottom-12 right-8 w-16 h-1 bg-[#0098AF]/10" />
      </section>

      {/* Technologies Used Section */}
      <section className="w-full py-16 sm:py-20 lg:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#003C46] relative text-center mb-12">
            Technologies Used
            <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-[#0098AF] to-transparent" />
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="bg-[#0098AF] text-white px-5 py-2 rounded-lg text-lg font-semibold shadow-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="absolute top-1/2 right-12 w-1 h-16 bg-[#0098AF]/10" />
      </section>

      {/* Testimonial Section */}
      <section className="w-full py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#F1F5F9] to-[#E5ECEF] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#003C46] relative text-center mb-12">
            Client Testimonial
            <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-[#0098AF] to-transparent" />
          </h2>
          <div className="bg-white p-8 rounded-xl shadow-md text-center space-y-6 max-w-3xl mx-auto">
            <p className="text-lg sm:text-xl text-gray-600 italic">
              &quot;{project.testimonial.quote}&quot;
            </p>
            <p className="text-gray-800 font-semibold text-lg">
              {project.testimonial.author}
            </p>
          </div>
        </div>
        <div className="absolute bottom-12 left-12 w-12 h-12 border-b border-r border-[#0098AF]/10" />
      </section>

      {/* Call to Action Section */}
      <section className="w-full py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#0098AF] to-[#007B8F] text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Add Value?
          </h2>
          <p className="text-lg sm:text-xl mb-8">
            Contact us to explore how our digitalization solutions can transform
            your operations.
          </p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={buttonFadeIn}
          >
            <Link href="/contact">
              <Button className="bg-white text-[#0098AF] rounded-lg hover:bg-[#003C46] hover:text-white transition-colors duration-300 text-lg px-8 py-3 shadow-md">
                Get in Touch
              </Button>
            </Link>
          </motion.div>
        </div>
        <div className="absolute top-12 right-12 w-16 h-1 bg-[#99D5DF]/20" />
      </section>

      <Footer />
    </div>
  );
}
