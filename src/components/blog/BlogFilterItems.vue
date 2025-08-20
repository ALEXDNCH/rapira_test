<script setup lang="ts">
import { CATEGORIES } from "@/data/categories.ts";
import CategoryChip from "@/components/ui/CategoryChip.vue";
import { usePostsStore } from "@/stores/posts.ts";
import { storeToRefs } from "pinia";

const postsStore = usePostsStore();
const { toggleCategory } = postsStore;
const { selectedCategories } = storeToRefs(postsStore);
</script>

<template>
  <div class="flex flex-wrap gap-2 mt-2.5">
    <CategoryChip
      v-for="cat in CATEGORIES"
      :key="cat.id"
      :active="selectedCategories.includes(cat.id)"
      :label="cat.title"
      variant="filter"
      @toggle="toggleCategory(cat.id)"
    />
  </div>
</template>
