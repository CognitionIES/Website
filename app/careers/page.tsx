"use client";

import Footer from "@/components/footer";
import image from "@/constants/images/Careers.jpg";
import testimonials from "@/constants/testimonials";
import jobListings from "@/constants/jobListings";
import { constants as benefits } from "./constants";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import Image from "next/image";
import { MegaMenu } from "@/components/ui/MegaMenu";
import { useState} from "react";
import { FiHome, FiChevronRight, FiChevronDown } from "react-icons/fi"; // Added FiChevronDown for scroll indicator
//import careerPattern from "@/constants/images/career-pattern.jpg"; // Optional hexagonal pattern image
import Link from "next/link";
//import Particles from "react-tsparticles"; // For particle effects
//import { loadFull } from "tsparticles"; // Load full particle config

export default function CareersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("all");
  const [activeJob, setActiveJob] = useState(null); // For job preview modal
 // const [isHovered, setIsHovered] = useState(null); // For hover feedback

  const filteredJobs = jobListings.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation =
      locationFilter === "all" || job.location === locationFilter;
    return matchesSearch && matchesLocation;
  });

  // Animation Variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const cardHover = {
    rest: { y: 0, boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)" },
    hover: {
      y: -2,
      boxShadow: "0 6px 12px rgba(0, 152, 175, 0.1)",
      transition: { duration: 0.2 },
    },
  };

  // Initialize particles

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans overflow-hidden">
      <MegaMenu />

      {/* Hero Section */}
      <div className="relative h-[500px] overflow-hidden">
        <Image
          src={image}
          alt="Office Environment"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#003C46]/85 to-[#0098AF]/70" />
        <div className="absolute inset-0 opacity-5 bg-[url('/images/career-pattern.jpg')] bg-repeat" />

        {/* <Particles
          id="tsparticles-hero"
          options={{
            particles: {
              number: { value: 10, density: { enable: true, value_area: 800 } },
              color: { value: "#99D5DF" },
              shape: { type: "circle" },
              opacity: { value: 0.15, anim: { enable: true, speed: 1 } },
              size: { value: 2, random: true },
              move: {
                enable: true,
                speed: 1.5,
                direction: "bottom",
                random: true,
                straight: false,
                outMode: "out",
              },
            },
            interactivity: {
              detect_on: "canvas",
              modes: { repel: { distance: 100 } },
            },
            background: { color: "transparent" },
          }}
          className="absolute inset-0 pointer-events-none"
        /> */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-full flex flex-col justify-center"
        >
          <nav className="self-start mb-6 flex items-center space-x-2 text-sm font-light text-white/80">
            <Link
              href="/"
              className="hover:text-[#99D5DF] flex items-center gap-1 transition-colors duration-200"
            >
              <FiHome className="w-4 h-4" />
              Home
            </Link>
            <FiChevronRight className="w-4 h-4" />
            <Link
              href="/careers"
              className="hover:text-[#99D5DF] transition-colors duration-200"
            >
              Careers
            </Link>
          </nav>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 text-white drop-shadow-md relative">
            Join Our Team
            <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-[#99D5DF] to-transparent" />
          </h1>
          <p className="text-lg md:text-xl text-[#99D5DF]/90 max-w-xl font-light leading-relaxed mb-6">
            Shape the future with us. We’re seeking passionate innovators to join our journey.
          </p>
          <Button
            variant="default"
            className="bg-[#0098AF] text-white hover:bg-[#007B8F] px-2 py-1 rounded-lg font-medium shadow-md hover:scale-105 transition-transform duration-200 self-start"
            onClick={() =>
              document.getElementById("positions")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Explore Careers
          </Button>
          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.7, y: 0 }}
            transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70"
          >
            <FiChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.25, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute bottom-0 left-0 w-80 h-80 bg-[#0098AF] opacity-50 rounded-full blur-3xl"
        />
      </div>

      {/* Values Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChildren}
        className="py-16 bg-gradient-to-b from-gray-50 to-[#F5FDFF] relative"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            variants={fadeIn}
            className="relative mb-12"
          >
            <h2 className="text-3xl font-bold text-[#003C46]  relative">
              Our Values
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-[#0098AF] to-transparent" />

            </h2>
           
          </motion.div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: "Co-Innovation",
                description: "Collaborating with clients to craft groundbreaking solutions.",
              },
              {
                title: "People-First Culture",
                description: "Empowering every voice to shape our success.",
              },
              {
                title: "Excellence in Execution",
                description: "Delivering precision and quality, every time.",
              },
              {
                title: "Sustainability & Responsibility",
                description: "Building greener solutions for a better tomorrow.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={cardHover}
                initial="rest"
                whileHover="hover"
                className="bg-white p-6 rounded-lg border border-[#0098AF]/10 shadow-sm cursor-pointer"
              >
                <Card className="border-0">
                  <CardHeader className="p-0">
                    <CardTitle className="text-lg font-semibold text-[#5B5B5B] mb-2 hover:text-[#0098AF] transition-colors duration-200">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <CardDescription className="text-sm font-light text-gray-600 leading-relaxed">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Open Positions Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChildren}
        className="py-20 bg-gray-50 relative"
        id="positions"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            variants={fadeIn}
            className="relative mb-8" // Reduced margin-bottom for tighter spacing
          >
            <h2 className="text-3xl font-bold text-[#5B5B5B] ">
              Open Positions
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-[#0098AF] to-transparent" />

            </h2>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <motion.div variants={fadeIn} className="flex-1">
              <Input
                placeholder="Search positions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full border border-[#0098AF]/20 rounded-lg shadow-sm focus:border-[#0098AF] focus:ring-[#0098AF]/10 placeholder-gray-400 transition-all duration-200"
              />
            </motion.div>
            <motion.div variants={fadeIn}>
              <Select value={locationFilter} onValueChange={setLocationFilter}>
                <SelectTrigger className="w-full md:w-[200px] border border-[#0098AF]/20 rounded-lg shadow-sm focus:border-[#0098AF] focus:ring-[#0098AF]/10">
                  <SelectValue placeholder="Filter by location" />
                </SelectTrigger>
                <SelectContent className="bg-white border border-[#0098AF]/10 rounded-lg shadow-md">
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="India">India</SelectItem>
                  <SelectItem value="USA">USA</SelectItem>
                </SelectContent>
              </Select>
            </motion.div>
          </div>

          <motion.div variants={staggerChildren} className="grid gap-6">
            {filteredJobs.map((job) => (
              <motion.div
                key={job.id}
                variants={cardHover}
                initial="rest"
                whileHover="hover"
                className="bg-white border border-[#0098AF]/10 rounded-lg shadow-sm cursor-pointer"
              >
                <Card className="border-0">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                     <div>
                        <CardTitle className="text-lg font-semibold text-[#5B5B5B] mb-2 hover:text-[#0098AF] transition-colors duration-200">
                          {job.title}
                        </CardTitle>
                        <CardDescription>
                        
                          <div className="flex gap-4 text-sm font-light text-gray-600">
                            <span>{job.department}</span>
                            <span>{job.location}</span>
                          </div>
                        </CardDescription>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          className="text-[#0098AF] border-[#0098AF] hover:bg-[#0098AF] hover:text-white px-3 py-1 rounded-lg font-medium shadow-sm hover:scale-105 transition-all duration-200 text-sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveJob(job);
                          }}
                        >
                          View Details
                        </Button>
                        <Button
                          variant="default"
                          className="bg-[#0098AF] text-white hover:bg-[#007B8F] px-3 py-1 rounded-lg font-medium shadow-sm hover:scale-105 transition-all duration-200 text-sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(job.applyLink || "#", "_blank"); // Assuming job has an applyLink field
                          }}
                        >
                          Apply Now
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <p className="text-sm font-light text-gray-600 leading-relaxed line-clamp-2">
                      {job.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {activeJob && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
              onClick={() => setActiveJob(null)}
            >
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 30, opacity: 0 }}
                className="bg-white p-6 rounded-lg shadow-xl max-w-lg w-full border border-[#0098AF]/10"
                onClick={(e) => e.stopPropagation()}
              >
                <h3 className="text-xl font-bold text-[#5B5B5B] mb-3">
                  {activeJob.title}
                </h3>
                <div className="flex gap-4 text-sm font-light text-gray-600 mb-4">
                  <span>{activeJob.department}</span>
                  <span>{activeJob.location}</span>
                </div>
                <p className="text-sm font-light text-gray-600 leading-relaxed mb-6">
                  {job.description}
                </p>
                <Button
                  className="bg-[#0098AF] text-white hover:bg-[#007B8F] px-4 py-1 rounded-lg font-medium shadow-sm hover:scale-105 transition-all duration-200 text-sm"
                  onClick={() => setActiveJob(null)}
                >
                  Close
                </Button>
              </motion.div>
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Testimonials Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChildren}
        className="py-20 bg-gradient-to-b from-[#0098AF]/5 to-gray-50 relative"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            variants={fadeIn}
            className="relative mb-12"
          >
            <h2 className="text-3xl font-bold text-[#5B5B5B]  relative">
              Employee Testimonials
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-[#0098AF] to-transparent" />

            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                variants={cardHover}
                initial="rest"
                whileHover="hover"
                className="bg-white p-6 rounded-lg border border-[#0098AF]/10 shadow-sm cursor-pointer"
              >
                <Card className="border-0">
                  <CardHeader className="flex flex-row gap-4 items-center p-0">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full w-14 h-14 object-cover shadow-sm"
                    />
                    <div>
                      <CardTitle className="text-lg font-semibold text-[#5B5B5B] hover:text-[#0098AF] transition-colors duration-200">
                        {testimonial.name}
                      </CardTitle>
                      <CardDescription className="text-sm font-light text-gray-600">
                        {testimonial.role}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0 pt-4">
                    <p className="text-sm font-light text-gray-600 italic leading-relaxed line-clamp-2">
                      &quot;{testimonial.quote}&quot;
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Why Work With Us Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChildren}
        className="py-20 bg-gray-50 relative"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            variants={fadeIn}
            className="relative mb-12"
          >
            <h2 className="text-3xl font-bold text-[#5B5B5B]  relative">
              Why Work With Us
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-[#0098AF] to-transparent" />
            </h2>
            
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={cardHover}
                initial="rest"
                whileHover="hover"
                className="bg-white p-6 rounded-lg border border-[#0098AF]/10 shadow-sm cursor-pointer"
              >
                <Card className="border-0 text-center">
                  <CardHeader className="p-0">
                    <CardTitle className="text-lg font-semibold text-[#5B5B5B] hover:text-[#0098AF] transition-colors duration-200">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 pt-4">
                    <CardDescription className="text-sm font-light text-gray-600 leading-relaxed line-clamp-2">
                      {benefit.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
}