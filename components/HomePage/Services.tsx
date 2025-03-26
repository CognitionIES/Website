// "use client";

// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";
// import { motion } from "framer-motion";
// import Link from "next/link";

// const services = [
//   {
//     id: 1,
//     title: "Mobility",
//     shortDescription:
//       "We engineer the future of transportation, from next-gen vehicles to smart infrastructure.",
//     fullDescription:
//       "Mobility is evolving, and we’re at the forefront of this transformation. Our services bridges digital and physical engineering, enabling everything from autonomous systems and electric mobility to advanced aerospace and rail solutions. The result? Seamless, efficient, and future-ready transportation.",
//     bgColor: "bg-[#003C46]",
//     textColor: "text-white",
//     image:
//       "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//     href: "/industries/mobility",
//   },
//   {
//     id: 2,
//     title: "Sustainable",
//     shortDescription:
//       "Engineering smarter, cleaner, and more efficient solutions for a sustainable tomorrow.",
//     fullDescription:
//       "Sustainability isn’t just a buzzword—it’s the foundation of future industries. We optimize manufacturing, enhance renewable energy integration, and develop eco-friendly infrastructure, helping businesses cut waste, reduce emissions, and operate more responsibly.",
//     bgColor: "bg-[#E5EEF6]",
//     textColor: "text-gray-800",
//     image:
//       "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//     href: "/industries/sustainability",
//   },
//   {
//     id: 3,
//     title: "Technology",
//     shortDescription:
//       "From AI-driven systems to embedded solutions, we power the next era of innovation.",
//     fullDescription:
//       "Technology is reshaping industries, and we make sure businesses stay ahead. Our services spans MedTech, semiconductor advancements, and connected systems, ensuring our clients leverage cutting-edge solutions to enhance efficiency, scalability, and performance.",
//     bgColor: "bg-[#5B5B5B]",
//     textColor: "text-white",
//     image:
//       "https://images.unsplash.com/photo-1535378917042-10a22c95931a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//     href: "/industries/tech",
//   },
// ];

// export default function ServicesSection() {
//   // Set Mobility (id: 1) as the default active card on initial load
//   const [activeCard, setActiveCard] = useState<number>(1);

//   return (
//     <section className="w-full py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-[#F5FDFF] relative">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#003C46] mb-4 drop-shadow-md">
//           We Go Deeper
//         </h1>
//         <p className="text-base leading-relaxed text-gray-600 mb-8">
//           Engineering isn’t just about solving problems—it’s about pushing
//           boundaries. Our services spans three core domains, where precision
//           meets innovation. Whether it’s revolutionizing mobility, engineering
//           sustainable solutions, or harnessing the power of technology, we help
//           industries move faster, work smarter, and build for the future.
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 lg:gap-8">
//           {services.map((service) => (
//             <div
//               key={service.id}
//               className={cn(
//                 "rounded-xl overflow-hidden relative cursor-pointer transition-all duration-500 ease-in-out",
//                 service.bgColor,
//                 service.textColor,
//                 activeCard === service.id ? "md:col-span-6" : "md:col-span-3"
//               )}
//               onMouseEnter={() => setActiveCard(service.id)}
//               // Removed onMouseLeave to keep the last hovered card active
//             >
//               <div
//                 className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
//                 style={{
//                   backgroundImage: `url(${service.image})`,
//                   opacity: activeCard === service.id ? 0 : 1,
//                 }}
//               />
//               <div
//                 className={cn(
//                   "absolute inset-0 transition-opacity duration-500",
//                   service.id === 2
//                     ? "bg-gradient-to-b from-transparent to-[#000000] opacity-90"
//                     : "bg-gradient-to-b from-transparent to-[#000000]/70 opacity-70"
//                 )}
//               />
//               <div className="relative h-full p-8 flex flex-col justify-between min-h-[400px]">
//                 <div>
//                   <h2 className="text-3xl font-bold mb-4 text-white drop-shadow-md">
//                     {service.title}
//                   </h2>
//                   <p
//                     className={cn(
//                       "text-lg transition-all duration-500 ease-in-out",
//                       activeCard === service.id ? "opacity-90" : "opacity-0 h-0"
//                     )}
//                   >
//                     {activeCard === service.id
//                       ? service.fullDescription
//                       : service.shortDescription}
//                   </p>
//                 </div>
//                 <div className="flex justify-end mt-4">
//                   <Link href={service.href}>
//                     <Button
//                       variant="secondary"
//                       className="bg-[#0098AF] hover:bg-[#007B8F] text-white rounded-sm px-6 transition-transform duration-300"
//                     >
//                       Read More
//                     </Button>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         {/* Subtle Decorative Elements */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 0.15 }}
//           transition={{
//             delay: 1,
//             duration: 1,
//             repeat: Infinity,
//             repeatType: "reverse",
//           }}
//           className="absolute top-1/3 left-16 w-5 h-5 bg-[#0098AF] opacity-30 rounded-full -z-10"
//         />
//       </div>
//     </section>
//   );
// }
// /*

// "use client";

// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";
// import { motion } from "framer-motion"; // Added for animations

// const services = [
//   {
//     id: 1,
//     title: "Mobility",
//     shortDescription:
//       "We engineer the future of transportation, from next-gen vehicles to smart infrastructure.",
//     fullDescription:
//       "Mobility is evolving, and we’re at the forefront of this transformation. Our services bridges digital and physical engineering, enabling everything from autonomous systems and electric mobility to advanced aerospace and rail solutions. The result? Seamless, efficient, and future-ready transportation.",
//     bgColor: "bg-[#0A1E5C]", // Keeping original for now, but we'll adjust theme
//     textColor: "text-white",
//     image:
//       "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     id: 2,
//     title: "Sustainable",
//     shortDescription:
//       "Engineering smarter, cleaner, and more efficient solutions for a sustainable tomorrow.",
//     fullDescription:
//       "Sustainability isn’t just a buzzword—it’s the foundation of future industries. We optimize manufacturing, enhance renewable energy integration, and develop eco-friendly infrastructure, helping businesses cut waste, reduce emissions, and operate more responsibly.",
//     bgColor: "bg-[#E5EEF6]", // Updating to match theme
//     textColor: "text-gray-800",
//     image:
//       "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     id: 3,
//     title: "Technology",
//     shortDescription:
//       "From AI-driven systems to embedded solutions, we power the next era of innovation.",
//     fullDescription:
//       "Technology is reshaping industries, and we make sure businesses stay ahead. Our services spans MedTech, semiconductor advancements, and connected systems, ensuring our clients leverage cutting-edge solutions to enhance efficiency, scalability, and performance.",
//     bgColor: "bg-black", // Updating to match theme
//     textColor: "text-white",
//     image:
//       "https://images.unsplash.com/photo-1535378917042-10a22c95931a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//   },
// ];

// export default function ServicesSection() {
//   const [activeCard, setActiveCard] = useState<number>(1);

//   // Animation Variants for decorative elements
//   const fadeIn = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 0.6, // Slightly lower opacity for subtlety
//       y: 0,
//       transition: { duration: 0.8, ease: "easeOut" },
//     },
//   };

//   return (
//     <section className="w-full py-12 sm:py-16 lg:py-24 bg-[#5B5B5B] text-white relative overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0098AF] mb-4 drop-shadow-md">
//           We Go Deeper
//         </h1>
//         <p className="text-base leading-relaxed text-gray-200 mb-8 font-light">
//           Engineering isn’t just about solving problems—it’s about pushing
//           boundaries. Our services spans three core domains, where precision
//           meets innovation. Whether it’s revolutionizing mobility, engineering
//           sustainable solutions, or harnessing the power of technology, we help
//           industries move faster, work smarter, and build for the future.
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 lg:gap-8">
//           {services.map((service) => (
//             <div
//               key={service.id}
//               className={cn(
//                 "rounded-xl overflow-hidden relative cursor-pointer transition-all duration-500 ease-in-out",
//                 service.bgColor === "bg-[#E5EEF6]"
//                   ? "bg-[#5B5B5B]" // Update to match theme
//                   : service.bgColor === "bg-black"
//                   ? "bg-[#0A1E5C]" // Adjust to darker theme, close to #5B5B5B
//                   : "bg-[#0A1E5C]", // Default to match theme
//                 service.textColor === "text-gray-800"
//                   ? "text-white" // Update text color for consistency
//                   : "text-white",
//                 activeCard === service.id ? "md:col-span-6" : "md:col-span-3"
//               )}
//               onClick={() => setActiveCard(service.id)}
//             >
//               <div
//                 className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
//                 style={{
//                   backgroundImage: `url(${service.image})`,
//                   opacity: activeCard === service.id ? 0 : 1,
//                 }}
//               />
//               <div
//                 className={cn(
//                   "absolute inset-0 transition-opacity duration-500",
//                   "bg-gradient-to-b from-transparent to-[#5B5B5B] opacity-70"
//                 )}
//               />
//               <div className="relative h-full p-8 flex flex-col justify-between min-h-[400px]">
//                 <div>
//                   <h2 className="text-3xl font-bold mb-4 text-[#0098AF] drop-shadow-sm">
//                     {service.title}
//                   </h2>
//                   <p
//                     className={cn(
//                       "text-lg transition-all duration-500 ease-in-out",
//                       activeCard === service.id ? "opacity-90" : "opacity-0 h-0"
//                     )}
//                   >
//                     {activeCard === service.id
//                       ? service.fullDescription
//                       : service.shortDescription}
//                   </p>
//                 </div>
//                 <div className="flex justify-end mt-4">
//                   <Button
//                     variant="secondary"
//                     className="bg-[#0098AF] hover:bg-white text-white hover:text-black rounded-sm px-6 transition-transform duration-300"
//                   >
//                     Read More
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Randomly Positioned Decorative Elements (Minimalist Approach)
//         <motion.div
//           variants={fadeIn}
//           initial="hidden"
//           whileInView="visible"
//           className="absolute top-[15%] left-[10%] w-4 h-4 bg-[#0098AF] opacity-50 rounded-full"
//         />

//         <motion.div
//           variants={fadeIn}
//           initial="hidden"
//           whileInView="visible"
//           className="absolute top-[60%] left-[25%] w-6 h-6 bg-[#0098AF] opacity-30 rounded-full blur-sm"
//         />
//       </div>
//     </section>
//   );
// }

// */
// "use client";

// // Services section with expandable cards
// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";
// import Link from "next/link";
// import { SERVICES, SERVICES_SECTION } from "@/constants/home/services";
// import { motion } from "framer-motion";

// export default function ServicesSection() {
//   const [activeCard, setActiveCard] = useState<number>(1); // Default to Mobility

//   return (
//     <section className="w-full py-12 sm:py-16 lg:py-24 relative">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#003C46] mb-4 drop-shadow-md">
//           {SERVICES_SECTION.TITLE}
//         </h1>
//         <p className="text-base leading-relaxed text-gray-600 mb-8">
//           {SERVICES_SECTION.DESCRIPTION}
//         </p>
//         <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 lg:gap-8">
//           {SERVICES.map((service) => (
//             <div
//               key={service.id}
//               className={cn(
//                 "rounded-xl overflow-hidden relative cursor-pointer transition-all duration-500 ease-in-out",
//                 service.bgColor,
//                 service.textColor,
//                 activeCard === service.id ? "md:col-span-6" : "md:col-span-3"
//               )}
//               onMouseEnter={() => setActiveCard(service.id)}
//             >
//               <div
//                 className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
//                 style={{
//                   backgroundImage: `url(${service.image})`,
//                   opacity: activeCard === service.id ? 0 : 1,
//                 }}
//               />
//               <div
//                 className={cn(
//                   "absolute inset-0 transition-opacity duration-500",
//                   service.id === 2
//                     ? "bg-gradient-to-b from-transparent to-[#000000] opacity-90"
//                     : "bg-gradient-to-b from-transparent to-[#000000]/70 opacity-70"
//                 )}
//               />
//               <div className="relative h-full p-8 flex flex-col justify-between min-h-[400px]">
//                 <div>
//                   <h2 className="text-3xl font-bold mb-4 text-white drop-shadow-md">
//                     {service.title}
//                   </h2>
//                   <p
//                     className={cn(
//                       "text-lg transition-all duration-500 ease-in-out",
//                       activeCard === service.id ? "opacity-90" : "opacity-0 h-0"
//                     )}
//                   >
//                     {activeCard === service.id
//                       ? service.fullDescription
//                       : service.shortDescription}
//                   </p>
//                 </div>
//                 <div className="flex justify-end mt-4">
//                   <Link href={service.href}>
//                     <Button
//                       variant="secondary"
//                       className="bg-[#0098AF] hover:bg-[#007B8F] text-white rounded-sm px-6 transition-transform duration-300"
//                     >
//                       Read More
//                     </Button>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 0.15 }}
//           transition={{
//             delay: 1,
//             duration: 1,
//             repeat: Infinity,
//             repeatType: "reverse",
//           }}
//           className="absolute top-1/3 left-16 w-5 h-5 bg-[#0098AF] opacity-30 rounded-full -z-10"
//         />
//       </div>
//     </section>
//   );
// }
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { SERVICES, SERVICES_SECTION } from "@/constants/home/services";
import { motion } from "framer-motion";

export default function ServicesSection() {
  const [activeCard, setActiveCard] = useState(1); // Default to Product Engineering

  return (
    <section className="w-full py-8 sm:py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-justify max-w-7xl mx-auto mb-8 sm:mb-12">
          <h1 className="text-xl sm:text-2xl lg:text-4xl font-semibold text-[#003C46] mb-3 sm:mb-4 tracking-tight drop-shadow-sm">
            {SERVICES_SECTION.TITLE}
          </h1>
          <p className="text-xs sm:text-sm lg:text-lg leading-relaxed text-gray-600">
            {SERVICES_SECTION.DESCRIPTION}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 lg:gap-10">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className={cn(
                "rounded-lg overflow-hidden relative cursor-pointer transition-all duration-500 ease-in-out bg-white shadow-md border border-gray-200/80",
                service.textColor,
                activeCard === service.id ? "md:col-span-7" : "md:col-span-5",
                "hover:shadow-lg hover:bg-gray-50"
              )}
              onMouseEnter={() => setActiveCard(service.id)}
              onClick={() => setActiveCard(service.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActiveCard(service.id);
                }
              }}
              tabIndex={0}
              role="button"
              aria-expanded={activeCard === service.id}
              aria-label={`${service.title} card. Press to ${
                activeCard === service.id ? "collapse" : "expand"
              }`}
            >
              {/* Image */}
              <div className="absolute inset-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  height={1000}
                  width={1000}
                  className="object-cover bg-center transition-opacity duration-500"
                  style={{
                    opacity: activeCard === service.id ? 0.1 : 0.7, // Reduced opacity on mobile
                  }}
                />
              </div>

              {/* Gradient Overlay */}
              <div
                className={cn(
                  "absolute inset-0 transition-opacity duration-500",
                  activeCard === service.id
                    ? "bg-gradient-to-br from-[#003C46]/85 to-[#0098AF]/95 opacity-100"
                    : "bg-gradient-to-b from-transparent to-[#000000]/70 opacity-75"
                )}
              />

              {/* Content */}
              <div className="relative h-full p-6 sm:p-8 lg:p-8 flex flex-col justify-between min-h-[350px] sm:min-h-[400px]">
                <div>
                  <h2 className="text-lg sm:text-xl lg:text-3xl font-semibold mb-3 sm:mb-4 text-white tracking-wide drop-shadow-md">
                    {service.title}
                  </h2>
                  <p
                    className={cn(
                      "text-sm sm:text-base lg:text-lg text-justify leading-relaxed transition-all duration-500 ease-in-out",
                      activeCard === service.id
                        ? "text-gray-200 opacity-100"
                        : "text-gray-900 opacity-0 h-0"
                    )}
                  >
                    {activeCard === service.id
                      ? service.fullDescription
                      : service.shortDescription}
                  </p>
                </div>

                {/* Button */}
                <div className="flex justify-end mt-4">
                  <Link href={service.href}>
                    <Button
                      variant="secondary"
                      className={cn(
                        "bg-[#5b5b5b] text-white font-medium rounded-md px-4 py-2 sm:px-6 sm:py-3 transition-all duration-200",
                        activeCard === service.id
                          ? "hover:bg-white hover:shadow-md hover:text-[#000000]"
                          : "bg-[#0098AF] hover:bg-[#003C46]"
                      )}
                    >
                      Explore More
                    </Button>
                  </Link>
                </div>

                {/* Active Indicator Line */}
                {activeCard === service.id && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-[#99D5DF] rounded-t-sm"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
