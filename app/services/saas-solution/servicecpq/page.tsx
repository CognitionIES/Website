"use client";

import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async"; // Import HelmetProvider
import Hero from "./hero";
import Features from "./features";
import Problems from "./problem";
import Benefits from "./benefits";
import Integration from "./integeration";
import CTA from "./CTA";
import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
import Footer from "@/components/footer";

const Index = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>ServiceCPQ - AI-Powered After-Sales Platform</title>
        <meta
          name="description"
          content="AI-powered platform unifying claims, CPQ, and repair workflows for comprehensive, unified after-sales management."
        />
      </Helmet>

      <MegaMenu />
      <Hero />
      <main className="overflow-hidden ">
        <Features />
        <Benefits />
        <Problems />
        <Integration />
        <CTA />
      </main>
      <Footer />
    </HelmetProvider>
  );
};

export default Index;
