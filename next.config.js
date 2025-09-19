/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable static site generation for Vercel deployment
    output: 'standalone',

    // Image optimization settings
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
        // Disable image optimization for static export if needed
        unoptimized: true,
    },

    // Enable experimental features
    experimental: {
        // App directory for newer Next.js versions
        appDir: false,
    },

    // Configure build settings
    compiler: {
        // Remove console.log in production
        removeConsole: process.env.NODE_ENV === 'production',
    },

    // Environment variables
    env: {
        SITE_URL: process.env.VERCEL_URL
            ? `https://${process.env.VERCEL_URL}`
            : 'http://localhost:3000',
    },

    // SEO and metadata
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'X-Frame-Options',
                        value: 'DENY',
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'origin-when-cross-origin',
                    },
                ],
            },
        ];
    },
};

module.exports = nextConfig;