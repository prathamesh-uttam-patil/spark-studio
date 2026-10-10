import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Server-side validation
    const parseResult = contactFormSchema.safeParse(body);
    if (!parseResult.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed",
          errors: parseResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = parseResult.data;

    // === EMAIL INTEGRATION ===
    // To enable email delivery, configure an email service:
    //
    // Option 1: Resend (recommended)
    //   1. npm install resend
    //   2. Add RESEND_API_KEY to .env.local
    //   3. Uncomment the Resend block below
    //
    // Option 2: Nodemailer with SMTP
    //   1. npm install nodemailer @types/nodemailer
    //   2. Add SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS to .env.local
    //
    // Until configured, inquiries are logged server-side only.

    // --- Resend integration (uncomment when configured) ---
    // const { Resend } = await import('resend');
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'SPARK Studio <noreply@sparkstudio.design>',
    //   to: ['teamsparkworks@gmail.com'],
    //   replyTo: data.email,
    //   subject: `New inquiry: ${data.service} — ${data.name}`,
    //   text: `
    //     Name: ${data.name}
    //     Email: ${data.email}
    //     Company: ${data.company || 'Not provided'}
    //     Website: ${data.website || 'Not provided'}
    //     Service: ${data.service}
    //     Contact preference: ${data.contactMethod || 'Not specified'}
    //
    //     Project description:
    //     ${data.description}
    //   `.trim(),
    // });

    // Development logging (safe — no sensitive data)
    if (process.env.NODE_ENV === "development") {
      console.log("[Contact] New inquiry from:", data.name, data.email, "| Service:", data.service);
    }

    return NextResponse.json(
      {
        success: true,
        message: "Inquiry received. We'll be in touch shortly.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Contact API] Error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred. Please email us directly.",
      },
      { status: 500 }
    );
  }
}

// Reject other methods
export async function GET() {
  return NextResponse.json({ message: "Method not allowed" }, { status: 405 });
}
