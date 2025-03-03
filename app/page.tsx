
//import { motion } from "framer-motion";
import Hero from "@/components/HomePage/hero";
import ServicesSection from "@/components/HomePage/Services";
import TestimonialSlider from "@/components/HomePage/Testimonials";
import Careers from "@/components/HomePage/Careers";
import Footer from "@/components/footer";
import { MegaMenu } from "@/components/ui/MegaMenu";
import AccordionDemo from "@/components/AccordionDemo";  

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 font-sans overflow-hidden">
      <MegaMenu />
      <div className="gap-16">
        <div className="min-h-screen gap-16 ">
          {/* Hero */}
          <Hero />
          {/* Services */}
          <section className="">
            <ServicesSection />
          </section>
          {/* Testimonials */}
          <section className="bg-white">
            <TestimonialSlider />
          </section>
          {/* Careers */}
          <section>
            <Careers />
          </section>
          {/* FAQs */}
          <section>
            <AccordionDemo />
          </section>
        </div>
        {/* Footer */}
        <footer className="gap-6 items-center justify-center mt-auto">
          <Footer />
        </footer>
      </div>
    </div>
  );
}