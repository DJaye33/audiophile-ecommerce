/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Manrope", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "hero-mobile": "url('/image-header.jpg')",
        "hero-tab": "url('/image-header-tab.jpg')",
        "hero-desk": "url('/image-hero'.jpg)",
      },
    },
  },
  plugins: [],
};
