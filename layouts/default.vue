<template>
  <div>
    <header class="shadow-sm" :class="{ dark: isDark, 'bg-white': !isDark }">
      <nav class="container mx-auto p-4 flex justify-between items-center">
        <div class="flex items-center gap-4 justify-center">
          <NuxtLink to="/" class="font-bold">Nuxt Dojo</NuxtLink>
          <ToggleView />
        </div>
        <ul class="flex gap-4">
          <li>
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about">About</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/products" class="btn">Products</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
    <div class="container mx-auto p-4">
      <slot />
    </div>
  </div>
</template>
<script setup>
import useDarkMode from "~/useDarkMode.js";

const isDark = computed(() => useDarkMode.isDark);

watch(
  isDark,
  (value) => {
    if (typeof document !== "undefined") {
      if (value) {
        document.body.classList.add("darkBody");
      } else {
        document.body.classList.remove("darkBody");
      }
    }
  },
  { immediate: true }
);

onBeforeUnmount(() => {
  if (typeof document !== "undefined") {
    document.body.classList.remove("dark");
  }
});
</script>
<style scoped>
.router-link-exact-active {
  color: #12b488;
}
</style>