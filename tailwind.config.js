module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "app-primary": "var(--app-primary)",
        "doc-header": "var(--doc-header)",
        "interactive-componentoverlayenabledbgneutralhovered":
          "var(--interactive-componentoverlayenabledbgneutralhovered)",
        "interactive-componentoverlayenabledcontentprimary-bluedefault":
          "var(--interactive-componentoverlayenabledcontentprimary-bluedefault)",
        "interactive-componentoverlayenabledcontentprimary-bluehovered":
          "var(--interactive-componentoverlayenabledcontentprimary-bluehovered)",
        "interactive-componentoverlayenabledstrokeoutline-optional":
          "var(--interactive-componentoverlayenabledstrokeoutline-optional)",
        "interactive-componentsolid-bgenabledbgneutraldefault":
          "var(--interactive-componentsolid-bgenabledbgneutraldefault)",
        "interactive-componentsolid-bgenabledcontentdefault":
          "var(--interactive-componentsolid-bgenabledcontentdefault)",
        "interactive-componenttransparentenabledcontentneutraldefault":
          "var(--interactive-componenttransparentenabledcontentneutraldefault)",
        "interactive-componenttransparentenabledcontentprimary-bluedefault":
          "var(--interactive-componenttransparentenabledcontentprimary-bluedefault)",
        "neutralgrey-50": "var(--neutralgrey-50)",
        "neutralsgrey-1": "var(--neutralsgrey-1)",
        "neutralsgrey-2": "var(--neutralsgrey-2)",
        "neutralsgrey-6": "var(--neutralsgrey-6)",
        white: "var(--white)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        h1: "var(--h1-font-family)",
        h5: "var(--h5-font-family)",
        h6: "var(--h6-font-family)",
        "headers-cards-section-header":
          "var(--headers-cards-section-header-font-family)",
        "headers-paragraphs-header":
          "var(--headers-paragraphs-header-font-family)",
        "medium-metadata": "var(--medium-metadata-font-family)",
        "metadata-medium-metadata":
          "var(--metadata-medium-metadata-font-family)",
        "micro-metadata-heavy-micro-metadata":
          "var(--micro-metadata-heavy-micro-metadata-font-family)",
        "micro-metadata-medium-micro-metadata":
          "var(--micro-metadata-medium-micro-metadata-font-family)",
        paragraph: "var(--paragraph-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      boxShadow: {
        "light-elevation-near": "var(--light-elevation-near)",
        "shadow-default": "var(--shadow-default)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
