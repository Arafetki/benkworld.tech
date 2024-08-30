const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
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
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    nextui({
      themes: {
        light:{
          colors: {
            background: "#FFFFFF",
            foreground: "#090A0D",
            primary: {
              DEFAULT: "#1DA16C",
              foreground: "#FFE9E9",
            },
            secondary: {
              DEFAULT: "#F1F2F5",
              foreground: "#1A1B20",
            },
            card: {
              DEFAULT: "#FFFFFF",
              foreground: "#090A0D",
            },
            destructive: {
              DEFAULT: "#E53935",
              foreground: "#FAFAFA",
            },
            popover: {
              DEFAULT: "#FFFFFF",
              foreground: "#090A0D",
            },
            muted: {
              DEFAULT: "#F1F2F5",
              foreground: "#737585",
            },
            accent: {
              DEFAULT: "#F1F2F5",
              foreground: "#1A1B20",
            },
            border: "#E8E9EC",
            input: "#E8E9EC",
            ring: "#1DA16C",
            chart: {
              100: "#E9634F",
              200: "#35A7A3",
              300: "#27546C",
              400: "#F5B647",
              500: "#F7A965",
            },
            danger: {
              DEFAULT: "#b91c1c",
              50: "#fef2f2",
              100: "#fee2e2",
              200: "#fecaca",
              300: "#fca5a5",
              400: "#f87171",
              500: "#ef4444",
              600: "#dc2626",
              700: "#b91c1c",
              800: "#991b1b",
              900: "#7f1d1d"
            }
          },
        },
        dark: {
          colors: {
            background: "#0B0B09",
            foreground: "#F2F2F2",
            primary: {
              DEFAULT: "#26B288",
              foreground: "#052A2A",
            },
            secondary: {
              DEFAULT: "#262729",
              foreground: "#FAFAFA",
            },
            card: {
              DEFAULT: "#1B1A17",
              foreground: "#F2F2F2",
            },
            destructive: {
              DEFAULT: "#B23A30",
              foreground: "#FFE5E5",
            },
            popover: {
              DEFAULT: "#171717",
              foreground: "#F2F2F2",
            },
            muted: {
              DEFAULT: "#262626",
              foreground: "#9FA2B2",
            },
            accent: {
              DEFAULT: "#291E1E",
              foreground: "#FAFAFA",
            },
            border: "#262729",
            input: "#262729",
            ring: "#198461",
            chart: {
              100: "#4B88E2",
              200: "#45B58D",
              300: "#D68933",
              400: "#AB4DD6",
              500: "#E74D8C",
            },
            danger: {
              DEFAULT: "#b91c1c",
              50: "#450a0a",
              100: "#7f1d1d",
              200: "#991b1b",
              300: "#b91c1c",
              400: "#dc2626",
              500: "#ef4444",
              600: "#f87171",
              700: "#fca5a5",
              800: "#fecaca",
              900: "#fee2e2"
            }
          },
        },
      },
    }),
    require("tailwindcss-animate"),
    require("@tailwindcss/typography")
  ],
}