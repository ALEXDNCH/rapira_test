import type {ICategory} from "@/types/blog";

export const CATEGORIES = [
  {id: "city", title: "Город"},
  {id: "nature", title: "Природа"},
  {id: "people", title: "Люди"},
  {id: "animals", title: "Животные"},
  {id: "food", title: "Еда"},
  {id: "drinks", title: "Напитки"},
  {id: "architecture", title: "Архитектура"},
  {id: "art", title: "Искусство"},
] as const satisfies readonly ICategory[];
