// MobileMenu.tsx
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MainCategory } from "@/components/ui/Megamenu/menuData";

interface MobileMenuProps {
  activeDropdown: string | null;
  setActiveDropdown: (value: string | null) => void;
  setIsMobileMenuOpen: (value: boolean) => void;
  expertiseData: MainCategory[];
  industriesData: MainCategory[];
}

export function MobileMenu({
  activeDropdown,
  setActiveDropdown,
  setIsMobileMenuOpen,
  expertiseData,
  industriesData,
}: MobileMenuProps) {
  return (
    <div className="md:hidden bg-white border-t border-gray-200">
      <div className="px-4 pt-2 pb-3 space-y-1">
        <Link
          href="/"
          className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-900 hover:bg-gray-50"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Home
        </Link>

        {/* Mobile Industries Dropdown */}
        <div className="space-y-1">
          <button
            onClick={() =>
              setActiveDropdown(
                activeDropdown === "industries-mobile" ? null : "industries-mobile"
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
                activeDropdown === "expertise-mobile" ? null : "expertise-mobile"
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

        <div className="px-3 py-2">
          <Button className="w-full bg-[#0098af] text-white hover:bg-white hover:text-black border-2 border-transparent hover:border-[#0098af] hover:outline hover:outline-2 hover:outline-[#0098af] transition-colors duration-200">
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
}