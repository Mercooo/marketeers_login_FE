// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          primary: {
            DEFAULT: "#3b82f6", // blue-500
            foreground: "#ffffff",
          },
        },
      },
    },
    plugins: [], // Remove the tailwindcss-animate plugin
  }