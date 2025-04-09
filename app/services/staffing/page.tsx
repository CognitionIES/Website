// import Footer from "@/components/footer";
// import { Button } from "@/components/ui/button";
// import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
// import Link from "next/link";

// const Index = () => {
//   return (
//     <div className="min-h-screen flex flex-col">
//       <MegaMenu />

//       <main className="flex-grow">
//         <section className="bg-gradient-to-r  from-[#0098af]-[#E6F0F5] to-white py-24 px-4">
//           <div className="container max-w-7xl mx-auto">
//             <div className="max-w-2xl">
//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0098af]-[#003C46] mb-6 leading-tight">
//                 Connecting Talent with Opportunity
//               </h1>
//               <p className="text-xl text-[#5b5b5b] mb-8">
//                 StaffSync is your trusted partner in staffing and recruitment, helping businesses find top talent and job seekers discover their dream careers.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4">
//                 <Button asChild size="lg" className="bg-[#0098af] hover:bg-[#0098af]-[#003C46]">
//                   <Link href="/job-seekers">Find Jobs</Link>
//                 </Button>
//                 <Button asChild size="lg" variant="outline" className="border-[#0098af] text-[#0098af] hover:bg-[#0098af]-[#E6F0F5]">
//                   <Link href="/employer">Hire Talent</Link>
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default Index;

/* Divider */
"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
//import faqs from "@/constants/faqs";
//import { cn } from "@/lib/utils";
import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
import Footer from "@/components/footer";
import Hero from "./hero";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import MainContent from "./mainContent";
import AboutSection from "./aboutSection";

const FAQ = () => {
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

  //const filteredFaqs = activeCategory === "all"
  //? faqs
  //: faqs.filter(faq => faq.category === activeCategory);

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
      <MegaMenu />
      <Hero /> 
      <MainContent />
      <AboutSection />
      <section
        ref={sectionRef}
        className="w-full py-16 sm:py-20 lg:py-12 relative bg-gradient-to-b from-white to-[#E6F0F5]/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="mb-8 max-w-7xl">
            <span className="inline-block px-3 py-1 bg-[#0098af]/10 text-[#0098af] text-xs font-medium uppercase tracking-wider rounded-full mb-4">
              Hiring Small heading
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#003C46] mb-4">
              Hiring Title
            </h2>
            {/* <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-7xl">
            The right engineering partner isn&apos;t just about technical services, it&apos;s about working with a team that understands your industry, your challenges, and the pressure to stay ahead.
          </p> */}
            {/* <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-7xl">Text</p> */}
          </div>

          {/* Category tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="container max-w-7xl mx-auto">
              <div className="max-w-2xl">
                <h1 className="text-4xl md:text-5xl py-10 lg:text-6xl font-bold text-[#0098af]-[#003C46] mb-6 leading-tight">
                  TITLE
                </h1>
                <p className="text-xl text-[#5b5b5b] mb-8">Description </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-[#0098af] hover:bg-[#0098af]-[#003C46]"
                  >
                    <Link href="/job-seekers">Find Jobs</Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-[#0098af] text-[#0098af] hover:bg-[#0098af]-[#E6F0F5]"
                  >
                    <Link href="/employer">Hire Talent</Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Simple divider */}
          <div className="mt-16 h-[2px] w-full max-w-3xl mx-auto bg-gradient-to-r from-transparent via-[#0098af]/40 to-transparent"></div>

          {/* CTA section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-16 text-center max-w-2xl mx-auto"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-[#003C46] mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our team is ready to help you find the perfect engineering
              solution for your business.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#0098af] hover:bg-[#007a8a] transition-colors duration-200 shadow-sm"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default FAQ;
