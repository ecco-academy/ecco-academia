import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ioaufliufjeqhrehuoiv.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/images/**",
      },
      {
        protocol: "https",
        hostname: "ioaufliufjeqhrehuoiv.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/documents/**",
      },
    ],
  }
};

export default nextConfig;
