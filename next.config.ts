import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // GitHub Pages serves the site at /carekit — remove basePath if using a custom domain
  basePath: "/carekit",
};

export default nextConfig;