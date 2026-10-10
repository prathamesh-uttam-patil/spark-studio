// src/lib/validation.ts
import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long"),
  email: z
    .string()
    .email("Please enter a valid email address")
    .max(200, "Email is too long"),
  company: z.string().max(150, "Company name is too long").optional(),
  website: z
    .string()
    .url("Please enter a valid URL (include https://)")
    .max(300, "URL is too long")
    .optional()
    .or(z.literal("")),
  service: z.enum([
    "website",
    "ai-solution",
    "interactive-3d",
    "creative-development",
    "not-sure",
  ]),
  description: z
    .string()
    .min(20, "Please tell us a bit more about your project (min 20 chars)")
    .max(2000, "Description is too long"),
  contactMethod: z.enum(["email", "call", "either"]).optional(),
  consent: z
    .boolean()
    .refine((v) => v === true, "Please agree to the privacy policy"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const SERVICE_OPTIONS = [
  { value: "website", label: "Website or landing page" },
  { value: "ai-solution", label: "AI solution or intelligent tool" },
  { value: "interactive-3d", label: "Interactive or 3D experience" },
  { value: "creative-development", label: "Creative development or digital product" },
  { value: "not-sure", label: "Not sure yet — let's talk" },
] as const;

export const CONTACT_METHOD_OPTIONS = [
  { value: "email", label: "Email" },
  { value: "call", label: "Discovery call" },
  { value: "either", label: "Either works" },
] as const;
