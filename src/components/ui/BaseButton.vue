<!-- UiButton.vue -->
<script setup lang="ts">
import { computed, useAttrs, defineOptions } from "vue";

defineOptions({ inheritAttrs: false });

type TVariant = "primary" | "secondary";

const props = withDefaults(
  defineProps<{
    variant?: TVariant;
    loading?: boolean;
  }>(),
  {
    variant: "primary",
    loading: false,
  },
);

const attrs = useAttrs();

const base =
  "inline-flex py-3 px-4 font-semibold items-center justify-center gap-2 rounded-md text-sm transition duration-300";

const variants: Record<TVariant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-active disabled:bg-gray-100 disabled:text-gray-300",
  secondary: "bg-primary-light text-primary hover:bg-gray-200 disabled:opacity-30",
};

const classes = computed(() => [base, variants[props.variant], attrs.class]);
</script>

<template>
  <button v-bind="attrs" class="min-w-[120px]" :class="classes">
    <span v-if="!props.loading"><slot /></span>
    <svg v-else class="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
      <path
        class="opacity-75"
        d="M4 12a8 8 0 018-8"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-width="4"
      />
    </svg>
  </button>
</template>
