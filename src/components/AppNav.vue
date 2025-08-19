<script setup lang="ts">
import { computed } from 'vue'

type Link = {
  id: string
  name: string
  to: string | { name: string }
  exact?: boolean
}

const props = withDefaults(defineProps<{
  links: Link[]
  variant?: 'desktop' | 'mobile'
}>(), {
  variant: 'desktop',
})

const emit = defineEmits<{ (e: 'navigate'): void }>()

const ACTIVE = 'bg-white/10 text-blue-500'
const WRAPPER = {
  base: 'flex',
  desktop: 'gap-2',
  mobile: 'flex-col space-y-1 pb-3',
}
const LINK = {
  base: 'rounded-lg font-semibold transition',
  desktop: 'px-3 py-1.5',
  mobile: 'block px-3 py-2',
}

const wrapperClass = computed(() => [
  WRAPPER.base,
  props.variant === 'desktop' ? WRAPPER.desktop : WRAPPER.mobile,
])

const linkBaseClass = computed(() => [
  LINK.base,
  props.variant === 'desktop' ? LINK.desktop : LINK.mobile,
])
</script>

<template>
  <nav :class="wrapperClass">
    <RouterLink v-for="link in links" :key="link.id" v-slot="{ href, navigate, isActive, isExactActive }" :to="link.to">
      <a
        :class="[
          linkBaseClass,
          'hover:text-blue-500 ',
          (link.exact ? isExactActive : isActive) ? ACTIVE : ''
        ]"
        :href="href"
        @click="navigate(); emit('navigate')"
      >
        {{ link.name }}
      </a>
    </RouterLink>
  </nav>
</template>
