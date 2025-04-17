// components/JobDetails.tsx
"use client";
import { Job } from "@/constants/jobData";
import { Button } from "@/components/ui/button";
import { Briefcase, MapPin, Building, Users, ArrowLeft, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";
import Link from "next/link";

interface JobDetailsProps {
  job: Job;
}

const JobDetails = ({ job }: JobDetailsProps) => {
  const { toast } = useToast();

  const handleApply = () => {
    toast({
      title: "Application Submitted",
      description: `Thank you for applying to the ${job.title} position. We'll be in touch soon!`,
      duration: 5000,
    });
  };

  return (
    <div className="bg-gradient-to-b from-white to-[#E6F0F5]/30 min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/services/staffing/job-seeker"
          className="inline-flex items-center text-[#0098af] hover:text-[#00b4d8] mb-8"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Jobs
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-md p-8 mb-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-start mb-6">
            <div>
              <h1 className="text-3xl font-bold text-[#003C46] mb-3">{job.title}</h1>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-gray-600 mb-4">
                <div className="flex items-center">
                  <Building size={16} className="mr-1" />
                  <span>{job.company}</span>
                </div>
                <div className="flex items-center">
                  <MapPin size={16} className="mr-1" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center">
                  <Briefcase size={16} className="mr-1" />
                  <span>{job.experience}</span>
                </div>
                {job.openings && (
                  <div className="flex items-center">
                    <Users size={16} className="mr-1" />
                    <span>
                      {job.openings} {job.openings === 1 ? "Opening" : "Openings"}
                    </span>
                  </div>
                )}
                {job.industry && (
                  <div className="flex items-center">
                    <Building size={16} className="mr-1" />
                    <span>{job.industry}</span>
                  </div>
                )}
              </div>
              <div className="text-sm text-gray-500 flex items-center">
                <Clock size={14} className="mr-1" />
                <span>Posted {job.posted}</span>
              </div>
            </div>
            <Button
              onClick={handleApply}
              className="mt-4 md:mt-0 bg-[#0098af] hover:bg-[#00b4d8] text-white px-8 py-2 rounded-full"
            >
              Apply Now
            </Button>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <div className="prose max-w-none">
              <h2 className="text-xl font-semibold text-[#003C46] mb-4">Job Overview</h2>
              <p className="text-gray-700 mb-6">{job.fullDescription}</p>

              {job.requirements && job.requirements.length > 0 && (
                <div className="mb-6">
                  <h2 className="text-xl font-semibold text-[#003C46] mb-4">Requirements</h2>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    {job.requirements.map((requirement, index) => (
                      <li key={index}>{requirement}</li>
                    ))}
                  </ul>
                </div>
              )}

              {job.keySkills && job.keySkills.length > 0 && (
                <div className="mb-6">
                  <h2 className="text-xl font-semibold text-[#003C46] mb-4">Key Skills</h2>
                  <p className="text-gray-600 mb-2">Skills highlighted with ★ are preferred key skills</p>
                  <div className="flex flex-wrap gap-2">
                    {job.keySkills.map((skillObj, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-800 flex items-center"
                      >
                        {skillObj.isPreferred && "★"}
                        {skillObj.skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {job.responsibilities && job.responsibilities.length > 0 && (
                <div className="mb-6">
                  <h2 className="text-xl font-semibold text-[#003C46] mb-4">Responsibilities</h2>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    {job.responsibilities.map((responsibility, index) => (
                      <li key={index}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        <div className="text-center">
          <p className="text-gray-600 mb-6">
            Think this role would be perfect for someone you know? Share it with them!
          </p>
          <Button
            onClick={handleApply}
            className="bg-[#0098af] hover:bg-[#00b4d8] text-white px-12 py-6 rounded-xl text-lg"
          >
            Apply for this Position
          </Button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;