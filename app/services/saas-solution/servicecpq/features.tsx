import React from 'react';
import { 
  ShoppingCart, 
  Shield, 
 
  Settings, 
  BarChartHorizontal, 
  Bot,
  Settings2,
  ChevronRight,
  CircleDashed,
  Sparkles
} from 'lucide-react';
import BackgroundGrid from '@/components/ui/backgroundgrid';
import Link from 'next/link';
import Image from 'next/image';


const features = [
  {
    icon: <Shield />,
    title: "Warranty Automation",
    description: "Automate warranty claims with AI-powered processing.",
  },
  {
    icon: <ShoppingCart />,
    title: "B2B Commerce",
    description: "Enable customers to order parts and services online.",
  },
  {
    icon: <Settings />,
    title: "Repair Management",
    description: "Manage all repairs in one unified platform.",
  },
  {
    icon: <Settings2 />,
    title: "AI-Powered CPQ",
    description: "Generate accurate quotes with automated configuration.",
  },
  {
    icon: <Bot />,
    title: "AI Claim Assistant",
    description: "Extract key information from claim documents automatically.",
  },
  {
    icon: <BarChartHorizontal />,
    title: "Service Insights",
    description: "Move from reactive to proactive service with predictive insights.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20  md:py-28 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E6F0F5]/20 to-white -z-10" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-8 text-[#00b4d8]/30">
        <CircleDashed className="h-16 w-16 animate-spin-slow" />
      </div>
      <div className="absolute bottom-20 right-8 text-[#0098af]/30">
        <CircleDashed className="h-12 w-12 animate-spin-slow" style={{ animationDirection: 'reverse' }} />
      </div>
      
      <BackgroundGrid className="-z-10 opacity-60" />
      
      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <div className="flex justify-center mb-5">
            <div className="inline-flex items-center justify-center p-2 bg-[#E6F0F5]/50 rounded-full">
              <Sparkles className="h-5 w-5 text-[#0098af] mr-2" />
              <span className="text-sm font-medium text-[#003C46]">Intelligent Solutions</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#003C46] mb-6">
            Powerful Features, Real Results
          </h2>
          <p className="text-[#5b5b5b]">
            AI-powered solutions designed to optimize the entire aftersales journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side: Images with floating elements */}
          <div className="relative animate-fade-in-up order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4 relative">
              {/* Main image */}
              <div className="col-span-2 rounded-2xl overflow-hidden shadow-xl transform hover:scale-[1.01] transition-transform duration-300">
                <Image
                  src="/lovable-uploads/852d3f58-69a8-440c-99e3-f02c5bdf8449.png" 
                  alt="ServiceCPQ Dashboard" 
                  width={800}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
              
              {/* Additional smaller images */}
              <div className="rounded-xl overflow-hidden shadow-lg relative group">
                <div className="absolute inset-0 bg-[#0098af]/20 group-hover:bg-transparent transition-colors duration-300"></div>
                <Image 
                  src="/lovable-uploads/f73d1ba1-7652-41c6-af89-79754680a505.png" 
                  alt="ServiceCPQ Repair View"
                  width={400}
                  height={250} 
                  className="w-full h-auto object-cover"
                />
              </div>
              
              <div className="rounded-xl overflow-hidden shadow-lg relative group">
                <div className="absolute inset-0 bg-[#00b4d8]/20 group-hover:bg-transparent transition-colors duration-300"></div>
                <Image
                  src="/lovable-uploads/93bad063-de59-42dc-9cbb-3b68b6d99707.png" 
                  alt="ServiceCPQ Analytics" 
                  width={400}
                  height={250}
                  className="w-full h-auto object-cover" 
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -left-6 bg-[#0098af] text-white p-3 rounded-lg shadow-lg animate-subtle-bounce">
                <Bot className="h-6 w-6" />
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-[#00b4d8] text-white p-3 rounded-lg shadow-lg animate-subtle-bounce" style={{ animationDelay: "1s" }}>
                <Settings2 className="h-6 w-6" />
              </div>
              
              <div className="absolute top-1/3 -right-4 bg-white text-[#003C46] p-2 rounded-lg shadow-lg animate-pulse">
                <Sparkles className="h-5 w-5 text-[#00b4d8]" />
              </div>
            </div>
          </div>
          
          {/* Right side: Features grid */}
          <div className="order-1 lg:order-2 relative">
            {/* Decorative background element */}
            <div className="absolute -z-10 top-1/4 right-1/4 w-64 h-64 bg-[#0098af]/10 rounded-full blur-3xl"></div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
            
            <div className="mt-10 text-center lg:text-left">
              <Link 
                href="/contact" 
                className="inline-flex items-center text-[#0098af] hover:text-[#003C46] transition-colors"
              >
                Discover all features
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 w-full h-12 bg-[#E6F0F5]/10 -z-5" style={{
        maskImage: 'url("data:image/svg+xml,%3Csvg width=\'100%25\' height=\'100%25\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0,40 C80,10 150,50 200,20 C250,0 300,20 350,10 C400,0 450,30 500,15 C550,0 600,15 650,30 C700,45 750,20 800,40 L800,100 L0,100 Z\' fill=\'%23FFFFFF\'/%3E%3C/svg%3E")',
        maskSize: '800px 100px',
        maskRepeat: 'repeat-x'
      }}></div>
    </section>
  );
};

const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  index 
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
      className={`glass rounded-xl p-5 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-md
                 flex flex-col items-start animate-fade-in-up group cursor-pointer hover:border hover:border-[#0098af]`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-12 h-12 rounded-lg hover bg-[#0098af]/10 flex items-center justify-center mb-4 group-hover:bg-[#0098af]/20 transition-colors">
        <div className="text-[#0098af]">
          {icon}
        </div>
      </div>
      <h3 className="text-lg font-semibold text-[#003C46] mb-2">{title}</h3>
      <p className="text-[#5b5b5b] text-sm">{description}</p>
    </div>
);
}

export default Features;
