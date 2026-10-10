import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-[85vh] bg-[#10110F] flex items-center justify-center pt-24 pb-16">
      <div className="container-spark text-center">
        <p className="text-micro text-[#C8F169] mb-4">404 — NOT FOUND</p>
        <h1
          className="text-display-lg text-[#F3F0E8] mb-6"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Page not found.
        </h1>
        <p className="text-body-lg text-[#92938B] max-w-md mx-auto mb-10">
          The requested page doesn&apos;t exist or has been moved to another location.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="btn btn-primary py-3.5 px-6 text-sm inline-flex items-center gap-2"
          >
            <ArrowLeft size={16} /> Return to homepage
          </Link>
          <Link
            href="/work"
            className="btn btn-outline py-3.5 px-6 text-sm"
          >
            View selected work
          </Link>
        </div>
      </div>
    </section>
  );
}
