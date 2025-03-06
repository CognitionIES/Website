// This file holds all constants for the plant engineering page
import {
    Wrench,
    FlaskRound as Flask,
    Baseline as Pipeline,
    Building2,
    Fan,
    Gauge,
    ShieldCheck,
    Leaf,
    Cpu,
    ClipboardList,
  } from "lucide-react";
  import { IconType } from "react-icons"; // For icon typing
  
  // Define what a service looks like
  interface Service {
    icon: IconType;
    title: string;
    description: string;
    image: string;
    alt: string;
    href: string;
  }
  
  export const PLANT_ENGINEERING_CONSTANTS = {
    // Hero Section
    HERO: {
      IMAGE: "https://images.unsplash.com/photo-1581094794329-c8112c4e5190?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      TITLE: "Plant Engineering Expertise",
      SUBTITLE: "Innovative engineering solutions for complex challenges",
    },
  
    // About Section
    ABOUT: {
      TITLE: "Plant Engineering Solutions",
      DESCRIPTION_1: "At Cognition IES, we help industries build smarter, safer, and more efficient plants. From designing machinery and piping systems to optimizing energy use and safety compliance, we cover everything needed to keep your plant running smoothly. Whether you're setting up a new facility or upgrading an existing one, our team ensures seamless operations with practical, cost-effective solutions.",
      DESCRIPTION_2: "Description 2", // Placeholder from your code
      IMAGE: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    },
  
    // Services Section
    SERVICES: {
      TITLE: "Our Plant Engineering Services",
      SUBTITLE: "Comprehensive engineering solutions tailored to your specific needs",
      ITEMS: [
        {
          icon: Wrench,
          title: "Mechanical & Electrical Engineering Services",
          description: "Designing and optimizing plant machinery, power systems, and automation to keep operations smooth and reliable.",
          image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Industrial machinery and control systems",
          href: "/expertise?section=mechanical",
        },
        {
          icon: Flask,
          title: "Process Engineering Services",
          description: "Improving industrial processes to boost efficiency, reduce waste, and meet safety standards.",
          image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Industrial process control system",
          href: "/expertise?section=cae-cfd",
        },
        {
          icon: Pipeline,
          title: "Piping & Fluid System Services",
          description: "Ensuring safe and efficient flow of liquids and gases with well-designed piping and fluid handling systems",
          image: "https://images.unsplash.com/photo-1507337272725-eec743fbdc31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Industrial piping system",
          href: "/expertise?section=electrical",
        },
        {
          icon: Building2,
          title: "Civil & Structural Engineering Services",
          description: "Building strong, stable, and durable plant structures that stand the test of time",
          image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
          alt: "Industrial building structure",
          href: "/expertise?section=hydraulic",
        },
        {
          icon: Fan,
          title: "HVAC & Ventilation System Services",
          description: "Creating energy-efficient heating, cooling, and ventilation systems for a comfortable and safe work environment",
          image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
          alt: "Industrial HVAC system",
          href: "/expertise?section=prototyping",
        },
        {
          icon: Gauge,
          title: "Instrumentation Engineering Services",
          description: "Integrating smart sensors and control systems to monitor and automate plant processes with precision",
          image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
          alt: "Industrial control panel",
          href: "/expertise?section=asset-management",
        },
        {
          icon: ShieldCheck,
          title: "Safety & Compliance Services",
          description: "Making sure your plant meets all safety regulations while minimizing risks and hazards",
          image: "https://images.unsplash.com/photo-1552879890-3a06dd3a06c2?q=80&w=2154&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Industrial safety equipment",
          href: "/expertise?section=embedded-systems",
        },
        {
          icon: Leaf,
          title: "Energy Management & Sustainability Services",
          description: "Helping plants reduce energy costs and adopt eco-friendly practices for a greener future",
          image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
          alt: "Sustainable industrial facility",
          href: "/expertise?section=technical-publication",
        },
        {
          icon: Cpu,
          title: "Digitalization & Industry 4.0 Services",
          description: "Upgrading plants with IoT, AI, and automation to improve performance and decision-making",
          image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
          alt: "Industrial automation system",
          href: "/expertise?section=supply-chain",
        },
        {
          icon: ClipboardList,
          title: "Project Management",
          description: "Overseeing plant engineering projects from start to finish, ensuring everything is on time and within budget",
          image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
          alt: "Project management meeting",
          href: "/expertise?section=supply-chain",
        },
      ] as Service[],
    },
  
    // FAQ Section
    FAQ: {
      TITLE: "Frequently Asked Questions",
      SUBTITLE: "Find answers to common questions about our engineering services",
      ITEMS: [
        {
          question: "What is plant engineering, and why is it important?",
          answer: "Plant engineering covers everything needed to design, build, and maintain industrial plants. It ensures smooth operations, safety compliance, and efficiency, helping businesses reduce downtime and operational costs.",
        },
        {
          question: "What industries do you serve?",
          answer: "We work across industries like automotive, aerospace, heavy machinery, energy, healthcare, and manufacturing. Our expertise allows us to create tailored solutions for various plant operations.",
        },
        {
          question: "Can you help upgrade an existing plant?",
          answer: "Yes! We specialize in modernizing plants by upgrading machinery, automation systems, energy management, and safety protocols to meet current industry standards.",
        },
        {
          question: "Do you offer digital solutions for plant management?",
          answer: "Yes! Our Digitalization & Industry 4.0 services use IoT, AI, and automation to enhance real-time monitoring, predictive maintenance, and process optimization for seamless plant operations.",
        },
        {
          question: "What is your approach to project management in plant engineering?",
          answer: "We manage projects end-to-end, covering planning, design, execution, and final testing. Our structured approach ensures timely completion while staying within budget and meeting all requirements.",
        },
        {
          question: "Can you customize your solutions for our plant’s needs?",
          answer: "Absolutely! We provide tailored plant engineering solutions to align with your specific requirements, ensuring maximum efficiency, safety, and cost-effectiveness.",
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