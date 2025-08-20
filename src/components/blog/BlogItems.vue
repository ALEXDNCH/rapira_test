<script setup lang="ts">
import BlogItem from "@/components/blog/BlogItem.vue";
import EmptyState from "@/components/ui/EmptyState.vue";
import SearchList from "@/components/ui/icons/SearchList.vue";
import { usePostsStore } from "@/stores/posts";
import { storeToRefs } from "pinia";

const { filtered } = storeToRefs(usePostsStore());
</script>

<template>
  <section class="container my-2.5 md:my-5">
    <div class="bg-white rounded-xl p-[15px] md:p-[30px]">
      <div
        v-if="filtered.length"
        class="grid gap-x-5 gap-y-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
      >
        <BlogItem v-for="card in filtered" :key="card.id" :item="card" />
      </div>

      <EmptyState v-else>
        <template #icon>
          <SearchList />
        </template>
      </EmptyState>
    </div>
  </section>
</template>
