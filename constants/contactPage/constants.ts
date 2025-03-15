// This file holds all constants for the contact page
export const CONTACT_CONSTANTS = {
  // Hero Section
  HERO: {
    IMAGE: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d",
    TITLE: "Contact Us",
    SUBTITLE:
      "Reach out to us—we’re here to collaborate and turn your ideas into reality.",
  },

  // Contact Section
  CONTACT: {
    TITLE: "Get in Touch",
    DESCRIPTION:
      "We’d love to hear from you. Whether you have a question, a project idea, or just want to say hello, feel free to reach out.",
    LOCATION: {
      TITLE: "Our Location",
      ADDRESS: "123 ABC, DEF HIJ, JKLM 9999",
    },
    PHONE: {
      TITLE: "Toll Free Phone No.",
      NUMBERS: ["1800 800 9000"],
    },
    EMAIL: {
      TITLE: "Email",
      ADDRESS: "info@cognitionies.com",
    },
  },

  // Map Section
  MAP: {
    EMBED_URL:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0977907225282!2d-122.41941708468204!3d37.77492997975892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sTwitter+HQ!5e0!3m2!1sen!2us!4v15232382295",
  },

  // Animation Variants
  ANIMATIONS: {
    STAGGER_CHILDREN: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.3, delayChildren: 0.2 },
      },
    },
  },
};
