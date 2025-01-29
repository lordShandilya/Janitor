/** @type {import('tailwindcss').Config} */
export const content = ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"];
export const presets = [require("nativewind/preset")];
export const theme = {
  extend: {
    colors: {
      primary: "#0066F6",
      secondary: {
        DEFAULT: "#FF9C01",
        100: "#FF9001",
        200: "#FF8E01",
      },
      black: {
        DEFAULT: "#000",
        100: "#1E1E2D",
        200: "#232533",
      },
      gray: {
        100: "#CDCDE0",
      },
    },
    fontFamily: {
      'poppins-medium': ['Poppins-Medium', 'sans-serif'],
      'poppins-semibold': ['Poppins-SemiBold', 'sans-serif'],
      'poppins-bold': ['Poppins-Bold', 'sans-serif'],
      'poppins-extrabold': ['Poppins-ExtraBold', 'sans-serif'],
      klight: ["Karla-Light", "sans-serif"],
      kextralight: ["Karla-ExtraLight", "sans-serif"],
      kregular: ["Karla-Regular", "sans-serif"],
      kmedium: ["Karla-Medium", "sans-serif"],
      ksemibold: ["Karla-SemiBold", "sans-serif"],
      kbold: ["Karla-Bold", "sans-serif"],
      kextrabold: ["Karla-ExtraBold", "sans-serif"],
    }
  },
};
export const plugins = [];

