<script setup lang="ts">
import BlogSearchInput from "@/components/blog/BlogSearchInput.vue";
import { usePostsStore } from "@/stores/posts.ts";
import { storeToRefs } from "pinia";
import Arrow from "@/components/ui/icons/Arrow.vue";

const postsStore = usePostsStore();
const { setQueryDebounced, setQuery } = postsStore;
const { query } = storeToRefs(postsStore);

const onSearchChange = (v: string) => {
  if (v === "") setQuery("");
  else setQueryDebounced(v);
};
</script>

<template>
  <section class="bg-white">
    <div class="container">
      <div
        class="flex items-center py-3 md:py-5 flex-wrap md:flex-nowrap justify-between px-7.5 md:px-11.5 gap-5"
      >
        <h3 class="text-3xl font-bold text-gray-900 order-1">Блог</h3>
        <BlogSearchInput
          class="order-3 md:order-2 md:basis-full"
          :model-value="query"
          @update:model-value="onSearchChange"
        />
        <button
          class="flex order-2 md:order-3 items-center cursor-pointer text-gray-500 text-sm font-medium gap-1"
          role="button"
        >
          Фильтр
          <Arrow />
        </button>
      </div>
    </div>
  </section>
</template>
