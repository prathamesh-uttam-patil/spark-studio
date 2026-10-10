import React from "react";

export default function StudioPhilosophy() {
  return (
    <section
      className="bg-[#10110F] section-pad"
      aria-labelledby="philosophy-heading"
    >
      <div className="container-spark">
        <div className="max-w-4xl mx-auto text-center">
          {/* Accent mark */}
          <div className="flex justify-center mb-10" aria-hidden="true">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path
                d="M16 2 L18.5 13.5 L30 16 L18.5 18.5 L16 30 L13.5 18.5 L2 16 L13.5 13.5 Z"
                fill="#343530"
              />
            </svg>
          </div>

          <h2
            className="text-display-lg text-[#F3F0E8] mb-8"
            id="philosophy-heading"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Technology is the medium.
            <br />
            <span className="text-[#92938B]">
              The experience is the point.
            </span>
          </h2>

          <div className="h-px bg-[#343530] max-w-[120px] mx-auto mb-8" />

          <p className="text-body-lg text-[#92938B] max-w-2xl mx-auto">
            Good digital work is not defined by how much it moves, how many
            features it contains, or how futuristic it looks. It is defined by
            how clearly it communicates, how thoughtfully it works, and what it
            makes possible.
          </p>
        </div>
      </div>
    </section>
  );
}
