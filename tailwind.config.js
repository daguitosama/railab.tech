const colors = require("tailwindcss/colors");

module.exports = {
    darkMode: "class", // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: {
                    light: {
                        DEFAULT: "#006ee6",
                        hover: "#0055b3",
                    },
                    dark: {
                        DEFAULT: "#0055b3",
                        hover: "#0062cc",
                    },
                },
                onLight: "#20233c",
                onDark: "#dbdde0",
                surface: {
                    light: "#fff",
                    dark: "#2C3E50",
                },
                ...colors,
                gray: colors.blueGray,
            },
            spacing: {
                "1/2": "50%",
                "1/3": "33.333333%",
                "2/3": "66.666667%",
                84: "21rem",
                96: "24rem",
                108: "27rem",
                144: "36rem",
                216: "54rem",
            },
            minHeight: {
                0: "0",
                "1/4": "25%",
                "1/2": "50%",
                "3/4": "75%",
                full: "100%",
                // fixed
                84: "21rem",
                96: "24rem",
                108: "27rem",
                144: "36rem",
                216: "54rem",
            },
        },
    },
};
