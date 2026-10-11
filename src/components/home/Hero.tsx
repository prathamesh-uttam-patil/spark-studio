"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowRight } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

// Lazy-load the 3D scene — hero text renders immediately
const HeroScene = dynamic(() => import("@/components/three/HeroScene"), {
  ssr: false,
  loading: () => <HeroSceneSkeleton />,
});

function HeroSceneSkeleton() {
  return (
    <div className="w-full h-full flex items-center justify-center opacity-20">
      <div className="w-48 h-48 border border-[#343530] rotate-12" />
    </div>
  );
}

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const heroHeight = heroRef.current.offsetHeight;
      const progress = Math.max(
        0,
        Math.min(1, (-rect.top) / (heroHeight * 0.85))
      );
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[100svh] bg-[#10110F] overflow-hidden flex flex-col"
      aria-label="SPARK Studio — Hero"
    >
      {/* Background texture — subtle grain */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "256px",
        }}
        aria-hidden="true"
      />

      {/* Content — grid layout */}
      <div className="container-spark relative z-10 flex flex-col lg:grid lg:grid-cols-2 lg:gap-12 flex-1 pt-24 pb-16 lg:pt-28 lg:pb-20 items-center">
        {/* Left: Text content */}
        <div className="flex flex-col justify-center order-2 lg:order-1 mt-8 lg:mt-0">
          {/* Eyebrow */}
          <p className="text-micro text-[#C8F169] mb-8 tracking-widest">
            INDEPENDENT CREATIVE TECHNOLOGY STUDIO
          </p>

          {/* Headline */}
          <h1
            className="text-display-xl text-[#F3F0E8] mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Ideas deserve
            <br />
            <span className="text-[#92938B]">better</span>{" "}
            execution.
          </h1>

          {/* Supporting text */}
          <p className="text-body-lg text-[#92938B] max-w-[460px] mb-10">
            We combine design, technology, and experimentation to create digital
            experiences that help businesses stand out.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link
              href="/contact"
              className="btn btn-primary py-4 px-7 text-[0.9375rem] group"
              onClick={() =>
                trackEvent("cta_click", {
                  label: "Book a discovery call — hero",
                })
              }
            >
              Book a discovery call
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              href="/work"
              className="btn btn-outline py-4 px-7 text-[0.9375rem]"
              onClick={() =>
                trackEvent("cta_click", { label: "Explore our work — hero" })
              }
            >
              Explore our work
            </Link>
          </div>

          {/* Microcopy */}
          <p className="text-micro text-[#92938B]">
            Design × Technology × Imagination
          </p>
        </div>

        {/* Right: 3D Scene */}
        <div className="order-1 lg:order-2 w-full flex items-center justify-center">
          <div className="relative w-full aspect-square max-w-[420px] lg:max-w-none lg:h-[520px]">
            <HeroScene
              scrollProgress={scrollProgress}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="container-spark relative z-10 pb-8 hidden lg:flex items-center gap-3">
        <div className="h-8 w-px bg-[#92938B]/40" />
        <span className="text-micro text-[#92938B]">SCROLL</span>
      </div>

      {/* Bottom edge — subtle fade into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, #171816)",
        }}
        aria-hidden="true"
      />
    </section>
  );
}
