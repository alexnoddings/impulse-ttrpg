const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    colors: {
      /* mixed modes */
      lavender: "#9271AD",
      salmon: {
        light: "#FF7666",
        DEFAULT: "#D86E68",
        dark: "#AC554D",
      },
      cream: {
        light: "#FF7E47",
        DEFAULT: "#d88868",
        dark: "#A65A3A",
      },
      mint: {
        light: "#55CA85",
        DEFAULT: "#84CB9F",
        dark: "#3E7755",
      },
      sky: {
        light: "#2BBFF7",
        DEFAULT: "#68b9d8",
        dark: "#277795",
      },

      /* light mode */
      fog: "#EEDEE4",
      onyx: "#1A1A2A",

      /* dark mode */
      forest: "#1D2D23",
      mist: "#FDEBEB",
    },
    fontFamily: {
      sans: ['"Atkinson Hyperlegible"', ...defaultTheme.fontFamily.sans],
      serif: ['"Atkinson Hyperlegible"', ...defaultTheme.fontFamily.serif],
      mono: [...defaultTheme.fontFamily.mono],
      impulse: ["Nunito", '"Montserrat"', ...defaultTheme.fontFamily.sans],
      header: ['"Montserrat"', ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      sm: ["1rem", "1.15rem"],
      base: ["1.25rem", "1.35rem"],
      lg: ["1.35rem", "1.6rem"],
      xl: ["1.6rem", "2rem"],
      "2xl": ["2rem", "2.5rem"],
      "3xl": ["2.5rem", "3rem"],
      hero: ["5rem", "5rem"],
    },
    listStyleType: {
      none: "none",
      positive: "positive",
      negative: "negative",
      dot: "disc",
    },
  },
  plugins: [],
};
