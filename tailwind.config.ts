import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        grotesk: ["Space Grotesk", "sans-serif"],
        neue: ["Bebas Neue", "sans-serif"],
      },
      boxShadow: {
        DEFAULT: "3px 3px 0px 0px #000",
        active: "1px 1px 0px 0px #000",
      },
      colors: {
        primary: "#fffcf4",
        "primary-content": "#f4b100",
        "primary-dark": "#ffeec1",
        "primary-light": "#ffffff",

        secondary: "#f4fff6",
        "secondary-content": "#00f42c",
        "secondary-dark": "#c1ffcc",
        "secondary-light": "#ffffff",

        background: "#f1f0ef",
        foreground: "#fbfbfb",
        border: "#e2e0dd",

        copy: "#292823",
        "copy-light": "#6e695e",
        "copy-lighter": "#959084",

        success: "#4DFD4D",
        warning: "#FBFB59",
        error: "#F75A5A",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
