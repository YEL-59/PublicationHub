import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
      {
        protocol: "https",
        hostname: "ibraheemaltamim.thesyndicates.team",
      },
      {
        protocol: "https",
        hostname: "dashboard.hooray-entertainment.online",
      },
    ],
  },
};

export default nextConfig;
