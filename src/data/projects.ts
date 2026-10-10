// src/data/projects.ts

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  type: string;
  isConceptProject: true;
  description: string;
  thumbnail: {
    bg: string;
    accentColor: string;
    label: string;
  };
  overview: string;
  problem: string;
  goals: string[];
  visualDirection: string;
  technicalApproach: string[];
  demonstrates: string[];
  relatedServices: string[];
  relatedProjects: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "form",
    slug: "form",
    title: "FORM",
    subtitle: "Performance",
    category: "Digital experience",
    type: "Concept project",
    isConceptProject: true,
    description:
      "A premium fitness brand experience featuring interactive 3D product storytelling and a clear conversion path.",
    thumbnail: {
      bg: "#171816",
      accentColor: "#C8F169",
      label: "3D · Product · Conversion",
    },
    overview:
      "FORM is a conceptual premium fitness brand digital experience. The project explores how 3D product presentation, scroll-driven storytelling, and conversion-oriented design can work together in a single coherent experience.",
    problem:
      "Premium fitness brands are often let down by generic e-commerce templates that fail to communicate the quality and craftsmanship of their products. FORM explores what happens when you build a digital experience that matches the ambition of the brand.",
    goals: [
      "Demonstrate 3D product presentation in a premium context",
      "Create a clear narrative arc from discovery to conversion",
      "Show how interactive motion can enhance product communication",
      "Explore dark editorial aesthetics with controlled accent color",
    ],
    visualDirection:
      "Dark neutral surfaces dominated by deep charcoal and graphite. Lime accent used exclusively for interactive states and price points. Realistic 3D product renders with carefully controlled lighting. Strong typographic hierarchy for product information.",
    technicalApproach: [
      "React Three Fiber for 3D product rendering",
      "GSAP ScrollTrigger for scroll-driven product reveal",
      "Custom shader for surface material",
      "Responsive canvas with adaptive quality",
      "Accessible product detail without requiring 3D interaction",
    ],
    demonstrates: [
      "3D product presentation",
      "Interactive web development",
      "Conversion-oriented design",
      "Dark editorial aesthetics",
      "Scroll choreography",
    ],
    relatedServices: ["interactive-experiences", "web-development"],
    relatedProjects: ["orbit"],
  },
  {
    id: "orbit",
    slug: "orbit",
    title: "ORBIT",
    subtitle: "Intelligence",
    category: "AI product",
    type: "Concept project",
    isConceptProject: true,
    description:
      "An AI-powered workspace concept that helps a hypothetical business organize information and complete repetitive workflows.",
    thumbnail: {
      bg: "#F3F0E8",
      accentColor: "#171816",
      label: "AI · Interface · Tools",
    },
    overview:
      "ORBIT is a conceptual AI-powered workspace designed to help a hypothetical research team organize information, surface relevant context, and complete a repetitive workflow—faster and with less friction.",
    problem:
      "Knowledge-work teams spend significant time on repetitive information tasks: categorizing documents, summarizing content, and finding relevant context. ORBIT explores an interface designed around these specific workflows.",
    goals: [
      "Design an AI interface that feels useful, not futuristic",
      "Show how LLM capabilities map to real workflow tasks",
      "Create a clear, readable interface hierarchy for complex data",
      "Demonstrate practical AI product thinking",
    ],
    visualDirection:
      "Warm ivory surfaces with structured typographic hierarchy. Clean data tables and clear state management. Restrained motion to reinforce information rather than distract from it. Charcoal for interface chrome, lime for action states.",
    technicalApproach: [
      "React with structured data management",
      "LLM API integration concept (OpenAI)",
      "Streaming response interface",
      "Accessible data tables and lists",
      "Clear loading, error, and success states",
    ],
    demonstrates: [
      "AI product thinking",
      "Interface design",
      "Practical technology integration",
      "Information architecture",
      "Accessible data interfaces",
    ],
    relatedServices: ["ai-solutions", "creative-development"],
    relatedProjects: ["form"],
  },
  {
    id: "fieldnotes",
    slug: "fieldnotes",
    title: "FIELDNOTES",
    subtitle: "Hospitality",
    category: "Brand website",
    type: "Concept project",
    isConceptProject: true,
    description:
      "A distinctive digital presence for a hypothetical boutique hospitality brand, combining editorial typography with immersive imagery.",
    thumbnail: {
      bg: "#2A2318",
      accentColor: "#FF784F",
      label: "Brand · Editorial · Web",
    },
    overview:
      "FIELDNOTES is a conceptual brand website for a boutique hospitality brand. It explores how editorial typography, immersive imagery, and thoughtful transition design can create a digital presence that communicates the texture and atmosphere of a physical place.",
    problem:
      "Boutique hospitality brands often face a choice between generic booking-platform templates and expensive bespoke development. FIELDNOTES explores a middle path: a purposefully designed brand site that can guide a visitor from discovery to booking.",
    goals: [
      "Create a digital experience that communicates brand atmosphere",
      "Design a clear user journey from discovery to inquiry",
      "Demonstrate editorial typographic composition on the web",
      "Show how brand storytelling and conversion can coexist",
    ],
    visualDirection:
      "Deep warm tones with editorial typographic hierarchy. Full-bleed imagery used as a narrative device. Orange accent to reinforce warmth and distinction. Deliberate transitions between content sections. Mobile-first responsive composition.",
    technicalApproach: [
      "Next.js with optimized image handling",
      "Custom scroll transitions between sections",
      "Responsive editorial grid",
      "Accessible booking inquiry form",
      "Structured data for hospitality context",
    ],
    demonstrates: [
      "Brand storytelling",
      "Website design",
      "Responsive development",
      "User-journey optimization",
      "Editorial composition",
    ],
    relatedServices: ["web-development", "creative-development"],
    relatedProjects: ["orbit"],
  },
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
