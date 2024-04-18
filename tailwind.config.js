/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "#f2eeeb",
        "secondary-color": "#fe7962",
        "primary-gray": "#f9f9f9",
      },
      backgroundImage: {
        hotMenu: "url(/images/hot-menu.jpg)",
      },
    },
  },
  plugins: [],
};
