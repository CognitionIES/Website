"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiHome, FiChevronRight } from "react-icons/fi";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MegaMenu } from "@/components/ui/MegaMenu";
import Footer from "@/components/footer";

import { services, faqs } from "./constants";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const ServiceCard = ({ service }) => (
  <div className="group relative h-[300px] rounded-lg overflow-hidden cursor-pointer">
    <Image
      src={service.image}
      alt={service.title}
      fill
      className="object-cover transition-transform duration-300 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-[#003C46]/90 via-[#00A4B4]/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
        <p className="text-sm mb-4">{service.description}</p>
        <Link
          href={service.href}
          className="inline-block bg-white text-[#00A4B4] px-4 py-2 rounded-md font-medium hover:bg-white/90"
        >
          Learn More
        </Link>
      </div>
    </div>
  </div>
);

export default function MobilityIndustry() {
  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      <MegaMenu />
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1581094794329-c8112c4e5190?auto=format&fit=crop&w=2000&q=80"
          alt="Mobility Industry"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#003C46]/90 to-[#00A4B4]/80" />
        <div className="absolute inset-0 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="h-full flex flex-col justify-center items-center text-white">
            <nav className="self-start mb-8 flex items-center space-x-2">
              <Link
                href="/"
                className="hover:text-primary-foreground/80 flex items-center"
              >
                <FiHome className="mr-1" /> Home
              </Link>
              <FiChevronRight />
              <Link
                href="/industries"
                className="hover:text-primary-foreground/80"
              >
                Industries
              </Link>
              <FiChevronRight />
              <span>Mobility</span>
            </nav>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4"
              {...fadeIn}
            >
              Driving the Future of Mobility
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-center max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Smart, efficient, and sustainable solutions for modern
              transportation.
            </motion.p>
          </div>
        </div>
        {/* <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4">
          <nav className="mb-8 flex items-center space-x-2">
            <Link
              href="/"
              className="hover:text-primary-foreground/80 flex items-center"
            >
              <FiHome className="mr-1" /> Home
            </Link>
            <FiChevronRight />
            <Link
              href="/industries"
              className="hover:text-primary-foreground/80"
            >
              Industry
            </Link>
            <FiChevronRight />
            <span>Mobility</span>
          </nav>
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-center mb-4"
            {...fadeIn}
          >
            Driving the Future of Mobility
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-center max-w-2xl"
            {...fadeIn}
          >
            Smart, efficient, and sustainable solutions for modern
            transportation.
          </motion.p>
        </div> */}
      </div>

      {/* About Section */}
      <section className="py-12 md:py-16 bg-[#F5FDFF]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#003C46]">
                Mobility Industry Solutions
              </h2>
              <p className="text-lg text-[#4A4A4A] mb-4">
                We engineer smarter ways to move people and goods. Our solutions
                enhance efficiency, sustainability, and safety in
                transportation.
              </p>
              <p className="text-lg text-[#4A4A4A]">
                From electric vehicles and aerospace to rail and marine, we
                create next-gen mobility solutions tailored for the future.
              </p>
            </motion.div>
            <motion.div {...fadeIn} className="relative h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1000&q=80"
                alt="Mobility Solutions"
                fill
                className="object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-16 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div {...fadeIn} className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#003C46]">
              Our Mobility Engineering Services
            </h2>
            <p className="text-lg text-[#4A4A4A]">
              Innovative solutions for automotive, aerospace, rail, marine, and
              logistics.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                {...fadeIn}
                transition={{ delay: index * 0.1 }}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 bg-[#F5FDFF]">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#003C46]">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-[#4A4A4A]">
              Quick answers about our mobility engineering solutions.
            </p>
          </motion.div>
          <motion.div {...fadeIn}>
            <Accordion type="single" collapsible className="text-[#4A4A4A]">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-[#99D5DF]/20"
                >
                  <AccordionTrigger className="text-lg hover:text-[#00A4B4]">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#4A4A4A] text-base pt-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
