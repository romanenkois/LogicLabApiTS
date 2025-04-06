import { Lesson } from '@types';

export type LessonDTO = {
  href: Lesson['href'];
  name: Lesson['name'];
  title: Lesson['title'];
  description: Lesson['description'];
  content: Lesson['content'];
}

export interface LessonSimpleDTO extends Omit<LessonDTO, 'content'> {};
