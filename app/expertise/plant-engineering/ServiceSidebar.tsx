"use client"; // Required for usePathname hook

import { DropletIcon, GaugeCircle, Layers2, RssIcon, Settings2, ShieldEllipsis } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Service {
  title: string;
  href: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    title: "FEED & Conceptual Design",
    href: "/expertise/plant-engineering/feed-conceptual",
    icon: <RssIcon className="w-4 h-4 text-[#0098AF] transition-colors" />,
  },
  {
    title: "Detailed Engineering",
    href: "/expertise/plant-engineering/detailed-engineering",
    icon: <Settings2 className="w-4 h-4 text-[#0098AF] transition-colors" />,
  },
  {
    title: "Digitalization & Industry 4.0 Services",
    href: "/expertise/plant-engineering/digitalization",
    icon: <DropletIcon className="w-4 h-4 text-[#0098AF] transition-colors" />,
  },
  {
    title: "Process Engineering Services",
    href: "/expertise/plant-engineering/process-engineering",
    icon: <Layers2 className="w-4 h-4 text-[#0098AF] transition-colors" />,
  },
  {
    title: "Supply Chain & Vendor Management Services",
    href: "/expertise/plant-engineering/supply-chain",
    icon: <GaugeCircle className="w-4 h-4 text-[#0098AF] transition-colors" />,
  },
  {
    title: "Project Management Control Activities",
    href: "/expertise/plant-engineering/project-management",
    icon: <ShieldEllipsis className="w-4 h-4 text-[#0098AF] transition-colors" />,
  },
];

export default function ServiceSidebar() {
  const pathname = usePathname();

  return (
    <div className="bg-white p-4 rounded-xl shadow-md sticky top-6 border border-[#0098AF]/20 hover:shadow-lg transition-shadow duration-300 max-w-xs">
      {/* Reduced padding from p-8 to p-4 for a slimmer look */}
      <h3 className="text-xl font-semibold mb-4 text-[#0098AF] border-b border-[#0098AF]/20 pb-2">
        Our Services
      </h3>
      <div className="space-y-2 overflow-y-auto max-h-[70vh]">
        {/* Reduced space-y-3 to space-y-2 for tighter spacing */}
        {services.map((service, index) => {
          const isActive = pathname === service.href;

          return (
            <Link key={index} href={service.href} passHref>
              <div
                className={`flex items-center p-2 rounded-lg transition-all duration-300 text-[#5B5B5B] hover:text-[#0098AF] ${
                  isActive ? "bg-[#0098AF]/20 text-[#0098AF] font-semibold" : "hover:bg-[#0098AF]/10"
                }`}
              >
                {/* Reduced p-3 to p-2 for slimmer items */}
                {service.icon}
                <span className="ml-2">{service.title}</span> {/* Reduced ml-3 to ml-2 */}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}