/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'brand-primary': '#0a0a2a', // Dark Blue from design
                'brand-cyan': '#29b6f6',    // Cyan from design
                'brand-accent': '#0288d1',  // Darker Blue/Cyan for hover
                'brand-light': '#e1f5fe',   // Light Cyan
            },
            fontFamily: {
                'dm-sans': ['"DM Sans"', 'sans-serif'],
            },
            animation: {
                'marquee': 'marquee 25s linear infinite',
                'marquee-infinite': 'marqueeInfinite 25s linear infinite', // NEW
                'float': 'float 6s ease-in-out infinite',
                'float-delayed': 'float 6s ease-in-out 3s infinite',
                'fade-in': 'fadeIn 0.5s ease-out',
                'bounce-slow': 'bounce 3s infinite',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
                marqueeInfinite: { // NEW
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
                float: {
                    '0%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                    '100%': { transform: 'translateY(0px)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                }
            },
        },
    },
    plugins: [],
}
