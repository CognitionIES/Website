'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Careers() {
  return (
    <section className="w-full bg-[#F8F8F8] py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-center">
          <div className="relative h-[200px] md:h-[350px] rounded-xl shadow-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
              alt="Team collaborating in office"
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
          
          <div className="flex flex-col space-y-4">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2C2C2C]">
                Join Our Team
              </h2>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#666666]">
                Build Your Career With Us
              </h3>
            </div>
            <p className="text-base leading-relaxed text-[#4A4A4A]">
              If you share our love for engineering and innovation, We'll provide you with all
              the tools and platforms to navigate your growth journey. Join us to engineer
              the change you envision!
            </p>
            <Button 
              className="bg-[#0066CC] text-white px-8 py-4 rounded-md hover:bg-[#0052a3] transition-colors duration-200 w-fit"
            >
              Explore Opportunities
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}