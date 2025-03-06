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
// //                 ["Expertise", "/expertise"],
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



// This file puts together all parts of the footer
import * as React from "react";
import { motion } from "framer-motion";
import CompanyInfo from "./Footer/CompanyInfo";
import UsefulLinks from "./Footer/UsefulLinks";
import Socials from "./Footer/Socials";
import ContactUs from "./Footer/ContactUs";

export default function Footer() {
  return (
    <footer className="bg-[#5B5B5B] text-white py-8 sm:py-15 lg:py-20 relative overflow-hidden opacity-90">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Grid layout for footer sections */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 lg:gap-12">
          <CompanyInfo />
          <UsefulLinks />
          <Socials />
          <ContactUs />
        </div>
      </div>
      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 0.3, scale: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute bottom-0 left-0 w-80 h-80 bg-[#0098AF] opacity-20 rounded-full blur-3xl -z-10"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 0.25, scale: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
        className="absolute top-0 right-0 w-72 h-72 bg-[#5B5B5B] opacity-20 rounded-full blur-3xl -z-10"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-12 left-12 w-6 h-6 bg-[#0098AF] opacity-50 rounded-full"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ delay: 2, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-12 right-12 w-6 h-6 bg-[#0098AF] opacity-50 rounded-full"
      />
    </footer>
  );
}