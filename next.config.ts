import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      resolveAlias: {
        canvas: './empty-module.ts'
      },
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: 'react'
        }
      }
    }
  }
}

export default nextConfig;
