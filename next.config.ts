import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
    // Source assets are capped at 2560px, so a 3840 bucket only ever re-serves
    // the source width at extra optimizer cost. Dropping it also removes one
    // srcset candidate per image, so browsers stop over-fetching on hi-DPR.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 2560],
    formats: ["image/webp"],
    // Optimized variants are immutable for a given source file; cache them for
    // a year instead of the 60s default, which forces constant re-validation.
    minimumCacheTTL: 31536000,
  },
};

export default nextConfig;
