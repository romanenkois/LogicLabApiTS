import { LessonContent, ProgramingLanguage } from '@types';

export interface Course {
  id: string;
  href: string;
  name: string;
  title: string;
  programingLanguage: ProgramingLanguage;
  description: string;
}

// rn in a moment, DTO of course is the same
// used to be future proof
export interface CourseSimple extends Course {};

export interface Lesson {
  id: string;
  href: string;
  courseHref: string;
  category?: string;
  // name is only present if category is present
  categoryName?: string & (undefined extends Lesson['category'] ? never : unknown);
  position: number;
  name: string;
  title: string;
  description: string;
  content: Array<LessonContent>;
}

export type LessonSimple = Omit<Lesson, 'content'>;
