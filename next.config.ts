import type { NextConfig } from "next";

/**
 * NEXT.JS CONFIGURATION
 * This file handles the development server security and research-related flags.
 */
const nextConfig: NextConfig = {
  // Optional: Enable detailed logging for your research benchmarks
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "localhost:3000, 192.168.56.1:3000",
          },
        ],
      },
    ];
  },
};

export default nextConfig;