//import logo from "@/constants/Imported-images";
import mechImage from "@/constants/images/service/mech.png";
import elecImage from "@/constants/images/service/elec.png";
import caeImage from "@/constants/images/service/cae.png";
import prototypingImage from "@/constants/images/service/prototyp.png";
import hydraulicImage from "@/constants/images/service/hydraulic.png";
import assetImage from "@/constants/images/service/asset.png";
import embeddedImage from "@/constants/images/service/embedded.png";
import techImage from "@/constants/images/service/technical.png";
import supplyImage from "@/constants/images/service/supply.png";
import mechImage1 from "@/constants/images/side-images/mech.jpg";
import elecImage1 from "@/constants/images/side-images/elec.jpg";
import protoImage1 from "@/constants/images/side-images/prototyping.jpg";
import hydraImage1 from "@/constants/images/side-images/hydraulic.jpg";
import assetImage1 from "@/constants/images/side-images/asset.jpg";
import embeddedImage1 from "@/constants/images/side-images/embedded.jpg";
import supplyImage1 from "@/constants/images/side-images/supply.jpg";
import caeImage1 from "@/constants/images/side-images/cae.png"
import techImage1 from "@/constants/images/side-images/tech.jpeg"

const sections = {
  // 1. Mechanical Design Services
  mechanical: {
    title: "MECHANICAL DESIGN SERVICES",
    description:
      "Comprehensive mechanical engineering solutions delivering innovative designs & optimized performance across industries. Our services combines cutting-edge technology with practical engineering principles.",
    imageUrl: mechImage1,
    bulletPoints: [
      "Product Design & Development",
      "Engineering Change Management",
      "Value Engineering & Value Analysis",
      "Digital & Physical Competitive Benchmarking",
      "Product Life Cycle Management",
      "Design Optimization (weight/cost Reduction)",
      "2D/3D CAD Drafting & Modeling",
      "Reverse Engineering",
      "CDR, DFM, DFA, DFS, DFR, DFMEA, DVP",
      "Prototyping & Design Validation",
    ],
    additionalImageUrl: mechImage,
  },

  // 2. Electrical Engineering
  electrical: {
    title: "Electrical Design Services",
    description:
      "Innovative electrical engineering solutions combining advanced circuit design with modern power systems & control technologies.",
    imageUrl: elecImage1,
    bulletPoints: [
      "Circuit Design & Simulation",
      "System Integration & Testing",
      "PCB Design & Development",
      "Energy Efficiency Design",
      "Harness & Wiring Design",
      "Battery Management Systems (BMS)",
      "Electrical Control Panel Design",
      "Renewable Energy Integration",
    ],
    additionalImageUrl: elecImage,
  },

  // 3. CAE/CFD (changed key from "analysis" to "cae-cfd")
  "cae-cfd": {
    title: "CAE/CFD",
    description:
      "Advanced engineering analysis services using state-of-the-art simulation tools & methodologies to optimize design performance & reliability",
    imageUrl:
    caeImage1,
    bulletPoints: [
      "Structural Analysis (FEA)",
      "Optimization Studies",
      "Thermal & Fluid Flow Analysis (CFD)",
      "Multi-physics Simulations",
      "Fatigue & Durability Analysis",
      "Mold Flow & Casting Simulations",
      "Crash & Impact Simulations",
      "Failure Analysis & Root Cause Determination",
      "Noise, Vibration, & Harshness (NVH) Analysis",
      "Prototyping & Design Validation",
    ],
    additionalImageUrl: caeImage,
  },

  // 4. Prototyping & 3D Printing
  prototyping: {
    title: "Prototyping & 3D Printing",
    description:
      "Rapid prototyping & additive manufacturing services to bring concepts to life quickly & efficiently.",
    imageUrl: protoImage1,
    bulletPoints: [
      "Rapid Prototyping (3D Printing, CNC Machining)",
      "Material Selection & Testing",
      "Concept Validation Models",
      "Low-volume Production Using 3D Printing",
      "Functional Prototypes for Testing",
      "Assembly Testing & Design Validation",
      "Additive Manufacturing for Complex Geometries",
      "Support for Iterative Design Improvements",
      
    ],
    additionalImageUrl: prototypingImage,
  },

  // 5. Hydraulic Engineering
  hydraulic: {
    title: "Hydraulic Engineering Services",
    description:
      "Expert hydraulic system design & optimization services ensuring efficient & reliable fluid power solutions.",
    imageUrl: hydraImage1,
    bulletPoints: [
      "Hydraulic System Design & Optimization",
      "Performance Optimization",
      "Hydraulic Circuit Modeling & Simulation",
      "Failure Analysis",
      "Hydraulic System Testing & Validation",
      "Environmental Compliance",
      "Hydraulic System Retrofitting",
      "Selection of Components (Pumps, Valves, Actuators)",
      
    ],
    additionalImageUrl: hydraulicImage,
  },

  // 6. Asset Management (changed key from "asset" to "asset-management")
  "asset-management": {
    title: "Asset Management",
    description: "R&om loreum ipslum",
    imageUrl: assetImage1,
    bulletPoints: [
      "Asset Lifecycle Management & Cost Analysis",
      "Spare Parts Optimization",
      "Predictive & Preventive Maintenance Strategies",
      "Asset Valuation & Depreciation Analysis",
      "Performance Monitoring & Optimization",
      "Data Analysis for Asset Utilization",
      "Risk Assessment & Contingency Planning for Critical Assets",
      "Enterprise Asset Management (EAM) System Implementation",
    ],
    additionalImageUrl: assetImage,
  },

  // 7. Embedded Systems Engineering (changed key from "embedded" to "embedded-systems")
  "embedded-systems": {
    title: "Embedded Systems Engineering",
    description:
      "Advanced embedded systems solutions integrating hardware & software for intelligent device control & automation.",
    imageUrl:embeddedImage1,

    bulletPoints: [
      "Microcontroller & Microprocessor Programming",
      "AI & ML Integration",
      "Board Support Packages",
      "Cyber Security for Embedded Systems",
      "Vehicle Telematics",
      "System Testing & Debugging",
      "IoT Device Integration",
      "Prototype Development",
      //"Firmware Development",
      //"Real-time Operating Systems",
    ],
    additionalImageUrl: embeddedImage,
  },

  // 8. Technical Publication (changed key from "technical" to "technical-publication")
  "technical-publication": {
    title: "Technical Publication",
    description:
      "Comprehensive technical documentation services ensuring clear communication of complex technical information.",
    imageUrl: techImage1,
    bulletPoints: [
      "Creation of Technical Manuals & User Guides",
      "Maintenance & Service Manuals Development",
      "Assembly & Disassembly Instructions",
      "Training Manuals & E-learning Content",
      "Illustrated Parts Catalogs (IPC)",
      "Interactive Electronic Technical Manuals (IETM)",
      "SOPs & Regulatory Documentation",
      "2D/3D Illustrations & Exploded Views",
      "Technical Documentation for Compliance",
      "Document Conversion to Digital Formats",
    ],
    additionalImageUrl: techImage,
  },

  // 9. Supply Chain Management/Procurement (changed key from "supplyChain" to "supply-chain")
  "supply-chain": {
    title: "Supply Chain Management ",
    description:
      "End-to-end supply chain & procurement solutions to streamline sourcing, logistics, & vendor management.",
    imageUrl: supplyImage1,
    bulletPoints: [
      "Supplier Sourcing & Evaluation",
      "Logistics & Distribution Network Design",
      "Cost Estimation & Should Costing",
      "Supply Chain Risk Analysis & Mitigation",
      "Strategic Procurement Planning",
      "Vendor Performance Monitoring & Auditing",
      "Supplier Negotiation & Contract Mgmt.",
      "Procurement of Raw Materials & Component",
      "Inventory Optimization & Dem& Forecasting",
      "Rfi, Rfp, Rfq, Ifb, Loi, Po Preparation & Evaluation",
    ],
    additionalImageUrl: supplyImage,
  },
};

export default sections;

/* 
 embedded: {
    title: "Embedded Systems Engineering",
    description:
      "Advanced embedded systems solutions integrating hardware & software for intelligent device control & automation.",
    imageUrl:
      "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=2069&auto=format&fit=crop",
    bulletPoints: [
      "Microcontroller & Microprocessor Programming",
      "Board Support Packages",
      "Vehicle Telematics",
      "IoT Device Integration",
      "AI & ML Integration",
      "Prototype Development",
      "Cyber Security for Embedded Systems",
      "System Testing & Debugging",
      "Firmware Development",
      "Real-time Operating Systems",
    ],
    logos: [
      { src: logo.keil, alt: "ANSYS" },
      { src: logo.stm32CubeIDE, alt: "Altair" },
      { src: logo.lauterbachD, alt: "Altair" },
      { src: logo.jtag, alt: "Altair" },
      { src: logo.qnx, alt: "Altair" },
      { src: logo.vxWorks, alt: "Altair" },
      { src: logo.freeRTOS, alt: "Altair" },
    ],
  },
*/
