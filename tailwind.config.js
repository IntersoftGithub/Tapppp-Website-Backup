/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        small: "300px",
        xsmall: "340px",
        xssmall: "390px",

        ssm: "460px",
        sssm: "500px",

        ssssm: "580px",
        sssssm: "700px",

        ssmd: "760px",

        smd: "950px",
        md: "1200px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
