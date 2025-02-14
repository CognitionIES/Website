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
    quote:
      "Three words that come to my mind when I talk about LTTS are trust, collaboration, and respect. The team has consistently shown their commitment to excellence.",
    author: "Peter Thomson",
    position: "General Manager, European Technical Center One",
    company: "Komatsu",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&q=80",
  },
  {
    quote:
      "Every time we approach LTTS, they are very quick to adapt to a changing environment in a collaborative way. Their expertise has been invaluable to our success.",
    author: "Kalpak Patankar",
    position: "Director of Product Development - Interior Systems",
    company: "Marelli",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80",
  },
  {
    quote:
      "The level of technical expertise and professionalism demonstrated by the team is outstanding. They've become an integral part of our development process.",
    author: "Sarah Chen",
    position: "VP of Engineering",
    company: "TechCorp Global",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&q=80",
  },
  {
    quote:
      "Working with this team has transformed our approach to innovation. Their attention to detail and commitment to quality is exceptional.",
    author: "Michael Rodriguez",
    position: "Chief Innovation Officer",
    company: "InnovaTech Solutions",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&q=80",
  },
];

export default function TestimonialSlider() {
  return (
    <section className="w-full bg-[#F8F8F8] py-12 sm:py-16 lg:py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl max-w-7xl mx-auto  sm:px-6 lg:px-2 font-semibold text-[#1a237e] mb-8">
        What our clients say
      </h1>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-7xl mx-auto"
      >
        <CarouselContent className="-ml-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 pl-4">
              <Card className="bg-[#002B3F] text-white border-none h-full">
                <CardContent className="p-10">
                  <div className="space-y-8">
                    <blockquote className="text-[#4CD0E0] text-xl leading-relaxed min-h-[120px]">
                      "{testimonial.quote}"
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
                        <p className="text-[#4CD0E0] text-sm">{testimonial.company}</p>
                      </div>
                    </div>
                    <button className="bg-[#23dce1] text-black px-6 py-2 rounded-md hover:bg-white  transition-all">
                      Watch Video
                    </button>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex items-center gap-4 mt-6">
          <CarouselPrevious className="relative inset-0 translate-y-0 h-10 w-10 border-2 border-[#1a237e] bg-white hover:bg-gray-50 text-[#1a237e] rounded-none hover:scale-105 transition-all duration-300 hover:bg-[#23dce1]" />
          <CarouselNext className="relative inset-0 translate-y-0 h-10 w-10 border-2 border-[#1a237e] bg-white hover:bg-gray-50 text-[#1a237e] rounded-none hover:scale-105 transition-all duration-300 hover:bg-[#23dce1]"  />
        </div>
      </Carousel>
    </div>
    </section>
  );
}