/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-pattern":
          "linear-gradient(70deg,rgb(13,114,126) 20%, rgb(82,54,97) 60%)",
        "hero-underlay":
          "linear-gradient(-3deg, rgb(21,21,21) 41.0%, transparent 41.3%)",
        "dot-pattern": "url('src/assets/dots-sm.png')",
        "img-fixed": "url('src/assets/desk-sm.png')",
      },

      colors: {
        primary: "#5d4d6f",
        secondary: "#323c62",
        "brand-purple": "rgb(82,54,97)",
        "brand-cyan": "rgb(44,115,134)",
        "brand-pink": "rgb(145,90,129)",
        "brand-gray": "#efefef",
        "brand-black": "#110e17",
        "soft-white": "rgb(251,250,245)",
        "deep-purple": "rgb(59,41,63)",
        "header-color": "rgba(34,32,37, .9)",
        "dark-gray": "rgb(65,65,71)",
        "brand-gray-dk": "rgb(51,51,51)",
      },

      dropShadow: {
        "3xl": "2px 2px 6px rgba(0,0,0,0.7)",
        dark: "2px 2px 2px rgba(0,0,0,.6)",
        tiny: "1px 1px 0px rgba(0,0,0,.7)",
        "active-header": "0px 2px 5px rgba(0,0,0,.3)",
        cyan: "3px 3px 1px #cbd5e1",
        badge: "0px 2px 2px rgba(0,0,0,0.3)",
      },

      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        RobotoCond: ["Roboto Condensed", "sans-serif"],
        Noto: ["Noto Serif", "serif"],
        Montserrat: ["Montserrat", "serif"],
      },

      keyframes: {
        drift: {
          "0%": { transform: "translateX(0px)", opacity: "0" },
          "1%": { opacity: "1" },
          "50%": { opacity: "0.3" },
          "100%": { transform: "translateX(80vmin)", opacity: "0" },
        },
        
        fadeInFromNone: {
          "0%": { visibility: "visible", opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        "bokah-drift": "drift 20s infinite",
        "tooltip-fade-in": "fadeInFromNone .5s linear forwards",
      },

      screens: {
        xxs: { raw: "(max-width:320px)" },
      },
    },
  },
  plugins: [],
};
