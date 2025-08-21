<script setup lang="ts">
import type { IBlogItem } from "@/types/blog";
import MyImage from "@/components/ui/MyImage.vue";
import BlogMetaWrapper from "@/components/blog/BlogMetaWrapper.vue";
import CategoryChip from "@/components/ui/CategoryChip.vue";
import { CATEGORY_TITLE } from "@/data/categories.ts";

import { openModal } from "@/composables/usePopup.ts";
import PostPopup from "@/components/ui/popup/PostPopup.vue";
import BlogTitle from "@/components/blog/BlogTitle.vue";
import BlogDescription from "@/components/blog/BlogDescription.vue";

const props = defineProps<{
  item: IBlogItem;
}>();

function showPostPopup() {
  openModal(PostPopup, { post: props.item });
}
</script>

<template>
  <article class="text-black">
    <MyImage :alt="item.title" class="cursor-pointer" :image="item.image" @click="showPostPopup" />
    <div class="mt-2.5">
      <BlogMetaWrapper
        :comments-count="item.comments.length"
        :date="item.date"
        :read-time-min="item.readTimeMin"
      />
      <BlogTitle :text="item.title" variant="post" />
      <BlogDescription :text="item.description" variant="post" />
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
