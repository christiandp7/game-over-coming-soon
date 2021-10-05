module.exports = {
  future: {
    purgeLayersByDefault: true,
    applyComplexClasses: true,
  },
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  jit: "true",
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
