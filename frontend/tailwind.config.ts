import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        pink: "var(--color-pink)",
        lightpink: "var(--color-light-pink)",
        lilac: "var(--color-lilac)",
        purple: "var(--color-purple)",
        blue: "var(--color-blue)",
      },
      textColor: {
        primary: "var(--color-primary-font)",
        secondary: "var(--color-secondary-font)",
        subtitle: "var(--color-subtitle-font)",
      },
      screens: {
        xs: "360px",
        s: "425px",
        m: "768px",
        l: "1024px",
        xl: "1280px",
        xxl: "1440px"
      },
      height: {
        header: "var(--height-header)",
      },
      gridTemplateColumns: {
        "review": "1fr 2fr",
      }
    },
  },
  plugins: [],
} satisfies Config;
