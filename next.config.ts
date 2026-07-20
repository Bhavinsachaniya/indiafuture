import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  /* Performance: use Turbopack in dev for faster HMR */
  /* Image optimization: allow external domains if needed */
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
