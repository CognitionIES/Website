"use client";
import React from "react";
import { CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

const Problems = () => {
  return (
    <section className="py-20 bg-[#E6F0F5]/20">
      <div className="container px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight font-semibold text-[#003C46] mb-6">
              Transform Your After-Sales Experience
            </h2>
            <p className="text-[#5b5b5b] text-lg mb-8">
              Move beyond reactive solutions. Deliver proactive service and a
              better B2B buying experience.
            </p>

            <div className="space-y-4 mb-8">
              <Benefit text="Streamline warranty claims for faster approvals" />
              <Benefit text="Generate accurate quotes with automated tools" />
              <Benefit text="Manage all repairs in one unified platform" />
              <Benefit text="Gain real-time visibility into performance" />
            </div>

            <Link
              href="/contact"
              className="bg-[#0098af] text-white px-6 py-3 rounded-md inline-flex items-center justify-center transition-all duration-300 hover:bg-[#003C46] focus:outline-none focus:ring-2 focus:ring-[#0098af]/50 focus:ring-offset-2; group"
            >
              Talk to Us
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="lg:pl-12 animate-fade-in-up delay-200">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold font-medium tracking-tight text-[#003C46] mb-6">
                AI-Powered Excellence
              </h3>

              <div className="space-y-6">
                <SolutionFeature
                  title="Purpose-Built for Manufacturers"
                  description="Optimize service operations for manufacturers, partners, and service providers in one platform."
                />
                <SolutionFeature
                  title="Fast Setup & Customization"
                  description="Easily configurable to fit your unique workflows for seamless transition."
                />
                <SolutionFeature
                  title="Intelligent Insights"
                  description="Leverage AI-driven analytics to make informed decisions and enhance productivity."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Benefit = ({ text }: { text: string }) => {
  return (
    <div className="flex items-start">
      <CheckCircle className="text-[#0098af] mr-3 h-5 w-5 mt-1 flex-shrink-0" />
      <p className="text-[#5b5b5b]">{text}</p>
    </div>
  );
};

const SolutionFeature = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="border-l-4 border-[#0098af] pl-4">
      <h4 className="font-medium font-medium tracking-tight text-[#003C46] mb-2">{title}</h4>
      <p className="text-sm text-[#5b5b5b]">{description}</p>
    </div>
  );
};

export default Problems;
