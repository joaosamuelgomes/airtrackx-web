/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'bebas': ['Bebas Neue', 'sans-serif'],
      'ubuntu': ['Ubuntu', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        "building": "url('/src/assets/building.png')"
      },
      colors: {
        p1: "#253544",
        p2: "#2E5172",
        p3: "#296C92",
        p4: "#2587B1",
        p5: "#169ED9",

        c1: "#000000",
        c2: "#141414",
        c3: "#292929",
        c4: "#525252",
        c5: "#5C5C5C",
        c6: "#6B6B6B",
        c7: "#8F8F8F",
        c8: "#949494",
        c9: "#A8A8A8",
        c10: "#B8B8B8",
        c11: "#D1D1D1",
        c12: "#F0F0F0"
      }
    },
  },
  plugins: [],
}

