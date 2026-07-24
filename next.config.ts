import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow your local network IP for mobile testing
  allowedDevOrigins: ['127.0.0.1','10.182.142.163'],
};

export default nextConfig;