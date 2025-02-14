// 'use client';

// import { useState } from 'react';
// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";

// const services = [
//   {
//     id: 1,
//     title: "Mobility",
//     shortDescription: "We bring together digital and physical engineering, working across industries to enable mobility solutions.",
//     fullDescription: "We bring together digital and physical engineering, working across industries to not only design but also implement – to enable our clients to advance the movement of goods and people. Our Mobility segment encompasses Automotive, Trucks and Off-highway Vehicles, and Aerospace and Rail.",
//     bgColor: "bg-[#0A1E5C]",
//     textColor: "text-white",
//     image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     id: 2,
//     title: "Sustainability",
//     shortDescription: "We partner with businesses to create sustainable solutions for tomorrow.",
//     fullDescription: "We partner with both upstream and downstream businesses across the process, plant, and manufacturing sectors - fulfilling the demands of today without compromising the future. We optimize production, streamline operations, and retool estates for the future, creating smarter, connected infrastructure to revitalize resource usage.",
//     bgColor: "bg-[#E5EEF6]",
//     textColor: "text-gray-800",
//     image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     id: 3,
//     title: "Tech",
//     shortDescription: "Leveraging cutting-edge technology to drive innovation.",
//     fullDescription: "We make the foundational technologies that our clients use to develop and improve their processes and products – helping them to innovate faster, operate more efficiently, and stay ahead of the competition. Our Tech segment encompasses Medical Technology (MedTech) and Hi-tech, which includes Semiconductors (Semcon), Consumer Electronics, and Hyperscale infrastructure.",
//     bgColor: "bg-black",
//     textColor: "text-white",
//     image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//   },
// ];

// export default function ServicesSection() {
//   const [activeCard, setActiveCard] = useState<number | null>(null);

//   return (
//     <section className="w-full py-24 px-6 md:px-8 lg:px-12   bg-[#e6e6e6]">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-[2.5rem] font-bold text-[#0A1E5C] mb-4">
//           We Go Deeper
//         </h1>
//         <p className="text-gray-700 text-lg mb-12 max-w-8xl">
//           Our engineering and technology services are divided across three segments to cover practically every industry. Deep specialisation, coupled with an unparalleled ability to innovate across industries allows our clients to go further, faster.
//         </p>
        
//         <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
//           {services.map((service) => (
//             <div
//               key={service.id}
//               className={cn(
//                 "rounded-xl overflow-hidden relative cursor-pointer transition-all duration-500 ease-in-out",
//                 service.bgColor,
//                 service.textColor,
//                 activeCard === service.id ? "md:col-span-6" : "md:col-span-3",
//                 activeCard !== null && activeCard !== service.id && "md:col-span-3"
//               )}
//               onClick={() => setActiveCard(activeCard === service.id ? null : service.id)}
//             >
//               <div 
//                 className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
//                 style={{ 
//                   backgroundImage: `url(${service.image})`,
//                   opacity: activeCard === service.id ? 0 : 1
//                 }}
//               />
//               <div 
//                 className={cn(
//                   "absolute inset-0 transition-opacity duration-500",
//                   service.id === 2 ? "bg-gradient-to-b from-transparent to-[#E5EEF6] opacity-90" :
//                   "bg-gradient-to-b from-transparent to-black opacity-70"
//                 )}
//               />
//               <div className="relative h-full p-8 flex flex-col justify-between min-h-[400px]">
//                 <div>
//                   <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
//                   <p className={cn(
//                     "text-lg transition-all duration-500 ease-in-out",
//                     activeCard === service.id ? "opacity-90" : "opacity-0 h-0"
//                   )}>
//                     {activeCard === service.id ? service.fullDescription : service.shortDescription}
//                   </p>
//                 </div>
//                 <Button 
//                   variant="secondary"
//                   className="w-fit bg-[#00E6C3] hover:bg-white text-black rounded-md px-6 transition-transform duration-300 hover:scale-105"
//                 >
//                   Read More
//                 </Button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const services = [
  {
    id: 1,
    title: "Mobility",
    shortDescription: "We bring together digital and physical engineering, working across industries to enable mobility solutions.",
    fullDescription: "We bring together digital and physical engineering, working across industries to not only design but also implement – to enable our clients to advance the movement of goods and people. Our Mobility segment encompasses Automotive, Trucks and Off-highway Vehicles, and Aerospace and Rail.",
    bgColor: "bg-[#0A1E5C]",
    textColor: "text-white",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Sustainability",
    shortDescription: "We partner with businesses to create sustainable solutions for tomorrow.",
    fullDescription: "We partner with both upstream and downstream businesses across the process, plant, and manufacturing sectors - fulfilling the demands of today without compromising the future. We optimize production, streamline operations, and retool estates for the future, creating smarter, connected infrastructure to revitalize resource usage.",
    bgColor: "bg-[#E5EEF6]",
    textColor: "text-gray-800",
    image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Tech",
    shortDescription: "Leveraging cutting-edge technology to drive innovation.",
    fullDescription: "We make the foundational technologies that our clients use to develop and improve their processes and products – helping them to innovate faster, operate more efficiently, and stay ahead of the competition. Our Tech segment encompasses Medical Technology (MedTech) and Hi-tech, which includes Semiconductors (Semcon), Consumer Electronics, and Hyperscale infrastructure.",
    bgColor: "bg-black",
    textColor: "text-white",
    image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
];

export default function ServicesSection() {
  const [activeCard, setActiveCard] = useState<number>(1); // Set Mobility (id: 1) as default active card

  return (
    <section className="w-full py-12 sm:py-16 lg:py-24 bg-[#e6e6e6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A1E5C] mb-4">
          We Go Deeper
        </h1>
        <p className="text-base leading-relaxed text-gray-700 mb-8">
          Our engineering and technology services are divided across three segments to cover practically every industry. Deep specialisation, coupled with an unparalleled ability to innovate across industries allows our clients to go further, faster.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={cn(
                "rounded-xl overflow-hidden relative cursor-pointer transition-all duration-500 ease-in-out",
                service.bgColor,
                service.textColor,
                activeCard === service.id ? "md:col-span-6" : "md:col-span-3",
                activeCard !== service.id && "md:col-span-3"
              )}
              onClick={() => setActiveCard(service.id)}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
                style={{ 
                  backgroundImage: `url(${service.image})`,
                  opacity: activeCard === service.id ? 0 : 1
                }}
              />
              <div 
                className={cn(
                  "absolute inset-0 transition-opacity duration-500",
                  service.id === 2 ? "bg-gradient-to-b from-transparent to-[#E5EEF6] opacity-90" :
                  "bg-gradient-to-b from-transparent to-black opacity-70"
                )}
              />
              <div className="relative h-full p-8 flex flex-col justify-between min-h-[400px]">
                <div>
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <p className={cn(
                    "text-lg transition-all duration-500 ease-in-out",
                    activeCard === service.id ? "opacity-90" : "opacity-0 h-0"
                  )}>
                    {activeCard === service.id ? service.fullDescription : service.shortDescription}
                  </p>
                </div>
                <div className="flex justify-end mt-4">
                  <Button 
                    variant="secondary"
                    className="bg-[#00E6C3] hover:bg-white text-black rounded-sm px-6 transition-transform duration-300"
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
