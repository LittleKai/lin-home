// tailwind.config.optimized.js - Cấu hình Tailwind tối ưu hóa
// Kết hợp với CSS từ file HTML để có thiết kế đồng nhất

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],

    // Disable base styles vì chúng ta đã có CSS custom
    corePlugins: {
        preflight: true, // Giữ CSS reset
    },

    theme: {
        extend: {
            // Custom colors matching the design from HTML file
            colors: {
                primary: {
                    50: '#f0f4ff',
                    100: '#e0e7ff',
                    200: '#c7d2fe',
                    300: '#a5b4fc',
                    400: '#818cf8',
                    500: '#667eea', // Main primary color
                    600: '#5a67d8',
                    700: '#4c51bf',
                    800: '#434190',
                    900: '#3c366b',
                    950: '#312e81',
                },
                secondary: {
                    50: '#faf5ff',
                    100: '#f3e8ff',
                    200: '#e9d5ff',
                    300: '#d8b4fe',
                    400: '#c084fc',
                    500: '#764ba2', // Main secondary color
                    600: '#68439a',
                    700: '#553c8b',
                    800: '#492d7a',
                    900: '#3d1e6b',
                    950: '#2e1065',
                },
                accent: {
                    50: '#ecfdf5',
                    100: '#d1fae5',
                    200: '#a7f3d0',
                    300: '#6ee7b7',
                    400: '#34d399',
                    500: '#10b981', // Main accent color
                    600: '#059669',
                    700: '#047857',
                    800: '#065f46',
                    900: '#064e3b',
                    950: '#022c22',
                },
                // Custom grays
                slate: {
                    50: '#f8fafc',
                    100: '#f1f5f9',
                    200: '#e2e8f0',
                    300: '#cbd5e0',
                    400: '#94a3b8',
                    500: '#64748b',
                    600: '#475569',
                    700: '#334155',
                    800: '#1e293b',
                    900: '#0f172a',
                    950: '#020617',
                }
            },

            // Custom fonts matching HTML file
            fontFamily: {
                sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
                serif: ['Playfair Display', 'Georgia', 'serif'],
                mono: ['Fira Code', 'Monaco', 'Consolas', 'monospace'],
            },

            // Custom animations from HTML file
            animation: {
                'fade-in-up': 'fadeInUp 0.6s ease-out',
                'fade-in': 'fadeIn 0.6s ease-out',
                'float': 'float 6s ease-in-out infinite',
                'pulse-phone': 'pulsePhone 2s infinite',
                'slide-in-left': 'slideInLeft 0.6s ease-out',
                'slide-in-right': 'slideInRight 0.6s ease-out',
                'bounce-gentle': 'bounceGentle 2s infinite',
                'scale-hover': 'scaleHover 0.3s ease-out',
            },

            // Custom keyframes matching HTML file
            keyframes: {
                fadeInUp: {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(30px)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)',
                    },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                pulsePhone: {
                    '0%, 100%': {
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2), 0 0 0 0 rgba(16, 185, 129, 0.7)',
                    },
                    '50%': {
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2), 0 0 0 10px rgba(16, 185, 129, 0)',
                    },
                },
                slideInLeft: {
                    '0%': {
                        opacity: '0',
                        transform: 'translateX(-30px)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateX(0)',
                    },
                },
                slideInRight: {
                    '0%': {
                        opacity: '0',
                        transform: 'translateX(30px)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateX(0)',
                    },
                },
                bounceGentle: {
                    '0%, 100%': {
                        transform: 'translateY(0)',
                        animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
                    },
                    '50%': {
                        transform: 'translateY(-5px)',
                        animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
                    },
                },
                scaleHover: {
                    '0%': { transform: 'scale(1)' },
                    '50%': { transform: 'scale(1.05)' },
                    '100%': { transform: 'scale(1)' },
                },
            },

            // Custom spacing từ HTML file
            spacing: {
                '18': '4.5rem',
                '88': '22rem',
                '128': '32rem',
            },

            // Custom container settings
            container: {
                center: true,
                padding: {
                    DEFAULT: '1rem',
                    sm: '1.5rem',
                    lg: '2rem',
                    xl: '3rem',
                    '2xl': '4rem',
                },
                screens: {
                    sm: '640px',
                    md: '768px',
                    lg: '1024px',
                    xl: '1280px',
                    '2xl': '1400px', // Matching HTML max-width
                },
            },

            // Custom backdrop blur
            backdropBlur: {
                xs: '2px',
            },

            // Custom box shadows matching HTML file
            boxShadow: {
                'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                'medium': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                'large': '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                'xl-custom': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                'glass': '0 8px 32px rgba(0, 0, 0, 0.1)',
            },

            // Custom gradients
            backgroundImage: {
                'gradient-primary': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                'gradient-secondary': 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                'gradient-accent': 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                'hero-pattern': "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 1000\"><defs><pattern id=\"grid\" width=\"50\" height=\"50\" patternUnits=\"userSpaceOnUse\"><path d=\"M 50 0 L 0 0 0 50\" fill=\"none\" stroke=\"rgba(255,255,255,0.1)\" stroke-width=\"1\"/></pattern></defs><rect width=\"1000\" height=\"1000\" fill=\"url(%23grid)\"/></svg>')",
            },

            // Custom border radius
            borderRadius: {
                'xl': '1rem',
                '2xl': '1.5rem',
                '3xl': '2rem',
            },

            // Custom line heights
            lineHeight: {
                'relaxed': '1.6',
                'loose': '1.8',
            },

            // Custom letter spacing
            letterSpacing: {
                'wide': '0.025em',
                'wider': '0.05em',
                'widest': '0.1em',
            },

            // Custom z-index
            zIndex: {
                '60': '60',
                '70': '70',
                '80': '80',
                '90': '90',
                '100': '100',
            },

            // Custom aspect ratios
            aspectRatio: {
                '4/3': '4 / 3',
                '3/2': '3 / 2',
                '2/3': '2 / 3',
                '9/16': '9 / 16',
            },
        },
    },

    plugins: [
        // Add useful plugins
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),

        // Custom plugin for glassmorphism effect từ HTML
        function({ addUtilities }) {
            const newUtilities = {
                '.glass': {
                    background: 'rgba(255, 255, 255, 0.1)',
                    'backdrop-filter': 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                },
                '.glass-dark': {
                    background: 'rgba(0, 0, 0, 0.1)',
                    'backdrop-filter': 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                },
                '.glass-card': {
                    background: 'rgba(255, 255, 255, 0.95)',
                    'backdrop-filter': 'blur(20px)',
                    border: '1px solid rgba(0, 0, 0, 0.05)',
                },
                '.gradient-text': {
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    '-webkit-background-clip': 'text',
                    '-webkit-text-fill-color': 'transparent',
                    'background-clip': 'text',
                },
                '.btn-hover-lift': {
                    transition: 'all 0.3s ease',
                    '&:hover': {
                        transform: 'translateY(-2px)',
                        'box-shadow': '0 8px 25px rgba(0, 0, 0, 0.15)',
                    },
                },
                '.card-hover': {
                    transition: 'all 0.3s ease',
                    '&:hover': {
                        transform: 'translateY(-8px)',
                        'box-shadow': '0 20px 40px rgba(0, 0, 0, 0.1)',
                    },
                },
            };
            addUtilities(newUtilities);
        },

        // Custom component classes plugin
        function({ addComponents }) {
            const components = {
                // Button styles từ HTML
                '.btn': {
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '16px 32px',
                    borderRadius: '50px',
                    fontWeight: '600',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    border: 'none',
                    fontSize: '16px',
                },
                '.btn-primary': {
                    background: 'white',
                    color: '#667eea',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 12px 30px rgba(0, 0, 0, 0.2)',
                        color: '#5a67d8',
                    },
                },
                '.btn-secondary': {
                    background: 'rgba(255, 255, 255, 0.2)',
                    color: 'white',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    backdropFilter: 'blur(10px)',
                    '&:hover': {
                        background: 'rgba(255, 255, 255, 0.3)',
                        transform: 'translateY(-2px)',
                        color: 'white',
                    },
                },
                '.btn-accent': {
                    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                    color: 'white',
                    '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 25px rgba(16, 185, 129, 0.4)',
                        color: 'white',
                    },
                },

                // Container styles
                '.container-custom': {
                    maxWidth: '1400px',
                    margin: '0 auto',
                    padding: '0 24px',
                    '@media (max-width: 768px)': {
                        padding: '0 16px',
                    },
                },

                // Section styles
                '.section': {
                    padding: '120px 0',
                    '@media (max-width: 768px)': {
                        padding: '80px 0',
                    },
                },
                '.section-bg-light': {
                    background: '#f8fafc',
                },
                '.section-bg-dark': {
                    background: 'linear-gradient(135deg, #1a202c 0%, #2d3748 100%)',
                    color: 'white',
                },

                // Card styles từ HTML
                '.card': {
                    background: 'white',
                    borderRadius: '24px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                    border: '1px solid rgba(0, 0, 0, 0.05)',
                    transition: 'all 0.3s ease',
                    overflow: 'hidden',
                },
                '.card-hover': {
                    '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                    },
                },
                '.card-feature': {
                    padding: '40px',
                    position: 'relative',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        right: '0',
                        height: '4px',
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    },
                },

                // Header styles
                '.header-fixed': {
                    position: 'fixed',
                    top: '0',
                    width: '100%',
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(20px)',
                    zIndex: '1000',
                    borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
                    transition: 'all 0.3s ease',
                    '&.scrolled': {
                        background: 'rgba(255, 255, 255, 0.98)',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                    },
                },

                // Typography styles
                '.heading-primary': {
                    fontSize: '4rem',
                    fontWeight: '800',
                    lineHeight: '1.1',
                    fontFamily: '"Playfair Display", serif',
                    letterSpacing: '-0.02em',
                    '@media (max-width: 768px)': {
                        fontSize: '2.5rem',
                    },
                    '@media (max-width: 480px)': {
                        fontSize: '2rem',
                    },
                },
                '.heading-secondary': {
                    fontSize: '3rem',
                    fontWeight: '800',
                    lineHeight: '1.2',
                    color: '#1a202c',
                    '@media (max-width: 768px)': {
                        fontSize: '2rem',
                    },
                    '@media (max-width: 480px)': {
                        fontSize: '1.75rem',
                    },
                },
                '.text-lead': {
                    fontSize: '1.25rem',
                    lineHeight: '1.6',
                    color: '#4a5568',
                },

                // Badge styles
                '.badge': {
                    padding: '8px 20px',
                    borderRadius: '50px',
                    fontSize: '14px',
                    fontWeight: '600',
                    display: 'inline-block',
                },
                '.badge-primary': {
                    background: '#e6fffa',
                    color: '#008080',
                },
                '.badge-secondary': {
                    background: 'rgba(102, 126, 234, 0.2)',
                    color: '#667eea',
                },

                // Icon styles
                '.icon-box': {
                    width: '64px',
                    height: '64px',
                    borderRadius: '16px',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '24px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                },

                // Form styles
                '.form-input': {
                    width: '100%',
                    padding: '16px',
                    border: '2px solid #e2e8f0',
                    borderRadius: '12px',
                    fontSize: '16px',
                    transition: 'all 0.3s ease',
                    fontFamily: 'inherit',
                    '&:focus': {
                        outline: 'none',
                        borderColor: '#667eea',
                        boxShadow: '0 0 0 3px rgba(102, 126, 234, 0.1)',
                    },
                },
                '.form-label': {
                    display: 'block',
                    color: '#2d3748',
                    fontWeight: '600',
                    marginBottom: '8px',
                },

                // Utility patterns
                '.text-gradient': {
                    background: 'linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                },
                '.overlay-dark': {
                    position: 'relative',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        right: '0',
                        bottom: '0',
                        background: 'rgba(0, 0, 0, 0.4)',
                        zIndex: '1',
                    },
                },
            };
            addComponents(components);
        },

        // Custom base styles plugin
        function({ addBase }) {
            addBase({
                'html': {
                    scrollBehavior: 'smooth',
                },
                'body': {
                    fontFamily: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
                    lineHeight: '1.6',
                    color: '#1a202c',
                    background: '#ffffff',
                    overflowX: 'hidden',
                },
                'h1, h2, h3, h4, h5, h6': {
                    lineHeight: '1.3',
                    color: '#1e293b',
                },
                'a': {
                    transition: 'all 0.3s ease',
                },
                'img': {
                    maxWidth: '100%',
                    height: 'auto',
                },
                // Custom scrollbar
                '::-webkit-scrollbar': {
                    width: '8px',
                },
                '::-webkit-scrollbar-track': {
                    background: '#f1f5f9',
                },
                '::-webkit-scrollbar-thumb': {
                    background: '#cbd5e0',
                    borderRadius: '4px',
                },
                '::-webkit-scrollbar-thumb:hover': {
                    background: '#94a3b8',
                },
            });
        },
    ],
}