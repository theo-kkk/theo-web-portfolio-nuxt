<template>
  <div class="flex h-full flex-col">
    <header
      class="flex h-20 items-center px-2 justify-between dark:bg-[#29292c]"
    >
      <h1 class="text-xl -tracking-[0.8px]">Theo's Web Portfolio</h1>
      <select
        v-model="colorMode.value"
        class="border w-20 h-8 dark:bg-[#1e1f21] dark:text-white dark:border-gray-700 outline-none text-center rounded text-sm"
      >
        <option v-for="theme in themeMode" :key="theme" :value="theme">
          {{ theme }}
        </option>
      </select>
    </header>
    <main class="flex h-full flex-col">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode();
const themeMode = ["dark", "light"];
</script>

<style lang="postcss">
body {
  @apply min-h-screen bg-white dark:bg-[#1e1f21] dark:text-gray-200;
}
</style>
