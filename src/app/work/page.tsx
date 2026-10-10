import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import { PROJECTS } from "@/data/projects";

export const metadata: Metadata = createMetadata({
  title: "Work",
  description:
    "Conceptual projects from SPARK Studio demonstrating our capabilities across digital experiences, AI tools, interactive 3D, and creative development.",
});

export default function WorkPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="bg-[#10110F] pt-36 md:pt-44 pb-16 md:pb-20"
        style={{ paddingTop: "clamp(9rem, 15vw, 12rem)" }}
      >
        <div className="container-spark">
          <p className="text-micro text-[#C8F169] mb-6">WORK</p>
          <h1
            className="text-display-xl text-[#F3F0E8] max-w-2xl mb-8"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Ideas, made
            <br />
            tangible.
          </h1>
          <p className="text-body-lg text-[#92938B] max-w-lg">
            The following projects are conceptual—created to demonstrate SPARK&apos;s
            approach, capabilities, and range. Each is clearly labeled as such.
          </p>
        </div>
      </section>

      {/* Project grid */}
      <section className="bg-[#171816] section-pad border-t border-[#343530]">
        <div className="container-spark">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[#343530]">
            {PROJECTS.map((project) => {
              const isDark = project.thumbnail.bg !== "#F3F0E8";
              return (
                <Link
                  key={project.slug}
                  href={`/work/${project.slug}`}
                  className="group relative bg-[#171816] overflow-hidden"
                  aria-label={`${project.title} / ${project.subtitle} — ${project.category}`}
                >
                  {/* Visual area */}
                  <div
                    className="h-64 flex items-center justify-center relative overflow-hidden"
                    style={{ backgroundColor: project.thumbnail.bg }}
                  >
                    {/* Concept badge — always visible */}
                    <span
                      className="absolute top-4 left-4 text-micro px-2 py-1 z-10"
                      style={{
                        background: `${project.thumbnail.accentColor}22`,
                        color: project.thumbnail.accentColor,
                        border: `1px solid ${project.thumbnail.accentColor}44`,
                      }}
                    >
                      CONCEPT PROJECT
                    </span>

                    {/* Geometric placeholder visual */}
                    <svg
                      viewBox="0 0 120 120"
                      width="120"
                      height="120"
                      fill="none"
                      aria-hidden="true"
                      className="group-hover:scale-105 transition-transform duration-500"
                    >
                      {project.id === "form" && (
                        <>
                          <polygon points="60,8 100,30 100,90 60,112 20,90 20,30" fill="#2a2b27" stroke="#343530" strokeWidth="1.5" />
                          <polygon points="60,32 76,48 76,72 60,88 44,72 44,48" fill="none" stroke="#C8F169" strokeWidth="1" />
                          <path d="M60,48 L63,58 L74,58 L66,64 L68,74 L60,68 L52,74 L54,64 L46,58 L57,58 Z" fill="#C8F169" />
                        </>
                      )}
                      {project.id === "orbit" && (
                        <>
                          <rect x="12" y="20" width="96" height="80" rx="4" fill="#E7E2D7" stroke="#D8D3C8" strokeWidth="1" />
                          <rect x="20" y="30" width="55" height="6" rx="2" fill="#C8F169" />
                          <rect x="20" y="44" width="80" height="2" fill="#D8D3C8" />
                          <rect x="20" y="54" width="80" height="3" rx="1" fill="#D8D3C8" opacity="0.7" />
                          <rect x="20" y="64" width="64" height="3" rx="1" fill="#D8D3C8" opacity="0.7" />
                          <rect x="20" y="74" width="72" height="3" rx="1" fill="#D8D3C8" opacity="0.7" />
                          <rect x="76" y="26" width="16" height="10" rx="2" fill="#171816" />
                        </>
                      )}
                      {project.id === "fieldnotes" && (
                        <>
                          <rect x="8" y="8" width="104" height="104" rx="2" fill="#2A2318" />
                          <rect x="8" y="8" width="104" height="55" fill="#3a3020" />
                          <polygon points="90,26 108,38 90,38" fill="#FF784F" opacity="0.7" />
                          <text x="18" y="84" fontFamily="Georgia, serif" fontSize="14" fontWeight="bold" fill="#FF784F">FIELD</text>
                          <text x="18" y="100" fontFamily="Georgia, serif" fontSize="14" fontWeight="bold" fill="#FF784F">NOTES</text>
                        </>
                      )}
                    </svg>
                  </div>

                  {/* Info */}
                  <div className="p-8 border-t border-[#343530]">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <h2
                          className="text-display-sm text-[#F3F0E8] mb-1"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {project.title}
                          <span className="text-[#92938B] font-normal">
                            {" "}/ {project.subtitle}
                          </span>
                        </h2>
                        <p className="text-micro text-[#92938B]">
                          {project.category}
                        </p>
                      </div>
                      <ArrowRight
                        size={18}
                        className="text-[#343530] group-hover:text-[#C8F169] group-hover:translate-x-1 transition-all flex-shrink-0 mt-1"
                      />
                    </div>
                    <p className="text-sm text-[#92938B]">
                      {project.description}
                    </p>
                  </div>
                </Link>
              );
            })}

            {/* "More coming" card */}
            <div className="bg-[#171816] p-8 flex items-center justify-center min-h-[300px] border border-dashed border-[#343530] lg:col-span-1">
              <div className="text-center">
                <div className="w-8 h-8 border border-[#343530] mx-auto mb-4 flex items-center justify-center">
                  <span className="text-[#343530] text-lg">+</span>
                </div>
                <p className="text-sm text-[#343530]">
                  Real client projects coming soon.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F3F0E8] section-pad">
        <div className="container-spark">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div>
              <h2
                className="text-display-md text-[#171816] mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Want to see what we&apos;d
                <br />
                build for you?
              </h2>
              <p className="text-body text-[#5a5b55]">
                Start with a conversation.
              </p>
            </div>
            <Link
              href="/contact"
              className="btn btn-primary py-4 px-8 text-[0.9375rem] flex-shrink-0 group"
            >
              Book a discovery call
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
