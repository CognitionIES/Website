import React from "react";
import { CAREERS_CONSTANTS } from "@/constants/careersPage/constants";
import { motion } from "framer-motion";

const BenefitsSection = () => {
  const { ITEMS, TITLE } = CAREERS_CONSTANTS.BENEFITS;

  // Animation variants for the cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.2, // Staggered delay for each card
      },
    }),
    hover: {
      y: -10, // Slight lift on hover
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)", // Enhanced shadow
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="py-16 bg-[#F5FDFF]/50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-[#0098AF]/10 text-[#0098AF] text-sm font-medium rounded-full mb-4">
            Benefits & Perks
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#003C46] relative drop-shadow-md text-center">
            {TITLE}
          </h2>
          <p className="text-lg text-[#5B5B5B] max-w-2xl mx-auto">
            We believe in taking care of our team with benefits and a supportive
            environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-2 max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
          {ITEMS.map((benefit, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              whileHover="hover"
              className="bg-white rounded-xl p-4 sm:p-4 sm:px-6 shadow-sm border border-gray-100"
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-[#0098AF]/10 flex items-center justify-center">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-md bg-[#0098AF] flex items-center justify-center">
                    <span className="text-white font-bold text-base sm:text-lg">
                      {index + 1}
                    </span>
                  </div>
                </div>
                <h3 className="flex-1 text-lg sm:text-xl font-bold text-[#003C46] leading-tight">
                  {benefit.title}
                </h3>
              </div>
              <p className="text-[#5B5B5B] text-sm sm:text-base">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
