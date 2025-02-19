"use client";



import Footer from "@/components/footer";
import Navbar from "@/components/ui/navbar";
import OpenPositions from "@/components/CareerPage/openPositions";

import Hero from "@/components/CareerPage/Hero";
import Values from "@/components/CareerPage/Values";
import Testimonials from "@/components/CareerPage/Testimonials";
import WorkWithUs from "@/components/CareerPage/WorkWithUs";
import { MegaMenu } from "@/components/ui/MegaMenu";

export default function CareersPage() {

  return (
    <div className="min-h-screen bg-background"> 
      <MegaMenu />
      <Hero />
      <div className="">
        <Values />
        <OpenPositions />
        <Testimonials />
        <WorkWithUs/>
      </div>
      <Footer />
    </div>
  );
}


{/* CTA Section */}
{/* <section className="py-20 bg-primary text-primary-foreground">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-6">
      Ready to Shape the Future of Engineering?
    </h2>
    <Button
      size="lg"
      variant="secondary"
      className="text-primary"
      onClick={() =>
        document
          .getElementById("positions")
          ?.scrollIntoView({ behavior: "smooth" })
      }
    >
      Explore Careers
    </Button>
  </div>
</section> */}