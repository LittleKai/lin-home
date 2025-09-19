/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            // Custom colors matching the design
            colors: {
                primary: {
                    50: '#f0f4ff',
                    100: '#e0e7ff',
                    500: '#667eea',
                    600: '#5a67d8',
                    700: '#4c51bf',
                    800: '#434190',
                    900: '#3c366b',
                },
                secondary: {
                    500: '#764ba2',
                    600: '#68439a',
                    700: '#553c8b',
                },
                accent: {
                    500: '#10b981',
                    600: '#059669',
                }
            },

            // Custom fonts
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
            },

            // Custom animations
            animation: {
                'fade-in-up': 'fadeInUp 0.6s ease-out',
                'fade-in': 'fadeIn 0.6s ease-out',
                'float': 'float 6s ease-in-out infinite',
                'pulse-phone': 'pulsePhone 2s infinite',
                'slide-in-left': 'slideInLeft 0.6s ease-out',
                'slide-in-right': 'slideInRight 0.6s ease-out',
            },

            // Custom keyframes
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
            },

            // Custom spacing
            spacing: {
                '18': '4.5rem',
                '88': '22rem',
                '128': '32rem',
            },

            // Custom container
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
                    '2xl': '1400px',
                },
            },

            // Custom backdrop blur
            backdropBlur: {
                xs: '2px',
            },

            // Custom box shadows
            boxShadow: {
                'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                'medium': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                'large': '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                'xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            },
        },
    },
    plugins: [
        // Add useful plugins
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),

        // Custom plugin for glassmorphism effect
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
            };
            addUtilities(newUtilities);
        }
    ],
};