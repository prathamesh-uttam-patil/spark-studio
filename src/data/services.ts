// src/data/services.ts

export interface Service {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  problem: string;
  suitableFor: string[];
  deliverables: string[];
  approach: string;
  capabilities: string[];
  faqs: { q: string; a: string }[];
  relatedProjects: string[];
  icon: string;
}

export const SERVICES: Service[] = [
  {
    id: "web-development",
    slug: "web-development",
    title: "Digital Experiences",
    tagline: "Websites that work as hard as your business.",
    description:
      "Websites and landing pages that combine clear messaging, thoughtful design, and purposeful interactions.",
    problem:
      "Most business websites look like everyone else's. They load slowly, lack a clear message, and don't make it obvious what to do next. Visitors leave without converting.",
    suitableFor: [
      "Businesses launching a new product or rebranding",
      "Startups that need a strong first impression",
      "Growing companies whose current site no longer reflects what they do",
      "Brands that want a website that actually generates leads",
    ],
    deliverables: [
      "Custom business website",
      "Landing pages with conversion focus",
      "Responsive design across all devices",
      "Performance-optimised implementation",
      "SEO-ready structure and metadata",
      "Content management setup",
      "Analytics integration",
    ],
    approach:
      "We start by understanding your business, audience, and goals—not by choosing a template. Every design decision is tied to a clear purpose: communicating your value proposition, guiding the right visitors toward the right action, and creating an impression that lasts.",
    capabilities: [
      "Next.js and React",
      "Tailwind CSS and custom design systems",
      "TypeScript",
      "Headless CMS integration",
      "Performance optimization",
      "Accessibility (WCAG 2.2 AA target)",
      "Core Web Vitals optimization",
    ],
    faqs: [
      {
        q: "Do you work from our existing brand, or do you create it from scratch?",
        a: "Both. If you have existing brand guidelines, we work within them. If you need a visual direction developed from scratch, that becomes part of the scope.",
      },
      {
        q: "How long does a website project take?",
        a: "It depends on scope and complexity. A focused landing page might take 2–4 weeks. A full multi-page business website typically takes 6–12 weeks. We establish a timeline in the discovery phase.",
      },
      {
        q: "Will I be able to update the content myself?",
        a: "Yes. We can integrate a headless CMS so your team can manage content without touching code.",
      },
    ],
    relatedProjects: ["fieldnotes"],
    icon: "Globe",
  },
  {
    id: "ai-solutions",
    slug: "ai-solutions",
    title: "AI & Intelligent Tools",
    tagline: "Practical AI built around real workflows.",
    description:
      "Practical AI-powered experiences and tools designed around real workflows and useful outcomes.",
    problem:
      "The AI space is full of hype and generic implementations. Most businesses want something specific: a tool that fits their workflow, reduces a real bottleneck, and works reliably.",
    suitableFor: [
      "Businesses with repetitive information workflows",
      "Teams that want to automate a specific, well-defined process",
      "Companies exploring AI without knowing exactly where to start",
      "Startups building a product with an AI-powered feature",
    ],
    deliverables: [
      "AI-powered business tools",
      "Workflow automation prototypes",
      "Intelligent interfaces",
      "API integrations",
      "Custom AI applications",
      "Proof-of-concept implementations",
    ],
    approach:
      "We don't start with the technology—we start with the workflow. What is the specific task? Who does it? What slows it down? Only then do we evaluate whether AI is the right tool, and which approach fits the problem best.",
    capabilities: [
      "LLM API integration (OpenAI, Anthropic, others)",
      "Retrieval-augmented generation (RAG)",
      "Custom prompt engineering",
      "Structured data extraction",
      "AI-powered interface design",
      "Workflow automation",
      "API design and integration",
    ],
    faqs: [
      {
        q: "Do you build entirely custom AI models?",
        a: "For most business problems, custom-trained models aren't necessary. We typically integrate existing APIs—like OpenAI or Anthropic—with your specific data and workflows. Full model training is a different and considerably larger scope.",
      },
      {
        q: "Can you connect AI to our existing tools?",
        a: "Often yes. The specifics depend on whether your existing tools have accessible APIs and what security constraints apply.",
      },
      {
        q: "How do you handle data privacy?",
        a: "We document exactly which data flows where, use secure API connections, and design systems that don't send sensitive information unnecessarily.",
      },
    ],
    relatedProjects: ["orbit"],
    icon: "Cpu",
  },
  {
    id: "interactive-experiences",
    slug: "interactive-experiences",
    title: "Interactive & 3D Experiences",
    tagline: "Experiences worth remembering.",
    description:
      "Digital experiences that use motion, interaction, and 3D to communicate ideas in more memorable ways.",
    problem:
      "Standard websites all feel the same. When your product is distinctive, your digital presence should be too. Some ideas need motion, depth, and interactivity to be communicated clearly.",
    suitableFor: [
      "Brands launching a distinctive product or campaign",
      "Companies with a product that benefits from visual demonstration",
      "Businesses in architecture, design, fashion, or technology",
      "Anyone who wants their digital presence to genuinely stand out",
    ],
    deliverables: [
      "Interactive product presentations",
      "3D web experiences",
      "Scroll-driven storytelling",
      "Product visualizations",
      "Creative interfaces",
      "Motion-designed web experiences",
    ],
    approach:
      "Every interactive element has a purpose. We don't add animation to fill space—we use it to guide attention, communicate transitions, and make information more intuitive. The interaction model is designed before the first line of animation code is written.",
    capabilities: [
      "Three.js and WebGL",
      "React Three Fiber",
      "GSAP ScrollTrigger",
      "3D model integration and optimization",
      "Procedural geometry",
      "Physics-based interactions",
      "Reduced-motion accessibility",
    ],
    faqs: [
      {
        q: "Do we need to provide 3D models?",
        a: "Not necessarily. Depending on the concept, we can work with existing models, source appropriate free assets, or build scenes from geometric primitives.",
      },
      {
        q: "Will interactive experiences work on mobile?",
        a: "Yes, with appropriate adaptation. 3D experiences are designed with mobile performance in mind—we reduce complexity, adjust rendering settings, and adapt interactions for touch.",
      },
      {
        q: "Can this work alongside an existing website?",
        a: "Yes. Interactive sections or microexperiences can be integrated into an existing site or built as a standalone experience.",
      },
    ],
    relatedProjects: ["form"],
    icon: "Box",
  },
  {
    id: "creative-development",
    slug: "creative-development",
    title: "Creative Development",
    tagline: "Beyond templates, into territory.",
    description:
      "Distinctive digital products, experimental interfaces, and custom implementations that go beyond standard templates.",
    problem:
      "Templates get you to acceptable quickly. They don't get you to distinctive. When the problem requires a custom solution—a novel interface, an unusual interaction model, or a digital product that doesn't fit into an existing category—you need someone who can build it from first principles.",
    suitableFor: [
      "Product teams that need a custom frontend component or feature",
      "Studios that need creative development support",
      "Companies building a digital tool without a clear template",
      "Anyone with a well-defined creative problem that needs careful technical execution",
    ],
    deliverables: [
      "Digital product prototypes",
      "Custom interactive components",
      "Creative frontend development",
      "Web-based experiments",
      "Custom digital solutions",
      "Technical creative direction",
    ],
    approach:
      "Creative development lives at the intersection of engineering and design. We start with a clear brief, prototype early, iterate on interactions, and refine the implementation until it matches the intention. The result should feel inevitable rather than complicated.",
    capabilities: [
      "Advanced React patterns",
      "Canvas and WebGL",
      "SVG animation",
      "Custom data visualization",
      "Complex state management",
      "Performance optimization",
      "TypeScript",
    ],
    faqs: [
      {
        q: "Can you join an existing team on a specific feature?",
        a: "Yes. We can work within your existing codebase and alongside your team on a scoped deliverable.",
      },
      {
        q: "Do you take on experimental or research-led projects?",
        a: "Sometimes. The right conditions are a clear outcome even if the path is exploratory, and a team that understands the nature of the work.",
      },
    ],
    relatedProjects: ["form", "orbit"],
    icon: "Code2",
  },
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
