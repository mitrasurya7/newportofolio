// tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        floatRandom: {
          "0%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(15px, -20px)" },
          "50%": { transform: "translate(-10px, 10px)" },
          "75%": { transform: "translate(20px, 10px)" },
          "100%": { transform: "translate(0, 0)" },
        },
      },
      animation: {
        floatRandom: "floatRandom 18s ease-in-out infinite",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
