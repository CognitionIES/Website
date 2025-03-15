"use client";

// This component shows the company values with cards
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { CAREERS_CONSTANTS } from "@/constants/careersPage/constants";

export default function ValuesSection() {
  const { TITLE, ITEMS } = CAREERS_CONSTANTS.VALUES;
  const { STAGGER_CHILDREN, CARD_HOVER } = CAREERS_CONSTANTS.ANIMATIONS;

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-[#F5FDFF] relative">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={STAGGER_CHILDREN}
        className="py-16 bg-gradient-to-b from-gray-50 to-[#F5FDFF] relative"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Section title */}
          <div className="relative mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#003C46] relative drop-shadow-md">
              {TITLE}
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-[#0098AF] to-transparent" />
            </h2>
          </div>
          {/* Values cards */}
          <div className="grid md:grid-cols-4 gap-6">
            {ITEMS.map((value, index) => (
              <motion.div
                key={index}
                variants={CARD_HOVER}
                initial="rest"
                whileHover="hover"
                className="bg-white p-6 rounded-lg border border-[#0098AF]/10 shadow-sm cursor-pointer"
              >
                <Card className="border-0">
                  <CardHeader className="p-0">
                    <CardTitle className="text-xl font-bold text-[#5B5B5B] mb-2 hover:text-[#0098AF] transition-colors duration-200">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <CardDescription className="text-sm sm:text-base leading-relaxed text-gray-600 ">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
