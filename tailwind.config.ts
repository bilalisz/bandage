import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "app-green": "#23856D ",
        "app-blue": "#23A6F0",
        "app-gray-700": "#737373",
        "app-gray-900": "#BDBDBD",
        "app-light-1": "#FAFAFA",
        "app-orang-1": "#E77C40",
        "app-black": "#000",
      },
      fontFamily: {
        "app-montserrat": "Montserrat",
      },
    },
  },
  plugins: [],
  prefix: "tw-",
};
export default config;
