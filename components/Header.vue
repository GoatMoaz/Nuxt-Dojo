<template>
  <div>
    <header class="shadow-sm" :class="{ dark: isDark, 'bg-white': !isDark }">
      <nav class="container mx-auto p-4 flex justify-between items-center">
        <div class="flex items-center gap-4 justify-center">
          <NuxtLink to="/products" class="font-bold">Nuxt Dojo Merch</NuxtLink>
          <ToggleView />
        </div>
        <NuxtLink to="/cart">
          <div class="relative scale-75">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-8 w-8"
              :class="{ 'text-white': isDark, 'text-gray-600': !isDark }"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
            <span
              class="absolute -top-2 left-4 rounded-full bg-red-500 p-0.5 px-2 text-sm text-red-50"
              >{{ cartCount }}</span
            >
          </div>
        </NuxtLink>
      </nav>
    </header>
  </div>
</template>

<script setup>
import eventBus from "~/eventBus.js";
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

const cartCount = computed(() => eventBus.cartCount);
</script>

