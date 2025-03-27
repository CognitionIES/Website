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
      "Comprehensive mechanical engineering solutions delivering innovative designs and optimized performance across industries. Our services combines cutting-edge technology with practical engineering principles.",
    imageUrl: mechImage1,
    bulletPoints: [
      "Product Design and Development",
      "Value Engineering and Value Analysis",
      "Product Life Cycle Management",
      "2D/3D CAD Drafting and Modeling",
      "Reverse Engineering",
      "Engineering Change Management",
      "CDR, DFM, DFA, DFS, DFR, DFMEA, DVP",
      "Prototyping and Design Validation",
      "Digital & Physical Competitive Benchmarking",
      "Design Optimization (weight/cost Reduction)",
    ],
    additionalImageUrl: mechImage,
  },

  // 2. Electrical Engineering
  electrical: {
    title: "Electrical Design Services",
    description:
      "Innovative electrical engineering solutions combining advanced circuit design with modern power systems and control technologies.",
    imageUrl: elecImage1,
    bulletPoints: [
      "Circuit Design and Simulation",
      "PCB Design and Development",
      "Harness and Wiring Design",
      "Electrical Control Panel Design",
      "System Integration and Testing",
      "Renewable Energy Integration",
      "Energy Efficiency Design",
      "Battery Management Systems (BMS)",
      "Power Distribution Systems",
      "Control System Design",
    ],
    additionalImageUrl: elecImage,
  },

  // 3. CAE/CFD (changed key from "analysis" to "cae-cfd")
  "cae-cfd": {
    title: "CAE/CFD",
    description:
      "Advanced engineering analysis services using state-of-the-art simulation tools and methodologies to optimize design performance and reliability",
    imageUrl:
    caeImage1,
    bulletPoints: [
      "Structural Analysis (FEA)",
      "Thermal and Fluid Flow Analysis (CFD)",
      "Fatigue and Durability Analysis",
      "Crash and Impact Simulations",
      "Optimization Studies",
      "Failure Analysis and Root Cause Determination",
      "Noise, Vibration, and Harshness (NVH) Analysis",
      "Multi-physics Simulations",
      "Mold Flow and Casting Simulations",
      "CAE/CFD Solutions",
    ],
    additionalImageUrl: caeImage,
  },

  // 4. Prototyping and 3D Printing
  prototyping: {
    title: "Prototyping and 3D Printing",
    description:
      "Rapid prototyping and additive manufacturing services to bring concepts to life quickly and efficiently.",
    imageUrl: protoImage1,
    bulletPoints: [
      "Rapid Prototyping (3D Printing, CNC Machining)",
      "Concept Validation Models",
      "Functional Prototypes for Testing",
      "Additive Manufacturing for Complex Geometries",
      "Material Selection and Testing",
      "Support for Iterative Design Improvements",
      "Low-volume Production Using 3D Printing",
      "Assembly Testing and Design Validation",
      "Prototype Optimization",
      "Quality Control and Inspection",
    ],
    additionalImageUrl: prototypingImage,
  },

  // 5. Hydraulic Engineering
  hydraulic: {
    title: "Hydraulic Engineering Services",
    description:
      "Expert hydraulic system design and optimization services ensuring efficient and reliable fluid power solutions.",
    imageUrl: hydraImage1,
    bulletPoints: [
      "Hydraulic System Design and Optimization",
      "Hydraulic Circuit Modeling and Simulation",
      "Hydraulic System Testing and Validation",
      "Hydraulic System Retrofitting",
      "Selection of Components (Pumps, Valves, Actuators)",
      "Performance Optimization",
      "Failure Analysis",
      "Environmental Compliance",
      "System Integration",
      "Maintenance Planning",
    ],
    additionalImageUrl: hydraulicImage,
  },

  // 6. Asset Management (changed key from "asset" to "asset-management")
  "asset-management": {
    title: "Asset Management",
    description: "Random loreum ipslum",
    imageUrl: assetImage1,
    bulletPoints: [
      "Asset Lifecycle Management and Cost Analysis",
      "Predictive and Preventive Maintenance Strategies",
      "Spare Parts Optimization",
      "Asset Valuation and Depreciation Analysis",
      "Performance Monitoring and Optimization",
      "Data Analysis for Asset Utilization",
      "Risk Assessment and Contingency Planning for Critical Assets",
      "Enterprise Asset Management (EAM) System Implementation",
    ],
    additionalImageUrl: assetImage,
  },

  // 7. Embedded Systems Engineering (changed key from "embedded" to "embedded-systems")
  "embedded-systems": {
    title: "Embedded Systems Engineering",
    description:
      "Advanced embedded systems solutions integrating hardware and software for intelligent device control and automation.",
    imageUrl:embeddedImage1,

    bulletPoints: [
      "Microcontroller and Microprocessor Programming",
      "Board Support Packages",
      "Vehicle Telematics",
      "IoT Device Integration",
      "AI and ML Integration",
      "Prototype Development",
      "Cyber Security for Embedded Systems",
      "System Testing and Debugging",
      "Firmware Development",
      "Real-time Operating Systems",
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
      "Creation of Technical Manuals and User Guides",
      "Maintenance and Service Manuals Development",
      "Assembly and Disassembly Instructions",
      "Training Manuals and E-learning Content",
      "Illustrated Parts Catalogs (IPC)",
      "Interactive Electronic Technical Manuals (IETM)",
      "2D/3D Illustrations and Exploded Views",
      "Document Conversion to Digital Formats",
      "Technical Documentation for Compliance",
      "SOPs and Regulatory Documentation",
    ],
    additionalImageUrl: techImage,
  },

  // 9. Supply Chain Management/Procurement (changed key from "supplyChain" to "supply-chain")
  "supply-chain": {
    title: "Supply Chain Management ",
    description:
      "End-to-end supply chain and procurement solutions to streamline sourcing, logistics, and vendor management.",
    imageUrl: supplyImage1,
    bulletPoints: [
      "Supplier Identification and Evaluation",
      "Strategic Sourcing",
      "Procurement Management",
      "Inventory Optimization",
      "Warehouse Management",
      "Logistics and Distribution",
      "Supply Chain Risk Mitigation",
      "Demand and Capacity Planning",
      "Cost Reduction Strategies",
      "Vendor Relationship Management",
    ],
    additionalImageUrl: supplyImage,
  },
};

export default sections;

/* 
 embedded: {
    title: "Embedded Systems Engineering",
    description:
      "Advanced embedded systems solutions integrating hardware and software for intelligent device control and automation.",
    imageUrl:
      "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=2069&auto=format&fit=crop",
    bulletPoints: [
      "Microcontroller and Microprocessor Programming",
      "Board Support Packages",
      "Vehicle Telematics",
      "IoT Device Integration",
      "AI and ML Integration",
      "Prototype Development",
      "Cyber Security for Embedded Systems",
      "System Testing and Debugging",
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
