"use client";

import { useState, useEffect, ReactNode, useRef } from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  
  Menu,
  X,
  Workflow,
  Box,
  Building2,
  Server,
  Users,
} from "lucide-react";
import { IconSettingsDollar } from "@tabler/icons-react";
import { Printer, Layers, FileText, Truck } from "lucide-react";
import { Cpu } from "lucide-react";
import { Wrench, Factory } from "lucide-react";
import Logo1 from "@/constants/images/navbar-logo.png";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGears,
  faPlugCircleBolt,
  faMagnifyingGlassChart,
  faBuildingShield,
  faChartArea,
  faGaugeHigh,
  faBridge,
  faUsers,
  faCity,
} from "@fortawesome/free-solid-svg-icons";
import { usePathname, useRouter } from "next/navigation";
import colImage from "@/constants/images/home/3.jpg";

// Type definitions for menu structure
interface SubCategory {
  title: string;
  href: string;
  icon?: ReactNode;
}

interface MainCategory {
  icon: ReactNode;
  title: string;
  href: string;
  subCategories: SubCategory[];
  image: {
    src: string | StaticImageData;
    alt: string;
    title: string;
  };
}
const servicesData: MainCategory[] = [
  {
    title: "Product Engineering",
    href: "/services/product-engineering",
    icon: <Wrench className=" w-4 h-4 mr-2" />,
    subCategories: [
      {
        title: "Mechanical Design Services",
        href: "/services?section=mechanical",
        icon: <FontAwesomeIcon icon={faGears} className=" w-4 h-4" />,
      },
      {
        title: "Electrical Engineering Services",
        href: "/services?section=electrical",
        icon: <FontAwesomeIcon icon={faPlugCircleBolt} className="w-4 h-4" />,
      },
      {
        title: "CAE/CFD",
        href: "/services?section=cae-cfd",
        icon: (
          <FontAwesomeIcon icon={faMagnifyingGlassChart} className=" w-4 h-4" />
        ),
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
      src: colImage,
      alt: "Product Engineering",
      title: "You are at the right place",
    },
  },
  {
    title: "Plant Engineering",
    href: "/services/plant-engineering",
    icon: <Factory className=" w-4 h-4 mr-2" />,
    subCategories: [
      {
        title: "Process & Safety Engineering",
        href: "/services/plant-engineering/details#section-1",
        icon: <FontAwesomeIcon icon={faBuildingShield} className=" w-4 h-4" />,
      },
      {
        title: "Piping Engineering",
        href: "/services/plant-engineering/details#section-2",
        icon: <Workflow className="w-5 h-5" />,
      },
      {
        title: "Piping Stress Analysis",
        href: "/services/plant-engineering/details#section-3",
        icon: <FontAwesomeIcon icon={faChartArea} className=" w-4 h-4" />,
      },
      {
        title: "Mechanical Engineering",
        href: "/services/plant-engineering/details#section-4",
        icon: <FontAwesomeIcon icon={faGears} className=" w-5 h-5" />,
      },
      {
        title: "Electrical Engineering",
        href: "/services/plant-engineering/details#section-5",
        icon: <FontAwesomeIcon icon={faPlugCircleBolt} className="w-4 h-4" />,
      },
      {
        title: "Reverse Engineering",
        href: "/services/plant-engineering/details#section-6",
        icon: <IconSettingsDollar stroke={2} className="w-5 h-5" />,
      },
      {
        title: "Instrumentation Engineering",
        href: "/services/plant-engineering/details#section-7",
        icon: <FontAwesomeIcon icon={faGaugeHigh} className="w-4 h-4" />,
      },
      {
        title: "Civil Engineering",
        href: "/services/plant-engineering/details#section-8",
        icon: <Building2 className="w-4 h-4" />,
      },
      {
        title: "Structural Engineering",
        href: "/services/plant-engineering/details#section-9",
        icon: <FontAwesomeIcon icon={faBridge} className="w-4 h-4" />,
      },

      {
        title: "Modular Package",
        href: "/services/plant-engineering/details#section-10",
        icon: <Box className="w-5 h-5" />,
      },

      {
        title: "Procurement Support",
        href: "/services/plant-engineering/details#section-11",
        icon: <Truck className="w-5 h-5" />,
      },
    ],
    image: {
      src: colImage,
      alt: "Pipeline Services",
      title: "Right Place Right Time",
    },
  },
  // IT Services can remain as is with individual pages if preferred, or adjust similarly
  {
    title: "Saas Solutions - servicecpq ",
    icon: <Server className=" w-4 h-4 mr-2" />,
    href: "/services/saas-solution/servicecpq",
    subCategories: [
      {
        title: "",
        href: "/services/saas-solution/servicecpq",
        icon: "",
      },
    ],
    image: {
      src: colImage,
      alt: "IT Services",
      title: "Innovative IT Solutions",
    },
  },
  {
    title: "Staffing and Recruitment Services",
    icon: <Users className=" w-4 h-4 mr-2" />,
    href: "/services/staffing",
    subCategories: [
      {
        title: "For Job Seeker",
        href: "/services/staffing/job-seeker",
        icon: <FontAwesomeIcon icon={faUsers} className="w-5 h-5" />,
      },
      {
        title: "For Employer",
        href: "/services/staffing/employer",
        icon: <FontAwesomeIcon icon={faCity} className="w-5 h-5" />,
      },
    ],
    image: {
      src: colImage,
      alt: "Team collaborating in a modern office",
      title: "Staffing and Recruitment Excellence",
    },
  },
];

const arrowVariants = {
  closed: { rotate: 0 },
  open: { rotate: 180 },
};

export function MegaMenu() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<number>(0);
  const [isSticky, setIsSticky] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null); // Ref to store timeout
  const router = useRouter();
  const pathname = usePathname();

  // Handle outside clicks to close dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle sticky header on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsSticky(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Clear timeout on component unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Handle mouse enter for services dropdown
  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current); // Clear any existing timeout
    }
    setActiveDropdown("services");
    setActiveCategory(0);
  };

  // Handle mouse leave for services dropdown
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300); // 300ms delay before closing dropdown
  };

  // Handle mouse enter for dropdown content to keep it open
  const handleDropdownMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current); // Prevent dropdown from closing
    }
  };

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

              {/* Services Dropdown */}
              <div
                className="relative"
                ref={dropdownRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`flex items-center px-2 text-gray-700 hover:text-blue-900 text-lg font-medium transition-colors duration ${
                    isSticky ? "py-4" : "py-4"
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
                  <div
                    className="absolute z-[100] transform -translate-x-[62%] mt-[2px] w-screen max-w-7xl bg-white shadow-lg border-t border-gray-100 transition-all duration-300 ease-in-out min-h-[300px]"
                    onMouseEnter={handleDropdownMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
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
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/projects"
                className="text-gray-700 hover:text-blue-900 text-lg p-2 font-medium transition-colors duration-200"
              >
                Projects
              </Link>

              <Link
                href="/careers"
                className="text-gray-700 hover:text-blue-900 text-lg p-2 font-medium transition-colors duration-200"
              >
                Careers
              </Link>

              <Link
                href="/about"
                className="text-gray-700 hover:text-blue-900 text-lg p-2 font-medium transition-colors duration-200"
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
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-900 hover:bg-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>

              {/* Mobile Services Dropdown */}
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
                      <div
                        key={service.title}
                        className="space Також

-y-1"
                      >
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
