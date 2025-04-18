"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import JobCard from "@/components/JobCard";
import { jobsData, Job } from "@/constants/jobData";

const AboutSection = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [skills, setSkills] = useState("");
  const [experience, setExperience] = useState("");
  const [location, setLocation] = useState("");
  const [searchResults, setSearchResults] = useState<Job[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSearched(true);

    const filteredJobs = jobsData.filter((job) => {
      const skillsMatch = skills
        ? job.description.toLowerCase().includes(skills.toLowerCase()) ||
          job.title.toLowerCase().includes(skills.toLowerCase())
        : true;
      const expMatch = experience
        ? job.experience.toLowerCase().includes(experience.toLowerCase())
        : true;
      const locMatch = location
        ? job.location.toLowerCase().includes(location.toLowerCase())
        : true;

      return skillsMatch && expMatch && locMatch;
    });

    setSearchResults(filteredJobs);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          // Optionally, unobserve after the animation triggers to prevent repeated animations
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }
        }
      },
      {
        threshold: 0.2, // Trigger when 20% of the section is visible
        rootMargin: "0px 0px -20% 0px",
      }
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

  // Animation variants for the search container
  const searchContainerVariants = {
    hidden: { opacity: 0, y: 50 }, // Start 50px below and fully transparent
    visible: {
      opacity: 1,
      y: 0, // Move to original position
      transition: { duration: 0.6, ease: "easeOut" }, // Smooth animation
    },
  };

  return (
    <div className="bg-[#E6F0F5]/40 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-[#003C46] mb-4">
            Find Your Dream Job
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore exciting career opportunities that match your skills and experience
          </p>
        </motion.div>

        <div ref={sectionRef} className="mb-12">
          <motion.div
            variants={searchContainerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"} // Trigger animation based on isInView
            className="bg-white rounded-2xl bg-gradient-to-r from-[#003C46]/30 to-[#0098AF]/30 shadow-xl p-6 md:p-8"
          >
            <form onSubmit={handleSearch} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                <div className="relative md:col-span-6">
                  <Input
                    type="text"
                    placeholder="Skills, designations, or keywords"
                    className="pl-9 py-6 rounded-xl border-gray-200 focus:border-[#0098af]"
                    value={skills}
                    onChange={(e) => setSkills(e.target.value)}
                  />
                  <Search
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                </div>

                <div className="relative md:col-span-3">
                  <Input
                    type="text"
                    placeholder="Location"
                    className="py-6 rounded-xl border-gray-200 focus:border-[#0098af]"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>

                <div className="md:col-span-2">
                  <Select value={experience} onValueChange={setExperience}>
                    <SelectTrigger className="h-[50px] rounded-xl border-gray-200 focus:border-[#0098af]">
                      <SelectValue placeholder="Experience" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl">
                      <SelectItem value="0-3">0-3 years</SelectItem>
                      <SelectItem value="4-8">4-8 years</SelectItem>
                      <SelectItem value="5-10">5-10 years</SelectItem>
                      <SelectItem value="8-12">8-12 years</SelectItem>
                      <SelectItem value="12+">12+ years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="md:col-span-1 flex items-center justify-center">
                  <Button
                    type="submit"
                    size="icon"
                    className="w-[50px] h-[50px] bg-[#00b4d8] hover:bg-[#0098af] text-white rounded-xl"
                  >
                    <Search size={20} />
                  </Button>
                </div>
              </div>
            </form>
          </motion.div>
        </div>

        <div className="space-y-8">
          <h2 className="text-2xl font-semibold text-[#003C46] mb-6">
            {hasSearched
              ? `${searchResults.length} ${
                  searchResults.length === 1 ? "Job" : "Jobs"
                } Found`
              : "Current Openings"}
          </h2>

          {hasSearched && searchResults.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl text-red-600 mb-4">No jobs match your criteria</h3>
              <p className="text-gray-500">Try adjusting your search filters</p>
            </div>
          ) : (
            <div className="space-y-4">
              {(hasSearched ? searchResults : jobsData).map((job, index) => (
                <JobCard key={job.id} job={job} index={index} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;