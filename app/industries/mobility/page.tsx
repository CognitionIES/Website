"use client";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MegaMenu } from "@/components/ui/MegaMenu";
import Footer from "@/components/footer";
import Hero from "./hero";
import About from "./about";
import Services from "./services";

import { fadeIn } from "@/components/ui/fadeIn"
import { faqs } from "./constants";



export default function MobilityIndustry() {
  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      <MegaMenu />
      {/* Hero Section */}
     <div>
        <Hero />
      </div>

      {/* About Section */}
      <About />

      {/* Services Section */}
      <Services />

      {/* FAQ Section */}
      <section className="w-full py-12 bg-[#F5FDFF]">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#003C46]">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-[#4A4A4A]">
              Quick answers about our mobility engineering solutions.
            </p>
          </motion.div>
          <motion.div {...fadeIn}>
            <Accordion type="single" collapsible className="text-[#4A4A4A]">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-[#99D5DF]/20"
                >
                  <AccordionTrigger className="text-lg hover:text-[#00A4B4]">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#4A4A4A] text-base pt-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
