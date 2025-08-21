import type { Component } from "vue";

export type TPopupState = {
  open: boolean;
  component: Component | null;
  props: Record<string, unknown>;
  panelEl: HTMLElement | null;
  prevActive: Element | null;
};
