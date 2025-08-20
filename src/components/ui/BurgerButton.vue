<script setup lang="ts">
defineProps<{ open: boolean }>();
defineEmits<{ (e: "toggle"): void }>();
</script>

<template>
  <button
    aria-controls="mobile-menu"
    :aria-expanded="open"
    :aria-label="open ? 'Закрыть меню' : 'Открыть меню'"
    class="sm:hidden cursor-pointer flex items-center"
    type="button"
    @click="$emit('toggle')"
  >
    <span aria-hidden="true" class="burger" :class="{ 'is-open': open }">
      <span class="line line--1"></span>
      <span class="line line--2"></span>
      <span class="line line--3"></span>
    </span>
  </button>
</template>

<style scoped lang="scss">
.burger {
  position: relative;
  width: 28px;
  height: 20px;
  display: inline-block;
}

.line {
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  background: currentColor;
  border-radius: 9999px;

  transition:
    transform 200ms ease,
    opacity 150ms ease,
    top 200ms ease;

  &.line--1 {
    top: 0;
  }
  &.line--2 {
    top: 9px;
  }
  &.line--3 {
    top: 18px;
  }
}

.is-open {
  .line--1 {
    top: 9px;
    transform: rotate(45deg);
  }
  .line--2 {
    opacity: 0;
  }
  .line--3 {
    top: 9px;
    transform: rotate(-45deg);
  }
}
</style>
