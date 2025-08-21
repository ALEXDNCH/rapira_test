<script setup lang="ts">
import X from "@/components/ui/icons/X.vue";
import { usePopup, closeModal, setModalPanel } from "@/composables/usePopup";

const modal = usePopup();
</script>

<template>
  <Teleport to="body">
    <div
      v-if="modal.open"
      aria-modal="true"
      class="fixed inset-0 z-[1000] flex items-center bg-black/40 justify-center p-4"
      role="dialog"
      @click.self="closeModal"
    >
      <div
        :ref="setModalPanel"
        class="relative p-[15px] overflow-auto max-h-11/12 w-full max-w-2xl rounded-xl bg-white shadow-xl outline-none"
        tabindex="0"
        @click.stop
      >
        <button
          aria-label="Закрыть"
          class="absolute top-1 right-1 cursor-pointer inline-flex items-center justify-center rounded-md text-gray-500 hover:bg-gray-200"
          type="button"
          @click="closeModal"
        >
          <X class="h-6 w-6 text-gray-500 pointer-events-none" />
        </button>

        <component :is="modal.component" v-bind="modal.props" @close="closeModal" />
      </div>
    </div>
  </Teleport>
</template>
