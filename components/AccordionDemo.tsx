// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";

// function AccordionDemo() {
//   return (
//     <section className="w-full py-24 px-6 md:px-8 lg:px-12">
//       <div className="max-w-[900px] mx-auto">
//         <p className="text-3xl font-bold text-gray-900 mb-12 text-center">
//           Why Choose Us?
//         </p>
//         <Accordion type="single" collapsible className="w-full space-y-6">
//           <AccordionItem value="item-1">
//             <AccordionTrigger className="text-xl font-medium">
//               Expertise Across Industries
//             </AccordionTrigger>
//             <AccordionContent className="text-lg text-gray-700 pt-4 ">
//               We specialize in advanced engineering solutions across diverse sectors such as automotive, aerospace, healthcare, robotics, and energy. Our multidisciplinary approach ensures precise and innovative solutions tailored to your unique challenges.
//             </AccordionContent>
//           </AccordionItem>

//           <AccordionItem value="item-2">
//             <AccordionTrigger className="text-xl font-medium">
//               Flexible Engagement Models
//             </AccordionTrigger>
//             <AccordionContent className="text-lg text-gray-700 pt-4 ">
//               Our engagement models include Fixed Price, Time and Material, Dedicated Team, and Offshore Development Center options, allowing clients to choose the structure that best meets their project requirements and budget.
//             </AccordionContent>
//           </AccordionItem>

//           <AccordionItem value="item-3">
//             <AccordionTrigger className="text-xl font-medium">
//               Global Presence and Client Focus
//             </AccordionTrigger>
//             <AccordionContent className="text-lg text-gray-700 pt-4 ">
//               With offices in both India and the USA, we combine global expertise with a deep understanding of local markets. Our client-centric approach ensures seamless collaboration and long-term partnerships.
//             </AccordionContent>
//           </AccordionItem>

//           <AccordionItem value="item-4">
//             <AccordionTrigger className="text-xl font-medium">
//               Comprehensive Engineering Services
//             </AccordionTrigger>
//             <AccordionContent className="text-lg text-gray-700 pt-4 ">
//               From mechanical design and prototyping to embedded systems, electrical engineering, hydraulic systems, and supply chain management, we cover the full spectrum of engineering services to meet your needs.
//             </AccordionContent>
//           </AccordionItem>
//         </Accordion>
//       </div>
//     </section>
//   );
// }

// export default AccordionDemo;

// export { AccordionDemo }



import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function AccordionDemo() {
  return (
    <section className="w-full py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center">
          Why Choose Us?
        </h2>
        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-base sm:text-lg lg:text-xl font-semibold">
              Expertise Across Industries
            </AccordionTrigger>
            <AccordionContent className="text-base leading-relaxed text-gray-700 pt-4">
              We specialize in advanced engineering solutions across diverse sectors such as automotive, aerospace, healthcare, robotics, and energy. Our multidisciplinary approach ensures precise and innovative solutions tailored to your unique challenges.
            </AccordionContent>
          </AccordionItem>

          
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-base sm:text-lg lg:text-xl font-semibold">
              Flexible Engagement Models
            </AccordionTrigger>
            <AccordionContent className="text-base leading-relaxed text-gray-700 pt-4">
              Our engagement models include Fixed Price, Time and Material, Dedicated Team, and Offshore Development Center options, allowing clients to choose the structure that best meets their project requirements and budget.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-base sm:text-lg lg:text-xl font-semibold">
              Global Presence and Client Focus
            </AccordionTrigger>
            <AccordionContent className="text-base leading-relaxed text-gray-700 pt-4">
              With offices in both India and the USA, we combine global expertise with a deep understanding of local markets. Our client-centric approach ensures seamless collaboration and long-term partnerships.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-base sm:text-lg lg:text-xl font-semibold">
              Comprehensive Engineering Services
            </AccordionTrigger>
            <AccordionContent className="text-base leading-relaxed text-gray-700 pt-4">
              From mechanical design and prototyping to embedded systems, electrical engineering, hydraulic systems, and supply chain management, we cover the full spectrum of engineering services to meet your needs.
            </AccordionContent>
          </AccordionItem>

          {/* ... other accordion items remain the same */}
        </Accordion>
      </div>
    </section>
  );
}

export default AccordionDemo;