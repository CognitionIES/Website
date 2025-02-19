// "use client";

// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import {
//   ChevronRight,
//   Settings,
//   Code,
//   Baseline as Pipeline,
//   Loader2,
// } from "lucide-react";
// import { cn } from "@/lib/utils";

// export const expertiseSections = {
//   product: {
//     title: "Product Engineering",
//     icon: Settings,
//     description: "End-to-end product engineering solutions",
//     image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=400&h=300&fit=crop",
//     categories: [
//       {
//         title: "Design & Development",
//         items: [
//           {
//             title: "Mechanical Design",
//             href: "/expertise/product/mechanical",
//             image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=400&h=300&fit=crop",
//             description: "Precision mechanical engineering and design services"
//           },
//           {
//             title: "CAE/CFD",
//             href: "/expertise/product/cae-cfd",
//             image: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?q=80&w=400&h=300&fit=crop",
//             description: "Advanced computational analysis and fluid dynamics"
//           },
//         ]
//       },
//       {
//         title: "Engineering Services",
//         items: [
//           {
//             title: "Electrical Engineering",
//             href: "/expertise/product/electrical",
//             image: "https://images.unsplash.com/photo-1620283085439-39620a1e21c4?q=80&w=400&h=300&fit=crop",
//             description: "Comprehensive electrical system design and implementation"
//           },
//           {
//             title: "Hydraulic Engineering",
//             href: "/expertise/product/hydraulic",
//             image: "https://images.unsplash.com/photo-1574246604907-db69e30ddb97?q=80&w=400&h=300&fit=crop",
//             description: "Advanced hydraulic systems and solutions"
//           },
//         ]
//       },
//       {
//         title: "Manufacturing",
//         items: [
//           {
//             title: "Prototyping and 3D Printing",
//             href: "/expertise/product/prototyping",
//             image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=400&h=300&fit=crop",
//             description: "Rapid prototyping and additive manufacturing"
//           },
//           {
//             title: "Asset Management",
//             href: "/expertise/product/asset-management",
//             image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=400&h=300&fit=crop",
//             description: "Comprehensive asset lifecycle management"
//           },
//         ]
//       }
//     ]
//   },
//   it: {
//     title: "IT Services",
//     icon: Code,
//     description: "Cutting-edge IT solutions and services",
//     image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=400&h=300&fit=crop",
//     categories: [
//       {
//         title: "Cloud & Infrastructure",
//         items: [
//           {
//             title: "Cloud Computing",
//             href: "/expertise/it/cloud",
//             image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=400&h=300&fit=crop",
//             description: "Scalable cloud solutions and infrastructure"
//           },
//           {
//             title: "DevOps Solutions",
//             href: "/expertise/it/devops",
//             image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=400&h=300&fit=crop",
//             description: "Streamlined development and operations"
//           },
//         ]
//       },
//       {
//         title: "Data & Security",
//         items: [
//           {
//             title: "Data Analytics",
//             href: "/expertise/it/analytics",
//             image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&h=300&fit=crop",
//             description: "Advanced data analytics and insights"
//           },
//           {
//             title: "Cybersecurity",
//             href: "/expertise/it/security",
//             image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=400&h=300&fit=crop",
//             description: "Comprehensive security solutions"
//           },
//         ]
//       }
//     ]
//   },
//   pipeline: {
//     title: "Pipeline Services",
//     icon: Pipeline,
//     description: "Complete pipeline management solutions",
//     image: "https://images.unsplash.com/photo-1471958680802-1345a694ba6d?q=80&w=400&h=300&fit=crop",
//     categories: [
//       {
//         title: "Design & Engineering",
//         items: [
//           {
//             title: "Pipeline Design",
//             href: "/expertise/pipeline/design",
//             image: "https://images.unsplash.com/photo-1574068752649-c0c6f5a01ab7?q=80&w=400&h=300&fit=crop",
//             description: "Expert pipeline design and engineering"
//           },
//           {
//             title: "Integrity Management",
//             href: "/expertise/pipeline/integrity",
//             image: "https://images.unsplash.com/photo-1574068752647-fa9bf7050e9f?q=80&w=400&h=300&fit=crop",
//             description: "Comprehensive integrity management services"
//           },
//         ]
//       },
//       {
//         title: "Maintenance & Safety",
//         items: [
//           {
//             title: "Risk Assessment",
//             href: "/expertise/pipeline/risk",
//             image: "https://images.unsplash.com/photo-1574068752648-e9a0d16bf788?q=80&w=400&h=300&fit=crop",
//             description: "Thorough risk assessment and mitigation"
//           },
//           {
//             title: "Maintenance Planning",
//             href: "/expertise/pipeline/maintenance",
//             image: "https://images.unsplash.com/photo-1574068752646-4c0c4f4b2b0f?q=80&w=400&h=300&fit=crop",
//             description: "Strategic maintenance planning and execution"
//           },
//         ]
//       }
//     ]
//   }
// };

// export function ExpertiseSection({ activeSection, onSectionHover }) {
//   const [activeCategory, setActiveCategory] = React.useState(null);
//   const [activeItem, setActiveItem] = React.useState(null);
//   const [imageLoading, setImageLoading] = React.useState(true);

//   React.useEffect(() => {
//     if (expertiseSections[activeSection]?.categories?.length > 0) {
//       setActiveCategory(expertiseSections[activeSection].categories[0]);
//       setActiveItem(expertiseSections[activeSection].categories[0].items[0]);
//     }
//   }, [activeSection]);

//   return (
//     <div className="w-[1200px] bg-white rounded-lg shadow-lg mt-2">
//       <div className="grid grid-cols-3 min-h-[400px]">
//         {/* Column 1: Main sections */}
//         <div className="border-r">
//           {Object.entries(expertiseSections).map(([key, section]) => (
//             <button
//               key={key}
//               className={cn(
//                 "w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors",
//                 activeSection === key && "bg-blue-50"
//               )}
//               onMouseEnter={() => {
//                 onSectionHover(key);
//                 setImageLoading(true);
//               }}
//             >
//               <div className="flex items-center gap-3">
//                 <section.icon className={cn(
//                   "w-5 h-5",
//                   activeSection === key ? "text-blue-600" : "text-gray-500"
//                 )} />
//                 <div>
//                   <div className="font-medium text-gray-900">{section.title}</div>
//                   <div className="text-sm text-gray-500">{section.description}</div>
//                 </div>
//               </div>
//             </button>
//           ))}
//         </div>

//         {/* Column 2: Categories and items */}
//         <div className="p-6 space-y-6">
//           {expertiseSections[activeSection]?.categories?.map((category) => (
//             <div
//               key={category.title}
//               onMouseEnter={() => setActiveCategory(category)}
//             >
//               <h3 className="font-medium text-gray-900 mb-2">{category.title}</h3>
//               <div className="space-y-2">
//                 {category.items.map((item) => (
//                   <Link
//                     key={item.title}
//                     href={item.href}
//                     className={cn(
//                       "block p-2 rounded-md transition-colors",
//                       activeItem === item ? "bg-blue-50" : "hover:bg-gray-50"
//                     )}
//                     onMouseEnter={() => {
//                       setActiveItem(item);
//                       setImageLoading(true);
//                     }}
//                   >
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <div className="font-medium text-gray-900">{item.title}</div>
//                         <div className="text-sm text-gray-500">{item.description}</div>
//                       </div>
//                       <ChevronRight className="w-4 h-4 text-gray-400" />
//                     </div>
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Column 3: Dynamic image */}
//         <div className="bg-gray-50 p-4">
//           <div className="relative h-full w-full overflow-hidden rounded-lg">
//             {imageLoading && (
//               <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
//                 <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
//               </div>
//             )}
//             <Image
//               src={activeItem?.image || expertiseSections[activeSection].image}
//               alt={activeItem?.title || expertiseSections[activeSection].title}
//               fill
//               className={cn(
//                 "object-cover transition-opacity duration-300",
//                 imageLoading ? "opacity-0" : "opacity-100"
//               )}
//               onLoad={() => setImageLoading(false)}
//               priority
//             />
//             <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
//               <h3 className="text-xl font-semibold text-white">
//                 {activeItem?.title || expertiseSections[activeSection].title}
//               </h3>
//               <p className="text-sm text-gray-200">
//                 {activeItem?.description || expertiseSections[activeSection].description}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// "use client"

// import React from "react"
// import Image from "next/image"
// import Link from "next/link"
// import { ChevronRight, MonitorSmartphone, Cog, Baseline as Pipeline } from "lucide-react"
// import { cn } from "@/lib/utils"

// export const mainCategories = {
//   product: {
//     title: "Product Engineering",
//     icon: Cog,
//     color: "text-teal-500",
//     bgColor: "bg-teal-50",
//     image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=800&h=600&fit=crop",
//     subcategories: [
//       "Mechanical Design Services",
//       "CAE/CFD",
//       "Electrical Engineering Services",
//       "Hydraulic Engineering Services",
//       "Prototyping and 3D Printing",
//       "Asset Management",
//       "Embedded Systems Engineering",
//       "Technical Publication",
//       "Supply Chain Management/Procurement",

//     ]
//   },
//   it: {
//     title: "IT Services",
//     icon: MonitorSmartphone,
//     color: "text-blue-500",
//     bgColor: "bg-blue-50",
//     image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&h=600&fit=crop",
//     content: "Comprehensive IT solutions for digital transformation"
//   },
//   pipeline: {
//     title: "Pipeline Services",
//     icon: Pipeline,
//     color: "text-purple-500",
//     bgColor: "bg-purple-50",
//     image: "https://images.unsplash.com/photo-1471958680802-1345a694ba6d?q=80&w=800&h=600&fit=crop",
//     content: "End-to-end pipeline management and optimization"
//   }
// }

// export function ExpertiseSection() {
//   const [activeCategory, setActiveCategory] = React.useState("product")
//   const [imageLoading, setImageLoading] = React.useState(true)

//   return (
//     <div className="w-[1200px] bg-white rounded-lg shadow-lg">
//       <div className="grid grid-cols-3 h-[480px]">
//         {/* Column 1: Main Categories */}
//         <div className="border-r border-gray-200 py-2">
//           {Object.entries(mainCategories).map(([key, category]) => {
//             const Icon = category.icon
//             return (
//               <button
//                 key={key}
//                 onClick={() => {
//                   setActiveCategory(key)
//                   setImageLoading(true)
//                 }}
//                 className={cn(
//                   "w-full px-4 py-3 flex items-center gap-3 text-left transition-colors duration-200",
//                   activeCategory === key ? category.bgColor : "hover:bg-gray-50"
//                 )}
//               >
//                 <div className={cn(
//                   "p-2 rounded-lg",
//                   category.bgColor
//                 )}>
//                   <Icon className={cn("w-5 h-5", category.color)} />
//                 </div>
//                 <span className="font-medium text-gray-900">{category.title}</span>
//                 <ChevronRight className={cn(
//                   "ml-auto w-5 h-5 transition-colors",
//                   activeCategory === key ? category.color : "text-gray-400"
//                 )} />
//               </button>
//             )
//           })}
//         </div>

//         {/* Column 2: Subcategories or Content */}
//         <div className="border-r border-gray-200 p-6">
//           {activeCategory === "product" ? (
//             <div className="space-y-2">
//               {mainCategories.product.subcategories.map((subcategory) => (
//                 <Link
//                   key={subcategory}
//                   href={`/services/${subcategory.toLowerCase().replace(/\s+/g, '-')}`}
//                   className="block px-4 py-2.5 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200"
//                 >
//                   {subcategory}
//                 </Link>
//               ))}
//             </div>
//           ) : (
//             <div className="p-4">
//               <p className="text-gray-700 leading-relaxed">
//                 {mainCategories[activeCategory].content}
//               </p>
//             </div>
//           )}
//         </div>

//         {/* Column 3: Image Preview */}
//         <div className="relative">
//           {imageLoading && (
//             <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
//               <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
//             </div>
//           )}
//           <Image
//             src={mainCategories[activeCategory].image}
//             alt={mainCategories[activeCategory].title}
//             fill
//             className={cn(
//               "object-cover transition-opacity duration-300",
//               imageLoading ? "opacity-0" : "opacity-100"
//             )}
//             onLoad={() => setImageLoading(false)}
//             priority
//           />
//           <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
//             <h3 className="text-xl font-semibold text-white">
//               {mainCategories[activeCategory].title}
//             </h3>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const expertise = {
  product: {
    title: "Product Engineering",
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=800&h=600&fit=crop",
    categories: [
      {
        title: "Mechanical Design Services",
        href: "/expertise?section=mechanical",
      },
      { title: "CAE/CFD", href: "/expertise?section=cae-cfd" },
      {
        title: "Electrical Engineering Services",
        href: "/expertise?section=electrical",
      },
      {
        title: "Hydraulic Engineering Services",
        href: "/expertise?section=hydraulic",
      },
      {
        title: "Prototyping and 3D Printing",
        href: "/expertise?section=prototyping",
      },
      {
        title: "Asset Management",
        href: "/expertise?section=asset-management",
      },
      {
        title: "Embedded Systems Engineering",
        href: "/expertise?section=embedded-systems",
      },
      {
        title: "Technical Publication",
        href: "/expertise?section=technical-publication",
      },
      {
        title: "Supply Chain Management/Procurement",
        href: "/expertise?section=supply-chain",
      },
    ],
  },
  it: {
    title: "IT Services",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&h=600&fit=crop",
    categories: [
      { title: "Cloud Services", href: "/expertise/it/cloud" },
      { title: "Software Development", href: "/expertise/it/software" },
    ],
  },
  pipeline: {
    title: "Pipeline Services",
    image:
      "https://images.unsplash.com/photo-1471958680802-1345a694ba6d?q=80&w=800&h=600&fit=crop",
    categories: [
      {
        title: "Hydraulic Engineering Services",
        href: "/expertise/pipeline/hydraulic-engineering",
      },
      {
        title: "Asset Management",
        href: "/expertise/pipeline/asset-management",
      },
    ],
  },
};

export function ExpertiseSection() {
  const [activeExpertise, setActiveExpertise] = React.useState("product");
  const [imageLoading, setImageLoading] = React.useState(true);

  return (
    <div className="w-[900px] bg-white rounded-lg shadow-lg">
      <div className="grid grid-cols-[250px_350px_300px] h-[400px]">
        {/* Column 1: Expertise Categories */}
        <div className="border-r">
          {Object.entries(expertise).map(([key, category]) => (
            <button
              key={key}
              className={cn(
                "w-full px-4 py-3 text-left hover:text-blue-600 transition-colors",
                activeExpertise === key
              )}
              onMouseEnter={() => {
                setActiveExpertise(key);
                setImageLoading(true);
              }}
            >
              <div className="flex items-center gap-3">
                <div className="font-medium text-gray-900 hover:text-blue-600">
                  {category.title}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Column 2: Subcategories */}
        <div className="p-4 space-y-2 overflow-y-auto">
          {expertise[activeExpertise].categories.map((subCategory) => (
            <Link
              key={subCategory.title}
              href={subCategory.href}
              className="block p-2 rounded-md  transition-colors"
            >
              <div className="font-medium text-sm hover:text-blue-600 text-gray-900">
                {subCategory.title}
              </div>
            </Link>
          ))}
        </div>

        {/* Column 3: Expertise Image */}
        <div className="bg-gray-50">
          <div className="relative h-[200px] w-[200px] p-4">
            {imageLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                Loading...
              </div>
            )}
            <Image
              src={expertise[activeExpertise].image}
              alt={expertise[activeExpertise].title}
              fill
              className="object-cover"
              onLoad={() => setImageLoading(false)}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
