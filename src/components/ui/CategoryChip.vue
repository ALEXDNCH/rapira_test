<script setup lang="ts">
type Variant = 'plain' | 'filter'

withDefaults(defineProps<{
  label: string
  active?: boolean
  disabled?: boolean
  variant?: Variant
}>(), {
  active: false,
  disabled: false,
  variant: 'plain',
})

const emit = defineEmits<{ (e: 'toggle'): void }>()

const base =
  'inline-flex select-none items-center gap-1.5 rounded-full text-xs font-medium transition px-3.5 py-2'

const plainIdle = 'bg-[#EEF6FF] text-blue'
const filterIdle = 'bg-[#EEF6FF] text-blue hover:bg-[#E2F0FF]'
const filterActive = 'bg-blue text-white'
</script>

<template>
  <button
    :aria-pressed="active"
    class="focus:outline-none focus-visible:ring-2 focus-visible:ring-blue/50 disabled:opacity-60 disabled:pointer-events-none"
    :class="[
      base,
      variant === 'plain'
        ? plainIdle
        : (active ? filterActive : filterIdle)
    ]"
    :disabled="disabled"
    type="button"
    @click="emit('toggle')"
  >
    <template v-if="variant === 'filter'">
      <svg v-if="!active" aria-hidden="true" class="opacity-80" height="14" viewBox="0 0 24 24" width="14">
        <path d="M11 5h2v14h-2zM5 11h14v2H5z" fill="currentColor" />
      </svg>
      <svg v-else aria-hidden="true" class="opacity-90" height="14" viewBox="0 0 24 24" width="14">
        <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" fill="currentColor" />
      </svg>
    </template>

    <span>{{ label }}</span>
  </button>
</template>
