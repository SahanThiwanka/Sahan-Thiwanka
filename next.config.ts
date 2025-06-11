import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "api.microlink.io", // Microlink Image Preview
      "assets.aceternity.com", // Add this domain for image loading
    ],
  },
};

export default nextConfig;
