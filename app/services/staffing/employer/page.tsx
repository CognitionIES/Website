"use client";
import React, { useEffect, useRef } from "react";
import {
  Briefcase,
  Search,
  MessageSquare,
  CheckCircle,
  Users,
  Clock,
  Sparkles,
  RotateCcw,
  Award,
  Target,
  Car,
} from "lucide-react";
//import { Button } from "@/components/ui/button";
//import {
//  Carousel,
//  CarouselContent,
//  CarouselItem,
//  CarouselNext,
//  CarouselPrevious,
//} from "@/components/ui/carousel";
//import { Input } from "@/components/ui/input";
//import { Label } from "@/components/ui/label";
//import { Separator } from "@/components/ui/seprator";
import Image from "next/image";
import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
import Footer from "@/components/footer";
//import CTASection from "@/components/CTA";

const Employers = () => {
  const animatedElementsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    animatedElements.forEach((el) => {
      observer.observe(el);
      animatedElementsRef.current.push(el as HTMLElement);
    });

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      animatedElementsRef.current.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const processSteps = [
    {
      title: "Requirement Discovery",
      icon: <Briefcase className="h-8 w-8 text-[#00b4d8]" />,
      description:
        "Understand your hiring needs. JDs. limelines and cultural fit",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Choose Your Engagement Model",
      icon: <Search className="h-8 w-8 text-[#00b4d8]" />,
      description:
        "Flexible models: Contingency RPO, Contract, Retained Payroll ",
      image:
        "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Candidate Scrolling & Screening",
      icon: <MessageSquare className="h-8 w-8 text-[#00b4d8]" />,
      description:
        "Head-hunting, screening and shortlisting candidates from verified databases",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80",
    },
  ];

  const processSteps1 = [
    {
      title: "Interview Coordination",
      icon: <MessageSquare className="h-8 w-8 text-[#00b4d8]" />,
      description: "Interview scheduling, feedback loop and support",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Post Placement Support",
      icon: <MessageSquare className="h-8 w-8 text-[#00b4d8]" />,
      description: "Follow-aips, feedback collection and retention",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80",
    },
  ];

  const benefits = [
    {
      title: "Time-saving",
      icon: <Clock className="h-10 w-10 text-[#00b4d8]" />,
      description: "Let us handle the search while you focus on your business",
    },
    {
      title: "Quality matches",
      icon: <CheckCircle className="h-10 w-10 text-[#00b4d8]" />,
      description: "Only candidates who match your requirements",
    },
    {
      title: "Growing network",
      icon: <Users className="h-10 w-10 text-[#00b4d8]" />,
      description: "Access our expanding talent pool",
    },
    {
      title: "Fresh approach",
      icon: <Sparkles className="h-10 w-10 text-[#00b4d8]" />,
      description: "Modern hiring techniques for today's market",
    },
  ];

  // const testimonials = [
  //   {
  //     quote:
  //       "As a startup ourselves, we understand the importance of finding the right talent quickly.",
  //     author: "Our Founding Team",
  //     company: "Talent Canvas",
  //   },
  //   {
  //     quote:
  //       "Their fresh approach to talent acquisition helped us build our initial team faster than expected.",
  //     author: "Sarah K.",
  //     company: "Tech Startup",
  //   },
  //   {
  //     quote:
  //       "The personalized service made all the difference in our hiring process.",
  //     author: "Michael R.",
  //     company: "Digital Agency",
  //   },
  // ];

  return (
    <div>
      <MegaMenu />
      <div className="bg-gradient-to-br from-[#E6F0F5]  to-white">
        {/* Hero Section with Background Image */}
        <div className="relative bg-[#003C46] text-white h-[470px] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80"
              alt="Team collaboration"
              width={1920}
              height={1080}
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#003C46] via-[#0098af] to-[#003C46] opacity-80"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 py-16 md:py-32 relative z-10 overflow-x-auto whitespace-nowrap">
            <div className="text-center items-center">
              <div className="mb-8">
                <h1 className="text-3xl  md:text-4xl lg:text-5xl font-bold mb-4 text-center items-center justify-center animate-on-scroll visible">
                  Our Business Engagement Model
                </h1>
                <p className="text-base opacity-90 mb-4 uppercase animate-on-scroll visible">
                  Transparent, Flexible and Scalable
                </p>
                <p className="text-lg opacity-90 mb-8 uppercase animate-on-scroll visible">
                  We help you hire smarter through a structured Engagement model
                  that ensures success from Day One
                </p>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="absolute bottom-0 w-full h-16 text-[#E6F0F5]"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4">
          {/* How We Work Section */}
          <section className="py-16">
            <div className="text-center mb-12 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0098af] mb-3 uppercase">
                Step-by-Step Engagement Process
              </h2>
            </div>

            {/* Process Flow with Images */}
            <div className="grid md:grid-cols-3 gap-8 animate-on-scroll">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className=" p-6 rounded-lg bg-white transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-[#0098AF]/10 flex items-center justify-center">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-md bg-[#0098AF] flex items-center justify-center">
                        <span className="text-white font-bold text-base sm:text-lg">
                          {index + 1}
                        </span>
                      </div>
                    </div>
                    <h3 className="flex-1 text-lg sm:text-xl font-bold text-[#003C46] leading-tight">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-[#5B5B5B] text-sm sm:text-base">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 max-w-4xl mx-auto gap-8 animate-on-scroll py-4">
              {processSteps1.map((step, index) => (
                <div
                  key={index}
                  className=" p-6 rounded-lg bg-white transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-[#0098AF]/10 flex items-center justify-center">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-md bg-[#0098AF] flex items-center justify-center">
                        <span className="text-white font-bold text-base sm:text-lg">
                          {index + 4}
                        </span>
                      </div>
                    </div>
                    <h3 className="flex-1 text-lg sm:text-xl font-bold text-[#003C46] leading-tight">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-[#5B5B5B] text-sm sm:text-base">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section>
            {/* Engagement Models We Offer */}
            <div>
              <h3 className="text-4xl text-center font-bold text-[#0098af] uppercase font-montserrat mb-8">
                Engagement Models We Offer
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
                <EngagementModelCard
                  icon={<Target className="w-10 h-10 text-[#0098af]" />}
                  title="Contingency Hiring"
                  description="Pay only on successful hire"
                />

                <EngagementModelCard
                  icon={<Award className="w-10 h-10    text-[#0098af]" />}
                  title="Retained Search"
                  description="Ideal for senior leadership positions"
                />

                <EngagementModelCard
                  icon={<Clock className="w-10 h-10 text-[#0098af]" />}
                  title="Contract Staffing"
                  description="For short-term or project-based needs"
                />

                <EngagementModelCard
                  icon={<RotateCcw className="w-10 h-10 text-[#0098af]" />}
                  title="RPO"
                  description="Full-cycle hiring managed by our team"
                />

                <EngagementModelCard
                  icon={<Car className="w-10 h-10 text-[#0098af]" />}
                  title="Payroll Services"
                  description="We onboard & manage compliance for your hires"
                />

                <EngagementModelCard
                  icon={<Briefcase className="w-10 h-10 text-[#0098af]" />}
                  title="Services"
                  description="We onboard & manage compliance for your hires"
                />
              </div>
            </div>
            {/* Why Our Model Works */}
            <div className="py-12 px-4 lg:px-0">
              <h3 className="text-3xl font-bold text-[#003C46] font-montserrat mb-8 text-center lg:text-left">
                Why Our Model Works
              </h3>

              <div className="grid bg-white grid-cols-1 rounded-xl lg:grid-cols-2 gap-8 items-center">
                {/* Left Column - Bullet Points */}
                <div className="bg-white  p-8">
                  <div>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">✔</span>
                        <span className="text-gray-700">
                          Customizable engagement types
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">✔</span>
                        <span className="text-gray-700">
                          Dedicated account manager
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">✔</span>
                        <span className="text-gray-700">
                          Transparent communication
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">✔</span>
                        <span className="text-gray-700">
                          Faster turnaround time
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">✔</span>
                        <span className="text-gray-700">
                          Scalable hiring across business sizes
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Right Column - Graph Image */}
                <div className="flex justify-center lg:justify-center p-8">
                  <Image
                    src="https://plus.unsplash.com/premium_photo-1682309543429-6aaa6d792dae?q=80&w=2112&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with your graph image URL
                    alt="Increasing Graph"
                    width={400}
                    height={500}
                    className="w-full max-w-xs lg:max-w-[500px] h-auto rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Image Banner */}

          {/* Benefits Section */}
          <section className="py-16 bg-white rounded-lg shadow-sm  animate-on-scroll">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0098af] mb-3">
                Why Partner With Us
              </h2>
              <p className="text-[#5b5b5b] max-w-3xl mx-auto">
                We&apos;re new, but we&apos;re bringing fresh energy to talent
                acquisition
              </p>
            </div>

            <div className="grid md:grid-cols-2 p-4 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="p-2 hover:bg-[#E6F0F5] rounded-lg transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="flex  flex-col items-center text-center">
                    {benefit.icon}
                    <h3 className="mt-4  font-semibold text-lg text-[#003C46]">
                      {benefit.title}
                    </h3>
                    <p className="mt-2 text-sm text-[#5b5b5b]">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section className="py-10 animate-on-scroll">
            <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1920&q=80"
                alt="Team collaboration"
                width={1920}
                height={1080}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0098af]/80 to-[#003C46]/90 flex items-center justify-center">
                <div className="text-center text-white p-6 md:p-12 max-w-3xl">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    Growing Together
                  </h3>
                  <p className="text-lg opacity-90">
                    As a startup ourselves, we.&apos;re uniquely positioned to
                    understand your hiring needs
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* Contact Form Section */}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Employers;
const EngagementModelCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
      <div className="flex flex-col items-center text-center">
        <div className="mb-4">{icon}</div>
        <h4 className="text-lg font-semibold text-[#003C46] font-montserrat mb-2">
          {title}
        </h4>
        <p className="text-[#5b5b5b] font-opensans text-sm">{description}</p>
      </div>
    </div>
  );
};
