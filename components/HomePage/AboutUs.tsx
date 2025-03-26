// "use client";

// // About Us section with text and image
// import { Button } from "@/components/ui/button";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";
// import { ABOUT_CONSTANTS } from "@/constants/home/about";

// export default function AboutUs() {
//   return (
//     <section className="w-full py-12 sm:py-14 lg:py-22 relative overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//           <div className="space-y-5">
//             <h2 className="text-3xl text-justify sm:text-4xl lg:text-5xl font-bold text-[#003C46] relative drop-shadow-md">
//               {ABOUT_CONSTANTS.TITLE}
//               <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-[#0098AF] to-transparent" />
//             </h2>
//             <p className="text-base sm:text-lg leading-relaxed text-justify text-gray-600 text-justify">
//               {ABOUT_CONSTANTS.DESCRIPTION_1}
//             </p>
//             <p className="font-bold text-xl text-[#003C46] text-justify relative drop-shadow-sm">
//               {ABOUT_CONSTANTS.SUBTITLE}
//             </p>
//             <p className="text-base sm:text-lg text-justify leading-relaxed text-gray-600 text-justify">
//               {ABOUT_CONSTANTS.DESCRIPTION_2}
//             </p>
//             <p className="font-bold text-xl text-justify text-[#003C46] relative drop-shadow-sm">
//               {ABOUT_CONSTANTS.DESCRIPTION_3}
//             </p>
//             <div className="mt-2">
//               <Link href={ABOUT_CONSTANTS.BUTTON_HREF}>
//               <Button className="bg-[#0098af] text-white hover:bg-white hover:text-black text-base transition-colors duration-200 border-2 border-transparent hover:border-[#0098af] hover:outline hover:outline-2 hover:outline-[#0098af]">
//               {ABOUT_CONSTANTS.BUTTON_TEXT}
//                 </Button>
//               </Link>
//             </div>
//           </div>
//           <div className="relative h-[300px] md:h-[400px] ml-2 rounded-xl shadow-lg overflow-hidden">
//             <Image
//               src={ABOUT_CONSTANTS.IMAGE}
//               alt="Team working together"
//               width={600}
//               height={300}
//               className="object-cover w-full h-full"
//             />
//           </div>
//         </div>
//       </div>
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 0.15 }}
//         transition={{
//           delay: 1,
//           duration: 1,
//           repeat: Infinity,
//           repeatType: "reverse",
//         }}
//         className="absolute top-1/4 right-1/4 w-5 h-5 bg-[#0098AF] opacity-30 rounded-full -z-10"
//       />
//       <motion.div
//         initial={{ opacity: 0, scale: 0 }}
//         animate={{ opacity: 0.1, scale: 1 }}
//         transition={{ delay: 0.7, duration: 1 }}
//         className="absolute bottom-1/3 left-1/3 w-32 h-32 bg-[#000000] opacity-20 rounded-full blur-3xl -z-10"
//       />
//     </section>
//   );
// }
"use client";
import { Button } from "@/components/ui/button";
import { ABOUT_CONSTANTS } from "@/constants/home/about";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const AboutUs = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
    <section
      ref={sectionRef}
      className="w-full py-12 sm:py-16 lg:py-24 relative"
      style={{
        backgroundImage:
          "radial-gradient(circle at 10% 90%, rgba(0, 152, 175, 0.05) 0%, transparent 30%), radial-gradient(circle at 90% 10%, rgba(91, 91, 91, 0.05) 0%, transparent 30%)",
      }}
    >
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#0098af] opacity-[0.03] blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-[#0098af] opacity-[0.04] blur-3xl"></div>
        <div className="absolute w-full h-full bg-dot-pattern bg-[length:20px_20px] opacity-[0.02]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-8">
          {/* Text content */}
          <div className="">
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-justify font-semibold tracking-tight text-[#003C46]">
              {ABOUT_CONSTANTS.TITLE}
            </h2>
            <div className="w-[80px] sm:w-[100px] h-[3px] bg-gradient-to-r from-[#0098af] to-transparent rounded-full mt-2"></div>
            <p className="text-sm sm:text-base md:text-lg py-3 mt-3 text-justify text-gray-600 leading-relaxed">
              {ABOUT_CONSTANTS.DESCRIPTION_1}
            </p>
            <h3 className="text-lg sm:text-xl font-semibold py-2 text-justify text-[#003c46]">
              {ABOUT_CONSTANTS.SUBTITLE}
            </h3>
            <p className="text-xs sm:text-sm md:text-[16px] py-2 text-justify text-gray-600 leading-relaxed">
              {ABOUT_CONSTANTS.DESCRIPTION_2}
            </p>
            <p className="text-lg sm:text-xl font-semibold py-2 text-justify text-[#003c46]">
              {ABOUT_CONSTANTS.DESCRIPTION_3}
            </p>

            <div className="mt-4">
              <Link href={ABOUT_CONSTANTS.BUTTON_HREF}>
                <Button className="bg-[#0098af] text-white hover:bg-white hover:text-black text-sm sm:text-base px-4 py-2 sm:px-6 sm:py-3 transition-colors duration-200 border-2 border-transparent hover:border-[#0098af] hover:outline hover:outline-2 hover:outline-[#0098af]">
                  {ABOUT_CONSTANTS.BUTTON_TEXT}
                </Button>
              </Link>
            </div>
          </div>

          {/* Image (hidden on mobile) */}
          <div className="relative hidden md:block aspect-[4/3] md:aspect-auto md:h-[500px] md:w-[555px] rounded-xl shadow-md overflow-hidden">
            <Image
              src={ABOUT_CONSTANTS.IMAGE}
              alt="Team collaboration"
              width={500}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
/* <p className="text-xs bg-[#0098af] sm:text-[16px] text-justify text-white rounded-xl p-3 leading-relaxed">
  We drive{" "}
  <span className="font-bold text-[#E6F0F5] bg-[#003C46]/50 px-1 rounded">
    innovation
  </span>{" "}
  by seamlessly integrating product and process development, enhancing{" "}
  <span className="font-bold text-[#E6F0F5] bg-[#003C46]/50 px-1 rounded">
    efficiency
  </span>
  , reliability, and cost optimization. Through advanced simulations, 3D
  modeling, and data-driven insights, we streamline operations and accelerate
  time-to-market. With a focus on precision,{" "}
  <span className="font-bold text-[#E6F0F5] bg-[#003C46]/50 px-1 rounded">
    sustainability
  </span>
  , and continuous improvement, we empower industries to achieve scalable and
  future-ready growth while upholding the highest standards of{" "}
  <span className="font-bold text-[#E6F0F5] bg-[#003C46]/50 px-1 rounded">
    quality
  </span>{" "}
  and safety.
</p>*/