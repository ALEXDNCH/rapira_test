<script setup lang="ts">
import { computed } from "vue";
import X from "@/components/ui/icons/X.vue";
import Check from "@/components/ui/icons/Check.vue";

type Variant = "plain" | "filter";

const props = withDefaults(
  defineProps<{
    label: string;
    active?: boolean;
    variant?: Variant;
  }>(),
  {
    active: false,
    variant: "plain",
  },
);

const emit = defineEmits<{ (e: "toggle"): void }>();

const classes = computed(() => {
  const base =
    "inline-flex select-none items-center gap-1.5 rounded-full text-sm font-medium px-3.5 py-1.5 transition";

  if (props.variant === "plain") {
    return [base, "bg-primary-light text-primary-active"];
  }

  return [
    base,
    "cursor-pointer",
    props.active
      ? "bg-primary text-white"
      : "bg-primary-light text-primary-active hover:bg-primary-active/20",
  ];
});

function handleClick() {
  emit("toggle");
}

const activeSvgClass = "absolute inset-0 w-3.5 h-3.5 transition-opacity duration-200 ease-out";
</script>

<template>
  <button
    class="group"
    :class="classes"
    :tabindex="variant === 'plain' ? -1 : 0"
    @click="handleClick"
  >
    <span>{{ label }}</span>

    <template v-if="variant === 'filter'">
      <span v-if="active" class="relative inline-block w-3.5 h-3.5">
        <Check :class="[activeSvgClass, 'opacity-100 group-hover:opacity-0']" />
        <X :class="[activeSvgClass, 'opacity-0 group-hover:opacity-100']" />
      </span>
      <X
        v-else
        class="w-3.5 h-3.5 rotate-45 text-primary-active transition-transform duration-200 ease-out"
      />
    </template>
  </button>
</template>
