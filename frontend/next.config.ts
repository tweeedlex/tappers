import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: process.env.NEXT_PUBLIC_API_PROTOCOL === 'http' ? 'http' : 'https',
        hostname: process.env.NEXT_PUBLIC_API_HOST || 'localhost',
        port: process.env.NEXT_PUBLIC_API_PORT || '',
        pathname: process.env.NEXT_PUBLIC_API_PATH || '/uploads/**',
      },
    ],
  },
};

export default nextConfig;
