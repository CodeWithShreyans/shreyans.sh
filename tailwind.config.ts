import { type Config } from "tailwindcss"

module.exports = {
   content: [
      "./pages/**/*.{ts,tsx}",
      "./components/**/*.{ts,tsx}",
      "./app/**/*.{ts,tsx}",
   ],
   darkMode: ["class"],
   future: {
      hoverOnlyWhenSupported: true,
   },
   plugins: [require("tailwindcss-animate")],
   theme: {
      container: {
         center: true,
         padding: "2rem",
         screens: {
            "2xl": "1400px",
         },
      },
      extend: {
         animation: {
            "accordion-down": "accordion-down 0.2s ease-out",
            "accordion-up": "accordion-up 0.2s ease-out",
            down: "down 1.5s ease-in-out 0s 1 normal none running",
            "fade-in": "fade-in 1.5s ease-in-out 0s 1 normal none running",
            "rotate-clock-180": "rotate-180 0.2s ease-out",
            up: "up 1.5s ease-in-out 0s 1 normal none running",
         },
         borderRadius: {
            lg: "var(--radius)",
            md: "calc(var(--radius) - 2px)",
            sm: "calc(var(--radius) - 4px)",
         },
         colors: {
            accent: {
               DEFAULT: "hsl(var(--accent))",
               foreground: "hsl(var(--accent-foreground))",
            },
            background: "hsl(var(--background))",
            border: "hsl(var(--border))",
            card: {
               DEFAULT: "hsl(var(--card))",
               foreground: "hsl(var(--card-foreground))",
            },
            destructive: {
               DEFAULT: "hsl(var(--destructive))",
               foreground: "hsl(var(--destructive-foreground))",
            },
            foreground: "hsl(var(--foreground))",
            input: "hsl(var(--input))",
            muted: {
               DEFAULT: "hsl(var(--muted))",
               foreground: "hsl(var(--muted-foreground))",
            },
            popover: {
               DEFAULT: "hsl(var(--popover))",
               foreground: "hsl(var(--popover-foreground))",
            },
            primary: {
               DEFAULT: "hsl(var(--primary))",
               foreground: "hsl(var(--primary-foreground))",
            },
            ring: "hsl(var(--ring))",
            secondary: {
               DEFAULT: "hsl(var(--secondary))",
               foreground: "hsl(var(--secondary-foreground))",
            },
         },
         fontFamily: {
            mono: ["var(--font-geist-mono)"],
            sans: ["var(--font-geist-sans)"],
         },
         keyframes: {
            "accordion-down": {
               from: { height: "0" },
               to: { height: "var(--radix-accordion-content-height)" },
            },
            "accordion-up": {
               from: { height: "var(--radix-accordion-content-height)" },
               to: { height: "0" },
            },
            down: {
               from: { opacity: "0", transform: "translateY(-0.5rem)" },
               to: { opacity: "1", transform: "translateY(0)" },
            },
            "fade-in": {
               from: { opacity: "0" },
               to: { opacity: "1" },
            },
            "rotate-clock-180": {
               from: { transform: "rotate(0deg)" },
               to: { transform: "rotate(180deg)" },
            },
            up: {
               from: { opacity: "0", transform: "translateY(0.5rem)" },
               to: { opacity: "1", transform: "translateY(0)" },
            },
         },
         screens: {
            "non-touch": { raw: "(hover: hover)" },
         },
      },
   },
} as Config
