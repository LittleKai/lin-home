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

    // Enable experimental features (removed deprecated appDir)
    experimental: {
        // Add any new experimental features here if needed
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

    // Webpack configuration to ignore problematic directories
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.watchOptions = {
                ...config.watchOptions,
                ignored: [
                    '**/node_modules',
                    '**/.next',
                    '**/.git',
                    'D:\\Config.Msi',
                    'D:\\System Volume Information'
                ]
            };
        }
        return config;
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