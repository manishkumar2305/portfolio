/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "primaryColor": "#C70D3A",
        "secondaryColor": "#66BFBF",
        "bgColor": "#7D6E83"
      },
      fontFamily: {
        "primaryFont": "Lato",
        "secondaryFont": "Raleway",
        "ubuntuFont": "Ubuntu"
      },
      keyframes: {
        ping: {
          '50%, 75%' :{
            transform: 'scale(1.7)',
            opacity: 0
          }
        },
        // alertAnimate: {
        //   '100%' :{
        //     right:"100%"
        //   }
        // }
      },
      animation: {
        ping: 'ping 1.7s ease-in infinite',
        // alertAnimate:'alertAnimate 5s linear forwards'
      }
    },
  },
  plugins: [],
}
