<script setup lang="ts">
import type { IBlogComment } from "@/types/blog";
import { formatDate } from "@/utils/formatDate";

defineProps<{ comment: IBlogComment }>();

const fullName = (c: IBlogComment) => `${c.name} ${c.surname}`;
</script>

<template>
  <li class="flex gap-3 py-3">
    <img
      alt=""
      class="h-10 w-10 rounded-full object-cover"
      :src="comment.avatarUrl || '/images/comment-logo.png'"
    />
    <div class="min-w-0">
      <div class="font-semibold text-gray-900">{{ fullName(comment) }}</div>
      <p class="text-gray-600 leading-relaxed">
        {{ comment.text }}
      </p>
      <div class="mt-1 text-xs text-gray-400">
        {{ formatDate(comment.datetime, "full") }}
      </div>
    </div>
  </li>
</template>
