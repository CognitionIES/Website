import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown, X, Menu } from "lucide-react";
import { expertiseData } from "./constants/expertiseData";
import { industriesData } from "./constants/industriesData";

type MobileNavProps = {
  activeDropdown: string | null;
  setActiveDropdown: (value: string | null) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (value: boolean) => void;
};

export function MobileNav({
  activeDropdown,
  setActiveDropdown,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: MobileNavProps) {
  return (
    <>
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-gray-700 hover:text-blue-900 p-2"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

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

            {/* Mobile Industries Dropdown */}
            <div className="space-y-1">
              <button
                onClick={() =>
                  setActiveDropdown(activeDropdown === "industries-mobile" ? null : "industries-mobile")
                }
                className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-900 hover:bg-gray-50"
              >
                Industries
                <ChevronDown
                  className={`ml-2 h-4 w-4 transition-transform ${activeDropdown === "industries-mobile" ? "rotate-180" : ""}`}
                />
              </button>
              {activeDropdown === "industries-mobile" && (
                <div className="pl-4">
                  {industriesData.map((industry) => (
                    <div key={industry.title} className="space-y-1">
                      <div className="px-3 py-2 text-lg font-semibold text-gray-800">{industry.title}</div>
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
                  setActiveDropdown(activeDropdown === "expertise-mobile" ? null : "expertise-mobile")
                }
                className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-900 hover:bg-gray-50"
              >
                Expertise
                <ChevronDown
                  className={`ml-2 h-4 w-4 transition-transform ${activeDropdown === "expertise-mobile" ? "rotate-180" : ""}`}
                />
              </button>
              {activeDropdown === "expertise-mobile" && (
                <div className="pl-4">
                  {expertiseData.map((expertise) => (
                    <div key={expertise.title} className="space-y-1">
                      <div className="px-3 py-2 text-lg font-semibold text-gray-800">{expertise.title}</div>
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

            <div className="px-3 py-2">
              <Button className="w-full bg-blue-900 text-white hover:bg-blue-800 transition-colors duration-200">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}