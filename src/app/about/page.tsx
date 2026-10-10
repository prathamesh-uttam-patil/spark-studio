import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "About",
  description:
    "SPARK Studio is a creative technology studio founded by Prathamesh and Rohan, combining design and technology to build distinctive digital experiences.",
});

const CAPABILITIES = [
  "Website design & development",
  "Landing page design",
  "AI-powered tools & interfaces",
  "Interactive 3D web experiences",
  "Scroll-driven storytelling",
  "Creative frontend development",
  "Performance optimization",
  "Accessibility implementation",
  "API integration",
  "Digital product prototyping",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#10110F] pt-36 pb-20">
        <div className="container-spark">
          <p className="text-micro text-[#C8F169] mb-6">ABOUT SPARK</p>
          <h1
            className="text-display-xl text-[#F3F0E8] max-w-2xl mb-8"
            style={{ fontFamily: "var(--font-display)" }}
          >
            A studio built
            <br />
            on intention.
          </h1>
          <p className="text-body-lg text-[#92938B] max-w-lg">
            SPARK is an independent creative technology studio founded by
            Prathamesh and Rohan.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-[#F3F0E8] section-pad">
        <div className="container-spark">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <p className="text-caption text-[#92938B] mb-6">PHILOSOPHY</p>
              <h2
                className="text-display-md text-[#171816]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Wild creative energy.
                <br />
                <span className="text-[#92938B]">Restrained execution.</span>
              </h2>
            </div>
            <div className="lg:col-span-7 flex flex-col gap-6">
              <p className="text-body text-[#5a5b55]">
                We believe that digital work is most effective when it is
                specific. Not trying to appeal to everyone. Not chasing
                trends. Not adding features because they&apos;re possible. Instead:
                understanding the exact problem, designing a clear solution,
                and building it with care.
              </p>
              <p className="text-body text-[#5a5b55]">
                The most effective digital experiences feel inevitable—as if
                they couldn&apos;t have been built any other way. Getting to
                that point takes patience, clear thinking, and the willingness
                to remove things rather than add them.
              </p>
              <p className="text-body text-[#5a5b55]">
                SPARK brings together design and technology not as separate
                disciplines but as a single integrated practice. The people
                thinking about your user experience are the same people
                implementing it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="bg-[#171816] section-pad border-t border-[#343530]">
        <div className="container-spark">
          <p className="text-caption text-[#92938B] mb-10">THE FOUNDERS</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[#343530]">
            {[
              {
                name: "Prathamesh",
                role: "Founder",
                image: "/images/prathamesh.jpg",
                description:
                  "Founder of SPARK Studio. Leads design direction, creative technology, and brand execution. Believes that the gap between how something looks and how it works should be zero.",
              },
              {
                name: "Rohan",
                role: "Co-founder",
                image: "/images/rohan.jpg",
                description:
                  "Co-founder. Focuses on creative technology, intelligent systems, and digital strategy. Interested in how technology can be shaped around human behaviour rather than the other way around.",
              },
            ].map((founder) => (
              <div key={founder.name} className="bg-[#171816] p-8 sm:p-10 flex flex-col justify-between group">
                <div>
                  {/* Portrait photo */}
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32 mb-6 overflow-hidden border border-[#343530] bg-[#1d1e1b] group-hover:border-[#C8F169] transition-colors duration-300">
                    <Image
                      src={founder.image}
                      alt={`${founder.name} — ${founder.role} of SPARK Studio`}
                      width={128}
                      height={128}
                      className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <h3
                    className="text-display-sm text-[#F3F0E8] mb-1"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {founder.name}
                  </h3>
                  <p className={`text-micro mb-6 font-semibold tracking-wider ${founder.role === "Founder" ? "text-[#C8F169]" : "text-[#92938B]"}`}>
                    {founder.role}
                  </p>
                </div>
                <p className="text-body text-[#92938B]">
                  {founder.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-[#F3F0E8] section-pad">
        <div className="container-spark">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <p className="text-caption text-[#92938B] mb-6">CAPABILITIES</p>
              <h2
                className="text-display-md text-[#171816]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                What we
                <br />
                actually do.
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {CAPABILITIES.map((cap) => (
                  <div
                    key={cap}
                    className="flex items-center gap-3 py-3 border-b border-[#E7E2D7]"
                  >
                    <span className="w-1.5 h-1.5 bg-[#C8F169] flex-shrink-0" />
                    <span className="text-sm text-[#171816]">{cap}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="bg-[#171816] section-pad border-t border-[#343530]">
        <div className="container-spark">
          <p className="text-caption text-[#92938B] mb-10">HOW WE WORK</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
            {[
              {
                title: "Direct engagement",
                desc: "You work directly with the people building your project. No account managers. No hand-offs.",
              },
              {
                title: "Clear communication",
                desc: "We explain what we&apos;re doing and why. No jargon. No surprises.",
              },
              {
                title: "Staged delivery",
                desc: "We work in structured phases with clear review points — so you can provide feedback at the right moment.",
              },
              {
                title: "Honest assessment",
                desc: "If something isn&apos;t the right approach, we&apos;ll say so before we build it.",
              },
            ].map((item) => (
              <div key={item.title} className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#C8F169]" />
                  <h3
                    className="text-sm font-semibold text-[#F3F0E8]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-[#92938B] pl-3.5"
                  dangerouslySetInnerHTML={{ __html: item.desc }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#10110F] section-pad border-t border-[#343530]">
        <div className="container-spark">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div>
              <h2
                className="text-display-md text-[#F3F0E8] mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Ready to start
                <br />
                a conversation?
              </h2>
              <p className="text-body text-[#92938B]">
                Tell us what you&apos;re working on.
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
