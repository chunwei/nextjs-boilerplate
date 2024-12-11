import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactDevOverlay: false,
  experimental: {
    turbo: {
      resolveAlias: {
        canvas: './empty-module.ts'
      }
    }
  }
}

export default nextConfig;
