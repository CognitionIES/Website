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
import {
  TESTIMONIALS,
  TESTIMONIALS_SECTION,
} from "@/constants/home/testimonials";

export default function TestimonialSlider() {
  return (
    <section className="w-full py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#003C46] mb-4 drop-shadow-md">
          {TESTIMONIALS_SECTION.TITLE}
        </h1>
        <p className="text-base leading-relaxed text-gray-600 mb-8">
          {TESTIMONIALS_SECTION.DESCRIPTION}
        </p>
        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full max-w-7xl mx-auto"
        >
          <CarouselContent className="-ml-4 gap-8">
            {TESTIMONIALS.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/2 pl-4"
              >
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
                            width={80}
                            height={80}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold text-xl mb-1">
                            {testimonial.author}
                          </h3>
                          <p className="text-gray-300 text-sm mb-1">
                            {testimonial.position}
                          </p>
                          <p className="text-[#99D5DF] text-sm">
                            {testimonial.company}
                          </p>
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
