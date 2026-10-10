import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import { SERVICES, getService } from "@/data/services";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return createMetadata({
    title: service.title,
    description: `${service.description} ${service.approach.slice(0, 100)}...`,
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      {/* Header */}
      <section className="bg-[#10110F] page-header-pad">
        <div className="container-spark">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-micro text-[#92938B] hover:text-[#C8F169] transition-colors mb-8"
          >
            <ArrowLeft size={12} /> All services
          </Link>
          <p className="text-micro text-[#C8F169] mb-4">SERVICE</p>
          <h1
            className="text-display-xl text-[#F3F0E8] max-w-2xl mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {service.title}
          </h1>
          <p className="text-body-lg text-[#92938B] max-w-lg">
            {service.tagline}
          </p>
        </div>
      </section>

      {/* Problem */}
      <section className="bg-[#F3F0E8] section-pad-sm">
        <div className="container-spark">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-caption text-[#92938B] mb-4">THE PROBLEM</p>
              <p className="text-body-lg text-[#5a5b55]">{service.problem}</p>
            </div>
            <div>
              <p className="text-caption text-[#92938B] mb-4">OUR APPROACH</p>
              <p className="text-body text-[#5a5b55]">{service.approach}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables + Suitable For */}
      <section className="bg-[#171816] section-pad border-t border-[#343530]">
        <div className="container-spark">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div>
              <p className="text-caption text-[#92938B] mb-6">
                TYPICAL DELIVERABLES
              </p>
              <ul className="flex flex-col gap-3">
                {service.deliverables.map((d) => (
                  <li
                    key={d}
                    className="flex items-center gap-3 text-sm text-[#F3F0E8]"
                  >
                    <span className="w-1.5 h-1.5 bg-[#C8F169] flex-shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-caption text-[#92938B] mb-6">SUITABLE FOR</p>
              <ul className="flex flex-col gap-3">
                {service.suitableFor.map((s) => (
                  <li
                    key={s}
                    className="flex items-start gap-3 text-sm text-[#92938B]"
                  >
                    <span className="w-1.5 h-1.5 bg-[#343530] flex-shrink-0 mt-1" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-caption text-[#92938B] mb-6">CAPABILITIES</p>
              <ul className="flex flex-col gap-3">
                {service.capabilities.map((c) => (
                  <li
                    key={c}
                    className="flex items-center gap-3 text-sm text-[#92938B]"
                  >
                    <span className="w-1.5 h-1.5 bg-[#343530] flex-shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      {service.faqs.length > 0 && (
        <section className="bg-[#10110F] section-pad border-t border-[#343530]">
          <div className="container-spark">
            <p className="text-caption text-[#92938B] mb-8">
              QUESTIONS ABOUT THIS SERVICE
            </p>
            <div className="flex flex-col gap-px bg-[#343530] max-w-3xl">
              {service.faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="bg-[#10110F] p-6 lg:p-8"
                >
                  <p
                    className="text-[#F3F0E8] font-medium mb-3"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {faq.q}
                  </p>
                  <p className="text-sm text-[#92938B] leading-relaxed">
                    {faq.a}
                  </p>
                </div>
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
                Ready to explore what&apos;s possible?
              </h2>
              <p className="text-body text-[#5a5b55]">
                Start with a conversation. We&apos;ll help you understand what the right next step is.
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
