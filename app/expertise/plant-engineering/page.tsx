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
import { IconType } from "react-icons"; // Added for icon typing
import { services, faqs } from "./constants";

// Define Service type
interface Service {
  icon: IconType;
  title: string;
  description: string;
  image: string;
  alt: string;
  href: string;
}

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const ServiceCard = ({ service }: { service: Service }) => {
  return (
    <div className="group relative h-[300px] rounded-lg overflow-hidden cursor-pointer">
      <Image
        src={service.image}
        alt={service.title}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />

      <div className="absolute top-4 left-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center z-10">
        <service.icon className="w-5 h-5 text-primary" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#003C46]/90 via-[#00A4B4]/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-xl font-semibold mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
            {service.title}
          </h3>
          <p className="text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
            {service.description}
          </p>
          <Link
            href={service.href}
            className="inline-block bg-white text-[#00A4B4] px-4 py-2 rounded-md font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200 hover:bg-white/90"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function EngineeringExpertise() {
  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      <MegaMenu />
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1581094794329-c8112c4e5190?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
          alt="Engineering Expertise"
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
                href="/expertise"
                className="hover:text-primary-foreground/80"
              >
                Expertise
              </Link>
              <FiChevronRight />
              <span>Plant Engineering</span>
            </nav>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4"
              {...fadeIn}
            >
              Plant Engineering Expertise
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-center max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Innovative engineering solutions for complex challenges
            </motion.p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-[#F5FDFF]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#003C46]">
                Plant Engineering Solutions
              </h2>
              <p className="text-lg text-[#4A4A4A] mb-6">
                At Cognition IES, we help industries build smarter, safer, and
                more efficient plants. From designing machinery and piping
                systems to optimizing energy use and safety compliance, we cover
                everything needed to keep your plant running smoothly. Whether
                you&apos;re setting up a new facility or upgrading an existing one,
                our team ensures seamless operations with practical,
                cost-effective solutions.
              </p>
              <p className="text-lg text-[#4A4A4A]">Description 2</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative h-[400px]"
            >
              <Image
                src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Engineering expertise"
                fill
                className="object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-16 lg:py-20 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#003C46]">
              Our Plant Engineering Services
            </h2>
            <p className="text-lg text-[#4A4A4A] max-w-7xl mx-auto">
              Comprehensive engineering solutions tailored to your specific
              needs
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 sm:py-16 lg:py-24 bg-[#F5FDFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-[#003C46]">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-[#4A4A4A] max-w-7xl mb-10 mx-auto">
              Find answers to common questions about our engineering services
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-7xl space-y-4 mx-auto"
          >
            <Accordion type="single" collapsible className="text-[#4A4A4A]">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-[#99D5DF]/20"
                >
                  <AccordionTrigger className="text-left text-base sm:text-lg lg:text-xl hover:text-[#00A4B4]">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#4A4A4A] text-base leading-relaxed pt-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}