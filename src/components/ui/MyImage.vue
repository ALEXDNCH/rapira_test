<script setup lang="ts">
withDefaults(
  defineProps<{
    image: string;
    alt?: string;
  }>(),
  {
    alt: "Image",
  },
);
</script>

<template>
  <img :alt="alt" class="w-full rounded-xl object-cover" :src="image" />
</template>
