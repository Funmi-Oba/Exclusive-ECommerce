/** @type {import('@tailwindcss/vite').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx,css}",
  ],
  theme: {
    extend: {
      fontFamily: {
       inter: ["Inter", "sans-serif"],
      },

    },
  },
  plugins: [],
}

       