import logo from "@/constants/Imported-images";

const sections = {
  // 1. Mechanical Design Services (2 rows)
  mechanical: {
    title: "MECHANICAL DESIGN SERVICES",
    description:
      "Comprehensive mechanical engineering solutions delivering innovative designs and optimized performance across industries. Our expertise combines cutting-edge technology with practical engineering principles.",

    imageUrl:
      "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=2070&auto=format&fit=crop",
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
    logos: [
      {
        label: "CAD & PLM:",
        items: [
          { src: logo.DSCatia, alt: "AutoCad" },
          { src: logo.Creo, alt: "DesginX" },
          { src: logo.SiemensNX, alt: "DesginX" },
          { src: logo.AutoCad, alt: "DesginX" },
          { src: logo.autoDeskInventor, alt: "DesginX" },
          { src: logo.DSSolidWorks, alt: "DesginX" },
          { src: logo.SolidEdge, alt: "DesginX" },
          { src: logo.DesignX, alt: "DesginX" },
          { src: logo.smartCAM, alt: "DesginX" },
          { src: logo.TeamCenter, alt: "DesginX" },
          { src: logo.windchill, alt: "DesginX" },
          { src: logo.masterCam, alt: "DesginX" },
          { src: logo.Enovia, alt: "DesginX" },
          { src: logo.arena, alt: "DesginX" },
        ],
      },
    ],
  },

  // 2. Electrical Engineering (1 row)
  electrical: {
    title: "Electrical Engineering Services",
    description:
      "Innovative electrical engineering solutions combining advanced circuit design with modern power systems and control technologies.",
    imageUrl:
      "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?q=80&w=2070&auto=format&fit=crop",
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
    logos: [
      {
        label: "ELECTRICAL CAD & PCB DESIGN:",
        items: [
          { src: logo.eplan, alt: "ANSYS" },
          { src: logo.AutodeskElc, alt: "ANSYS" },
          { src: logo.AltiumDesigner, alt: "ANSYS" },
          { src: logo.orCad, alt: "ANSYS" },
          { src: logo.KiCad, alt: "ANSYS" },
          { src: logo.AutodeskEagle, alt: "ANSYS" },
        ],
      },
    ],
  },

  // 3. CAE/CFD (2 rows)
  analysis: {
    title: "CAE/CFD",
    description:
      "Advanced engineering analysis services using state-of-the-art simulation tools and methodologies to optimize design performance and reliability",
    imageUrl:
      "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?q=80&w=2070&auto=format&fit=crop",
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
    logos: [
      {
        label: "COMPUTER AIDED ENGINEERING:",
        items: [
          { src: logo.Ansys, alt: "KiCad" },
          { src: logo.simulaAbaqus, alt: "Altium" },
          { src: logo.ansaPreProcessor, alt: "Altium" },
          { src: logo.logo1, alt: "Altium" },
          { src: logo.optistruct, alt: "Altium" },
        ],
      },
      {
        label: "COMPUTATIONAL FLUID DYNAMICS:",
        items: [
          { src: logo.ansysFluent, alt: "Altium" },
          { src: logo.starCMM, alt: "Altium" },
          { src: logo.comsolMultiphysics_1, alt: "Altium" },
        ],
      },
    ],
  },

  // 4. Prototyping and 3D Printing (1 row)
  prototyping: {
    title: "Prototyping and 3D Printing",
    description:
      "Rapid prototyping and additive manufacturing services to bring concepts to life quickly and efficiently.",
    imageUrl:
      "https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=2070&auto=format&fit=crop",
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
    logos: [
      {
        label: "3D MODEL SOFTWARE:",
        items: [
          { src: logo.UltiMakerCura, alt: "Altair" },
          { src: logo.simplify3d, alt: "ANSYS" },
          { src: logo.formLabs, alt: "Altair" },
        ],
      },
    ],
  },

  // 5. Hydraulic Engineering (2 rows)
  hydraulic: {
    title: "Hydraulic Engineering Services",
    description:
      "Expert hydraulic system design and optimization services ensuring efficient and reliable fluid power solutions.",
    imageUrl:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
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
    logos: [
      {
        label: "CAD:",
        items: [
          { src: logo.autodeskMec, alt: "ANSYS" },
          { src: logo.Creo, alt: "Altair" },
          { src: logo.hydroSYM, alt: "Altair" },
          { src: logo.hyDraw_CAD, alt: "HyDraw CAD" },
        ],
      },
      {
        label: "SIMULATION:",
        items: [
          { src: logo.automationStudio, alt: "Altair" }, // Added as per image
          { src: logo.festoFluidSim, alt: "Altair" },
        ],
      },
    ],
  },

  // 6. Asset Management (2 rows)
  asset: {
    title: "Asset Management",
    description: "Random loreum ipslum",
    imageUrl:
      "https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=2070&auto=format&fit=crop",
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
    logos: [
      {
        label: "ASSET MANAGEMENT SOFTWARE:",
        items: [
          { src: logo.maximo, alt: "ANSYS" },
          { src: logo.sapEAM, alt: "ANSYS" },
          { src: logo.inforEAM, alt: "ANSYS" },
          { src: logo.assetPanda, alt: "ANSYS" },
        ],
      },
      {
        label: "ANALYTICS AND DATA VISUALIZATION:",
        items: [
          { src: logo.powerBI, alt: "ANSYS" },
          { src: logo.tableau, alt: "ANSYS" },
          { src: logo.qlik, alt: "ANSYS" },
          { src: logo.sapAnalyticsCloud, alt: "ANSYS" },
        ],
      },
    ],
  },

  // 7. Embedded Systems Engineering (3 rows)
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
      {
        label: "IDE AND PROGRAMMING:",
        items: [
          { src: logo.keil, alt: "ANSYS" },
          { src: logo.stm32CubeIDE, alt: "Altair" },
          { src: logo.lauterbachD, alt: "Altair" }, // Updated to match image (MPLAB X IDE)
        ],
      },
      {
        label: "TESTING AND DEBUGGING:",
        items: [
          { src: logo.lauterbachD, alt: "Altair" }, // Updated to match image (LAUTERBACH)
          { src: logo.qnx, alt: "Altair" }, // Updated to match image (CANalyzer)
          { src: logo.jtag, alt: "Altair" },
        ],
      },
      {
        label: "RTOS DEVELOPMENT:",
        items: [
          { src: logo.qnx, alt: "Altair" },
          { src: logo.vxWorks, alt: "Altair" },
          { src: logo.freeRTOS, alt: "Altair" },
        ],
      },
    ],
  },

  // 8. Technical Publication (2 rows)
  technical: {
    title: "Technical Documentation",
    description:
      "Comprehensive technical documentation services ensuring clear communication of complex technical information.",
    imageUrl:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
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
    logos: [
      {
        label: "PUBLISHING, DIGITAL AND GRAPHICS:",
        items: [
          { src: logo.ID, alt: "ANSYS" },
          { src: logo.AI, alt: "Altair" },
          { src: logo.FM, alt: "Altair" },
          { src: logo.rh, alt: "Altair" },
          { src: logo.Photoshop, alt: "Altair" },
      
          { src: logo.corelDraw, alt: "Altair" },
          { src: logo.madcapFlare, alt: "Altair" },
          { src: logo.KeyShot, alt: "Altair" },
          { src: logo.figma, alt: "Altair" },
          { src: logo.word, alt: "Altair" },
        ],
      },
    ],
  },

  // 9. Supply Chain Management/Procurement (2 rows)
  supplyChain: {
    title: "Supply Chain Management / Procurement",
    description:
      "End-to-end supply chain and procurement solutions to streamline sourcing, logistics, and vendor management.",
    imageUrl:
      "https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=2070&auto=format&fit=crop",
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
    logos: [
      {
        label: "SUPPLY CHAIN MANAGEMENT:",
        items: [
          { src: logo.sap, alt: "Supply Chain Icon" },
          { src: logo.oracleNestitue, alt: "Supply Chain Icon" },
          { src: logo.infor, alt: "Supply Chain Icon" },
          { src: logo.jda, alt: "Supply Chain Icon" },
        ],
      },
      {
        label: "ANALYTICS AND DATA VISUALIZATION:",
        items: [
          { src: logo.powerBI, alt: "Supply Chain Icon" },
          { src: logo.tableau, alt: "Supply Chain Icon" },
          { src: logo.qlik, alt: "Supply Chain Icon" },
          { src: logo.sapAnalyticsCloud, alt: "Supply Chain Icon" },
        ],
      },
    ],
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
