<script setup lang="ts">
import BlogSearchInput from "@/components/blog/BlogSearchInput.vue";
import { usePostsStore } from "@/stores/posts.ts";
import { storeToRefs } from "pinia";
import Arrow from "@/components/ui/icons/Arrow.vue";
import BlogFilterItems from "@/components/blog/BlogFilterItems.vue";
import { ref } from "vue";

const postsStore = usePostsStore();
const { setQueryDebounced, setQuery, clearCategories } = postsStore;
const { query, selectedCategories } = storeToRefs(postsStore);

const onSearchChange = (v: string) => {
  if (v === "") setQuery("");
  else setQueryDebounced(v);
};

const filterIsActive = ref<boolean>(false);
</script>

<template>
  <section class="bg-white">
    <div class="container">
      <div class="flex flex-col py-3 md:py-5 md:px-11.5 gap-5">
        <div class="flex items-center flex-wrap md:flex-nowrap justify-between gap-5">
          <h3 class="text-lg md:text-3xl font-bold text-gray-900 order-1">Блог</h3>
          <BlogSearchInput
            class="order-3 md:order-2 md:basis-full"
            :model-value="query"
            @update:model-value="onSearchChange"
          />
          <div
            class="flex md:basis-100 gap-2.5 justify-end order-2 md:order-3 items-center text-gray-500 text-sm font-medium"
          >
            <button
              v-show="selectedCategories.length"
              class="text-primary-active cursor-pointer"
              @click="clearCategories"
            >
              Очистить
            </button>
            <button
              class="flex items-center gap-1 cursor-pointer"
              role="button"
              @click="filterIsActive = !filterIsActive"
            >
              {{ filterIsActive ? "Скрыть фильтр" : "Фильтр" }}
              <Arrow class="rotate-180 transition" :class="{ 'rotate-none': filterIsActive }" />
            </button>
          </div>
        </div>
        <BlogFilterItems v-show="filterIsActive" />
      </div>
    </div>
  </section>
</template>
