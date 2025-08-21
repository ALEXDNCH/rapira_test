<script setup lang="ts">
import type { IBlogComment, IBlogItem } from "@/types/blog.ts";
import MyImage from "@/components/ui/MyImage.vue";
import { CATEGORY_TITLE } from "@/data/categories.ts";
import CategoryChip from "@/components/ui/CategoryChip.vue";
import BlogMetaWrapper from "@/components/blog/BlogMetaWrapper.vue";
import BlogTitle from "@/components/blog/BlogTitle.vue";
import BlogDescription from "@/components/blog/BlogDescription.vue";
import CommentsSection from "@/components/comments/CommentsSection.vue";
import { usePostsStore } from "@/stores/posts.ts";
import { storeToRefs } from "pinia";

const postsStore = usePostsStore();
const { items } = storeToRefs(postsStore);
const props = defineProps<{
  post: IBlogItem;
}>();

function addComment(c: IBlogComment) {
  const post = items.value.find((item) => item.id === props.post.id);
  post?.comments.unshift(c);
}
</script>

<template>
  <div>
    <BlogTitle :text="post.title" variant="popup" />
    <BlogMetaWrapper
      class="!mt-2.5"
      :comments-count="post.comments.length"
      :date="post.date"
      :read-time-min="post.readTimeMin"
    />
    <MyImage class="mt-4" :image="post.image" />
    <BlogDescription :text="post.description" variant="popup" />
    <div class="flex flex-wrap gap-2 mt-2.5">
      <CategoryChip
        v-for="id in post.categories"
        :key="id"
        :label="CATEGORY_TITLE[id]"
        variant="plain"
      />
    </div>
    <CommentsSection class="mt-[15px]" :comments="post.comments" @add="addComment" />
  </div>
</template>
