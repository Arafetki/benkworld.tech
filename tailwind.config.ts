import type { Config } from "tailwindcss"
const {nextui} = require("@nextui-org/react");

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)'],
        mono: ['var(--font-roboto-mono)']
      }
    },
  },
  plugins: [
    nextui({
      
    }),
    require('@tailwindcss/typography')
  ],
} satisfies Config

export default config