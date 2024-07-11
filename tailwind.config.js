export default {
  content: [],
  theme: {
    screens: {
      "2xs": "375px",
      xs: "425px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      backgroundImage: (theme) => ({
        "hero-pattern":
          'url("assets/images/hero.jpg")',
      }),
    },
  },
  plugins: [],
};
