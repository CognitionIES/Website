"use client";

import { useState, useEffect, ReactNode, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  ArrowRight,
  Menu,
  X,
  // BarChart,
  Calculator,
  Workflow,
  Rss,
  ShoppingCart,
  Rewind,
  Box,
  Sliders,
  Zap,
  ShieldCheck,
  Building2,
  Car,
  Code,
  Server,
  Users,
} from "lucide-react";
// import {
//   Gauge,
//   Shield,
// Code,
// Cloud,
// Brain,
// GitBranch,
// CheckCircle,
// Globe,
//} from "lucide-react";
import { Printer, Layers, FileText, Truck } from "lucide-react";
import { Cpu } from "lucide-react";
import { Wrench, Factory } from "lucide-react"; // Import icons
import Logo1 from "@/constants/images/navbar-logo.png";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCompassDrafting } from "@fortawesome/free-regular-svg-icons"; // Correct package
import { faGears, faPlugCircleBolt } from "@fortawesome/free-solid-svg-icons"; // Import faGears
import { usePathname, useRouter } from "next/navigation";

// Type definitions for menu structure
interface SubCategory {
  title: string;
  href: string;
  icon?: ReactNode; // Add optional icon property
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

const projectsData: SubCategory[] = [
  {
    title: "Digitalization",
    href: "/projects/digitalization",
  },
  {
    title: "Product Cost Management",
    href: "/projects/product-cost-management",
  },
];

// In MegaMenu.tsx
const servicesData: MainCategory[] = [
  {
    title: "Product Engineering",
    href: "/services/product-engineering",
    icon: <Wrench className="w-5 h-5 mr-2" />,
    subCategories: [
      {
        title: "Mechanical Design Services",
        href: "/services?section=mechanical",
        icon: <FontAwesomeIcon icon={faGears} className="w-5 h-5" />,
      },
      {
        title: "Electrical Engineering Services",
        href: "/services?section=electrical",
        icon: <FontAwesomeIcon icon={faPlugCircleBolt} className="w-4 h-4" />,
      },
      {
        title: "CAE/CFD",
        href: "/services?section=cae-cfd",
        icon: <Calculator className="w-4 h-4" />,
      },
      {
        title: "Hydraulic Engineering Services",
        href: "/services?section=hydraulic",
        icon: <Workflow className="w-4 h-4" />,
      },
      {
        title: "Prototyping and 3D Printing",
        href: "/services?section=prototyping",
        icon: <Printer className="w-4 h-4" />,
      },
      {
        title: "Asset Management",
        href: "/services?section=asset-management",
        icon: <Layers className="w-4 h-4" />,
      },
      {
        title: "Embedded Systems Engineering",
        href: "/services?section=embedded-systems",
        icon: <Cpu className="w-4 h-4" />,
      },
      {
        title: "Technical Publication",
        href: "/services?section=technical-publication",
        icon: <FileText className="w-4 h-4" />,
      },
      {
        title: "Supply Chain Management / Procurement",
        href: "/services?section=supply-chain",
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
    href: "/services/plant-engineering",
    icon: <Factory className="w-5 h-5 mr-2" />,
    subCategories: [
      {
        title: "Process & Safety Engineering",
        href: "/services/plant-engineering/details#section-1",
        icon: <Rss className="w-4 h-4" />, // Represents flow and safety monitoring
      },
      {
        title: "Piping Engineering",
        href: "/services/plant-engineering/details#section-2",
        icon: <Car className="w-4 h-4" />,
      },
      {
        title: "Piping Stress Analysis",
        href: "/services/plant-engineering/details#section-3",
        icon: <Layers className="w-4 h-4" />,
      },
      {
        title: "Mechanical Engineering",
        href: "/services/plant-engineering/details#section-4",
        icon: <Wrench className="w-4 h-4" />,
      },
      {
        title: "Electrical Engineering",
        href: "/services/plant-engineering/details#section-5",
        icon: <Zap className="w-4 h-4" />,
      },
      {
        title: "Reverse Engineering",
        href: "/services/plant-engineering/details#section-6",
        icon: <Rewind className="w-4 h-4" />,
      },
      {
        title: "Instrumentation Engineering",
        href: "/services/plant-engineering/details#section-7",
        icon: <Sliders className="w-4 h-4" />,
      },
      {
        title: "Civil Engineering",
        href: "/services/plant-engineering/details#section-8",
        icon: <Building2 className="w-4 h-4" />,
      },
      {
        title: "Structural Engineering",
        href: "/services/plant-engineering/details#section-9",
        icon: <ShieldCheck className="w-4 h-4" />,
      },

      {
        title: "Modular Package",
        href: "/services/plant-engineering/details#section-10",
        icon: <Box className="w-4 h-4" />,
      },

      {
        title: "Procurement Support",
        href: "/services/plant-engineering/details#section-11",
        icon: <ShoppingCart className="w-4 h-4" />,
      },
    ],
    image: {
      src: "https://images.unsplash.com/photo-1471958680802-1345a694ba6d?q=80&w=2066&auto=format&fit=crop",
      alt: "Pipeline Services",
      title: "Comprehensive Pipeline Solutions",
    },
  },
  // IT Services can remain as is with individual pages if preferred, or adjust similarly
  {
    title: "Saas Solutions",
    icon: <Server className="w-5 h-5 mr-2" />,
    href: "/services/saas-solution/servicecpq",
    subCategories: [
      {
        title: "SERVICECPQ",
        href: "/services/saas-solution/servicecpq",
        icon: <Code className="w-4 h-4" />,
      },
    ],
    image: {
      src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
      alt: "IT Services",
      title: "Innovative IT Solutions",
    },
  },
  {
    title: "Staffing and Recruitment Services",
    icon: <Users className="w-5 h-5 mr-2" />,
    href: "/services/staffing",
    subCategories: [
      {
        title: "Temporary Staffing",
        href: "/services/staffing/temp-staff",
        icon: <Code className="w-4 h-4" />,
      },
      {
        title: "Permanent Placement",
        href: "/services/staffing/permanent-placement",
        icon: <Code className="w-4 h-4" />,
      },
      {
        title: "Executive Search",
        href: "/services/staffing/executive-search",
        icon: <Code className="w-4 h-4" />,
      },
      {
        title: "Contract-to-Hire",
        href: "/services/staffing/contract-to-hire",
        icon: <Code className="w-4 h-4" />,
      },
    ],
    image: {
      src: "https://plus.unsplash.com/premium_photo-1661768507909-f961fcff0d45?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Team collaborating in a modern office",
      title: "Staffing and Recruitment Excellence",
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
  // const [expandedSubCategory, setExpandedSubCategory] = useState<string | null>(
  //   null
  // );
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  // const toggleSubCategory = (title: string) => {
  //   setExpandedSubCategory(expandedSubCategory === title ? null : title);
  // };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
        //setExpandedSubCategory(null);
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
        <div className="max-w-7xl mx-auto sm:px-6">
          <div
            className={cn(
              "flex items-center justify-between transition-all duration-300",
              isSticky ? "h-16" : "h-16"
            )}
          >
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex">
                <Image
                  src={Logo1}
                  width={200}
                  height={100}
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

              {/* services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => {
                  setActiveDropdown("services");
                  setActiveCategory(0);
                }}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`flex items-center p-2 text-gray-700 hover:text-blue-900 text-lg font-medium transition-colors duration-200 ${
                    isSticky ? "py-3" : "py-4"
                  }`}
                >
                  Services
                  <motion.span
                    variants={arrowVariants}
                    initial="closed"
                    animate={activeDropdown === "services" ? "open" : "closed"}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="ml- h-4 w-4" />
                  </motion.span>
                </button>

                {activeDropdown === "services" && (
                  <div className="absolute z-[100] transform -translate-x-[62%] mt-[2px] w-screen max-w-7xl bg-white shadow-lg border-t border-gray-100 transition-all duration-300 ease-in-out min-h-[300px]">
                    <div className="grid grid-cols-3 min-h-[450px]">
                      {/* Main Categories */}
                      <div className="space-y-1 bg-[#003c46] flex flex-col py-2">
                        {servicesData.map((category, index) => (
                          <Link key={category.title} href={category.href}>
                            <button
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
                            </button>
                          </Link>
                        ))}
                      </div>

                      {/* Sub Categories */}
                      <div className="space-y-1 bg-[#0098af] flex flex-col py-2">
                        {servicesData[activeCategory].subCategories.map(
                          (subCategory) => (
                            <Link
                              key={subCategory.title}
                              href={subCategory.href}
                              onClick={(e) => {
                                if (
                                  subCategory.href.includes("?section=") &&
                                  pathname === "/services"
                                ) {
                                  e.preventDefault();
                                  const sectionId =
                                    subCategory.href.split("section=")[1];
                                  const targetSection =
                                    document.getElementById(sectionId);
                                  if (targetSection) {
                                    targetSection.scrollIntoView({
                                      behavior: "smooth",
                                      block: "start",
                                    });
                                  }
                                } else if (
                                  subCategory.href.includes("?section=")
                                ) {
                                  // Navigate to /services with the section query param
                                  router.push(subCategory.href);
                                }
                              }}
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
                            src={servicesData[activeCategory].image.src}
                            alt={servicesData[activeCategory].image.alt}
                            width={300}
                            height={200}
                            className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
                          />
                        </div>
                        <div className="flex items-center gap-2">
                          <p className="text-gray-700">
                            {servicesData[activeCategory].image.title}
                          </p>
                          <ArrowRight className="w-5 h-5 text-gray-600" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("projects")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`flex items-center p-2 text-gray-700 hover:text-blue-900 text-lg font-medium transition-colors duration-200 ${
                    isSticky ? "py-3" : "py-4"
                  }`}
                >
                  Projects
                  <motion.span
                    variants={arrowVariants}
                    initial="closed"
                    animate={activeDropdown === "projects" ? "open" : "closed"}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="ml- h-4 w-4" />
                  </motion.span>
                </button>
                {activeDropdown === "projects" && (
                  <div className="absolute z-[100] left-0 mt-0 w-56 bg-[#0098af] mt-[1px] shadow-lg border border-gray-100 rounded-md">
                    <div className="flex  flex-col">
                      {projectsData.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="px-4 py-2 text-white  hover:text-black transition-colors duration-200"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/careers"
                className="text-gray-700 hover:text-blue-900 text-lg p-2 font-medium transition-colors duration-200"
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

              <div className="flex items-center space-x-4 ml-2">
                <Link href="/contact">
                  <Button className="bg-[#0098af] text-white hover:bg-white hover:text-black text-lg transition-colors duration-200 border-2 border-transparent hover:border-[#0098af] hover:outline hover:outline-2 hover:outline-[#0098af]">
                    Contact Us
                  </Button>
                </Link>
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
                className="block px-3 py-2  text-base font-medium  text-gray-700 hover:text-blue-900 hover:bg-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>

              {/* Mobile services Dropdown */}
              {/* Mobile services Dropdown */}
              <div className="space-y-1">
                <button
                  onClick={() =>
                    setActiveDropdown(
                      activeDropdown === "services-mobile"
                        ? null
                        : "services-mobile"
                    )
                  }
                  className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-900 hover:bg-gray-50"
                >
                  Services
                  <ChevronDown
                    className={`ml-2 h-4 w-4 transition-transform ${
                      activeDropdown === "services-mobile" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeDropdown === "services-mobile" && (
                  <div className="pl-4 max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 pb-2">
                    {servicesData.map((service) => (
                      <div key={service.title} className="space-y-1">
                        <div className="px-3 py-2 text-lg font-semibold text-gray-800">
                          {service.title}
                        </div>
                        {service.subCategories.map((subCategory) => (
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

              <Link
                href="/careers"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-900 hover:bg-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Careers
              </Link>
              <Link
                href="/projects"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-900 hover:bg-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projects
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
                <Button className="w-full bg-[#0098af] text-white hover:bg-white hover:text-black border-2 border-transparent hover:border-[#0098af] hover:outline hover:outline-2 hover:outline-[#0098af] transition-colors duration-200">
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
