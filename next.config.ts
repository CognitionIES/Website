import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export", // Enables static export
  basePath: isProd ? "/Website" : "", // Replace "Website" with your actual repo name
  assetPrefix: isProd ? "/Website/" : "",

  images: {
    domains: ["images.unsplash.com", "upload.wikimedia.org", "plus.unsplash.com"],
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
