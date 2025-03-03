import { LessonSchema } from "@schemas";

export interface Lesson extends LessonSchema {
  id: LessonSchema['id'];
  href: LessonSchema['href'];
  name: LessonSchema['name'];
  title: LessonSchema['title'];
  description: LessonSchema['description'];
  content: LessonSchema['content'];
}

export interface LessonSimple extends Omit<Lesson, 'content'> {};
