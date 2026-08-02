/** Studio lives at this subdomain in production. Override with NEXT_PUBLIC_STUDIO_URL. */
export const STUDIO_URL =
  process.env.NEXT_PUBLIC_STUDIO_URL ??
  (process.env.NODE_ENV === "development" ? "/studio/" : "https://studio.indiafutureai.com");
