<script setup lang="ts">
import Search from "@/components/ui/icons/Search.vue";

const model = defineModel<string>({ default: "" });

withDefaults(
  defineProps<{
    placeholder?: string;
  }>(),
  {
    placeholder: "Поиск",
  },
);
</script>

<template>
  <div class="flex items-center w-full gap-10">
    <label class="relative block w-full md:max-w-md bg-gray-100 rounded-md">
      <span class="absolute inset-y-0 left-3 flex items-center text-gray-400">
        <Search class="w-5 h-5" />
      </span>

      <input
        v-model="model"
        class="w-full rounded-md pl-10 pr-9 py-3 text-gray-900 text-sm font-medium border-2 border-transparent transition-all placeholder:text-gray-300 hover:border-primary-active focus:border-primary-active focus:shadow-lg outline-none"
        :placeholder="placeholder"
        type="search"
      />

      <button
        v-if="model"
        class="absolute cursor-pointer py-2 px-2 inset-y-0 right-1 flex items-center"
        type="button"
        @click="model = ''"
      >
        <img alt="X" src="/images/x.svg" />
      </button>
    </label>
  </div>
</template>
