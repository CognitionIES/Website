"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FiHome,
  FiChevronRight,
  FiTool,
  FiActivity,
  FiZap,
  FiDroplet,
  FiPrinter,
  FiDatabase,
  FiCpu,
  FiBook,
  FiTruck,
} from "react-icons/fi";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MegaMenu } from "@/components/ui/MegaMenu";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const ServiceCard = ({ service }) => {
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

      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-xl font-semibold mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
            {service.title}
          </h3>
          <p className="text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
            {service.description}
          </p>
          <Link
            href={service.href}
            className="inline-block bg-white text-primary px-4 py-2 rounded-md font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200 hover:bg-white/90"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function EngineeringExpertise() {
  const services = [
    {
      icon: FiTool,
      title: "Mechanical Design Services",
      description:
        "Comprehensive mechanical design solutions including 3D modeling, simulation, and optimization",
      image:
        "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      href: "/expertise?section=mechanical",
    },
    {
      icon: FiActivity,
      title: "CAE/CFD",
      description:
        "Advanced computational analysis for engineering design and fluid dynamics",
      image:
        "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      href: "/expertise?section=cae-cfd",
    },
    {
      icon: FiZap,
      title: "Electrical Engineering Services",
      description:
        "Innovative electrical system design and power distribution solutions",
      image:
        "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      href: "/expertise?section=electrical",
    },
    {
      icon: FiDroplet,
      title: "Hydraulic Engineering Services",
      description: "Expert hydraulic system design and fluid power solutions",
      image:
        "https://images.unsplash.com/photo-1574786577067-860e56200f3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      href: "/expertise?section=hydraulic",
    },
    {
      icon: FiPrinter,
      title: "Prototyping and 3D Printing",
      description: "Rapid prototyping and additive manufacturing services",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      href: "/expertise?section=prototyping",
    },
    {
      icon: FiDatabase,
      title: "Asset Management",
      description: "Comprehensive asset lifecycle management and optimization",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      href: "/expertise?section=asset-management",
    },
    {
      icon: FiCpu,
      title: "Embedded Systems Engineering",
      description: "Custom embedded solutions and IoT device development",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      href: "/expertise?section=embedded-systems",
    },
    {
      icon: FiBook,
      title: "Technical Publication",
      description: "Professional technical documentation and manual creation",
      image:
        "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      href: "/expertise?section=technical-publication",
    },
    {
      icon: FiTruck,
      title: "Supply Chain Management/Procurement",
      description:
        "End-to-end supply chain optimization and procurement services",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      href: "/expertise?section=supply-chain",
    },
  ];

  const faqs = [
    {
      question: "What types of engineering services do you offer?",
      answer:
        "We offer a comprehensive range of engineering services including mechanical design, CAE/CFD analysis, electrical engineering, hydraulic systems, prototyping, embedded systems, and more. Our expertise spans across multiple engineering disciplines to provide complete solutions.",
    },
    {
      question: "How do you ensure quality in engineering projects?",
      answer:
        "We maintain strict quality control measures throughout our engineering processes. This includes detailed design reviews, simulation and testing, prototype validation, and adherence to industry standards and best practices. Our team of experienced engineers ensures that all deliverables meet the highest quality standards.",
    },
    {
      question: "What industries do you serve?",
      answer:
        "We serve a wide range of industries including automotive, aerospace, manufacturing, energy, healthcare, and consumer products. Our engineering expertise is adaptable to various sectors, allowing us to deliver specialized solutions for specific industry needs.",
    },
    {
      question:
        "Can you handle both small and large-scale engineering projects?",
      answer:
        "Yes, we have the capability to handle projects of any scale. From small component design to large-scale system integration, our team can adapt our resources and expertise to meet your project requirements while maintaining the same level of quality and attention to detail.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
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
        <div className="absolute inset-0 bg-black/50" />
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
              <span>Engineering Services</span>
            </nav>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4"
              {...fadeIn}
            >
              Product Engineering Expertise
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
      <section className="py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-calibri ">
                Comprehensive Engineering Solutions
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our engineering expertise spans across multiple disciplines,
                providing innovative solutions for complex technical challenges.
                We combine cutting-edge technology with proven methodologies to
                deliver exceptional results.
              </p>
              <p className="text-lg text-muted-foreground">
                From concept to implementation, we work closely with you to
                ensure your engineering projects are executed with precision and
                excellence.
              </p>
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
      <section className="py-12 md:py-16 lg:py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Engineering Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
      <section className="py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our engineering services
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <Accordion type="single" collapsible>
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
