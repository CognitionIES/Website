"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const industries = {
  manufacturing: {
    title: "Manufacturing",
    description: "Digital transformation for manufacturing",
    image: "https://images.unsplash.com/photo-1581091226825-c6a89e7e4801?q=80&w=400&h=300&fit=crop",
    categories: [
      {
        title: "Automotive",
        href: "/industries/manufacturing/automotive",
        description: "Smart manufacturing solutions for automotive industry"
      },
      {
        title: "Aerospace",
        href: "/industries/manufacturing/aerospace",
        description: "Advanced aerospace manufacturing technologies"
      }
    ]
  },
  technology: {
    title: "Technology",
    description: "Innovative tech solutions",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=400&h=300&fit=crop",
    categories: [
      {
        title: "Software & Platforms",
        href: "/industries/technology/software",
        description: "Enterprise software solutions"
      },
      {
        title: "Cloud Services",
        href: "/industries/technology/cloud",
        description: "Cloud infrastructure and services"
      }
    ]
  },
  energy: {
    title: "Energy & Utilities",
    description: "Sustainable energy solutions",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=400&h=300&fit=crop",
    categories: [
      {
        title: "Renewable Energy",
        href: "/industries/energy/renewable",
        description: "Clean energy solutions"
      },
      {
        title: "Smart Grid",
        href: "/industries/energy/smart-grid",
        description: "Intelligent power distribution"
      }
    ]
  }
};
export function IndustriesSection() {
  const [activeIndustry, setActiveIndustry] = React.useState("manufacturing");
  const [imageLoading, setImageLoading] = React.useState(true);

  return (
    <div className="w-[1200px] bg-white rounded-lg shadow-lg mt-2">
      <div className="grid grid-cols-3 min-h-[400px]">
        {/* Column 1: Main industries */}
        <div className="border-r">
          {Object.entries(industries).map(([key, industry]) => (
            <button
              key={key}
              className={cn(
                "w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors",
                activeIndustry === key && "bg-blue-50"
              )}
              onMouseEnter={() => {
                setActiveIndustry(key);
                setImageLoading(true);
              }}
            >
              <div className="flex items-center gap-3">
                <div>
                  <div className="font-medium text-gray-900">{industry.title}</div>
                  <div className="text-sm text-gray-500">{industry.description}</div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Column 2: Categories */}
        <div className="p-6 space-y-4">
          {industries[activeIndustry].categories.map((category) => (
            <Link
              key={category.title}
              href={category.href}
              className="block p-3 rounded-md hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-gray-900">{category.title}</div>
                  <div className="text-sm text-gray-500">{category.description}</div>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </div>
            </Link>
          ))}
        </div>

        {/* Column 3: Industry image */}
        <div className="bg-gray-50 p-4">
          <div className="relative h-full w-full overflow-hidden rounded-lg">
            {imageLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                Loading...
              </div>
            )}
            <Image
              src={industries[activeIndustry].image}
              alt={industries[activeIndustry].title}
              fill
              className="object-cover"
              onLoad={() => setImageLoading(false)}
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
              <h3 className="text-xl font-semibold text-white">
                {industries[activeIndustry].title}
              </h3>
              <p className="text-sm text-gray-200">
                {industries[activeIndustry].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
