"use client";

import React, { useState } from "react";
import { useForm, type Resolver } from "react-hook-form";
import { ArrowRight, CheckCircle, AlertCircle, Loader } from "lucide-react";
import {
  contactFormSchema,
  ContactFormData,
  SERVICE_OPTIONS,
  CONTACT_METHOD_OPTIONS,
} from "@/lib/validation";
import { trackEvent } from "@/lib/analytics";

type FormState = "idle" | "submitting" | "success" | "error";

const customZodResolver: Resolver<ContactFormData> = async (values) => {
  const result = contactFormSchema.safeParse(values);
  if (result.success) {
    return { values: result.data, errors: {} };
  }
  const errors: Record<string, { type: string; message: string }> = {};
  for (const issue of result.error.issues) {
    const field = issue.path[0]?.toString() || "form";
    if (!errors[field]) {
      errors[field] = {
        type: issue.code,
        message: issue.message,
      };
    }
  }
  return { values: {}, errors };
};

export default function InquiryForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<ContactFormData>({
    resolver: customZodResolver,
    defaultValues: {
      contactMethod: "either",
    },
  });

  const serviceValue = watch("service");

  const onSubmit = async (data: ContactFormData) => {
    setFormState("submitting");
    trackEvent("contact_form_start", { service: data.service });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.message || "Submission failed");
      }

      setFormState("success");
      trackEvent("contact_form_success", { service: data.service });
    } catch (err) {
      setFormState("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try email instead."
      );
      trackEvent("contact_form_error");
    }
  };

  if (formState === "success") {
    return (
      <div className="flex flex-col items-start gap-6 py-12">
        <div className="w-12 h-12 bg-[#C8F169]/10 border border-[#C8F169]/30 flex items-center justify-center">
          <CheckCircle size={24} className="text-[#C8F169]" />
        </div>
        <div>
          <h3
            className="text-display-sm text-[#F3F0E8] mb-3"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Message received.
          </h3>
          <p className="text-[#92938B]">
            We&apos;ll review your inquiry and get back to you shortly. If
            your project is time-sensitive, you can also email us directly at{" "}
            <a
              href="mailto:teamsparkworks@gmail.com"
              className="text-[#C8F169] hover:underline"
            >
              teamsparkworks@gmail.com
            </a>
            .
          </p>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex flex-col gap-6"
      aria-label="Project inquiry form"
    >
      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="label-spark">
            Name <span className="text-[#C8F169]" aria-label="required">*</span>
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            className={`input-spark ${errors.name ? "error" : ""}`}
            placeholder="Your name"
            aria-describedby={errors.name ? "name-error" : undefined}
            aria-invalid={!!errors.name}
            {...register("name")}
          />
          {errors.name && (
            <p id="name-error" className="error-text" role="alert">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="label-spark">
            Email <span className="text-[#C8F169]" aria-label="required">*</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            className={`input-spark ${errors.email ? "error" : ""}`}
            placeholder="your@email.com"
            aria-describedby={errors.email ? "email-error" : undefined}
            aria-invalid={!!errors.email}
            {...register("email")}
          />
          {errors.email && (
            <p id="email-error" className="error-text" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      {/* Company + Website */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="company" className="label-spark">
            Company / brand
          </label>
          <input
            id="company"
            type="text"
            autoComplete="organization"
            className="input-spark"
            placeholder="Optional"
            {...register("company")}
          />
        </div>

        <div>
          <label htmlFor="website" className="label-spark">
            Website URL
          </label>
          <input
            id="website"
            type="url"
            className={`input-spark ${errors.website ? "error" : ""}`}
            placeholder="https://yoursite.com"
            aria-describedby={errors.website ? "website-error" : undefined}
            aria-invalid={!!errors.website}
            {...register("website")}
          />
          {errors.website && (
            <p id="website-error" className="error-text" role="alert">
              {errors.website.message}
            </p>
          )}
        </div>
      </div>

      {/* Service */}
      <div>
        <label htmlFor="service" className="label-spark">
          Service of interest <span className="text-[#C8F169]" aria-label="required">*</span>
        </label>
        <select
          id="service"
          className={`input-spark ${errors.service ? "error" : ""}`}
          style={{ background: "#171816" }}
          aria-describedby={errors.service ? "service-error" : undefined}
          aria-invalid={!!errors.service}
          {...register("service")}
        >
          <option value="">Select a service...</option>
          {SERVICE_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {errors.service && (
          <p id="service-error" className="error-text" role="alert">
            {errors.service.message}
          </p>
        )}
      </div>

      {/* Project description */}
      <div>
        <label htmlFor="description" className="label-spark">
          Project description <span className="text-[#C8F169]" aria-label="required">*</span>
        </label>
        <textarea
          id="description"
          rows={5}
          className={`input-spark resize-none ${errors.description ? "error" : ""}`}
          placeholder="Tell us about your project, what you're trying to achieve, and any constraints..."
          aria-describedby={errors.description ? "description-error" : undefined}
          aria-invalid={!!errors.description}
          {...register("description")}
        />
        {errors.description && (
          <p id="description-error" className="error-text" role="alert">
            {errors.description.message}
          </p>
        )}
      </div>

      {/* Contact method */}
      <div>
        <label htmlFor="contactMethod" className="label-spark">
          Preferred contact method
        </label>
        <select
          id="contactMethod"
          className="input-spark"
          style={{ background: "#171816" }}
          {...register("contactMethod")}
        >
          {CONTACT_METHOD_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {/* Consent */}
      <div>
        <div className="flex items-start gap-3">
          <input
            id="consent"
            type="checkbox"
            className="mt-1 w-4 h-4 border-[#343530] bg-transparent accent-[#C8F169]"
            aria-describedby={errors.consent ? "consent-error" : undefined}
            aria-invalid={!!errors.consent}
            {...register("consent")}
          />
          <label htmlFor="consent" className="text-sm text-[#92938B] leading-relaxed">
            I agree that SPARK Studio may use the information provided in this form to respond to my inquiry. See our{" "}
            <a
              href="/privacy"
              className="text-[#C8F169] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              privacy policy
            </a>
            .{" "}
            <span className="text-[#C8F169]" aria-label="required">*</span>
          </label>
        </div>
        {errors.consent && (
          <p id="consent-error" className="error-text mt-1" role="alert">
            {errors.consent.message}
          </p>
        )}
      </div>

      {/* Error alert */}
      {formState === "error" && (
        <div
          className="flex items-start gap-3 p-4 border border-red-500/30 bg-red-500/5"
          role="alert"
        >
          <AlertCircle size={18} className="text-red-400 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-red-400">{errorMessage}</p>
        </div>
      )}

      {/* Submit */}
      <div className="flex flex-col sm:flex-row gap-4 pt-2">
        <button
          type="submit"
          disabled={formState === "submitting"}
          className="btn btn-primary py-4 px-8 text-[0.9375rem] group disabled:opacity-60 disabled:cursor-not-allowed"
          aria-label="Submit project inquiry"
        >
          {formState === "submitting" ? (
            <>
              <Loader size={16} className="animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Send inquiry
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </>
          )}
        </button>
        <a
          href="mailto:teamsparkworks@gmail.com"
          className="btn btn-outline py-4 px-8 text-[0.9375rem]"
        >
          Prefer email
        </a>
      </div>

      <p className="text-micro text-[#343530]">
        We respond to all inquiries within 2 business days.
      </p>
    </form>
  );
}
