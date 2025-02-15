"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo1 from "@/constants/images/LOGO/LOGO_PNG_1.png";
import { Menu, X, Search, ChevronRight } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Header from "./ui/Header";
import { ExpertiseSection } from "@/components/NavbarSections/expertiseSections";
import { IndustriesSection } from "@/components/NavbarSections/IndustriesSection";
import resources from "@/constants/resources";
import about from "@/constants/about";
import { ListItem } from "./NavbarSections/ListItem";

function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeExpertiseSection, setActiveExpertiseSection] = useState("product");

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="">
        <Header />
      </div>
      <nav
        className={cn(
          "w-full z-50 transition-all duration-300 border-b",
          isSticky ? "fixed top-0 bg-white shadow-lg" : "bg-white"
        )}
      >
        <div className="container mx-auto">
          <div className="flex justify-between items-center py- px-4 lg:px-8">
            <Link href="/" className="relative z-10">
              <Image
                src={logo1}
                width={100}
                height={100}
                alt="Company Logo"
                className="h-16 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <NavigationMenu>
                <NavigationMenuList className="gap-1">
                  <NavigationMenuItem>
                    <Link
                      href="/"
                      className="text-sm font-medium px-4 py-2 rounded-md hover:bg-gray-100 transition-colors"
                    >
                      Home
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-base font-medium">
                      Industries
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <IndustriesSection />
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-base font-medium">
                      Expertise
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ExpertiseSection
                        activeSection={activeExpertiseSection}
                        onSectionHover={setActiveExpertiseSection}
                      />
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-base font-medium">
                      Resources
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="w-[400px] p-4 bg-white rounded-lg shadow-lg mt-2">
                        {resources.map((item) => (
                          <ListItem key={item.title} {...item}>
                            <ChevronRight className="w-4 h-4 text-gray-400" />
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link
                      href="/career"
                      className="text-base font-medium px-4 py-2 rounded-md hover:bg-gray-100 transition-colors"
                    >
                      Career
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-base font-medium">
                      About Us
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="w-[400px] p-4 bg-white rounded-lg shadow-lg mt-2">
                        {about.map((item) => (
                          <ListItem key={item.title} {...item}>
                            <ChevronRight className="w-4 h-4 text-gray-400" />
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <div className="flex items-center gap-4">
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <Search className="w-5 h-5" />
                </button>
                <Link href="/contact">
                  <button className="px-6 py-2.5 text-sm font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 hover:bg-gray-100 rounded-md"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden border-t">
              <div className="py-4 px-4 space-y-2">
                <Link href="/" className="block py-2 text-base font-medium">
                  Home
                </Link>
                <div className="pt-4 space-y-3">
                  <button className="w-full bg-gray-100 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors">
                    Search
                  </button>
                  <Link href="/contact">
                    <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
                      Contact Us
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;