export const CATEGORIES = [
  { id: "city", title: "Город" },
  { id: "nature", title: "Природа" },
  { id: "people", title: "Люди" },
  { id: "animals", title: "Животные" },
  { id: "food", title: "Еда" },
  { id: "drinks", title: "Напитки" },
  { id: "architecture", title: "Архитектура" },
  { id: "art", title: "Искусство" },
] as const satisfies readonly { id: string; title: string }[];

export type TCategory = (typeof CATEGORIES)[number];
export type TCategoryId = TCategory["id"];

export const CATEGORY_TITLE: Record<TCategoryId, TCategory["title"]> = (() => {
  const map = {} as Record<TCategoryId, TCategory["title"]>;
  for (const c of CATEGORIES) map[c.id] = c.title;
  return map;
})();
