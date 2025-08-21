<script setup lang="ts">
defineProps<{ text: string; variant: "post" | "popup" }>();

const VARIANTS = {
  post: "text-base mt-2.5",
  popup: "text-sm md:text-base mt-[15px]",
} as const;
</script>

<template>
  <p :class="['font-medium', VARIANTS[variant]]">
    {{ text }}
  </p>
</template>
