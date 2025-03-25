"use client";
import React from "react";
import { Clock, Zap, LineChart, Target, Layers } from "lucide-react";
//import { Card, CardContent } from '@/components/ui/card';

const benefits = [
  {
    icon: <Clock />,
    title: "Reduce Time to Sale",
    description:
      "Cut quoting time from hours to minutes with automated workflows and intelligent templates.",
  },
  {
    icon: <Zap />,
    title: "Proactive Service Offerings",
    description:
      "Predict maintenance needs and engage customers proactively with data-driven insights.",
  },
  {
    icon: <LineChart />,
    title: "AI-Led Price Insights",
    description:
      "Optimize margins and discounts with AI guidance to maximize profitability.",
  },
  {
    icon: <Target />,
    title: "Scientific Pipeline Management",
    description:
      "Fill your pipeline with targeted opportunities and increase conversion rates.",
  },
  {
    icon: <Layers />,
    title: "Mass Customization",
    description:
      "Design next-gen, segment-specific service offerings without complexity.",
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="section-padding bg-white">
      <div className="container max-w-7xl px-6 lg:px-8 mx-auto">
        <div className="text-center max-w-3xl py-14  mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#003C46] mb-6">
            AI-Powered Solutions For Modern Service Teams
          </h2>
          <p className="text-[#5b5b5b]">
            Our platform delivers tangible business benefits that drive revenue
            growth and operational excellence.
          </p>
        </div>

        {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-1">
            <Card className="h-full bg-[#8b5cf6]/10 border-none">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-[#8b5cf6] mb-4">
                  Customer Engagement & Commerce
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <ShoppingCartIcon className="w-5 h-5 text-[#8b5cf6] mt-1" />
                    <span>E-Commerce & Parts Ordering</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <UserIcon className="w-5 h-5 text-[#8b5cf6] mt-1" />
                    <span>Customer Portal & Self-Service</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <GiftIcon className="w-5 h-5 text-[#8b5cf6] mt-1" />
                    <span>Personalized Service Offerings</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Card className="h-full bg-[#8b5cf6]/10 border-none">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-[#8b5cf6] mb-4">
                  Service Optimization & Efficiency
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <ShieldIcon className="w-5 h-5 text-[#8b5cf6] mt-1" />
                    <span>Warranty & Claims Management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ToolsIcon className="w-5 h-5 text-[#8b5cf6] mt-1" />
                    <span>Shop & Field Repair Management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <SettingsIcon className="w-5 h-5 text-[#8b5cf6] mt-1" />
                    <span>Configure, Price, & Quote for Aftersales</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Card className="h-full bg-[#8b5cf6]/10 border-none">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-[#8b5cf6] mb-4">
                  AI Powered Solutions & Integrations
                </h3>
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden mb-6">
                  <Image
                    src="/lovable-uploads/f73d1ba1-7652-41c6-af89-79754680a505.png" 
                    alt="AI Assistant Interface" 
                    width={640}
                    height={360}
                    className="object-cover w-full h-full"
                  />
                </div>
                <a 
                  href="#features" 
                  className="inline-flex items-center text-[#8b5cf6] font-medium hover:underline"
                >
                  Explore our AI solution
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          </div>
        </div> */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              index={index}
            />
          ))}
        </div>

        <div className="mt-20 bg-[#E6F0F5]/30 rounded-xl p-8 animate-fade-in-up mb-20">
          <h3 className="text-2xl font-medium tracking-tight font-semibold text-[#003C46] mb-6 text-center">
            Who Can Benefit?
          </h3>
          <div className="flex flex-col md:flex-row justify-center gap-8 text-center">
            <div className="flex-1 p-6 bg-white/40 backdrop-blur-md border border-white/30 shadow-sm rounded-lg">
              <h4 className="text-lg font-medium tracking-tight font-medium text-[#003C46] mb-2">
                Industrial Machinery & Components Manufacturers
              </h4>
              <p className="text-[#5b5b5b]">
                Streamline service operations and boost aftermarket revenue.
              </p>
            </div>
            <div className="flex-1 p-6 bg-white/40 backdrop-blur-md border border-white/30 shadow-sm rounded-lg">
              <h4 className="text-lg font-medium tracking-tight font-medium text-[#003C46] mb-2">
                Dealers and Service Providers
              </h4>
              <p className="text-[#5b5b5b]">
                Enhance service delivery and improve customer satisfaction.
              </p>
            </div>
            <div className="flex-1 p-6 bg-white/40 backdrop-blur-md border border-white/30 shadow-sm rounded-lg">
              <h4 className="text-lg font-medium tracking-tight font-medium text-[#003C46] mb-2">
                Digital Companies
              </h4>
              <p className="text-[#5b5b5b]">
                Optimize service offerings and create new revenue streams.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const BenefitCard = ({
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
  return (
    <div
      className="flex items-start gap-6 animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#0098af]/10 flex items-center justify-center">
        <div className="text-[#0098af]">{icon}</div>
      </div>
      <div>
        <h3 className="text-xl font-semibold font-medium tracking-tight text-[#003C46] mb-3">
          {title}
        </h3>
        <p className="text-[#5b5b5b]">{description}</p>
      </div>
    </div>
  );
};

// function ShoppingCartIcon(props: React.SVGProps<SVGSVGElement>) {
//   return (
//     <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <circle cx="8" cy="21" r="1"></circle>
//       <circle cx="19" cy="21" r="1"></circle>
//       <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
//     </svg>
//   );
// }

// function UserIcon(props: React.SVGProps<SVGSVGElement>) {
//   return (
//     <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
//       <circle cx="12" cy="7" r="4"></circle>
//     </svg>
//   );
// }

// function GiftIcon(props: React.SVGProps<SVGSVGElement>) {
//   return (
//     <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <polyline points="20 12 20 22 4 22 4 12"></polyline>
//       <rect x="2" y="7" width="20" height="5"></rect>
//       <line x1="12" y1="22" x2="12" y2="7"></line>
//       <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
//       <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
//     </svg>
//   );
// }

// function ShieldIcon(props: React.SVGProps<SVGSVGElement>) {
//   return (
//     <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
//     </svg>
//   );
// }

// function ToolsIcon(props: React.SVGProps<SVGSVGElement>) {
//   return (
//     <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
//     </svg>
//   );
// }

// function SettingsIcon(props: React.SVGProps<SVGSVGElement>) {
//   return (
//     <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <circle cx="12" cy="12" r="3"></circle>
//       <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
//     </svg>
//   );
// }

// function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
//   return (
//     <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M5 12h14M12 5l7 7-7 7"></path>
//     </svg>
//   );
// }

export default Benefits;
