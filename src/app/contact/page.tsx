import type { Metadata } from "next";
import { Mail, Phone, ArrowRight } from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import InquiryForm from "@/components/contact/InquiryForm";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description:
    "Book a discovery call with SPARK Studio or send a project inquiry. We work with businesses across industries on websites, AI tools, and interactive experiences.",
});

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#10110F] pt-12 md:pt-16 pb-16 md:pb-20">
        <div className="container-spark">
          <p className="text-micro text-[#C8F169] mb-6">CONTACT</p>
          <h1
            className="text-display-xl text-[#F3F0E8] max-w-2xl mb-8"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Let&apos;s figure out
            <br />
            the right next step.
          </h1>
          <p className="text-body-lg text-[#92938B] max-w-lg">
            Tell us what you&apos;re working on, what isn&apos;t working, or what
            you&apos;d like to make possible.
          </p>
        </div>
      </section>

      {/* Contact layout */}
      <section className="bg-[#171816] section-pad border-t border-[#343530]">
        <div className="container-spark">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left: Info */}
            <div className="lg:col-span-4">
              <h2
                className="text-display-sm text-[#F3F0E8] mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                How to reach us
              </h2>

              {/* Email */}
              <div className="flex items-start gap-4 mb-8">
                <div className="w-10 h-10 border border-[#343530] flex items-center justify-center flex-shrink-0">
                  <Mail size={16} className="text-[#92938B]" />
                </div>
                <div>
                  <p className="text-caption text-[#92938B] mb-1">EMAIL</p>
                  <a
                    href="mailto:teamsparkworks@gmail.com"
                    className="text-[#F3F0E8] hover:text-[#C8F169] transition-colors"
                  >
                    teamsparkworks@gmail.com
                  </a>
                </div>
              </div>

              <div className="divider-dark mb-8" />

              <h3
                className="text-sm font-semibold text-[#F3F0E8] mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                What to expect
              </h3>
              <ul className="flex flex-col gap-3 mb-8">
                {[
                  "We read every inquiry carefully",
                  "Response within 2 business days",
                  "No sales pitch — just a conversation",
                  "Honest assessment of fit",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-[#92938B]"
                  >
                    <span className="w-1 h-1 bg-[#C8F169] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="divider-dark mb-8" />

              <p className="text-caption text-[#92938B] mb-3">ALSO EXPLORE</p>
              <div className="flex flex-col gap-3">
                <a
                  href="/work"
                  className="text-sm text-[#92938B] hover:text-[#F3F0E8] transition-colors flex items-center gap-2 group"
                >
                  View concept projects{" "}
                  <ArrowRight
                    size={12}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
                <a
                  href="/services"
                  className="text-sm text-[#92938B] hover:text-[#F3F0E8] transition-colors flex items-center gap-2 group"
                >
                  Explore services{" "}
                  <ArrowRight
                    size={12}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-8">
              <h2
                className="text-display-sm text-[#F3F0E8] mb-8"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Send a project inquiry
              </h2>
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
