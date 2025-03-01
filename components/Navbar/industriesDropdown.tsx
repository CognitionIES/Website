import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";

export function industriesDropdown(){
    return (<div
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
          <ChevronDown className="ml-1 h-4 w-4" />
        </button>

        {/* Industries Mega Dropdown */}
        {activeDropdown === "industries" && (
          <div
            className="absolute z-[100] left-1/2 transform -translate-x-1/2 mt-0 w-screen max-w-7xl bg-white shadow-lg border-t border-gray-100 transition-all duration-300 ease-in-out min-h-[300px]"
            onMouseEnter={() => setActiveDropdown("industries")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <div className="grid grid-cols-3 min-h-[400px]">
              {/* Column 1: Main Categories */}
              <div className="space-y-1 bg-[#003c46] flex flex-col py-2">
                {industriesData.map((category, index) => (
                  <button
                    key={category.title}
                    onMouseEnter={() => setActiveCategory(index)}
                    className={cn(
                      "w-full flex items-center px-4 py-2 text-lg font-medium transition-colors duration-200",
                      activeCategory === index
                        ? "text-[#00b6d3]"
                        : "text-white hover:bg-black"
                    )}
                  >
                    {category.icon && (
                      <span className="mr-2">{category.icon}</span>
                    )}
                    {category.title}
                  </button>
                ))}
              </div>

              {/* Column 2: Sub Categories */}
              <div className="space-y-1 bg-[#0098af] flex flex-col py-2">
                {industriesData[activeCategory].subCategories.map(
                  (subCategory) => (
                    <Link
                      key={subCategory.title}
                      href={subCategory.href}
                      className="block px-4 py-1 text-base text-[#0c1d44] transition-colors duration-200"
                    >
                      {subCategory.title}
                    </Link>
                  )
                )}
              </div>

              {/* Column 3: Featured Image */}
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
      )
}