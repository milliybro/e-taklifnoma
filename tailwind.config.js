const { colors: defaultColors } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "3rem",
        xl: "4rem",
        "2xl": "9rem",
      },
      center: true,
    },
    extend: {
      colors: {
        ...defaultColors,
        secondLight: "#ffc700",
        darkBlue: "#050F37",
        dark: "#101A42",
        blue: "#2575FC",
        green: "#00C878",
        lightGray: "#646A83",
        secondaryGray: "#191F3B",
        deepCove: "#0B1746",
        primaryOrange: "#F54500",
        deepCloud: "#262D4C",
        blueFlow: "#515665",
        borderColor: "#2E3F8F",
        hoverColor: "#D4406D"
      },
      zIndex: {
        9999: "9999",
        999: "999",
      },
      fontSize: {},
      boxShadow: {
        blueShadow:
          "0px 101px 40px rgba(0, 87, 255, 0.02), 0px 57px 34px rgba(0, 87, 255, 0.08), 0px 25px 25px rgba(0, 87, 255, 0.13), 0px 6px 14px rgba(0, 87, 255, 0.15)",
        redShadow:
          "0px 101px 40px rgba(206, 90, 103, 0.02), 0px 57px 34px rgba(206, 90, 103, 0.08), 0px 25px 25px rgba(206, 90, 103, 0.13), 0px 6px 14px rgba(206, 90, 103, 0.15)",
      },

      screens: {
        sm: "800px",
        md: "992px",
        lg: "1200px",
        xl: "1440px",
        "2xl": "1440px",
      },

      keyframes: {
        scrollHorizontal: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        rotateDown: {
          "0%": { transform: "rotate(180deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        rotateUp: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(180deg)" },
        },
      },
      animation: {
        "rotate-down": "rotateDown 0.3s ease-in-out forwards",
        "rotate-up": "rotateUp 0.3s ease-in-out forwards",
        scrollHorizontal: "scrollHorizontal 32s linear infinite",
      },
    },
    fontFamily: {
      inter: ["OpenSans", "sans-serif"],
      FUTSALSPEED: ["FUTSALSPEED", "sans-serif"],
    },
  },
  plugins: [require("flowbite/plugin")],
};
