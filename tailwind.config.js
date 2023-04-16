/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

const { colors } = require("./src/designTokens/index");

const sectionPaddings = {
  smallDesktop: 50,
  smallMobile: 20,
  mediumDesktop: 80,
  mediumMobile: 30,
  largeDesktop: 150,
  largeMobile: 75,
};

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/types/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        "2xl": "3.75rem",
      },
      screens: {
        "2xl": "1440px",
      },
    },
    extend: {
      fontFamily: {
        body: ["Gotham Narrow, sans-serif", ...defaultTheme.fontFamily.sans],
      },
      padding: {
        smallDesktop: `${sectionPaddings.smallDesktop}px`,
        smallMobile: `${sectionPaddings.smallMobile}px`,
        mediumDesktop: `${sectionPaddings.mediumDesktop}px`,
        mediumMobile: `${sectionPaddings.mediumMobile}px`,
        largeDesktop: `${sectionPaddings.largeDesktop}px`,
        largeMobile: `${sectionPaddings.largeMobile}px`,
      },
      screens: {
        ...defaultTheme.screens,
        "3xl": "1900px",
      },
      colors,
      fontSize: {
        "2xs": ["0.63rem", { lineHeight: "0.875rem" }],
        "3xs": ["0.5rem", { lineHeight: "0.75rem" }],
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["disabled"],
      textColor: ["disabled"],
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
    require("@tailwindcss/aspect-ratio"),
  ],
};
