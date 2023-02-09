/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: "rgb(var(--white) / <alpha-value>)",
      "brand-dark": "rgb(var(--brand-dark) / <alpha-value>)",
      "brand-primary": "rgb(var(--brand-primary) / <alpha-value>)",
      "brand-primary-alt": "rgb(var(--brand-primary-alt) / <alpha-value>)",
      "brand-secondary": "rgb(var(--brand-secondary) / <alpha-value>)",
      "brand-teriary": "rgb(var(--brand-teriary) / <alpha-value>)",
      "brand-danger": "rgb(var(--brand-danger) / <alpha-value>)",
      "brand-success": "rgb(var(--brand-success) / <alpha-value>)",
      "brand-warning": "rgb(var(--brand-warning) / <alpha-value>)",
    },
    extend: {},
  },
  plugins: [],
};
