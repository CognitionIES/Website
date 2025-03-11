"use client";

import ServiceSidebar from "../ServiceSidebar";
import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
import Footer from "@/components/footer";
import Content from "./content";
import Hero from "./hero";

export default function Page() {
  return (
    <div>
        <MegaMenu />
      <section>
        <Hero />
      </section>
      <section className="py-12">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#0098AF] drop-shadow-md animate-fadeIn">
        Engineering Excellence
        </h2>
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-6">
          <Content />
          <div className="lg:w-2/5">
            <ServiceSidebar />
          </div>
        </div>
        <div className="absolute top-1/4 right-10 w-16 h-16 bg-[#0098AF] rounded-full blur-md animate-float z-100" />
      </section>
      <Footer />
    </div>
  );
}