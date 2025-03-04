import { LessonContentSchema } from "@schemas";

export interface LessonSchema {
  _id: string;
  href: string;
  name: string;
  title: string;
  description: string;
  content: Array<LessonContentSchema>;
}

export interface LessonSimpleSchema {
  href: string;
  category?: string;
  categoryName?: string;
  position: number;
}