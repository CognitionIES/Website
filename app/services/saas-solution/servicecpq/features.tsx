"use client";
import React from "react";
import {
  ShoppingCart,
  Shield,
  HomeIcon,
  Settings,
  Gift,
  Store,
  BarChartHorizontal,
  Bot,
  Settings2,
} from "lucide-react";

const features = [
  {
    icon: <Shield />,
    title: "Warranty Automation",
    description:
      "Automate warranty claims, reduce processing time, and gain valuable insights with AI-powered automation.",
  },
  {
    icon: <ShoppingCart />,
    title: "B2B Commerce & Portal",
    description:
      "Enable customers and partners to order parts and services online with a seamless self-service portal.",
  },
  {
    icon: <Settings />,
    title: "Repair Management",
    description:
      "Manage all your repairs in one place, from workshop overhauls to on-site field service, for improved efficiency.",
  },
  {
    icon: <Settings2 />,
    title: "AI-Powered CPQ",
    description:
      "Generate accurate quotes quickly with automated configuration, pricing, and quoting tools enhanced by AI.",
  },
  {
    icon: <Bot />,
    title: "AI Claim Assistant",
    description:
      "Intelligent chatbot for claim initiation and processing. Extract key information from claim documents automatically.",
  },
  {
    icon: <BarChartHorizontal />,
    title: "Service Insights Hub",
    description:
      "Move from reactive to proactive service with predictive insights and actionable intelligence.",
  },
  {
    icon: <Store />,
    title: "Parts & Inventory",
    description:
      "Optimize inventory levels for service teams and partners with intelligent forecasting.",
  },
  {
    icon: <HomeIcon />,
    title: "Dealer & Partner Portal",
    description:
      "Provide your partners with comprehensive portals for fast, accurate service responses and streamlined claims management.",
  },
  {
    icon: <Gift />,
    title: "Life-Cycle Solutions",
    description:
      "Maintenance & service contract configurator for full lifecycle customer support.",
  },
];

const Features = () => {
  return (
    <section id="features" className="section-padding py-14 bg-[#E6F0F5]/30">
      <div className="container px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center  mx-auto  mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight font-semibold text-[#003C46] mb-6">
            Powerful Features, Real Results
          </h2>
          <p className="text-[#5b5b5b]">
            AI-powered solutions designed to optimize the entire aftersales
            journey for manufacturers, partners, and dealers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({
  icon,
  title,
  description,
  index,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}) => {
  // Calculate delay based on index (0-800ms in steps of 100ms)
  const delay = Math.min(index * 100, 800);

  return (
    <div
      className={`bg-white/40 backdrop-blur-md border border-white/30 shadow-sm rounded-xl p-6 transition-all duration-300 hover:translate-y-[-5px] flex flex-col  items-start animate-fade-in-up`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-12 h-12 rounded-lg bg-[#0098af]/10 flex items-center justify-center mb-6">
        <div className="text-[#0098af]">{icon}</div>
      </div>
      <h3 className="text-xl font-medium tracking-tight font-semibold text-[#003C46] mb-3">
        {title}
      </h3>
      <p className="text-[#5b5b5b]">{description}</p>
    </div>
  );
};

export default Features;
