export interface ICategory {
  id: string;
  title: string;
}

export interface IBlogComment {
  name: string;
  surname: string;
  text: string;
  datetime: string;
}

export interface IBlogItem {
  id: number;
  title: string;
  description: string;
  date: string;
  readTimeMin: number;
  categories: string[];
  image: string;
  comments: IBlogComment[];
}

export type TCategoryId = IBlogItem["categories"][number];
