
import type { Config } from "tailwindcss";

export default {
  darkMode: false, // Disable dark mode completely
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
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
      colors: {
        border: "#e0e6ef",
        input: "#f1f5f9",
        ring: "#10C3E6",
        background: "#f6fbff",
        foreground: "#273046",
        primary: {
          DEFAULT: "#13C0EF",
          foreground: "#fff",
        },
        secondary: {
          DEFAULT: "#e7f7fb",
          foreground: "#13C0EF",
        },
        destructive: {
          DEFAULT: "#fa7566",
          foreground: "#fff",
        },
        muted: {
          DEFAULT: "#f1f5fa",
          foreground: "#84a6b8",
        },
        accent: {
          DEFAULT: "#10C3E6",
          foreground: "#151D24",
        },
        popover: {
          DEFAULT: "#ffffff",
          foreground: "#273046",
        },
        card: {
          DEFAULT: "#ffffff",
          foreground: "#273046",
        },
        spark: {
          DEFAULT: "#13C0EF",
          blue: "#10C3E6",
        },
      },
      borderRadius: {
        lg: '1rem',
        md: '0.75rem',
        sm: '0.5rem'
      },
      keyframes: {
        'glow': {
          "0%, 100%": { boxShadow: "0 0 14px 2px #10C3E6" },
          "50%": { boxShadow: "0 0 24px 6px #13C0EF" }
        }
      },
      animation: {
        'glow': 'glow 2.2s infinite ease-in-out',
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
