<script setup lang="ts">
defineProps<{ text: string; variant: "post" | "popup" }>();

const VARIANTS = {
  post: "text-xl mt-2.5",
  popup: "text-xl md:text-2xl",
} as const;
</script>

<template>
  <h2 :class="['font-semibold', VARIANTS[variant]]">{{ text }}</h2>
</template>
