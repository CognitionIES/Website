"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Search } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { ExpertiseSection } from "@/components/NavbarSections/expertiseSections"
import { IndustriesSection } from "@/components/NavbarSections/IndustriesSection"
import logo1 from "@/constants/images/LOGO/LOGO_PNG_1.png"


function Navbar() {
  const [isSticky, setIsSticky] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [activeExpertiseSection, setActiveExpertiseSection] = useState("product")

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 0)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>    <nav
      className={cn(
        "w-full h-20 z-[1000] transition-all duration-300",
        isSticky 
          ? "fixed top-0 bg-white shadow-md" 
          : "bg-white border-b border-gray-200"
      )}
    >
      <div className="h-full max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-full">
          <Link href="/" className="relative z-10">
            <Image
              src={logo1}
              alt="Company Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <NavigationMenu>
              <NavigationMenuList className="gap-8">
                <NavigationMenuItem>
                  <Link
                    href="/"
                    className="text-base font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
                  >
                    Home
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-base font-medium text-gray-700 hover:text-blue-600">
                    Industries
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <IndustriesSection />
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-base font-medium text-gray-700 hover:text-blue-600">
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
                  <Link
                    href="/resources"
                    className="text-base font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
                  >
                    Resources
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link
                    href="/career"
                    className="text-base font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
                  >
                    Career
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link
                    href="/about"
                    className="text-base font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
                  >
                    About Us
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center gap-6 ml-8">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200">
                <Search className="w-5 h-5 text-gray-700" />
              </button>
              <Link href="/contact">
                <button className="px-6 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-200">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="fixed inset-x-0 top-20 bg-white border-t border-gray-200 lg:hidden">
            <div className="p-4 space-y-4">
              <Link href="/">
                <span className="block py-2 px-4 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                  Home
                </span>
              </Link>
              {/* Add other mobile menu items */}
            </div>
          </div>
        )}
      </div>
    </nav>
    </>

  )
}

export default Navbar
// "use client"

// import React, { useState, useEffect } from "react"
// import Link from "next/link"
// import Image from "next/image"
// import { Menu, X, Search } from "lucide-react"
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuList,
//   NavigationMenuTrigger,
// } from "@/components/ui/navigation-menu"
// import { cn } from "@/lib/utils"
// import { ExpertiseSection } from "@/components/NavbarSections/expertiseSections"

// function Navbar() {
//   const [isSticky, setIsSticky] = useState(false)
//   const [isOpen, setIsOpen] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => setIsSticky(window.scrollY > 0)
//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   return (
//     <nav
//       className={cn(
//         "w-full h-20 z-[1000] transition-all duration-300",
//         isSticky 
//           ? "fixed top-0 bg-white shadow-md" 
//           : "bg-white border-b border-gray-200"
//       )}
//     >
//       <div className="h-full max-w-7xl mx-auto px-6">
//         <div className="flex justify-between items-center h-full">
//           <Link href="/" className="relative z-10">
//             <Image
//               src="/logo.png"
//               alt="Company Logo"
//               width={120}
//               height={40}
//               className="h-10 w-auto"
//               priority
//             />
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex items-center">
//             <NavigationMenu>
//               <NavigationMenuList className="gap-8">
//                 <NavigationMenuItem>
//                   <Link
//                     href="/"
//                     className="text-base font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
//                   >
//                     Home
//                   </Link>
//                 </NavigationMenuItem>

//                 <NavigationMenuItem>
//                   <NavigationMenuTrigger className="text-base font-medium text-gray-700 hover:text-blue-600">
//                     Services
//                   </NavigationMenuTrigger>
//                   <NavigationMenuContent>
//                     <ExpertiseSection />
//                   </NavigationMenuContent>
//                 </NavigationMenuItem>

//                 <NavigationMenuItem>
//                   <Link
//                     href="/insights"
//                     className="text-base font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
//                   >
//                     Insights
//                   </Link>
//                 </NavigationMenuItem>

//                 <NavigationMenuItem>
//                   <Link
//                     href="/careers"
//                     className="text-base font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
//                   >
//                     Careers
//                   </Link>
//                 </NavigationMenuItem>

//                 <NavigationMenuItem>
//                   <Link
//                     href="/about"
//                     className="text-base font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
//                   >
//                     About Us
//                   </Link>
//                 </NavigationMenuItem>
//               </NavigationMenuList>
//             </NavigationMenu>

//             <div className="flex items-center gap-6 ml-8">
//               <button className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200">
//                 <Search className="w-5 h-5 text-gray-700" />
//               </button>
//               <Link href="/contact">
//                 <button className="px-6 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-200">
//                   Contact
//                 </button>
//               </Link>
//             </div>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
//             onClick={() => setIsOpen(!isOpen)}
//             aria-label="Toggle menu"
//           >
//             {isOpen ? (
//               <X className="w-6 h-6 text-gray-700" />
//             ) : (
//               <Menu className="w-6 h-6 text-gray-700" />
//             )}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <div className="fixed inset-x-0 top-20 bg-white border-t border-gray-200 lg:hidden">
//             <div className="p-4 space-y-4">
//               <Link href="/">
//                 <span className="block py-2 px-4 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200">
//                   Home
//                 </span>
//               </Link>
//               {/* Add other mobile menu items */}
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   )
// }

// export default Navbar