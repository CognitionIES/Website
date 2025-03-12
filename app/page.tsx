// "use client";

// import Hero from "@/components/HomePage/hero";
// import ServicesSection from "@/components/HomePage/Services";
// import TestimonialSlider from "@/components/HomePage/Testimonials";
// import Careers from "@/components/HomePage/Careers";
// import Footer from "@/components/footer";
// import { MegaMenu } from "@/components/ui/MegaMenu";
// import AccordionDemo from "@/components/AccordionDemo";
// import { motion } from "framer-motion";
// import AboutUs from "@/components/HomePage/AboutUs";
// import ContactUs from "@/components/HomePage/ContactUs";

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-[#F5FDFF] text-gray-900 font-sans overflow-hidden relative">
//       {/* Remove Hexagonal Background - Replaced with subtle dots/circles */}
//       <MegaMenu />
//       <div className="gap-16 relative">
//         <div className="min-h-screen gap-16">
//           {/* Hero */}
//           <Hero />
//           <section className="bg-gradient-to-b from-gray-50 to-[#F5FDFF]">
//             <AboutUs />
//           </section>
//           {/* Services */}
//           <section className="bg-gradient-to-b from-gray-50 to-[#F5FDFF]">
//             <ServicesSection />
//           </section>

//           {/* Testimonials */}
//           <section className="bg-gradient-to-b from-[#0098AF]/5 to-gray-50 ">
//             <TestimonialSlider />
//           </section>

//           {/* Careers */}
//           <section className="bg-gradient-to-b from-gray-50 to-[#F5FDFF] ">
//             <Careers />
//           </section>

//           {/* FAQs */}
//           <section className="bg-gray-200">
//             <AccordionDemo />
//           </section>
//           <section>
//             <ContactUs />
//           </section>
//         </div>

//         {/* Footer */}
//         <footer className="gap-6 items-center justify-center mt-auto bg-gradient-to-b from-gray-50 to-[#F5FDFF]">
//           <Footer />
//         </footer>

//         {/* Subtle Decorative Dots and Circles */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 0.15 }}
//           transition={{
//             delay: 1,
//             duration: 1,
//             repeat: Infinity,
//             repeatType: "reverse",
//           }}
//           className="absolute top-1/4 left-10 w-5 h-5 bg-[#0098AF] rounded-full -z-10"
//         />
//         <motion.div
//           initial={{ opacity: 0, scale: 0 }}
//           animate={{ opacity: 0.1, scale: 1 }}
//           transition={{ delay: 0.7, duration: 1 }}
//           className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-[#99D5DF] rounded-full blur-2xl -z-10"
//         />
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 0.2 }}
//           transition={{
//             delay: 1.5,
//             duration: 1,
//             repeat: Infinity,
//             repeatType: "reverse",
//           }}
//           className="absolute top-1/2 right-12 w-4 h-4 bg-[#5B5B5B] rounded-full -z-10"
//         />
//       </div>
//     </div>
//   );
// }
"use client";

// Main Home page putting all sections together
import { motion } from "framer-motion";
import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
import Footer from "@/components/footer";
import Hero from "@/components/HomePage/hero";
import AboutUs from "@/components/HomePage/AboutUs";
import AccordionDemo from "@/components/AccordionDemo";
import ContactUs from "@/components/HomePage/ContactUs";
import dynamic from "next/dynamic";

const TestimonialSlider = dynamic(
  () => import("@/components/HomePage/Testimonials"),
  { ssr: false }
);
const Careers = dynamic(() => import("@/components/HomePage/Careers"), {
  ssr: false,
});
const ServicesSection = dynamic(
  () => import("@/components/HomePage/Services"),
  { ssr: false }
);

export default function Home() {
  return (
    <div>
      <MegaMenu />
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-[#F5FDFF] text-gray-900 font-sans overflow-hidden relative">
      <main className="relative">
        <Hero />
        <section className="bg-gradient-to-b from-gray-50 to-[#F5FDFF]">
          <AboutUs />
        </section>
        
        <section className="bg-gradient-to-b from-gray-50 to-[#F5FDFF]">
          <ServicesSection />
        </section>
        
        <section className="bg-white">
          <AccordionDemo />
        </section>
        <section className="bg-gradient-to-b from-[#0098AF]/5 to-gray-50">
          <TestimonialSlider />
        </section>
        <section className="bg-gradient-to-b from-gray-50 to-[#F5FDFF]">
          <Careers />
        </section>
      
        <section>
          <ContactUs />
        </section>
      </main>
      <Footer />
      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{
          delay: 1,
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute top-1/4 left-10 w-5 h-5 bg-[#0098AF] rounded-full -z-10"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
        className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-[#99D5DF] rounded-full blur-2xl -z-10"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{
          delay: 1.5,
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute top-1/2 right-12 w-4 h-4 bg-[#5B5B5B] rounded-full -z-10"
      />
    </div>
    </div>
  );
}
