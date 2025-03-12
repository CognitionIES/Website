// This file holds all constants for the plant engineering page
import {
    Wrench,
    FlaskRound as Flask,
    Baseline as Pipeline,
    Building2,
    Fan,
    Gauge,
    ShieldCheck,
    
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
          icon: ShieldCheck,
          title: "Process & Safety Engineering",
          description: "Enhancing plant processes and ensuring compliance with safety standards to minimize risks and improve efficiency.",
          image: "https://images.unsplash.com/photo-1581091012184-5e0e349d1b5e?auto=format&fit=crop&w=1200&q=80",
          alt: "Process safety equipment",
          href: "/expertise/plant-engineering/process-and-safety",
        },
        {
          icon: Wrench,
          title: "Mechanical Engineering",
          description: "Designing and maintaining robust mechanical systems for optimal plant performance and reliability.",
          image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80",
          alt: "Mechanical engineering tools",
          href: "/expertise/plant-engineering/mechanical",
        },
        {
          icon: Pipeline,
          title: "Piping Engineering",
          description: "Crafting efficient piping systems for the safe transport of fluids and gases throughout the plant.",
          image: "https://images.unsplash.com/photo-1507337272725-eec743fbdc31?auto=format&fit=crop&w=1200&q=80",
          alt: "Piping engineering layout",
          href: "/expertise/plant-engineering/piping",
        },
        {
          icon: Gauge,
          title: "Piping Stress Analysis",
          description: "Analyzing piping systems to ensure structural integrity under various operating conditions.",
          image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=1200&q=80",
          alt: "Piping stress analysis dashboard",
          href: "/expertise/plant-engineering/piping-stress-analysis",
        },
        {
          icon: Building2,
          title: "Civil Engineering",
          description: "Providing foundational civil engineering solutions for durable and safe plant infrastructure.",
          image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80",
          alt: "Civil engineering construction",
          href: "/expertise/plant-engineering/civil",
        },
        {
          icon: Building2,
          title: "Structural Engineering",
          description: "Designing strong, stable structures to support plant operations and withstand environmental challenges.",
          image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
          alt: "Structural engineering framework",
          href: "/expertise/plant-engineering/structural",
        },
        {
          icon: Fan,
          title: "Electrical Engineering",
          description: "Implementing reliable electrical systems to power plant operations efficiently and safely.",
          image: "https://images.unsplash.com/photo-1581094282220-1e7b2b35b7b8?auto=format&fit=crop&w=1200&q=80",
          alt: "Electrical engineering panel",
          href: "/expertise/plant-engineering/electrical",
        },
        {
          icon: Gauge,
          title: "Instrumentation Engineering",
          description: "Integrating advanced instrumentation for precise monitoring and control of plant processes.",
          image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=1200&q=80",
          alt: "Instrumentation control system",
          href: "/expertise/plant-engineering/instrumentation",
        },
        {
          icon: Cpu,
          title: "Modular Package",
          description: "Delivering pre-engineered modular solutions for faster installation and operational flexibility.",
          image: "https://images.unsplash.com/photo-1581093458791-89b6f8c3b962?auto=format&fit=crop&w=1200&q=80",
          alt: "Modular plant package",
          href: "/expertise/plant-engineering/modular-package",
        },
        {
          icon: Flask,
          title: "Reverse Engineering",
          description: "Analyzing existing systems to recreate or improve designs for enhanced performance.",
          image: "https://images.unsplash.com/photo-1581092919530-5957b3129a36?auto=format&fit=crop&w=1200&q=80",
          alt: "Reverse engineering process",
          href: "/expertise/plant-engineering/reverse-engineering",
        },
        {
          icon: ClipboardList,
          title: "Procurement Support",
          description: "Streamlining procurement processes to source quality materials and equipment on time and within budget.",
          image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=1200&q=80",
          alt: "Procurement planning meeting",
          href: "/expertise/plant-engineering/procurement-support",
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