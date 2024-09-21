import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "custom-gradient-one": "linear-gradient(to right, #5FC3E4, #E55D87)",
        "custom-gradient-two": "linear-gradient(to left, #5FC3E4, #E55D87)",
        'custom-gradient-three': 'linear-gradient(to right, #bfe9ff, #ff6e7f)',


      },
      // backgroundImageTwo: {
      //   "custom-gradient-two": "linear-gradient(to left, #5FC3E4, #E55D87)",
      // },
    },
  },
  plugins: [],
};
export default config;
