import React from "react";

const STEPS = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand the business, audience, problem, objectives, and constraints. We ask the questions most people skip.",
  },
  {
    number: "02",
    title: "Define",
    description:
      "Establish the strategy, content, information architecture, visual direction, and technical approach before writing a line of code.",
  },
  {
    number: "03",
    title: "Design & Build",
    description:
      "Develop the experience, implement interactions, integrate the necessary technology, and test the result as we go.",
  },
  {
    number: "04",
    title: "Refine & Launch",
    description:
      "Validate responsiveness, accessibility, performance, content, and functionality before handing over or going live.",
  },
];

export default function Process() {
  return (
    <section
      className="bg-[#171816] section-pad border-t border-[#343530]"
      aria-labelledby="process-heading"
    >
      <div className="container-spark">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-micro text-[#92938B] mb-4">04 — PROCESS</p>
            <h2
              className="text-display-md text-[#F3F0E8]"
              id="process-heading"
              style={{ fontFamily: "var(--font-display)" }}
            >
              From the first question
              <br />
              to the final detail.
            </h2>
          </div>
        </div>

        {/* Steps — horizontal on desktop, vertical on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#343530]">
          {STEPS.map((step, i) => (
            <div
              key={step.number}
              className="bg-[#171816] p-8 relative"
            >
              {/* Progress connector — desktop */}
              {i < STEPS.length - 1 && (
                <div
                  className="hidden lg:block absolute top-14 right-0 w-px h-4 bg-[#343530]"
                  aria-hidden="true"
                />
              )}

              <span
                className="block text-[3rem] font-bold text-[#343530] mb-6 leading-none"
                style={{ fontFamily: "var(--font-display)" }}
                aria-hidden="true"
              >
                {step.number}
              </span>
              <h3
                className="text-lg font-semibold text-[#F3F0E8] mb-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {step.title}
              </h3>
              <p className="text-sm text-[#92938B] leading-relaxed">
                {step.description}
              </p>

              {/* Lime dot — active indicator */}
              <div className="mt-8 w-1.5 h-1.5 bg-[#C8F169]" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
