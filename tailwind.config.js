/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                corporate: {
                    blue: '#1A73E8',
                    'blue-light': '#4285F4',
                    orange: '#EA4335',
                    'orange-light': '#FBBC05',
                    black: '#000000',
                    dark: '#0A0A0B',
                    'dark-lighter': '#121214'
                },
                accent: {
                    purple: '#8B5CF6',
                    cyan: '#06B6D4',
                    pink: '#EC4899'
                }
            },
            fontFamily: {
                sans: ['Inter', 'Outfit', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-main': 'radial-gradient(circle at 50% -20%, #1e293b, #0a0a0b)',
                'gradient-glow': 'radial-gradient(circle at 50% 50%, rgba(26, 115, 232, 0.15), transparent 70%)',
            },
            backdropBlur: {
                xs: '2px',
            }
        },
    },
    plugins: [],
}
