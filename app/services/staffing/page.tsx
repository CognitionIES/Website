import React from "react";
import FeatureCard from "@/components/FeatureCard";
import SectionButton from "@/components/SectionButton";
import DividerElement from "@/components/DividerElement";
import ImageCard from "./ImageCard";
import ParallaxOrbs from "./ParallaxOrbs";
import { Users, Target, Rocket, Award } from "lucide-react";
import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
import Hero from "./hero";
import AboutSection from "./mainContent";
import CTASection from "@/components/CTA";
import Footer from "@/components/footer";

const Index = () => {
  // Job seeker features
  const jobSeekerFeatures = [
    {
      title: "Verified Job Listings",
      description:
        "Browse through carefully vetted opportunities that match your skillset and career goals.",
      icon: "check",
    },
    {
      title: "Direct Application",
      description:
        "Our intelligent system connects you with roles that align with your unique potential and aspirations.",
      icon: "sparkle",
    },
    {
      title: "Career Profile Management",
      description:
        "Access expert advice and resources to help you navigate your professional journey.",
      icon: "check",
    },
    {
      title: "Real-Time Alerts & Updates",
      description:
        "Receive tailored coaching to help you present your best self to potential employers.",
      icon: "sparkle",
    },
    {
      title: "Resume Guidance & Career Tips",
      description:
        "Receive tailored coaching to help you present your best self to potential employers.",
      icon: "sparkle",
    },
    // {
    //   title: "One Dashboard. Full Control",
    //   description:
    //     "Receive tailored coaching to help you present your best self to potential employers.",
    //   icon: "sparkle",
    // },
  ];

  // Employer features
  const employerFeatures = [
    {
      title: "Dedicated recruitment specialists for your sector",
      description:
        "Work with industry experts who understand your specific talent needs and market dynamics.",
      icon: "sparkle",
    },
    {
      title: "Permanent, temporary, and contract staffing options",
      description:
        "We identify, evaluate, and present only the most qualified candidates for your consideration.",
      icon: "check",
    },
    {
      title: "Complete talent acquisition strategy & execution",
      description:
        "Streamline your recruitment workflow with our proven methodologies and tools.",
      icon: "check",
    },
    {
      title: "Pre-screening, skill assessment & background checks",
      description:
        "Develop sustainable approaches to building and maintaining your ideal team.",
      icon: "sparkle",
    },
    {
      title: "Employer branding and candidate engagement support",
      description:
        "Develop sustainable approaches to building and maintaining your ideal team.",
      icon: "sparkle",
    },
  ];

  // Stats

  return (
    <div className="min-h-screen w-full mx-auto overflow-hidden">
      {/* Header with logo */}
      <MegaMenu />
      <Hero />
      <AboutSection />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        {/* Main Content */}
        <div className="flex flex-col md:flex-row ">
          {/* Job Seekers Column */}
          <div className="w-full md:w-1/2  bg-[#E6F0F5] p-6 md:p-10 min-h-screen rounded-l-3xl overflow-y-auto custom-scrollbar relative">
            <ParallaxOrbs theme="jobseeker" />

            <div className="max-w-lg mx-auto px-4 relative z-10 mt-2">
              <div className="text-center mb-8 animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-2 gradient-text seeker-gradient-text">
                  For Job Seekers
                </h2>
                <p className="text-[#5b5b5b] italic">
                  Find Opportunities That Match Your Potential
                </p>
              </div>

              <ImageCard
                imageUrl="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                alt="Professional working on laptop"
                icon={<Target size={24} />}
                theme="jobseeker"
              />

              <div
                className="mb-8 text-[#5b5b5b] animate-fade-in"
                style={{ animationDelay: "200ms" }}
              >
                <p className="leading-relaxed">
                  Your job search should reflect your{" "}
                  <span className="font-bold text-[#0098af]">
                    unique potential
                  </span>
                  . Our platform connects you with opportunities that align with
                  your skills, goals, and values, creating a more meaningful
                  path to your next career move.
                </p>
              </div>

              <div className="mb-10">
                <div className="flex items-center mb-4">
                  <h3
                    className="text-xl font-bold text-[#0098af] animate-fade-in flex items-center"
                    style={{ animationDelay: "300ms" }}
                  >
                    <Award className="w-5 h-5 mr-2" />
                    What We Offer
                  </h3>
                  <div className="flex-grow h-px bg-gradient-to-r from-[#0098af] to-transparent ml-3"></div>
                </div>

                <div className="relative space-y-4">
                  <div className="connection-line"></div>
                  {jobSeekerFeatures.map((feature, index) => (
                    <FeatureCard
                      key={index}
                      title={feature.title}
                      theme="jobseeker"
                      delay={400 + index * 100}
                      icon={feature.icon as "check" | "sparkle"}
                      description={""}
                    />
                  ))}
                </div>
              </div>

              <div
                className="text-center mt-10 animate-fade-in"
                style={{ animationDelay: "900ms" }}
              >
                <SectionButton
                  text="Start Your Journey"
                  theme="jobseeker"
                  size="lg"
                />
              </div>
            </div>
          </div>

          {/* Divider */}
          <DividerElement />

          {/* Employers Column */}
          <div className="w-full md:w-1/2 bg-[#003C46] rounded-r-3xl p-6 md:p-10 min-h-screen overflow-y-auto custom-scrollbar relative">
            <ParallaxOrbs theme="employer" />

            <div className="max-w-lg mx-auto px-4 relative z-10 mt-2">
              <div className="text-center mb-8 animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-2 gradient-text employer-gradient-text">
                  For Employers
                </h2>
                <p className="text-gray-300 italic">
                  Great Companies Are Built By Great Teams
                </p>
              </div>

              <ImageCard
                imageUrl="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                alt="Team working on computer"
                icon={<Users size={24} />}
                theme="employer"
              />

              <div
                className="mb-8 text-[#E6F0F5] animate-fade-in"
                style={{ animationDelay: "200ms" }}
              >
                <p className="leading-relaxed">
                  Finding the right talent isn&apos;t just about filling
                  positions—it&apos;s about building the future of your company.
                  We believe that{" "}
                  <span className="font-bold text-[#00b4d8]">
                    every hire is a step toward growth
                  </span>
                  , and our approach reflects this philosophy.
                </p>
              </div>

              <div className="mb-10">
                <div className="flex items-center mb-4">
                  <h3
                    className="text-xl font-bold text-[#00b4d8] animate-fade-in flex items-center"
                    style={{ animationDelay: "300ms" }}
                  >
                    <Rocket className="w-5 h-5 mr-2" />
                    What We Offer
                  </h3>
                  <div className="flex-grow h-px bg-gradient-to-r from-[#00b4d8] to-transparent ml-3"></div>
                </div>

                <div className="relative space-y-4">
                  <div className="connection-line"></div>
                  {employerFeatures.map((feature, index) => (
                    <FeatureCard
                      key={index}
                      title={feature.title}
                      theme="employer"
                      delay={400 + index * 100}
                      icon={feature.icon as "check" | "sparkle"}
                      description={""}
                    />
                  ))}
                </div>
              </div>

              <div
                className="text-center mt-10 animate-fade-in"
                style={{ animationDelay: "900ms" }}
              >
                <SectionButton
                  text="Build Your Team"
                  theme="employer"
                  size="lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer with animated dot pattern */}

      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
