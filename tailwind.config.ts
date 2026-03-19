import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sc: {
          black: "#0a0a0a",
          deep: "#111111",
          surface: "#161616",
          card: "#1a1a1a",
          border: "#222222",
          muted: "#555555",
          subtle: "#888888",
          text: "#c8c4be",
          light: "#e8e4de",
          cream: "#f0ece4",
          gold: "#c9a96e",
          "gold-light": "#dcc08e",
          "gold-dim": "#8a7345",
          accent: "#b08d57",
        },
      },
      fontFamily: {
        serif: [
          "Cormorant Garamond",
          "Bodoni Moda",
          "Georgia",
          "serif",
        ],
        sans: ["Outfit", "sans-serif"],
      },
      animation: {
        "grain-shift": "grainShift 0.5s steps(1) infinite",
        marquee: "marquee 30s linear infinite",
        "fade-up": "fadeUp 1s cubic-bezier(0.16,1,0.3,1) forwards",
        "line-reveal": "lineReveal 1.2s cubic-bezier(0.16,1,0.3,1) forwards",
        "scroll-pulse": "scrollPulse 2s ease-in-out infinite",
        "hero-line-float": "heroLineFloat 8s ease-in-out infinite",
      },
      keyframes: {
        grainShift: {
          "0%": { transform: "translate(0,0)" },
          "25%": { transform: "translate(-2%,-1%)" },
          "50%": { transform: "translate(1%,2%)" },
          "75%": { transform: "translate(-1%,-2%)" },
          "100%": { transform: "translate(2%,1%)" },
        },
        marquee: {
          to: { transform: "translateX(-50%)" },
        },
        fadeUp: {
          to: { opacity: "1", transform: "translateY(0)" },
        },
        lineReveal: {
          to: { opacity: "1", transform: "translateY(0)" },
        },
        scrollPulse: {
          "0%,100%": { opacity: "0.3", transform: "scaleY(1)" },
          "50%": { opacity: "0.8", transform: "scaleY(1.2)" },
        },
        heroLineFloat: {
          "0%,100%": { opacity: "0.08", transform: "translateY(0)" },
          "50%": { opacity: "0.2", transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
