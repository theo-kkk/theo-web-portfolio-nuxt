import { defineStore } from "pinia";

export const useThemeStore = defineStore("theme", {
  state: () => ({
    mode: "dark",
  }),

  getters: {
    currentTheme(state): string {
      return state.mode;
    },
  },
  actions: {
    themeModify() {
      const colorMode = useColorMode();
      this.$state.mode = this.$state.mode === "dark" ? "light" : "dark";
      colorMode.value = this.$state.mode;
    },
  },
});
