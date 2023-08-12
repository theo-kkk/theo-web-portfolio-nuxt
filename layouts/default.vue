<template>
  <div class="flex h-full flex-col">
    <header
      class="flex w-full h-20 items-center px-2 justify-between dark:bg-[#29292c] fixed top-0 left-0 tablet:h-16 border-b dark:border-none"
    >
      <h1 class="text-xl -tracking-[0.8px] tablet:text-lg">
        <NuxtLink to="/"> Theo's Web Portfolio </NuxtLink>
      </h1>
      <!-- <select
        v-model="colorMode.value"
        class="border w-20 h-8 dark:bg-[#1e1f21] dark:text-white dark:border-gray-700 outline-none text-center rounded text-sm"
      >
        <option v-for="theme in themeMode" :key="theme" :value="theme">
          {{ theme }}
        </option>
      </select> -->
      <button
        type="button"
        @click="theme.themeModify"
        class="dark:text-white dark:border-gray-700 outline-none text-center rounded text-sm -tracking-[0.5px] cursor-pointer"
      >
        <div v-if="theme.currentTheme === 'dark'">
          <CommonSvgMoon width="70px" height="24px" />
        </div>
        <div v-else-if="theme.currentTheme === 'light'">
          <CommonSvgSun width="70px" height="24px" />
        </div>
      </button>
    </header>
    <main class="flex h-full flex-col">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import { useThemeStore } from "@/stores/theme";
const theme = useThemeStore();
</script>

<style lang="postcss">
body {
  @apply min-h-screen bg-white dark:bg-[#1e1f21] dark:text-gray-200 transition-all duration-300;
}
</style>
