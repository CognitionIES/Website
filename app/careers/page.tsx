"use client";

import Footer from "@/components/footer";
import image from "@/constants/images/Careers.jpg";
import { MegaMenu } from "@/components/ui/MegaMenu";
import Image from "next/image";
import testimonials from "@/constants/testimonials";
import { constants } from "./constants";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Award,
  Briefcase,
  Building2,
  ChevronRight,
  MapPin,
  Target,
  Users,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@radix-ui/react-select";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import jobListings from "@/constants/jobListings";

export default function CareersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("all");

  const filteredJobs = jobListings.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation =
      locationFilter === "all" || job.location === locationFilter;
    return matchesSearch && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-white">
      <MegaMenu />

      <div className="relative h-[500px] overflow-hidden">
        {/* Background Image */}
        <Image
          src={image}
          alt="Office Environment"
          fill
          className="object-cover"
          priority
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#003C46]/90 to-[#00A4B4]/80" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Join Our Team
          </h1>
          <div className="text-xl md:text-2xl text-[#99D5DF] max-w-2xl">
            Be part of a team that&apos;s engineering the future. We&apos;re
            looking for talented individuals who share our passion for
            innovation.
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-white to-[#F5FDFF]">
        {/* Subtle gradient background */}
        <section className="py-16 bg-[#F5FDFF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#003C46] mb-12 text-center">
              Our Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Building2,
                  title: "Co-Innovation",
                  description:
                    "We collaborate with clients to develop breakthrough solutions and co-patents, combining expertise with vision",
                },
                {
                  icon: Users,
                  title: "People-First Culture",
                  description:
                    "We eliminate rigid hierarchies, ensuring every team member has a voice and a direct impact on value creation.",
                },
                {
                  icon: Target,
                  title: "Excellence in Execution",
                  description:
                    "From concept to production, we are committed to delivering precision, quality, and innovation in everything we do",
                },
                {
                  icon: Award,
                  title: "Sustainability & Responsibility",
                  description:
                    "We design smarter, greener solutions that drive real impact across industries.",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg border border-[#99D5DF]/20 shadow-md"
                >
                  <h3 className="text-xl font-semibold text-[#00A4B4] mb-4">
                    {value.title}
                  </h3>
                  <p className="text-[#4A4A4A]">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="positions" className="py-20">
          <div className="containe max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              Open Positions
            </h2>

            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 border border-gray-200 rounded-lg">
                <Input
                  placeholder="Search positions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                />
              </div>
              <Select value={locationFilter} onValueChange={setLocationFilter}>
                <SelectTrigger className="w-full md:w-[200px]">
                  <SelectValue placeholder="Filter by location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="India">India</SelectItem>
                  <SelectItem value="USA">USA</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Job Listings */}
            <div className="grid gap-6">
              {filteredJobs.map((job) => (
                <Card
                  key={job.id}
                  className="group hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl mb-2">
                          {job.title}
                        </CardTitle>
                        <CardDescription>
                          <div className="flex gap-4 text-sm">
                            <span className="flex items-center gap-1">
                              <Briefcase className="w-4 h-4" />
                              {job.department}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {job.location}
                            </span>
                          </div>
                        </CardDescription>
                      </div>
                      {/* <Button className="group-hover:translate-x-1 bg-[#23dce1] hover:bg-white text-[#0c1d44] outline-solid transition-transform">
                    Apply Now
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </Button> */}
                      <Button className="px-6 py-2 border-2 border-[#0A2D68] text-[#0c1d44] bg-[#23dce1] font-medium rounded-md hover:bg-[#23dce1] hover:bg-white transition-transform">
                        Apply
                        <ChevronRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{job.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>{" "}
        <div className="bg-[#00A4B4]/5">
          {" "}
          {/* Very light teal background */}
          <section className="py-20 bg-secondary/30">
            <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center mb-12">
                Employee Testimonials
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {testimonials.map((testimonial) => (
                  <Card key={testimonial.id} className="flex flex-col">
                    <CardHeader className="flex-row gap-4 items-center">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={64}
                        height={64}
                        className="rounded-full w-16 h-16 object-cover"
                      />
                      <div>
                        <CardTitle className="text-lg">
                          {testimonial.name}
                        </CardTitle>
                        <CardDescription>{testimonial.role}</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="italic text-muted-foreground">
                        {testimonial.quote}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </div>
        <section className="py-20">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Work With Us
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {constants.map((benefit, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <CardTitle>{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>{" "}
      </div>
      <Footer />
    </div>
  );
}
