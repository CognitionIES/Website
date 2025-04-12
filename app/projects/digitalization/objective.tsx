"use client";
import objectiveImage from "@/constants/images/projects/objective.jpg";
import Image from "next/image";

export default function Objective() {
  return (
    <div>
      <section className="w-full py-6 sm:py-10 lg:py-6 relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative hidden md:block h-[350px] rounded-xl shadow-md overflow-hidden">
            <Image
              src={objectiveImage}
              alt="Engineering services"
              width={300}
              height={500}
              className="w-full h-full object-cover"
            />
            {/* Overlay text on top of the image */}
            <div className="absolute inset-0 bg-black/40 flex flex-col p-6">
              <div className="w-full flex justify-end">
                <div className="w-[58%]">
                  <h3 className="text-3xl font-semibold uppercase text-white mb-2">
                    🎯 Objective
                  </h3>
                  <p className="text-white/90 text-lg ">
                    To transform a traditionally operated manufacturing plant
                    into a data-driven, smart facility by implementing advanced
                    digital tools, real-time monitoring, and process
                    optimization systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-12 left-8 w-12 h-12 border-t border-l border-[#0098AF]/10" />
      </section>
    </div>
  );
}
