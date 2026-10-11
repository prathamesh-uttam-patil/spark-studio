import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Globe, Cpu, Box, Code2 } from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import { SERVICES } from "@/data/services";

export const metadata: Metadata = createMetadata({
  title: "Services",
  description:
    "SPARK Studio offers digital experiences, AI-powered tools, interactive 3D web experiences, and creative development — all designed around real business needs.",
});

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Globe,
  Cpu,
  Box,
  Code2,
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="bg-[#10110F] pt-36 md:pt-44 pb-16 md:pb-20"
        style={{ paddingTop: "clamp(9rem, 15vw, 12rem)" }}
      >
        <div className="container-spark">
          <p className="text-micro text-[#C8F169] mb-6">SERVICES</p>
          <h1
            className="text-display-xl text-[#F3F0E8] max-w-2xl mb-8"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Four capabilities.
            <br />
            One coherent studio.
          </h1>
          <p className="text-body-lg text-[#92938B] max-w-lg">
            SPARK brings together design and technology across four service
            areas. They overlap intentionally — most projects draw on more than
            one.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-[#171816] section-pad border-t border-[#343530]">
        <div className="container-spark">
          <div className="flex flex-col gap-px bg-[#343530]">
            {SERVICES.map((service, i) => {
              const Icon = ICON_MAP[service.icon] || Globe;
              return (
                <div
                  key={service.id}
                  className="bg-[#171816] p-8 md:p-12 lg:p-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
                >
                  {/* Left: Identity & Link */}
                  <div className="lg:col-span-5 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <span className="text-micro text-[#C8F169] font-bold tracking-wider">
                          0{i + 1}
                        </span>
                        <div className="w-8 h-px bg-[#343530]" />
                        <Icon size={16} className="text-[#C8F169]" />
                      </div>
                      <h2
                        className="text-display-md text-[#F3F0E8] mb-3"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {service.title}
                      </h2>
                      <p className="text-sm text-[#92938B] italic mb-8">
                        &ldquo;{service.tagline}&rdquo;
                      </p>
                    </div>

                    <Link
                      href={`/services/${service.slug}`}
                      className="btn btn-outline text-sm py-2.5 px-5 inline-flex items-center gap-2 self-start"
                    >
                      View full details <ArrowRight size={14} />
                    </Link>
                  </div>

                  {/* Right: Core facts & scope */}
                  <div className="lg:col-span-7 flex flex-col gap-6 lg:pl-8 lg:border-l lg:border-[#343530]">
                    <p className="text-base text-[#F3F0E8] leading-relaxed">
                      {service.description}
                    </p>

                    <div>
                      <p className="text-micro text-[#C8F169] font-semibold tracking-wider mb-3.5">
                        CORE DELIVERABLES
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.deliverables.slice(0, 4).map((d) => (
                          <li
                            key={d}
                            className="flex items-center gap-2.5 text-sm text-[#E7E2D7]"
                          >
                            <span className="w-1.5 h-1.5 bg-[#C8F169] rounded-full flex-shrink-0" />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-[#343530]/60 flex flex-col sm:flex-row sm:items-baseline gap-1.5 sm:gap-2 text-sm">
                      <span className="text-micro text-[#92938B] font-semibold tracking-wider shrink-0">
                        IDEAL FOR:
                      </span>
                      <span className="text-sm text-[#92938B]">
                        {service.suitableFor[0]}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
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
                Not sure which service fits?
              </h2>
              <p className="text-body text-[#5a5b55]">
                That&apos;s what the discovery call is for. Tell us what you
                need — we&apos;ll figure out the right approach.
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
