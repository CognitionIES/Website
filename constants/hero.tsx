import { StaticImageData } from "next/image";
import image1 from "./images/hero/builder-repairman-install-hvac-duct-cleaning-ventilation-pipes-hanging-from-ceiling.jpg";
// import image2 from "./images/hero/excavator-action.jpg";
//import image3 from "./images/hero/factory-worker-control-robotic-arm-factory.jpg";
import image4 from "./images/hero/portrait-engineers-work-hours-job-site.jpg";
import image5 from "./images/hero/image.jpg";
import saasImage from "@/constants/images/hero/saas-2.jpg"
import recruitmentImage from "@/constants/images/hero/recruit-1.jpg"


export interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  majorService: string;
  description: string;
  image: string | StaticImageData;
  blurImage?: string | StaticImageData;
}

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    title: "From Concept to Creation",
    subtitle: "Transforming Ideas into Market-Ready Products",
    majorService: "Product Engineering",
    description:
      "From Aerospace to Industrial machinery, we create future-ready solutions that redefine performance, reliability, and efficiency.",
    image: image1,
    blurImage: undefined,
  },
  
  {
    id: 2,
    title: "Engineering Better Processes for Better Results",
    subtitle: "Optimizing Workflows for Maximum Efficiency",
    majorService: "Process Engineering ",
    description:
      "From optimizing workflows to enhancing system efficiency, we drive innovation that transforms operations and maximizes productivity..",
    image: image4,
    blurImage:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&q=10&w=50&blur=20",
  },
  {
    id: 3,
    title: "Empowering Intelligence with AI",
    subtitle: "Intelligent Solutions for a Smarter Future",
    majorService: "Artificial Intelligence & Machine Learning",
    description:
      "Harnessing the power of AI to develop intelligent systems that automate, optimize, and elevate decision-making across industries",
    image: image5,
    blurImage: image4,
  },{
    id: 4,
    title: "Staffing & Recruitment",
    subtitle: "Connecting Talent with Opportunity",
    majorService: "The Right People for the Right Roles ",
    description:
      "Helping businesses build high-performing teams by sourcing top talent through strategic recruitment and staffing solutions.",
    image: recruitmentImage,
    blurImage:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&q=10&w=50&blur=20",
  },{
    id: 5,
    title: "Powering Businesses with SaaS Innovation",
    subtitle: "Scalable Software for a Digital World",
    majorService: "SaaS Solutions ",
    description:
      "Delivering cloud-based, scalable, and secure software solutions that streamline operations, enhance efficiency, and drive growth.",
    image: saasImage,
    blurImage:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&q=10&w=50&blur=20",
  },
  
  
];
// {
//   id: 1,
//   title: "Engineering Today, Tomorrow",
//   subtitle: "Smart Solutions for a Changing World",
//   description:
//     "We don't just design products—we engineer possibilities. From concept to reality, we deliver precision, innovation, and efficiency at every stage.",
//   image: image1,
//   blurImage: undefined,
// },  {
//   id: 4,
//   title: "ABC DEG FHI.",
//   subtitle: "Engineering Excellence Across Industries",
//   description:
//     "From Aerospace to Industrial machinery, we create future-ready solutions that redefine performance, reliability, and efficiency.",
//   image:image5,
//   blurImage: image4,
// },
// {
//   id: 2,
//   title: "Beyond Engineering, Into Innovation",
//   subtitle: "Seamless Product Development & Optimization",
//   description:
//     "Cutting-edge engineering meets real-world impact. We help industries build smarter, faster, and more cost-effective solutions with expert-driven strategies.",
//   image:image4,
//   blurImage:
//     "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&q=10&w=50&blur=20",
// },
// {
//   id: 3,
//   title: "Design. Develop. Deliver.",
//   subtitle: "Engineering Excellence Across Industries",
//   description:
//     "From Aerospace to Industrial machinery, we create future-ready solutions that redefine performance, reliability, and efficiency.",
//   image:image5,
//   blurImage: image4,
// },
