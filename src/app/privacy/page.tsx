import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy",
  description:
    "Privacy Policy for SPARK Studio — How we handle information submitted through our website and project inquiries.",
});

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-[#10110F] pt-36 pb-16">
        <div className="container-spark">
          <p className="text-micro text-[#C8F169] mb-6">LEGAL</p>
          <h1
            className="text-display-lg text-[#F3F0E8] max-w-2xl mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Privacy Policy
          </h1>
          <p className="text-body text-[#92938B]">
            Last updated: October 2026
          </p>
        </div>
      </section>

      <section className="bg-[#171816] section-pad border-t border-[#343530]">
        <div className="container-spark">
          <div className="max-w-3xl flex flex-col gap-10 text-[#92938B] leading-relaxed">
            <div>
              <h2
                className="text-display-sm text-[#F3F0E8] mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                1. Overview
              </h2>
              <p>
                SPARK Studio (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is an independent creative
                technology studio founded by Prathamesh and Rohan. This Privacy Policy
                explains how we collect, use, and protect information when you visit
                our website or submit an inquiry to us.
              </p>
            </div>

            <div>
              <h2
                className="text-display-sm text-[#F3F0E8] mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                2. Information We Collect
              </h2>
              <p className="mb-4">
                We collect only information that you voluntarily provide to us through
                our project inquiry form or direct email correspondence:
              </p>
              <ul className="list-disc pl-5 flex flex-col gap-2">
                <li>Your name and contact email address.</li>
                <li>Your company name and website URL (if provided).</li>
                <li>The service of interest and project description.</li>
                <li>Preferred contact method (call, email, or either).</li>
              </ul>
            </div>

            <div>
              <h2
                className="text-display-sm text-[#F3F0E8] mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                3. How We Use Your Information
              </h2>
              <p className="mb-4">
                Any information submitted to SPARK Studio is strictly used to:
              </p>
              <ul className="list-disc pl-5 flex flex-col gap-2">
                <li>Evaluate project feasibility and respond to your inquiry.</li>
                <li>Schedule and conduct discovery calls.</li>
                <li>Prepare project proposals or scopes of work.</li>
              </ul>
              <p className="mt-4">
                We do not sell, rent, share, or trade your personal information with third parties
                for marketing or advertising purposes.
              </p>
            </div>

            <div>
              <h2
                className="text-display-sm text-[#F3F0E8] mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                4. Cookies &amp; Analytics
              </h2>
              <p>
                Our website is designed with privacy in mind. We do not use third-party tracking
                cookies to build advertising profiles. If privacy-preserving analytics are enabled
                in the future, they will operate without cross-site tracking or selling of personal data.
              </p>
            </div>

            <div>
              <h2
                className="text-display-sm text-[#F3F0E8] mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                5. Data Security &amp; Retention
              </h2>
              <p>
                Inquiries sent to us are transmitted securely via encrypted connections (HTTPS).
                We retain client communications for the duration of prospective or active business
                relationships, after which information is routinely purged or archived securely.
              </p>
            </div>

            <div>
              <h2
                className="text-display-sm text-[#F3F0E8] mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                6. Contacting Us
              </h2>
              <p>
                If you have questions regarding this policy or wish to request the deletion
                of information you previously submitted, please contact us directly at:
              </p>
              <p className="mt-3">
                <a
                  href="mailto:teamsparkworks@gmail.com"
                  className="text-[#C8F169] hover:underline font-medium"
                >
                  teamsparkworks@gmail.com
                </a>
              </p>
            </div>

            <div className="pt-6 border-t border-[#343530]">
              <Link
                href="/"
                className="btn btn-outline text-sm py-3 px-6 inline-flex"
              >
                Return to homepage
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
