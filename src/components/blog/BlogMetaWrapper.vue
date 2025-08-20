<script setup lang="ts">
import { computed } from "vue";
import MetaItem from "@/components/blog/BlogMetaItem.vue";
import { formatDate } from "@/utils/formatDate";
import { pluralRu } from "@/utils/plural";
import Clock from "@/components/ui/icons/Clock.vue";
import Comment from "@/components/ui/icons/Comment.vue";

const props = defineProps<{
  date: string;
  readTimeMin: number;
  commentsCount: number;
}>();

const dateText = computed(() => formatDate(props.date, "short"));
const readText = computed(() => `${props.readTimeMin} мин`);
const commentsText = computed(
  () =>
    `${props.commentsCount} ${pluralRu(props.commentsCount, ["комментарий", "комментария", "комментариев"])}`,
);
</script>

<template>
  <div class="flex items-center gap-1.5 text-sm text-slate-500 font-medium flex-wrap">
    <div class="flex items-center gap-1.5">
      <MetaItem :text="dateText" />
      <span class="opacity-60 select-none">•</span>
    </div>
    <div class="flex items-center gap-1.5">
      <MetaItem :icon="Clock" :text="readText" />
      <span class="opacity-60 select-none">•</span>
    </div>
    <MetaItem :icon="Comment" :text="commentsText" />
  </div>
</template>
