/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                iranyekan: ["iranyekan"],
            },
            boxShadow: {
                "3xl": "1px 0px 8px 4px #6D28D9",
            },
        },
    },
    plugins: [],
};
