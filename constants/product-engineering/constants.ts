// This file holds all constants for the product engineering page
import {
  FiActivity,
  FiBook,
  FiCpu,
  FiDatabase,
  FiDroplet,
  FiPrinter,
  FiTool,
  FiTruck,
  FiZap,
} from "react-icons/fi";
import { IconType } from "react-icons";

// Define what a service looks like
interface Service {
  icon: IconType;
  title: string;
  description: string;
  image: string;
  alt: string;
  href: string;
}

export const PRODUCT_ENGINEERING_CONSTANTS = {
  // Hero Section
  HERO: {
    IMAGE: "https://images.unsplash.com/photo-1581094794329-c8112c4e5190?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
    TITLE: "Product Engineering services",
    SUBTITLE: "Innovative engineering solutions for complex challenges",
  },

  // About Section
  ABOUT: {
    TITLE: "Product Engineering Solutions",
    DESCRIPTION_1: "Our engineering services spans across multiple disciplines, providing innovative solutions for complex technical challenges. We combine cutting-edge technology with proven methodologies to deliver exceptional results.",
    DESCRIPTION_2: "From concept to implementation, we work closely with you to ensure your engineering projects are executed with precision and excellence.",
    IMAGE: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  },

  // Services Section
  SERVICES: {
    TITLE: "Our Product Engineering Services",
    SUBTITLE: "Comprehensive engineering solutions tailored to your specific needs",
    ITEMS: [
      {
        icon: FiTool,
        title: "Mechanical Design Services",
        description: "Comprehensive mechanical design solutions including 3D modeling, simulation, and optimization",
        image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        alt: "Mechanical design",
        href: "/services?section=mechanical",
      },
      {
        icon: FiActivity,
        title: "CAE/CFD",
        description: "Advanced computational analysis for engineering design and fluid dynamics",
        image: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        alt: "Mechanical design",
        href: "/services?section=cae-cfd",
      },
      {
        icon: FiZap,
        title: "Electrical Engineering Services",
        description: "Innovative electrical system design and power distribution solutions",
        image: "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        alt: "Mechanical design",
        href: "/services?section=electrical",
      },
      {
        icon: FiDroplet,
        title: "Hydraulic Engineering Services",
        description: "Expert hydraulic system design and fluid power solutions",
        image: "https://plus.unsplash.com/premium_photo-1682147307418-07ad7e897bc9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Mechanical design",
        href: "/services?section=hydraulic",
      },
      {
        icon: FiPrinter,
        title: "Prototyping and 3D Printing",
        description: "Rapid prototyping and additive manufacturing services",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        alt: "Mechanical design",
        href: "/services?section=prototyping",
      },
      {
        icon: FiDatabase,
        title: "Asset Management",
        description: "Comprehensive asset lifecycle management and optimization",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        alt: "Mechanical design",
        href: "/services?section=asset-management",
      },
      {
        icon: FiCpu,
        title: "Embedded Systems Engineering",
        description: "Custom embedded solutions and IoT device development",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        alt: "Mechanical design",
        href: "/services?section=embedded-systems",
      },
      {
        icon: FiBook,
        title: "Technical Publication",
        description: "Professional technical documentation and manual creation",
        image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        alt: "Mechanical design",
        href: "/services?section=technical-publication",
      },
      {
        icon: FiTruck,
        title: "Supply Chain Management/Procurement",
        description: "End-to-end supply chain optimization and procurement services",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        alt: "Mechanical design",
        href: "/services?section=supply-chain",
      },
    ] as Service[],
  },

  // FAQ Section
  FAQ: {
    TITLE: "Frequently Asked Questions",
    SUBTITLE: "Find answers to common questions about our engineering services",
    ITEMS: [
      {
        question: "What types of engineering services do you offer?",
        answer: "We offer a comprehensive range of engineering services including mechanical design, CAE/CFD analysis, electrical engineering, hydraulic systems, prototyping, embedded systems, and more. Our services spans across multiple engineering disciplines to provide complete solutions.",
      },
      {
        question: "How do you ensure quality in engineering projects?",
        answer: "We maintain strict quality control measures throughout our engineering processes. This includes detailed design reviews, simulation and testing, prototype validation, and adherence to industry standards and best practices. Our team of experienced engineers ensures that all deliverables meet the highest quality standards.",
      },
      {
        question: "What industries do you serve?",
        answer: "We serve a wide range of industries including automotive, aerospace, manufacturing, energy, healthcare, and consumer products. Our engineering services is adaptable to various sectors, allowing us to deliver specialized solutions for specific industry needs.",
      },
      {
        question: "Can you handle both small and large-scale engineering projects?",
        answer: "Yes, we have the capability to handle projects of any scale. From small component design to large-scale system integration, our team can adapt our resources and services to meet your project requirements while maintaining the same level of quality and attention to detail.",
      },
    ],
  },

  // Animation Variants
  ANIMATIONS: {
    FADE_IN: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5 },
    },
  },
};