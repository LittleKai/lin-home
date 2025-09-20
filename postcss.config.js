// postcss.config.js - PostCSS configuration for Next.js
// Cấu hình PostCSS để xử lý CSS với Tailwind và autoprefixer

module.exports = {
    plugins: {
        // Tailwind CSS - framework utility-first
        tailwindcss: {},

        // Autoprefixer - tự động thêm vendor prefixes
        autoprefixer: {},

        // PostCSS Import - cho phép import CSS files
        'postcss-import': {},

        // PostCSS Nested - hỗ trợ nested CSS như Sass
        'postcss-nested': {},

        // PostCSS Custom Properties - hỗ trợ CSS variables
        'postcss-custom-properties': {
            preserve: true, // Giữ lại CSS variables gốc
        },

        // Optimization cho production
        ...(process.env.NODE_ENV === 'production' && {
            // CSSnano - minify CSS trong production
            cssnano: {
                preset: [
                    'default',
                    {
                        discardComments: { removeAll: true },
                        normalizeWhitespace: true,
                        autoprefixer: false, // Đã có autoprefixer ở trên
                    },
                ],
            },

            // PurgeCSS - loại bỏ CSS không sử dụng
            '@fullhuman/postcss-purgecss': {
                content: [
                    './pages/**/*.{js,ts,jsx,tsx}',
                    './components/**/*.{js,ts,jsx,tsx}',
                    './src/**/*.{js,ts,jsx,tsx}',
                ],
                defaultExtractor: (content) => {
                    // Extract class names from content
                    const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []
                    return broadMatches
                },
                safelist: [
                    // Các class cần giữ lại (không bị purge)
                    'html',
                    'body',
                    /^fa-/, // Font Awesome icons
                    /^fab-/, // Font Awesome brands
                    /^fas-/, // Font Awesome solid
                    /^far-/, // Font Awesome regular
                    /^fal-/, // Font Awesome light
                    /^hero/, // Hero section classes
                    /^float/, // Float button classes
                    /^animate/, // Animation classes
                    /^glass/, // Glass effect classes
                    'scrolled', // Dynamic classes
                    'active',
                    'hover',
                    'focus',
                    'group-hover',
                ],
            },
        }),
    },
}