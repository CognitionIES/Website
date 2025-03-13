// components/RecentProjects.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type Project = {
  title: string;
  description: string;
  image: string;
  href: string;
};

const projects: Project[] = [
  {
    title: "Digitalization",
    description: "Description 1",
    image:
      "https://images.unsplash.com/photo-1644329770639-1a20809b82a3?q=80&w=2145&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image path
    href: "https://images.unsplash.com/photo-1644329770639-1a20809b82a3?q=80&w=2145&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Product Cost Management",
    description: "Description 2",
    image:
      "https://images.unsplash.com/photo-1644329770639-1a20809b82a3?q=80&w=2145&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image path
    href: "https://images.unsplash.com/photo-1644329770639-1a20809b82a3?q=80&w=2145&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
// components/RecentProjects.tsx

export default function RecentProjects() {
  return (
    <section className="w-full py-12 sm:py-14 lg:py-22 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-justify mb-12 max-w-7xl mx-auto space-y-5">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#003C46] relative drop-shadow-md">
            Our Recent Projects
            <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-[#0098AF] to-transparent" />
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-gray-600 text-justify">
            Explore our latest work, crafted with precision and innovation.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-lg border border-gray-200 bg-white overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-[200px] sm:h-[250px] w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4 text-justify">
                <h3 className="text-2xl sm:text-2xl font-semibold text-[#003C46] tracking-tight">
                  {project.title}
                </h3>
                <p className="text-lg text-gray-600 py-2 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                <Link href={project.href}>
                  <Button
                    variant="outline"
                    className="bg-[#0098af] text-white hover:bg-white hover:text-black text-base transition-colors duration-200 border-2 border-transparent hover:border-[#0098af] hover:outline hover:outline-2 hover:outline-[#0098af]"
                  >
                    View Project
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
