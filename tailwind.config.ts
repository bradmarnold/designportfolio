// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-yellow": {
          DEFAULT: "#FFC233",
          50: "#FFF3C2",
          600: "#E3A900",
        },
      },
      boxShadow: {
        soft: "0 6px 24px rgba(0,0,0,0.08)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
      },
      container: {
        center: true,
        padding: "1rem",
        screens: { "2xl": "1120px" },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;