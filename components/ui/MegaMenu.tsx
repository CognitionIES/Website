"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ChevronDown, Search, ArrowRight } from "lucide-react";
import { Wrench, Factory, Server } from "lucide-react"; // Import icons

interface SubCategory {
  title: string;
  href: string;
}

interface MainCategory {
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

const expertiseData: MainCategory[] = [
  {
    title: "Product Engineering",
    href: "/expertise",
    icon: <Wrench className="w-5 h-5 mr-2" />, // Add icon here
    subCategories: [
      { title: "Mechanical Design Services", href: "/expertise?section=mechanical" },
      { title: "Electrical Engineering Services", href: "/expertise?section=electrical" },
      { title: "CAE/CFD", href: "/expertise?section=cae-cfd" },
      { title: "Hydraulic Engineering Services", href: "/expertise?section=hydraulic" },
      { title: "Prototyping and 3D Printing", href:  "/expertise?section=prototyping" },
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
  {
    title: " Plant Engineering",
    href: "/expertise/pipeline-services",
    icon: <Factory className="w-5 h-5 mr-2" />, // Add icon here

    subCategories: [
      { title: "Mechnical & Electrical Engineering Services", href: "/expertise/pipeline-design" },
      { title: "Process Engineering Services", href: "/expertise/integrity" },
      { title: "Piping & Fluid System Services", href: "/expertise/maintenance" },
      { title: "Civil & Structural Engineering Services", href: "/expertise/safety" },
      { title: "HVAC & Ventilation System Services", href: "/expertise/monitoring" },
      { title: "Instrumentation Engineering Servies", href: "/expertise/environmental" },
      { title: "Safety & Compliance Services", href: "/expertise/emergency" },
      { title: "Engery Management & Sustainability Services", href: "/expertise/training" },
      { title: "Digitialization & Industry 4.0 Services", href: "/expertise/emergency" },
      { title: "Project Management", href: "/expertise/emergency" },
    ],
    image: {
      src: "https://images.unsplash.com/photo-1471958680802-1345a694ba6d?q=80&w=2066&auto=format&fit=crop",
      alt: "Pipeline Services",
      title: "Comprehensive Pipeline Solutions",
    },
  },
  {
    title: "IT Services",
    icon: <Server className="w-5 h-5 mr-2" />, // Add icon here

    href: "/expertise/it-services",
    subCategories: [
      { title: "Software Development", href: "/expertise/software" },
      { title: "Cloud Solutions", href: "/expertise/cloud" },
      { title: "Data Analytics", href: "/expertise/data" },
      { title: "Cybersecurity", href: "/expertise/security" },
      { title: "AI & Machine Learning", href: "/expertise/ai-ml" },
      { title: "DevOps Services", href: "/expertise/devops" },
      { title: "Quality Assurance", href: "/expertise/qa" },
      { title: "Digital Transformation", href: "/expertise/digital" },
    ],
    image: {
      src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
      alt: "IT Services",
      title: "Innovative IT Solutions",
    },
  },
  
];
const industriesData = [
  {
    title: "Automotive",
    href: "/industries/automotive",
   // icon: <Car className="w-5 h-5 mr-2" />, 
    subCategories: [
      { title: "Vehicle Design", href: "/industries/automotive?section=vehicle-design" },
      { title: "Powertrain Engineering", href: "/industries/automotive?section=powertrain" },
      { title: "Electric Vehicles", href: "/industries/automotive?section=ev" },
      { title: "Manufacturing & Automation", href: "/industries/automotive?section=manufacturing" },
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
    //icon: <Airplane className="w-5 h-5 mr-2" />, 
    subCategories: [
      { title: "Aircraft Design", href: "/industries/aerospace?section=aircraft-design" },
      { title: "Aerospace Materials", href: "/industries/aerospace?section=materials" },
      { title: "Avionics & Systems", href: "/industries/aerospace?section=avionics" },
      { title: "MRO Services", href: "/industries/aerospace?section=mro" },
    ],
    image: {
      src: "https://images.unsplash.com/photo-1551333131-04a53b3e2c43?q=80&w=2070&auto=format&fit=crop",
      alt: "Aerospace Industry",
      title: "Advanced Aerospace Engineering",
    },
  },
];



export function MegaMenu() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<number>(0);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsSticky(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
    <nav 
      className={cn(
        "w-full bg-white border-b border-gray-200 transition-all duration-300 ease-in-out",
        isSticky && "fixed top-0 left-0 right-0 z-[1000] shadow-md backdrop-blur-sm bg-white/95"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className={cn(
          "flex justify-between items-center transition-all duration-300",
          isSticky ? "h-14" : "h-16"
        )}>
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className={cn(
                "font-bold text-blue-900 transition-all duration-300",
                isSticky ? "text-lg" : "text-xl"
              )}>Cognition IES / Logo</span>
            </Link>
          </div>

          {/* Main Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-900 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Home
            </Link>
            
            {/* <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("industries")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center text-gray-700 hover:text-blue-900 px-3 py-2 text-sm font-medium transition-colors duration-200">
                Industries
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {/* Industries Mega Dropdown 
              {activeDropdown === "industries" && (
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-0 w-screen max-w-7xl bg-white shadow-lg rounded-b-lg border-t border-gray-100 transition-all duration-300 ease-in-out">
                  <div className="grid grid-cols-3 gap-8 p-8">
                    {/* Add your industries content here *
                  </div>
                </div>
              )}
            </div>
            
             */}
<div
      className="relative"
      onMouseEnter={() => {
        setActiveDropdown("industries");
        setActiveCategory(0);
      }}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <button className="flex items-center text-gray-700 hover:text-blue-900 px-3 py-2 text-sm font-medium transition-colors duration-200">
        Industries
        <ChevronDown className="ml-1 h-4 w-4" />
      </button>

      {activeDropdown === "industries" && (
        <div 
          className="absolute left-1/2 transform -translate-x-1/2 mt-0 w-screen max-w-3xl bg-white shadow-lg border-t border-gray-100 transition-all duration-300 ease-in-out min-h-[300px]"
          onMouseEnter={() => setActiveDropdown("industries")}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <div className="grid grid-cols-3 min-h-[400px]">
            <div className="space-y-1 bg-[#003c46] flex flex-col py-2">
              {industriesData.map((category, index) => (
                <button
                  key={category.title}
                  onMouseEnter={() => setActiveCategory(index)}
                  className={`w-full flex items-center px-4 py-2 text-base font-medium transition-colors duration-200 ${activeCategory === index ? "text-[#00b6d3]" : "text-white hover:bg-black"}`}
                >
                  {category.icon && <span className="mr-2">{category.icon}</span>}
                  {category.title}
                </button>
              ))}
            </div>
            
            <div className="space-y-1 bg-[#0098af] flex flex-col py-2">
              {industriesData[activeCategory].subCategories.map((subCategory) => (
                <Link
                  key={subCategory.title}
                  href={subCategory.href}
                  className="block px-4 py-1 text-sm text-[#0c1d44] transition-colors duration-200"
                >
                  {subCategory.title}
                </Link>
              ))}
            </div>
            
            <div className="bg-[#99d5df] shadow-sm flex flex-col items-center gap-4 min-h-[400px] p-4">
              <div className="w-full h-48 overflow-hidden">
                <Image 
                  src={industriesData[activeCategory].image.src}
                  alt={industriesData[activeCategory].image.alt}
                  width={300}
                  height={200}
                  className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
                />
              </div>
              <div className="flex items-center gap-2">
                <p className="text-gray-700">{industriesData[activeCategory].image.title}</p>
                <ArrowRight className="w-5 h-5 text-gray-600" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
            <div
              className="relative"
              onMouseEnter={() => {
                setActiveDropdown("expertise");
                setActiveCategory(0);
              }}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center text-gray-700 hover:text-blue-900 px-3 py-2 text-sm font-medium transition-colors duration-200">
                Expertise
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {/* Expertise Mega Dropdown */}
              {activeDropdown === "expertise" && (
                <div 
                  className="absolute z-[100  ] left-1/2 transform -translate-x-1/2 mt-0 w-screen max-w-7xl bg-white shadow-lg border-t border-gray-100 transition-all duration-300 ease-in-out min-h-[300px]"
                  onMouseEnter={() => setActiveDropdown("expertise")}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="grid grid-cols-3 min-h-[400px]">
                    {/* Column 1: Main Categories */}
                    <div className="space-y-1 bg-[#003c46] flex flex-col py-2">
                      {expertiseData.map((category, index) => (
                        <button
                          key={category.title}
                          onMouseEnter={() => setActiveCategory(index)}
                          className={cn(
                            "w-full flex items-center px-4 py-2 text-base font-medium transition-colors duration-200",
                            activeCategory === index
                              ? "text-[#00b6d3]"
                              : "text-white hover:bg-black"
                          )}
                        >
                          {category.icon && <span className="mr-2">{category.icon}</span>}
                          {category.title}
                        </button>
                      ))}
                    </div>
                    
                    {/* Column 2: Sub Categories */}
                    <div className="space-y-1 bg-[#0098af] flex flex-col py-2">
                      {expertiseData[activeCategory].subCategories.map((subCategory) => (
                        <Link
                          key={subCategory.title}
                          href={subCategory.href}
                          className="block px-4 py-1 text-sm text-[#0c1d44] transition-colors duration-200"
                        >
                          {subCategory.title}
                        </Link>
                      ))}
                    </div>
                    
                    {/* Column 3: Featured Image */}
                    <div className="bg-[#99d5df] shadow-sm flex flex-col items-center gap-4 min-h-[400px] p-4">
                      <div className="w-full h-48 overflow-hidden">
                        <Image 
                          src={expertiseData[activeCategory].image.src}
                          alt={expertiseData[activeCategory].image.alt}
                          width={300}
                          height={200}
                          className="w-full h-full  object-cover transition-all duration-500 hover:scale-105"
                        />
                      </div>
                      <div className="flex items-center gap-2">
                        <p className="text-gray-700">{expertiseData[activeCategory].image.title}</p>
                        <ArrowRight className="w-5 h-5 text-gray-600" />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/resources"
              className="text-gray-700 hover:text-blue-900 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Resources
            </Link>
            
            <Link
              href="/careers"
              className="text-gray-700 hover:text-blue-900 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Careers
            </Link>
            
            <Link
              href="/about"
              className="text-gray-700 hover:text-blue-900 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              About Us
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-blue-900 transition-colors duration-200">
              <Search className="h-5 w-5" />
            </button>
            <Button className="bg-blue-900 text-white hover:bg-blue-800 transition-colors duration-200">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </nav>
    </div>
  );
}