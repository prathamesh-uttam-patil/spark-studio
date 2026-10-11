"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const FOOTER_LINKS = {
  studio: [
    { href: "/", label: "Home" },
    { href: "/work", label: "Work" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
  services: [
    { href: "/services/web-development", label: "Digital Experiences" },
    { href: "/services/ai-solutions", label: "AI & Intelligent Tools" },
    { href: "/services/interactive-experiences", label: "Interactive & 3D" },
    { href: "/services/creative-development", label: "Creative Development" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
  ],
};

export default function Footer() {
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer
      className="bg-[#10110F] border-t border-[#343530]"
      role="contentinfo"
    >
      <div className="container-spark section-pad">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 pb-12 border-b border-[#343530]">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 28 28"
                fill="none"
                aria-hidden="true"
              >
                <rect
                  x="1"
                  y="1"
                  width="26"
                  height="26"
                  rx="3"
                  stroke="#C8F169"
                  strokeWidth="1.5"
                  fill="none"
                />
                <path
                  d="M14 6 L15.8 12.2 L22 14 L15.8 15.8 L14 22 L12.2 15.8 L6 14 L12.2 12.2 Z"
                  fill="#C8F169"
                />
              </svg>
              <span
                className="font-bold text-[1rem] text-[#F3F0E8]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                SPARK
              </span>
            </div>
            <p className="text-[#92938B] text-sm leading-relaxed max-w-[220px]">
              A creative technology studio combining design, technology, and
              experimentation.
            </p>
            <a
              href="mailto:teamsparkworks@gmail.com"
              className="inline-block mt-4 text-[0.8125rem] text-[#C8F169] hover:text-[#d4f77c] transition-colors"
            >
              teamsparkworks@gmail.com
            </a>
          </div>

          {/* Studio links */}
          <div>
            <h3 className="text-micro text-[#92938B] mb-4">Studio</h3>
            <nav aria-label="Studio navigation">
              <ul className="flex flex-col gap-2.5">
                {FOOTER_LINKS.studio.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#92938B] hover:text-[#F3F0E8] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Services links */}
          <div>
            <h3 className="text-micro text-[#92938B] mb-4">Services</h3>
            <nav aria-label="Services navigation">
              <ul className="flex flex-col gap-2.5">
                {FOOTER_LINKS.services.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#92938B] hover:text-[#F3F0E8] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-micro text-[#92938B] mb-4">Start a project</h3>
            <p className="text-sm text-[#92938B] mb-6">
              Have something worth building? Let&apos;s talk about it.
            </p>
            <Link
              href="/contact"
              className="btn btn-primary text-sm py-3 px-6 inline-flex"
            >
              Book a discovery call
            </Link>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-8">
          <p className="text-micro text-[#92938B]">
            © {year} SPARK Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {FOOTER_LINKS.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-micro text-[#92938B] hover:text-[#F3F0E8] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p className="text-micro text-[#92938B]">Built with intention.</p>
        </div>
      </div>
    </footer>
  );
}
