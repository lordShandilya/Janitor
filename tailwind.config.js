/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}","./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily:{
        'poppins-medium':['Poppins-Medium','sans-serif'],
        'poppins-semibold':['Poppins-SemiBold','sans-serif'],
        'poppins-bold':['Poppins-Bold','sans-serif'],
        'poppins-extrabold':['Poppins-ExtraBold','sans-serif']
      }
    },
  },
  plugins: [],
}

