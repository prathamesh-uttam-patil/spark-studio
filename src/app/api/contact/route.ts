import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation";
import fs from "fs";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // 1. Server-side validation
    const parseResult = contactFormSchema.safeParse(body);
    if (!parseResult.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed. Please review the highlighted fields.",
          errors: parseResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = parseResult.data;
    const inquiryRecord = {
      id: "inq_" + Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
      receivedAt: new Date().toISOString(),
      ...data,
    };

    // 2. Persist locally to src/data/inquiries.json (ensures zero data loss)
    try {
      const dataDir = path.join(process.cwd(), "src", "data");
      const filePath = path.join(dataDir, "inquiries.json");
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }

      let existing: unknown[] = [];
      if (fs.existsSync(filePath)) {
        try {
          const content = fs.readFileSync(filePath, "utf8");
          existing = JSON.parse(content);
          if (!Array.isArray(existing)) existing = [];
        } catch {
          existing = [];
        }
      }
      existing.unshift(inquiryRecord);
      fs.writeFileSync(filePath, JSON.stringify(existing, null, 2), "utf8");
    } catch (fsErr) {
      console.warn("[Contact API] Could not write local inquiry backup:", fsErr);
    }

    // 3. Optional: Forward via Web3Forms (if WEB3FORMS_KEY is set in .env.local)
    if (process.env.WEB3FORMS_KEY) {
      try {
        await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            access_key: process.env.WEB3FORMS_KEY,
            to_email: "teamsparkworks@gmail.com",
            subject: `New Inquiry from ${data.name} [${data.service}]`,
            name: data.name,
            email: data.email,
            company: data.company || "Not provided",
            website: data.website || "Not provided",
            service: data.service,
            preferred_contact: data.contactMethod,
            message: data.description,
          }),
        });
      } catch (wErr) {
        console.warn("[Contact API] Web3Forms dispatch error:", wErr);
      }
    }

    // 4. Optional: Forward via Resend REST API (if RESEND_API_KEY is set in .env.local)
    if (process.env.RESEND_API_KEY) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "SPARK Studio <onboarding@resend.dev>",
            to: ["teamsparkworks@gmail.com"],
            reply_to: data.email,
            subject: `New Project Inquiry: ${data.service} — ${data.name}`,
            text: `
Name: ${data.name}
Email: ${data.email}
Company: ${data.company || "Not specified"}
Website: ${data.website || "Not specified"}
Service: ${data.service}
Contact Method: ${data.contactMethod || "either"}

Project Description:
${data.description}
            `.trim(),
          }),
        });
      } catch (rErr) {
        console.warn("[Contact API] Resend email dispatch error:", rErr);
      }
    }

    // Safe development logging
    if (process.env.NODE_ENV === "development") {
      console.log(`[Contact API] ✓ Inquiry received from ${data.name} (${data.email}) for ${data.service}`);
    }

    return NextResponse.json(
      {
        success: true,
        message: "Inquiry received. We'll be in touch within 2 business days.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Contact API] Internal Error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred. Please email teamsparkworks@gmail.com directly.",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ message: "Method not allowed" }, { status: 405 });
}
