/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    
    extend: {
      screens: {
        small: "300px",
        // sssssm: "700px",
        xsmall: "500px",
        xxsmall: "650px",

        ssmd: "760px",

        smd: "950px",
        md: "1200px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
