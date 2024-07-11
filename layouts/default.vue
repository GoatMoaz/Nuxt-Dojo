<template>
  <Disclosure as="nav" class="bg-gray-800" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div
          class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4 items-center justify-center">
              <NuxtLink
                v-for="item in navigation"
                :key="item.name"
                :to="item.href"
                class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                :aria-current="item.current ? 'page' : undefined"
                >{{ item.name }}</NuxtLink
              >
              <NuxtLink
                to="/cart"
                class="flex rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                <IconsCart />
              </NuxtLink>
            </div>
          </div>
        </div>
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <NuxtLink to="/" style="background-color: transparent">
            <img
              src="assets/images/logo.svg"
              alt="logo"
              class="w-16 md:w-20 cursor-pointer"
            />
          </NuxtLink>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <NuxtLink
          v-for="item in navigation"
          :key="item.name"
          :to="item.href"
          class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          :aria-current="item.current ? 'page' : undefined"
          >{{ item.name }}</NuxtLink
        >
        <NuxtLink
          to="/cart"
          class="flex rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
        >
          <IconsCart />
        </NuxtLink>
      </div>
    </DisclosurePanel>
  </Disclosure>
  <slot />
  <footer class="bg-gray-900 text-slate-100 py-8 px-4 xs:py-10 absolute right-0 left-0 bottom-0">
    <p class="text-center">
      <a href="https://github.com/GoatMoaz/Nuxt-Dojo" target="_blank">
        &copy; 2024 Nuxt Dojo Merch.
      </a>
    </p>
  </footer>
</template>

<script setup>
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/vue/24/outline";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Shop", href: "/products", current: false },
  { name: "About us", href: "/about", current: false },
];
</script>

<style scoped>
.router-link-exact-active {
  background-color: #1a202c;
  color: #ffffff;
}
</style>