module.exports = {
  content: ["./src/**/*.{html,js}"],
  media: false,

  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#CC2D4A",
      secondary: "#8FA206",
      terciary: "#61AEC9",
    }),
    textcolor: (theme) => ({
      ...theme("colors"),
      primary: "#CC2D4A",
      secondary: "#8FA206",
      terciary: "#61AEC9",
    }),
    extend: {
      backgroundImage: {
        sanFrancisco: "url('../img/sanFrancisco.jpg')",
        sanFranciscoDesktop: "url('../img/sanFranciscoDesktop.jpg')",
        sydney: "url('../img/sydney.jpg')",
        switzerland: "url('../img/switzerland.jpg')",
        seattle: "url('../img/seattle.jpg')",
        norway: "url('../img/norway.jpg')",
        newYork: "url('../img/new_york.jpg')",
        miami: "url('../img/miami.jpg')",
        LA: "url('../img/LA.jpg')",
        iceland: "url('../img/iceland.jpg')",
        europe: "url('../img/europe.jpg')",
        chicago: "url('../img/chicago.jpg')",
        bali: "url('../img/bali.jpg')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
  plugins: [require("@tailwindcss/typography")],
  plugins: [require("@tailwindcss/aspect-ratio")],
};
