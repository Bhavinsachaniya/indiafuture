import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    // Thumbnails come from the blog CDN as absolute URLs; keep unoptimized for flexibility.
    unoptimized: true,
  },
};

export default nextConfig;
