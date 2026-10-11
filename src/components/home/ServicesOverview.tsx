import React from "react";
import Link from "next/link";
import { Globe, Cpu, Box, Code2, ArrowRight } from "lucide-react";

const SERVICES = [
  {
    icon: Globe,
    title: "Digital Experiences",
    slug: "web-development",
    description:
      "Websites and landing pages that combine clear messaging, thoughtful design, and purposeful interactions.",
    items: [
      "Business websites",
      "Landing pages",
      "Brand websites",
      "Responsive digital experiences",
      "Performance & SEO",
    ],
    accent: "#C8F169",
    bg: "#1d1e1b",
  },
  {
    icon: Cpu,
    title: "AI & Intelligent Tools",
    slug: "ai-solutions",
    description:
      "Practical AI-powered experiences and tools designed around real workflows and useful outcomes.",
    items: [
      "AI-powered business tools",
      "Workflow automation",
      "Intelligent interfaces",
      "API integrations",
      "Custom AI applications",
    ],
    accent: "#C8F169",
    bg: "#1d1e1b",
  },
  {
    icon: Box,
    title: "Interactive & 3D",
    slug: "interactive-experiences",
    description:
      "Digital experiences that use motion, interaction, and 3D to communicate ideas in more memorable ways.",
    items: [
      "Interactive product presentations",
      "3D web experiences",
      "Scroll-driven storytelling",
      "Product visualizations",
      "Creative interfaces",
    ],
    accent: "#C8F169",
    bg: "#1d1e1b",
  },
  {
    icon: Code2,
    title: "Creative Development",
    slug: "creative-development",
    description:
      "Distinctive digital products, experimental interfaces, and custom implementations beyond standard templates.",
    items: [
      "Digital product prototypes",
      "Custom interactive components",
      "Creative frontend development",
      "Web-based experiments",
      "Custom digital solutions",
    ],
    accent: "#C8F169",
    bg: "#1d1e1b",
  },
];

export default function ServicesOverview() {
  return (
    <section
      className="bg-[#171816] section-pad border-t border-[#343530]"
      aria-labelledby="services-heading"
    >
      <div className="container-spark">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-micro text-[#92938B] mb-4">02 — SERVICES</p>
            <h2
              className="text-display-md text-[#F3F0E8]"
              id="services-heading"
              style={{ fontFamily: "var(--font-display)" }}
            >
              What we bring
              <br />
              to the table.
            </h2>
          </div>
          <Link
            href="/services"
            className="btn btn-outline text-sm py-3 px-5 self-start lg:self-auto"
          >
            All services <ArrowRight size={14} className="ml-1" />
          </Link>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#343530]">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.slug}
                className="bg-[#171816] p-8 lg:p-10 group relative"
              >
                {/* Number + Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-micro text-[#92938B] font-semibold">
                    0{i + 1}
                  </span>
                  <Icon
                    size={20}
                    className="text-[#92938B] group-hover:text-[#C8F169] transition-colors duration-300"
                  />
                </div>

                <h3
                  className="text-display-sm text-[#F3F0E8] mb-4"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {service.title}
                </h3>
                <p className="text-[#92938B] text-sm leading-relaxed mb-6 max-w-sm">
                  {service.description}
                </p>

                {/* Item list */}
                <ul className="flex flex-col gap-1.5 mb-8">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-[#92938B]"
                    >
                      <span
                        className="w-1 h-1 rounded-full bg-[#343530] flex-shrink-0"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/services/${service.slug}`}
                  className="text-[0.8125rem] text-[#92938B] hover:text-[#C8F169] transition-colors flex items-center gap-1.5 group/link"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn more
                  <ArrowRight
                    size={12}
                    className="group-hover/link:translate-x-1 transition-transform"
                  />
                </Link>

                {/* Hover accent line */}
                <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-px bg-[#C8F169] transition-all duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
