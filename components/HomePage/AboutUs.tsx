// components/HomePage/AboutUs.tsx
"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-[#F5FDFF] py-12 sm:py-16 lg:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Column */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#003C46] relative drop-shadow-md">
              Who We Are?
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-[#0098AF] to-transparent" />
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-gray-600 text-justify">
              At Cognition IES Pvt. Ltd., we are shaping the future of
              engineering with a commitment to precision, innovation, and
              client-focused solutions. Established in 2023, our company is
              dedicated to providing advanced engineering services tailored to
              the unique demands of discrete manufacturing industries.
            </p>
            <p className="font-semibold text-xl text-[#003C46] relative drop-shadow-sm">
              We Focus on Driving Operational Efficiency and Product Innovation
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-gray-600 text-justify">
              We bring state-of-the-art engineering practices to solve complex
              challenges. From concept design and product development to cost
              optimization and product lifecycle management, Cognition IES is
              your trusted partner in transforming ideas into reality.
            </p>
            <div className="mt-2"> {/* Added mt-8 for specific gap before the button */}
              <Link href="/brochure" >
                <Button className="bg-[#0098AF] text-white rounded-lg hover:bg-[#007B8F] transition-colors duration-200 w-fit">
                  Download Brochure
                </Button>
              </Link>
            </div>
          </div>

          {/* Image Column */}
          <div className="relative h-[300px] md:h-[400px] ml-2 rounded-xl shadow-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
              alt="Team working together"
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Subtle Decorative Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{
          delay: 1,
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute top-1/4 right-1/4 w-5 h-5 bg-[#0098AF] opacity-30 rounded-full -z-10"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
        className="absolute bottom-1/3 left-1/3 w-32 h-32 bg-[#000000] opacity-20 rounded-full blur-3xl -z-10"
      />
    </section>
  );
}
