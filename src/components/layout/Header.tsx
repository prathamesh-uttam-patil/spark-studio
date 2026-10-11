"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

const NAV_LINKS = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();
  const mobileNavRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const isLightPage =
    pathname === "/about" || pathname.startsWith("/services");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile nav on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  // Trap focus and handle Escape
  useEffect(() => {
    if (!isMobileOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const isHome = pathname === "/";
  const headerBg = isHome
    ? isScrolled
      ? "bg-[#10110F]/95 backdrop-blur-md border-b border-[#343530]/60 shadow-sm"
      : "bg-transparent"
    : "bg-[#10110F]/95 backdrop-blur-md border-b border-[#343530]/60 shadow-sm";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}
      role="banner"
    >
      <div className="container-spark">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center group py-2"
            aria-label="SPARK Studio — return to homepage"
            onClick={() => trackEvent("navigation_click", { label: "logo" })}
          >
            <Image
              src="/spark-logo-light.png"
              alt="SPARK Studio"
              width={130}
              height={34}
              priority
              className="h-7 md:h-8 w-auto object-contain transition-opacity duration-200 group-hover:opacity-90"
            />
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden md:flex items-center gap-8"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[0.8125rem] font-medium tracking-wide transition-colors duration-200 ${
                  pathname.startsWith(link.href)
                    ? "text-[#C8F169]"
                    : "text-[#92938B] hover:text-[#F3F0E8]"
                }`}
                onClick={() =>
                  trackEvent("navigation_click", { label: link.label })
                }
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn btn-primary text-[0.8125rem] py-2.5 px-5"
              onClick={() =>
                trackEvent("cta_click", { label: "Book discovery call — nav" })
              }
            >
              Book a call
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            ref={menuButtonRef}
            className="md:hidden flex items-center justify-center w-10 h-10 text-[#F3F0E8] focus-visible:outline-[#C8F169]"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-expanded={isMobileOpen}
            aria-controls="mobile-nav"
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
          >
            {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile navigation overlay */}
      {isMobileOpen && (
        <div
          id="mobile-nav"
          ref={mobileNavRef}
          className="md:hidden fixed inset-0 bg-[#10110F] z-40 flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="flex items-center justify-between h-16 px-5">
            <Link
              href="/"
              className="flex items-center py-2"
              aria-label="SPARK Studio — return to homepage"
              onClick={() => setIsMobileOpen(false)}
            >
              <Image
                src="/spark-logo-light.png"
                alt="SPARK Studio"
                width={130}
                height={34}
                priority
                className="h-7 w-auto object-contain"
              />
            </Link>
            <button
              className="flex items-center justify-center w-10 h-10 text-[#F3F0E8]"
              onClick={() => setIsMobileOpen(false)}
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          <nav
            className="flex flex-col flex-1 px-6 pt-8 gap-1"
            aria-label="Mobile navigation links"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-3xl font-bold py-4 border-b border-[#343530] text-[#F3F0E8] hover:text-[#C8F169] transition-colors"
                style={{ fontFamily: "var(--font-display)" }}
                onClick={() => setIsMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-8">
              <Link
                href="/contact"
                className="btn btn-primary w-full justify-center py-4 text-base"
                onClick={() => {
                  setIsMobileOpen(false);
                  trackEvent("cta_click", {
                    label: "Book discovery call — mobile nav",
                  });
                }}
              >
                Book a discovery call
              </Link>
            </div>
          </nav>

          <p className="text-caption text-[#92938B] px-6 pb-8">
            Design × Technology × Imagination
          </p>
        </div>
      )}
    </header>
  );
}
