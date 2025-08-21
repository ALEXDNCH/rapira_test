import type { TCategoryId } from "@/data/categories.ts";

export interface IBlogComment {
  name: string;
  surname: string;
  text: string;
  datetime: string;
  avatarUrl?: string;
}

export interface IBlogItem {
  id: number;
  title: string;
  description: string;
  date: string;
  readTimeMin: number;
  categories: TCategoryId[];
  image: string;
  comments: IBlogComment[];
}
