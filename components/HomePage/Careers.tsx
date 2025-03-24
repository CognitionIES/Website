"use client";

// Careers section with image and call-to-action
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { CAREERS_CONSTANTS } from "@/constants/home/careers";

export default function Careers() {
  return (
    <section className="w-full py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-center">
          <div className="relative h-[200px] md:h-[350px]  rounded-xl shadow-lg overflow-hidden">
            <Image
              src={CAREERS_CONSTANTS.IMAGE}
              alt="Team collaborating in office"
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex flex-col space-y-4">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#003C46] drop-shadow-md">
                {CAREERS_CONSTANTS.TITLE}
              </h2>
              <h3 className="text-lg sm:text-xl lg:text-2xl text-justify font-semibold text-gray-600">
                {CAREERS_CONSTANTS.SUBTITLE}
              </h3>
            </div>
            <p className="text-base leading-relaxed  text-justify text-gray-600">
              {CAREERS_CONSTANTS.DESCRIPTION}
            </p>
            <Link href={CAREERS_CONSTANTS.BUTTON_HREF}>
              <Button className="bg-[#0098af] text-white hover:bg-white hover:text-black text-base transition-colors duration-200 border-2 border-transparent hover:border-[#0098af] hover:outline hover:outline-2 hover:outline-[#0098af]">
                {CAREERS_CONSTANTS.BUTTON_TEXT}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
