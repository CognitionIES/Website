// DesktopMenu.tsx
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu } from "./DropdownMenu";
import { MainCategory } from "@/components/ui/Megamenu/menuData.jsx";

const arrowVariants = {
  closed: { rotate: 0 },
  open: { rotate: 180 },
};

interface DesktopMenuProps {
  activeDropdown: string | null;
  setActiveDropdown: (value: string | null) => void;
  activeCategory: number;
  setActiveCategory: (value: number) => void;
  isSticky: boolean;
  expertiseData: MainCategory[];
  industriesData: MainCategory[];
}

export function DesktopMenu({
  activeDropdown,
  setActiveDropdown,
  activeCategory,
  setActiveCategory,
  isSticky,
  expertiseData,
  industriesData,
}: DesktopMenuProps) {
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
          <DropdownMenu
            data={industriesData}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
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
          <DropdownMenu
            data={expertiseData}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
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

      <div className="flex items-center space-x-4 ml-2">
        <Link href="/contact">
          <Button className="bg-[#0098af] text-white hover:bg-white hover:text-black text-lg transition-colors duration-200 border-2 border-transparent hover:border-[#0098af] hover:outline hover:outline-2 hover:outline-[#0098af]">
            Contact Us
          </Button>
        </Link>
      </div>
    </div>
  );
}