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

//import mechImage from "@/constants/images/service/mech.png";
//import elecImage from "@/constants/images/service/elec.png";
//import caeImage from "@/constants/images/service/cae.png";
//import prototypingImage from "@/constants/images/service/prototyp.png";
//import hydraulicImage from "@/constants/images/service/hydraulic.png";
//import assetImage from "@/constants/images/service/asset.png";
//import embeddedImage from "@/constants/images/service/embedded.png";
//import techImage from "@/constants/images/service/technical.png";
//import supplyImage from "@/constants/images/service/supply.png";
import supplyImage1 from "@/constants/images/side-images/supply.jpg";
import mechImage1 from "@/constants/images/side-images/mech.jpg";
import elecImage1 from "@/constants/images/side-images/elec.jpg";
import protoImage1 from "@/constants/images/side-images/prototyping.jpg";
import hydraImage1 from "@/constants/images/side-images/hydraulic.jpg";
import assetImage1 from "@/constants/images/side-images/asset.jpg";
//import embeddedImage1 from "@/constants/images/side-images/embedded.jpg";
import caeImage1 from "@/constants/images/side-images/cae.png"
import techImage1 from "@/constants/images/side-images/tech.jpeg"
import aboutImage from "@/constants/images/product/about.jpg"
import embeddedImage2 from "@/constants/images/side-images/embedded-1.jpg"

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
    IMAGE:
      "https://images.unsplash.com/photo-1581094794329-c8112c4e5190?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
    TITLE: "Product Engineering services",
    SUBTITLE: "Innovative engineering solutions for complex challenges",
  },

  // About Section
  ABOUT: {
    TITLE: "Product Engineering Solutions",
    DESCRIPTION_1:
      "At the heart of innovation lies product engineering. Our Product Engineering Services are designed to transform ideas into market-ready solutions with precision and performance. From concept to commercialization, we help businesses accelerate development cycles, enhance product quality, and stay competitive in an ever-evolving marketplace. With a strong foundation in engineering principles and a future-focused mindset, we aim to drive smarter, more efficient product development at every stage.",
    DESCRIPTION_2:
      "We blend creativity with technical expertise to support every phase of the product journey. Our collaborative approach ensures alignment with your goals, delivering solutions that are both scalable and sustainable.",
    IMAGE:
    aboutImage,
  },

  // Services Section
  SERVICES: {
    TITLE: "Product Engineering Services",
    SUBTITLE:
      "Comprehensive engineering solutions tailored to your specific needs",
    ITEMS: [
      {
        icon: FiTool,
        title: "Mechanical Design Services",
        description: "Comprehensive mechanical design solutions including 3D modeling, simulation, & optimization",
        image: mechImage1,
        alt: "Mechanical design",
        href: "/services?section=mechanical",
      },

      {
        icon: FiZap,
        title: "Electrical Engineering Services",
        description: "Innovative electrical system design and power distribution solutions",
        image: elecImage1,
        alt: "Mechanical design",
        href: "/services?section=electrical",
      },
      {
        icon: FiActivity,
        title: "CAE/CFD",
        description: "Advanced computational analysis for engineering design and fluid dynamics",
        image: caeImage1,
        alt: "CAE/CFD Image",
        href: "/services?section=cae-cfd",
      },
      {
        icon: FiPrinter,
        title: "Prototyping and 3D Printing",
        description: "Rapid prototyping and additive manufacturing services",
        image: protoImage1,
        alt: "Prototyping and 3D Printing Image",
        href: "/services?section=prototyping",
      },
      {
        icon: FiDroplet,
        title: "Hydraulic Engineering Services",
        description: "Expert hydraulic system design and fluid power solutions",
        image: hydraImage1,
        alt: "Hydraulic Engineering Services Image",
        href: "/services?section=hydraulic",
      },

      {
        icon: FiDatabase,
        title: "Asset Management",
        description: "Comprehensive asset lifecycle management and optimization",
        image: assetImage1,
        alt: "Asset Management Image",
        href: "/services?section=asset-management",
      },
      {
        icon: FiCpu,
        title: "Embedded Systems Engineering",
        description: "Custom embedded solutions and IoT device development",
        image: embeddedImage2,
        alt: "Embedded Systems Engineering Image",
        href: "/services?section=embedded-systems",
      },
      {
        icon: FiBook,
        title: "Technical Publication",
        description: "Professional technical documentation and manual creation",
        image: techImage1,
        alt: "Technical Publication Image",
        href: "/services?section=technical-publication",
      },
      {
        icon: FiTruck,
        title: "Supply Chain Management",
        description: "End-to-end supply chain optimization and procurement services",
        image: supplyImage1,
        alt: "Mechanical design",
        href: "/services?section=supply-chain",
      },
    ] as unknown as Service[],
  },

  // FAQ Section
  FAQ: {
    TITLE: "Frequently Asked Questions",
    SUBTITLE: "Find answers to common questions about our engineering services",
    ITEMS: [
      {
        question: "What types of engineering services do you offer?",
        answer:
          "We offer a comprehensive range of engineering services including mechanical design, CAE/CFD analysis, electrical engineering, hydraulic systems, prototyping, embedded systems, and more. Our services spans across multiple engineering disciplines to provide complete solutions.",
      },
      {
        question: "How do you ensure quality in engineering projects?",
        answer:
          "We maintain strict quality control measures throughout our engineering processes. This includes detailed design reviews, simulation and testing, prototype validation, and adherence to industry standards and best practices. Our team of experienced engineers ensures that all deliverables meet the highest quality standards.",
      },
      {
        question: "What industries do you serve?",
        answer:
          "We serve a wide range of industries including automotive, aerospace, manufacturing, energy, healthcare, and consumer products. Our engineering services is adaptable to various sectors, allowing us to deliver specialized solutions for specific industry needs.",
      },
      {
        question:
          "Can you handle both small and large-scale engineering projects?",
        answer:
          "Yes, we have the capability to handle projects of any scale. From small component design to large-scale system integration, our team can adapt our resources and services to meet your project requirements while maintaining the same level of quality and attention to detail.",
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
