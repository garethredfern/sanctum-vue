module.exports = {
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        ".trans": {
          transition: "all .25s"
        },
        ".trans-bg": {
          transition: "property background"
        },
        ".trans-slow": {
          transition: "duration .5s"
        },
        ".trans-slower": {
          transition: "duration .5s"
        },
        ".trans-fast": {
          transition: "duration .15s"
        },
        ".trans-faster": {
          transition: "duration .075s"
        }
      };
      addUtilities(newUtilities);
    }
  ],
  theme: {
    fontFamily: {
      sans: ["Open Sans", "sans-serif"]
    }
  }
};
