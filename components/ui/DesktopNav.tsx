import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ChevronDown, Search, ArrowRight } from "lucide-react";
import { servicesData } from "./constants/expertiseData";
import { industriesData } from "./constants/industriesData";
// import { Logo1 } from "./constants/images";
import { arrowVariants } from "./utils/animations";

type DesktopNavProps = {
  activeDropdown: string | null;
  setActiveDropdown: (value: string | null) => void;
  activeCategory: number;
  setActiveCategory: (value: number) => void;
  isSticky: boolean;
};

export function DesktopNav({
  activeDropdown,
  setActiveDropdown,
  activeCategory,
  setActiveCategory,
  isSticky,
}: DesktopNavProps) {
  return (
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
            animate={activeDropdown === "industries" ? "open" : "closed"}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown className="ml-1 h-4 w-4" />
          </motion.span>
        </button>
        {activeDropdown === "industries" && (
          <div className="absolute z-[100] left-1/2 transform -translate-x-1/2 mt-0 w-screen max-w-7xl bg-white shadow-lg border-t border-gray-100 transition-all duration-300 ease-in-out min-h-[300px]">
            <div className="grid grid-cols-3 min-h-[400px]">
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
                      {category.icon}
                      {category.title}
                    </div>
                    {activeCategory === index && (
                      <span className="text-[#00b6d3] font-bold text-lg"></span>
                    )}
                  </button>
                ))}
              </div>
              <div className="space-y-1 bg-[#0098af] flex flex-col py-2">
                {industriesData[activeCategory].subCategories.map(
                  (subCategory) => (
                    <Link
                      key={subCategory.title}
                      href={subCategory.href}
                      className="flex items-center px-4 py-1 text-base text-white hover:text-[#003c46] transition-colors duration-200"
                    >
                      {subCategory.icon}
                      {subCategory.title}
                    </Link>
                  )
                )}
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
          services
          <motion.span
            variants={arrowVariants}
            initial="closed"
            animate={activeDropdown === "services" ? "open" : "closed"}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown className="ml-1 h-4 w-4" />
          </motion.span>
        </button>
        {activeDropdown === "services" && (
          <div className="absolute z-[100] transform -translate-x-[55%] mt-0 w-screen max-w-7xl bg-white shadow-lg border-t border-gray-100 transition-all duration-300 ease-in-out min-h-[300px]">
            <div className="grid grid-cols-3 min-h-[400px]">
              <div className="bg-[#003c46] flex flex-col py-2">
                {servicesData.map((category, index) => (
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
                      {category.icon}
                      {category.title}
                    </div>
                    {activeCategory === index && (
                      <span className="text-[#00b6d3] font-bold text-lg"></span>
                    )}
                  </button>
                ))}
              </div>
              <div className="space-y-1 bg-[#0098af] flex flex-col py-2">
                {servicesData[activeCategory].subCategories.map(
                  (subCategory) => (
                    <Link
                      key={subCategory.title}
                      href={subCategory.href}
                      className="flex items-center px-4 py-1 text-base text-white hover:text-[#003c46] transition-colors duration-200"
                    >
                      {subCategory.icon}
                      {subCategory.title}
                    </Link>
                  )
                )}
              </div>
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

      <Link
        href="/resources"
        className="text-gray-700 hover:text-blue-900 text-lg p-2 font-medium transition-colors duration-200"
      >
        Resources
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

      <div className="flex items-center space-x-4 ml-6">
        <button className="text-gray-700 hover:text-blue-900 transition-colors duration-200">
          <Search className="h-5 w-5" />
        </button>
        <Button className="bg-[#0098af] text-white hover:bg-white hover:text-black text-lg transition-colors duration-200">
          Contact Us
        </Button>
      </div>
    </div>
  );
}
