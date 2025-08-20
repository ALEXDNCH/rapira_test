import { defineStore } from "pinia";
import { computed, ref } from "vue";
import data from "@/data/gallery.json";
import type { IBlogItem, TCategoryId } from "@/types/blog";
import { debounce } from "@/utils/debounce";

export const usePostsStore = defineStore("posts", () => {
  const items = ref<IBlogItem[]>(data as IBlogItem[]);
  const query = ref<string>("");
  const selectedCategories = ref<TCategoryId[]>([]);

  const filtered = computed<IBlogItem[]>(() => {
    const q: string = query.value.trim().toLowerCase();
    const cats: string[] = selectedCategories.value;
    return items.value.filter((p) => {
      const byTitle = !q || p.title.toLowerCase().includes(q);

      const byCats = cats.length === 0 || cats.every((c) => p.categories.includes(c));
      return byTitle && byCats;
    });
  });

  function setQuery(v: string): void {
    query.value = v;
  }
  const setQueryDebounced = debounce<[string]>(setQuery, 300);

  return {
    items,
    query,
    selectedCategories,
    filtered,
    setQuery,
    setQueryDebounced,
  };
});
