import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        'sm' : {'min': '280px', 'max': '850px'},
        'md': {'min': '851px', 'max': '1050px'},
        'lg': {'min': '1051px', 'max': '1250px'},
        'xl': {'min': '1251px', 'max': '1500px'},
        '2xl': {'min': '1501px', 'max': '2000px'}
      },
    },
  },
  plugins: [],
};
export default config;
