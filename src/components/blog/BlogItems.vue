<script setup lang="ts">
import BlogItem from "@/components/blog/BlogItem.vue";
import gallery from "@/data/gallery.json";
</script>

<template>
  <section class="bg-white grid gap-5 rounded-xl p-[15px] md:p-[30px] grid-cols-1 xs:grid-cols-2 lg:grid-cols-3">
    <BlogItem v-for="card in gallery" :key="card.id" :item="card" />
  </section>
</template>
