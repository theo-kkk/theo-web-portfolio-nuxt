import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  darkMode: "class",
  theme: {
    screens: {
      desktop: { max: "1200px" },
      tablet: { max: "1023px" },
      mo: { max: "767px" },
    },
  },
};
