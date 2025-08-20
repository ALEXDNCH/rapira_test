<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string;
    subtitle?: string;
  }>(),
  {
    title: "Поиск не дал результатов",
    subtitle: "Повторите поиск или используйте фильтр для структуризации контента",
  },
);
</script>

<template>
  <div
    aria-live="polite"
    class="w-full max-w-80 mx-auto py-10 text-center text-slate-500 flex justify-center flex-col items-center"
    role="status"
  >
    <div class="mb-3">
      <slot name="icon"> </slot>
    </div>

    <h2 class="text-sm font-medium text-gray-600">{{ title }}</h2>
    <p class="mt-1 text-xs text-gray-400">
      {{ subtitle }}
    </p>

    <div class="mt-4">
      <slot name="actions" />
    </div>

    <slot />
  </div>
</template>
