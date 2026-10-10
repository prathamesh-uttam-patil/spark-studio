import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import { PROJECTS, getProject } from "@/data/projects";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return createMetadata({
    title: `${project.title} / ${project.subtitle}`,
    description: project.description,
  });
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const related = PROJECTS.filter(
    (p) => project.relatedProjects.includes(p.id) && p.id !== project.id
  );

  return (
    <>
      {/* Header */}
      <section
        className="pt-28 md:pt-36 pb-16 md:pb-20"
        style={{ backgroundColor: project.thumbnail.bg }}
      >
        <div className="container-spark">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-micro text-[#92938B] hover:text-[#F3F0E8] transition-colors mb-8"
          >
            <ArrowLeft size={12} /> All work
          </Link>

          {/* Concept badge */}
          <div className="mb-6">
            <span
              className="text-micro px-3 py-1.5"
              style={{
                background: `${project.thumbnail.accentColor}22`,
                color: project.thumbnail.accentColor,
                border: `1px solid ${project.thumbnail.accentColor}44`,
              }}
            >
              CONCEPT PROJECT
            </span>
          </div>

          <h1
            className="text-display-xl mb-4"
            style={{
              fontFamily: "var(--font-display)",
              color:
                project.thumbnail.bg === "#F3F0E8" ? "#171816" : "#F3F0E8",
            }}
          >
            {project.title}
          </h1>
          <p
            className="text-display-md font-normal mb-6"
            style={{
              fontFamily: "var(--font-display)",
              color:
                project.thumbnail.bg === "#F3F0E8" ? "#92938B" : "#92938B",
            }}
          >
            {project.subtitle}
          </p>
          <p className="text-micro" style={{ color: project.thumbnail.accentColor }}>
            {project.category}
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-[#F3F0E8] section-pad">
        <div className="container-spark">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <p className="text-caption text-[#92938B] mb-4">OVERVIEW</p>
              <p className="text-body-lg text-[#5a5b55]">{project.overview}</p>
            </div>
            <div className="lg:col-span-5">
              <p className="text-caption text-[#92938B] mb-4">
                WHAT THIS DEMONSTRATES
              </p>
              <ul className="flex flex-col gap-3">
                {project.demonstrates.map((d) => (
                  <li
                    key={d}
                    className="flex items-center gap-3 text-sm text-[#171816]"
                  >
                    <span className="w-1.5 h-1.5 bg-[#C8F169] flex-shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Problem + Goals */}
      <section className="bg-[#171816] section-pad border-t border-[#343530]">
        <div className="container-spark">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-caption text-[#92938B] mb-4">
                THE PROBLEM / OPPORTUNITY
              </p>
              <p className="text-body text-[#92938B] leading-relaxed">
                {project.problem}
              </p>
            </div>
            <div>
              <p className="text-caption text-[#92938B] mb-4">
                DESIGN GOALS
              </p>
              <ul className="flex flex-col gap-4">
                {project.goals.map((goal, i) => (
                  <li key={goal} className="flex items-start gap-4">
                    <span
                      className="text-micro text-[#343530] flex-shrink-0 pt-0.5"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm text-[#92938B]">{goal}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Visual direction + Technical approach */}
      <section className="bg-[#10110F] section-pad border-t border-[#343530]">
        <div className="container-spark">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-caption text-[#92938B] mb-4">VISUAL DIRECTION</p>
              <p className="text-body text-[#92938B] leading-relaxed">
                {project.visualDirection}
              </p>
            </div>
            <div>
              <p className="text-caption text-[#92938B] mb-4">
                TECHNICAL APPROACH
              </p>
              <ul className="flex flex-col gap-3">
                {project.technicalApproach.map((t) => (
                  <li
                    key={t}
                    className="flex items-center gap-3 text-sm text-[#92938B]"
                  >
                    <span className="w-1 h-1 bg-[#343530] flex-shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related projects */}
      {related.length > 0 && (
        <section className="bg-[#171816] section-pad border-t border-[#343530]">
          <div className="container-spark">
            <p className="text-caption text-[#92938B] mb-10">RELATED PROJECTS</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#343530]">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/work/${rel.slug}`}
                  className="group bg-[#171816] p-8 flex items-center justify-between"
                >
                  <div>
                    <span
                      className="text-micro px-2 py-0.5 mb-3 inline-block"
                      style={{
                        background: `${rel.thumbnail.accentColor}22`,
                        color: rel.thumbnail.accentColor,
                      }}
                    >
                      CONCEPT PROJECT
                    </span>
                    <h3
                      className="text-xl font-semibold text-[#F3F0E8]"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {rel.title}{" "}
                      <span className="text-[#92938B] font-normal">
                        / {rel.subtitle}
                      </span>
                    </h3>
                    <p className="text-micro text-[#92938B] mt-1">
                      {rel.category}
                    </p>
                  </div>
                  <ArrowRight
                    size={18}
                    className="text-[#343530] group-hover:text-[#C8F169] group-hover:translate-x-1 transition-all flex-shrink-0 ml-4"
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-[#F3F0E8] section-pad">
        <div className="container-spark">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div>
              <h2
                className="text-display-md text-[#171816] mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Interested in something
                <br />
                like this for your project?
              </h2>
              <p className="text-body text-[#5a5b55]">
                Let&apos;s start with a conversation.
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
