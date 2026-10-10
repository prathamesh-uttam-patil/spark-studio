import React from "react";
import Image from "next/image";

export default function Founders() {
  return (
    <section
      className="bg-[#F3F0E8] section-pad border-t border-[#D8D3C8]"
      aria-labelledby="founders-heading"
    >
      <div className="container-spark">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Headline */}
          <div className="lg:col-span-5">
            <p className="text-micro text-[#92938B] mb-4">05 — THE STUDIO</p>
            <h2
              className="text-display-md text-[#171816]"
              id="founders-heading"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Small studio.
              <br />
              <span className="text-[#92938B]">Big attention</span>
              <br />
              to detail.
            </h2>
          </div>

          {/* Content */}
          <div className="lg:col-span-7">
            <div className="divider-light mb-8 lg:hidden" />

            <p className="text-body-lg text-[#5a5b55] mb-8">
              SPARK Studio was founded by Prathamesh and Rohan — two people who
              believe that digital experiences should be built with the same care
              and intention that goes into the best physical products.
            </p>

            <p className="text-body text-[#5a5b55] mb-10">
              When you work with SPARK, you work directly with the people doing
              the work. No account managers, no hand-offs to junior teams. Just
              direct collaboration, thoughtful design and implementation, and a
              consistent focus on what matters: creating something that works
              for your business and for your audience.
            </p>

            {/* Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Direct collaboration",
                  desc: "You talk to the people building your project, from the first call to the final detail.",
                },
                {
                  title: "Practical technology",
                  desc: "We choose the right tools for the job—not the most exciting ones.",
                },
                {
                  title: "Performance focus",
                  desc: "Fast, accessible, and well-built. These aren't optional extras.",
                },
                {
                  title: "Outcome over complexity",
                  desc: "We measure success by what the work achieves, not how complicated it was to build.",
                },
              ].map((principle) => (
                <div key={principle.title} className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#C8F169] flex-shrink-0" />
                    <h3
                      className="text-sm font-semibold text-[#171816]"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {principle.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[#92938B] pl-3.5">
                    {principle.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Founder portraits & credentials */}
            <div className="mt-12 pt-8 border-t border-[#D8D3C8] grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#171816] flex-shrink-0 bg-[#E7E2D7]">
                  <Image
                    src="/images/prathamesh.jpg"
                    alt="Prathamesh — Founder of SPARK Studio"
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <p
                    className="text-base font-semibold text-[#171816]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Prathamesh
                  </p>
                  <p className="text-micro text-[#171816] font-bold mt-0.5 tracking-wider">
                    Founder
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#D8D3C8] flex-shrink-0 bg-[#E7E2D7]">
                  <Image
                    src="/images/rohan.jpg"
                    alt="Rohan — Co-founder of SPARK Studio"
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <p
                    className="text-base font-semibold text-[#171816]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Rohan
                  </p>
                  <p className="text-micro text-[#92938B] mt-0.5 tracking-wider">
                    Co-founder
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
