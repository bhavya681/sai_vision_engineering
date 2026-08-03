import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "390px",
      },
      colors: {
        ink: {
          950: "#140e07",
          900: "#1f1409",
          800: "#3b2a18",
          700: "#5c4428",
          600: "#7a5a36",
        },
        sun: {
          50: "#fffef5",
          100: "#fff4cc",
          200: "#ffe780",
          300: "#ffd84d",
          400: "#ffd000",
          500: "#ffb020",
          600: "#ff8f0a",
          700: "#e06f00",
          800: "#b45309",
        },
        flame: {
          400: "#ff9440",
          500: "#ff7a18",
          600: "#f05d00",
          700: "#c2410c",
        },
        brass: {
          50: "#fffef5",
          100: "#fff4cc",
          200: "#ffe780",
          300: "#ffd84d",
          400: "#ffd000",
          500: "#ffb020",
          600: "#ff8f0a",
          700: "#e06f00",
        },
        ember: {
          500: "#e11d48",
          600: "#be123c",
        },
        mist: {
          50: "#fffdf7",
          100: "#fff8e7",
          200: "#fdecc0",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 18px 50px rgba(255, 122, 24, 0.14)",
        lift: "0 18px 42px rgba(255, 122, 24, 0.22)",
        glow: "0 0 0 4px rgba(255, 208, 0, 0.28)",
        bright: "0 12px 36px rgba(255, 176, 32, 0.35)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
        "hero-sheen":
          "radial-gradient(ellipse 80% 55% at 78% 12%, rgba(255,208,0,0.42), transparent 55%), radial-gradient(ellipse 55% 45% at 12% 85%, rgba(255,122,24,0.34), transparent 60%)",
        "sun-band":
          "linear-gradient(135deg, #ffd000 0%, #ffb020 45%, #ff7a18 100%)",
        "warm-panel":
          "linear-gradient(160deg, #1a1208 0%, #3a2714 48%, #5a3d22 100%)",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(18px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideDown: {
          from: { opacity: "0", transform: "translateY(-8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        floatSoft: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "fade-up": "fadeUp 0.75s cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-in": "fadeIn 0.5s ease both",
        "slide-down": "slideDown 0.35s cubic-bezier(0.22, 1, 0.36, 1) both",
        marquee: "marquee 42s linear infinite",
        "float-soft": "floatSoft 5.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
