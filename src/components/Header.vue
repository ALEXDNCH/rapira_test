<script setup lang="ts">
import { ref } from 'vue'
import AppLogo from '@/components/ui/AppLogo.vue'
import AppNav from '@/components/AppNav.vue'
import { MAIN_PAGES } from '@/constants/routes'
import BurgerButton from "@/components/ui/BurgerButton.vue";

const open = ref(false)

const NAV_LINKS = MAIN_PAGES
  .filter(p => !!p.label)
  .map(p => ({
    id: p.name,
    name: p.label!,
    to: { name: p.name },
    exact: !!p.exact,
  }))
</script>

<template>
  <header class="sticky top-0 py-4 w-full flex items-center bg-black text-gray-100 px-5.5 lg:px-14">
    <div class="flex h-10 items-center container gap-5">
      <BurgerButton :open="open" @toggle="open = !open" />

      <RouterLink class="flex items-center gap-2 font-semibold tracking-tight mr-15" to="/">
        <AppLogo />
      </RouterLink>

      <div class="hidden sm:block">
        <AppNav :links="NAV_LINKS" variant="desktop" />
      </div>
    </div>

    <div v-show="open" class="absolute rounded-b-lg top-18 left-0 w-full h-[70vh] bg-black sm:hidden">
      <AppNav :links="NAV_LINKS" variant="mobile" @navigate="open = false" />
    </div>
  </header>
</template>
