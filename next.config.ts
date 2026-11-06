import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 85 for screenshots that carry small UI text; 75 (default) for the rest.
    qualities: [75, 85],
    // Case images and covers never change under the same name.
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
};

export default nextConfig;
