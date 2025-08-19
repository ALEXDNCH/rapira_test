<script setup lang="ts">
import { route } from "@/constants/routes";
</script>

<template>
  <div class="flex flex-col gap-1.5 text-center w-full">
    <h1 class="text-3xl">HOME PAGE! </h1>
    <RouterLink class="font-bold text-blue hover:text-blue-600 transition" :to="route('blog')"
      >Перейти к Блогу</RouterLink
    >
  </div>
</template>
