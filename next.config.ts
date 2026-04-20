import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Custom domain: carehandbook.co.uk — no basePath needed
};

export default nextConfig;