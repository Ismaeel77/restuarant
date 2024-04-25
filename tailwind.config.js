/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary:"#ca943d",
        alt:"#828282",
        bgColor:"#f8f4f0",
        red:"#d74a3a",
        green:"#70a967",
        orange:"#fd961e",
        activeState:"#ffffff99",
      },
      fontFamily:{
        mainFont:['Poppins'],
        pFont:['Roboto'],
      },
      backgroundImage:{
        landing:" url('./imgs/home-restaurant-panner-01.webp') ",
        intro:"url('./imgs/bg-divider.webp')",
        message:"url('./imgs/chef.webp')",
        guest1:"url('./imgs/guest-01.webp')",
        guest2:"url('./imgs/guest-02.webp')",
        guest3:"url('./imgs/guest-03.webp')",
        guest4:"url('./imgs/guest-04.webp')",
      },
      borderColor:{
        light:"#ca943d66"
      },
      borderRadius:{
        circle:"50%"
      },
    },
  },
  plugins: []
}

