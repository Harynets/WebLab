import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/WebLab",
  assetPrefix: "/WebLab/",
};

export default nextConfig;
