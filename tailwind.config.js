/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkblack: "#020816",
        darkbackground: "#1d1d1f",
        primary: "#ffb109",
        secondary: "#bcbec4",
      },
      backgroundImage: {
        footerBackground:
          "radial-gradient(circle, rgb(255, 177, 9) 0%, rgba(2,8,22,1) 58%);",
        background:
          "radial-gradient(circle, rgba(255,177,9,1) 0%, rgba(2,8,22,1) 40%);",
        // "linear-gradient(0deg, rgba(0,100,158,1) 0%, rgba(2,8,22,1) 60%);",
        // "radial-gradient(circle, rgba(0,100,158,0.9710477941176471) 5%, rgba(2,8,22,0.8253895308123249) 55%);",
        // "radial-gradient(circle, rgba(85,225,221,1) 10%, rgba(0,100,158,0.5) 50%, rgba(2,8,22,1) 100%);",
      },
    },
  },
  plugins: [],
};
