import { defineStore } from "pinia";
import { computed, ref } from "vue";
import data from "@/data/gallery.json";
import type { IBlogItem } from "@/types/blog";
import { debounce } from "@/utils/debounce";
import type { TCategoryId } from "@/data/categories.ts";

export const usePostsStore = defineStore("posts", () => {
  const items = ref<IBlogItem[]>(data as IBlogItem[]);
  const query = ref<string>("");
  const selectedCategories = ref<TCategoryId[]>([]);

  const filtered = computed<IBlogItem[]>(() => {
    const q = query.value.trim().toLowerCase();
    const cats = selectedCategories.value;
    return items.value.filter((p) => {
      const byTitle = !q || p.title.toLowerCase().includes(q);

      // const byCats = cats.length === 0 || cats.every((c) => p.categories.includes(c));

      const byCats = cats.length === 0 || p.categories.some((c) => cats.includes(c));

      return byTitle && byCats;
    });
  });

  const total = computed(() => items.value.length);
  const totalFiltered = computed(() => filtered.value.length);
  const hasFilters = computed(
    () => query.value.trim() !== "" || selectedCategories.value.length > 0,
  );

  function setQuery(v: string): void {
    query.value = v;
  }
  const setQueryDebounced = debounce<[string]>(setQuery, 300);

  function toggleCategory(id: TCategoryId): void {
    selectedCategories.value = selectedCategories.value.includes(id)
      ? selectedCategories.value.filter((x) => x !== id)
      : [...selectedCategories.value, id];
  }

  function clearCategories(): void {
    selectedCategories.value = [];
  }

  return {
    items,
    query,
    selectedCategories,
    filtered,
    total,
    totalFiltered,
    hasFilters,
    setQuery,
    setQueryDebounced,
    toggleCategory,
    clearCategories,
  };
});
