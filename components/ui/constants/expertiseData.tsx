import { MainCategory } from "../types";
import {
  Wrench,
  Car,
  Zap,
  BarChart,
  Droplet,
  Printer,
  Layers,
  Settings,
  FileText,
  Truck,
  Factory,
  Fan,
  Gauge,
  Shield,
  Leaf,
  Cpu,
  Clipboard,
  Server,
  Code,
  Cloud,
  Brain,
  GitBranch,
  CheckCircle,
  Globe,
} from "lucide-react";

export const servicesData: MainCategory[] = [
  {
    title: "Product Engineering",
    href: "/services/product-engineering",
    icon: <Wrench className="w-5 h-5 mr-2" />,
    subCategories: [
      {
        title: "Mechanical Design Services",
        href: "/services?section=mechanical",
        icon: <Car className="w-4 h-4" />,
      },
      {
        title: "Electrical Engineering Services",
        href: "/services?section=electrical",
        icon: <Zap className="w-4 h-4" />,
      },
      {
        title: "CAE/CFD",
        href: "/services?section=cae-cfd",
        icon: <BarChart className="w-4 h-4" />,
      },
      {
        title: "Hydraulic Engineering Services",
        href: "/services?section=hydraulic",
        icon: <Droplet className="w-4 h-4" />,
      },
      {
        title: "Prototyping and 3D Printing",
        href: "/services?section=prototyping",
        icon: <Printer className="w-4 h-4" />,
      },
      {
        title: "Asset Management",
        href: "/services?section=asset-management",
        icon: <Layers className="w-4 h-4" />,
      },
      {
        title: "Embedded Systems Engineering",
        href: "/services?section=embedded-systems",
        icon: <Settings className="w-4 h-4" />,
      },
      {
        title: "Technical Publication",
        href: "/services?section=technical-publication",
        icon: <FileText className="w-4 h-4" />,
      },
      {
        title: "Supply Chain Management / Procurement",
        href: "/services?section=supply-chain",
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
    href: "/services/abcs",
    icon: <Factory className="w-5 h-5 mr-2" />,
    subCategories: [
      {
        title: "Mechanical & Electrical Engineering Services",
        href: "/services/pipeline-design",
        icon: <Car className="w-4 h-4" />,
      },
      {
        title: "Process Engineering Services",
        href: "/services/integrity",
        icon: <Settings className="w-4 h-4" />,
      },
      {
        title: "Piping & Fluid System Services",
        href: "/services/maintenance",
        icon: <Droplet className="w-4 h-4" />,
      },
      {
        title: "Civil & Structural Engineering Services",
        href: "/services/safety",
        icon: <Layers className="w-4 h-4" />,
      },
      {
        title: "HVAC & Ventilation System Services",
        href: "/services/monitoring",
        icon: <Fan className="w-4 h-4" />,
      },
      {
        title: "Instrumentation Engineering Services",
        href: "/services/environmental",
        icon: <Gauge className="w-4 h-4" />,
      },
      {
        title: "Safety & Compliance Services",
        href: "/services/emergency",
        icon: <Shield className="w-4 h-4" />,
      },
      {
        title: "Energy Management & Sustainability Services",
        href: "/services/training",
        icon: <Leaf className="w-4 h-4" />,
      },
      {
        title: "Digitalization & Industry 4.0 Services",
        href: "/services/emergency",
        icon: <Cpu className="w-4 h-4" />,
      },
      {
        title: "Project Management",
        href: "/services/emergency",
        icon: <Clipboard className="w-4 h-4" />,
      },
    ],
    image: {
      src: "https://images.unsplash.com/photo-1471958680802-1345a694ba6d?q=80&w=2066&auto=format&fit=crop",
      alt: "Pipeline Services",
      title: "Comprehensive Pipeline Solutions",
    },
  },
  {
    title: "IT Services",
    icon: <Server className="w-5 h-5 mr-2" />,
    href: "/services/it-services",
    subCategories: [
      {
        title: "Software Development",
        href: "/services/software",
        icon: <Code className="w-4 h-4" />,
      },
      {
        title: "Cloud Solutions",
        href: "/services/cloud",
        icon: <Cloud className="w-4 h-4" />,
      },
      {
        title: "Data Analytics",
        href: "/services/data",
        icon: <BarChart className="w-4 h-4" />,
      },
      {
        title: "Cybersecurity",
        href: "/services/security",
        icon: <Shield className="w-4 h-4" />,
      },
      {
        title: "AI & Machine Learning",
        href: "/services/ai-ml",
        icon: <Brain className="w-4 h-4" />,
      },
      {
        title: "DevOps Services",
        href: "/services/devops",
        icon: <GitBranch className="w-4 h-4" />,
      },
      {
        title: "Quality Assurance",
        href: "/services/qa",
        icon: <CheckCircle className="w-4 h-4" />,
      },
      {
        title: "Digital Transformation",
        href: "/services/digital",
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
