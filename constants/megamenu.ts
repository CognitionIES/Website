import { ReactNode } from 'react';
import { Wrench, Factory, Server } from 'lucide-react';

// Type definitions
export interface SubCategory {
  title: string;
  href: string;
}

export interface MainCategory {
  icon: ReactNode;
  title: string;
  href: string;
  subCategories: SubCategory[];
  image: {
    src: string;
    alt: string;
    title: string;
  };
}

// Expertise section data
export const expertiseData: MainCategory[] = [
  {
    title: "Product Engineering",
    href: "/expertise/product-engineering",
    icon: <Wrench className="w-5 h-5 mr-2" />,
    subCategories: [
      { title: "Mechanical Design Services", href: "/expertise?section=mechanical" },
      { title: "Electrical Engineering Services", href: "/expertise?section=electrical" },
      { title: "CAE/CFD", href: "/expertise?section=cae-cfd" },
      { title: "Hydraulic Engineering Services", href: "/expertise?section=hydraulic" },
      { title: "Prototyping and 3D Printing", href: "/expertise?section=prototyping" },
      { title: "Asset Management", href: "/expertise?section=asset-management" },
      { title: "Embedded Systems Engineering", href: "/expertise?section=embedded-systems" },
      { title: "Technical Publication", href: "/expertise?section=technical-publication" },
      { title: "Supply Chain Management / Procurement", href: "/expertise?section=supply-chain" },
    ],
    image: {
      src: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=2070&auto=format&fit=crop",
      alt: "Product Engineering",
      title: "Advanced Product Engineering Solutions",
    },
  },
  // ... rest of expertiseData
];

// Industries section data
export const industriesData: MainCategory[] = [
  {
    title: "Automotive",
    href: "/industries/automotive",
    icon: <Factory className="w-5 h-5 mr-2" />,
    subCategories: [
      { title: "Vehicle Design", href: "/industries/automotive?section=vehicle-design" },
      { title: "Powertrain Engineering", href: "/industries/automotive?section=powertrain" },
      { title: "Electric Vehicles", href: "/industries/automotive?section=ev" },
      { title: "Manufacturing & Automation", href: "/industries/automotive?section=manufacturing" },
      { title: "Connected Cars", href: "/industries/automotive?section=connected-cars" },
      { title: "Autonomous Vehicles", href: "/industries/automotive?section=autonomous" },
    ],
    image: {
      src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
      alt: "Automotive Industry",
      title: "Innovative Automotive Solutions",
    },
  },
  {
    title: "Aerospace",
    href: "/industries/aerospace",
    icon: <Server className="w-5 h-5 mr-2" />,
    subCategories: [
      { title: "Aircraft Design", href: "/industries/aerospace?section=aircraft-design" },
      { title: "Propulsion Systems", href: "/industries/aerospace?section=propulsion" },
      { title: "Avionics", href: "/industries/aerospace?section=avionics" },
      { title: "Space Systems", href: "/industries/aerospace?section=space" },
      { title: "Defense & Military", href: "/industries/aerospace?section=defense" },
    ],
    image: {
      src: "https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=2070&auto=format&fit=crop",
      alt: "Aerospace Industry",
      title: "Advanced Aerospace Solutions",
    },
  },
  {
    title: "Energy & Utilities",
    href: "/industries/energy",
    icon: <Wrench className="w-5 h-5 mr-2" />,
    subCategories: [
      { title: "Renewable Energy", href: "/industries/energy?section=renewable" },
      { title: "Power Generation", href: "/industries/energy?section=power" },
      { title: "Smart Grid Solutions", href: "/industries/energy?section=smart-grid" },
      { title: "Oil & Gas", href: "/industries/energy?section=oil-gas" },
      { title: "Nuclear Energy", href: "/industries/energy?section=nuclear" },
    ],
    image: {
      src: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop",
      alt: "Energy Industry",
      title: "Sustainable Energy Solutions",
    },
  },
];

// Navigation items
export const navigationItems = [
  { title: "Home", href: "/" },
  { title: "Resources", href: "/resources" },
  { title: "Careers", href: "/careers" },
  { title: "About Us", href: "/about" },
]; 