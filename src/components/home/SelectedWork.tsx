import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PROJECTS } from "@/data/projects";

const CONCEPT_LABEL_COLORS: Record<string, string> = {
  form: "#C8F169",
  orbit: "#171816",
  fieldnotes: "#FF784F",
};

export default function SelectedWork() {
  return (
    <section
      className="bg-[#F3F0E8] section-pad"
      aria-labelledby="work-heading"
    >
      <div className="container-spark">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-micro text-[#92938B] mb-4">03 — SELECTED WORK</p>
            <h2
              className="text-display-md text-[#171816]"
              id="work-heading"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Ideas, made tangible.
            </h2>
          </div>
          <Link
            href="/work"
            className="btn btn-outline-dark text-sm py-3 px-5 self-start lg:self-auto"
          >
            View all work <ArrowRight size={14} className="ml-1" />
          </Link>
        </div>

        {/* Project list */}
        <div className="flex flex-col gap-px bg-[#D8D3C8]">
          {PROJECTS.map((project, index) => {
            const accentColor = project.thumbnail.accentColor;
            const bgColor = project.thumbnail.bg;
            const isLight = bgColor === "#F3F0E8";

            return (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className="group relative bg-[#F3F0E8] grid grid-cols-1 lg:grid-cols-12 overflow-hidden"
                aria-label={`View ${project.title} — ${project.subtitle} case study`}
              >
                {/* Index + metadata */}
                <div className="lg:col-span-1 p-6 lg:p-8 flex items-start">
                  <span className="text-micro text-[#92938B]">
                    0{index + 1}
                  </span>
                </div>

                {/* Project info */}
                <div className="lg:col-span-5 px-6 lg:px-0 lg:py-8 pb-6 flex flex-col justify-between">
                  <div>
                    {/* Concept badge */}
                    <span className="inline-block text-micro bg-[#E7E2D7] text-[#92938B] px-2 py-1 mb-4">
                      CONCEPT PROJECT
                    </span>
                    <h3
                      className="text-display-sm text-[#171816] mb-2"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {project.title}{" "}
                      <span className="text-[#92938B] font-normal">
                        / {project.subtitle}
                      </span>
                    </h3>
                    <p className="text-micro text-[#92938B] mb-4">
                      {project.category}
                    </p>
                    <p className="text-sm text-[#5a5b55] max-w-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 mt-6 text-[0.8125rem] text-[#92938B] group-hover:text-[#171816] transition-colors">
                    View case study
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </div>

                {/* Visual thumbnail */}
                <div className="lg:col-span-6 h-48 lg:h-auto min-h-[200px] relative overflow-hidden flex items-center justify-center">
                  <div
                    className="absolute inset-0"
                    style={{ backgroundColor: bgColor }}
                  />
                  {/* Concept project visual — geometric composition */}
                  <ProjectThumbnail
                    id={project.id}
                    accentColor={accentColor}
                    bg={bgColor}
                    label={project.thumbnail.label}
                  />
                </div>

                {/* Hover accent line */}
                <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 bg-[#171816] transition-all duration-500 lg:duration-700" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

interface ProjectThumbnailProps {
  id: string;
  accentColor: string;
  bg: string;
  label: string;
}

function ProjectThumbnail({ id, accentColor, bg, label }: ProjectThumbnailProps) {
  const isDark = bg === "#171816" || bg === "#2A2318";

  const textColor = isDark ? "#F3F0E8" : "#171816";
  const mutedColor = isDark ? "#343530" : "#D8D3C8";

  return (
    <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-8">
      {/* SVG geometric thumbnail */}
      <svg
        viewBox="0 0 200 160"
        width="200"
        height="160"
        fill="none"
        aria-hidden="true"
        className="mb-4"
      >
        {id === "form" && (
          <>
            <rect x="40" y="30" width="120" height="100" rx="2" fill="#2a2b27" stroke="#343530" strokeWidth="1" />
            <ellipse cx="100" cy="80" rx="30" ry="30" fill="none" stroke={accentColor} strokeWidth="2" />
            <polygon points="100,56 108,72 126,72 112,84 118,100 100,90 82,100 88,84 74,72 92,72" fill={accentColor} opacity="0.9" />
            <rect x="70" y="118" width="60" height="2" rx="1" fill={accentColor} opacity="0.5" />
          </>
        )}
        {id === "orbit" && (
          <>
            <rect x="20" y="20" width="160" height="120" rx="4" fill="#F3F0E8" stroke="#D8D3C8" strokeWidth="1" />
            <rect x="32" y="32" width="80" height="8" rx="2" fill="#D8D3C8" />
            <rect x="32" y="48" width="136" height="1" fill="#E7E2D7" />
            <rect x="32" y="60" width="50" height="6" rx="1" fill="#171816" opacity="0.15" />
            <rect x="32" y="72" width="136" height="5" rx="1" fill="#D8D3C8" />
            <rect x="32" y="84" width="110" height="5" rx="1" fill="#D8D3C8" />
            <rect x="32" y="96" width="90" height="5" rx="1" fill="#D8D3C8" />
            <rect x="132" y="54" width="24" height="14" rx="2" fill="#C8F169" />
            <rect x="32" y="112" width="40" height="14" rx="2" fill="#171816" />
          </>
        )}
        {id === "fieldnotes" && (
          <>
            <rect x="20" y="20" width="160" height="120" rx="2" fill="#2A2318" />
            <rect x="20" y="20" width="160" height="70" fill="#3a3020" />
            <rect x="32" y="100" width="136" height="1" fill="#3a3020" opacity="0.5" />
            <text x="32" y="118" fontFamily="Georgia, serif" fontSize="18" fontWeight="bold" fill="#FF784F" opacity="0.9">FIELDNOTES</text>
            <text x="32" y="132" fontFamily="Georgia, serif" fontSize="8" fill="#92938B">A boutique hospitality brand</text>
            <polygon points="170,40 180,55 160,55" fill="#FF784F" opacity="0.7" />
          </>
        )}
      </svg>

      {/* Label chips */}
      <div className="flex gap-2 flex-wrap justify-center">
        {label.split(" · ").map((chip) => (
          <span
            key={chip}
            className="text-micro px-2 py-0.5 rounded-none"
            style={{
              background: `${accentColor}22`,
              color: accentColor,
              border: `1px solid ${accentColor}44`,
            }}
          >
            {chip}
          </span>
        ))}
      </div>
    </div>
  );
}
