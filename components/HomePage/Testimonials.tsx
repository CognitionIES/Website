import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

type Testimonial = {
  id: string;
  quote: string;
  author: string;
  position: string;
  company: string;
  image: string;
  videoUrl?: string;
};

const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    quote:
      "The team at Innovation with Purpose transformed our operations with their digital solutions. We've seen a 40% increase in efficiency and our team can now focus on what really matters.",
    author: "Sarah Johnson",
    position: "COO",
    company: "TechGrowth Inc.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2376&auto=format&fit=crop",
    videoUrl: "#",
  },
  {
    id: "testimonial-2",
    quote:
      "Their cost management strategies helped us identify opportunities we hadn't seen before. The ROI has been exceptional, and the implementation was smoother than we anticipated.",
    author: "Michael Chen",
    position: "CFO",
    company: "Global Systems",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2149&auto=format&fit=crop",
    videoUrl: "#",
  },
  {
    id: "testimonial-3",
    quote:
      "Working with their team was a seamless experience from start to finish. Their attention to detail and innovative approach helped us achieve our goals ahead of schedule.",
    author: "Elena Rodriguez",
    position: "VP of Operations",
    company: "Nexus Enterprises",
    image:
      "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=2187&auto=format&fit=crop",
  },
];

const Testimonials = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-16 sm:py-20 lg:py-24 relative overflow-hidden"
      style={{
        backgroundImage:
          "radial-gradient(circle at 90% 10%, rgba(0, 152, 175, 0.05) 0%, transparent 30%), radial-gradient(circle at 10% 90%, rgba(91, 91, 91, 0.05) 0%, transparent 30%)",
      }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 right-0 w-64 h-64 rounded-full bg-[#0098af] opacity-5 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.08, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#5b5b5b] opacity-5 blur-3xl"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.05, 0.07, 0.05],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
        />
        <div className="absolute w-full h-full bg-dot-pattern bg-[length:20px_20px] opacity-[0.03]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Section header with animation */}
        <div className="inline-block mb-2 px-3 py-1 bg-[#E6F0F5] bg-opacity-70 rounded-full backdrop-blur-sm">
          <p className="text-xs font-medium tracking-wider text-[#0098af] uppercase">
            Client Feedback
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12 max-w-3xl"
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#003C46] mb-4 reveal-line inline-block">
            What Our Clients Say
          </h2>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl">
            Discover how our solutions have transformed businesses and created
            lasting impact, directly from the leaders who partner with us.
          </p>
        </motion.div>

        {/* Testimonials carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
              containScroll: "trimSnaps",
            }}
            className="w-full max-w-7xl mx-auto"
          >
            <CarouselContent className="-ml-4 md:-ml-6">
              {testimonials.map((testimonial) => (
                <CarouselItem
                  key={testimonial.id}
                  className={cn(
                    "pl-4 md:pl-6",
                    isMobile ? "basis-full" : "basis-1/2"
                  )}
                >
                  <Card className="bg-white border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 h-full overflow-hidden">
                    <CardContent className="p-0">
                      <div className="relative h-full flex flex-col">
                        {/* Top accent border with gradient */}
                        <div className="h-1.5 w-full bg-gradient-to-r from-[#0098af] to-[#0098af]/20"></div>

                        {/* Quote icon in absolute position */}
                        <div className="absolute top-6 right-6 text-[#0098af]/10">
                          <Quote size={80} strokeWidth={1} />
                        </div>

                        <div className="p-8 flex flex-col h-full z-10">
                          {/* Quote text */}
                          <blockquote className="text-gray-700 text-lg italic mb-8 relative min-h-[120px] flex-grow">
                            &quot;{testimonial.quote}. &quot;
                          </blockquote>

                          {/* Author info with avatar */}
                          <div className="flex items-center gap-4 mt-auto">
                            <Avatar className="h-14 w-14 border-2 border-[#E6F0F5] shadow-sm">
                              <AvatarImage
                                src={testimonial.image}
                                alt={testimonial.author}
                              />
                              <AvatarFallback className="bg-[#0098af] text-white">
                                {testimonial.author
                                  .split(" ")
                                  .map((name) => name[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>

                            <div>
                              <h3 className="font-semibold text-[#003c46]">
                                {testimonial.author}
                              </h3>
                              <p className="text-gray-500 text-sm">
                                {testimonial.position}
                              </p>
                              <p className="text-[#0098af] text-sm font-medium">
                                {testimonial.company}
                              </p>
                            </div>
                          </div>

                          {/* Video button - only shown if videoUrl exists */}
                          {/* {testimonial.videoUrl && (
                            <div className="mt-6">
                              <Button
                                variant="outline"
                                className="rounded-full px-5 py-2 h-auto border-[#0098af]/30 hover:border-[#0098af] text-[#0098af] hover:bg-[#0098af]/5 transition-all duration-300"
                              >
                                <Play size={16} className="mr-2" />
                                <span>Watch Video</span>
                              </Button>
                            </div>
                          )} */}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Custom navigation controls */}
            <div className="flex items-center justify-end gap-3 mt-8">
              <CarouselPrevious
                className="relative inset-0 translate-y-0 h-10 w-10 rounded-full border-[#0098af]/20 hover:bg-[#0098af]/10 hover:border-[#0098af] transition-colors duration-300"
                variant="outline"
                size="icon"
              />
              <CarouselNext
                className="relative inset-0 translate-y-0 h-10 w-10 rounded-full border-[#0098af]/20 hover:bg-[#0098af]/10 hover:border-[#0098af] transition-colors duration-300"
                variant="outline"
                size="icon"
              />
            </div>
          </Carousel>
        </motion.div>

        {/* Subtle divider with gradient */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={
            isInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }
          }
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 h-px w-full max-w-2xl mx-auto bg-gradient-to-r from-transparent via-[#0098af]/30 to-transparent"
        />
      </div>
    </section>
  );
};

export default Testimonials;
