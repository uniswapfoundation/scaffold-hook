/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [nextui(), require("daisyui")],
  darkTheme: "scaffoldEthDark",
  darkMode: "class", // or 'media' or 'class'
  // DaisyUI theme colors
  nextui: {
    themes: [
      {
        scaffoldEth: {
          primary: "#FF007A", // Primary pinkish-purple
          "primary-content": "#ffffff",
          secondary: "#f7c5dd", // Lighter pink for secondary elements
          "secondary-content": "#212638",
          accent: "#d21e75", // Darker pink for accent
          "accent-content": "#ffffff",
          neutral: "#f2e2e9", // A soft pinkish-neutral
          "neutral-content": "#212638",
          "base-100": "#fef6fa", // Very light pink base
          "base-200": "#ffe6f1", // Lighter pink base
          "base-300": "#faa1c7", // Moderate pink base
          "base-content": "#2d0619", // Content over the pinkish base
          info: "#ff99c2",
          success: "#34EEB6", // Kept the success ⁄green for clarity, but can change
          warning: "#FFCF72",
          error: "#FF8863",

          "--rounded-btn": "9999rem",

          ".tooltip": {
            "--tooltip-tail": "6px",
          },
        },
      },
      {
        scaffoldEthDark: {
          primary: "#ff007b",
          "primary-content": "#f9d2e5",
          secondary: "#3a0820",
          "secondary-content": "#f9d2e5",
          accent: "#e12d84",
          "accent-content": "#f9d2e5",
          neutral: "#F9FBFF",
          "neutral-content": "#385183",
          "base-100": "#090105",
          "base-200": "#0d0a0f",
          "base-300": "#1a1425",
          "base-content": "#f9d2e5",
          info: "#385183",
          success: "#34EEB6",
          warning: "#FFCF72",
          error: "#FF8863",

          "--rounded-btn": "9999rem",

          ".tooltip": {
            "--tooltip-tail": "6px",
            "--tooltip-color": "hsl(var(--p))",
          },
        },
      },
      {
        exampleUi: {
          primary: "#000000",
          "primary-content": "#ffffff",
          secondary: "#FF6644",
          "secondary-content": "#212638",
          accent: "#93BBFB",
          "accent-content": "#212638",
          neutral: "#f3f3f3",
          "neutral-content": "#212638",
          "base-100": "#ffffff",
          "base-200": "#f1f1f1",
          "base-300": "#d0d0d0",
          "base-content": "#212638",
          info: "#93BBFB",
          success: "#34EEB6",
          warning: "#FFCF72",
          error: "#FF8863",

          "--rounded-btn": "9999rem",

          ".tooltip": {
            "--tooltip-tail": "6px",
          },
        },
      },
    ],
  },
  
          
  daisyui: {
    themes: [
      {
        scaffoldEth: {
          primary: "#FF007A", // Primary pinkish-purple
          "primary-content": "#ffffff",
          secondary: "#f7c5dd", // Lighter pink for secondary elements
          "secondary-content": "#212638",
          accent: "#d21e75", // Darker pink for accent
          "accent-content": "#ffffff",
          neutral: "#f2e2e9", // A soft pinkish-neutral
          "neutral-content": "#212638",
          "base-100": "#fef6fa", // Very light pink base
          "base-200": "#ffe6f1", // Lighter pink base
          "base-300": "#faa1c7", // Moderate pink base
          "base-content": "#2d0619", // Content over the pinkish base
          info: "#ff99c2",
          success: "#34EEB6", // Kept the success ⁄green for clarity, but can change
          warning: "#FFCF72",
          error: "#FF8863",

          "--rounded-btn": "9999rem",

          ".tooltip": {
            "--tooltip-tail": "6px",
          },
        },
      },
      {
        scaffoldEthDark: {
          primary: "#ff007b",
          "primary-content": "#f9d2e5",
          secondary: "#3a0820",
          "secondary-content": "#f9d2e5",
          accent: "#e12d84",
          "accent-content": "#f9d2e5",
          neutral: "#F9FBFF",
          "neutral-content": "#385183",
          "base-100": "#090105",
          "base-200": "#0d0a0f",
          "base-300": "#1a1425",
          "base-content": "#f9d2e5",
          info: "#385183",
          success: "#34EEB6",
          warning: "#FFCF72",
          error: "#FF8863",

          "--rounded-btn": "9999rem",

          ".tooltip": {
            "--tooltip-tail": "6px",
            "--tooltip-color": "hsl(var(--p))",
          },
        },
      },
      {
        exampleUi: {
          primary: "#000000",
          "primary-content": "#ffffff",
          secondary: "#FF6644",
          "secondary-content": "#212638",
          accent: "#93BBFB",
          "accent-content": "#212638",
          neutral: "#f3f3f3",
          "neutral-content": "#212638",
          "base-100": "#ffffff",
          "base-200": "#f1f1f1",
          "base-300": "#d0d0d0",
          "base-content": "#212638",
          info: "#93BBFB",
          success: "#34EEB6",
          warning: "#FFCF72",
          error: "#FF8863",

          "--rounded-btn": "9999rem",

          ".tooltip": {
            "--tooltip-tail": "6px",
          },
        },
      },
    ],
  },
  theme: {
    // Extend Tailwind classes (e.g. font-bai-jamjuree, animate-grow)
    extend: {
      fontFamily: {
        "bai-jamjuree": ["Bai Jamjuree", "sans-serif"],
      },
      boxShadow: {
        center: "0 0 12px -2px rgb(0 0 0 / 0.05)",
      },
      keyframes: {
        grow: {
          "0%": {
            width: "0%",
          },
          "100%": {
            width: "100%",
          },
        },
        zoom: {
          "0%, 100%": { transform: "scale(1, 1)" },
          "50%": { transform: "scale(1.1, 1.1)" },
        },
      },
      animation: {
        grow: "grow 5s linear infinite",
        "pulse-fast": "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        zoom: "zoom 1s ease infinite",
      },
    },
  },
};
