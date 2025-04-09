"use client";

import { motion } from "framer-motion";
import { PLANT_ENGINEERING_CONSTANTS } from "@/constants/plant-engineering/constants";
import { ServiceCard } from "@/components/ServiceCard";
import { LucideIcon } from "lucide-react";

export default function ServicesSection() {
  const { TITLE, ITEMS } = PLANT_ENGINEERING_CONSTANTS.SERVICES;

  // Add IDs to each service item
  const servicesWithIds = ITEMS.map((item, index) => ({
    ...item,
    id: `section-${index + 1}`, // e.g., section-1, section-2, etc.
    icon: item.icon as LucideIcon, // Ensure icon is cast to the correct type
  }));

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section title and subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        ><span className="inline-block px-3 py-1 bg-[#0098af]/10 text-[#0098af] text-xs font-medium uppercase tracking-wider rounded-full mb-4">
        Our Services
      </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#003C46]">
            {TITLE}
          </h2>
          {/* <p className="text-lg text-[#4A4A4A] max-w-7xl mx-auto">{SUBTITLE}</p> */}
        </motion.div>
        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesWithIds.map((service, index) => (
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