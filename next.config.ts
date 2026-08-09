import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow your local network IP for mobile testing
  allowedDevOrigins: ['127.0.0.1','10.115.20.163'],
};

export default nextConfig;