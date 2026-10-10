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
      <section className="bg-[#10110F] pt-12 md:pt-16 pb-16 md:pb-20">
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
                  className="bg-[#171816] p-10 lg:p-14 grid grid-cols-1 lg:grid-cols-12 gap-8"
                >
                  <div className="lg:col-span-4">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-micro text-[#343530]">
                        0{i + 1}
                      </span>
                      <Icon size={18} className="text-[#C8F169]" />
                    </div>
                    <h2
                      className="text-display-md text-[#F3F0E8] mb-4"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {service.title}
                    </h2>
                    <p className="text-sm text-[#92938B] italic mb-6">
                      &ldquo;{service.tagline}&rdquo;
                    </p>
                    <Link
                      href={`/services/${service.slug}`}
                      className="btn btn-outline text-sm py-3 px-5 inline-flex"
                    >
                      Learn more <ArrowRight size={14} className="ml-1" />
                    </Link>
                  </div>

                  <div className="lg:col-span-4">
                    <p className="text-[#92938B] text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <p className="text-caption text-[#343530] mb-3">
                      TYPICAL DELIVERABLES
                    </p>
                    <ul className="flex flex-col gap-2">
                      {service.deliverables.map((d) => (
                        <li
                          key={d}
                          className="flex items-center gap-2 text-sm text-[#92938B]"
                        >
                          <span className="w-1 h-1 bg-[#C8F169] flex-shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="lg:col-span-4">
                    <p className="text-caption text-[#343530] mb-3">
                      SUITABLE FOR
                    </p>
                    <ul className="flex flex-col gap-2 mb-8">
                      {service.suitableFor.map((s) => (
                        <li
                          key={s}
                          className="flex items-start gap-2 text-sm text-[#92938B]"
                        >
                          <span className="w-1 h-1 bg-[#343530] flex-shrink-0 mt-1.5" />
                          {s}
                        </li>
                      ))}
                    </ul>
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
