import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        mob: { min: "320px", max: "767px" },
        tab: { min: "768px" },
        tabM: { min: "768px", max: "1279px" },
        pc: { min: "1280px" },
      },
      colors: {
        error: "#FF5757",
      },
      backgroundImage: {
        hero: "linear-gradient(rgba(2, 15, 8, 0.50) 0 100%), url('../../public/mb-hero.png')",
        about:
          "linear-gradient(rgba(2, 15, 8, 0.50) 0 100%), url('../../public/mb-about.png')",
        career:
          "linear-gradient(rgba(2, 15, 8, 0.75) 0 100%), url('../../public/mb-career.png')",
        contacts:
          "linear-gradient(rgba(2, 15, 8, 0.75) 0 100%), url('../../public/mb-contact.png')",
        gallery:
          "linear-gradient(rgba(2, 15, 8, 0.75) 0 100%), url('../../public/mb-gallery.png')",

        tbHero:
          "linear-gradient(rgba(2, 15, 8, 0.50) 0 100%), url('../../public/tb-hero.png')",
        tbAbout:
          "linear-gradient(rgba(2, 15, 8, 0.50) 0 100%), url('../../public/tb-about.png')",
        tbCareer:
          "linear-gradient(rgba(2, 15, 8, 0.75) 0 100%), url('../../public/tb-career.png')",
        tbContacts:
          "linear-gradient(rgba(2, 15, 8, 0.75) 0 100%), url('../../public/tb-contact.png')",
        tbGallery:
          "linear-gradient(rgba(2, 15, 8, 0.75) 0 100%), url('../../public/tb-gallery.png')",

        pcHero:
          "linear-gradient(rgba(2, 15, 8, 0.50) 0 100%), url('../../public/pc-hero.png')",
        pcAbout:
          "linear-gradient(rgba(2, 15, 8, 0.50) 0 100%), url('../../public/pc-about.png')",
        pcCareer:
          "linear-gradient(rgba(2, 15, 8, 0.75) 0 100%), url('../../public/pc-career.png')",
        pcContacts:
          "linear-gradient(rgba(2, 15, 8, 0.75) 0 100%), url('../../public/pc-contact.png')",
        pcGallery:
          "linear-gradient(rgba(2, 15, 8, 0.75) 0 100%), url('../../public/pc-gallery.png')",

        One: "linear-gradient(rgba(2, 15, 8, 0.50) 0 100%), url('../../public/mb-bg-slideOne.png')",
        Two: "linear-gradient(rgba(2, 15, 8, 0.50) 0 100%), url('../../public/mb-bg-slideTwo.png')",
        Three:
          "linear-gradient(rgba(2, 15, 8, 0.50) 0 100%), url('../../public/mb-bg-slideThree.png')",
        Four: "linear-gradient(rgba(2, 15, 8, 0.50) 0 100%), url('../../public/mb-bg-slideFour.png')",
        Five: "linear-gradient(rgba(2, 15, 8, 0.50) 0 100%), url('../../public/mb-bg-slideFive.png')",

        tbOne:
          "linear-gradient(rgba(2, 15, 8, 0.50) 0 100%), url('../../public/tb-bg-slideOne.png')",
        tbTwo:
          "linear-gradient(rgba(2, 15, 8, 0.50) 0 100%), url('../../public/tb-bg-slideTwo.png')",
        tbThree:
          "linear-gradient(rgba(2, 15, 8, 0.50) 0 100%), url('../../public/tb-bg-slideThree.png')",
        tbFour:
          "linear-gradient(rgba(2, 15, 8, 0.50) 0 100%), url('../../public/tb-bg-slideFour.png')",
        tbFive:
          "linear-gradient(rgba(2, 15, 8, 0.50) 0 100%), url('../../public/tb-bg-slideFive.png')",

        pcOne:
          "linear-gradient(rgba(2, 15, 8, 0.50) 0 100%), url('../../public/pc-bg-slideOne.png')",
        pcTwo:
          "linear-gradient(rgba(2, 15, 8, 0.50) 0 100%), url('../../public/pc-bg-slideTwo.png')",
        pcThree:
          "linear-gradient(rgba(2, 15, 8, 0.50) 0 100%), url('../../public/pc-bg-slideThree.png')",
        pcFour:
          "linear-gradient(rgba(2, 15, 8, 0.50) 0 100%), url('../../public/pc-bg-slideFour.png')",
        pcFive:
          "linear-gradient(rgba(2, 15, 8, 0.50) 0 100%), url('../../public/pc-bg-slideFive.png')",

        btn: "linear-gradient(rgba(255, 255, 255, 0.05) 0 100%)",
        btnHov: "linear-gradient(rgba(255, 255, 255, 0.20) 0 100%)",
        unchecked: "linear-gradient(rgba(255, 255, 255, 0.10) 0 100%)",
        checked: "linear-gradient(rgba(255, 255, 255, 1) 0 100%)",
        burgerMenu: "linear-gradient(rgba(1, 10, 5, 0.75) 0 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
