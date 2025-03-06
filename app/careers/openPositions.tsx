"use client";

// This component shows job listings with search and filter options
import { useState } from "react";
import { motion } from "framer-motion";
import jobListings from "@/constants/jobListings";
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
import { CAREERS_CONSTANTS } from "@/constants/careersPage/constants";

// Define what a job looks like
interface Job {
  id: number;
  title: string;
  department: string;
  location: string;
  engagementModel: string;
  description: string;
  applyLink?: string;
}

export default function OpenPositions() {
  const [searchTerm, setSearchTerm] = useState(""); // Holds the search text
  const [locationFilter, setLocationFilter] = useState("all"); // Holds the selected location
  const [activeJob, setActiveJob] = useState<Job | null>(null); // Holds the job being viewed

  const { TITLE, LOCATIONS } = CAREERS_CONSTANTS.POSITIONS;
  const { STAGGER_CHILDREN, CARD_HOVER } = CAREERS_CONSTANTS.ANIMATIONS;

  // Filter jobs based on search and location
  const filteredJobs = jobListings.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = locationFilter === "all" || job.location === locationFilter;
    return matchesSearch && matchesLocation;
  });

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={STAGGER_CHILDREN}
      className="py-20 bg-gray-50 relative"
      id="positions"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section title */}
        <div className="relative mb-8">
          <h2 className="text-3xl font-bold text-[#5B5B5B]">
            {TITLE}
            <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-[#0098AF] to-transparent" />
          </h2>
        </div>

        {/* Search and filter inputs */}
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
                {LOCATIONS.map((location) => (
                  <SelectItem key={location} value={location}>
                    {location === "all" ? "All Locations" : location}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Job cards */}
        <motion.div variants={STAGGER_CHILDREN} className="grid gap-6">
          {filteredJobs.map((job) => (
            <motion.div
              key={job.id}
              variants={CARD_HOVER}
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
                      {/* View details button */}
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
                      {/* Apply now button */}
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

        {/* Job details popup */}
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
              <h3 className="text-xl font-bold text-[#5B5B5B] mb-3">{activeJob.title}</h3>
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
      </div>
    </motion.div>
  );
}