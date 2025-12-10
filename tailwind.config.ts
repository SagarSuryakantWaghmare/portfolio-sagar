import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

export default {
  content: ["./app/**/*.{ts,tsx}", "./public/**/*.svg"],
  theme: {
    extend: {
      fontFamily: {
        sans: "var(--font-geist-sans), system-ui, sans-serif",
        mono: ["var(--font-geist-mono)"],
      },
      colors: {
        "bg-primary": "#F7F7F8",
        "border-primary": "#D6DADE",
        "dark-primary": "#3C3C3F",
        "orange-primary": "#FF6B35",
        "orange-secondary": "#FFE5DC",
        "text-primary": colors.slate[900],
        "text-secondary": "#5E5F6E",
        "text-tertiary": "#A5AEB8",
      },
      animation: {
        "spin-slow": "spin 14s linear infinite",
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
} satisfies Config;
