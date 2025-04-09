"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
//import { Tabs, TabsContent } from "@/components/ui/tabs";
//import faqs from "@/constants/faqs";
//import { cn } from "@/lib/utils";
//import Footer from "@/components/footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { PLANT_ENGINEERING_CONSTANTS } from "@/constants/plant-engineering/constants";

const About = () => {
  const [isInView, setIsInView] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeCategory, setActiveCategory] = useState("all");
  const sectionRef = useRef<HTMLElement>(null);

  //const categories = [
  //  { id: "all", label: "All Questions" },
  //  { id: "General", label: "General" },
  //  { id: "Product", label: "About Product" },
  //  { id: "Process", label: "About Process" },
  //];
  const { DESCRIPTION_1, DESCRIPTION_2, IMAGE } =
    PLANT_ENGINEERING_CONSTANTS.ABOUT;

  //   const filteredFaqs =
  //     activeCategory === "all"
  //       ? faqs
  //       : faqs.filter((faq) => faq.category === activeCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div>
      <section
        ref={sectionRef}
        className="w-full py-16 sm:py-20 lg:py-12 relative bg-gradient-to-b from-white to-[#E6F0F5]/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="mb-8 max-w-7xl">
            <span className="inline-block px-3 py-1 bg-[#0098af]/10 text-[#0098af] text-xs font-medium uppercase tracking-wider rounded-full mb-4">
              Plant Engineering Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#003C46] mb-4">
              Engineering efficiency where it matters most
            </h2>
          </div>

          {/* Category tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-8 "
          >
            <div className="">
              <p className="text-lg text-gray-600 mb-6 text-justify leading-relaxed">
                {DESCRIPTION_1}
              </p>
              <p className="text-lg text-gray-600 text-justify leading-relaxed">
                {DESCRIPTION_2}
              </p>{" "}
              <div className="mt-4">
                <Link href="/brochure">
                  <Button className="bg-[#0098af] text-white hover:bg-white hover:text-black text-sm sm:text-base px-4 py-2 sm:px-6 sm:py-3 transition-colors duration-200 border-2 border-transparent hover:border-[#0098af] hover:outline hover:outline-2 hover:outline-[#0098af]">
                    Download Brochure
                  </Button>
                </Link>
              </div>
            </div>
            <div className="order-1 md:order-2 relative hidden md:block md:h-[350px] md:w-[555px] rounded-xl shadow-md overflow-hidden justify-self-end">
              <Image
                src={IMAGE}
                alt="Engineering services"
                width={300}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Simple divider */}
          <div className="mt-16 h-[2px] w-full max-w-3xl mx-auto bg-gradient-to-r from-transparent via-[#0098af]/40 to-transparent"></div>

          {/* CTA section */}
        </div>
      </section>
    </div>
  );
};

export default About;
