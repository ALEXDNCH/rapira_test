<script setup lang="ts">
import { CATEGORIES } from '@/data/categories'
import UiCategoryChip from '../ui/CategoryChip.vue'

defineProps<{
  categories: string[]
  variant?: 'plain' | 'filter'
  activeIds?: string[]
  disabledIds?: string[]
}>()

const emit = defineEmits<{ (e: 'toggle', id: string): void }>()
</script>

<template>
  <div class="flex flex-wrap gap-2">
    <UiCategoryChip
      v-for="c in CATEGORIES.filter(x => categories.includes(x.id))"
      :key="c.id"
      :active="activeIds?.includes(c.id)"
      :disabled="disabledIds?.includes(c.id)"
      :label="c.title"
      :variant="variant ?? 'plain'"
      @toggle="emit('toggle', c.id)"
    />
  </div>
</template>
