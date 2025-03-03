import { LessonContentSchema } from "@schemas";

export interface LessonSchema {
  id: string;
  href: string;
  name: string;
  title: string;
  description: string;
  content: Array<LessonContentSchema>;
}