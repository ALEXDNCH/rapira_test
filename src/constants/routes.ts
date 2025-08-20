import type { IMainPage } from "@/types/routes";

export const PAGES = [
  {
    name: "home",
    path: "",
    label: "Главная",
    exact: true,
    component: () => import("@/views/HomeView.vue"),
  },
  {
    name: "blog",
    path: "blog",
    label: "Блог",
    component: () => import("@/views/BlogView.vue"),
  },
] as const satisfies readonly IMainPage[];

type RouteName = (typeof MAIN_PAGES)[number]["name"];

export const route = (name: RouteName) => ({ name });

export const MAIN_PAGES: readonly IMainPage[] = PAGES;
