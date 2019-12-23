module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        ancillary: "var(--color-ancillary)"
      }
    },
    fontFamily: {
      sans: [
        'MontserratRegular',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: [
        'Georgia',
        'Cambria',
        '"Times New Roman"',
        'Times',
        'serif',
      ],
      mono: [
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
    },
  },
  variants: {},
  plugins: [
    function({ addUtilities, addComponents, e, prefix, config }) {
      // This function is your plugin
      const keys = ['all', 'opacity', 'background', 'background-color', 'color'];

      const transitions = keys.reduce((acc, key) => {
        acc[`.transition-${key}`] =  {
          transition: `${key} 0.2s`
        }
        return acc;
      }, {});

      addUtilities(transitions)
    },
  ]
};
