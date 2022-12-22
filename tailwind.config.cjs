/** @type {import("tailwindcss").Config} */
module.exports = {
    darkMode: "class",
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            sans: ["Inter", "sans-serif"],
            mono: ["JetBrains Mono", "monospace"],
            fira: ["Fira Code", "monospace"],
        },
        extend: {
            animation: {
                "fadeIn": "fadeColor 4s ease-out infinite alternate",
                "fadeOut": "fadeColor 4s ease-out infinite alternate-reverse",
            },
            keyframes: ({
                "fadeColor": {
                    "0%, 44%": {color: "transparent"},
                    "56%, 100%": {color: "White"},
                },
            }),
        },
    },
    plugins: [],
};
