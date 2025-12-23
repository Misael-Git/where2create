/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                corporate: {
                    blue: '#1A73E8',
                    orange: '#EA4335',
                    black: '#000000',
                    dark: '#202124'
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
