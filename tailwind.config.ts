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
        /* ── Brand ink palette (dark tones) ── */
        ink: {
          950: "#111111",
          900: "#1c1c1c",
          800: "#2d2d2d",
          700: "#404040",
          600: "#525252",
        },
        /* ── Brand warm dark (hero/CTA panels) ── */
        panel: {
          950: "#111111",
          900: "#1c1210",
          800: "#2a1810",
          700: "#3d2012",
        },
        /* ── Orange / flame ── */
        flame: {
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
        },
        /* ── Amber ── */
        sun: {
          50:  "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
        },
        /* ── Neutral surfaces ── */
        surface: {
          50:  "#fafafa",
          100: "#f5f5f5",
          200: "#e5e5e5",
          warm: "#f9f9f7",
          soft: "#f5f5f0",
        },
        /* ── Mist (soft warm tint) ── */
        mist: {
          50:  "#fafaf7",
          100: "#f5f5ef",
          200: "#ebebdf",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans:    ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft:  "0 4px 20px rgba(0, 0, 0, 0.03)",
        lift:  "0 12px 30px rgba(0, 0, 0, 0.06), 0 6px 16px rgba(234, 88, 12, 0.08)",
        brand: "0 8px 24px rgba(234, 88, 12, 0.2)",
        glow:  "0 0 15px rgba(249, 115, 22, 0.4)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
        "hero-sheen":
          "radial-gradient(ellipse 75% 55% at 80% 10%, rgba(249,115,22,0.32), transparent 60%), radial-gradient(ellipse 50% 40% at 10% 90%, rgba(194,65,12,0.28), transparent 55%)",
        "sun-band":
          "linear-gradient(90deg, #c2410c 0%, #ea580c 40%, #f97316 70%, #fbbf24 100%)",
        "warm-panel":
          "linear-gradient(160deg, #111111 0%, #1c1210 50%, #2a1810 100%)",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(15px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to:   { opacity: "1" },
        },
        slideDown: {
          from: { opacity: "0", transform: "translateY(-10px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to:   { transform: "translateX(-50%)" },
        },
        floatSoft: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%":       { transform: "translateY(-7px)" },
        },
      },
      animation: {
        "fade-up":    "fadeUp 0.7s cubic-bezier(0.25, 1, 0.5, 1) both",
        "fade-in":    "fadeIn 0.5s ease both",
        "slide-down": "slideDown 0.35s cubic-bezier(0.22, 1, 0.36, 1) both",
        marquee:      "marquee 44s linear infinite",
        "float-soft": "floatSoft 5.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
