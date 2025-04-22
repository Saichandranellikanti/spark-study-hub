
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#10C3E6",
          foreground: "#fff",
        },
        secondary: {
          DEFAULT: "#1e2836",
          foreground: "#F3F9FA",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#253140",
          foreground: "#a8d9eb",
        },
        accent: {
          DEFAULT: "#38e9fa",
          foreground: "#151D24",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "#16212b",
          foreground: "#F3F9FA",
        },
        spark: {
          DEFAULT: "#10C3E6",
          light: "#38e9fa",
          dark: "#016072",
          gradient1: "#10C3E6",
          gradient2: "#38e9fa",
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        'glow': {
          "0%, 100%": { boxShadow: "0 0 14px 2px #10C3E6" },
          "50%": { boxShadow: "0 0 24px 6px #38e9fa" }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'glow': 'glow 2.2s infinite ease-in-out',
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
