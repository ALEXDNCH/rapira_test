import type { Component } from "vue";

export interface IMainPage {
  name: string;
  path: string;
  label: string;
  exact?: boolean;
  component: () => Promise<{ default: Component }>;
}
