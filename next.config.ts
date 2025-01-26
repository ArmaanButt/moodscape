import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: "/api/:path*", // Match requests to /api/*
        destination: "http://localhost:3000/:path*", // Proxy to Rails API
      },
    ];
  },
};

export default nextConfig;
