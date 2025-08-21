import { reactive, nextTick } from "vue";
import type { Component, ComponentPublicInstance } from "vue";
import type { TPopupState } from "@/types/popup.ts";

const state = reactive<TPopupState>({
  open: false,
  component: null,
  props: {},
  panelEl: null,
  prevActive: null,
});

let keydownHandler: ((e: KeyboardEvent) => void) | null = null;
let focusinHandler: ((e: FocusEvent) => void) | null = null;

function getFocusables(root: HTMLElement): HTMLElement[] {
  const list = Array.from(
    root.querySelectorAll<HTMLElement>(
      'a[href],button,input,textarea,select,[tabindex]:not([tabindex="-1"])',
    ),
  ).filter((el) => !el.hasAttribute("disabled"));

  // включаем саму панель в цикл, чтобы всегда было куда встать
  if (!list.includes(root)) list.unshift(root);
  return list;
}

function attachKeydown() {
  if (!keydownHandler) {
    keydownHandler = (e: KeyboardEvent) => {
      if (!state.open) return;

      // Esc
      if (e.key === "Escape") {
        e.preventDefault();
        e.stopPropagation();
        closeModal();
        return;
      }

      // Tab trap
      if (e.key !== "Tab") return;
      const panel = state.panelEl;
      if (!panel) return;

      const list = getFocusables(panel);
      const first = list[0];
      const last = list[list.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (!first || !last) {
        panel.focus();
        e.preventDefault();
        e.stopPropagation();
        return;
      }

      if (e.shiftKey) {
        if (active === first || !panel.contains(active)) {
          last.focus();
          e.preventDefault();
          e.stopPropagation();
        }
      } else {
        if (active === last || !panel.contains(active)) {
          first.focus();
          e.preventDefault();
          e.stopPropagation();
        }
      }
    };
    // for other browser
    window.addEventListener("keydown", keydownHandler, { capture: true });
  }

  if (!focusinHandler) {
    focusinHandler = (e: FocusEvent) => {
      if (!state.open) return;
      const panel = state.panelEl;
      if (!panel) return;

      // if focus out - return
      if (!panel.contains(e.target as Node)) {
        const list = getFocusables(panel);
        (list[0] ?? panel).focus();
      }
    };
    document.addEventListener("focusin", focusinHandler, true);
  }
}

function detachKeydown() {
  if (keydownHandler) {
    window.removeEventListener("keydown", keydownHandler, { capture: true });
    keydownHandler = null;
  }
  if (focusinHandler) {
    document.removeEventListener("focusin", focusinHandler, true);
    focusinHandler = null;
  }
}

export function usePopup() {
  return state;
}

export function setModalPanel(el: Element | ComponentPublicInstance | null) {
  state.panelEl = el as HTMLElement | null;
}

export async function openModal(component: Component, props: Record<string, unknown> = {}) {
  state.component = component;
  state.props = props;
  state.open = true;

  state.prevActive = document.activeElement;
  document.body.classList.add("overflow-hidden");

  await nextTick();
  state.panelEl?.focus();

  attachKeydown();
}

export function closeModal() {
  state.open = false;
  state.component = null;
  state.props = {};

  detachKeydown();
  document.body.classList.remove("overflow-hidden");

  (state.prevActive as HTMLElement | null)?.focus?.();
  state.prevActive = null;
}
