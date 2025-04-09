// import React from "react";
// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { ArrowRight } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { CAREERS_CONSTANTS } from "@/constants/home/careers";

// const Careers = () => {
//   return (
//     <section className="w-full py-10 sm:py-16 bg-gradient-to-b from-white to-[#E6F0F5]/20 relative overflow-hidden">
//       {/* Decorative background elements */}
//       <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-[#0098af]/5 rounded-full blur-3xl pointer-events-none"></div>
//       <div className="absolute bottom-0 left-0 w-56 sm:w-72 h-56 sm:h-72 bg-[#0098af]/5 rounded-full blur-3xl pointer-events-none"></div>

//       <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
//         {/* Image Section - Full Width */}
//         <div className="relative rounded-2xl overflow-hidden shadow-lg">
//           <Image
//             src={CAREERS_CONSTANTS.IMAGE}
//             alt="Team collaborating in office"
//             width={2000} // Increased width
//             height={500} // Increased height
//             className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover transition-transform duration-300 hover:scale-105"
//           />

//           {/* Decorative overlay */}
//           <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 bg-white/90 backdrop-blur-sm p-2 sm:p-3 rounded-xl shadow-md">
//             <p className="text-xs sm:text-sm font-medium text-[#003C46] italic">
//               Building the future together
//             </p>
//           </div>
//         </div>

//         {/* Text Content - Below Image */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, ease: "easeOut" }}
//           viewport={{ once: true }}
//           className="mt-6 sm:mt-8"
//         >
//           <div className="space-y-3 sm:space-y-4">
//             {/* "We're Hiring" at the top */}
//             <div className="inline-flex px-2 sm:px-3 py-1 bg-[#0098af]/10 rounded-full shadow-sm">
//               <p className="text-xs sm:text-sm font-medium text-[#0098af] uppercase tracking-wide">
//                 We&apos;re Hiring
//               </p>
//             </div>

//             <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003C46] leading-tight">
//               Join Our Team
//             </h2>

//             <h3 className="text-lg sm:text-xl text-gray-600 font-medium leading-snug">
//               {CAREERS_CONSTANTS.SUBTITLE}
//             </h3>

//             <p className="text-sm sm:text-base text-gray-600 text-justify leading-relaxed">
//               {CAREERS_CONSTANTS.DESCRIPTION}
//             </p>

//             {/* Right-aligned Opportunities button */}
//             <div className="pt-2 flex justify-end">
//               <Link href="/careers">
//                 <Button className="bg-[#0098af] text-white hover:bg-white hover:text-[#003C46] text-sm sm:text-base font-medium transition-all duration-300 border-2 border-transparent hover:border-[#0098af] rounded-xl px-3 sm:px-4 py-2 h-9 sm:h-10 shadow-md hover:shadow-lg">
//                   <span>Opportunities</span>
//                   <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
//                 </Button>
//               </Link>
//             </div>
//           </div>
//         </motion.div>
//       </div>

//       {/* Divider */}
//       <div className="mt-10 sm:mt-16 h-[2px] w-full max-w-3xl mx-auto bg-gradient-to-r from-transparent via-[#0098af]/50 to-transparent"></div>
//     </section>
//   );
// };

// export default Careers;
"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CAREERS_CONSTANTS } from "@/constants/home/careers";

// Define types for props and constants
interface CareersContent {
  IMAGE: string;
  SUBTITLE: string;
  DESCRIPTION: string;
}

// Animation variants for consistent motion
const motionVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Configuration for responsive design
const responsiveConfig = {
  sectionPadding: "py-12 sm:py-24",
  containerPadding: "sm:px-12 lg:px-12",
  gap: "gap-2 sm:gap-8 lg:gap-8",
  imageSize: {
    width: 1500,
    height: 350,
    className: "w-[800px] h-[150px] sm:h-[450px]",
  },
  overlayPosition: "bottom-4 right-4 sm:bottom-6 sm:right-6", // Adjusted for precision
  badgePosition: "top-20 right-4 sm:top-16 text- sm:right-40",
};

// Reusable Badge component

// Main Careers component
const Careers: React.FC = () => {
  const { IMAGE, SUBTITLE, DESCRIPTION } =
    CAREERS_CONSTANTS as unknown as CareersContent;

  return (
    <section
      className={`w-full ${responsiveConfig.sectionPadding} bg-gradient-to-b from-white to-[#E6F0F5]/20 relative overflow-hidden`}
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-[#0098af]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-56 sm:w-72 h-56 sm:h-72 bg-[#0098af]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Content Container */}
      <div className={`max-w-7xl mx-auto ${responsiveConfig.containerPadding}`}>
        {/* "We're Hiring" Badge - Positioned Absolutely */}
        
        <div className="top-20  right-4 sm:top-16  rounded-full sm:right-40 absolute "> 
        <span className="inline-block px-3 py-1 bg-[#0098af]/10 text-[#0098af] text-xs font-medium uppercase tracking-wider rounded-full mb-4">
            We&apos;re Hiring
          </span>
        </div>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 ${responsiveConfig.gap} items-center`}
        >
          {/* Image Section */}
          <div className="relative">
            <div className="rounded-2xl w-[800px] overflow-hidden shadow-lg">
              <Image
                src={IMAGE}
                alt="Team collaborating in office"
                width={responsiveConfig.imageSize.width}
                height={responsiveConfig.imageSize.height}
                className={`${responsiveConfig.imageSize.className} object-cover transition-transform duration-300 hover:scale-105`}
                priority
              />
              {/* Decorative Overlay - Bottom Right Corner */}
              <div
                className={`absolute ${responsiveConfig.overlayPosition} bg-white/90 backdrop-blur-sm p-2 sm:p-3 rounded-xl shadow-md`}
              >
                <p className="text-xs sm:text-sm font-medium text-[#003C46] italic">
                  Building the future together
                </p>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={motionVariants}
            viewport={{ once: true }}
            className="order-2 md:order-1 ml-0 md:ml-52"
          >
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003C46] leading-tight">
                Join Our Team
              </h2>
              <h3 className="text-lg sm:text-xl text-gray-600 font-medium leading-snug">
                {SUBTITLE}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 text-justify leading-relaxed">
                {DESCRIPTION}
              </p>
              <div className="pt-2 text-right">
                <Link href="/careers">
                  <Button className="group bg-[#0098af] text-white hover:bg-white hover:text-[#003C46] text-sm sm:text-base font-medium transition-all duration-300 border-2 border-transparent hover:border-[#0098af] rounded-xl px-3 sm:px-4 py-2 h-9 sm:h-10 shadow-md hover:shadow-lg">
                    <span>Opportunities</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-10 sm:mt-16 h-[2px] w-full max-w-3xl mx-auto bg-gradient-to-r from-transparent via-[#0098af]/50 to-transparent" />
    </section>
  );
};

export default Careers;
