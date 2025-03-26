"use client";

import React from "react";
import Hero from "./hero";
import Features from "./features";
import Problems from "./problem";
import Benefits from "./benefits";
import Integration from "./integeration";
import CTA from "./CTA";
import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
import Footer from "@/components/footer";
import VideoShowcase from "./videoShowcase";

const Index = () => {
  return (
    <div>
      <MegaMenu />
      <Hero />
      <main className="overflow-hidden ">
        <Features />
        <VideoShowcase />
        <Benefits />
        <Problems />
        <Integration />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
