// This file holds all constants for the careers page
export const CAREERS_CONSTANTS = {
    // Hero Section
    HERO: {
      IMAGE: "/images/Careers.jpg", // Local image path (adjust as needed)
      TITLE: "Join Our Team",
      SUBTITLE: "Shape the future with us. We’re seeking passionate innovators to join our journey.",
    },
  
    // Values Section
    VALUES: {
      TITLE: "Our Values",
      ITEMS: [
        {
          title: "Co-Innovation",
          description: "Collaborating with clients to craft groundbreaking solutions.",
        },
        {
          title: "People-First Culture",
          description: "Empowering every voice to shape our success.",
        },
        {
          title: "Excellence in Execution",
          description: "Delivering precision and quality, every time.",
        },
        {
          title: "Sustainability & Responsibility",
          description: "Building greener solutions for a better tomorrow.",
        },
      ],
    },
  
    // Open Positions Section
    POSITIONS: {
      TITLE: "Open Positions",
      LOCATIONS: ["all", "India", "USA"], // Options for location filter
    },
  
    // Testimonials Section
    TESTIMONIALS: {
      TITLE: "Employee Testimonials",
    },
  
    // Benefits Section
    BENEFITS: {
      TITLE: "Why Work With Us",
      ITEMS: [
        {
          title: "Advanced Projects",
          description: "Work on cutting-edge engineering solutions that shape industries.",
        },
        {
          title: "Global Exposure",
          description: "Collaborate with international teams and clients across continents.",
        },
        {
          title: "Growth Opportunities",
          description: "Continuous learning and career advancement opportunities.",
        },
      ],
    },
  
    // Animation Variants (used across sections)
    ANIMATIONS: {
      STAGGER_CHILDREN: {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.2, delayChildren: 0.1 },
        },
      },
      CARD_HOVER: {
        rest: { y: 0, boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)" },
        hover: {
          y: -2,
          boxShadow: "0 6px 12px rgba(0, 152, 175, 0.1)",
          transition: { duration: 0.2 },
        },
      },
    },
  };