import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        deep: {
          900: "#050505",
          800: "#0a0a0a",
          700: "#111111",
        },
        glow: {
          blue: "#3b82f6",
          purple: "#a855f7",
        }
      },
      backgroundImage: {
        'gradient-deep': 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.05) 0%, rgba(168, 85, 247, 0.05) 50%, rgba(5, 5, 5, 1) 100%)',
        'glow-mesh': 'radial-gradient(at 0% 0%, rgba(59, 130, 246, 0.15) 0, transparent 50%), radial-gradient(at 100% 0%, rgba(168, 85, 247, 0.15) 0, transparent 50%)',
      },
      animation: {
        'glow-pulse': 'glow 4s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { opacity: '0.5' },
          '100%': { opacity: '1' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
