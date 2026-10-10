import React from "react";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

export default function FinalCTA() {
  return (
    <section
      className="bg-[#10110F] section-pad border-t border-[#343530] relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Background geometric accent */}
      <div className="absolute inset-0 flex items-center justify-end pr-8 opacity-[0.04] pointer-events-none" aria-hidden="true">
        <svg width="400" height="400" viewBox="0 0 28 28" fill="none">
          <rect x="1" y="1" width="26" height="26" rx="3" stroke="#C8F169" strokeWidth="1.5" fill="none" />
          <path d="M14 6 L15.8 12.2 L22 14 L15.8 15.8 L14 22 L12.2 15.8 L6 14 L12.2 12.2 Z" fill="#C8F169" />
        </svg>
      </div>

      <div className="container-spark relative z-10">
        <div className="max-w-2xl">
          <p className="text-micro text-[#92938B] mb-6">07 — LET&apos;S WORK TOGETHER</p>
          <h2
            className="text-display-lg text-[#F3F0E8] mb-6"
            id="cta-heading"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Have something
            <br />
            worth building?
          </h2>
          <p className="text-body-lg text-[#92938B] mb-10 max-w-lg">
            Tell us what you&apos;re working on, what isn&apos;t working, or what
            you&apos;d like to make possible. Let&apos;s figure out the right next
            step.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="btn btn-primary py-4 px-8 text-[0.9375rem] group"
            >
              Book a discovery call
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="mailto:teamsparkworks@gmail.com"
              className="btn btn-outline py-4 px-8 text-[0.9375rem] group"
            >
              <Mail size={16} />
              Prefer email? Contact SPARK
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
