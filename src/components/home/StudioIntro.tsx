import React from "react";

export default function StudioIntro() {
  return (
    <section
      className="bg-[#F3F0E8] section-pad"
      aria-labelledby="intro-heading"
    >
      <div className="container-spark">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Section index */}
          <div className="lg:col-span-1 hidden lg:flex flex-col items-end pt-2">
            <span className="text-micro text-[#92938B] rotate-90 origin-right whitespace-nowrap">
              01 — STUDIO
            </span>
          </div>

          {/* Main headline */}
          <div className="lg:col-span-7">
            <h2
              className="text-display-lg text-[#171816] leading-tight"
              id="intro-heading"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Not more
              <br />
              digital noise.
              <br />
              <span className="text-[#92938B]">
                More meaningful
                <br />
                experiences.
              </span>
            </h2>
          </div>

          {/* Supporting copy */}
          <div className="lg:col-span-4 lg:pt-4">
            <div className="h-px bg-[#D8D3C8] mb-8 lg:hidden" />
            <p className="text-body-lg text-[#5a5b55] max-w-md">
              SPARK works at the intersection of design and technology. We turn
              business challenges into clear digital experiences, useful tools,
              and interactions worth remembering.
            </p>

            {/* Small geometric accent */}
            <div className="mt-12 flex gap-2 items-center">
              <div className="w-2 h-2 bg-[#C8F169]" />
              <div className="w-2 h-2 bg-[#D8D3C8]" />
              <div className="w-2 h-2 bg-[#D8D3C8]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
