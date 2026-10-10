// src/lib/analytics.ts
// Analytics abstraction — configure with real provider later

type EventName =
  | "cta_click"
  | "contact_form_start"
  | "contact_form_success"
  | "contact_form_error"
  | "project_view"
  | "service_view"
  | "navigation_click";

interface EventProperties {
  label?: string;
  category?: string;
  value?: string | number;
  [key: string]: unknown;
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    plausible?: (event: string, options?: object) => void;
  }
}

export function trackEvent(name: EventName, properties?: EventProperties): void {
  if (typeof window === "undefined") return;

  // Google Analytics 4
  if (window.gtag) {
    window.gtag("event", name, properties);
  }

  // Plausible
  if (window.plausible) {
    window.plausible(name, { props: properties });
  }

  // Dev logging
  if (process.env.NODE_ENV === "development") {
    console.log("[Analytics]", name, properties);
  }
}

export function trackPageView(path: string): void {
  if (typeof window === "undefined") return;

  if (window.gtag) {
    window.gtag("config", process.env.NEXT_PUBLIC_GA_ID, {
      page_path: path,
    });
  }
}
