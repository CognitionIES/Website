import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CAREERS_CONSTANTS } from "@/constants/home/careers";

const Careers = () => {
  return (
    <section className="w-full py-16 bg-gradient-to-b from-white to-[#E6F0F5]/30 relative overflow-hidden">
      {/* Simple decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#0098af]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#0098af]/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <div className="space-y-4">
              <div className="inline-flex px-3 py-1 bg-[#0098af]/10 rounded-full">
                <p className="text-sm font-medium text-[#0098af]">
                  We&apos;re Hiring
                </p>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-[#003C46]">
                Join Our Team
              </h2>

              <h3 className="text-xl text-gray-600 font-medium">
                {CAREERS_CONSTANTS.SUBTITLE}{" "}
              </h3>

              <p className="text-gray-600 text-justify leading-relaxed">
                {CAREERS_CONSTANTS.DESCRIPTION}{" "}
              </p>

              <div className="pt-2">
                <Link href="/careers">
                  <Button className="bg-[#0098af] text-white hover:bg-white hover:text-black text-base transition-colors duration-200 border-2 border-transparent hover:border-[#0098af] hover:outline hover:outline-2 hover:outline-[#0098af] rounded-xl px-4 h-10 shadow-sm">
                    <span>Explore Opportunities</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={CAREERS_CONSTANTS.IMAGE}
                alt="Team collaborating in office"
                width={500}
                height={350}
                className="w-full h-[350px] object-cover"
              />

              {/* Simple decorative element */}
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-md">
                <p className="text-sm font-medium  text-[#003C46]">
                  Building the future together
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Adding a divider line for visual separation */}
      <div className="mt-16 h-[2px] w-full max-w-3xl mx-auto bg-gradient-to-r from-transparent via-[#0098af]/40 to-transparent"></div>
    </section>
  );
};

export default Careers;
