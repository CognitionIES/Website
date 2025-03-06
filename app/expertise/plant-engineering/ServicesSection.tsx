"use client";

// This component shows a grid of plant engineering services
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { PLANT_ENGINEERING_CONSTANTS } from "@/constants/plant-engineering/constants";

// Define what a service looks like
interface Service {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  image: string;
  alt: string;
  href: string;
}

// Card component for each service
const ServiceCard = ({ service }: { service: Service }) => {
  return (
    <div className="group relative h-[300px] rounded-lg overflow-hidden cursor-pointer">
      {/* Service image */}
      <Image
        src={service.image}
        alt={service.title}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
      {/* Icon */}
      <div className="absolute top-4 left-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center z-10">
        <service.icon className="w-5 h-5 text-primary" />
      </div>
      {/* Overlay with info */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#003C46]/90 via-[#00A4B4]/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-xl font-semibold mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
            {service.title}
          </h3>
          <p className="text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
            {service.description}
          </p>
          <Link
            href={service.href}
            className="inline-block bg-white text-[#00A4B4] px-4 py-2 rounded-md font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200 hover:bg-white/90"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function ServicesSection() {
  const { TITLE, SUBTITLE, ITEMS } = PLANT_ENGINEERING_CONSTANTS.SERVICES;

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section title and subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#003C46]">{TITLE}</h2>
          <p className="text-lg text-[#4A4A4A] max-w-7xl mx-auto">{SUBTITLE}</p>
        </motion.div>
        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ITEMS.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}