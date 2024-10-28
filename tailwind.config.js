/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        barlow: ['"Barlow Condensed"', "sans-serif"], // Adding "Barlow Condensed" as a custom font
      },
      fontSize: {
        "10xl": "8rem", // Adjust the size as needed
      },
    },
  },
  plugins: [],
};
