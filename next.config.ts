import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            },
        ],
    },
    output: "standalone", // ✅ Required for Docker deployment
    experimental: {
        serverComponentsExternalPackages: [
            "puppeteer-core",
            "@axe-core/puppeteer",
        ],
    },
};

export default nextConfig;
