import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ijlxcnmrxsvpeeeuinak.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/cars/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
