// Constants for the About page to keep content and assets modular and reusable
export const ABOUT_CONSTANTS = {
  // Image URLs
  IMAGES: {
    HERO_IMAGE: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
    STORY_IMAGE: "https://images.unsplash.com/photo-1516321497487-e288fb19713f",
    MISSION_VISION_BG:
      "https://images.unsplash.com/photo-1476304884326-cd2c88572c5f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    TECH_PATTERN: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
    KEY_VALUES: [
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
      "https://images.unsplash.com/photo-1551288049-341cbeb25138",
    ],
  },

  // Text Content
  TEXT: {
    COMPANY_NAME: "Cognition IES",
    HERO_SUBTITLE:
      "Engineering the future with innovation, agility, and a human-first approach since 2023.",
    STORY_TITLE: "Our Journey",
    STORY_P1:
      "Born in 2023 from a visionary spark in India, Cognition IES has evolved into a global innovator. We’ve reimagined engineering by breaking down traditional hierarchies, connecting our expert engineers directly with clients to deliver seamless solutions for industries like automotive, aerospace, and medical devices.",
    STORY_P2:
      "Our unique blend of startup agility and deep services drives us to create value that’s bold, practical, and sustainable—every single day.",
    MISSION_TITLE: "Our Mission",
    MISSION_DESC:
      "To spark engineering innovation with a people-first mindset, empowering every team member to deliver exceptional value directly to our clients.",
    VISION_TITLE: "Our Vision",
    VISION_DESC:
      "To lead as the world’s trusted engineering partner, thriving on self-driven teams and sustainable, collaborative brilliance.",
    VALUES_TITLE: "What Drives Us",
    CTA_TITLE: "Shape the Future with Us",
    CTA_DESC:
      "Ready to turn your engineering challenges into opportunities? Let’s connect and create something extraordinary together.",
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
    SCALE_HOVER: {
      rest: { scale: 1 },
      hover: { scale: 1.03, transition: { duration: 0.3 } },
    },
  },

  // Stats and Values
  STATS: [
    { stat: "50+", label: "Skilled Engineers" },
    { stat: "65+", label: "Years of Services" },
    { stat: "100%", label: "On-Time Delivery" },
    { stat: "ISO 9001", label: "Certified Quality" },
  ],
  KEY_VALUES: [
    { title: "Co-Innovation", desc: "Co-creating patents with you." },
    { title: "Lifecycle Mastery", desc: "From vision to victory." },
    { title: "Quality Core", desc: "Precision every time." },
    { title: "Flex & Scale", desc: "Adapting to your pace." },
  ],
};
