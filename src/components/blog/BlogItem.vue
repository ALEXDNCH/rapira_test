<script setup lang="ts">
import type { IBlogItem } from "@/types/blog";
import MyImage from "@/components/ui/MyImage.vue";
import BlogMetaWrapper from "@/components/blog/BlogMetaWrapper.vue";
import CategoryChip from "@/components/ui/CategoryChip.vue";
import { CATEGORY_TITLE } from "@/data/categories.ts";

defineProps<{
  item: IBlogItem;
}>();
</script>

<template>
  <article class="text-black">
    <MyImage :alt="item.title" :image="`/images/gallery/${item.image}.png`" />
    <div class="mt-2.5">
      <BlogMetaWrapper
        :comments-count="item.comments.length"
        :date="item.date"
        :read-time-min="item.readTimeMin"
      />
      <!-- title -->
      <h2 class="text-xl font-semibold mt-2.5">
        {{ item.title }}
      </h2>
      <!-- subtitle -->
      <p class="text-black font-medium mt-2.5">
        {{ item.description }}
      </p>
      <!-- categories -->
      <div class="flex flex-wrap gap-2 mt-2.5">
        <CategoryChip
          v-for="id in item.categories"
          :key="id"
          :label="CATEGORY_TITLE[id]"
          variant="plain"
        />
      </div>
    </div>
  </article>
</template>
