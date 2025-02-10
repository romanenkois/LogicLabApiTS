import { ProgramingLanguage } from '@types';

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
  position: number;
  name: string;
  title: string;
  description: string;
  content: Array<LessonContent>;
}

export type LessonSimple = Omit<Lesson, 'content'>;

export type LessonContent =
  | PlainTextBlock
  | ListBlock
  | CodeSampleBlock;

interface LessonBlock {
  type: string;
  object: object;
}

interface PlainTextBlock extends LessonBlock {
  type: 'plain-text';
  object: {
    title?: string;
    text: string;
  }
}

interface ListBlock extends LessonBlock {
  type: 'list';
  object: {
    title?: string;
    items: Array<string>;
  }
}

interface CodeSampleBlock extends LessonBlock {
  type: 'code-sample';
  object: {
    title?: string;
    programmingLanguage?: ProgramingLanguage;
    code: string;
    codeOutput?: string;
  }
}
