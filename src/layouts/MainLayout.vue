<template>
  <Header />
  <main class="p-2.5 lg:p-10 container">
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'
</script>
