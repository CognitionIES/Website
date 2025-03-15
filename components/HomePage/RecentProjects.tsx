"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react"; // Assuming you have an icon library like lucide-react

type Project = {
  title: string;
  description: string;
  image: string;
  href: string;
};

const projects: Project[] = [
  {
    title: "Digitalization",
    description:
      // "Transforming businesses with innovative digital tools to boost efficiency and scalability.",
      "Description of the project",
    image:
      "https://images.unsplash.com/photo-1551288049-b5f3c5e7c7c0?q=80&w=2070&auto=format&fit=crop",
    href: "/projects/digitalization",
  },
  {
    title: "Product Cost Management",
    description:
      //"Optimizing costs through strategic analysis for enhanced profitability.",
      "Description of the project",
    image:
      "https://images.unsplash.com/photo-1551288049-b5f3c5e7c7c0?q=80&w=2070&auto=format&fit=crop",
    href: "/projects/product-cost-management",
  },
];

export default function RecentProjects() {
  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 overflow-hidden bg-gradient-to-br from-gray-50 via-gray-100 to-[#E6F0F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Decorative Background Element */}
        <div className="absolute inset-0 -z-10 opacity-20 bg-[radial-gradient(circle_at_top_right,#0098AF_0%,transparent_70%)]" />

        {/* Header */}
        <div className="mb-12 max-w-4xl space-y-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#003C46] relative drop-shadow-sm">
            Our Recent Projects
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-[#0098AF] via-[#007A8C] to-transparent" />
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Explore our latest work, crafted with precision and innovation to deliver impactful results.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-lg border border-gray-200 bg-white overflow-hidden shadow-md hover:outline hover:outline-2 hover:outline-[#0098AF]"
              role="article"
              aria-labelledby={`${project.title}-title`}
            >
              {/* Image */}
              <div className="relative h-[150px] sm:h-[180px] lg:h-[200px] w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.title} project preview`}
                  fill
                  className="object-cover w-full h-full"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F7PQAJ8wO4zA9l3gAAAABJRU5ErkJggg=="
                />
                {/* Subtle Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent opacity-0 group-hover:opacity-100" />
              </div>

              {/* Content */}
              <div className="p-8 space-y-4">
                <h3
                  id={`${project.title}-title`}
                  className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#003C46]"
                >
                  {project.title}
                </h3>
                <p className="text-sm py-2 sm:text-base text-gray-600 leading-relaxed line-clamp-2">
                  {project.description}
                </p>
                <Link href={project.href}>
                  <Button
                    variant="outline"
                    className="inline-flex mt-2 items-center gap-1 bg-[#0098AF] text-white hover:bg-white hover:text-[#0098AF] text-sm font-medium py-1.5 px-4 rounded-lg border-2 border-transparent hover:border-[#0098AF]"
                    aria-label={`View details of ${project.title}`}
                  >
                    View Project
                    <ArrowRight className="w-3 h-3" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}