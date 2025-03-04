"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const testimonials = [
  {
    quote: "Trust, collaboration, and respect—these three words sum up our experience with Cognition IES. Their team consistently delivers engineering solutions with precision and dedication.",
    author: "Peter Thomson",
    position: "General Manager, European Technical Center One",
    company: "Komatsu",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&q=80",
  },
  {
    quote: "Cognition IES is the definition of agility. No matter how complex or fast-changing the project, they adapt seamlessly and always come through with innovative solutions.",
    author: "Kalpak Patankar",
    position: "Director of Product Development - Interior Systems",
    company: "Marelli",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80",
  },
  {
    quote: "Beyond their technical expertise, what stands out is their professionalism and ability to integrate smoothly into our development process. They've added immense value to our projects.",
    author: "Sarah Chen",
    position: "VP of Engineering",
    company: "TechCorp Global",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&q=80",
  },
  {
    quote: "Partnering with Cognition IES has completely changed how we approach innovation. Their attention to detail and commitment to quality is on another level.",
    author: "Michael Rodriguez",
    position: "Chief Innovation Officer",
    company: "InnovaTech Solutions",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&q=80",
  },
];

export default function TestimonialSlider() {
  return (
    <section className="w-full bg-gradient-to-b from-[#0098AF]/5 to-gray-50 py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#003C46] mb-4 drop-shadow-md">
          What Our Clients Say
        </h1>
        <p className="text-base leading-relaxed text-gray-600 mb-8">
          True partnerships go beyond contracts—they&apos;re built on trust, collaboration, and results. Our clients count on us to deliver precision, innovation, and engineering expertise that makes a real impact. Here&apos;s what they have to say:
        </p>
        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full max-w-7xl mx-auto"
        >
          <CarouselContent className="-ml-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 pl-4">
                <Card className="bg-[#003C46] text-white border-none h-full">
                  <CardContent className="p-10">
                    <div className="space-y-8">
                      <blockquote className="text-[#99D5DF] text-xl leading-relaxed min-h-[120px]">
                        &quot;{testimonial.quote}&quot;
                      </blockquote>
                      <div className="flex items-center gap-6">
                        <div className="relative w-20 h-20 rounded-full overflow-hidden">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.author}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold text-xl mb-1">{testimonial.author}</h3>
                          <p className="text-gray-300 text-sm mb-1">{testimonial.position}</p>
                          <p className="text-[#99D5DF] text-sm">{testimonial.company}</p>
                        </div>
                      </div>
                      <button className="bg-[#0098AF] text-white px-6 py-2 rounded-md hover:bg-[#007B8F] transition-all duration-200">
                        Watch Video
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex items-center gap-4 mt-6">
            <CarouselPrevious className="relative inset-0 translate-y-0 h-10 w-10 border-2 border-[#003C46] bg-white hover:bg-gray-50 text-[#003C46] rounded-none hover:scale-105 transition-all duration-300 hover:bg-[#0098AF] hover:text-white" />
            <CarouselNext className="relative inset-0 translate-y-0 h-10 w-10 border-2 border-[#003C46] bg-white hover:bg-gray-50 text-[#003C46] rounded-none hover:scale-105 transition-all duration-300 hover:bg-[#0098AF] hover:text-white" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}