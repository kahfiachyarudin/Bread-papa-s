/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        supertrend: ["Super Trend", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        josefin: ["Josefin Sans", "sans-serif"],
      },
      colors: {
        primary: '#F58216',
        secondary: '#785432',
        fillutama: '#F4E7E1',
        fillutamadark: '#332B1C',
        fontutama: '#785432',
        bgdark: '#1E1A16',
        darkcard: '#A66E38',
        hoverprimary: '#D47114',
        footerdark: '#453a20',
        footerlight: '#fffbf0',
        orangePapas: "#F58216",
        brownPapas: "#785432",
        darkmode: "#1E1A16",
      },
      keyframes: {
        slideFadeUp: {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideFadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        slideFadeUp: 'slideFadeUp 1s ease-out forwards',
        slideFadeDown: 'slideFadeDown 1s ease-out forwards',
      },
    },
  },
  plugins: [],
};

