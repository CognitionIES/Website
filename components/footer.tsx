// // "use client";

// // import * as React from "react";
// // import { Mail, Phone } from "lucide-react";

// // function Footer() {
// //   return (
// //     <footer className="bg-[#0F0F17] text-white py-24 px-6 md:px-8 lg:px-12">
// //       <div className="max-w-[1200px] mx-auto">
// //         <div className="grid grid-cols-12 gap-12">
// //           {/* Company Info - Takes 5 columns on desktop */}
// //           <div className="col-span-12 md:col-span-5">
// //             <div className="flex items-center mb-8">
// //               <span className="text-h3 font-bold">
// //                 <span className="text-blue-500">COGNITIONIES</span>
// //                 <span className="text-white"></span>
// //                 <span className="text-gray-400 text-sm align-top ml-1"></span>
// //               </span>
// //             </div>
// //             <p className="text-body text-gray-400 leading-relaxed pr-8">
// //               At Cognition IES Pvt. Ltd., we are shaping the future of engineering
// //               with a commitment to precision, innovation, and client-focused
// //               solutions. Established in 2023, our company is dedicated to
// //               providing advanced engineering services tailored to the unique
// //               demands of discrete manufacturing industries.
// //             </p>
// //           </div>

// //           {/* Useful Links - Takes 2 columns on desktop */}
// //           <div className="col-span-12 md:col-span-2">
// //             <h3 className="text-h4 font-semibold mb-8">Useful Links</h3>
// //             <ul className="space-y-4">
// //               {[
// //                 ["Home", "/"],
// //                 ["About", "/about"],
// //                 ["services", "/services"],
// //                 ["Careers", "/careers"],
// //                 ["Industries", "/industries"],
// //                 ["Contact Us", "/contact"],
// //               ].map(([title, url]) => (
// //                 <li key={title}>
// //                   <a
// //                     href={url}
// //                     className="text-body text-gray-400 hover:text-blue-500 transition-colors duration-200"
// //                   >
// //                     {title}
// //                   </a>
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>

// //           {/* Socials - Takes 2 columns on desktop */}
// //           <div className="col-span-12 md:col-span-2">
// //             <h3 className="text-h4 font-semibold mb-8">Socials</h3>
// //             <ul className="space-y-4">
// //               {[
// //                 ["LinkedIn", "https://linkedin.com"],
// //                 ["Facebook", "https://facebook.com"],
// //                 ["Instagram", "https://instagram.com"],
// //                 ["Twitter", "https://twitter.com"],
// //               ].map(([title, url]) => (
// //                 <li key={title}>
// //                   <a
// //                     href={url}
// //                     target="_blank"
// //                     rel="noopener noreferrer"
// //                     className="text-body text-gray-400 hover:text-blue-500 transition-colors duration-200"
// //                   >
// //                     {title}
// //                   </a>
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>

// //           {/* Contact Us - Takes 3 columns on desktop */}
// //           <div className="col-span-12 md:col-span-3">
// //             <h3 className="text-h4 font-semibold mb-8">Contact Us</h3>
// //             <ul className="space-y-4">
// //               <li>
// //                 <a
// //                   href="mailto:info@cognitionies.com"
// //                   className="text-body text-blue-500 hover:text-blue-400 transition-colors duration-200"
// //                 >
// //                   info@cognitionies.com
// //                 </a>
// //               </li>
// //               <li>
// //                 <a
// //                   href="tel:+1(847)254-5337"
// //                   className="text-body text-blue-500 hover:text-blue-400 transition-colors duration-200"
// //                 >
// //                   +1 (847) 254-5337
// //                 </a>
// //               </li>
// //               <li>
// //                 <a
// //                   href="tel:+919825815795"
// //                   className="text-body text-blue-500 hover:text-blue-400 transition-colors duration-200"
// //                 >
// //                   +91 98258-15795
// //                 </a>
// //               </li>
// //             </ul>
// //           </div>
// //         </div>
// //       </div>
// //     </footer>
// //   );
// // }

// // export default Footer;

// // export { Footer }
// "use client";

// import * as React from "react";

// function Footer() {
//   return (
//     <footer className="bg-[#0F0F17] text-white py-12 sm:py-16 lg:py-24">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 lg:gap-8">
//           <div className="col-span-12 md:col-span-5">
//             <div className="flex items-center mb-4">
//               <span className="text-2xl sm:text-3xl lg:text-4xl font-bold">
//                 <span className="text-blue-500">COGNITIONIES</span>
//               </span>
//             </div>
//             <p className="text-base leading-relaxed text-gray-400">
//               At Cognition IES Pvt. Ltd., we are shaping the future of engineering
//               with a commitment to precision, innovation, and client-focused
//               solutions. Established in 2023, our company is dedicated to
//               providing advanced engineering services tailored to the unique
//               demands of discrete manufacturing industries.
//             </p>
//           </div>

//           <div className="col-span-12 md:col-span-2">
//             <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4">Useful Links</h3>
//             <ul className="space-y-2">
//               {/* ... links remain the same */}
//               {[
//                 ["LinkedIn", "https://linkedin.com"],
//                 ["Facebook", "https://facebook.com"],
//                 ["Instagram", "https://instagram.com"],
//                 ["Twitter", "https://twitter.com"],
//               ].map(([title, url]) => (
//                 <li key={title}>
//                   <a
//                     href={url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-body text-gray-400 hover:text-blue-500 transition-colors duration-200"
//                   >
//                     {title}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//               {/* Socials - Takes 2 columns on desktop */}
//           <div className="col-span-12 md:col-span-2">
//             <h3 className="text-h4 font-semibold mb-8">Socials</h3>
//             <ul className="space-y-4">
//               {[
//                 ["LinkedIn", "https://linkedin.com"],
//                 ["Facebook", "https://facebook.com"],
//                 ["Instagram", "https://instagram.com"],
//                 ["Twitter", "https://twitter.com"],
//               ].map(([title, url]) => (
//                 <li key={title}>
//                   <a
//                     href={url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-body text-gray-400 hover:text-blue-500 transition-colors duration-200"
//                   >
//                     {title}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           {/* ... rest of the footer sections remain the same */}
//           {/* Contact Us - Takes 3 columns on desktop */}
//           <div className="col-span-12 md:col-span-3">
//             <h3 className="text-h4 font-semibold mb-8">Contact Us</h3>
//             <ul className="space-y-4">
//               <li>
//                 <a
//                   href="mailto:info@cognitionies.com"
//                   className="text-body text-blue-500 hover:text-blue-400 transition-colors duration-200"
//                 >
//                   info@cognitionies.com
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="tel:+1(847)254-5337"
//                   className="text-body text-blue-500 hover:text-blue-400 transition-colors duration-200"
//                 >
//                   +1 (847) 254-5337
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="tel:+919825815795"
//                   className="text-body text-blue-500 hover:text-blue-400 transition-colors duration-200"
//                 >
//                   +91 98258-15795
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

"use client";
import * as React from "react";
import { motion } from "framer-motion";
import CompanyInfo from "./Footer/CompanyInfo";
import UsefulLinks from "./Footer/UsefulLinks";
import Link from "next/link";
import LinkedinLogo from "@/constants/images/linkedinLogo.png";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#003C46] text-white relative overflow-hidden">
      <div className="relative">
        <div className="max-w-7xl mx-auto py-6 sm:py-12 lg:py-10 ">
          {/* Grid layout for footer sections */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-10 mt-4 gap-6 sm:gap-8 lg:gap-12">
            <CompanyInfo />
            <div className="md:col-span-4 mt-5 ml-16 ">
              <UsefulLinks />
            </div>
          </div>
        </div>
        <div className="absolute bottom-2 right-8 sm:bottom-1 sm:right-40 text-lg text-[#E6F0F5]/70">
          <div className="flex space-x-3 mt-10">
            <Link
              href="https://www.linkedin.com/company/cognitionies"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0098AF] ml-1 px-2 mt-[1px]"
            >
              <Image
                src={LinkedinLogo}
                alt="Linkedin Logo"
                width={40}
                height={40}
              />
            </Link>{" "}
            |{" "}
            <Link
              href="mailto:info@cognitionies.com"
              className="hover:text-[#0098AF]"
            >
              info@cognitionies.com
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 text-xs text-[#E6F0F5]/70">
        <p>Copyright © 2025 Cognition IES | All Rights Reserved</p>
      </div>
      {/* Decorative elements remain unchanged */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 0.2, scale: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        viewport={{ once: true }}
        className="absolute bottom-0 left-0 w-64 sm:w-80 h-64 sm:h-80 bg-[#0098AF]/20 rounded-full blur-3xl -z-10 pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 0.15, scale: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
        viewport={{ once: true }}
        className="absolute top-0 right-0 w-56 sm:w-72 h-56 sm:h-72 bg-[#5B5B5B]/20 rounded-full blur-3xl -z-10 pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{
          delay: 1.5,
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute top-8 sm:top-12 left-8 sm:left-12 w-5 sm:w-6 h-5 sm:h-6 bg-[#0098AF]/50 rounded-full -z-10"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{
          delay: 2,
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-8 sm:bottom-12 right-8 sm:right-12 w-5 sm:w-6 h-5 sm:h-6 bg-[#0098AF]/50 rounded-full -z-10"
      />
    </footer>
  );
}

// import React from "react";
// import { Separator } from "@/components/ui/seprator";
// import {
//   Facebook,
//   Linkedin,
//   Mail,
//   Github,
//   Instagram,
//   ExternalLink,
// } from "lucide-react";
// import Image from "next/image";
// //import { motion } from "framer-motion";
// import Logo from "@/constants/images/WEB-LOGO.png";
// import Link from "next/link";

// const Footer = () => {
//   return (
//     <footer className="bg-[#003C46] text-white py-14 relative overflow-hidden">
//       <div className="max-w-7xl mx-auto  sm:px-8 lg:px-12">
//         {/* Main footer content */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
//           {/* Column 1: Company Info and Social Media */}
//           <div className="space-y-6 ">
//             <div className="flex items-center gap-1">
//               <Image
//                 src={Logo}
//                 alt="Cognition IES Logo"
//                 width={64}
//                 height={64}
//                 className="h-16 "
//               />
//               <h3 className="text-3xl mt-1 font-bold hidden md:block">
//                 <span className="text-[#0098af]">COGNITION</span> IES
//               </h3>
//             </div>

//             <p className="text-[#E6F0F5]/90 text-justify text-sm">
//               Engineering innovative solutions for a sustainable future through
//               cutting-edge technology and creative problem-solving approaches.
//             </p>

//             {/* Social Media Links */}
//             <div className="space-y-4">
//               <p className="text-sm font-medium text-[#00b4d8]">
//                 Connect With Us
//               </p>
//               <div className="flex flex-wrap gap-4">
//                 <Link
//                   href="https://linkedin.com"
//                   className="bg-[#0098af]/30 p-2 rounded-xl hover:bg-[#0098af]/50 transition-colors"
//                   aria-label="LinkedIn"
//                 >
//                   <Linkedin size={18} />
//                 </Link>
//                 <Link
//                   href="https://facebook.com"
//                   className="bg-[#0098af]/30 p-2 rounded-full hover:bg-[#0098af]/50 transition-colors"
//                   aria-label="Facebook"
//                 >
//                   <Facebook size={18} />
//                 </Link>

//                 <Link
//                   href="https://github.com/cognitionies"
//                   className="bg-[#0098af]/30 p-2 rounded-full hover:bg-[#0098af]/50 transition-colors"
//                   aria-label="GitHub"
//                 >
//                   <Github size={18} />
//                 </Link>
//                 <Link
//                   href="https://instagram.com"
//                   className="bg-[#0098af]/30 p-2 rounded-full hover:bg-[#0098af]/50 transition-colors"
//                   aria-label="Instagram"
//                 >
//                   <Instagram size={18} />
//                 </Link>
//               </div>
//             </div>
//           </div>

//           {/* Column 2: Quick Links */}
//           <div className="space-y-6">
//             <h4 className="text-lg font-medium text-white relative inline-block">
//               Quick Links
//               <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-[#0098af]"></span>
//             </h4>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//               <div className="space-y-3">
//                 <Link
//                   href="/services/product-engineering"
//                   className="flex items-center gap-2 text-[#E6F0F5]/90 hover:text-[#00b4d8] transition-colors text-sm group"
//                 >
//                   <ExternalLink
//                     size={14}
//                     className="group-hover:translate-x-1 transition-transform"
//                   />
//                   <span>Product Engineering</span>
//                 </Link>
//                 <Link
//                   href="/services/plant-engineering"
//                   className="flex items-center gap-2 text-[#E6F0F5]/90 hover:text-[#00b4d8] transition-colors text-sm group"
//                 >
//                   <ExternalLink
//                     size={14}
//                     className="group-hover:translate-x-1 transition-transform"
//                   />
//                   <span>Plant Engineering</span>
//                 </Link>
//                 <Link
//                   href="/log-splitter-cost-optimization"
//                   className="flex items-center gap-2 text-[#E6F0F5]/90 hover:text-[#00b4d8] transition-colors text-sm group"
//                 >
//                   <ExternalLink
//                     size={14}
//                     className="group-hover:translate-x-1 transition-transform"
//                   />
//                   <span>Cost Optimization</span>
//                 </Link>
//               </div>
//               <div className="space-y-3">
//                 <Link
//                   href="/about"
//                   className="flex items-center gap-2 text-[#E6F0F5]/90 hover:text-[#00b4d8] transition-colors text-sm group"
//                 >
//                   <ExternalLink
//                     size={14}
//                     className="group-hover:translate-x-1 transition-transform"
//                   />
//                   <span>About Us</span>
//                 </Link>
//                 <Link
//                   href="/careers"
//                   className="flex items-center gap-2 text-[#E6F0F5]/90 hover:text-[#00b4d8] transition-colors text-sm group"
//                 >
//                   <ExternalLink
//                     size={14}
//                     className="group-hover:translate-x-1 transition-transform"
//                   />
//                   <span>Careers</span>
//                 </Link>
//                 <Link
//                   href="/contact"
//                   className="flex items-center gap-2 text-[#E6F0F5]/90 hover:text-[#00b4d8] transition-colors text-sm group"
//                 >
//                   <ExternalLink
//                     size={14}
//                     className="group-hover:translate-x-1 transition-transform"
//                   />
//                   <span>Contact Us</span>
//                 </Link>
//               </div>
//             </div>
//           </div>

//           {/* Column 3: Contact Information */}
//           <div className="space-y-6">
//             <h4 className="text-lg font-medium text-white  relative inline-block">
//               Get In Touch
//               <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-[#0098af]"></span>
//             </h4>
//             <ul className="space-y-4">
//               <li className="flex items-center gap-3">
//                 <Mail
//                   size={18}
//                   className="flex-shrink-0 text-[#00b4d8] mt-0.5"
//                 />
//                 <div>
//                   <p className="text-sm text-white">Email Us</p>
//                   <a
//                     href="mailto:info@cognitionies.com"
//                     className="text-sm text-[#E6F0F5]/90 hover:text-[#00b4d8]"
//                   >
//                     info@cognitionies.com
//                   </a>
//                 </div>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Thin separator line */}
//         <Separator className="my-8 bg-[#000000]/90" />

//         <div className="mt-16 h-[2px] w-full max-w-7xl mx-auto bg-gradient-to-r from-transparent via-[#0098af]/40 to-transparent"></div>
//         {/* Copyright text */}
//         <div className="text-center mt-8 text-sm text-[#E6F0F5]/70">
//           <p>Copyright &copy; 2025 Cognition IES | All Rights Reserved</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
