"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/Sheet";
import { Menu } from "lucide-react";

const industries = [
  "Automotive",
  "Aerospace and Defense",
  "Heavy Machinery and Industrial Equipment",
  "Healthcare and Medical Devices",
  "Energy and Utilities",
  "Railways and Transportation",
  "Marine and Offshore",
  "Robotics and Automation",
  "Renewable Energy",
  "Consumer Products",
];

const expertise = [
  "Mechanical Design Services",
  "CAE/CFD",
  "Electrical Engineering Services",
  "Hydraulic Engineering Services",
  "Prototyping and 3D Printing",
  "Asset Management",
  "Embedded Systems Engineering",
  "Technical Publication",
  "Supply Chain Management/Procurement",
];

const resources = [
  "Blog",
  "Case Studies",
  "Whitepapers",
  "Webinars",
  "Events",
  "Newsletter",
];

const about = [
  "Company Overview",
  "Leadership Team",
  "Our Mission",
  "Vision & Values",
  "Partners",
  "Awards",
  "CSR Initiatives",
  "Locations",
  "Investor Relations",
];

export function MainNav() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-lg shadow-sm"
          : "bg-background"
      )}
    >
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/cognition-logo.png"
              alt="Cognition"
              width={180}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            <NavigationMenu>
              <NavigationMenuList className="space-x-1">
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Industries</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {industries.map((industry) => (
                        <ListItem key={industry} title={industry} />
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-lg">Expertise</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[600px] text-lg grid-cols-2 gap-3 p-4">
                        {expertise.map((item) => <ListItem key={item.title} title={item.title} href={item.href} />)}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                      {resources.map((item) => (
                        <ListItem key={item} title={item} />
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/careers" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Career
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {about.map((item) => (
                        <ListItem key={item} title={item} />
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Button variant="ghost" size="icon" className="ml-2">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>

            <Button className="ml-4 rounded-full px-8">
              Contact Us
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
            
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4">
                  <Link href="/" className="flex items-center space-x-2 mb-4">
                    <Image
                      src="/cognition-logo.png"
                      alt="Cognition"
                      width={140}
                      height={32}
                      className="h-8 w-auto"
                    />
                  </Link>
                  <Link href="/" className="block py-2">
                    Home
                  </Link>
                  <MobileNavSection title="Industries" items={industries} />
                  <MobileNavSection title="Expertise" items={expertise} />
                  <MobileNavSection title="Resources" items={resources} />
                  <Link href="/careers" className="block py-2">
                    Career
                  </Link>
                  <MobileNavSection title="About Us" items={about} />
                  <Button className="w-full mt-4 rounded-full">
                    Contact Us
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          {children && (
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          )}
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

function MobileNavSection({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div>
      <button
        className="flex w-full items-center justify-between py-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium">{title}</span>
        <span className={`transform transition-transform ${isOpen ? "rotate-180" : ""}`}>
          ▼
        </span>
      </button>
      {isOpen && (
        <div className="pl-4 py-2 space-y-2">
          {items.map((item) => (
            <Link
              key={item}
              href="#"
              className="block py-1 text-sm text-muted-foreground hover:text-foreground"
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}