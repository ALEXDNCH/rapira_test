import { createRouter, createWebHistory } from "vue-router";
import { MAIN_PAGES } from "@/constants/routes";
const MainLayout = () => import("@/layouts/MainLayout.vue");

const routes = [
  {
    path: "/",
    component: MainLayout,
    children: MAIN_PAGES.map((p) => ({
      path: p.path,
      name: p.name,
      component: p.component,
      meta: { label: p.label, exact: !!p.exact },
    })),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
