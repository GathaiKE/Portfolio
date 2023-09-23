/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens:{
        srch:"55rem"
      },
      fontSize: {
        sm: '0.688rem',
        base: '0.75rem',
        md: '1rem',
        lg: '1.125rem',
        xl:'1.625rem',
        '2xl': '1.875rem',
      },
      colors:{
        primary:{
          'light':"rgb(26,34,71)",
          'dark':"#0A0F25",
          'darker':"#060916",
          'hero':"rgba(0,0,0,0.7)"
        },
        cyan:"rgb(0,255,255)",
        white:"rgb(255,255,255)",
        smokewhite:"rgb(156,156,156)"
      }
    }
  },
  plugins: [],
}