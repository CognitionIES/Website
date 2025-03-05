"use client";

import Footer from "@/components/footer";
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
import { MegaMenu } from "@/components/ui/MegaMenu";
import { useState } from "react";
import Hero from "./Hero";
import Values from "./Values";
import Testimonials from "./Testimonials";

// Define the Job interface
interface Job {
  id: number;
  title: string;
  department: string;
  location: string;
  engagementModel: string;
  description: string;
  applyLink?: string; // Optional field
}

export default function CareersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("all");
  const [activeJob, setActiveJob] = useState<Job | null>(null);

  const filteredJobs = jobListings.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation =
      locationFilter === "all" || job.location === locationFilter;
    return matchesSearch && matchesLocation;
  });

  // Animation Variants
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

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans overflow-hidden">
      <MegaMenu />

      {/* Hero Section */}
      <Hero />

      {/* Values Section */}
      <Values />

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
          <div className="relative mb-8">
            <h2 className="text-3xl font-bold text-[#5B5B5B]">
              Open Positions
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-[#0098AF] to-transparent" />
            </h2>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1">
              <Input
                placeholder="Search positions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full border border-[#0098AF]/20 rounded-lg shadow-sm focus:border-[#0098AF] focus:ring-[#0098AF]/10 placeholder-gray-400 transition-all duration-200"
              />
            </div>
            <div>
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
            </div>
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
                            window.open(job.applyLink || "#", "_blank");
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
                  {activeJob.description}
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
          {/* Subtle Decorative Elements */}
          <div className="absolute top-1/4 right-10 w-48 h-48 bg-[#5B5B5B] opacity-15 rounded-full blur-3xl -z-10" />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            transition={{
              delay: 1,
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute bottom-1/3 left-1/4 w-5 h-5 bg-[#0098AF] opacity-30 rounded-full -z-10"
          />
        </div>
      </motion.div>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Why Work With Us Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChildren}
        className="py-20 bg-gray-50 relative"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="relative mb-12">
            <h2 className="text-3xl font-bold text-[#5B5B5B] relative">
              Why Work With Us
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-[#0098AF] to-transparent" />
            </h2>
          </div>
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
          {/* Subtle Decorative Elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            transition={{
              delay: 1,
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute top-1/4 right-1/4 w-4 h-4 bg-[#5B5B5B] opacity-30 rounded-full -z-10"
          />
        </div>
      </motion.div>

      <Footer />
    </div>
  );
}
