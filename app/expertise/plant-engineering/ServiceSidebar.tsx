"use client"; // Required for usePathname hook

import {
  DropletIcon,
  GaugeCircle,
  Layers2,
  RssIcon,
  Settings2,
  ShieldEllipsis,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

interface Service {
  title: string;
  href: string;
  icon: React.ReactNode;
  image: string; // New property for the image URL
  alt: string;   // New property for the image alt text
}

const services: Service[] = [
  {
    title: "PROCESS & SAFETY ENGINEERING",
    href: "/expertise/plant-engineering/process-and-safety",
    icon: <RssIcon className="w-4 h-4 text-[#0098AF] transition-colors" />,
    image: "https://images.unsplash.com/photo-1581091012184-5e0e349d1b5e?auto=format&fit=crop&w=576&q=80",
    alt: "Process safety equipment",
  },
  {
    title: "MECHANICAL ENGINEERING",
    href: "/expertise/plant-engineering/mechanical",
    icon: <Settings2 className="w-4 h-4 text-[#0098AF] transition-colors" />,
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=576&q=80",
    alt: "Mechanical engineering tools",
  },
  {
    title: "PIPING ENGINEERING",
    href: "/expertise/plant-engineering/piping",
    icon: <DropletIcon className="w-4 h-4 text-[#0098AF] transition-colors" />,
    image: "https://images.unsplash.com/photo-1507337272725-eec743fbdc31?auto=format&fit=crop&w=576&q=80",
    alt: "Piping engineering layout",
  },
  {
    title: "PIPING STRESS ANALYSIS",
    href: "/expertise/plant-engineering/piping-stress-analysis",
    icon: <Layers2 className="w-4 h-4 text-[#0098AF] transition-colors" />,
    image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=576&q=80",
    alt: "Piping stress analysis dashboard",
  },
  {
    title: "CIVIL ENGINEERING",
    href: "/expertise/plant-engineering/civil",
    icon: <GaugeCircle className="w-4 h-4 text-[#0098AF] transition-colors" />,
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=576&q=80",
    alt: "Civil engineering construction",
  },
  {
    title: "STRUCTURAL ENGINEERING",
    href: "/expertise/plant-engineering/structural",
    icon: <ShieldEllipsis className="w-4 h-4 text-[#0098AF] transition-colors" />,
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=576&q=80",
    alt: "Structural engineering framework",
  },
  {
    title: "ELECTRICAL ENGINEERING",
    href: "/expertise/plant-engineering/electrical",
    icon: <ShieldEllipsis className="w-4 h-4 text-[#0098AF] transition-colors" />,
    image: "https://images.unsplash.com/photo-1581094282220-1e7b2b35b7b8?auto=format&fit=crop&w=576&q=80",
    alt: "Electrical engineering panel",
  },
  {
    title: "INSTRUMENTATION ENGINEERING",
    href: "/expertise/plant-engineering/instrumentation",
    icon: <ShieldEllipsis className="w-4 h-4 text-[#0098AF] transition-colors" />,
    image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=576&q=80",
    alt: "Instrumentation control system",
  },
  {
    title: "MODULAR PACKAGE",
    href: "/expertise/plant-engineering/modular-package",
    icon: <ShieldEllipsis className="w-4 h-4 text-[#0098AF] transition-colors" />,
    image: "https://images.unsplash.com/photo-1581093458791-89b6f8c3b962?auto=format&fit=crop&w=576&q=80",
    alt: "Modular plant package",
  },
  {
    title: "REVERSE ENGINEERING",
    href: "/expertise/plant-engineering/reverse-engineering",
    icon: <ShieldEllipsis className="w-4 h-4 text-[#0098AF] transition-colors" />,
    image: "https://images.unsplash.com/photo-1581092919530-5957b3129a36?auto=format&fit=crop&w=576&q=80",
    alt: "Reverse engineering process",
  },
  {
    title: "PROCUREMENT SUPPORT",
    href: "/expertise/plant-engineering/procurement-support",
    icon: <ShieldEllipsis className="w-4 h-4 text-[#0098AF] transition-colors" />,
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=576&q=80",
    alt: "Procurement planning meeting",
  },
];

export default function ServiceSidebar() {
  const pathname = usePathname();

  // Find the active service based on the current pathname
  const activeService = services.find((service) => service.href === pathname);

  return (
    <div>
      <div className="bg-white p-8 rounded-xl shadow-md border border-[#0098AF]/20 hover:shadow-lg transition-shadow duration-300 max-w-sm">
        <h3 className="text-xl font-semibold mb-4 text-[#0098AF] border-b border-[#0098AF]/20 pb-2">
          Our Services
        </h3>
        <div className="space-y-2 overflow-y-auto max-h-[70vh]">
          {services.map((service, index) => {
            const isActive = pathname === service.href;

            return (
              <Link key={index} href={service.href} passHref>
                <div
                  className={`flex items-center p-2 rounded-lg transition-all duration-300 text-[#5B5B5B] hover:text-[#0098AF] ${
                    isActive
                      ? "bg-[#0098AF]/20 text-[#0098AF] font-semibold"
                      : "hover:bg-[#0098AF]/10"
                  }`}
                >
                  {service.icon}
                  <span className="ml-2">{service.title}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      {/* Image Section below the service list */}
      <div className="mt-6">
        {activeService ? (
          <Image
            src={activeService.image}
            alt={activeService.alt}
            width={300} // Adjusted to fit within sidebar width
            height={500} // Estimated height based on aspect ratio (adjust if needed)
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        ) : (
          <Image
            src="https://thumbs.dreamstime.com/b/vertical-image-construction-safety-concept-close-up-worker-holding-helmet-33226974.jpg?w=576"
            alt="Construction Safety Concept - Worker Holding Helmet"
            width={300}
            height={500}
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        )}
      </div>
    </div>
  );
}