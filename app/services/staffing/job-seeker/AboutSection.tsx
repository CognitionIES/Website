/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
  } from "@/components/ui/select"
import { Input } from "@/components/ui/input";
const sampleJobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "TechCorp",
      location: "Bangalore",
      experience: "3-5 years",
      skills: ["React", "JavaScript", "CSS"],
      salary: "₹12-15 LPA",
    },
    {
      id: 2,
      title: "Backend Engineer",
      company: "DataSys",
      location: "Hyderabad",
      experience: "5-10 years",
      skills: ["Node.js", "Python", "MongoDB"],
      salary: "₹15-20 LPA",
    },
    {
      id: 3,
      title: "Full Stack Developer",
      company: "InnoSoft",
      location: "Mumbai",
      experience: "1-3 years",
      skills: ["React", "Node.js", "SQL"],
      salary: "₹8-12 LPA",
    },
  ];
  
export default function AboutSection() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
const [skills, setSkills] = useState("");
  const [experience, setExperience] = useState("");
  const [location, setLocation] = useState("");
  const [searchResults, setSearchResults] = useState<typeof sampleJobs>([]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple filtering logic based on input
    const filteredJobs = sampleJobs.filter((job) => {
      const skillsMatch = skills
        ? job.skills.some((skill) =>
            skill.toLowerCase().includes(skills.toLowerCase())
          ) || job.title.toLowerCase().includes(skills.toLowerCase())
        : true;

      const expMatch = experience ? job.experience === experience : true;

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
        setIsInView(entry.isIntersecting); // Update state when section enters or leaves view
      },
      {
        threshold: 0.2, // Triggers when 20% of the section is visible
        rootMargin: "0px 0px -20% 0px", // Ensures it triggers only when scrolling down into the section
      }
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

  // Animation variants for fade-in and fade-out
  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div>
      <section
        ref={sectionRef}
        className="w-full py-16 sm:py-20 lg:py-12 relative bg-gradient-to-b from-white to-[#E6F0F5]/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="mb-8 max-w-7xl text-center">
            
            <h2 className="text-4xl sm:text-5xl font-bold text-[#003C46] mb-4">
            Find Your Dream Job
            </h2>
          </div>

          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className=" items-center"
          >
             <div className="container mx-auto text-center max-w-6xl">
   
            {/* Search Box */}
            <div className="bg-white rounded-2xl max-w-7xl mx-auto shadow-xl p-6 md:p-8 border border-gray-100">
              <form onSubmit={handleSearch} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                  <div className="relative md:col-span-6">
                    <Input
                      type="text"
                      placeholder="Enter skills / designations / companies"
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
                      placeholder="Enter location"
                      className="py-6 rounded-xl border-gray-200 focus:border-[#0098af]"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>

                  <div className="md:col-span-2">
                    <Select value={experience} onValueChange={setExperience}>
                      <SelectTrigger className="h-[50px] rounded-xl border-gray-200 focus:border-[#0098af]">
                        <SelectValue placeholder="Years" />
                      </SelectTrigger>
                      <SelectContent className="rounded-xl">
                        <SelectItem value="fresher">Fresher</SelectItem>
                        <SelectItem value="1-3">1-3 years</SelectItem>
                        <SelectItem value="3-5">3-5 years</SelectItem>
                        <SelectItem value="5-10">5-10 years</SelectItem>
                        <SelectItem value="10+">10+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="md:col-span-1 flex items-center justify-center">
                    <Button
                      type="submit"
                      size="icon"
                      className="w-[50px] h-[50px] bg-[#00b4d8] hover:bg-[#00b4d8]/90 text-white rounded-xl"
                    >
                      <Search size={20} />
                    </Button>
                  </div>
                </div>

                <p className="text-xs text-gray-500 mt-4">
                  We use cookies to improve your experience. By continuing to
                  browse the site, you agree to our{" "}
                  <a href="/cookies" className="text-[#0098af] hover:underline">
                    Cookie Policy
                  </a>
                  .
                </p>
              </form>
            </div>
          </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
