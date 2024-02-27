import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'customTitle': ['Play',"sans"],
        'customSubtitle': ['Changa', 'sans'],
        'customText': ['Pridi', 'sans']
        
      },
      colors: {
        'customColor':'#ff7a13',
        'light':{
          'primary': '#f8f8f8',
          'secondary': 'rgb(51 65 85)',
        },
        'dark':{
          'primary':'rgb(51 65 85)',
          'secondary':'#f8f8f8',
        }
      }
    },
  },
  plugins: [],
};
export default config;
