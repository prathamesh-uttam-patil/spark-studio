// src/data/faq.ts

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const HOMEPAGE_FAQS: FAQ[] = [
  {
    id: "what-does-spark-do",
    question: "What does SPARK Studio do?",
    answer:
      "SPARK is a creative technology studio. We design and build digital experiences—from business websites and landing pages to AI-powered tools, interactive 3D experiences, and custom digital products. The common thread is that we bring together design and technology intentionally, rather than treating them as separate workstreams.",
  },
  {
    id: "types-of-businesses",
    question: "What types of businesses do you work with?",
    answer:
      "We work with businesses across a range of industries—startups, growing companies, local businesses, and established brands. What matters more than industry is that you have a clear challenge and are looking for thoughtful, custom work rather than an off-the-shelf template.",
  },
  {
    id: "build-website-from-scratch",
    question: "Can you build a complete website from scratch?",
    answer:
      "Yes. We handle everything from strategy and design through to development and launch. If you have an existing brand and content, we work with that. If you're starting from zero, we establish the structure and visual direction together.",
  },
  {
    id: "ai-applications",
    question: "Do you develop AI-powered applications?",
    answer:
      "Yes. We build practical AI-powered tools and interfaces designed around specific workflows—not generic chatbots. If you have a repetitive information task, a workflow bottleneck, or an idea for an AI-assisted feature, we're interested in figuring out whether there's a useful and well-designed solution.",
  },
  {
    id: "interactive-3d",
    question: "Can you build interactive 3D websites?",
    answer:
      "Yes. We use Three.js and React Three Fiber to build web-based 3D experiences—product visualizations, scroll-driven 3D storytelling, interactive objects, and animated scenes. We design these experiences to work gracefully on all devices and to degrade cleanly when WebGL isn't supported.",
  },
  {
    id: "how-project-begins",
    question: "How does a project typically begin?",
    answer:
      "It starts with a discovery call. We talk through what you're building, what isn't working, and what you're hoping to achieve. From there, we define scope, timeline, and approach. Nothing is assumed before we understand the specific situation.",
  },
  {
    id: "pricing",
    question: "How much does a project cost?",
    answer:
      "It depends on scope, complexity, and integrations. A focused landing page is very different from a multi-page AI-powered application. We don't publish a fixed rate card because projects genuinely vary. The best way to get a useful estimate is to have a conversation. We'll give you a clear picture of what's involved.",
  },
  {
    id: "how-to-start",
    question: "How can I start a project with SPARK?",
    answer:
      "Book a discovery call or send us a project inquiry. Either way, we'll respond promptly, ask some questions to understand the situation, and give you a honest picture of whether and how we can help.",
  },
];
