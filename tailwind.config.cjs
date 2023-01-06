/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.tsx"],
    theme: {
        extend: {
            colors: {
                background: "#121212",
                primary: "#145eee",
                secundary: "#26282C",
            },
            borderRadius: {
                r3xl: "1.25rem",
            },
            textColor: {
                text: "#fff",
                primary: "#145eee",
            },
            maxWidth: {
                xl: "780px",
                100: "706px",
                360: "360px",
            },
            minWidth: {
                s: "780px",
            },
            width: {
                xl: "48rem",
                md: "22rem",
                100: "706px",
                360: "360px",
            },
        },
    },
    plugins: [],
};
