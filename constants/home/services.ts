// // Constants for the ServicesSection
// export const SERVICES = [
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

// export const SERVICES_SECTION = {
//   TITLE: "We Go Deeper",
//   DESCRIPTION:
//     "Engineering isn’t just about solving problems—it’s about pushing boundaries. Our services spans three core domains, where precision meets innovation. Whether it’s revolutionizing mobility, engineering sustainable solutions, or harnessing the power of technology, we help industries move faster, work smarter, and build for the future.",
// };
// constants/home/services.js
//import process from "@/constants/images/process-1.jpeg";
import product from "@/constants/images/product.jpeg"
import process2 from "@/constants/images/process-2.jpeg"

export const SERVICES = [
  {
    id: 1,
    title: "Product Engineering",
    shortDescription:
      "Transforming ideas into innovative, market-ready products with precision and services.",
    fullDescription:
      "We provide comprehensive Product Engineering solutions, covering Mechanical Design, Electrical Engineering, CAE/CFD, Hydraulic Systems, Prototyping & 3D Printing, Asset Management, Embedded Systems, Technical Publications, and Supply Chain Management. Our agile approach delivers bold, sustainable products for industries like automotive, aerospace, and medical devices.",
    bgColor: "bg-[#003C46]",
    textColor: "text-white",
    image:product,

    href: "/services/product-engineering",
  },
  {
    id: 2,
    title: "Plant Engineering",
    shortDescription:
      "Optimizing industrial facilities with advanced engineering and reliable solutions.",
    fullDescription:
      "Our Plant Engineering services includes Process & Safety Engineering, Mechanical & Piping Design, Piping Stress Analysis, Civil & Structural Engineering, Electrical & Instrumentation solutions, Modular Packages, Reverse Engineering, and Procurement Support. We ensure efficiency, safety, and scalability for your industrial operations.",
    bgColor: "bg-[#0098AF]",
    textColor: "text-white",
    image: process2, 
    href: "/services/plant-engineering",
  },
];
export const SERVICES_SECTION = {
  TITLE: "Engineering Excellence",
  DESCRIPTION:
    "At Cognition IES, we redefine engineering by blending innovation with precision. Our two core services—Product Engineering and Plant Engineering—drive value for industries worldwide. From concept to completion, we deliver solutions that are sustainable, efficient, and tailored to your needs.",
};