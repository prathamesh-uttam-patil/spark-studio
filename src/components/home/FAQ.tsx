"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { HOMEPAGE_FAQS } from "@/data/faq";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      className="bg-[#171816] section-pad border-t border-[#343530]"
      aria-labelledby="faq-heading"
    >
      <div className="container-spark">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Header */}
          <div className="lg:col-span-4">
            <p className="text-micro text-[#92938B] mb-4">06 — FAQ</p>
            <h2
              className="text-display-sm text-[#F3F0E8] mb-6"
              id="faq-heading"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Common
              <br />
              questions.
            </h2>
            <p className="text-sm text-[#92938B]">
              If you don&apos;t find what you&apos;re looking for,{" "}
              <a
                href="mailto:teamsparkworks@gmail.com"
                className="text-[#C8F169] hover:underline"
              >
                send us an email
              </a>
              .
            </p>
          </div>

          {/* Accordion */}
          <div className="lg:col-span-8">
            <dl>
              {HOMEPAGE_FAQS.map((faq, i) => {
                const isOpen = openId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className={`border-b border-[#343530] ${i === 0 ? "border-t" : ""}`}
                  >
                    <dt>
                      <button
                        type="button"
                        className="w-full flex items-center justify-between gap-4 py-5 text-left cursor-pointer"
                        onClick={() => toggle(faq.id)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${faq.id}`}
                        id={`faq-trigger-${faq.id}`}
                      >
                        <span className="text-[#F3F0E8] text-[0.9375rem] font-medium pr-4">
                          {faq.question}
                        </span>
                        <span className="flex-shrink-0 text-[#92938B]" aria-hidden="true">
                          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                        </span>
                      </button>
                    </dt>
                    <dd
                      id={`faq-answer-${faq.id}`}
                      role="region"
                      aria-labelledby={`faq-trigger-${faq.id}`}
                      className={`overflow-hidden transition-all duration-300 ${
                        isOpen ? "max-h-96 pb-5" : "max-h-0"
                      }`}
                    >
                      <p className="text-sm text-[#92938B] leading-relaxed max-w-xl">
                        {faq.answer}
                      </p>
                    </dd>
                  </div>
                );
              })}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
