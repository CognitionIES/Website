import React from "react";
import { LucideIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ServiceProps {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
  alt: string;
  href: string;
  id: string;
}

interface ServiceCardProps {
  service: ServiceProps;
  onClick?: () => void;
}

export function ServiceCard({ service, onClick }: ServiceCardProps) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <Link
      href={`/services/plant-engineering/details#${service.id}`}
      className="block"
    >
      <div
        className="group relative h-[300px] rounded-lg overflow-hidden cursor-pointer"
        onClick={handleClick}
      >
        {/* Service image */}
        <Image
          src={service.image}
          alt={service.title}
          width={300}
          height={300}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Icon */}
        <div className="absolute top-4 left-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center z-10">
          <service.icon className="w-5 h-5 text-primary" />
        </div>

        {/* Overlay with info */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 className="text-xl font-semibold mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
              {service.title}
            </h3>
            <p className="text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
              {service.description}
            </p>
            <button className="inline-block bg-white text-primary px-4 py-2 rounded-md font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200 hover:bg-white/90">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}