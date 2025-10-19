import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@pkg/ui", "@pkg/modules"],
};

export default nextConfig;
