import { LessonSchema } from "@schemas";

export type Lesson = {
  id: LessonSchema['_id'];
  href: LessonSchema['href'];
  name: LessonSchema['name'];
  title: LessonSchema['title'];
  description: LessonSchema['description'];
  content: LessonSchema['content'];
}

export interface LessonSimple extends Omit<Lesson, 'content'> {};
