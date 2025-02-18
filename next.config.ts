import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enables static export
  images: {
    unoptimized: true, // Fix for images not loading on Netlify
  },
};

export default nextConfig;
