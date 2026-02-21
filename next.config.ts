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
    // Puppeteer aur Chromium support ke liye ye block add karein
    experimental: {
        serverComponentsExternalPackages: [
            "puppeteer-core",
            "@sparticuz/chromium",
        ],
    },
};

export default nextConfig;
