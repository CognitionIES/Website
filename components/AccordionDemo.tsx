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
import faqs from "@/constants/home/faqs";


function AccordionDemo() {
  return (
    <section className="w-full py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 ">
          Why Choose Cognition IES?
        </h2>
        <p className="text-lg text-gray-600 max-w-7xl mx-auto mb-10">
          The right engineering partner isn’t just about technical
          expertise—it’s about working with a team that understands your
          industry, your challenges, and the pressure to stay ahead. We don’t
          just solve problems. We build solutions that make a difference.
        </p>
        {/* <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-base sm:text-lg lg:text-xl font-semibold">
              Deep Industry Knowledge
            </AccordionTrigger>
            <AccordionContent className="text-base leading-relaxed text-gray-700 pt-4">
              We don’t dabble. We specialize. From automotive and aerospace to
              robotics, healthcare, and energy, we work across industries where
              precision, performance, and reliability aren’t optional—they’re
              expected. Our engineers bring years of hands-on experience to
              every project, ensuring we don’t just meet standards—we raise
              them.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-base sm:text-lg lg:text-xl font-semibold">
              A Full Spectrum of Engineering Services
            </AccordionTrigger>
            <AccordionContent className="text-base leading-relaxed text-gray-700 pt-4">
              Whether you need a concept designed from scratch an existing
              product optimized or a smarter way to manufacture at scale we’ve
              got you covered. Our expertise includes:
              <ul className="list-disc list-inside mt-2">
                <li>
                  Product design and development that turns ideas into reality
                </li>
                <li>
                  Embedded and digital engineering for AI-driven, IoT-connected
                  solutions
                </li>
                <li>
                  Prototyping and validation to refine, test, and perfect your
                  designs
                </li>
                <li>
                  Cost and value optimization that enhances efficiency without
                  cutting corners
                </li>
                <li>
                  Manufacturing and supply chain solutions for a streamlined,
                  smarter process
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-base sm:text-lg lg:text-xl font-semibold">
              Flexible, Practical Engagement Models
            </AccordionTrigger>
            <AccordionContent className="text-base leading-relaxed text-gray-700 pt-4">
              No two projects are alike, so we offer engagement models that fit
              your scope, budget, and timeline Whether you need a fixed-price
              contract for a well-defined project or a dedicated team that works
              as an extension of your own, we make it easy to get the support
              you need:
              <ul className="list-disc list-inside mt-2">
                <li>
                  <strong>Fixed Price:</strong> A straightforward approach for
                  clearly defined deliverables
                </li>
                <li>
                  <strong>Time & Material:</strong> A flexible model that adapts
                  as your needs evolve
                </li>
                <li>
                  <strong>Dedicated Teams:</strong> Engineers fully integrated
                  into your workflow
                </li>
                <li>
                  <strong>Offshore Development Center:</strong> Round-the-clock
                  engineering support at optimized costs
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-base sm:text-lg lg:text-xl font-semibold">
              Technology that Moves You Forward
            </AccordionTrigger>
            <AccordionContent className="text-base leading-relaxed text-gray-700 pt-4">
              The future isn’t about keeping up—it’s about leading. We help
              companies stay ahead with AI-driven automation, smart
              manufacturing, and sustainable engineering solutions Our
              capabilities include:
              <ul className="list-disc list-inside mt-2">
                <li>
                  AI-powered automation that optimizes efficiency and reduces
                  waste
                </li>
                <li>
                  Digital twins and simulation models for better decision-making
                </li>
                <li>
                  Connected systems that integrate IoT and real-time analytics
                </li>
                <li>
                  Lightweight, high-performance designs that lower costs and
                  boost reliability
                </li>
              </ul>
              We don’t just follow industry trends—we help shape them.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="text-base sm:text-lg lg:text-xl font-semibold">
              A Global Team That Works Like an Extension of Yours
            </AccordionTrigger>
            <AccordionContent className="text-base leading-relaxed text-gray-700 pt-4">
              With teams in India and the USA we offer the best of both worlds—
              global expertise with local market insights. Our engineers work
              seamlessly with your team, ensuring projects stay on track, on
              budget, and aligned with your business goals.
            </AccordionContent>
          </AccordionItem>
        </Accordion> */}
            
        <Accordion type="single" collapsible className="text-[#4A4A4A]">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-[#99D5DF]/20"
            >
              <AccordionTrigger className="text-left text-base sm:text-lg lg:text-xl hover:text-[#00A4B4]">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[#4A4A4A] text-base leading-relaxed pt-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
      </div>
    </section>
  );
}

export default AccordionDemo;
