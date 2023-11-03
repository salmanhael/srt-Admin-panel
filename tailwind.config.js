/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height:{
        7.5:'30px',
        12.5:'50px',
        15:'57px',
        15.5:'59px',
        19:'77px',
        24.5:'100px',
        29:'119px',
        34:'137.5px',
      },
      padding:{
        3.6:'14.5px',
        4.5:'18px',
        24.5:'98px',
        29:'120px'
      },
      width:{
        63:'250px',
        '6/5':'120%',

      },
      screens:{
        mobilesm:'321px',
        mobile:'576px',
        desktop:'1400px',
        tv:'2040px',
      },
      maxWidth: {
       '8xl' : '1320px',
       '2k' : '2040px',
      },
      fontFamily: {
        'iranyekan':['iranyekan']
      },
      backgroundColor: {
        'table': '#FCF8E8',
      },
      fontSize: {
        normal:"15px"
      },
      boxShadow: {
        '3xl': '1px 0px 8px 4px #6D28D9',
      }
    },
  },
  plugins: [],
}