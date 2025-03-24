import {
  Fan,
  Gauge,
  Shield,
  Clipboard,
  Code,
  Cloud,
  Brain,
  GitBranch,
  CheckCircle,
  Globe,
  FlaskConical,
  Printer,
  Layers,
  Settings,
  FileText,
  Truck,
  Car,
  Forklift,
  TramFront,
  Plane,
  Ship,
  Leaf,
  Cpu,
  Droplet,
  Zap,
  Sun,
  Pill,
  Wheat,
  Shirt,
  Droplets,
  Book,
  Wrench,
  Factory,
  Server,
  BarChart,
} from "lucide-react";
import { ReactNode } from "react";


export interface SubCategory {
  title: string;
  href: string;
  icon?: ReactNode; // Add optional icon property
  subSubCategories?: SubCategory[]; // Add optional subSubCategories property
}

export interface MainCategory {
  icon: React.ReactNode;
  title: string;
  href: string;
  subCategories: SubCategory[];
  image: {
    src: string;
    alt: string;
    title: string;
  };
}

export const servicesData: MainCategory[] = [
  {
    title: "Product Engineering",
    href: "/services/product-engineering",
    icon: <Wrench className="w-5 h-5 mr-2" />,
    subCategories: [
      {
        title: "Mechanical Design Services",
        href: "/services/product-engineering?section=mechanical",
        icon: <Car className="w-4 h-4" />,
      },
      {
        title: "Electrical Engineering Services",
        href: "/services/product-engineering?section=electrical",
        icon: <Zap className="w-4 h-4" />,
      },
      {
        title: "CAE/CFD",
        href: "/services/product-engineering?section=cae-cfd",
        icon: <BarChart className="w-4 h-4" />,
      },
      {
        title: "Hydraulic Engineering Services",
        href: "/services/product-engineering?section=hydraulic",
        icon: <Droplet className="w-4 h-4" />,
      },
      {
        title: "Prototyping and 3D Printing",
        href: "/services/product-engineering?section=prototyping",
        icon: <Printer className="w-4 h-4" />,
      },
      {
        title: "Asset Management",
        href: "/services/product-engineering?section=asset-management",
        icon: <Layers className="w-4 h-4" />,
      },
      {
        title: "Embedded Systems Engineering",
        href: "/services/product-engineering?section=embedded-systems",
        icon: <Settings className="w-4 h-4" />,
      },
      {
        title: "Technical Publication",
        href: "/services/product-engineering?section=technical-publication",
        icon: <FileText className="w-4 h-4" />,
      },
      {
        title: "Supply Chain Management / Procurement",
        href: "/services/product-engineering?section=supply-chain",
        icon: <Truck className="w-4 h-4" />,
      },
    ],
    image: {
      src: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=2070&auto=format&fit=crop",
      alt: "Product Engineering",
      title: "Advanced Product Engineering Solutions",
    },
  },
  {
    title: "Plant Engineering",
    href: "/services/plant-engineering",
    icon: <Factory className="w-5 h-5 mr-2" />,
    subCategories: [
      {
        title: "Mechanical & Electrical Engineering Services",
        href: "/services/plant-engineering?section=mechanical-electrical",
        icon: <Car className="w-4 h-4" />,
      },
      {
        title: "Process Engineering Services",
        href: "/services/plant-engineering?section=process",
        icon: <Settings className="w-4 h-4" />,
      },
      {
        title: "Piping & Fluid System Services",
        href: "/services/plant-engineering?section=piping-fluid",
        icon: <Droplet className="w-4 h-4" />,
      },
      {
        title: "Civil & Structural Engineering Services",
        href: "/services/plant-engineering?section=civil-structural",
        icon: <Layers className="w-4 h-4" />,
      },
      {
        title: "HVAC & Ventilation System Services",
        href: "/services/plant-engineering?section=hvac",
        icon: <Fan className="w-4 h-4" />,
      },
      {
        title: "Instrumentation Engineering Services",
        href: "/services/plant-engineering?section=instrumentation",
        icon: <Gauge className="w-4 h-4" />,
      },
      {
        title: "Safety & Compliance Services",
        href: "/services/plant-engineering?section=safety-compliance",
        icon: <Shield className="w-4 h-4" />,
      },
      {
        title: "Energy Management & Sustainability Services",
        href: "/services/plant-engineering?section=energy-management",
        icon: <Leaf className="w-4 h-4" />,
      },
      {
        title: "Digitalization & Industry 4.0 Services",
        href: "/services/plant-engineering?section=digitalization",
        icon: <Cpu className="w-4 h-4" />,
      },
      {
        title: "Project Management",
        href: "/services/plant-engineering?section=project-management",
        icon: <Clipboard className="w-4 h-4" />,
      },
    ],
    image: {
      src: "https://images.unsplash.com/photo-1471958680802-1345a694ba6d?q=80&w=2066&auto=format&fit=crop",
      alt: "Pipeline Services",
      title: "Comprehensive Pipeline Solutions",
    },
  },
  // IT Services can remain as is with individual pages if preferred, or adjust similarly
  {
    title: "IT Services",
    icon: <Server className="w-5 h-5 mr-2" />,
    href: "/services/it-services",
    subCategories: [
      {
        title: "Software Development",
        href: "/services/saas-solution/servicecpq",
        icon: <Code className="w-4 h-4" />,
      },
      {
        title: "Cloud Solutions",
        href: "/services/it-services/cloud-solutions",
        icon: <Cloud className="w-4 h-4" />,
      },
      {
        title: "Data Analytics",
        href: "/services/it-services/data-analytics",
        icon: <BarChart className="w-4 h-4" />,
      },
      {
        title: "Cybersecurity",
        href: "/services/it-services/cybersecurity",
        icon: <Shield className="w-4 h-4" />,
      },
      {
        title: "AI & Machine Learning",
        href: "/services/it-services/ai-ml",
        icon: <Brain className="w-4 h-4" />,
      },
      {
        title: "DevOps Services",
        href: "/services/it-services/devops",
        icon: <GitBranch className="w-4 h-4" />,
      },
      {
        title: "Quality Assurance",
        href: "/services/it-services/qa",
        icon: <CheckCircle className="w-4 h-4" />,
      },
      {
        title: "Digital Transformation",
        href: "/services/it-services/digital",
        icon: <Globe className="w-4 h-4" />,
      },
    ],
    image: {
      src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
      alt: "IT Services",
      title: "Innovative IT Solutions",
    },
  },
];
export const industriesData: MainCategory[] = [
  {
    title: "Mobility",
    icon: <Car className="w-5 h-5" />,
    href: "/industries/mobility",
    subCategories: [
      {
        title: "Automotive",
        icon: <Car className="w-4 h-4" />,
        href: "/industries/mobility/automotive",
      },
      {
        title: "Trucks and Off-Highway Vehicles",
        icon: <Forklift className="w-4 h-4" />,
        href: "/industries/mobility/trucks",
      },
      {
        title: "Railways and Transportation",
        icon: <TramFront className="w-4 h-4" />,
        href: "/industries/mobility/railways",
      },
      {
        title: "Aerospace and Defense",
        icon: <Plane className="w-4 h-4" />,
        href: "/industries/mobility/aerospace",
      },
      {
        title: "Marine and Offshore",
        icon: <Ship className="w-4 h-4" />,
        href: "/industries/mobility/marine",
      },
    ],
    image: {
      src: "https://images.unsplash.com/photo-1517153295259-74eb0b416cee?auto=format&fit=crop&q=80",
      alt: "Automotive manufacturing",
      title: "Next-gen mobility solutions",
    },
  },
  {
    title: "Sustainability",
    icon: <Leaf className="w-5 h-5" />,
    href: "/industries/sustainability",
    subCategories: [
      {
        title: "Discrete Manufacturing & Industrial Products",
        href: "/industries/sustainability/discrete-manufacturing",
        icon: <Factory className="w-4 h-4" />,
      },
      {
        title: "Process Manufacturing",
        href: "/industries/sustainability/process-manufacturing",
        icon: <Settings className="w-4 h-4" />,
        subSubCategories: [
          {
            title: "Oil and Gas",
            href: "/industries/sustainability/process-manufacturing/oil-gas",
            icon: <Droplet className="w-4 h-4" />,
          },
          {
            title: "Chemicals and Petrochemicals",
            href: "/industries/sustainability/process-manufacturing/chemicals",
            icon: <FlaskConical className="w-4 h-4" />,
          },
          {
            title: "Power and Energy",
            href: "/industries/sustainability/process-manufacturing/power",
            icon: <Zap className="w-4 h-4" />,
          },
          {
            title: "Renewable Energy",
            href: "/industries/sustainability/process-manufacturing/renewable",
            icon: <Sun className="w-4 h-4" />,
          },
          {
            title: "Pharmaceuticals and Biotech",
            href: "/industries/sustainability/process-manufacturing/pharma",
            icon: <Pill className="w-4 h-4" />,
          },
          {
            title: "Agriculture and Agro-Processing",
            href: "/industries/sustainability/process-manufacturing/agriculture",
            icon: <Wheat className="w-4 h-4" />,
          },
          {
            title: "Cement and Construction",
            href: "/industries/sustainability/process-manufacturing/cement",
            icon: <Car className="w-4 h-4" />,
          },
          {
            title: "Textile and Apparel",
            href: "/industries/sustainability/process-manufacturing/textile",
            icon: <Shirt className="w-4 h-4" />,
          },
          {
            title: "Water and Wastewater Treatment",
            href: "/industries/sustainability/process-manufacturing/water",
            icon: <Droplets className="w-4 h-4" />,
          },
          {
            title: "Pulp and Paper",
            href: "/industries/sustainability/process-manufacturing/pulp",
            icon: <Book className="w-4 h-4" />,
          },
        ],
      },
      {
        title: "ABCDE",
        href: "/industries/sustainability/discrete",
        icon: <Cpu className="w-4 h-4" />,
      },
    ],
    image: {
      src: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&q=80",
      alt: "Sustainable manufacturing",
      title: "Sustainable industrial solutions",
    },
  },
  {
    title: "Tech",
    icon: <Cpu className="w-5 h-5" />,
    href: "/industries/tech",
    subCategories: [
      {
        title: "Digital Engineering",
        href: "/industries/tech/digital-engineering",
        icon: <Code className="w-4 h-4" />,
      },
    ],
    image: {
      src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80",
      alt: "Technology solutions",
      title: "Advanced tech solutions",
    },
  },
];
