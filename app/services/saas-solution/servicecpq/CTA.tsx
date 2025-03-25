/* eslint-disable react/jsx-no-comment-textnodes */
"use client";import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="py-20">
      <div className="container px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#003C46] mb-6">
            Try & Buy
          </h2>
          <p className="text-[#5b5b5b] text-lg">
            Whatever your service business&apos;s size or growth phase is, our
            pricing options include a mix of strategies and tactics specifically
            designed to deliver the best results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* <PricingCard
            title="Starter"
            description="Want to increase service sales but don't know how to get started? The starter pack is the right one for you. It is ideal for service-sales organizations with 20 to 30 users."
            price="$69"
            pricePeriod="/User/Month"
            priceSubtext="(INR 5700)"
            users="<16"
            buttonText="See more"
            buttonLink="/contact"
            gradient="from-[#0098af] to-[#003C46]"
          />

          <PricingCard
            title="Growth"
            description="Need help growing your service business? This pack is designed for you. The ideal number of service sales users is up to 50."
            price="$99"
            pricePeriod="/User/Month"
            priceSubtext="(INR 8300)"
            users="<29"
            buttonText="See more"
            buttonLink="/contact"
            gradient="from-[#0098af] to-[#003C46]"
          />

          <PricingCard
            title="Momentum"
            description="Need us to help you pick momentum? This pack is purpose-built for large-sized service organisations. Ideal for 40 to 70 – user service sales organisations."
            price="$129"
            pricePeriod="/User/Month"
            priceSubtext="(INR 10800)"
            users="<45"
            buttonText="See more"
            buttonLink="/contact"
            gradient="from-[#0098af] to-[#003C46]"
          />

          <PricingCard
            title="Enterprise"
            description="Need us to help you with everything from consulting to implementation to training? We'll build a package specific to your requirements."
            price="Talk to us for pricing"
            pricePeriod=""
            priceSubtext=""
            users="75+"
            buttonText="See more"
            buttonLink="/contact"
            gradient="from-[#0098af] to-[#003C46]"
          /> */}
          <h1>// CARDS WILL BE DISPLAYED HERE WITH PRICE TAGS SIMILAR TO THE WEBSITE</h1>
        </div>

        <div className="mt-20 bg-gradient-to-br from-[#0098af] to-[#003C46] rounded-xl p-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Get a Free Demo and Consultation
          </h2>
          <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
            See our AI-driven solutions in action! Our demo shows how you can
            automate, streamline, and enhance your service management.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-white text-[#003C46] px-6 py-3 rounded-md inline-flex items-center justify-center transition-all duration-300 border border-[#E6F0F5] hover:bg-[#E6F0F5]/50 focus:outline-none focus:ring-2 focus:ring-[#E6F0F5] focus:ring-offset-2;
  group">
              Book Your Free Demo
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <p className="text-white/80 self-center">No commitment required</p>
          </div>
        </div>
      </div>
    </section>
  );
};
/*
interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  pricePeriod: string;
  priceSubtext: string;
  users: string;
  buttonText: string;
  buttonLink: string;
  gradient: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  description,
  price,
  pricePeriod,
  priceSubtext,
  users,
  buttonText,
  buttonLink,
  gradient,
}) => {
  return (
    <div
      className={`rounded-xl overflow-hidden h-full flex flex-col bg-gradient-to-b ${gradient} text-white`}
    >
      <div className="p-6 text-center">
        <h3 className="text-2xl font-semibold mb-4">{title}</h3>
        <p className="mb-6 text-white/90 flex-grow">{description}</p>

        <div className="mb-4">
          <div className="flex items-center justify-center">
            <span className="text-2xl font-bold">{price}</span>
            <span className="text-white/80 ml-1">{pricePeriod}</span>
          </div>
          <p className="text-white/80 text-sm">{priceSubtext}</p>
        </div>

        <div className="mb-6">
          <p className="text-sm text-white/80"># of Users</p>
          <p className="text-4xl font-bold">{users}</p>
        </div>

        <Link
          href={buttonLink}
          className="inline-block bg-white text-[#0098af] px-6 py-3 rounded-md font-medium hover:bg-white/90 transition-colors"
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
};
*/
export default CTA;
