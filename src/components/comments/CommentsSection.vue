<script setup lang="ts">
import { computed, ref } from "vue";
import type { IBlogComment } from "@/types/blog";
import CommentItem from "./CommentItem.vue";
import CommentInput from "./CommentInput.vue";
import { pluralRu } from "@/utils/plural";

const props = defineProps<{
  comments: IBlogComment[];
  title?: string;
}>();
const emit = defineEmits<{ (e: "add", comment: IBlogComment): void }>();

const draft = ref("");
const expanded = ref(false);

function handleSubmit(text: string) {
  const newComment: IBlogComment = {
    name: "Анонимус ✅",
    surname: "",
    text,
    datetime: new Date().toISOString(),
  };
  emit("add", newComment);
  draft.value = "";
  expanded.value = false;
}
function handleCancel() {
  draft.value = "";
  expanded.value = false;
}

const commentsText = computed(() =>
  pluralRu(props.comments.length, ["Комментарий", "Комментария", "Комментариев"]),
);
</script>

<template>
  <section class="w-full">
    <div class="mb-3 flex items-baseline gap-2">
      <h3 class="text-lg font-semibold text-gray-900">
        {{ commentsText }}
      </h3>
      <span class="text-sm text-gray-400">{{ comments.length }}</span>
    </div>

    <div class="mb-4">
      <template v-if="!expanded">
        <button
          class="w-full rounded-md bg-gray-50 px-4 py-3 text-left text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-active"
          type="button"
          @click="expanded = true"
        >
          Введите комментарий
        </button>
      </template>
      <template v-else>
        <CommentInput
          v-model="draft"
          autofocus
          :max="250"
          @cancel="handleCancel"
          @submit="handleSubmit"
        />
      </template>
    </div>

    <ul class="divide-y divide-gray-100">
      <CommentItem v-for="c in comments" :key="c.datetime + c.text" :comment="c" />
    </ul>
  </section>
</template>
