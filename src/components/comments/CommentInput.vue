<script setup lang="ts">
import { computed, ref, onMounted } from "vue";
import X from "@/components/ui/icons/X.vue";
import BaseButton from "@/components/ui/BaseButton.vue";
import { MAX_SYMBOLS_FOR_COMMENT } from "@/constants/settingsApp.ts";

const model = defineModel<string>({ default: "" });

const props = withDefaults(
  defineProps<{
    max?: number;
    placeholder?: string;
    autofocus?: boolean;
  }>(),
  {
    max: MAX_SYMBOLS_FOR_COMMENT,
    placeholder: "Текст комментария",
    autofocus: false,
  },
);

const emit = defineEmits<{
  (e: "submit", text: string): void;
  (e: "cancel"): void;
  (e: "clear"): void;
}>();

const textareaRef = ref<HTMLTextAreaElement | null>(null);

onMounted(() => {
  if (props.autofocus) textareaRef.value?.focus();
});

const len = computed(() => model.value.length);
const isTooLong = computed(() => len.value > props.max);
const canPublish = computed(() => len.value > 0 && !isTooLong.value);

function onSubmit() {
  if (!canPublish.value) return;
  emit("submit", model.value.trim());
  model.value = "";
}
function onCancel() {
  emit("cancel");
  model.value = "";
}
function onClear() {
  model.value = "";
  emit("clear");
}
</script>

<template>
  <div class="w-full">
    <div
      class="relative rounded-md border bg-white"
      :class="[
        isTooLong ? 'border-danger ring-danger/40' : 'border-primary ring-primary/40',
        'ring-2 transition',
      ]"
    >
      <textarea
        ref="textareaRef"
        v-model="model"
        class="w-full resize-none rounded-md bg-transparent p-3 text-gray-900 placeholder:text-gray-400 h-auto outline-none"
        :placeholder="placeholder"
        rows="5"
      />
      <button
        v-if="model"
        aria-label="Очистить"
        class="absolute right-2 top-2 inline-flex h-6 w-6 items-center justify-center rounded text-gray-400 hover:bg-gray-100"
        type="button"
        @click="onClear"
      >
        <X class="h-3.5 w-3.5" />
      </button>
    </div>

    <div class="mt-2 flex items-center justify-between">
      <span class="text-xs text-gray-500">
        <span :class="isTooLong ? 'text-danger' : 'text-gray-500'">{{ len }}</span>
        из {{ max }} символов
      </span>

      <div class="flex gap-3">
        <BaseButton variant="secondary" @click="onCancel"> Отмена </BaseButton>
        <BaseButton :disabled="!canPublish" variant="primary" @click="onSubmit">
          Опубликовать
        </BaseButton>
      </div>
    </div>
  </div>
</template>
