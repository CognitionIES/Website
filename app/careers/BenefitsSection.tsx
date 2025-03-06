"use client";

// This component shows why people should work with us
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { CAREERS_CONSTANTS } from "@/constants/careersPage/constants";

export default function BenefitsSection() {
  const { TITLE, ITEMS } = CAREERS_CONSTANTS.BENEFITS;
  const { STAGGER_CHILDREN, CARD_HOVER } = CAREERS_CONSTANTS.ANIMATIONS;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={STAGGER_CHILDREN}
      className="py-20 bg-gray-50 relative"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section title */}
        <div className="relative mb-12">
          <h2 className="text-3xl font-bold text-[#5B5B5B] relative">
            {TITLE}
            <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-[#0098AF] to-transparent" />
          </h2>
        </div>
        {/* Benefits cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {ITEMS.map((benefit, index) => (
            <motion.div
              key={index}
              variants={CARD_HOVER}
              initial="rest"
              whileHover="hover"
              className="bg-white p-6 rounded-lg border border-[#0098AF]/10 shadow-sm cursor-pointer"
            >
              <Card className="border-0 text-center">
                <CardHeader className="p-0">
                  <CardTitle className="text-lg font-semibold text-[#5B5B5B] hover:text-[#0098AF] transition-colors duration-200">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 pt-4">
                  <CardDescription className="text-sm font-light text-gray-600 leading-relaxed line-clamp-2">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
