<script setup lang="ts">
import { route } from "@/constants/routes";
</script>

<template>
  <section class="flex flex-col items-center w-full my-2.5 md:my-5 container">
    <h1 class="text-3xl">HOME PAGE! </h1>
    <RouterLink
      class="font-bold rounded-md text-white mt-5 max-w-fit px-3.5 py-2.5 bg-primary hover:bg-primary-active transition"
      :to="route('blog')"
      >Перейти к Блогу</RouterLink
    >
  </section>
</template>
