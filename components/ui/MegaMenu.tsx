"use client";

import { useState, useEffect, ReactNode, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  Search,
  ArrowRight,
  Menu,
  X,
  BarChart,
} from "lucide-react";
import {
  Fan,
  Gauge,
  Shield,
  Clipboard,
  Code,
  Cloud,
  Brain,
  GitBranch,
  CheckCircle,
  Globe,
  FlaskConical,
} from "lucide-react";
import { Printer, Layers, Settings, FileText, Truck } from "lucide-react";
import {
  Car,
  Forklift,
  TramFront,
  Plane,
  Ship,
  Leaf,
  Cpu,
  Droplet,
  Zap,
  Sun,
  Pill,
  Wheat,
  Shirt,
  Droplets,
  Book,
} from "lucide-react";
import { Wrench, Factory, Server } from "lucide-react"; // Import icons
import Logo1 from "@/constants/images/WEB LOGO.png";
import { motion } from "framer-motion";

// Type definitions for menu structure
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
    href: "/expertise/product-engineering",
    icon: <Wrench className="w-5 h-5 mr-2" />,
    subCategories: [
      {
        title: "Mechanical Design Services",
        href: "/expertise?section=mechanical",
        // eslint-disable-next-line react/jsx-no-undef
        icon: <Car className="w-4 h-4" />,
      },
      {
        title: "Electrical Engineering Services",
        href: "/expertise?section=electrical",
        icon: <Zap className="w-4 h-4" />,
      },
      {
        title: "CAE/CFD",
        href: "/expertise?section=cae-cfd",
        icon: <BarChart className="w-4 h-4" />,
      },
      {
        title: "Hydraulic Engineering Services",
        href: "/expertise?section=hydraulic",
        icon: <Droplet className="w-4 h-4" />,
      },
      {
        title: "Prototyping and 3D Printing",
        href: "/expertise?section=prototyping",
        icon: <Printer className="w-4 h-4" />,
      },
      {
        title: "Asset Management",
        href: "/expertise?section=asset-management",
        icon: <Layers className="w-4 h-4" />,
      },
      {
        title: "Embedded Systems Engineering",
        href: "/expertise?section=embedded-systems",
        icon: <Settings className="w-4 h-4" />,
      },
      {
        title: "Technical Publication",
        href: "/expertise?section=technical-publication",
        icon: <FileText className="w-4 h-4" />,
      },
      {
        title: "Supply Chain Management / Procurement",
        href: "/expertise?section=supply-chain",
        icon: <Truck className="w-4 h-4" />,
      },
    ],
    image: {
      src: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=2070&auto=format&fit=crop",
      alt: "Product Engineering",
      title: "Advanced Product Engineering Solutions",
    },
  },
  {
    title: "Plant Engineering",
    href: "/expertise/pipeline-services",
    icon: <Factory className="w-5 h-5 mr-2" />,
    subCategories: [
      {
        title: "Mechanical & Electrical Engineering Services",
        href: "/expertise/pipeline-design",
        icon: <Car className="w-4 h-4" />,
      },
      {
        title: "Process Engineering Services",
        href: "/expertise/integrity",
        icon: <Settings className="w-4 h-4" />,
      },
      {
        title: "Piping & Fluid System Services",
        href: "/expertise/maintenance",
        icon: <Droplet className="w-4 h-4" />,
      },
      {
        title: "Civil & Structural Engineering Services",
        href: "/expertise/safety",
        icon: <Layers className="w-4 h-4" />,
      },
      {
        title: "HVAC & Ventilation System Services",
        href: "/expertise/monitoring",
        icon: <Fan className="w-4 h-4" />,
      },
      {
        title: "Instrumentation Engineering Services",
        href: "/expertise/environmental",
        icon: <Gauge className="w-4 h-4" />,
      },
      {
        title: "Safety & Compliance Services",
        href: "/expertise/emergency",
        icon: <Shield className="w-4 h-4" />,
      },
      {
        title: "Energy Management & Sustainability Services",
        href: "/expertise/training",
        icon: <Leaf className="w-4 h-4" />,
      },
      {
        title: "Digitalization & Industry 4.0 Services",
        href: "/expertise/emergency",
        icon: <Cpu className="w-4 h-4" />,
      },
      {
        title: "Project Management",
        href: "/expertise/emergency",
        icon: <Clipboard className="w-4 h-4" />,
      },
    ],
    image: {
      src: "https://images.unsplash.com/photo-1471958680802-1345a694ba6d?q=80&w=2066&auto=format&fit=crop",
      alt: "Pipeline Services",
      title: "Comprehensive Pipeline Solutions",
    },
  },
  {
    title: "IT Services",
    icon: <Server className="w-5 h-5 mr-2" />,
    href: "/expertise/it-services",
    subCategories: [
      {
        title: "Software Development",
        href: "/expertise/software",
        icon: <Code className="w-4 h-4" />,
      },
      {
        title: "Cloud Solutions",
        href: "/expertise/cloud",
        icon: <Cloud className="w-4 h-4" />,
      },
      {
        title: "Data Analytics",
        href: "/expertise/data",
        icon: <BarChart className="w-4 h-4" />,
      },
      {
        title: "Cybersecurity",
        href: "/expertise/security",
        icon: <Shield className="w-4 h-4" />,
      },
      {
        title: "AI & Machine Learning",
        href: "/expertise/ai-ml",
        icon: <Brain className="w-4 h-4" />,
      },
      {
        title: "DevOps Services",
        href: "/expertise/devops",
        icon: <GitBranch className="w-4 h-4" />,
      },
      {
        title: "Quality Assurance",
        href: "/expertise/qa",
        icon: <CheckCircle className="w-4 h-4" />,
      },
      {
        title: "Digital Transformation",
        href: "/expertise/digital",
        icon: <Globe className="w-4 h-4" />,
      },
    ],
    image: {
      src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
      alt: "IT Services",
      title: "Innovative IT Solutions",
    },
  },
];

// Constants for menu data industries section
const industriesData = [
  {
    title: "Mobility",
    icon: <Car className="w-5 h-5" />,
    subCategories: [
      {
        title: "Automotive",
        icon: <Car className="w-4 h-4" />,
        href: "/industries/mobility/automotive",
      },
      {
        title: "Trucks and Off-Highway Vehicles",
        icon: <Forklift className="w-4 h-4" />,
        href: "/industries/mobility/trucks",
      },
      {
        title: "Railways and Transportation",
        icon: <TramFront className="w-4 h-4" />,
        href: "/industries/mobility/railways",
      },
      {
        title: "Aerospace and Defense",
        icon: <Plane className="w-4 h-4" />,
        href: "/industries/mobility/aerospace",
      },
      {
        title: "Marine and Offshore",
        icon: <Ship className="w-4 h-4" />,
        href: "/industries/mobility/marine",
      },
    ],
    image: {
      src: "https://images.unsplash.com/photo-1517153295259-74eb0b416cee?auto=format&fit=crop&q=80",
      alt: "Automotive manufacturing",
      title: "Next-gen mobility solutions",
    },
  },
  {
    title: "Sustainability",
    icon: <Leaf className="w-5 h-5" />,
    subCategories: [
      {
        title: "Discrete Manufacturing & Industrial Products",
        href: "/industries/sustainability/discrete-manufacturing",
        icon: <Factory className="w-4 h-4" />,
      },
      {
        title: "Process Manufacturing",
        href: "/industries/sustainability/process-manufacturing",
        icon: <Settings className="w-4 h-4" />,
        subSubCategories: [
          {
            title: "Oil and Gas",
            href: "/industries/sustainability/process-manufacturing/oil-gas",
            icon: <Droplet className="w-4 h-4" />,
          },
          {
            title: "Chemicals and Petrochemicals",
            href: "/industries/sustainability/process-manufacturing/chemicals",
            icon: <FlaskConical className="w-4 h-4" />,
          },
          {
            title: "Power and Energy",
            href: "/industries/sustainability/process-manufacturing/power",
            icon: <Zap className="w-4 h-4" />,
          },
          {
            title: "Renewable Energy",
            href: "/industries/sustainability/process-manufacturing/renewable",
            icon: <Sun className="w-4 h-4" />,
          },
          {
            title: "Pharmaceuticals and Biotech",
            href: "/industries/sustainability/process-manufacturing/pharma",
            icon: <Pill className="w-4 h-4" />,
          },
          {
            title: "Agriculture and Agro-Processing",
            href: "/industries/sustainability/process-manufacturing/agriculture",
            icon: <Wheat className="w-4 h-4" />,
          },
          {
            title: "Cement and Construction",
            href: "/industries/sustainability/process-manufacturing/cement",
            icon: <Car className="w-4 h-4" />,
          },
          {
            title: "Textile and Apparel",
            href: "/industries/sustainability/process-manufacturing/textile",
            icon: <Shirt className="w-4 h-4" />,
          },
          {
            title: "Water and Wastewater Treatment",
            href: "/industries/sustainability/process-manufacturing/water",
            icon: <Droplets className="w-4 h-4" />,
          },
          {
            title: "Pulp and Paper",
            href: "/industries/sustainability/process-manufacturing/pulp",
            icon: <Book className="w-4 h-4" />,
          },
        ],
      },
      {
        title: "ABCDE",
        href: "/industries/sustainability/discrete",
        icon: <Cpu className="w-4 h-4" />,
      },
    ],
    image: {
      src: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&q=80",
      alt: "Sustainable manufacturing",
      title: "Sustainable industrial solutions",
    },
  },
  {
    title: "Tech",
    icon: <Cpu className="w-5 h-5" />,
    subCategories: [
      {
        title: "Digital Engineering",
        href: "/industries/tech/digital-engineering",
        icon: <Code className="w-4 h-4" />,
      },
    ],
    image: {
      src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80",
      alt: "Technology solutions",
      title: "Advanced tech solutions",
    },
  },
];
// Arrow variants for animation
const arrowVariants = {
  closed: { rotate: 0 },
  open: { rotate: 180 },
};
export function MegaMenu() {
  // State mngmnt for dropdown menus and sticky header
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<number>(0);
  const [isSticky, setIsSticky] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedSubCategory, setExpandedSubCategory] = useState<string | null>(
    null
  );
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleSubCategory = (title: string) => {
    setExpandedSubCategory(expandedSubCategory === title ? null : title);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
        setExpandedSubCategory(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  //  sticky header behavior on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsSticky(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="relative z-50">
      <nav
        className={cn(
          "w-full bg-white border-b border-gray-200 transition-all duration-300 ease-in-out",
          isSticky
            ? "fixed top-0 left-0 right-0 z-[1000] shadow-md backdrop-blur-md bg-white/75"
            : "relative"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div
            className={cn(
              "flex items-center justify-between transition-all duration-300",
              isSticky ? "h-14" : "h-16"
            )}
          >
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex">
                <Image
                  src={Logo1}
                  width={200}
                  height={110}
                  alt="Company Logo"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center p-2 ml-auto">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-900 text-lg p-2 font-medium transition-colors duration-200"
              >
                Home
              </Link>

              {/* Industries Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => {
                  setActiveDropdown("industries");
                  setActiveCategory(0);
                }}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`flex items-center p-2 text-gray-700 hover:text-blue-900 text-lg font-medium transition-colors duration-200 ${
                    isSticky ? "py-3" : "py-4"
                  }`}
                >
                  Industries
                  <motion.span
                    variants={arrowVariants}
                    initial="closed"
                    animate={
                      activeDropdown === "industries" ? "open" : "closed"
                    }
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </motion.span>
                </button>

                {activeDropdown === "industries" && (
                  <div className="absolute z-[100] left-1/2 transform -translate-x-1/2 mt-0 w-screen max-w-7xl bg-white shadow-lg border-t border-gray-100 transition-all duration-300 ease-in-out min-h-[300px]">
                    <div className="grid grid-cols-3 min-h-[400px]">
                      {/* Main Categories */}
                      <div className="space-y-1 bg-[#003c46] flex flex-col py-2">
                        {industriesData.map((category, index) => (
                          <button
                            key={category.title}
                            onMouseEnter={() => setActiveCategory(index)}
                            className={cn(
                              "w-full flex items-center justify-between px-4 py-2 text-lg font-medium transition-colors duration-200",
                              activeCategory === index
                                ? "text-[#00b6d3]"
                                : "text-white hover:bg-black"
                            )}
                          >
                            <div className="flex items-center">
                              {category.icon && (
                                <span className="mr-2">{category.icon}</span>
                              )}
                              {category.title}
                            </div>
                            {activeCategory === index && (
                              <span className="text-[#00b6d3] font-bold text-lg">
                                &gt;
                              </span>
                            )}
                          </button>
                        ))}
                      </div>
                      {/* Sub Categories with Icons */}
                      <div className="space-y-1 bg-[#0098af] flex flex-col py-2">
                        {industriesData[activeCategory].subCategories.map(
                          (subCategory) => (
                            <div
                              key={subCategory.title}
                              className="flex flex-col"
                            >
                              <button
                                onClick={() =>
                                  toggleSubCategory(subCategory.title)
                                }
                                className={cn(
                                  "flex items-center justify-between px-4 py-2 text-white hover:text-[#003c46] transition-colors duration-200",
                                  expandedSubCategory === subCategory.title &&
                                    "bg-[#0098af]"
                                )}
                              >
                                <div className="flex items-center">
                                  {subCategory.icon && (
                                    <span className="mr-2">
                                      {subCategory.icon}
                                    </span>
                                  )}
                                  {subCategory.title}
                                </div>
                                {subCategory.subSubCategories && (
                                  <ChevronDown
                                    className={cn(
                                      "h-4 w-4 transition-transform duration-200 bg-[#0098af]",
                                      expandedSubCategory ===
                                        subCategory.title &&
                                        "transform rotate-180"
                                    )}
                                  />
                                )}
                              </button>
                              {subCategory.subSubCategories && (
                                <div
                                  className={cn(
                                    "overflow-hidden transition-all duration-300 bg-[#0098af] text-white",
                                    expandedSubCategory === subCategory.title
                                      ? "max-h-[500px] opacity-100"
                                      : "max-h-0 opacity-0"
                                  )}
                                >
                                  {subCategory.subSubCategories.map(
                                    (subSubCategory) => (
                                      <Link
                                        key={subSubCategory.title}
                                        href={subSubCategory.href}
                                        className="block px-6 py-1 text-white hover:text-[#003c46] transition-colors duration-200 flex items-center"
                                      >
                                        {subSubCategory.icon && (
                                          <span className="mr-2">
                                            {subSubCategory.icon}
                                          </span>
                                        )}
                                        {subSubCategory.title}
                                      </Link>
                                    )
                                  )}
                                </div>
                              )}
                            </div>
                          )
                        )}
                      </div>

                      {/* Featured Image */}
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
                          <p className="text-gray-700">
                            {industriesData[activeCategory].image.title}
                          </p>
                          <ArrowRight className="w-5 h-5 text-gray-600" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Expertise Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => {
                  setActiveDropdown("expertise");
                  setActiveCategory(0);
                }}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`flex items-center p-2 text-gray-700 hover:text-blue-900 text-lg font-medium transition-colors duration-200 ${
                    isSticky ? "py-3" : "py-4"
                  }`}
                >
                  Expertise
                  <motion.span
                    variants={arrowVariants}
                    initial="closed"
                    animate={activeDropdown === "expertise" ? "open" : "closed"}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </motion.span>
                </button>

                {activeDropdown === "expertise" && (
                  <div className="absolute z-[100] transform -translate-x-[55%] mt-0 w-screen max-w-7xl bg-white shadow-lg border-t border-gray-100 transition-all duration-300 ease-in-out min-h-[300px]">
                    <div className="grid grid-cols-3 min-h-[400px]">
                      {/* Main Categories */}
                      <div className="bg-[#003c46] flex flex-col py-2">
                        {expertiseData.map((category, index) => (
                          <button
                            key={category.title}
                            onMouseEnter={() => setActiveCategory(index)}
                            className={cn(
                              "w-full flex items-center justify-between px-4 py-2 text-lg font-medium transition-colors duration-200",
                              activeCategory === index
                                ? "text-[#00b6d3]"
                                : "text-white hover:bg-black"
                            )}
                          >
                            <div className="flex items-center">
                              {category.icon && (
                                <span className="mr-2">{category.icon}</span>
                              )}
                              {category.title}
                            </div>
                            {activeCategory === index && (
                              <span className="text-[#00b6d3] font-bold text-lg">
                                &gt;
                              </span>
                            )}
                          </button>
                        ))}
                      </div>

                      {/* Sub Categories with Icons */}
                      <div className="space-y-1 bg-[#0098af] flex flex-col py-2">
                        {expertiseData[activeCategory].subCategories.map(
                          (subCategory) => (
                            <Link
                              key={subCategory.title}
                              href={subCategory.href}
                              className="flex items-center px-4 py-1 text-base text-white hover:text-[#003c46] transition-colors duration-200"
                            >
                              {subCategory.icon && (
                                <span className="mr-2">{subCategory.icon}</span>
                              )}
                              {subCategory.title}
                            </Link>
                          )
                        )}
                      </div>

                      {/* Featured Image */}
                      <div className="bg-[#99d5df] shadow-sm flex flex-col items-center gap-4 min-h-[400px] p-4">
                        <div className="w-full h-48 overflow-hidden">
                          <Image
                            src={expertiseData[activeCategory].image.src}
                            alt={expertiseData[activeCategory].image.alt}
                            width={300}
                            height={200}
                            className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
                          />
                        </div>
                        <div className="flex items-center gap-2">
                          <p className="text-gray-700">
                            {expertiseData[activeCategory].image.title}
                          </p>
                          <ArrowRight className="w-5 h-5 text-gray-600" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/resources"
                className="text-gray-700 hover:text-blue-900 text-lg p-2  font-medium transition-colors duration-200"
              >
                Resources
              </Link>

              <Link
                href="/careers"
                className="text-gray-700 hover:text-blue-900 text-lg p-2  font-medium transition-colors duration-200"
              >
                Careers
              </Link>

              <Link
                href="/about"
                className="text-gray-700 hover:text-blue-900 text-lg p-2  font-medium transition-colors duration-200"
              >
                About Us
              </Link>

              {/* Search and Contact Button */}
              <div className="flex items-center space-x-4 ml-6">
                <button className="text-gray-700 hover:text-blue-900 transition-colors duration-200">
                  <Search className="h-5 w-5" />
                </button>
                <Button className="bg-[#0098af] text-white hover:bg-white hover:text-black text-lg transition-colors duration-200">
                  Contact Us
                </Button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 hover:text-blue-900 p-2"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 text-base font-medium  text-gray-700 hover:text-blue-900 hover:bg-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>

              {/* Mobile Industries Dropdown */}
              <div className="space-y-1">
                <button
                  onClick={() =>
                    setActiveDropdown(
                      activeDropdown === "industries-mobile"
                        ? null
                        : "industries-mobile"
                    )
                  }
                  className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-900 hover:bg-gray-50"
                >
                  Industries
                  <ChevronDown
                    className={`ml-2 h-4 w-4 transition-transform ${
                      activeDropdown === "industries-mobile" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeDropdown === "industries-mobile" && (
                  <div className="pl-4">
                    {industriesData.map((industry) => (
                      <div key={industry.title} className="space-y-1">
                        <div className="px-3 py-2 text-lg font-semibold text-gray-800">
                          {industry.title}
                        </div>
                        {industry.subCategories.map((subCategory) => (
                          <Link
                            key={subCategory.title}
                            href={subCategory.href}
                            className="block px-3 py-2 text-lg text-gray-600 hover:text-blue-900 hover:bg-gray-50"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subCategory.title}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Expertise Dropdown */}
              <div className="space-y-1">
                <button
                  onClick={() =>
                    setActiveDropdown(
                      activeDropdown === "expertise-mobile"
                        ? null
                        : "expertise-mobile"
                    )
                  }
                  className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-900 hover:bg-gray-50"
                >
                  Expertise
                  <ChevronDown
                    className={`ml-2 h-4 w-4 transition-transform ${
                      activeDropdown === "expertise-mobile" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeDropdown === "expertise-mobile" && (
                  <div className="pl-4">
                    {expertiseData.map((expertise) => (
                      <div key={expertise.title} className="space-y-1">
                        <div className="px-3 py-2 text-lg font-semibold text-gray-800">
                          {expertise.title}
                        </div>
                        {expertise.subCategories.map((subCategory) => (
                          <Link
                            key={subCategory.title}
                            href={subCategory.href}
                            className="block px-3 py-2 text-lg text-gray-600 hover:text-blue-900 hover:bg-gray-50"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subCategory.title}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Other Mobile Menu Items */}
              <Link
                href="/resources"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-900 hover:bg-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Resources
              </Link>
              <Link
                href="/careers"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-900 hover:bg-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Careers
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-900 hover:bg-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>

              {/* Mobile Contact Button */}
              <div className="px-3 py-2">
                <Button className="w-full bg-blue-900 text-white hover:bg-blue-800 transition-colors duration-200">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer for sticky header */}
      {isSticky && <div className="h-14 " />}
    </div>
  );
}
