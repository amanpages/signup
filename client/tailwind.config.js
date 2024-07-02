/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        red: "#e91111",
        gray: {
          "100": "#827676",
          "200": "#181414",
          "300": "rgba(39, 41, 30, 0.14)",
        },
        dodgerblue: "#0078d4",
        cornflowerblue: "#269efa",
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        asap: "Asap",
        inter: "Inter",
      },
      borderRadius: {
        xl: "20px",
        "3xl": "22px",
        "51xl": "70px",
      },
    },
    fontSize: {
      xl: "20px",
      base: "16px",
      "13xl": "32px",
      "7xl": "26px",
      lgi: "19px",
      "5xl": "24px",
      "29xl": "48px",
      "19xl": "38px",
      "10xl": "29px",
      inherit: "inherit",
    },
    screens: {
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};