import Footer from "@/components/footer";
//import Header from "@/components/ui/Header";
import Navbar from "@/components/ui/navbar";
//  import ExpertiseScrollSection from "@/components/ui/ExpertiseScrollSection";
import Hero from "@/components/ui/hero";
//import AboutUs from "@/components/AboutUs";
import frameBackground from "@/constants/images/Background/Frame_8.jpg"; 
// import { Accordion } from "@/components/ui/accordion";
import AccordionDemo from "@/components/AccordionDemo"
import ServicesSection from "@/components/ServicesSection";
//import Career from "@/components/Careers";
import Careers from "@/components/Careers";
import TestimonialSlider from "@/components/Testimonials";
import ServicesShowcase from "@/components/ServicesShowcase";
import { MegaMenu } from "@/components/ui/MegaMenu";



export default function Home() {
  return (
    <div>
    < MegaMenu />
    <div 
      className=" gap-16 font-[family-name:var(--font-geist-sans)] bg-cover bg-center"
      style={{  
        backgroundImage: `url(${frameBackground.src})`, // Dynamically load the image
      }} 
      >
    <div className="min-h-screen  gap-16 font-[family-name:var(--font-geist-sans)]">
      {/* Header */}
      <div className="">
      </div>
      <div className=" flex flex-col gap-16  items-center sm:items-start w-full">
          <Hero /> 
      </div>
      <section className="">
        <ServicesSection />
      </section>
      <section>
        <ServicesShowcase />
      </section>
      
      <section className=" bg-white">
        <TestimonialSlider />
      </section>
      
      <section>
        <Careers />
      </section>

      <section>
        <AccordionDemo />
      </section>
      
    </div>
      {/* Footer */}
      <footer className=" gap-6 items-center justify-center mt-auto">
        <Footer />
      </footer>
    </div>
    </div>
  );
}

