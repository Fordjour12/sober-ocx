/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontSize:{
        '12xl': "15rem"
      },
      lineHeight:{
        'extra-tight':'1.15'
      },

    },
  },
  plugins: [],
}