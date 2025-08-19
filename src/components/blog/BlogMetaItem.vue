<script setup lang="ts">
import type { Component } from 'vue'

defineProps<{
  icon?: Component
  text: string
}>()
</script>

<template>
  <div class="inline-flex items-center gap-1">
    <component :is="icon" v-if="icon" aria-hidden="true" class="h-4 w-4" />
    <span>{{ text }}</span>
  </div>
</template>
